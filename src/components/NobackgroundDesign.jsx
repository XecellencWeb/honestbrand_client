import watch from '../assets/watch.png'

function NobackgroundDesign() {
  return (
    <div className="relative h-96 overflow-x-clip">
     
        <img className='absolute top-0 -left-64  ' src={watch} alt='watch to sell'/>
      
      <div className="w-3/4 sm:w-1/2 absolute top-1/2 -translate-y-1/2 right-0 bg-white bg-opacity-50 px-8">
        <h1 className="font-sans font-black text-5xl my-8">
          Welcome
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum libero officiis dolores! Tempora sit ad dicta corrupti dignissimos modi. Est aliquam consectetur nulla neque commodi recusandae tempore ad veniam veritatis.
        </p>
      </div>
    </div>
  )
}

export default NobackgroundDesign
