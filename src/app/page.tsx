'use client'

import { useState } from 'react'
import { BiSolidArrowToRight } from 'react-icons/bi'
import FormWrapper from '../components/FormWrapper'
import ShowingAge from '../components/ShowingAge'

import { ReturningFinalDate } from '../types/types'

function page() {
  const [hisDate, setHisDate] = useState<ReturningFinalDate>()

  return (
    <section className='mx-auto min-h-full my-auto grid place-items-center bg-[rgba(219,219,219,1)]'>
      <div className=' flex flex-col gap-5 text-justify px-10 w-[375px] lg:w-[650px]'>
        <h1 className='text-4xl uppercase text-center font-extrabold border-b-2 border-transparent hover:border-[rgba(133,77,255,1)]'>
          Age Calculator
        </h1>
        <div className='h-full'>
          <p className='sm:text-lg text-base'>
            Choose a{' '}
            <span className='text-base uppercase font-semibold hover:font-extrabold hover:text-[rgba(133,77,255,1)] transition-all duration-150 ease-in'>
              date,{' '}
            </span>
            we calculate the number of years, months, and days that have passed since that date.
          </p>
        </div>
        <div className='mb-5'>
          <h2 className='text-center text-2xl font-bold'>How it works:</h2>
          <div className='sm:text-lg text-base'>
            <ul className='w-full text-center flex flex-col gap-2 mx-auto'>
              <li className='flex flex-row gap-1 justify-center '>
                <span className='my-auto text-2xl text-[rgba(133,77,255,1)]'>
                  <BiSolidArrowToRight />{' '}
                </span>
                Input a date
              </li>
              <li className='flex flex-row gap-1 justify-center '>
                <span className='my-auto text-2xl text-[rgba(133,77,255,1)]'>
                  <BiSolidArrowToRight />{' '}
                </span>
                Press on the icon arrow
              </li>
              <li className='flex flex-row gap-1 justify-center '>
                <span className='my-auto text-2xl text-[rgba(133,77,255,1)]'>
                  <BiSolidArrowToRight />{' '}
                </span>
                Wait for response
              </li>
            </ul>
          </div>
        </div>
      </div>
      <article className='h-[562px] w-[375px] lg:w-[650px] grid place-content-center bg-[rgba(240,240,240,1)] rounded-3xl rounded-br-[100px] shadow-md mx-auto transition-all duration-150 ease-linear px-10 '>
        <div className='w-full h-full flex flex-col lg:flex-col justify-center align-middle'>
          <div className='relative max-w-[375px] flex flex-col gap-4 items-center'>
            <FormWrapper setHisDate={setHisDate} />
          </div>
          <div className='w-full h-full grid place-content-center gap-4 lg:justify-center'>
            <ShowingAge
              fixedDate={hisDate?.fixedDate}
              isValid={hisDate?.isValid}
            />
          </div>
        </div>
      </article>
    </section>
  )
}

export default page
