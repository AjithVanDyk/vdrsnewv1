import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all image files from public/Images
const imagesDir = path.join(__dirname, '../public/Images');
const srcDir = path.join(__dirname, '../src');

// Recursively get all files in a directory
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Get all image files
const allImageFiles = getAllFiles(imagesDir)
  .map(file => path.relative(imagesDir, file))
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.mp4'].includes(ext);
  })
  .map(file => file.replace(/\\/g, '/')); // Normalize paths

// Get all source files
const allSourceFiles = getAllFiles(srcDir)
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.ts', '.tsx', '.js', '.jsx', '.json'].includes(ext);
  });

// Read images.ts config
let imagesConfig = {};
try {
  const imagesConfigPath = path.join(srcDir, 'config/images.ts');
  const imagesConfigContent = fs.readFileSync(imagesConfigPath, 'utf-8');
  // Extract image paths from the config (simple regex match)
  const imagePathMatches = imagesConfigContent.match(/['"`]([^'"`]+\.(jpg|jpeg|png|gif|webp|svg|mp4))['"`]/gi);
  if (imagePathMatches) {
    imagePathMatches.forEach(match => {
      const cleanPath = match.replace(/['"`]/g, '').replace(/^\.\.\/public/, '').replace(/^\/Images\//, '');
      imagesConfig[cleanPath] = true;
    });
  }
} catch (error) {
  console.error('Error reading images.ts:', error);
}

// Check each image file
const unusedImages = [];
const usedImages = [];
const potentiallyUnused = [];

allImageFiles.forEach(imageFile => {
  const imageName = path.basename(imageFile);
  const imagePath = `/Images/${imageFile}`;
  const relativePath = `Images/${imageFile}`;
  
  let isUsed = false;
  let foundIn = [];

  // Check if in images.ts config
  if (imagesConfig[imageFile] || imagesConfig[relativePath] || imagesConfig[imagePath]) {
    isUsed = true;
    foundIn.push('images.ts config');
  }

  // Search in all source files
  allSourceFiles.forEach(sourceFile => {
    try {
      const content = fs.readFileSync(sourceFile, 'utf-8');
      
      // Check various patterns (case-insensitive for better matching)
      const lowerContent = content.toLowerCase();
      const lowerImageName = imageName.toLowerCase();
      const lowerImageFile = imageFile.toLowerCase();
      const lowerImagePath = imagePath.toLowerCase();
      const lowerRelativePath = relativePath.toLowerCase();
      
      if (lowerContent.includes(lowerImageName) || 
          lowerContent.includes(lowerImageFile) || 
          lowerContent.includes(lowerImagePath) ||
          lowerContent.includes(lowerRelativePath) ||
          lowerContent.includes(`images/${lowerImageName}`) ||
          lowerContent.includes(`/images/${lowerImageName}`)) {
        isUsed = true;
        foundIn.push(path.relative(srcDir, sourceFile));
      }
    } catch (error) {
      // Skip files that can't be read
    }
  });

  if (isUsed) {
    usedImages.push({ file: imageFile, foundIn });
  } else {
    // Check if it's a system file (like Thumbs.db) or hidden file
    if (imageName.toLowerCase() === 'thumbs.db' || 
        imageName.startsWith('.') || 
        imageName.toLowerCase().startsWith('desktop.ini') ||
        imageName.toLowerCase().startsWith('~$')) {
      // Skip system files
    } else {
      unusedImages.push(imageFile);
    }
  }
});

// Generate report
const report = `# Unused Images Report

Generated on: ${new Date().toISOString()}

## Summary

- **Total Images Found**: ${allImageFiles.length}
- **Used Images**: ${usedImages.length}
- **Unused Images**: ${unusedImages.length}
- **Potentially Unused**: ${potentiallyUnused.length}

## Unused Images

The following images were not found in the codebase:

${unusedImages.length > 0 ? unusedImages.map(img => `- \`${img}\``).join('\n') : '**No unused images found!**'}

## Notes

- This report checks for image references in:
  - \`src/config/images.ts\`
  - All TypeScript/JavaScript files in \`src/\`
  
- Images may still be used in:
  - HTML files (if any)
  - CSS files (background images)
  - External references
  - Dynamic imports
  
- **Recommendation**: Review each unused image before deletion to ensure it's not referenced dynamically or in external files.

## Used Images (Sample)

Showing first 20 used images:

${usedImages.slice(0, 20).map(img => `- \`${img.file}\` - Found in: ${img.foundIn.slice(0, 3).join(', ')}`).join('\n')}

${usedImages.length > 20 ? `\n... and ${usedImages.length - 20} more used images.` : ''}
`;

// Write report
const reportPath = path.join(__dirname, '../UNUSED_IMAGES_REPORT.md');
fs.writeFileSync(reportPath, report, 'utf-8');

console.log(`Report generated: ${reportPath}`);
console.log(`Total images: ${allImageFiles.length}`);
console.log(`Used: ${usedImages.length}`);
console.log(`Unused: ${unusedImages.length}`);

