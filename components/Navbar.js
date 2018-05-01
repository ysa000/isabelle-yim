import styled from 'styled-components'

const Tab = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  padding: 1.2em;
`

const TabItem = styled.li`
  text-decoration: none;
  text-transform: uppercase;
`

const Navbar = () => (
  <Tab>
    <TabItem>Hello</TabItem>
    <TabItem>Hello</TabItem>
    <TabItem>Hello</TabItem>
  </Tab>
)

export default Navbar
