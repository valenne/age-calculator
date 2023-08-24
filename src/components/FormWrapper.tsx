'use client'
import { useValidDate } from '../hooks/useValidDate'
import IconArrow from './IconArrow'
import Input from './inputs/Input'

function FormWrapper ({ setHisDate }: any) {
  const { isValidDate, handleSubmitAge } = useValidDate(setHisDate)

  return (
    <form onSubmit={handleSubmitAge}>
      <div className='flex flex-row gap-4'>
        <Input label='day' />
        <Input label='month' />
        <Input label='year' />
      </div>

      {isValidDate ? (
        <span
          className={`grid place-content-center w-full h-5 text-center mx-auto duration-150 transition-all ease-in-out ${
            isValidDate === '' ? '' : 'text-red-600 font-bold'
          }`}
        >
          {isValidDate}
        </span>
      ) : (
        <span className='block font-bold pb-5 w-full h-5 duration-150 transition-all ease-in-out text-transparent'></span>
      )}

      <div className='relative lg:static lg:flex lg:flex-row lg:items-center w-full h-fit mx-auto mt-10 mb-16 lg:mb-8 lg:mt-2'>
        <span className='block border-[1px] border-[rgba(219,219,219,1)] h-fit w-[90%] lg:w-[450px] mx-auto'></span>
        <IconArrow />
      </div>
    </form>
  )
}

export default FormWrapper
