import UploadButton from '@/components/UploadButton'
import React from 'react'
import cloudinary from 'cloudinary'
import ImageViewer from '@/components/ImageViewer'
import ImageGrid from '@/components/ImageGrid'
import { SearchResults } from '@/app/gallery/page'

const GalleryPage = async ({
  params: { albumName },
}: {
  params: { albumName: string }
}) => {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
    .execute()) as { resources: SearchResults[] }

  return (
    <section className=''>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>{albumName} Album</h1>
        </div>
        <ImageGrid images={results.resources} path='/gallery' />
      </div>
    </section>
  )
}

export default GalleryPage
