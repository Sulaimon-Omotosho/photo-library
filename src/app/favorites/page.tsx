import React from 'react'
import cloudinary from 'cloudinary'
import ImageViewer from '@/components/ImageViewer'
import { SearchResults } from '../gallery/page'

const FavoritesPage = async () => {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(10)
    .execute()) as { resources: SearchResults[] }

  return (
    <section className=''>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Favorites</h1>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {results.resources.map((result) => (
            <ImageViewer
              path='/favorites'
              key={result.public_id}
              imageData={result}
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

export default FavoritesPage
