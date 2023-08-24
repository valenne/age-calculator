type AgeProps = {
  text: string
  data: string
}

function ReturnedAge ({ data, text }: AgeProps) {
  return (
    <div className='flex flex-row gap-3 justify-center items-center'>
      <span className='text-5xl lg:text-7xl block text-[rgba(133,77,255,1)] font-extrabold'>
        {data}
      </span>
      <p className='text-5xl lg:text-7xl  font-extrabold'>{text}</p>
    </div>
  )
}

export default ReturnedAge
