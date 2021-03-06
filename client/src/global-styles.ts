import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    font-size: 16px;
    font-family: 'Mont';

    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  p {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
  }

  @font-face {
    font-family: 'Mont';
    src: url('/fonts/Mont/Mont-Regular.eot');
    src: url('/fonts/Mont/Mont-Regular.woff2') format('woff2'),
      url('/fonts/Mont/Mont-Regular.woff') format('woff'),
      url('/fonts/Mont/Mont-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Mont SemiBold';
    src: url('/fonts/Mont/Mont-SemiBold.eot');
    src: url('/fonts/Mont/Mont-SemiBold.woff2') format('woff2'),
      url('/fonts/Mont/Mont-SemiBold.woff') format('woff'),
      url('/fonts/Mont/Mont-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Mont Bold';
    src: url('/fonts/Mont/Mont-Bold.eot');
    src: url('/fonts/Mont/Mont-Bold.woff2') format('woff2'),
      url('/fonts/Mont/Mont-Bold.woff') format('woff'),
      url('/fonts/Mont/Mont-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat Alternates';
    src: url('/fonts/MontserratAlternates/MontserratAlternates-Regular.otf');
    src: url('/fonts/MontserratAlternates/MontserratAlternates-Regular.ttf')
      format('truetype');
  }

  @font-face {
    font-family: 'Montserrat Alternates SemiBold';
    src: url('/fonts/MontserratAlternates/MontserratAlternates-SemiBold.otf');
    src: url('/fonts/MontserratAlternates/MontserratAlternates-SemiBold.ttf')
      format('truetype');
  }

  @font-face {
    font-family: 'Montserrat Alternates Bold';
    src: url('/fonts/MontserratAlternates/MontserratAlternates-Bold.otf');
    src: url('/fonts/MontserratAlternates/MontserratAlternates-Bold.ttf')
      format('truetype');
  }
`
