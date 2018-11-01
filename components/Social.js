import { Fragment } from 'react'
import styled from 'styled-components'
import { color } from '../styles/GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Divider from './Divider'

// const socialNetworks = ['instagram', 'github', 'twitter', 'linkedin-in']
const socialNetworks = [
  { name: 'instagram', url: 'https://www.instagram.com/ysa_000/' },
  { name: 'github', url: 'https://github.com/ysa000' },
  { name: 'twitter', url: 'https://twitter.com/IsabelleYim' },
  { name: 'linkedin-in', url: 'https://www.linkedin.com/in/isabelleyim/' },
]

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
  <Fragment>
    <Divider topMargin="20" />
    <SocialWrapper>
      {socialNetworks.map(socialNetwork => (
        <SocialItem>
          <a href={socialNetwork.url} target="_blank">
            <FontAwesomeIcon icon={['fab', `${socialNetwork.name}`]} />
          </a>
        </SocialItem>
      ))}
    </SocialWrapper>
  </Fragment>
)

export default Social
