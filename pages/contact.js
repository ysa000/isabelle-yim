import { Fragment } from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Divider from '../components/Divider'
import Contact from '../components/Content-contact'
import Social from '../components/Social'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Index = () => (
  <Fragment>
    <Layout>
      <Navbar />
      <Divider topMargin="30" />
      <Contact />
      <Divider topMargin="20" />
      <Social />
    </Layout>
  </Fragment>
)

export default Index
