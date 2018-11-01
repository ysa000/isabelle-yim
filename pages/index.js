import { Fragment } from 'react'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Divider from '../components/Divider'
import Social from '../components/Social'
import Profile from '../components/Content-homepage'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Index = () => (
  <Fragment>
    <Layout>
      <Navbar />
      <Profile />
      <Social />
    </Layout>
  </Fragment>
)

export default Index
