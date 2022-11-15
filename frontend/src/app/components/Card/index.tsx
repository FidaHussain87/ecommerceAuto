import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import Button from '../Button'
import { Marginer } from '../Marginer/index'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { SCREENS } from '../Responsive'

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 3em;
  left: 0em;
  ${({ offset }: any) =>
    offset &&
    css`
      left: -3.5em;
    `}
  max-width: 20em;

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
    max-width: none;
  }
` as any
const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
flex
justify-center
items-center
rounded-md
bg-white
pt-1
pb-1
pr-2
pl-2
md:pt-2
md:pb-2
md:pl-9
md:pr-9
`};
`
const ItemContainer = styled.div`
  ${tw`
flex relative`}
`
const Icon = styled.span`
  ${tw`
text-red-500
fill-current
text-xs
md:text-base
mr-1
md:mr-3
`}
`
const SmallIcon = styled.span`
  ${tw`
      text-gray-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:ml-3
`}
`
const Name = styled.span`
  ${tw`
text-gray-600
text-xs
md:text-sm
cursor-pointer
select-none
`}
`
const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
bg-gray-300
mr-2
ml-2
md:mr-5
md:ml-5

`}
`

export const Card = () => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [returnDate, setReturnDate] = useState<Date>(new Date())
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false)
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false)

  const handleStartDate = () => {
    setIsReturnCalendarOpen(false)
    setIsStartCalendarOpen(!isStartCalendarOpen)
  }

  const handleReturnDate = () => {
    setIsStartCalendarOpen(false)
    setIsReturnCalendarOpen(!isReturnCalendarOpen)
  }

  const handleOnChange = (value: Date) => {
    if (isStartCalendarOpen) {
      setStartDate(value)
    } else if (isReturnCalendarOpen) {
      setReturnDate(value)
    }
  }

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={handleStartDate}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={handleOnChange} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={handleReturnDate}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar offset value={returnDate} onChange={handleOnChange} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  )
}
