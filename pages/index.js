import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/Layout'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My blog</h1>
    <ul>
      <PostLink id="hello-there" title="Hello there" />
      <PostLink id="afternoon" title="Afternoon" />
      <PostLink id="good-evening" title="Good evening" />
    </ul>
  </Layout>
)
