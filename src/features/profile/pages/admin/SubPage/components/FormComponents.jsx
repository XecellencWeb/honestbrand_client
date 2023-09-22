import { useState } from "react"


export function Select({name,array,setRef}) {
  const [value,setValue] = useState()
  return (
    <div className="group my-4">
        <input className="peer hidden" id="toggle-select" type="checkbox" />
        <label htmlFor="toggle-select"><span className>▼</span>{value || name}</label>
    <div className="w-96 hidden peer-checked:flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-20 shadow-lg">
      {array.map((option,i) => <label onClick={()=>{
        setRef(option)
        setValue(option)
      }} htmlFor="toggle-select" className="active:bg-blue-500 hover:bg-blue-500 hover:scale-100 hover:text-white mx-0 pl-16 w-full" key={i}>
            {option}
      </label>)}
    </div>
    </div>
  )
}

