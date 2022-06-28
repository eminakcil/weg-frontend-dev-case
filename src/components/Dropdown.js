import { loadUsers } from '../utils'
import { Menu } from '@headlessui/react'
import { tripleDot } from '../icons'

export default function Dropdown() {
  return (
    <Menu>
      <Menu.Button>{tripleDot}</Menu.Button>
      <Menu.Items className="menu-items">
        <Menu.Item>
          {() => <button onClick={loadUsers}>Yeniden Yükle</button>}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
