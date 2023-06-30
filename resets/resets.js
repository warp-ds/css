export const resets = `
/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

/*
1. Base font size.
*/

html {
  font-size: 62.5%; /* 1 */ 
}

/*
1. Remove the margin in all browsers.
2. Base background color.
3. Always stretch body to fill the width, this makes the behaviour of the scrollbar a little nicer in some cases.
4. Always show Scrollbar to prevent content jumping in certain situations (dynamic loading etc).
*/

body {
  margin: 0; /* 1 */
  background-color: var(--w-s-color-background); /* 2 */
  min-height: 100%; /* 3 */
  overflow-y: scroll; /* 4 */
}

/*
1. Prevent adjustments of font size after orientation changes in iOS.
2-3. Use a more readable tab size.
4. Use transparent color of the highlight that appears over an element while it's being tapped
5. Base font-family.
6. Base font size.
7. Base line height.
8. Base text color.
*/

body, :host {
  -webkit-text-size-adjust: 100%; /* 1 */
  -moz-tab-size: 4; /* 2 */
  tab-size: 4; /* 3 */
  -webkit-tap-highlight-color: transparent; /* 4 */
  font-family: var(--w-font-family); /* 5 */
  font-size: var(--w-font-size-m); /* 6 */ 
  line-height: var(--w-line-height-m); /* 7 */
  color: var(--w-s-color-text); /* 8 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 700;
}

/*
Reset links.
*/

a {
  cursor: pointer;
  text-decoration: none;
  color: var(--w-s-color-text-link);
}

a:hover,
a:focus,
a:active {
  text-decoration: var(--w-decoration-text-link);
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: 700;
}

/*
1. Use the user's configured 'mono' font family by default.
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional ':invalid' styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements 'display: block' by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add 'vertical-align: middle' to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

h1  {
  font-size: var(--w-font-size-xxl);
  line-height:var(--w-line-height-xxl);
}

h2  {
  font-size:var(--w-font-size-xl);
  line-height:var(--w-line-height-xl);
}

h3  {
  font-size:var(--w-font-size-l);
  line-height:var(--w-line-height-l);
}

h4  {
  font-size:var(--w-font-size-m);
  line-height:var(--w-line-height-m);
}

h5  {
  font-size:var(--w-font-size-s);
  line-height:var(--w-line-height-s);
}

/*
Base styles from Fabric below, migrated from https://github.com/fabric-ds/css/blob/next/src/base.css
*/

dt,
dd {
  margin: 0 16px;
}

h1,
h2,
h3,
h4,
h5,
ul,
ol,
dl,
p,
blockquote {
  margin: 0 0 8px 0;
}

/* Used to be part of normalize.css */
[hidden] {
  display: none !important;
}

/* tabindex=-1 are often used on skiplink targets, this ensures the outline is only visible when it should */
[tabindex="-1"]:focus:not(:focus-visible) {
  outline: none;
}

/* fieldset + legend tries to place the legend on the fieldset's "line", we need to override this to get sane behavior */
legend {
  display: table;
  float: left;
  margin: 0;
  padding: 0;
  width: 100%;
}

legend + * {
  clear: both;
}

fieldset {
  border: 0;
  padding: 0.01em 0 0 0;
  margin: 0;
  min-width: 0;
}

body:not(:-moz-handler-blocked) fieldset {
  display: table-cell;
}

  `;