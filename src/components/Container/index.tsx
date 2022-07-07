import React from 'react'
import { IChildren } from './types'
import './style.scss'

const Container = (props: IChildren) => {
  const { children } = props;
  return (
    <div className="container">
      { children }
    </div>
  )
}

export default Container