const items = [
    {"crypto": "Bitcoin", "price": "27345.67"},
    {"crypto": "Ethereum", "price": "1823.45"},
    {"crypto": "Ripple", "price": "0.521"},
    {"crypto": "Litecoin", "price": "95.32"},
    {"crypto": "Cardano", "price": "0.268"},
    {"crypto": "Polkadot", "price": "4.22"},
    {"crypto": "Chainlink", "price": "7.89"},
    {"crypto": "Binance Coin", "price": "224.67"},
    {"crypto": "Dogecoin", "price": "0.0612"},
    {"crypto": "Solana", "price": "21.55"}
  ]
  
  export function Slider() {
    return (
      <div className="h-[13vh] w-full bg-white/90 text-black">
        <div className="flex  h-full items-center overflow-hidden">
          <div className="w-[15vw] text-2xl px-8 ">TRADING</div>
          <div>
            <CircularSlider items={items} />
          </div>
        </div>
        </div >
    )
  }
  const CircularSlider = ({ items }:any) => {
    return (
      <div className="slider-container">
        <div className="slider-track">
          {/* Display items twice for the seamless effect */}
          {items.concat(items).map((item:any, index:number) => (
            <div className="slider-item " key={index}>
              <div className="flex flex-col">
              <div className="text-lg font-semibold">${item.price}</div>
              <div className="text-lg">{item.crypto}</div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  