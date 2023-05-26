import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, removeProduct } from '../../redux/actions'
import './RemoveArtistForm.css'
import { MdDeleteForever } from 'react-icons/md' 
const RemoveProductForm = () => {

  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
      dispatch(getProducts(''))
  }, [])

  const productsState = useSelector(state => state.products)

  useEffect(() => {
      setProducts(productsState)
  }, [productsState])

  const sortedProducts = [...products].sort((a, b) => {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  });

  const handleDelete = (id) => {
    console.log(id)
    dispatch(removeProduct(id))
  }

  return (
    <div className='form'>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Eliminar producto</h2>
      </div>
      <div>
        <ul>
          {sortedProducts?.map((product, index) => {
            return <li key={index}>
              <p>{product.nombre}</p>
              <div onClick={() => handleDelete(product._id)} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                Eliminar
                <MdDeleteForever color='red'/>
              </div>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default RemoveProductForm