
import   { BsMouseFill, BsBellFill } from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'

const Sidebar=()=> {
    const items = [{
        label: 'Home',
        href: '/',
        icon: BsMouseFill
    },
    {
        label: 'Notifications',
        href: '/notifications',
        icon: BsBellFill
    },
    {
        label: 'profile',
        href: '/users/123',
        icon: FaUser
    }
];
  return (
    <div></div>
  )
}

export default Sidebar;
