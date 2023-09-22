import Navigation from "./Navigation"
import Logo from "./Logo"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import scrollToId from "../vanilla/idpage"

function Header(Props) {
  const {heading1,heading2,desc,img,loading,data,search} = Props
  const {hash} = useLocation()
  useEffect(()=>{
      hash && scrollToId(hash)
    },[hash,loading,data,search])
  
  return (
    <div className="header-section">
        <div className="headings"><Logo/>
        <Navigation/>
        </div>
        <div className="heading-contents header-wrapper">
            <div className="one z-40 left-right">
                <div className="mt-40 mb-12">
            <h1 className="font-black font-sans text-5xl sm:text-7xl text-slate-300">{heading2}</h1>
            <h1 className="font-black font-sans text-5xl sm:text-7xl secondary contrast-0001">{heading1}</h1>
            </div>
            <p className="mb-4">
                You can Check Out the Boss Responsibilities of My Site With This email and Password. excellencejosiah@gmail.com and "12345678" And admin Responsibilities with newmanjosiah888@gmail.com and "Josiah Newman"  
            </p>
            <p className="">Description of Project in the About Section of Website.</p>
            </div>
            <div className="two right-left">
                <img src={img} alt="preview cloth"/>
            </div>
        </div>
        <div className="before:absolute before:-z-1 hidden sm:block before:rounded-full before:w-72 before:h-72 before:bg-black before:bg-opacity-40 before:bottom-0  before:left-1/2 before:-translate-x-full after:absolute after:-z-1 after:rounded-full after:w-16 after:h-16 after:bg-black after:bg-opacity-10 after:bottom-3/4 after:left-1/2"></div>
        <div className="before:absolute before:-z-1 hidden sm:block before:rounded-full before:w-96 before:h-96 before:bg-black before:bg-opacity-30 before:top-3  before:left-20 after:absolute after:-z-1 after:rounded-full after:w-56 after:h-56 after:bg-black after:bg-opacity-20 after:top-5 after:right-20"></div>
        <div className="before:absolute before:-z-1 sm:hidden before:rounded-full before:w-96 before:h-96 before:bg-black before:bg-opacity-40 before:top-1/2 before:-translate-y-1/2 before:translate-x-1/4 before:-left-1/2 after:absolute after:-z-1 after:rounded-full after:w-32 after:h-32 after:bg-black after:bg-opacity-20 after:top-20 after:right-10"></div>
        <div className=" sm:hidden custom-shape-divider-bottom-1692801413">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
      <div className="hidden sm:block custom-shape-divider-bottom-1691403177">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
    </div>
    </div>
  )
}

export default Header
