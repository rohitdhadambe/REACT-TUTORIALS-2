import { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'

function App() {

  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        const resp = await axios.get('/api/products');
        setproducts(resp.data);
        setloading(false);
      } catch (error) {
        setloading(false);
        console.error(error);
      }
    })()  //Immediate invoked function
  }, [''])

  if (loading) {
    return <h1>LOADING....!</h1>
  }

  return (
    <>
      <h1>API HANDLING</h1>
      <h1>NO OF PRODUCTS : {products.length}</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
