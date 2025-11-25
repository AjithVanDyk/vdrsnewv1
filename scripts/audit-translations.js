import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src');
const translationsPath = path.join(srcDir, 'config/translations.ts');

// Common patterns that indicate hardcoded text
const hardcodedPatterns = [
  // String literals that might be user-facing text
  /['"`]([A-Z][^'"`]{10,})['"`]/g, // Capitalized strings longer than 10 chars
  />([A-Z][^<]{10,})</g, // Text between HTML tags
  /placeholder=['"`]([^'"`]+)['"`]/gi, // Placeholder attributes
  /title=['"`]([^'"`]+)['"`]/gi, // Title attributes
  /aria-label=['"`]([^'"`]+)['"`]/gi, // Aria labels
  /alt=['"`]([^'"`]+)['"`]/gi, // Alt text
];

// Skip these patterns (not user-facing)
const skipPatterns = [
  /^(className|id|key|src|href|to|path|route|component|import|export|const|let|var|function|return|if|else|for|while|switch|case|default|break|continue|try|catch|finally|throw|new|this|super|extends|implements|interface|type|enum|namespace|module|declare|as|is|in|of|typeof|instanceof|void|null|undefined|true|false|NaN|Infinity|console|window|document|process|require|module|exports|__dirname|__filename)$/i,
  /^[A-Z_][A-Z0-9_]*$/, // Constants
  /^\d+$/, // Numbers
  /^[a-z]+-[a-z-]+$/, // CSS classes
  /^#[0-9a-fA-F]{3,6}$/, // Colors
  /^(https?|ftp|mailto):/, // URLs
  /^\/[^/]/, // Paths
  /^\./, // Relative paths
  /^[a-z]+\.(jpg|png|gif|svg|webp|mp4|pdf)$/i, // File names
];

// Recursively get all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Skip node_modules and build directories
      if (!['node_modules', 'dist', 'build', '.git'].includes(file)) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
        arrayOfFiles.push(filePath);
      }
    }
  });

  return arrayOfFiles;
}

// Check if string should be skipped
function shouldSkip(str) {
  // Remove quotes
  str = str.replace(/^['"`]|['"`]$/g, '');
  
  // Check skip patterns
  for (const pattern of skipPatterns) {
    if (pattern.test(str)) {
      return true;
    }
  }
  
  // Skip if too short or all caps (likely constants)
  if (str.length < 3 || str.length > 200) return true;
  if (str === str.toUpperCase() && str.length > 5) return true;
  
  // Skip if contains code-like patterns
  if (/[{}();=<>[\]]/.test(str)) return true;
  if (/^(var|let|const|function|class|import|export|return|if|else|for|while)/.test(str)) return true;
  
  return false;
}

// Extract translation keys from translations.ts
function getTranslationKeys() {
  try {
    const content = fs.readFileSync(translationsPath, 'utf-8');
    const keys = new Set();
    
    // Extract all translation keys (simple pattern matching)
    const keyMatches = content.match(/\s+([a-zA-Z][a-zA-Z0-9]*):\s*['"`]/g);
    if (keyMatches) {
      keyMatches.forEach(match => {
        const key = match.match(/([a-zA-Z][a-zA-Z0-9]*):/)?.[1];
        if (key) keys.add(key);
      });
    }
    
    return keys;
  } catch (error) {
    console.error('Error reading translations.ts:', error);
    return new Set();
  }
}

// Main audit function
function auditTranslations() {
  const allFiles = getAllFiles(srcDir);
  const translationKeys = getTranslationKeys();
  const hardcodedStrings = new Map(); // file -> array of strings
  const potentialIssues = [];
  
  console.log(`\n🔍 Translation Audit\n`);
  console.log(`Scanning ${allFiles.length} files...\n`);
  
  allFiles.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      const relativePath = path.relative(srcDir, file);
      
      // Skip translations.ts itself
      if (relativePath.includes('translations.ts')) return;
      
      const foundStrings = new Set();
      
      // Check for hardcoded strings
      hardcodedPatterns.forEach(pattern => {
        let match;
        while ((match = pattern.exec(content)) !== null) {
          const str = match[1] || match[0];
          if (str && !shouldSkip(str)) {
            // Check if it looks like user-facing text
            const cleanStr = str.trim();
            if (cleanStr.length > 5 && /[a-zA-Z]/.test(cleanStr)) {
              foundStrings.add(cleanStr);
            }
          }
        }
      });
      
      // Check for strings that might need translation
      const stringLiteralPattern = /['"`]([^'"`]{15,})['"`]/g;
      let match;
      while ((match = stringLiteralPattern.exec(content)) !== null) {
        const str = match[1];
        if (!shouldSkip(str) && /[a-zA-Z]/.test(str)) {
          // Check if it's not already using t() function
          const beforeMatch = content.substring(Math.max(0, match.index - 50), match.index);
          const afterMatch = content.substring(match.index + match[0].length, Math.min(content.length, match.index + match[0].length + 50));
          
          if (!beforeMatch.includes('t(') && !beforeMatch.includes('useTranslation')) {
            foundStrings.add(str);
          }
        }
      }
      
      if (foundStrings.size > 0) {
        hardcodedStrings.set(relativePath, Array.from(foundStrings));
      }
    } catch (error) {
      // Skip files that can't be read
    }
  });
  
  // Generate report
  const report = `# Translation Audit Report

Generated on: ${new Date().toISOString()}

## Summary

- **Files Scanned**: ${allFiles.length}
- **Files with Potential Hardcoded Text**: ${hardcodedStrings.size}
- **Total Translation Keys Available**: ${translationKeys.size}

## Files with Potential Hardcoded Text

${Array.from(hardcodedStrings.entries()).map(([file, strings]) => {
  return `### ${file}

${strings.slice(0, 10).map(s => `- "${s.substring(0, 100)}${s.length > 100 ? '...' : ''}"`).join('\n')}
${strings.length > 10 ? `\n... and ${strings.length - 10} more strings in this file.` : ''}
`;
}).join('\n')}

## Recommendations

1. **Review each file** listed above for hardcoded user-facing text
2. **Replace hardcoded strings** with translation keys using \`t('key.path')\`
3. **Add missing translations** to \`src/config/translations.ts\` for all languages (en, fr, es)
4. **Common patterns to look for**:
   - Button labels
   - Form placeholders
   - Error messages
   - Success messages
   - Page titles and descriptions
   - Alt text for images
   - Aria labels

## Notes

- This is an automated analysis and may have false positives
- Some strings may be intentionally hardcoded (e.g., technical terms, brand names)
- Always review context before making changes
- Ensure all three languages (en, fr, es) have translations for new keys

---

**Next Steps:**
1. Review the files listed above
2. Identify strings that should be translated
3. Add translation keys to \`src/config/translations.ts\`
4. Replace hardcoded strings with \`t('key.path')\` calls
5. Verify translations exist for all languages
`;

  // Write report
  const reportPath = path.join(__dirname, '../TRANSLATION_AUDIT_REPORT.md');
  fs.writeFileSync(reportPath, report, 'utf-8');
  
  console.log(`✅ Report generated: ${reportPath}`);
  console.log(`\n📊 Summary:`);
  console.log(`   Files with potential issues: ${hardcodedStrings.size}`);
  console.log(`   Total strings found: ${Array.from(hardcodedStrings.values()).reduce((sum, arr) => sum + arr.length, 0)}`);
  console.log(`\n💡 Review the report for detailed findings.\n`);
}

// Run audit
auditTranslations();



