import styled, { keyframes } from 'styled-components'
import { color } from './GlobalStyles'

export const blink = keyframes`
  0% {
    color: ${color.saltbox};
  }
  50% {
    color: ${color.deeppink};
  }
  100% {
    color: ${color.saltbox};
  }
`
