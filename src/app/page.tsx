'use client'

import { useState } from 'react'
import FormWrapper from '../components/FormWrapper'
import ShowingAge from '../components/ShowingAge'
import { ReturningFinalDate } from '../types/types'

function page () {
  const [hisDate, setHisDate] = useState<ReturningFinalDate>()

  return (
    <section className='mx-auto w-full h-screen grid place-items-center bg-[rgba(219,219,219,1)]'>
      <article className='h-[562px] w-[375px] lg:w-[650px] grid place-content-center bg-[rgba(240,240,240,1)] rounded-3xl rounded-br-[100px] shadow-md mx-auto transition-all duration-150 ease-linear p-10'>
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
