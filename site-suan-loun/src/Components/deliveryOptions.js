import { useState } from "react"

function DeliveryOptions(){
    function handleCheck(i){
        if (i===0){
            setTakeout(true)
            setDelivery(false)
        }else{
            setTakeout(false)
            setDelivery(true)
        }
    }
    const [takeout, setTakeout] = useState(false)
    const [delivery, setDelivery] = useState(true)
    return(
    <div className="delivery-options">
        <h3 className='text'>Modos de entrega</h3>
        <form>
          <div onClick={() => handleCheck(0)}>
            <input type="checkbox" className="form-check-input" checked={takeout}/>
            <label className="form-check-label" htmlFor="exampleCheck1">Retirada</label>
          </div>
          <div onClick={() => handleCheck(1)}>
            <input type="checkbox" className="form-check-input" checked={delivery}/>
            <label className="form-check-label" htmlFor="exampleCheck1">Delivery</label>
          </div>
        </form>
      </div>
    )
}

export default DeliveryOptions