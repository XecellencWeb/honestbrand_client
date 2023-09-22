import { useFetch } from "../../../../../../axios/custom_hook/fetch"
import { auth } from "../../../../../../axios/defaults"
import Loading from "../../../../../../components/Loading"
import Rating from "../../../../../../components/reusables/Rating"
import { authBox } from "../../../../../../vanilla/authbox"
function Trash() {
  const {data,loading,setReload,reload} = useFetch('/trash/getAll') 

  const marked = []

  const addMarked = (element)=>{
    const elem = element.parentNode.parentNode
    const id = elem.getAttribute('data-key')
    const name = elem.getAttribute('data-name')
      if(element.checked === true){
        marked.push([id,name])
      }else{
        marked.splice(marked.indexOf(e => e[0] === id),1)
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

  const deleteItem = async(id,name,extraText)=>{
      authBox(102)
      try {
       const {status} = await auth.delete(`/trash/delete/${id}`)
        authBox(status,`${extraText || name} now Deleted from trash`)
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
    authBox(200,'deletion completed')
}


  const restoreItem = async(id,name)=>{
    authBox(102)
      try {
       const {data} = await auth.get(`/trash/get/${id}`)
       await auth.post(`/items/additem`,data)
       await deleteItem(id,`${name} Restored and`)
      } catch (err) {
        authBox(err.status,err.response.data)
      }
  }

  const restoreMarked = ()=>{
    if(marked.length < 1) return authBox(401,'No Item is Marked Currently')
    marked.forEach(marked => {
       restoreItem(marked[0],marked[1])
    })
    authBox(200,'restoring completed')
}
  return (
    <div>
    <div>
 <h1 className="font-sans font-black pl-4 my-20">trash</h1>
 <div className="w-3/4 mx-auto">
 {
              data && <div className="flex w-full justify-end my-16">
                <button onClick={deleteMarked} className="text-red-500 active:text-red-500 font-normal">Delete Marked</button>
                <button onClick={restoreMarked} className="text-green-700 active:text-red-500 font-normal">Restore Marked</button>
                <button onClick={selectAll} className="text-blue-700 active:text-red-500 font-normal">Select All</button>
              </div>
            }
   {loading?<Loading/>
   :data && data.map(item => <div data-name={item.name} data-key={item._id} key={item._id} data-deleted = 'false' className="relative grid md:grid-cols-3 gap-8 my-12 bg-slate-100 p-10 rounded-lg">
       <div className="h-64 bg-red-200 rounded-lg" style={{backgroundImage:`url(${item.pictures[0]})`,backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}></div>
       <div className="">
           <h1 className="pt-4 font-serif font-bold">{item.name}</h1>
           <h1 className=""><span className="line-through">N</span>{item.amount}</h1>
           
           <Rating className=' w-fit pt-4' size={10}/>
           <button onClick={()=>deleteItem(item._id,item.name)} className="p-0 text-lg hover:scale-100 focus:scale-100 active:text-red-600 pt-12 underline bg-none text-red-400">Delete</button>
           <button onClick={()=>restoreItem(item._id,item.name)} className="p-0 text-lg hover:scale-100 focus:scale-100 active:text-red-600 pt-12 underline bg-none text-green-500">restore</button>
           <input data-marked = 'box' onChange={(e)=>addMarked(e.target)} className="w-12 h-12 absolute right-0 bottom-0"  type="checkbox" name="" id="" />
       </div>
       <div className=" md:text-right"><p>{item.stack.slice(0,100)}......</p></div>
   </div> )
   }
 </div>
</div>
</div>
  )
}

export default Trash
