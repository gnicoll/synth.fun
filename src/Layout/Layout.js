import { Children } from 'react';
import style from './Layout.css';

const Layout = ({children}) => {
  
  return (
    <div className="arp_layout" >
        {children}
    </div>
  )
}

export default Layout

// 