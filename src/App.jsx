import './index.css';
import './App.jsx';
import ooo from './logo.png'
import aaa from './logo1.png'
import ggg from './Numero.png'
import sss from './sss.png'
import zzz from './zzz.png'
import ttt from './ttt.png'
import ppp from './ppp.png'
import lll from './lll.png'
import bbb from './bbb.png'


function App() {
  return (
    <div>
      <div className='Banner'>
        <p>SUMMER SALE UP TO 50% OFF</p>
      </div>
      <div className='first'>
        <img src={ooo}alt="" />
      </div>
      <div className='kartinka'>
        <img src={aaa}alt="" />
        <button>Spring Season</button>
      </div>
      <div className='banner1 '>
        <img src={ggg}alt=''/>
        <img src={sss}alt=''/>
        <img src={zzz}alt=''/>
        <img src={ttt}alt=''/>
        <img src={ppp}alt=''/>
      </div>
      <div className='imageees'>
        <img src={lll}alt=''/>
        <img src={bbb}alt=''/>
      </div>
      
    </div>
  );
}

export default App;
