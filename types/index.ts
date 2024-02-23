

import { MouseEventHandler } from "react";


export interface CustomButtonProps{
    title:string;
    buttonStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" | "rest"
    btnIcon?:string
}

export interface  industrySearchProps{
    selected:string
    setSelected:(selected:string)=>void
}

export interface CarCardProps{
    id: number
    city_mpg:number
    class:string
    combination_mpg:number
    cylinders:number
    displacement:number
    drive:string
    fuel_type:string
    highway_mpg:number
    make:string
    model:string
    transmission:string
    year:number
}

export interface HomeProps {
    searchParams: FilterProps;
  }

export interface FilterProps{
    industry:string
    model:string
    year:string
    fuel:string
    limit:number
}

export interface optionsProps{
    title:string
    value:string
}

export interface CustomFilterProps{
    title:string
    options:optionsProps[]
} 

export interface ShowMoreProps{
    isNext:boolean
    pageNumber:number
}