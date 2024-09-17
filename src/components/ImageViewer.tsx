'use client'

import { CldImage } from 'next-cloudinary'
import React, { useState } from 'react'
import { Heart } from './icons/Heart'
import { setAsFavorite } from '@/lib/actions'
import { SearchResults } from '@/app/gallery/page'
import { FavHeart } from './icons/FavHeart'
import { ImageMenu } from './ImageMenu'

const ImageViewer = (
  props: any & { imageData: SearchResults; path: string }
) => {
  const { imageData } = props
  // const isFavorite = imageData.tags.includes('favorite')
  const [isFavorite, setIsFavorite] = useState(
    imageData.tags.includes('favorite')
  )

  return (
    <div className='relative'>
      <CldImage {...props} src={imageData.public_id} />
      {isFavorite ? (
        <FavHeart
          onClick={() => {
            setIsFavorite(false)
            setAsFavorite(imageData.public_id, false, props.path)
          }}
          className='absolute top-2 left-2 bg-slate-400 p-2 rounded-full bg-opacity-50 cursor-pointer text-red-500'
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorite(true)
            setAsFavorite(imageData.public_id, true, props.path)
          }}
          className='absolute top-2 left-2 bg-slate-400 p-2 rounded-full bg-opacity-50 cursor-pointer hover:text-red-500'
        />
      )}
      <div className='absolute top-2 right-2 '>
        <ImageMenu />
      </div>
    </div>
  )
}

export default ImageViewer
