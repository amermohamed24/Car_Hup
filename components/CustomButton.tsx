'use client'
import { CustomButtonProps } from "@/types"
import Image from "next/image"


const CustomButton = ({
    title,
    buttonStyles,
    handleClick,
    btnType,
    btnIcon
}:CustomButtonProps) => {
  return (
    <button 
    className={`custom-btn ${buttonStyles}`}
    disabled={false}
    type={"button" || btnType}
    onClick={handleClick}
    >
    <span className={`flex-1`} >
        {title}
    </span>
    {
      btnIcon && (
        <div className="relative w-6 h-6" >
      <Image src={btnIcon} fill alt="icon" className="object-contain"/>
    </div>
      )
    }
    </button>
  )
}

export default CustomButton