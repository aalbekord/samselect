import {useState} from 'react'
import './App.css';

const App = () => {
  const [samosas, setSamosas] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  
  const handleClick = () => {
    setSamosas(samosas + multiplier)
  }

  const buyDoubleStuffed = () => {
    if (samosas >= 10) {
      setMultiplier(multiplier * 2);
      setSamosas(samosas - 10)
    }
  }
  
  const buyPartyPack = () => {
    if (samosas >= 100) {
      setMultiplier(multiplier * 5);
      setSamosas(samosas - 100)
    }
  }

  const buyFullFeast = () => {
    if (samosas >= 1000) {
      setMultiplier(multiplier * 10);
      setSamosas(samosas - 1000)
    }
  }
  
  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>{`Count: ${samosas}`}</h2>
        <img onClick={handleClick} className="samosa" src="https://static.vecteezy.com/system/resources/previews/050/018/866/non_2x/fresh-tasty-samosa-cutout-isolated-on-transparent-background-ideal-for-product-banners-social-media-posts-and-creative-cover-designs-free-png.png" alt="samosa" />
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App