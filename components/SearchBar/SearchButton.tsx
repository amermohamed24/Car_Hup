import Image from "next/image"

const SearchButton=({styles}:{
    styles:string
  })=>{
    return(
      <button className={`-ml-12 z-10 text-grey ${styles}`}>
        <Image
        src={'/magnifying-glass.svg'}
        alt="magnifying-glass"
        width={40}
        height={40}
        />
      </button>
    )
  }

export default SearchButton