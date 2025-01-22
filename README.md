# WARP CSS

This is the CSS package for WARP.

The package includes resets, component classes and tokens.

## Usage

The CSS files should be used directly from Eik. This is because we can alias releases by major versions.


We publish 4 css files.

- Resets: `https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css`
- Components css: `https://assets.finn.no/pkg/@warp-ds/css/v2/components.css`
- Brand css with tokens: `https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/[BRANDNAME e.g. tori-fi].css`
- Data Vizualization tokens: `https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/dataviz.css`

## Usage (npm)

Only component classes are published to npm to be used in the component libraries.

```sh
pnpm add @warp-ds/css
```

### Component classes

The package includes component classes for components like:
- alert
- attention
- badge
- box
- breadcrumbs
- button
- card
- combobox
- expandable
- modal
- page indicator
- pagination
- pill
- select
- slider
- switch
- step
- tabs
- toast
- toggle

And shortcuts for covering use-cases from predecessors of Warp DS, such as:
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

Run `pnpm build` to generate brand CSS and dataviz CSS files containing CSS variables which refer to tokens used in Warp.

The majority of Warp tokens generated upon build are imported from Figma and initially processed using a library called Style Dictionary in the [@warp-ds/tokens repository](https://github.com/warp-ds/tokens/). The [output files](https://github.com/warp-ds/tokens/releases/tag/latest) are then made available for download by iOS, Android and web.

In the event when tokens are removed from Figma or for some reason are different for each brand, we can add them manually to the [tokens](/tokens) directory in the current repository (in a .yml format). We then use a tool called [Tokenizer](https://github.com/warp-ds/tokenizer) to build CSS variables from those files. The output is added to the final CSS files.


## How to contribute

If you'd like to contribute to `@warp-ds/css`, start by reviewing the [contributing guidelines](https://github.com/warp-ds/css/blob/main/CONTRIBUTING.md).