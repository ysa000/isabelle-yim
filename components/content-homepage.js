import React, { Fragment } from 'react'
import styled from 'styled-components'
import { color } from '../styles/GlobalStyles'

const ProfileContent = styled.main`
  text-align: center;
  padding: 30px 0;
  color: ${color.outerSpace};
  font-family: 'Gothic A1', sans-serif;
  letter-spacing: 0.25em;
`

const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 100%;
  height: auto;
  margin-bottom: 40px;
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

const Profile = () => (
  <ProfileContent>
    <ProfilePicture
      src="http://placekitten.com/g/200/200"
      alt="Isabelle Yim profile picture"
    />
    <ProfileName>Isabelle Yim</ProfileName>
    <ProfileTitle>Front End Developer</ProfileTitle>
  </ProfileContent>
)

export default Profile
