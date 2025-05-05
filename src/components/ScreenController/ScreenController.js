import { Children, useState } from 'react';
import Screen from '../Screen/Screen';
import screenMap from './screenMap';
import Pattern from '../Pattern/Pattern';
import style from './ScreenController.css';
import { useUi } from '../../context/UIContext';

const ScreenController = ({children}) => {
  const ui = useUi();
  const ScreenComponent = screenMap[ui.screen] || null;
  
  return (
    <div className="arp_screen_controller" >
      <ScreenComponent />       
    </div>
  )
}

export default ScreenController

// 