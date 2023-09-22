import { StarFill } from "react-bootstrap-icons"

function Rating({rating,size,className}) {
  return (
    <div className={`rating-parent ${className && className}`}>
    <StarFill id = '5' data-selected = {rating === 5 && 'true'} size={size} className='rating-child'/>
    <StarFill id = '4' data-selected = {rating === 4 && 'true'} size={size} className='rating-child'/>
    <StarFill id = '3' data-selected = {rating === 3 && 'true'} size={size} className='rating-child'/>
    <StarFill id = '2' data-selected = {rating === 2 && 'true'} size={size} className='rating-child'/>
    <StarFill id = '1' data-selected = {rating === 1 && 'true'} size={size} className='rating-child'/>
  </div>
  )
}

export default Rating
