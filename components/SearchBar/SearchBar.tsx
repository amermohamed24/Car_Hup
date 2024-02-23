'use client'

import { useState } from "react"
import IndustrySearch from "./IndustrySearch"
import ModelSearch from "./ModelSearch"
import SearchButton from "./SearchButton"

const SearchBar = ({setModel ,setIndustry}) => {

    const [searchIndustry,setSearchIndustry]=useState("");
    const [searchModel,setsearchModel]=useState("");
    const handleSeacrhBar=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(searchIndustry === "")(
        alert("please fill industry")
      )
      setModel(searchModel)
      setIndustry(searchIndustry)
    }
  return (
    <form className='searchbar' onSubmit={handleSeacrhBar}>
        <div className='searchbar__item'>
            <IndustrySearch 
            selected={searchIndustry}
            setSelected={setSearchIndustry}
            />
        </div>
        <div className='searchbar__item'>
            <ModelSearch 
            model={searchModel}
            setModel={setsearchModel}
            />
        </div>
        <SearchButton styles="max-sm:hidden"/>
    </form>
  )
  }
export default SearchBar
