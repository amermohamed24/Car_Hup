'use client'
import React from 'react'
import { ShowMoreProps } from '@/types'
import { CustomButton } from '..'



const ShowMore = ({pageNumber,isNext,setLimit}:ShowMoreProps) => {
    const handleNavigation=()=>{
        const newLimit=(pageNumber+1)*10
        setLimit(newLimit)
    }
  return (
    <div className='flex-center w-full gap-5'>
        {
        !isNext &&(
            <CustomButton 
            title='show more'
            buttonStyles='bg-primary-blue text-white rounded-full m-5'
            btnType='button'
            handleClick={handleNavigation}
            />
        )
        }
    </div>
  )
}

export default ShowMore