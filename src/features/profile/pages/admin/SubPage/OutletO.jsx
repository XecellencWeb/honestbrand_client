import {useLocation} from 'react-router-dom' 
import NotFound from '../../NotFound'
import AllOrders from './components/AllOrders'

function OutletO() {
  const {pathname} = useLocation()
  const path = pathname.split('/')[3]
  
  switch (path) {
    case 'orders':
      return <AllOrders/>
    default:
      return <NotFound/>
  }

}

export default OutletO
