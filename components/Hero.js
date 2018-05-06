import React from 'react'
import styled from 'styled-components'
import { color } from '../styles/GlobalStyles'

const SectionWrapper = styled.section`
  background-color: ${color.saltbox};
  display: flex;
  justify-content: center;
`

const TextWrapper = styled.div`
  background-color: ${color.white};
`

const LargeHeroTitle = styled.h1`
  font-size: 5em;
`

const TitleDescription = styled.h2`
  font-size: 3em;
`

const IconWrapper = styled.div`
  background-color: lightyellow;
  display: flex;
  justify-content: center;
`

const Icon = styled.i`
  cursor: pointer;
  padding: 5px;
  color: silver;
  &:hover {
    color: deeppink;
  }
`

const Hero = () => (
  <SectionWrapper>
    <TextWrapper>
      <LargeHeroTitle>Isabelle YIM</LargeHeroTitle>
      <TitleDescription>front end developer</TitleDescription>
      <IconWrapper>
        <Icon className="fab fa-instagram" />
        <Icon className="fab fa-github" />
        <Icon className="fab fa-linkedin" />
        <Icon className="fas fa-globe" />
        <Icon className="far fa-envelope" />
      </IconWrapper>
    </TextWrapper>
  </SectionWrapper>
)

export default Hero
