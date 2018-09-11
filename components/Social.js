import styled from 'styled-components'
import { color } from '../styles/GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialNetworks = ['instagram', 'github', 'twitter', 'linkedin-in']

const SocialWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 25px;
`

const SocialItem = styled.li`
  cursor: pointer;
  border: 1px solid ${color.bonJour};
  border-radius: 50%;
  padding: 5px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  & > a {
    > .svg-inline--fa {
      color: ${color.taupeGrey};
      width: 1em;
    }
  }
  &:hover {
    border: 1px solid ${color.cerisePink};
    & > a > .svg-inline--fa {
      color: ${color.cerisePink};
    }
  }
`

const Social = () => (
  <SocialWrapper>
    {socialNetworks.map(socialNetwork => (
      <SocialItem>
        <a href="#">
          <FontAwesomeIcon icon={['fab', `${socialNetwork}`]} />
        </a>
      </SocialItem>
    ))}
  </SocialWrapper>
)

export default Social
