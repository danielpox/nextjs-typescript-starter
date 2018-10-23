import Link from 'next/link'

import Header from '../components/Header'

const About = () => (
  <div>
      <Header title='About' />
      <p>This page is rather empty right now.</p>
      <Link href='/'>
        <a>Go back home</a>
      </Link>
  </div>
)

export default About
