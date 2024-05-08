---
name: Component classes cleanup template
about: Part of the "Component classes cleanup" milestone
title: 'fix(<!--- componentName --->): clean up classes'
labels: internal fixes
assignees: ''

---

### Description
Fix classes for <!--- componentName ---> components to ensure no classes styling the same CSS properties are being set on the same HTML element.

### Development
Branch out from a feature branch called "component-classes-cleanup" in each repository. PRs should preferably be squashed/merged with that branch.

### Testing
Test and make respective updates in @warp-ds/react, @warp-ds/vue and @warp-ds/elements repository.
