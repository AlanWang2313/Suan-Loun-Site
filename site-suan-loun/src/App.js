import Categories from './Components/categoriesOptions';
import './CSS/App.css';

function App() {
  const deliveryCheck = (i) =>{
    let l = document.getElementsByClassName("deliveryCheck")
    for(let j=0; j<l.length; j++){
      if (j!==i){
        l[j].checked = false
      }else{
        l[j].checked = true
      }
    }
  }
  return (
    <div className="app">
      <div className="header-menu">
        <button type="button" className="btn header-button text">Contato</button>
        <button type="button" className="btn header-button text">Carrinho</button>
      </div>
      <div className="delivery-options">
        <h3 className='text'>Modos de entrega</h3>
        <form>
          <div onClick={() => deliveryCheck(0)}>
            <input type="checkbox" class="form-check-input deliveryCheck"/>
            <label class="form-check-label" for="exampleCheck1">Retirada</label>
          </div>
          <div onClick={() => deliveryCheck(1)}>
            <input type="checkbox" class="form-check-input deliveryCheck"/>
            <label class="form-check-label" for="exampleCheck1">Delivery</label>
          </div>
        </form>
      </div>
      <Categories/>
    </div>
  );
}

export default App;
