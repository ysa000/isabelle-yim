import styled from 'styled-components'
import { Content } from '../styles/GlobalStyles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 360px;
  @media (orientation: landscape) {
    min-height: auto;
  }
  @media (min-width: 1023px) {
    min-height: 370px;
  }
`
library.add(fab)

const Contact = () => (
  <Wrapper>
    <Content>
      Please do not hesitate to connect with me if you wish to get to know more,
      I'll be happy to chat
    </Content>
  </Wrapper>
)

export default Contact
