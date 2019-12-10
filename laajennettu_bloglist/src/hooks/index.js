/* eslint-disable linebreak-style */
import {useState} from 'react'

const useField = (type,id) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const ResetField = () => setValue('')

  return {
    type,
    id,
    value,
    onChange,
    ResetField
  }
}

export default useField