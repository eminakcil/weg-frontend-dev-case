import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { setLayout } from '../store/main'
import { minus } from '../icons'
import classNames from 'classnames'

export default function LayoutButtons() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { layout } = useSelector((state) => state.main)

  return (
    <>
      <button
        onClick={() => dispatch(setLayout('single'))}
        className={classNames({
          'layout-button': true,
          filled: layout === 'single',
        })}
      >
        {minus}
      </button>
      <button
        onClick={() => dispatch(setLayout('double'))}
        className={classNames({
          'layout-button': true,
          filled: layout === 'double',
        })}
      >
        {minus}
        {minus}
      </button>

      <button onClick={() => router.push('/events')}>Puan Günlüğü</button>
    </>
  )
}
