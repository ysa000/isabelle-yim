import { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { color } from '../styles/GlobalStyles'

const navbarContent = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/contact' },
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
  margin: 0 5px;
  &:first-child {
    margin: 0 5px 0 0;
  }
  &:last-child {
    margin: 0 0 0 5px;
  }
  &:hover {
    border: 1px solid ${color.cerisePink};
    color: ${color.cerisePink};
  }
`

const TabItemLink = styled.a`
  * {
    color: inherit;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    letter-spacing: 0.6px;
  }
`

const Navbar = () => (
  <Tab>
    {navbarContent.map(({ title, url }) => (
      <TabItemLink>
        <Link prefetch href={url}>
          <TabItem>{title}</TabItem>
        </Link>
      </TabItemLink>
    ))}
  </Tab>
)

export default Navbar
