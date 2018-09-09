import styled from 'styled-components'
import ScreenSize from '../styles/MediaQueries'

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  margin: 0 auto;
  width: 80%;
  @media ${ScreenSize.tablet} {
    width: 70%;
  }
  @media ${ScreenSize.desktop} {
    width: 40%;
  }
`

export default Layout
