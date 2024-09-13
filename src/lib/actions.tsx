'use server'
import cloudinary from 'cloudinary'
import { revalidatePath } from 'next/cache'

export async function setAsFavorite(
  publicId: string,
  isFavorite: boolean,
  path: string
) {
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag('favorite', [publicId])
  } else {
    await cloudinary.v2.uploader.remove_tag('favorite', [publicId])
  }
  await new Promise((resolve) => setTimeout(resolve, 2000))
  revalidatePath(path)
}
