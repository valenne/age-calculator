function IconArrow () {
  return (
    <button
      className='absolute lg:static lg:top-0 -top-7 left-[120px] bg-[rgba(133,77,255,1)] rounded-full h-fit w-fit p-4 flex align-middle mx-auto hover:bg-black hover:text-white transition-all duration-150 ease-in-out'
      type='submit'
      value='Submit'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='46'
        height='44'
        viewBox='0 0 46 44'
        className='block h-8 w-8 mx-auto'
      >
        <g fill='none' stroke='#FFF' strokeWidth='2'>
          <path d='M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44' />
        </g>
      </svg>
    </button>
  )
}

export default IconArrow
