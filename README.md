# WARP CSS

This is the CSS package for WARP.

The package includes resets, component classes and tokens.

## Usage

The CSS files should be used directly from Eik. This is because we can alias releases by major versions.


We publish 3 css files.

- Resets <link href="https://assets.finn.no/pkg/@warp-ds/css/[VERSION]/resets.css" rel="stylesheet" />
- Components css <link href="https://assets.finn.no/pkg/@warp-ds/css/[VERSION]/components.css" rel="stylesheet" />
- Brand css with tokens <link href="https://assets.finn.no/pkg/@warp-ds/css/[VERSION]/tokens/[BRANDNAME e.g. tori-fi].css" rel="stylesheet" />  

## Usage (npm)

Only component classes are published to npm to be used in the component libraries.

```sh
pnpm install @warp-ds/css
```

### Component classes

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

And shortcuts, such as:
- button
- button--secondary
- button--default
- button--small
- button--link
- button--primary
- button--cta
- button--pill
- button--utility
- button--utility-flat
- button--destructive
- button--destructive-flat
- button--flat


### Tokens

Creates brand-css files from tokens. 

Uses the [Tokenizer](https://github.com/warp-ds/tokenizer) to build css vars. The output 
is css files, one for each support brand. These CSS files are what's actually holding the theme.


#### Usage of tokens

If you have new components to add tokens to (if you only want to update existing tokens proceed to step 2):

1. Under applicable brand create a new yml file and preferably name it the same as the new component(e.g. button.yml if it is a button component)
2. Update tokens needed.
3. Push your changes.
4. The CSS files for each brand will be built and published to Eik. Please find your release [here](https://github.com/warp-ds/css/actions/workflows/release.yml) and search for the css urls which were published under `Eik login and publish` step.
! Be aware that it takes some time before we update the aliased version on Eik so if you need to test your changes immediately use the full version and not an alias.


## How to contribute

If you'd like to contribute to `@warp-ds/css`, start by reviewing the [contributing guidelines](https://github.com/warp-ds/css/blob/main/CONTRIBUTING.md).