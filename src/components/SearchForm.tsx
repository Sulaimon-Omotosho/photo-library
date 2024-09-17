'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export function SearchForm() {
  const [tagName, setTagName] = useState('')
  const router = useRouter()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
        router.refresh()
      }}
    >
      <Label htmlFor='tag-name' className='text-right'>
        Search By Tag
      </Label>
      <div className='flex gap-2'>
        <Input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id='tag-name'
          value={tagName}
          className='col-span-3'
        />
        <Button type='submit' className='bg-slate-300'>
          Search
        </Button>
      </div>
    </form>
  )
}
