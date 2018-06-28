import styled from 'styled-components'
import { color } from '../styles/GlobalStyles'

const navbarContent = ['About', 'Projects', 'Contact']

const Tab = styled.ul`
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  list-style: none;
  width: 100%;
`

const TabItem = styled.li`
  cursor: pointer;
  color: ${color.flint};
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  padding: 1.2em;
  text-transform: uppercase;
  width: 33.33%;
  &:hover {
    color: ${color.outerSpace};
  }
`

const Navbar = () => (
  <Tab>
    {navbarContent.map(content => (
      <TabItem>
        <a>{content}</a>
      </TabItem>
    ))}
  </Tab>
)

export default Navbar
