# Warp component classes

This is the core package for Warp component classes.

The package includes component classes, such as:
- attention
- pageIndicator
- ribbon
- slider
- modal
- box
- pill
- step
- card
- switchToggle
- toaster
- toast
- tabs
- tab
- expandable
- suffix
- prefix


## Usage (npm)

```sh
pnpm install @warp-ds/component-classes
```

## Development

Install dependencies:

```sh
pnpm install
```

### Releases

This project uses
[Semantic Release](https://github.com/semantic-release/semantic-release) to
automate package publishing when making changes to the `main` or `alpha` branch.

It is recommended to branch off the `alpha` branch. Make sure `alpha` branch is 
updated with the latest `main`. 
Follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
when making changes. When your changes are ready for pull request, this should be 
opened against the `alpha` branch.


Please note that the version published will depend on your commit message
structure. You can use [commitizen](https://github.com/commitizen/cz-cli) to help
follow this structure:

```
npm install -g commitizen
```

When installed, you should be able to type `cz` or `git cz` in your terminal to
commit your changes (replacing `git commit`).

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)