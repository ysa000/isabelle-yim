import React from 'react'
import styled from 'styled-components'
import { color } from '../styles/GlobalStyles'
import { apparition } from '../styles/KeyFrames'

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
`

const TextWrapper = styled.div`
  padding: 15em 0;
  color: ${color.outerSpace};
`

const LargeHeroTitle = styled.h1`
  font-size: 5.5em;
  font-family: 'Gothic A1', sans-serif;
  font-weight: 300;
  letter-spacing: 3px;
  opacity: 0;
  animation: ${apparition} 1.5s ease-in 1;
  animation-delay: 0.7s;
  animation-fill-mode: forwards;
`

const TitleDescription = styled.h2`
  display: flex;
  justify-content: flex-end;
  font-size: 2em;
  letter-spacing: 1px;
  font-style: italic;
  opacity: 0;
  animation: ${apparition} 1.25s ease-in 1;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 2em;
  opacity: 0;
  animation: ${apparition} 1s ease-in 1;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
`

const Icon = styled.i`
  cursor: pointer;
  padding: 5px;
  font-size: 1.2em;
  color: ${color.mandy};
  &:hover {
    color: ${color.flint};
  }
`

const Hero = () => (
  <SectionWrapper>
    <TextWrapper>
      <LargeHeroTitle>Isabelle Yim</LargeHeroTitle>
      <TitleDescription>Front End Developer</TitleDescription>
      <IconWrapper>
        <Icon className="fab fa-github" />
        <Icon className="fab fa-linkedin" />
        <Icon className="fab fa-instagram" />
        <Icon className="fas fa-globe" />
        <Icon className="far fa-envelope" />
      </IconWrapper>
    </TextWrapper>
  </SectionWrapper>
)

export default Hero
