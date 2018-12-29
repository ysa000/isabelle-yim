import styled from 'styled-components'
import ScreenSize from '../styles/MediaQueries'
import Navbar from '../components/Navbar'
import Social from '../components/Social'

const Wrapper = styled.div`
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    width: 70%;
    margin: 30% auto 0;
  }
  @media (min-width: 1024px) {
    width: 50%;
    margin: 10% auto 0;
  }
`

const Scrollable = styled.div`
  @media (max-width: 640px) {
    height: calc(100vh - 150px);
    overflow-y: scroll;
  }
  min-height: 370px;
`

const Layout = ({ children }) => (
  <Wrapper>
    <Navbar />
    <Scrollable>{children}</Scrollable>
    <Social />
  </Wrapper>
)

export default Layout
