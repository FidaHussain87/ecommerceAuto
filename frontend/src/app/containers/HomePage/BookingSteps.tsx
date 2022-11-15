import {
  faMapMarkedAlt,
  faCalendarAlt,
  faCarSide,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`flex flex-col items-center w-full pt-3 pb-3  lg:pt-6 lg:pb-6`}
`

const Title = styled.h2`
  ${tw`text-3xl font-extrabold text-black  lg:text-5xl`}
`

const StepsContainer = styled.div`
  ${tw`flex flex-wrap  justify-evenly mt-7 lg:mt-16`}
`

const StepContainer = styled.div`
  ${tw`flex flex-col items-center m-3 transition-colors  md:w-96 hover:text-red-500`}
`

const Step = styled.div`
  box-shadow: 0px 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-center p-6 rounded-lg `};
`
const StepTitle = styled.h4`
  ${tw`mt-4 text-lg font-semibold text-black `}
`

const StepDescription = styled.p`
  ${tw`w-10/12 text-xs text-center text-gray-500  md:text-sm`}
`

const StepIcon = styled.span`
  ${tw`text-3xl text-red-500 `}
`
const BookingSteps = () => {
  return (
    <Container>
      <Title>Our Working Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest OwnAuto point and book your card.
          </StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Pickup The Best Date to rent a car for you.
          </StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <StepDescription>
            Book Your nice car with ease in one single click
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  )
}

export default BookingSteps
