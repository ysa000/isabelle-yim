import { Fragment } from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Divider from '../components/Divider'
import Social from '../components/Social'

const Index = () => (
  <Fragment>
    <Layout>
      <Navbar />
      <Divider topMargin="30" />
      <Social />
    </Layout>
  </Fragment>
)

export default Index
