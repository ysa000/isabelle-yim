import { Fragment } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Index = () => (
  <Fragment>
    <Layout>
      <Hero />
      <Footer />
    </Layout>
  </Fragment>
)

export default Index
