# Contributing to sreedeepnarayan.com

## Development Philosophy

This project follows a **spec-driven development** approach optimized for AI-assisted coding with Claude Code. Every feature starts with a detailed specification before implementation.

## Development Workflow

### 1. Spec-First Development

Before writing any code:

1. **Write Detailed Specification**
   - Component requirements
   - User interactions
   - Technical constraints
   - SEO considerations
   - Performance requirements
   - Accessibility needs

2. **Example Spec Format:**
   ```markdown
   ## Component: Hero Section
   
   ### Requirements
   - Full viewport height on desktop
   - Animated text reveal on load
   - Scroll indicator with bounce animation
   - Mobile-optimized layout
   
   ### Interactions
   - Text slides up from bottom with fade (500ms)
   - CTA buttons have hover lift effect
   - Scroll indicator disappears after first scroll
   
   ### Technical
   - Use Framer Motion for animations
   - Semantic HTML with proper heading hierarchy
   - Meta description integration
   ```

### 2. Issue-Based Development

1. **Create GitHub Issue**
   - Use appropriate template (Epic, Story, Task, Bug)
   - Link to project board
   - Add proper labels and assignees

2. **Move Through Board**
   - Backlog → Spec Review → Ready → In Progress → Review → Done

3. **Branch Strategy**
   - `main`: Production (auto-deploy)
   - `develop`: Integration branch
   - `feature/issue-number-description`: Feature branches
   - `hotfix/description`: Critical fixes

### 3. Claude Code Integration

#### For New Features:
```
I'm working on sreedeepnarayan.com, a Next.js personal website project.

Current Context:
- Issue #[X]: [Title]
- Spec: [Link to spec in issue or doc]
- Tech Stack: Next.js 14, TypeScript, Tailwind, Framer Motion
- Following PRD.md requirements

Task: [Specific implementation request]
Please follow the existing patterns in components/ directory.
```

#### For Bug Fixes:
```
Debugging sreedeepnarayan.com issue:
- Problem: [Description]
- Expected: [Expected behavior]
- Current: [Current behavior]
- File: [Specific file path]
- Context: [Relevant specifications]

Please analyze and provide fix following our patterns.
```

### 4. Quality Standards

#### Code Quality
- **TypeScript**: Strict mode enabled
- **ESLint**: No warnings allowed
- **Prettier**: Consistent formatting
- **Components**: Reusable, well-documented
- **Performance**: Lighthouse 90+ on all metrics

#### SEO Requirements
- **Semantic HTML**: Proper heading hierarchy
- **Meta Tags**: Dynamic per page
- **Schema**: Structured data where applicable
- **Alt Text**: Descriptive for all images
- **Performance**: <3s load time

#### Accessibility
- **WCAG 2.1 AA**: Minimum compliance
- **Keyboard Navigation**: All interactive elements
- **Focus States**: Visible and logical
- **Screen Readers**: Proper ARIA labels
- **Color Contrast**: 4.5:1 minimum

### 5. Testing Strategy

#### Manual Testing Checklist
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet (iPad, Android tablet)
- [ ] Lighthouse audit (all 90+)
- [ ] Accessibility audit
- [ ] SEO meta tags validation

#### Automated Testing (Future)
- Component tests with Jest + RTL
- E2E tests with Playwright
- Visual regression tests
- Performance monitoring

### 6. Deployment Process

#### Automatic Deployment
- **Push to `main`**: Auto-deploy to production
- **Push to `develop`**: Auto-deploy to staging
- **PR creation**: Deploy preview environment

#### Manual Checks Before Merge
- [ ] Lighthouse audit passed
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags correct
- [ ] No console errors
- [ ] Analytics tracking working

### 7. Content Guidelines

#### Professional Content
- **Tone**: Confident, data-driven, accessible
- **Format**: Clear headings, bullet points, metrics
- **SEO**: Target keywords naturally integrated
- **Links**: Internal linking where relevant

#### Creative Content
- **Tone**: Personal, authentic, storytelling
- **Format**: Narrative structure, engaging hooks
- **Images**: High-quality, optimized, with context
- **Attribution**: Proper credits where needed

#### Technical Content
- **Accuracy**: Verify all technical claims
- **Context**: Explain why, not just what
- **Examples**: Code snippets, diagrams, demos
- **Updates**: Keep current with latest practices

### 8. Performance Optimization

#### Image Optimization
- Use Next.js Image component
- WebP format with fallbacks
- Proper alt text and lazy loading
- Responsive image sizing

#### Bundle Optimization
- Dynamic imports for large components
- Tree shaking for unused code
- Bundle analysis on each build
- Critical CSS inlining

#### SEO Optimization
- Semantic HTML structure
- Meta tags and Open Graph
- Schema markup implementation
- Internal linking strategy

### 9. Documentation

#### Component Documentation
Each component should include:
- Purpose and usage
- Props interface with TypeScript
- Example implementation
- Accessibility considerations
- SEO implications

#### Feature Documentation
New features require:
- User-facing documentation
- Technical implementation notes
- SEO impact assessment
- Performance considerations

### 10. Issue Labels

#### Priority
- `priority:p0-critical`: Must fix/have
- `priority:p1-high`: Important for success
- `priority:p2-medium`: Nice to have
- `priority:p3-low`: Future consideration

#### Type
- `type:epic`: Major feature group
- `type:story`: User-facing feature
- `type:task`: Technical implementation
- `type:bug`: Issue to fix
- `type:enhancement`: Improvement

#### Area
- `area:foundation`: Core infrastructure
- `area:seo`: SEO-related work
- `area:animation`: Animations/interactions
- `area:content`: Content management
- `area:performance`: Speed/optimization

#### Phase
- `phase:1-foundation`: Infrastructure setup
- `phase:2-professional`: Portfolio content
- `phase:3-creative`: Creative showcase
- `phase:4-animation`: Polish and animations
- `phase:5-blog`: Blog integration
- `phase:6-iteration`: Ongoing improvements

### 11. Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking

# Testing (when available)
npm run test         # Run tests
npm run test:watch   # Watch mode
npm run test:e2e     # E2E tests

# Analysis
npm run analyze      # Bundle analysis
npm run lighthouse   # Performance audit
```

### 12. Getting Help

#### For Technical Issues
1. Check existing issues and documentation
2. Create detailed issue with reproduction steps
3. Include environment details
4. Add relevant labels and assign to project

#### For Content Questions
1. Review PRD.md for requirements
2. Check design system documentation
3. Consider user personas and goals
4. Ensure SEO optimization

#### For Strategic Decisions
1. Consider impact on core metrics
2. Evaluate against user personas
3. Assess technical complexity
4. Document decision rationale

---

**Remember**: This is a personal project that showcases professional capabilities. Every contribution should reflect high standards and attention to detail.