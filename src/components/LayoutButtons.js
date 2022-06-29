import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLayout } from '../store/main'
import { minus } from '../icons'
import classNames from 'classnames'

export default function LayoutButtons() {
  const navigate = useNavigate()
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

      <button onClick={() => navigate('/events')}>Puan Günlüğü</button>
    </>
  )
}
