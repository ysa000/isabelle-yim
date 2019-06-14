import { Fragment } from 'react'
import styled from 'styled-components'
import { Content } from '../styles/GlobalStyles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const AboutMe = () => (
  <Fragment>
    <Content>
      Before settling for a career in the web development, I evolved for a few
      years as a travel consultant.
    </Content>
    <Content>
      I started in the industry as a digital project manager, which introduced
      me to many people and positions who helped understand how the web industry
      works. Then, following my desire of getting involved in programming, I
      moved on to the front end development joining an internship @CozyCloud.
    </Content>
    <Content>
      In between, I took up the challenges to quit smoking for a healthier
      lifestyle, and to become a vegetarian for a better world. I am currently a
      happy front end developer @SeLoger, supported by @Abbeal since 2017.
    </Content>
    <Content>
      Please do not hesitate to connect with me if you wish to get to know more,
      I'll be happy to chat.
    </Content>
  </Fragment>
)

const About = () => <AboutMe />

export default About
