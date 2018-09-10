import styled from 'styled-components'
import ScreenSize from '../styles/MediaQueries'

const Layout = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Noto Sans', sans-serif;
  width: 100%;

  @media ${ScreenSize.mobileLandscape} {
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
  }
  @media ${ScreenSize.tablet} {
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
  }
  @media ${ScreenSize.desktop} {
    left: 50%;
    transform: translateX(-50%);
    max-width: 700px;
  }
`

export default Layout
