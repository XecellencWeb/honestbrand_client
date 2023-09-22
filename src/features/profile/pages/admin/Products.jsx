import { BagFill, Plus, TrashFill } from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
import useRedirectAdmin from './SubPage/components/useRedirectAdmin'

function Products() {
  useRedirectAdmin()
  return (
    <div>
       <h1 className="font-sans font-black pl-4 my-20">Manage Products</h1>
       <div className="w-4/5 mx-auto">
        <div className="sm:flex w-full gap-10">
            <Link to='products' className="w-full">
              <div className="my-8 flex flex-col bg-slate-300 hover:text-white hover:bg-blue-300 p-20 items-center rounded-lg">
                <BagFill size={100}/>
                <p className="mt-12"> Products </p>
              </div>
            </Link>
            <Link to='trash' className="w-full">
              <div className="my-8 flex flex-col bg-slate-200 hover:text-white hover:bg-blue-300 p-20 items-center rounded-lg">
                <TrashFill size={100}/>
                <p className="mt-12">Trash </p>
              </div>
            </Link>
          </div>
          <Link to='addProducts' className='w-fit flex gap-4 my-20 hover:text-blue-300 border-solid border-blue-300 hover:border-b-sm'><Plus className='fill-green-400' size={25}/> <p className="">Add a product</p></Link>
       </div>
    </div>
  )
}

export default Products
