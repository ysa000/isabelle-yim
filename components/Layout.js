import styled from 'styled-components'
import ScreenSize from '../styles/MediaQueries'
import Navbar from '../components/Navbar'
import Social from '../components/Social'

const Wrapper = styled.div`
  font-family: 'Noto Sans', sans-serif;
  padding: 20px;
  /* @media ${ScreenSize.mobileLandscape} {
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
  } */
  @media ${ScreenSize.tablet} {
  position: absolute;
  /* top: 50%; */
  transform: translateY(-50%);
  box-sizing: border-box;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
  }
  @media ${ScreenSize.desktop} {
  position: absolute;
  transform: translateY(-50%);
  box-sizing: border-box;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 700px;
  }
`

const Scrollable = styled.div`
  max-height: calc(100vh - 150px);
  overflow-y: scroll;
`

const Layout = ({ children }) => (
  <Wrapper>
    <Navbar />
    <Scrollable>{children}</Scrollable>
    <Social />
  </Wrapper>
)

export default Layout
