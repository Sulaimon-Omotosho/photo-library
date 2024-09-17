import { SearchResults } from '@/app/gallery/page'
import React from 'react'
import ImageViewer from './ImageViewer'

const MAX_COLUMNS = 4

const ImageGrid = ({
  images,
  path,
}: {
  images: SearchResults[]
  path: string
}) => {
  function getColumns(colIndex: number) {
    return images.filter((resources, idx) => idx % MAX_COLUMNS === colIndex)
  }

  return (
    <div className='grid grid-cols-4 gap-4'>
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div className='flex flex-col gap-4'>
            {column.map((result) => (
              <ImageViewer
                path={path}
                key={result.public_id}
                imageData={result}
                width='400'
                height='300'
                alt='image'
              />
            ))}
          </div>
        )
      )}
    </div>
  )
}

export default ImageGrid
