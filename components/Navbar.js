import { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Divider from './Divider'
import { color } from '../styles/GlobalStyles'
import ScreenSize from '../styles/MediaQueries'

const navbarContent = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
]

const Tab = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;
`

const TabItem = styled.li`
  cursor: pointer;
  border: 1px solid ${color.bonJour};
  color: ${color.taupeGrey};
  border-radius: 20px;
  line-height: 12px;
  text-align: center;
  text-transform: uppercase;
  padding: 6px 0;
  width: 75px;
  margin: 0 10px 0;
  @media ${ScreenSize.tablet} {
    margin: 0 30px 0;
  }
  &:hover {
    border: 1px solid ${color.cerisePink};
    color: ${color.cerisePink};
  }
`

const TabItemLink = styled.a`
  * {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    letter-spacing: 0.6px;
  }
`

const Navbar = () => (
  <Fragment>
    <Tab>
      {navbarContent.map(({ title, url }) => (
        <TabItemLink key={title}>
          <Link prefetch href={url}>
            <TabItem>{title}</TabItem>
          </Link>
        </TabItemLink>
      ))}
    </Tab>
    <Divider topMargin="30" />
  </Fragment>
)

export default Navbar
