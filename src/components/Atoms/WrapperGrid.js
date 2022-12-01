import * as React from 'react'
import Grid from '@mui/material/Grid'
import styled from 'styled-components'
const StyledGrid = styled(Grid)`
  padding: 1rem;
`
const WrapperGrid = props => {
  const { template } = props
  return <StyledGrid>{template}</StyledGrid>
}

export default WrapperGrid
