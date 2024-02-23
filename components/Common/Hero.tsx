'use client'

import Image from "next/image"
import { CustomButton } from ".."


const Hero = () => {
    return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
        <div className="hero__title">
            Find,book,or rent a car
                -quickly and easily! 
        </div>
        <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking
            process.
        </p>
        <CustomButton 
        title="Expolre Cars"
        buttonStyles="bg-primary-blue text-white rounded-full mt-10"
        />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
            <Image src="/hero.png" fill alt="hero" className="object-conatin" />
            </div>
            <div className="hero__image-overlay "></div>
        </div>
    </div>
    ) 
}

export default Hero