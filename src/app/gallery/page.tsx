import UploadButton from '@/components/UploadButton'
import React from 'react'
import cloudinary from 'cloudinary'
import ImageViewer from '@/components/ImageViewer'

type SearchResults = {
  public_id: string
}

const GalleryPage = async () => {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(10)
    .execute()) as { resources: SearchResults[] }

  return (
    <section className=''>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Gallery</h1>
          <UploadButton />
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {results.resources.map((result) => (
            <ImageViewer
              key={result.public_id}
              src={result.public_id}
              width='400'
              height='300'
              alt='image'
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryPage
