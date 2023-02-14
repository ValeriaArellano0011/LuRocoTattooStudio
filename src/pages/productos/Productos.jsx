import React, {useState, useRef, useEffect} from 'react'
import './Productos.css'
import { useTodosProductosQuery } from '../../features/ProductosApi'
import ProductosCard from '../../components/productos/ProductosCard'
import InputSearch from '../../components/inputSearch/InputSearch'
import {persistCart} from "../../features/CarritoSlice";
import {useAuth0} from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux";

const Productos = () => {
    const [searchValue,setSearchValue] = useState()
    const search = useRef(null)
    const dispatch = useDispatch()

    const handleValue = (e) => {
        e.preventDefault()
        setSearchValue(search.current.value)
    }
    
    let { data: productos } = useTodosProductosQuery( searchValue ? searchValue : '')

    const {isAuthenticated, user} = useAuth0()
    const productosCarrito = useSelector(state => state.carrito.productos)

    useEffect(() => {


        if (isAuthenticated){
            dispatch(persistCart({
                userEmail: user.email,
                productos: productosCarrito
            }))
        }


        return () => {
        };
    }, [productosCarrito]);


    return (
        <main className='container productos_main'>
            <InputSearch searchEl={search} action={handleValue} />
            <div className='cards_container'>
                {productos?.map((item) => {
                    return (<ProductosCard key={item.id} data={item}/>)
                })}
            </div>
        </main>
    )
}

export default Productos