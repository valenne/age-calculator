import { useState } from 'react'
type InputsProps = {
  label: string
}

const validateLengthDates = (label: string) => {
  const gettingIds = document.getElementById(`${label}Input`)

  return gettingIds?.id
}

function Input ({ label }: InputsProps) {
  const [hasError, setHasError] = useState<string | undefined>()

  const handleOnChange = (text: string) => {
    setHasError(undefined)

    const inputId = validateLengthDates(label)

    if (!text) {
      return
    }

    if (inputId === 'yearInput') {
      if (text.length > 4 || text.length < 0) {
        setHasError('Valor entre 0 y 4')
      } else {
        return
      }
    }

    if (inputId === 'dayInput' || inputId === 'monthInput') {
      text.length > 2 ? setHasError('Valor entre 0 y 2') : undefined
    }

    if (text === undefined) {
      setHasError(undefined)
      return
    }

    if (text.includes(' ')) {
      setHasError('The number cannot have spaces')
      return
    }
    if (text?.charAt(0) === ' ') {
      setHasError('The first number cannot be empty')
      return
    }
    if (text?.charAt(0) === '' || text === '0') {
      setHasError(undefined)
      return
    }
    if (text === '') {
      setHasError('This field is required')
      return
    }
    if (!Number(text)) {
      setHasError('Must be a number')

      return
    }
  }

  return (
    <div className='flex flex-col gap-2 transition-all duration-150 ease-linear w-full'>
      <label
        className='font-bold tracking-[2px] text-[#3f3d3d] text-center'
        htmlFor={`${label}Input`}
      >
        {label.toUpperCase()}
      </label>
      {label === 'day' && (
        <input
          className={`w-full p-3 rounded-lg text-[rgba(20,20,20,1)] text-xl font-bold tracking-widest border  ${
            hasError ? 'border-red-600' : 'border-[#868484]'
          }`}
          type='text'
          name={`${label}Input`}
          id={`${label}Input`}
          onChange={e => handleOnChange(e.target.value)}
          pattern='[0-9]{2}'
          min={0}
          max={31}
        />
      )}
      {label === 'month' && (
        <input
          className={`w-full p-3 rounded-lg text-[rgba(20,20,20,1)] text-xl font-bold tracking-widest border  ${
            hasError ? 'border-red-600' : 'border-[#868484]'
          }`}
          type='text'
          name={`${label}Input`}
          id={`${label}Input`}
          onChange={e => handleOnChange(e.target.value)}
          min={0}
          max={12}
          pattern='[0-9]{2}'
          minLength={1}
          maxLength={2}
        />
      )}
      {label === 'year' && (
        <input
          className={`w-full p-3 rounded-lg text-[rgba(20,20,20,1)] text-xl font-bold tracking-widest border  ${
            hasError ? 'border-red-600' : 'border-[#868484]'
          }`}
          type='text'
          name={`${label}Input`}
          id={`${label}Input`}
          onChange={e => handleOnChange(e.target.value)}
          min={0}
          max={2023}
          pattern='[0-9]{4}'
          minLength={1}
          maxLength={4}
        />
      )}

      <span
        className={`text-xs text-center h-10  ${
          hasError
            ? 'text-red-600 transition-all duration-150'
            : 'text-transparent'
        }`}
      >
        {hasError ? hasError : ''}
      </span>
    </div>
  )
}

export default Input
