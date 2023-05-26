import React, {useState, useRef, useEffect} from 'react'
import './Productos.css'
import ProductosCard from '../../components/productos/ProductosCard'
import InputSearch from '../../components/inputSearch/InputSearch'
import {useDispatch, useSelector} from "react-redux";
import { getNavState, getProducts } from '../../redux/actions'

const Productos = () => {
    const [searchValue,setSearchValue] = useState()
    const search = useRef(null)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNavState('Productos'))
    }, [dispatch])
    const handleValue = (e) => {
        e.preventDefault()
        setSearchValue(search.current.value)
    }
    
    //let { data: productos } = useTodosProductosQuery( searchValue ? searchValue : '')

    const [productos,setProductos] = useState([])
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts(searchValue ? searchValue : ''))
    },[searchValue, dispatch])

    useEffect(() => {
        setProductos(products)
    },[products])

    //const productosCarrito = useSelector(state => state.carrito.productos)

    // useEffect(() => {


    //     if (isAuthenticated){
    //         dispatch(persistCart({
    //             userEmail: user.email,
    //             productos: productosCarrito
    //         }))
    //     }


    //     return () => {
    //     };
    // }, [productosCarrito]);


    return (
        <main className='container productos_main'>
            <InputSearch searchEl={search} action={handleValue} />
            <div className='cards_container'>
                {productos?.map((item) => {
                    return item.stock > 0 && <ProductosCard key={item._id} data={item}/>
                })}
            </div>
        </main>
    )
}

export default Productos