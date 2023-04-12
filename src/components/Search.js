import React from "react"
import { AsyncPaginate } from "react-select-async-paginate";

export default function Search({onSearchChange}) {

const [search,setSearch] = React.useState("")

const handleChange = (searchData) => {
  setSearch(searchData)
  onSearchChange(searchData)
}


  return(
    <AsyncPaginate
      placeholder="Search for the city"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}

     />
  )
}