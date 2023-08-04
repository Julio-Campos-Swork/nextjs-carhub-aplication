import { MouseEventHandler } from 'react'

/* The code is defining an interface called `CustomButtonProps`. This interface specifies the props
that can be passed to a custom button component. */
export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btntype?: 'button' | 'submit'
  textStyles?: string
  rightIcon?: string
  isDisable?: boolean
}

export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}

export interface CarProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface CarDetailsProps {
  car: CarProps
  isOpen: boolean
  closeModal: () => void
}
export interface FilterProps {
  manufacturer: string
  year: number
  fuel: string
  limit: number
  model: string
}

export interface OptionsProps {
  title: string
  value: string
}

export interface CustomFilterProps{
  title: string
  options: OptionsProps[]
}

export interface HomeProps {
  searchParams: FilterProps;
}
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}