import React from 'react'
import { useReturningAge } from '../hooks/useReturningAge'
import { ReturningFinalDate } from '../types/types'

function ShowingAge ({ fixedDate, isValid }: ReturningFinalDate) {
  const age = useReturningAge(fixedDate as string)

  return (
    <React.Fragment>
      <div className='flex flex-row gap-3 justify-center items-center'>
        <span className='w-[97px] text-5xl lg:text-7xl block text-[rgba(133,77,255,1)] font-extrabold text-center'>
          {isValid ? (
            <span
              className='showing-numbers'
              data-finalvalue={age.years}
            ></span>
          ) : (
            '- -'
          )}
        </span>
        <p className='text-5xl lg:text-7xl  font-extrabold'>years</p>
      </div>
      <div className='flex flex-row gap-3 justify-center items-center'>
        <span className='w-[97px] text-5xl lg:text-7xl block text-[rgba(133,77,255,1)] font-extrabold text-center'>
          {isValid ? (
            <span
              className='showing-numbers'
              data-finalvalue={age.months}
            ></span>
          ) : (
            '- -'
          )}
        </span>
        <p className='text-5xl lg:text-7xl  font-extrabold'>months</p>
      </div>
      <div className='flex flex-row gap-3 justify-center items-center'>
        <span className='w-[97px] text-5xl lg:text-7xl block text-[rgba(133,77,255,1)] font-extrabold text-center'>
          {isValid ? (
            <span className='showing-numbers' data-finalvalue={age.days}></span>
          ) : (
            '- -'
          )}
        </span>
        <p className='text-5xl lg:text-7xl  font-extrabold'>days</p>
      </div>
    </React.Fragment>
  )
}

export default ShowingAge
