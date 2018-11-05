import { Fragment } from 'react'
import { Content } from '../styles/GlobalStyles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Contact = () => (
  <Fragment>
    <Content>Feel free to connect with me</Content>
    <Content>I'll be happy to chat</Content>
  </Fragment>
)

export default Contact
