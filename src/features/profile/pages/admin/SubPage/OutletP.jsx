import {useLocation} from 'react-router-dom'
import NotFound from '../../NotFound'
import NewProduct from './components/NewProduct'
import Allproducts from './components/Allproducts'
import Trash from './components/Trash'

function OutletP() {
  const {pathname} = useLocation()
  const path = pathname.split('/')[3]
  
  switch (path) {
    case 'addProducts':
      return <NewProduct/>
    case 'products':
      return <Allproducts/>
    case 'trash':
      return <Trash/>
    default:
      return <NotFound/>
  }

}

export default OutletP
