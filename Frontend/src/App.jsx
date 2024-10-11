
import { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'

function App() {

const [products,setproducts] = useState([]);
const [loading,setloading] = useState();

useEffect(()=>{
;(async()=>{
      try {
        setloading(true)
         const resp =await axios.get('/api/products')
         console.log(resp.data);
         setproducts(resp.data);
         setloading(false)
      } catch (error) {
        setloading(false)
        error
      }
})()

},[])

if(loading){
 return <h1>LOADING....!</h1>
}


  return (
    <>
      <h1>API HANDLING</h1>
      <h1>NO OF PRODUCTS : {products.length}</h1>

    </>
  )
}

export default App
