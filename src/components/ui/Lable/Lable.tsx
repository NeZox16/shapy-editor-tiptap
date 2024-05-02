import React, { ReactNode } from 'react'

type TLable = {
    children: ReactNode
    className?: string
    htmlFor?: string 
}

export const Lable = ({children, className, htmlFor}: TLable) => {
  return (
    <label className={className} htmlFor={htmlFor}>
        {children}
    </label>
  )
}

