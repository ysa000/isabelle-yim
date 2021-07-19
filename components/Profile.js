import styled from 'styled-components'
import { color } from '../styles/global-styles'
import ScreenSize from '../styles/media-queries'
import Social from './Social'

const ProfileWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: ${color.raisinBlack};
  font-family: 'Noto Sans', sans-serif;
`

const ProfileInner = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  clip: rect(0, auto, auto, 0);
  @supports (-webkit-overflow-scrolling: touch) {
    clip: unset;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
`

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${color.nyanza};
  font-size: 6rem;
  font-weight: bold;
  letter-spacing: -0.125rem;
  @media ${ScreenSize.tablet} {
    flex-direction: row;
  }
  @media ${ScreenSize.desktop} {
    flex-direction: column;
    font-size: 2vw;
  }
`

const ProfileInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfilePicture = styled.img`
  border-radius: 5px;
  height: auto;
  max-width: 150px;
  margin: 0 3rem 2rem 0;
  @media ${ScreenSize.desktop} {
    max-width: 300px;
    margin: 0 0 2rem 0;
  }
`

const ProfileTitle = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 10px;
  text-transform: uppercase;
  padding-bottom: 2rem;
`

const ProfileSubtitle = styled.h2`
  font-size: 0.8rem;
  letter-spacing: 8px;
  text-transform: uppercase;
`

const Profile = (props) => (
  <ProfileWrapper>
    <ProfileInner>
      <ProfileContent>
        <ProfilePicture src={props.src} alt={props.alt} />
        <ProfileInnerContent>
          <ProfileTitle>Isabelle Yim</ProfileTitle>
          <ProfileSubtitle>Front-end developer</ProfileSubtitle>
          <Social marginTop={props.marginTop} />
        </ProfileInnerContent>
      </ProfileContent>
    </ProfileInner>
  </ProfileWrapper>
)

export default Profile
