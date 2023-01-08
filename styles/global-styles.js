import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`

// COLORS
export const color = {
  white: '#FFFFFF',
  quarterSpanishWhite: '#f8f4e3',
  ghostWhite: '#F0EFF4',
  cultured: '#f8f8f8',
  raisinBlack: '#1d1e2c',
  outerSpace: '#31393C',
  blackCoral: '#59656f',
  taupeGrey: '#898493',
  flint: '#706c61',
  bonJour: '#dbd9db',
  mandy: '#e5446d',
  cerisePink: '#EA3788',
  salmon: '#ff8966',
  sizzlingRed: '#F52F57',
  nyanza: '#f3ffe1',
}

// AVAILABLE FONTS

// font-family: 'Noto Sans', sans-serif;
// font-family: 'Gothic A1', sans-serif;
// font-family: 'Nova Mono', monospace;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Roboto', sans-serif;
