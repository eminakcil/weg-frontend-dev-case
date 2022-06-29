import { star } from '../icons'

export default function Stars() {
  return (
    <div className="star-outlined">
      {star}
      <div className="star-outlined-inside">{star}</div>
    </div>
  )
}
