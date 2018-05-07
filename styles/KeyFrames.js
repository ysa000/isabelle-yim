import styled, { keyframes } from 'styled-components'
import { color } from './GlobalStyles'

export const blink = keyframes`
  0% {
    color: ${color.flint};
  }
  50% {
    color: ${color.mandy};
  }
  100% {
    color: ${color.flint};
  }
`

export const apparition = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
