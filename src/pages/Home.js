import { useSelector } from 'react-redux'

export default function Home() {
  const { users } = useSelector((state) => state.main)

  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      home
    </div>
  )
}
