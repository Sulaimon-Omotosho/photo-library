'use client'

import React from 'react'
import { CldUploadButton } from 'next-cloudinary'
import { Button } from './ui/button'

const UploadButton = () => {
  return (
    <div>
      <Button asChild>
        <div className='flex gap-2 bg-gray-400'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
            />
          </svg>
          <CldUploadButton uploadPreset='library_test' />
        </div>
      </Button>
    </div>
  )
}

export default UploadButton
