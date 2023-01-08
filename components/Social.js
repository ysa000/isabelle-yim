import Link from 'next/link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { color } from '../styles/global-styles'

const socialNetworks = [
  { name: faInstagram, url: 'https://www.instagram.com/ysa_000/' },
  { name: faGithub, url: 'https://github.com/ysa000' },
  { name: faTwitter, url: 'https://twitter.com/IsabelleYim' },
  { name: faLinkedinIn, url: 'https://www.linkedin.com/in/isabelleyim/' },
]

const SocialNetworksWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2rem;
  width: 20%;
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : 0)};
`

const SocialItem = styled.li`
  cursor: pointer;
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
    & > a > .svg-inline--fa {
      color: ${color.nyanza};
    }
  }
`

const Social = (props) => (
  <SocialNetworksWrapper marginTop={props.marginTop}>
    {socialNetworks.map((socialNetwork) => (
      <SocialItem key={socialNetwork.url}>
        <Link href={socialNetwork.url}>
          <a target="_blank">
            <FontAwesomeIcon icon={socialNetwork.name} />
          </a>
        </Link>
      </SocialItem>
    ))}
  </SocialNetworksWrapper>
)

export default Social
