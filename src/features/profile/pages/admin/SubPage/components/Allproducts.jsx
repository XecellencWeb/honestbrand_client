import { useEffect } from "react"
import { useFetch } from "../../../../../../axios/custom_hook/fetch"
import { auth } from "../../../../../../axios/defaults"
import Loading from "../../../../../../components/Loading"
import Rating from "../../../../../../components/reusables/Rating"
import { authBox } from "../../../../../../vanilla/authbox"
import useTotal from "./CalculateSum"
import { useLocation } from "react-router-dom"

function Allproducts() {
  const {pathname} = useLocation()
  const {loading,data,reload,setReload} = useFetch('/items/allitems')
  const Accessories = data?.filter(item => item.type === 'Accessories')
  const AccessoriesTotal = useTotal(Accessories,'available')
  const Clothes = data?.filter(item => item.type === 'Clothes')
  const ClothesTotal = useTotal(Clothes,'available')
  const Gadgets = data?.filter(item => item.type === 'Gadgets')
  const GadgetsTotal = useTotal(Gadgets,'available')
  const total = useTotal(data,'available')

  

  useEffect(()=>{
    const loopDelete = async()=>{
      let i = 0 
      authBox(102)
      while (i<data.length) {
        
        if(data[i].available === 0){
          try {
            await auth.delete(`/items/deleteitem/${data[i]._id}`)
            setReload(!reload)
          } catch (err) {
            authBox(err.status,'An Error Occured while checking items.')
          }
          
        }
        i++
      }
      authBox(200,'Successfully Checked Items')
    }
    data && loopDelete()
  },[data,pathname])
  const marked = []

    const addMarked = (element)=>{
      const elem = element.parentNode.parentNode
      const id = elem.getAttribute('data-key')
      const name = elem.getAttribute('data-name')
        if(element.checked === true){
          marked.push([id,name])
        }else{
          marked.splice(marked.indexOf(e=>e[0]===id),1)
        }
    }
    const selectAll = ()=>{
      const allMarked = document.querySelectorAll('[data-marked=box]')
      if(allMarked.length === 0) return authBox(401,'No Item to Select')
      let i = 0
      while(i<allMarked.length){
        allMarked[i].checked = true
        addMarked(allMarked[i])
        i++
      }
    }

    const deleteItem = async(id,name)=>{
          try {
            authBox(102)
            const toDelete = await auth(`/items/item/${id}`)
            const {_id,createAt,...details} = toDelete.data
            const trash = {
              itemId:_id,
              ...details
            }
            await auth.post(`/trash/create`,trash)
            const {status} = await auth.delete(`/items/deleteitem/${id}`)
            authBox(status,`${name} Sucessfully added to Trash`)
            setReload(!reload)
          } catch (err) {
            authBox(err.status,err.response.data)
          }
        
    }
    const deleteMarked = ()=>{
          if(marked.length < 1) return authBox(401,'No Item is Marked Currently')
          marked.forEach(marked => {
            deleteItem(marked[0],marked[1])
          })
          authBox(200,'All Items Successfully Added to Trash')
    }
    return (
        <div>
             <div>
          <h1 className="font-sans font-black pl-4 my-20">Products</h1>
          <div className="w-3/4 mx-auto">
            <div className="grid grid-cols-2 place-items-center md:grid-cols-4">
              <div className="my-12">
                <h1 className="font-serif font-bold">Clothes</h1>
                <p className="">{ClothesTotal}</p>
              </div>
              <div className="my-12">
                <h1 className="font-serif font-bold">Gadgets</h1>
                <p className="">{GadgetsTotal}</p>
              </div>
              <div className="my-12">
                <h1 className="font-serif font-bold">Accessories</h1>
                <p className="">{AccessoriesTotal}</p>
              </div>
              <div className="my-12">
                <h1 className="font-serif font-bold">Total</h1>
                <p className="">{total}</p>
              </div>
            </div>
            {
              data && <div className="flex w-full justify-end my-16">
                <button onClick={deleteMarked} className="text-blue-700 active:text-red-500 font-normal">Delete Marked</button>
                <button onClick={selectAll} className="text-blue-700 active:text-red-500 font-normal">Select All</button>
              </div>
            }
            {loading?<Loading/>
            :data?.map(item => <div data-name = {item.name} data-key={item._id} key={item._id} data-deleted = 'false' className="relative grid md:grid-cols-3 gap-8 my-12 bg-slate-100 p-10 rounded-lg">
                <div className="h-64 bg-red-200 rounded-lg" style={{backgroundImage:`url(${item.pictures[0]})`,backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}></div>
                <div className="">
                    <h1 className="pt-4 font-serif font-bold">{item.name}</h1>
                    <h1 className=""><span className="line-through">N</span>{item.amount}</h1>
                    
                    <Rating className=' w-fit pt-4' size={10}/>
                    <button onClick={()=>deleteItem(item._id,item.name)} className="p-0 text-lg hover:scale-100 focus:scale-100 active:text-red-600 pt-12 underline bg-none text-blue-700">Delete</button>
                    <label htmlFor="" className="p-0 text-lg hover:scale-100 focus:scale-100 active:text-red-600 pt-12 underline bg-none text-blue-700">Edit</label>
                    <input data-marked = 'box' onChange={(e)=>addMarked(e.target)} className="w-12 h-12 absolute right-0 bottom-0 m-4 mx-6"  type="checkbox" name="" id="" />
                </div>
                <div className=" md:text-right"><p>{item.stack.slice(0,100)}......</p></div>
            </div> )
            }
          </div>
        </div>
        </div>
      )
}

export default Allproducts
