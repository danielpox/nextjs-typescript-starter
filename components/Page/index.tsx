import React, { ReactNode } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Meta from '../Meta'

export interface ThemeProps {
  black: string
  primary: string
  primaryDark: string
  maxWidth: string
  mdSize: string
}

export interface StyledProps {
  theme: ThemeProps
}

const theme: ThemeProps = {
  black: '#222',
  primary: 'hsl(187, 100%, 80%)',
  primaryDark: 'hsl(187, 80%, 30%)',
  maxWidth: '1280px',
  mdSize: '48rem'
}

const StyledPage = styled.main`
  background: white;
  color: ${props => props.theme.black};

  @media screen and (min-width: ${props => props.theme.mdSize}) {
    p {
      font-size: 1.25rem;
    }
  }
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;

  @media screen and (min-width: ${props => props.theme.mdSize}) {
    padding: 4rem;
  }
`

const GlobalStyle = createGlobalStyle<StyledProps>`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 2;

    background: ${(props: StyledProps) => props.theme.primary};
  }

  a {
    color: ${theme.primaryDark};
  }
`


export interface IPageProps {
  children: ReactNode
}

const Page: React.SFC<IPageProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyle theme={theme} />
      <Meta />
      <Inner>
        {children}
      </Inner>
    </StyledPage>
  </ThemeProvider>
)

export default Page
