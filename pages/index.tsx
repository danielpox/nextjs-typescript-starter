import Link from 'next/link'

import Header from '../components/Header'

export default () => (
  <div>
    <Header title='Welcome!' />
    <h2>Great Stuff</h2>
    <p>This React template uses Next.JS, TypeScript and `styled-components`</p>
    <p>Read more on the <Link href='/about'><a>about page</a></Link>!</p>
  </div>
)
