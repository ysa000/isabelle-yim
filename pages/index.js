import React from 'react'
import styled from 'styled-components'
import { color } from '../styles/GlobalStyles'
import Screensize from '../styles/MediaQueries'
import Layout from '../components/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const ProfileContent = styled.main`
  text-align: center;
  padding: 30px 0;
  color: ${color.outerSpace};
  font-family: 'Gothic A1', sans-serif;
  letter-spacing: 0.25em;
  @media (min-width: 768px) {
    min-width: auto;
  }
`

const ProfilePicture = styled.img`
  border-radius: 2px;
  max-width: 150px;
  height: auto;
  margin-bottom: 40px;
  ${Screensize.desktop} {
    max-width: 250px;
  }
`

const ProfileName = styled.h1`
  font-size: 1.5em;
  letter-spacing: 7px;
  text-transform: uppercase;
  padding-bottom: 30px;
`

const ProfileTitle = styled.h2`
  font-size: 0.8em;
  text-transform: uppercase;
`

const Index = () => (
  <ProfileContent>
    <ProfilePicture
      src="/static/IMG_1172.jpg"
      alt="Isabelle Yim profile picture"
    />
    <ProfileName>Isabelle Yim</ProfileName>
    <ProfileTitle>Front End Developer</ProfileTitle>
  </ProfileContent>
)

export default Index
