import { createGlobalStyle } from "styled-components"
import "normalize.css/normalize.css"

import Fonts from "./Fonts"
import device from "./MediaQueries"

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'SuisseIntl';
		src: url(${Fonts.SuisseIntlRegularEOT}); /* IE9 Compat Modes */
		src: url(${
      Fonts.SuisseIntlRegularEOTIE
    }) format('embedded-opentype'), /* IE6-IE8 */
			url(${
        Fonts.SuisseIntlRegularWOFF2
      }) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.SuisseIntlRegularWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.SuisseIntlRegularTTF})  format('truetype');
		font-style: normal;
		font-weight: normal;
	}

	@font-face {
		font-family: 'SuisseIntl';
		src: url(${Fonts.SuisseIntlItalicEOT}); /* IE9 Compat Modes */
		src: url(${
      Fonts.SuisseIntlItalicEOTIE
    }) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.SuisseIntlItalicWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.SuisseIntlItalicWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.SuisseIntlItalicTTF})  format('truetype');
		font-style: italic;
		font-weight: normal;
	}

		@font-face {
		font-family: 'SuisseIntl';
		src: url(${Fonts.SuisseIntlMediumEOT}); /* IE9 Compat Modes */
		src: url(${
      Fonts.SuisseIntlMediumEOTIE
    }) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.SuisseIntlMediumWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.SuisseIntlMediumWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.SuisseIntlMediumTTF})  format('truetype');
		font-style: normal;
		font-weight: 500;
	}


	@font-face {
		font-family: 'SuisseIntl';
		src: url(${Fonts.SuisseIntlBoldEOT}); /* IE9 Compat Modes */
		src: url(${
      Fonts.SuisseIntlBoldEOTIE
    }) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.SuisseIntlBoldWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.SuisseIntlBoldWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.SuisseIntlBoldTTF})  format('truetype');
		font-style: normal;
		font-weight: bold;
	}

	@font-face {
		font-family: 'SuisseIntl';
		src: url(${Fonts.SuisseIntlBlackEOT}); /* IE9 Compat Modes */
		src: url(${
      Fonts.SuisseIntlBlackEOTIE
    }) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.SuisseIntlBlackWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.SuisseIntlBlackWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.SuisseIntlBlackTTF})  format('truetype');
		font-style: normal;
		font-weight: 900;
	}

	html {
		box-sizing: border-box;
		overflow-y: scroll;

		font-family: 'SuisseIntl', Arial, Helvetica, sans-serif;
		font-size: 62.5%;
		/* BETTER FONT SMOOTHING - https://gist.github.com/hsleonis/55712b0eafc9b25f1944 */
		font-variant-ligatures: none;
		-webkit-font-variant-ligatures: none;
		text-rendering: optimizeLegibility;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: antialiased;
		-webkit-font-smoothing: antialiased;
		text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;

		@media ${device.MXsm} {
			&.scroll--fixed {
				overflow: hidden;
			}
		}
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	::-webkit-scrollbar
	{
		width: 10px;
		background-color: #f2f4f8;
	}

	::-webkit-scrollbar-thumb
	{
		background-color: #141213;
		border: 2px solid #262626;
	}

	a {
		color: ${props => props.theme.primary};
		text-decoration: none;

		&:active,
		&:focus,
		&:hover {
			text-decoration: underline;
		}
	}

	body {
		overflow-x: hidden;
		scroll-behavior: smooth;

		background: ${props => props.theme.white};
		color: ${props => props.theme.black};
		font-size: 1.6rem;
		line-height: 1.5;
	}

	main {
		flex: 1;
		margin: 0 auto;
		max-width: 1506px;
		padding: 0 15px;
		width: 100%;

		@media ${device.xs} {
			padding: 0 30px;
		}

		/* Fix anchor scroll positioning */
		[id]::before {
			display: block;
			content: '';
			margin-top: -4rem;
			height: 4rem;
		}
	}

	.wrapper {
		@supports (display: flex) {
			display: flex;
			flex-direction: column;
			min-height: 100vh;
		}
	}

	/* Common base styles for the site */
	img, svg, video {
		max-width: 100%;
	}

	video {
		display: block;
		width: 100%;
	}

	button,
	input[type="submit"] {
		display: inline-flex;
		padding: 16px 24px;

		background-color: ${props => props.theme.primary};
		border: none;
		box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
		color: ${props => props.theme.white};
		cursor: pointer;
		font-weight: 700;
		line-height: 1;
		outline: none;
		text-decoration: none;
		transition: all 0.15s ease;
		white-space: nowrap;

		&:hover {
			transform: translateY(-1px);
		}

		&:focus,
		&:hover {
			box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
		}
	}


	h1, h2, h3, h4, h5, h6 {
		line-height: 1.25;
		margin: 16px 0;

		font-weight: 700;
		text-transform: capitalize;
	}

	h1,
	.h1 {
		margin-bottom: 24px;
		margin-top: 24px;

		font-size: 32px;
		font-weight: 700;
		line-height: 1.1;

		@media ${device.lg} {
			font-size: 40px;
		}
	}

	h2,
	.h2 {
		font-size: 30px;

		@media ${device.lg} {
			font-size: 32px;
		}
	}

	h3,
	.h3 {
		font-size: 24px;

		@media ${device.lg} {
			font-size: 30px;
		}
	}

	h4,
	.h4 {
		font-size: 20px;

		@media ${device.lg} {
			font-size: 24px;
		}
	}

	h5,
	.h5 {
		font-size: 18px;

		@media ${device.lg} {
			font-size: 20px;
		}
	}

	h6,
	.h6 {
		font-size: 16px;

		@media ${device.lg} {
			font-size: 18px;
		}
	}

	code,
	pre {
		background: none;
		color: ${props => props.theme.white};
		font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
		font-size: 1em;
		hyphens: none;
		line-height: 1.5;
		tab-size: 4;
		text-align: left;
		text-shadow: 0 -0.1em 0.2em ${props => props.theme.black};
		white-space: pre;
		word-break: normal;
		word-spacing: normal;
		word-wrap: normal;

		::-webkit-scrollbar
		{
			background-color: ${props => props.theme.grey300};
		}

		::-webkit-scrollbar-thumb
		{
			background-color: ${props => props.theme.grey600};
			border: 2px solid ${props => props.theme.grey600};
		}

		a {
			color: inherit;
		}
	}

	@media print {
		code,
		pre {
			text-shadow: none;
		}
	}

	pre,
	:not(pre) > code {
		background: ${props => props.theme.black};
	}

	/* Code blocks */
	pre {
		padding: 1em;
		margin: 32px 0;
		overflow: auto;
		border: 0.3em solid ${props => props.theme.black};
		border-radius: 0.5em;
		box-shadow: 1px 1px 0.5em black inset;
	}

	/* Inline code */
	:not(pre) > code {
		padding: 0.15em 0.2em 0.05em;
		border-radius: 0.3em;
		border: 0.13em solid hsl(0, 0%, 11%);
		box-shadow: none;
		white-space: normal;
	}

	/* Slick Slider */
	.slick-dots li button {
		box-shadow: none !important;
	}

	.slick-arrow {
		display: none !important;
	}

	.mailtoui-button-copy {
		align-items: center;

		> * {
			top: auto;
		}
	}

	.wp-block-image {
		text-align: center;

		img {
			margin: 0 auto;
		}
	}

	.wp-block-embed-youtube {
		.wp-block-embed__wrapper {
			height: 0;
			padding-top: 56.25%;
			position: relative;

			iframe {
				height: 100%;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;
			}
		}
	}
`

export default GlobalStyle
