import React from 'react'

export default function Loading() {
  return (
    <div className='dark:bg:primary absolute inset-x-0 inset-y-0 z-50 flex items-center justify-center bg-background'>
      <div className='dot-spinner'>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
      </div>
    </div>
  )
}