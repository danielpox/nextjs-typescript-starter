import React from 'react'
import styled from 'styled-components'

interface IHeaderProps {
  title: String
}

export const StyledHeader = styled.header`
  color: red;
`

const Header: React.SFC<IHeaderProps> = ({ title }) => (
  <StyledHeader>
    <h1>{title}</h1>
  </StyledHeader>
)

export default Header
