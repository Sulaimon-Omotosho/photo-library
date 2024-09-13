import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Heart } from './icons/Heart'
import Link from 'next/link'
// import { ScrollArea } from '@/registry/new-york/ui/scroll-area'

// import { Playlist } from '../data/playlists'

// interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
//   playlists: Playlist[]
// }

export function Sidebar() {
  return (
    <div className='pb-12 w-1/6'>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Manage
          </h2>
          <div className='space-y-1'>
            <Link href='/gallery'>
              <Button
                variant='secondary'
                className='w-full justify-start flex gap-2'
              >
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
                    d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                  />
                </svg>
                Gallery
              </Button>
            </Link>
            <Link href='/albums'>
              <Button
                variant='ghost'
                className='w-full justify-start flex gap-2 '
              >
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
                    d='M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z'
                  />
                </svg>
                Albums
              </Button>
            </Link>
            <Link href='/favorites'>
              <Button
                variant='ghost'
                className='w-full justify-start flex gap-2'
              >
                <Heart />
                Favorites
              </Button>
            </Link>
          </div>
        </div>
        {/* <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Library
          </h2>
          <div className='space-y-1'>
            <Button variant='ghost' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'
              >
                <path d='M21 15V6' />
                <path d='M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
                <path d='M12 12H3' />
                <path d='M16 6H3' />
                <path d='M12 18H3' />
              </svg>
              Playlists
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'
              >
                <circle cx='8' cy='18' r='4' />
                <path d='M12 18V2l7 4' />
              </svg>
              Songs
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'
              >
                <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
                <circle cx='12' cy='7' r='4' />
              </svg>
              Made for You
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'
              >
                <path d='m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12' />
                <circle cx='17' cy='7' r='5' />
              </svg>
              Artists
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'
              >
                <path d='m16 6 4 14' />
                <path d='M12 6v14' />
                <path d='M8 8v12' />
                <path d='M4 4v16' />
              </svg>
              Albums
            </Button>
          </div>
        </div>
        <div className='py-2'>
          <h2 className='relative px-7 text-lg font-semibold tracking-tight'>
            Playlists
          </h2>
          <ScrollArea className='h-[300px] px-1'>
            <div className='space-y-1 p-2'>
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant='ghost'
                  className='w-full justify-start font-normal'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mr-2 h-4 w-4'
                  >
                    <path d='M21 15V6' />
                    <path d='M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
                    <path d='M12 12H3' />
                    <path d='M16 6H3' />
                    <path d='M12 18H3' />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div> */}
      </div>
    </div>
  )
}
