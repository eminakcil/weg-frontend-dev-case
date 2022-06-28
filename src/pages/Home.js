import { useSelector } from 'react-redux'

export default function Home() {
  const { users } = useSelector((state) => state.main)

  return (
    <div>
      <pre>{JSON.stringify(users)}</pre>
      home
    </div>
  )
}
