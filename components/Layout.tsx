interface LayoutProps {
  children: React.ReactNode;
}


import Sidebar from '../components/Layout/Sidebar';
import FollowBar from './Layout/FollowBar';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 border-x-1 h-full ">
          <Sidebar />
          <div
            className="
              col-span-3
              lg:col-span-2
              border-x-1
              border-gray-800
            "
          >
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;

