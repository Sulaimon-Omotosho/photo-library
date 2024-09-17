import UploadButton from '@/components/UploadButton'
import React from 'react'
import cloudinary from 'cloudinary'
import ImageViewer from '@/components/ImageViewer'
import ImageGrid from '@/components/ImageGrid'
import { AlbumCard } from '@/components/AlbumCard'

export type Folder = { name: string; path: string }

const AlbumsPage = async () => {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[]
  }

  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Albums</h1>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {folders.map((folder) => (
            <AlbumCard key={folder.path} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AlbumsPage
