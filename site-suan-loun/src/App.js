import Categories from './Components/categoriesOptions';
import DeliveryOptions from './Components/deliveryOptions';
import './CSS/App.css';

function App() {
  return (
    <div className="app">
      <div className="header-menu">
        <button type="button" className="btn header-button text">Contato</button>
        <button type="button" className="btn header-button text">Carrinho</button>
      </div>
      <DeliveryOptions/>
      <Categories/>
    </div>
  );
}

export default App;
