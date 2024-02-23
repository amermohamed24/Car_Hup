'use client'
import { fuels, yearsOfProduction } from "@/Data";
import { FetchAllCars } from "@/apis";
import {CarCard, CustomFilter, Hero, SearchBar, ShowMore} from "@/components";
import { useEffect, useState } from "react";


export default function Home() {
  //fetch cars
  const [allCars,setAllCars]=useState([])
  const [loading,setLoading]=useState(false)

  //search paramters
  const [industry,setIndustry]=useState("")
  const [model,setModel]=useState("")

  //filters parametrs
  const [fuel,setFuel]=useState("")
  const [year,setYear]=useState("")

  //show-more parametr
  const [limit,setLimit]=useState(10)
  
  const getCars=async ()=>{
    setLoading(true)
    try {
      const results=await FetchAllCars({
        industry:industry || "toyota",
        model:model || "",
        limit:limit || 10,
        fuel:fuel || "",
        year:year||  "",
      })
      setAllCars(results)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(true)
    }
  }
  useEffect(()=>{
    getCars()
  },[industry,model,year,fuel,limit])

  const isDataEmpty=!Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return(
    <div className="overflow-hidden">
      <Hero />
      <div className="padding-x padding-y max-width mt-14">
        <div className="home__text-container">
          <h1 className="text-2xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like </p> 
        </div>
        <div className="home__filters">
          <SearchBar setModel={setModel} setIndustry={setIndustry}/>
          <div className="home__filter-container mr-12">
            <CustomFilter title="fuel" options={fuels} setNextOption={setFuel}/>
            <CustomFilter title="year" options={yearsOfProduction} setNextOption={setYear}/>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore isNext={limit> allCars.length} pageNumber={(limit||10)/10} setLimit={setLimit}/>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          </div>
        )}
        
        </div>
    </div>
  )
}