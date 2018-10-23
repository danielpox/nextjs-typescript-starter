import React, { ReactNode } from 'react'
import styled from 'styled-components'

import Meta from '../Meta'

const StyledPage = styled.main`
  background: white;
  color: blue;
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`

export interface IPageProps {
  children: ReactNode
}

const Page: React.SFC<IPageProps> = ({ children }) => (
  <StyledPage>
    <Meta />
    <Inner>
      {children}
    </Inner>
  </StyledPage>
)

export default Page
