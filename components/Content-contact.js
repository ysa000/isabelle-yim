import React, { Fragment } from 'react'
import styled from 'styled-components'
import { color } from '../styles/GlobalStyles'

const Content = styled.p`
  line-height: 24px;
  padding: 30px 130px;
  color: ${color.outerSpace};
`

const About = () => (
  <Fragment>
    <Content>Feel free to get in touch</Content>
    <Content>I'll be happy to chat</Content>
    <Content>You can DM me or ping me</Content>
  </Fragment>
)

export default About
