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
