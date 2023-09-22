
function BackgroundCurve(Props) {
  const {heading,desc,img} = Props


  return (
    <div className="background-curve-0001 bg-blue-300 overflow-x-clip">
    <div className="about-wrapper">
    <div className="one bg-purple-500 p-8 bg-opacity-50 left-right rounded-lg"><h1 className="font-sans font-black text-5xl secondary contrast-0001">{heading}</h1>
    <p>{desc}</p>
    </div>
    <div className="absolute -right-64 sm:right-0 bottom-0 right-left">
        <img src={img} alt={heading}/>
    </div>
    </div>
    <div className="before:absolute before:rounded-lg -z-1 before:w-96 before:h-96 before:bg-black before:bg-opacity-10 before:rotate-45 before:top-0 before:left-0 after:absolute after:rounded-lg -z-1 after:w-64 after:h-64 after:bg-black after:bg-opacity-20 after:rotate-45 after:top-1/2 after:-translate-y-1/2 after:right-1/2 after:translate-x-full"></div>

    <div className="before:absolute before:rounded-lg -z-1 before:w-96 before:h-96 before:bg-black before:bg-opacity-10 before:rotate-45 before:bottom-0 before:left-1/4 before:-translate-x-1/2 after:absolute after:rounded-lg -z-1 after:w-40 after:h-40 after:bg-black after:bg-opacity-10 after:rotate-45 after:top-1/4 after:-translate-y-1/2 after:right-1/4 after:translate-x-full"></div>
    <div className="sm:hidden custom-shape-divider-top-1692801960">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="sm:hidden shape-fill"></path>
    </svg>
</div>
        <div className="sm:hidden custom-shape-divider-bottom-1692801884">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className ="shape-fill"></path>
    </svg>
</div>
      <div className="hidden sm:block custom-shape-divider-top-1691424822">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
<div className ="hidden sm:block custom-shape-divider-bottom-1691424998">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div></div>
  )
}

export default BackgroundCurve
