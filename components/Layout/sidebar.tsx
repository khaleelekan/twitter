import SidebarLogo from './SidebarLogo';
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
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div>
          <SidebarLogo />
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
