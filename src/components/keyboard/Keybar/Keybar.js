import style from './Keybar.css';
import { useUi } from '../../../context/UIContext';

const Keybar = () => {
  const ui = useUi();
  
  return (
    <div className="arp_keybar" >
      <div className="arp_keybar_container">
        {ui.screen}
        <div className='arp_keybar_button'
          onClick={()=>ui.screen ='default'}
          >
            play
        </div>
        <div className='arp_keybar_button'
          onClick={()=>ui.screen = 'settings'}
          >
            settings
        </div>
      </div>
    </div>
  )
}

export default Keybar

// 