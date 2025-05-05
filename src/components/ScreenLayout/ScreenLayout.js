import { Children } from 'react';
import style from './ScreenLayout.css';

const ScreenLayout = ({children}) => {
  
  return (
    <div className="arp_screenlayout" >
        {children}
    </div>
  )
}

export default ScreenLayout

// 