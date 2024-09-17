'use client'

import * as React from 'react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Menu } from './icons/Menu'

export function ImageMenu() {
  const [position, setPosition] = React.useState('bottom')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className=''>
        <Button
          variant='outline'
          className='w-10 h-8 bg-slate-400 bg-opacity-50'
        >
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Add To Album</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value='family'>Family</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='friends'>Friends</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='colleagues'>
            Colleagues
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
