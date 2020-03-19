import React from 'react'
import styled from 'styled-components'

import Header from './header'
import DataGrid from './datagrid'

const Container = styled.div`
  background-color: #fafafa;
  padding: 25px;
`

const Text = styled.div`
  font-size: 50px;
`

export default function SidePanel(patient) {
  return (
    <Container>
      <Header {...patient} />
      <DataGrid {...patient} />
    </Container>
  )
}
