---
name: Template for component classes cleanup
about: Part of the "Component classes cleanup" milestone
title: 'fix(<componentName>): clean up classes'
labels: internal fixes
assignees: ''

---

<!--- Replace `<componentName>` with the actual component name in the title before submitting. --->
<!--- Select WARP under the Project section --->
<!--- Select "Component classes cleanup" under the Milestone section --->

### Description
Ensure no classes styling the same CSS properties are being set on the same HTML element.

### Development
Branch out from a feature branch called "component-classes-cleanup" in each repository. PRs should preferably be squashed/merged with that branch.

### Testing
Test and make respective updates in [warp-ds/react](https://github.com/warp-ds/react), [warp-ds/vue](https://github.com/warp-ds/vue) and [warp-ds/elements](https://github.com/warp-ds/elements).
