import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'


const Input: FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined> = (props) => {
  return <input {...props} />
}

export default Input