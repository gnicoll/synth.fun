import { Children } from 'react';
import style from './Screen.css';

const Screen = ({children}) => {
  
  return (
    <div className="arp_screen" >
        {children}
    </div>
  )
}

export default Screen

// 