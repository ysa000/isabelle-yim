import styled from 'styled-components'
import ScreenSize from './MediaQueries'

// font-family: 'Noto Sans', sans-serif;
// font-family: 'Gothic A1', sans-serif;
// font-family: 'Nova Mono', monospace;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

// COLORS

export const color = {
  white: '#FFFFFF',
  quarterSpanishWhite: '#f8f4e3',
  outerSpace: '#31393C',
  taupeGrey: '#898493',
  flint: '#706c61',
  bonJour: '#dbd9db',
  mandy: '#e5446d',
  cerisePink: '#EA3788',
  salmon: '#ff8966',
  sizzlingRed: '#F52F57',
}

export const Content = styled.p`
  line-height: 24px;
  padding: 15px 30px;
  line-height: 1.7em;
  @media ${ScreenSize.desktop} {
    padding: 15px 80px;
  }
  color: ${color.taupeGrey};
`
