'use client'

import React, { useState } from 'react'
import { CarCardProps } from '@/types'
import Image from 'next/image'
import { calculateCarRent, generateCarImageUrl } from '@/apis'
import { CarDetails, CustomButton } from '..'


interface CarProps{
    car:CarCardProps
}

const CarCard=({car}:CarProps)=>{
    const [isOpen,setIsOpen]=useState(false)
    const [isfill,setIsfill]=useState(false)
    const {model,make,city_mpg,transmission,year,drive}=car
    const carRent=calculateCarRent(city_mpg,year)
    return (
    <div className='group relative car-card transitions'>
        <div className='car-card__content '>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
            <div className='cursor-pointer' onClick={()=>setIsfill(!isfill)}>
            {isfill ? (<Image 
            src={'/heart-filled.svg'} 
            width={22} height={22} 
            alt='heart' 
            className='object-contain' 
            />):
            <Image 
            src={'/heart-outline.svg'} 
            width={22} height={22} 
            alt='heart' 
            className='object-contain' 
            />}
            </div>
        </div>
        <div className='flex mt-5 text-[25px] font-extrabold'>
            <span className='self-start text-[14px] leading-[17px] font-bold
            '>
                $
            </span>
            {carRent}
            <span className='self-end text-[14px] leading-[17px] font-semibold'>
                /day
            </span>
        </div>
        <div className='car-card__image'>
            <Image src={generateCarImageUrl(car)}
            alt='car image'
            className='object-content'
            fill
            priority            
            /> 
        </div>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
            <div className='flex flex-col items-center gap-2'>
                <Image src='/steering-wheel.svg' alt='icon' width={22} height={22} />
                <p className='text-[14px] leading-[17px] font-semibold'>
                    {transmission == "a" ? "Automatic" :"manual"}
                </p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Image src='/tire.svg' alt='icon' width={22} height={22} />
                <p className='text-[14px] leading-[17px] font-semibold'>
                    {drive.toUpperCase()}
                </p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Image src='/gas.svg' alt='icon' width={22} height={22} />
                <p className='text-[14px] leading-[17px] font-semibold'>
                    {city_mpg} MPG
                </p>
            </div>
        </div>
        <div className='car-card__btn-container pr-[13px]'>
            <CustomButton 
            title='View More...'
            buttonStyles='py-[14px]  w-full rounded-full bg-primary-blue text-white text-[14px] font-bold'
            btnIcon='/right-arrow.svg'
            handleClick={()=>setIsOpen(true)}
            />
        </div>
        <CarDetails
        isOpen={isOpen}
        closeModal={()=>setIsOpen(false)}
        car={car}
        />
    </div>
    )
}

export default CarCard