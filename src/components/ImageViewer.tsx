'use client'

import { CldImage } from 'next-cloudinary'
import React from 'react'

const ImageViewer = (props: any) => {
  return (
    <CldImage
      // width={500}
      // height={300}
      {...props}
      // src={publicId}
      // sizes='100vw'
      // alt='image'
    />
  )
}

export default ImageViewer
