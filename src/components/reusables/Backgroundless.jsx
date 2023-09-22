

function Backgroundless(Props) {
    const {heading,desc,img} = Props
  return (
    <div className="relative h-96 overflow-x-clip">
      
        <img src= {img} alt='watch to sell' className="absolute top-0 -left-64 left-right"/>
      
      <div className="w-3/4 sm:w-1/2 absolute top-1/4-translate-y-3/4 right-0 right-left bg-white bg-opacity-50 px-8">
        <h1 className="font-sans font-black text-5xl my-8">
          {heading}
        </h1>
        <p>
         {desc}
        </p>
      </div>
    </div>
  )
}

export default Backgroundless
