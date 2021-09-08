import './App.css';
import { useState } from 'react';
import MenuContainer from './components/MenuContainer/MenuContainer';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]); 

const [filteredProducts, setFilteredProducts] = useState([]);

const [currentSale, setCurrentSale] = useState([])
const [cartTotal, setCartTotal] = useState(0)

function showProducts(){
  setProducts(
    products.filter(product => product.name === filteredProducts)
  )
}

function handleClick(newId) {
  setCurrentSale([...currentSale,
    products.find((product) => product.id === newId)
  ])
}

  return (
    <div className="App">
      <div className="App-header">
        <form>
          <input type='text' value={filteredProducts} placeholder='Exemplo: Big Kenzie...'
          onChange={(event) => setFilteredProducts(event.target.value)}/>
          <button type='button' onClick={() => showProducts()}>Pesquisar</button>
       </form>
       <MenuContainer products={products} handleClick={handleClick}/>
      <p>Subtotal - {
          currentSale.reduce((cartTotal, current) => cartTotal + current.price, cartTotal).toFixed(2)
        } R$
      </p>
      <ul>
        {currentSale.map((product, index) => (
          <ul className='products' key={index}><li className='productName'>{product.name}</li>
          <li>Categoria - {product.category}</li>
          <li>Preço - {product.price} R$</li>
          </ul>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
