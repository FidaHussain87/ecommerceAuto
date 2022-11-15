import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../components/Responsive'
import JeepImg from '../../../assets/images/jeep.png'

const AboutUsContainer = styled.div`
  ${tw`flex flex-wrap items-center w-full pt-4 pb-4 bg-white 2xl:justify-center pr-7 pl-7 md:pl-0 md:pr-0`}
`

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -10px;
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS['2xl']}) {
    height: 35em;
    margin-left: 0;
  }
  @media (min-width: ${SCREENS['sm']}) {
    margin-left: -30px;
  }
`

const InfoContainer = styled.div`
  ${tw`flex flex-col w-1/2 md:ml-6 2xl:ml-16 `}
`

const Title = styled.h1`
  ${tw`text-2xl font-extrabold text-black md:text-5xl md:font-black md:leading-normal`}
`

const InfoText = styled.p`
  ${tw`max-w-2xl mt-4 text-sm font-normal text-gray-500 md:text-base`}
`
const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience with Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          mollitia molestias distinctio atque! Voluptas eveniet aut facere earum
          iste eos, nisi exercitationem dolorum? Veniam odio ullam neque
          doloremque libero dignissimos?
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  )
}

export default AboutUs
