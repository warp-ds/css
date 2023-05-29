# CSS

This is the CSS package for WARP.

The package includes only resets for now.

## Usage

The CSS should be used directly from Eik. This is because we can alias releases by major versions.

We publish 2 versions of presets. The minified that can be used in production and non-minified that can be used in development.

```html
<link href="https://assets.finn.no/pkg/@warp-ds/css/v1/resets.min.css" rel="stylesheet" />
or
<link href="https://assets.finn.no/pkg/@warp-ds/css/v1/resets.css" rel="stylesheet" />
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