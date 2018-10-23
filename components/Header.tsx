import React from 'react'
import styled from 'styled-components'

import { StyledProps } from './Page'

interface IHeaderProps {
  title: String
}

export const StyledHeader = styled.header<{}>`
  @media screen and (min-width: ${(props: StyledProps) => props.theme.mdSize}) {
    font-size: 2rem;
  }
`

const Header: React.SFC<IHeaderProps> = ({ title }) => (
  <StyledHeader>
    <h1>{title}</h1>
  </StyledHeader>
)

export default Header
