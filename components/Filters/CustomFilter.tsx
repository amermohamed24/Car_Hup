'use client'

import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CustomFilter = ({options,setNextOption}:CustomFilterProps) => {
  const [selected,setSelected]=useState(options[0])
  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e)=>{
        setSelected(e)
        setNextOption(e.value)
        }}>
        <div className='relative w-fit z-10' >
          <Listbox.Button className='custom-filter__btn '>
            <span className='block truncate'>{selected.title}</span>
            <Image
            src={'/chevron-up-down.svg'}
            width={22}
            height={22}
            className='object-contain cursor-pointer'
            alt='arrow icon'
            />
          </Listbox.Button>
          <Transition 
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {
                options.map((option)=>(
                  <Listbox.Option key={option.title}
                  value={option}
                  className={({active})=>`relative cursor-pointer  px-4 py-2 
                  ${active ? 'bg-primary-blue text-white':'text-grey-900'}`}
                  >
                    {({selected})=>(
                      <span className={`${selected? 'font-bold':'font-meduim'}`}>
                        {option.title}
                      </span>
                    )}
                  </Listbox.Option>
                ))
              }
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter