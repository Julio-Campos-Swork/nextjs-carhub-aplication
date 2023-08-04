'use client'

import Image from 'next/image'
import { SearchManufacturer } from '.'
import React,{ useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="search"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter()

  /**
   * The handleSearch function prevents the default form submission, checks if the manufacturer and
   * model fields are empty, and updates the search parameters if they are not empty.
   * @param e - React.FormEvent<HTMLFormElement> - This is the event object for the form submission
   * event in React. It contains information about the form submission.
   * @returns If either the `manufacturer` or `model` fields are empty (after trimming whitespace), an
   * alert message will be displayed with the text "Please fill out all fields". If both fields have
   * values, the `updateSearchParms` function will be called with the lowercase versions of the
   * `manufacturer` and `model` values as arguments.
   */
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(manufacturer.trim() === "" && model.trim() === ""){
      return alert("Please fill out all fields")
    }

    updateSearchParms( manufacturer.toLowerCase(),model.toLowerCase())
  }
 /**
  * The function `updateSearchParms` updates the search parameters in the URL and navigates to the new
  * URL using React Router.
  * @param {string} manufacturer - The `manufacturer` parameter is a string that represents the
  * manufacturer of a product. It is used to update the search parameters in the URL.
  * @param {string} model - The `model` parameter is a string that represents the model of a product.
  * It is used to update the search parameters in the URL.
  */
  const updateSearchParms = (manufacturer: string, model: string) =>{
    const searchParams = new URLSearchParams(window.location.search)
    if(model){
      searchParams.set("model", model)
    }else{
      searchParams.delete("model")
    }
    if(manufacturer){
      searchParams.set("manufacturer", manufacturer)
    }else{
      searchParams.delete("manufacturer")
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathName, {scroll: false})
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="car model"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar
