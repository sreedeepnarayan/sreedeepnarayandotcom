---
name: 🐛 Bug Report
about: Create a bug report to help improve the website
title: '[BUG] '
labels: ['type:bug', 'priority:p1-high']
assignees: ''
---

## Bug Description

### Summary
[Brief, clear description of the bug]

### Expected Behavior
[What you expected to happen]

### Actual Behavior
[What actually happened]

### Impact Assessment
**Severity**: [Critical/High/Medium/Low]
- **Critical**: Site is broken or unusable
- **High**: Major functionality is broken
- **Medium**: Minor functionality affected
- **Low**: Cosmetic or edge case issue

**User Impact**: [How many/which users are affected]

## Reproduction Steps

### Steps to Reproduce
1. [First step]
2. [Second step]
3. [Third step]
4. [See error/issue]

### Frequency
[How often does this occur? Always/Sometimes/Rarely]

### Conditions
- **Device Type**: [Desktop/Mobile/Tablet]
- **Operating System**: [Windows/macOS/iOS/Android/Linux]
- **Browser**: [Chrome/Firefox/Safari/Edge] Version: [version number]
- **Screen Size**: [if relevant - 1920x1080, mobile, etc.]
- **Network**: [WiFi/Mobile/Slow connection - if relevant]

## Environment Details

### Current Environment
- **URL**: [Where the bug occurs]
- **Page**: [Specific page or component]
- **User Type**: [Guest/Logged in/Admin - if applicable]
- **Time**: [When bug was first noticed]

### Browser Information
- **User Agent**: [Browser user agent string if available]
- **Console Errors**: [Any JavaScript errors in browser console]
- **Network Issues**: [Any failed network requests]

## Evidence

### Screenshots
[Attach screenshots showing the bug]

### Console Errors
```
[Paste any JavaScript console errors]
```

### Network Errors
```
[Paste any failed network requests from DevTools]
```

### Video Recording
[If applicable, link to screen recording showing the bug]

## Technical Details

### Component/File Affected
[Which component or file contains the bug]

### Error Messages
```
[Any specific error messages displayed to user]
```

### Stack Trace
```
[If available, include error stack trace]
```

### Related Code
```typescript
// If you can identify the problematic code
const buggyFunction = () => {
  // Code that might be causing the issue
}
```

## Workaround

### Temporary Solution
[Is there a way users can work around this issue?]

### Alternative Approach
[Any alternative way to achieve the intended functionality]

## Performance Impact

### SEO Impact
[Does this bug affect SEO performance or search indexing?]

### User Experience Impact
[How does this affect user experience and site usability?]

### Performance Metrics
[Does this impact page load times, Core Web Vitals, etc.?]

### Analytics Impact
[Does this affect tracking or analytics collection?]

## Additional Context

### Related Issues
- [Link to any related issues or bug reports]

### Recent Changes
[Any recent deployments or changes that might be related]

### User Reports
[Any user feedback or reports about this issue]

### Business Impact
[How does this bug affect business goals or user conversions?]

## Investigation Notes

### Initial Analysis
[Any initial investigation or hypothesis about the cause]

### Potential Causes
- [Possible cause 1]
- [Possible cause 2]
- [Possible cause 3]

### Areas to Investigate
- [Code area 1 to check]
- [Code area 2 to check]
- [External service to check]

## Fix Requirements

### Acceptance Criteria for Fix
- [ ] Bug no longer reproduces in original conditions
- [ ] Fix works across all supported browsers
- [ ] Fix works on mobile and desktop
- [ ] No new bugs introduced by the fix
- [ ] Performance is not negatively impacted
- [ ] SEO optimization maintained

### Testing Requirements
- [ ] Manual testing in affected browsers
- [ ] Mobile device testing
- [ ] Accessibility testing (if UI-related)
- [ ] Performance testing
- [ ] Cross-browser compatibility check

### Regression Testing
- [ ] Related functionality still works correctly
- [ ] No impact on other components
- [ ] User journey completion unaffected

## Priority Justification

### Why This Priority?
[Explanation of why this bug has the assigned priority level]

### Business Justification
[How fixing this bug supports business/personal website goals]

### User Impact Justification
[How this affects user experience and site effectiveness]

## Definition of Done

### Bug Resolution Criteria
- [ ] Root cause identified and documented
- [ ] Fix implemented and tested
- [ ] Fix deployed to production
- [ ] Bug no longer reproduces
- [ ] All acceptance criteria met

### Quality Assurance
- [ ] Code review completed
- [ ] Manual testing passed
- [ ] Automated tests updated (if applicable)
- [ ] Documentation updated (if needed)

### Communication
- [ ] Status communicated to stakeholders (if high priority)
- [ ] Post-mortem completed (if critical)
- [ ] Prevention measures identified (if systemic)

## Monitoring

### How to Verify Fix
[Steps to verify the bug is actually fixed]

### Monitoring Plan
[How to monitor to ensure bug doesn't reoccur]

### Success Metrics
[How to measure that the fix is successful]

---

**Reporter**: @[username]  
**Date Reported**: [Date]  
**Urgency**: [Immediate/This Sprint/Next Sprint/Backlog]  
**Related Epic/Story**: #[issue number if applicable]