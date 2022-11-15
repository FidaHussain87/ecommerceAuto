import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import NavBar from '../../components/Navbar'
import { TopSection } from './TopSection'
import { Card } from '../../components/Card'
import { Marginer } from '../../components/Marginer'
import BookingSteps from './BookingSteps'
import AboutUs from './AboutUs'
const PageContainer = styled.div`
  ${tw`flex flex-col items-center w-full h-full overflow-x-hidden `}
`

export const HomePage = () => {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="8rem" />
      <Card />
      <Marginer direction="vertical" margin="12rem" />
      <BookingSteps />
      <Marginer direction="vertical" margin="7rem" />
      <AboutUs />
    </PageContainer>
  )
}
