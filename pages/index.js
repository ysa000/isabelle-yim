import { Fragment } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ComingSoon from '../components/ComingSoon'
const Index = () => (
  <Fragment>
    <Layout>
      <ComingSoon />
      <Footer />
    </Layout>
  </Fragment>
)

export default Index
