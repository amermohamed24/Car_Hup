'use client'


import Image from 'next/image'
import React from 'react'
import SearchButton from './SearchButton'

interface SearchModelProps{
    model:string
    setModel:(model:string)=>void
}

const ModelSearch = ({model,setModel}:SearchModelProps) => {
return (
    <>
        <Image
        src={'/model-icon.png'} 
        width={22} height={22}
        alt='model-icon'
        className='absolute ml-4 top-[12px]'/>
        <input
        type='text'
        name={model}
        className='searchbar__input'
        placeholder='Sl600'
        onChange={(event)=>setModel(event.target.value)}
        />
        <SearchButton styles='sm:hidden'/>
    </>
)
}

export default ModelSearch