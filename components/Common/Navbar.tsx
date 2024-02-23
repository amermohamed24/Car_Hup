import Image from "next/image"
import Link from "next/link"
import CustomButton from "../CustomButton"



const Navbar = () => {
  return (
    <header className="absolute w-full z-10 ">
        <nav className="max-w-[1440px]  flex justify-between items-center sm:px-16 px-6 py-4 mx-auto">
            <Link href={"/"} className="flex items-center justify-center">
                <Image src={"/logo.svg"} alt="logo" width={118} height={18} className="object-contain"/>
            </Link>
            <CustomButton 
            title="sign in"
            btnType="button"
            buttonStyles="text-primary-blue ruonded-full bg-white min-w-[130px] font-bold text-xl"
            />
        </nav>
    </header>
  )
}

export default Navbar