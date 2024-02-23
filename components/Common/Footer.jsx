import { footerLinks } from "@/Data"
import Image from "next/image"
import Link from "next/link"



const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 border-t border-gray-100 mt-5  " >
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 ">
            <div className="felx flex-col justify-start items-start gap-6">
                <Image src={"/logo.svg"} alt="logo" height={18} width={118} className="object-contain"/>
                <p className="text-[18px] pt-4 ">Carhub 2024<br/>
                    ©All rights reserved.
                </p>
            </div>
            <div className="footer__links">
                {footerLinks.map(link=>(
                    <div className="footer__link" key={link.title}>
                    <h3 className="text-[18px] font-bold">{link.title}</h3>
                    {
                        link.links.map(item=>(
                            <Link href={item.url} key={item.title} className="
                            hover:text-black hover:font-semibold transition-all ease-in-out duration-200"
                            >{item.title}</Link>
                        ))
                    }
                    </div>
                ))}
            </div>
        </div>
        <div className="footer__copyrights">
            <div className="text-gray-500">©CarHub All Rights Reserved</div>
            <div className="footer__copyrights-link mr-14">
                <Link href={"/"} className="text-gray-500  hover:text-black transitions">Privacy Policy</Link>
                <Link href={"/"} className="text-gray-500  hover:text-black transitions">Terms of Use</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer