import React from 'react'
import Link from 'next/link'
import Markdown from 'react-markdown'

import Header from '../components/Header'

export interface IAboutProps {
  introPost: string
}

export class About extends React.Component<IAboutProps> {
  static async getInitialProps () {
    const introPost = await require('../docs/intro.md')

    return {
      introPost
    }
  }

  render () {
    return (
      <div>
        <Header title='About' />
        <p>This page is rather empty right now.</p>
        <Link href='/'>
          <a>Go back home</a>
        </Link>
        <Markdown source={this.props.introPost} />
      </div>
    )
  }
}

export default About
