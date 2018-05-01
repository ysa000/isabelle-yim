import { Fragment } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { TitleH1 } from '../styles/GlobalStyles'
import { blink } from '../styles/KeyFrames'

const Title = TitleH1.extend`
  color: #726e75;
  padding-top: 40vh;
  text-transform: uppercase;
  text-align: center;
  height: 50vh;
  animation: ${blink} 5s linear infinite;
`

const Index = () => (
  <Fragment>
    <Layout>
      <Title>Coming soon</Title>
      <Footer />
    </Layout>
  </Fragment>
)

export default Index
