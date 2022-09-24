import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import NavBar from '../../components/Navbar'
import { TopSection } from './TopSection'
const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
`}
`

export const HomePage = () => {
  return (
    <PageContainer>
      <NavBar />
      <TopSection/>
    </PageContainer>
  )
}
