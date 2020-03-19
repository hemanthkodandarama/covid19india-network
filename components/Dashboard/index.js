import React from 'react'
import styled from 'styled-components'
import NetworkMap from '../NetworkMap'
import SidePanel from '../SidePanel'

const testPatient = {
  patientId: 1,
  reportedOn: '30/01/2020',
  onsetEstimate: '',
  ageEstimate: '20',
  gender: 'female',
  city: 'Thrissur',
  state: 'Kerala',
  district: 'Thrissur',
  status: 'Recovered',
  notes: 'Student from Wuhan, recovery confirmed on 14 Feb',
  contractedFrom: '',
  sources: [
    'https://twitter.com/vijayanpinarayi/status/1222819465143832577',
    'https://weather.com/en-IN/india/news/news/2020-02-14-kerala-defeats-coronavirus-indias-three-covid-19-patients-successfully',
  ],
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 5% 25% 70%;
`

const Dashboard = () => {
  return (
    <Container>
      <div />
      <SidePanel {...testPatient} />
      <NetworkMap />
    </Container>
  )
}

export default Dashboard
