import Footer from "../components/Footer"
import Header from "../components/Header"
import bag from '../assets/bag.png'
import { Link, useLocation, useNavigate, useSearchParams} from "react-router-dom"
import Items from "../components/Items"
import { ArrowBarUp } from "react-bootstrap-icons"
import { useFetch } from "../axios/custom_hook/fetch"
import Loading from "../components/Loading"
import { calcRate, getLike } from "../vanilla/equateRating"
import { useEffect, useState } from "react"
import { getCookie } from "../vanilla/cookie"
import { authBox } from "../vanilla/authbox"
import { auth } from "../axios/defaults"
import { observe, scrollToTop } from "../vanilla/idpage"


function Goods() {
  const userId = getCookie('userId')
  const {data,loading} = useFetch('/items/allitems')
  const [filter,setFilter] = useState()
  const [min,setMin] = useState()
  const [max,setMax] = useState()
  const [keyword,setKeyword] = useState()
  const horizon = data && data.filter(item => item.featured === true)
  const {search} = useLocation()
  const [params,setParams] = useSearchParams(search)
  const searched = JSON.parse(params.get('search'))
 const string =  params.get('string')
 const searchedItem = useFetch(`/items/search/${string}/${min}/${max}`)

 const [searchData,setSearchData] = useState(searchedItem?.data)

 useEffect(()=>{
  observe('#to-top')
 },[])

   useEffect(()=>{
        setSearchData(searchedItem.data)
   },[searchedItem.data])
    useEffect(()=>{
      if(!filter)return
      setParams('?search=true')
      if(filter === 'all'){
        setSearchData(data)
        return
      }
      const thefilter = data?.filter(item => item.type.toLowerCase() === filter)
      setSearchData(thefilter)
    },[filter,data])

    const filterItems = async(e)=>{
        e.preventDefault()
        authBox(102)
        setParams('?search=true')
        try {
          const {data} = await auth(`/items/search/${keyword}/${min}/${max}`)
          setSearchData(data)
          authBox(200,'')
        } catch (err) {
          authBox(err.status,err.response.data)
        }
    }

    

    return (
  <>

  <Header search={search} loading={loading} data={data} heading1 = 'Enjoy Suffing' heading2='Get All You Want' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus consectetur omnis dolorem soluta natus, ut suscipit, accusamus nostrum quam amet, earum placeat nemo! Eaque laborum nisi ad sequi ipsum?' img={bag}/>
  <div  className="box-grid--two relative overflow-hidden">

    
      <div className="small" id="filter">
      <form onSubmit={filterItems}>
      <div className="--search-group">
      <select onChange={(e)=>setFilter(e.target.value)} name="" id="">
      <option value="all">All Goods</option>
        <option value="accessories">Accessories</option>
        <option value="gadgets">Gadgets</option>
        <option value="clothes">Clothes</option>
      </select>
      <input onChange={(e)=>setKeyword(e.target.value)} placeholder="Search goods" type="text"  id="" />
      </div>
      <div className="--minmax">
        <input onChange={(e)=>setMin(e.target.value)} placeholder="Min" type="number"  id="" />
        <input onChange={(e)=>setMax(e.target.value)} placeholder="Max" type="number"  id="" />
      </div>
      <button type="submit">Filter</button>
      </form>
    </div>
    {!searched?<div className="big">
      <div className="wrapper--box">
        <h1 className="bold-0002 ">Featured and Recommended</h1>
      <div className="horizon--box | scroll--low-res ">
        {loading?<Loading/>
        :horizon?.map(item => <Items item={item} key={item._id} rating={calcRate(item.rating)} like={getLike(item.liked)}  name={item.name} amount={item.amount} id={item._id}/>)}
      </div>
      </div>
      <div className="wrapper--box">
        <h2 className="bold-0002 outstanding-0001">Available Goods</h2>
      <div className="no-background-0001 pt-20 some--margin-inline">
        {
        loading?<Loading/>
        :data?.map(item => <Items key={item._id} item={item} rating={calcRate(item.rating)} like={getLike(item.liked)} name={item.name} amount={item.amount} id={item._id}/>)
        }
      </div>
      </div>
    </div>
    :<div className="big relative">
      <h1 className="font-rem font-semibold text-gray-600 text-center text-3xl my-12">You Searched For {string || filter}</h1>
      {searchedItem.loading?
      <Loading/>:searchData?.length > 0?
      <div className="p-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {searchData?.map(item => <Items className='mb-20' key={item._id} item={item} rating={calcRate(item.rating)} like={getLike(item.liked)} name={item.name} amount={item.amount} id={item._id}/>)
        }
      </div>
      :<div className="m-8 w-full">
        <h1 className="my-8 font-sans font-black text-2xl text-gray-500">Item Not Found. Try</h1>
        <ul className="text-2xl list-disc ml-10">
        <li className="">Searching With a Different Keyword</li>
        <li className="">Being less specific</li>
        <li className="">Contacting Us for Troubleshooting.</li>
        </ul>
      </div>}
    </div>
    }
    <button id='to-top' onClick={()=>scrollToTop('#filter')} className="absolute bottom-0 right-0 bg-gray-300 text-slate-50 rounded-full w-24 h-24 mr-20 flex justify-center items-center opacity-10" ><ArrowBarUp size={25}/></button>
  </div>
  
  <Footer/>
  </>
  )
}

export default Goods
