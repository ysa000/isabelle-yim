import styled from 'styled-components'
import ScreenSize from '../styles/MediaQueries'

const Layout = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  font-family: 'Noto Sans', sans-serif;

  @media ${ScreenSize.mobileLandscape} {
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
  }
  @media ${ScreenSize.tablet} {
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
  }
  @media ${ScreenSize.desktop} {
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 700px;
  }
`

export default Layout
