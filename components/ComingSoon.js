import React from 'react'
import styled from 'styled-components'
import { TitleH1 } from '../styles/GlobalStyles'
import { blink } from '../styles/KeyFrames'

const Title = TitleH1.extend`
  color: #726e75;
  padding-top: 40vh;
  text-transform: uppercase;
  text-align: center;
  height: 50vh;
  animation: ${blink} 5s linear infinite;
`

const ComingSoon = () => <Title>Coming Soon</Title>

export default ComingSoon
