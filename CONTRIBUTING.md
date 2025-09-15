# Contributing to Van Dyk Recycling Solutions Website

Thank you for your interest in contributing to the Van Dyk Recycling Solutions website! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Types of Contributions
- **Bug Fixes** - Fix existing issues
- **Feature Additions** - Add new functionality
- **Documentation** - Improve documentation
- **Design Improvements** - Enhance UI/UX
- **Performance** - Optimize code and performance
- **Testing** - Add or improve tests

### Getting Started

1. **Fork the Repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/vdrsnewv1.git
   cd vdrsnewv1
   ```

2. **Set Up Development Environment**
   ```bash
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   ```

3. **Create a Branch**
   ```bash
   # Create feature branch
   git checkout -b feature/your-feature-name
   
   # Or bugfix branch
   git checkout -b bugfix/issue-description
   ```

## 📋 Development Guidelines

### Code Style

**TypeScript/React:**
- Use TypeScript for all new code
- Follow React best practices
- Use functional components with hooks
- Implement proper prop types

**Styling:**
- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing and colors
- Use CSS custom properties for theming

**File Organization:**
```
src/
├── components/          # Reusable components
├── pages/              # Page components
├── hooks/              # Custom hooks
├── utils/              # Utility functions
├── types/              # TypeScript types
└── constants/          # App constants
```

### Naming Conventions

**Files:**
- Components: `PascalCase.tsx` (e.g., `Navbar.tsx`)
- Hooks: `camelCase.ts` (e.g., `useLocalStorage.ts`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)

**Variables:**
- camelCase for variables and functions
- PascalCase for components and types
- UPPER_CASE for constants

**CSS Classes:**
- Use Tailwind utility classes
- Custom classes: `kebab-case`
- Component-specific: `component-name__element`

### Component Guidelines

**Component Structure:**
```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ComponentProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

const Component: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  onClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="component-class"
    >
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {onClick && (
        <button onClick={onClick}>
          Click me
        </button>
      )}
    </motion.div>
  );
};

export default Component;
```

### Animation Guidelines

**Framer Motion:**
- Use consistent animation durations
- Implement proper loading states
- Add hover and focus animations
- Ensure accessibility compliance

**Animation Timing:**
- Fast: 0.1s - 0.2s
- Normal: 0.3s - 0.5s
- Slow: 0.6s - 1s

## 🐛 Bug Reports

### Before Reporting
1. Check existing issues
2. Test on latest version
3. Verify it's not a configuration issue

### Bug Report Template
```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Screenshots**
If applicable, add screenshots.

**Environment**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 91]
- Version: [e.g., 1.0.0]

**Additional Context**
Any other context about the problem.
```

## ✨ Feature Requests

### Before Requesting
1. Check existing feature requests
2. Consider if it aligns with project goals
3. Think about implementation complexity

### Feature Request Template
```markdown
**Feature Description**
A clear description of the feature.

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this be implemented?

**Alternatives Considered**
Other solutions you've considered.

**Additional Context**
Any other context or screenshots.
```

## 🔧 Development Workflow

### 1. Planning
- Create issue for discussion
- Get approval from maintainers
- Break down into smaller tasks

### 2. Development
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# Test thoroughly
# Update documentation

# Commit changes
git add .
git commit -m "feat: add new feature description"
```

### 3. Testing
```bash
# Run linting
npm run lint

# Build project
npm run build

# Test in different browsers
# Test responsive design
# Test accessibility
```

### 4. Pull Request
```bash
# Push to your fork
git push origin feature/new-feature

# Create pull request on GitHub
# Fill out PR template
# Request review
```

### Commit Message Format
```
type(scope): description

feat(navbar): add mobile menu animation
fix(chatbot): resolve autocomplete issue
docs(readme): update installation instructions
style(buttons): improve hover effects
refactor(components): extract common logic
test(utils): add unit tests for helpers
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## 🧪 Testing Guidelines

### Manual Testing
- Test on multiple browsers
- Test responsive design
- Test accessibility features
- Test performance

### Automated Testing
```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Build verification
npm run build
```

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for functions
- Document complex logic
- Update README for new features
- Maintain changelog

### Component Documentation
```tsx
/**
 * Navbar component with responsive design and smooth animations
 * @param isOpen - Whether mobile menu is open
 * @param onToggle - Function to toggle mobile menu
 * @param className - Additional CSS classes
 */
interface NavbarProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}
```

## 🎨 Design Guidelines

### Brand Colors
- Primary Blue: `#1e40af`
- Dark Blue: `#1e3a8a`
- Accent Orange: `#f97316`
- Dark Orange: `#ea580c`

### Typography
- Headings: Inter font family
- Body: System font stack
- Responsive scaling

### Spacing
- Use Tailwind spacing scale
- Maintain consistent margins/padding
- Follow 8px grid system

### Components
- Glass morphism design
- Smooth animations
- Hover effects
- Focus states

## 🚀 Release Process

### Version Numbering
- Major: Breaking changes
- Minor: New features
- Patch: Bug fixes

### Release Checklist
- [ ] All tests pass
- [ ] Documentation updated
- [ ] Changelog updated
- [ ] Version bumped
- [ ] Tagged release
- [ ] Deployed to production

## 📞 Getting Help

### Resources
- GitHub Issues for bug reports
- GitHub Discussions for questions
- Code reviews for feedback
- Documentation for reference

### Contact
- **Email**: [Contact Information]
- **GitHub**: [GitHub Profile]
- **Website**: [Website URL]

## 📄 License

This project is proprietary software owned by Van Dyk Recycling Solutions. By contributing, you agree that your contributions will be licensed under the same terms.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

---

**Thank you for contributing to Van Dyk Recycling Solutions!**

*Last Updated: January 2025*
