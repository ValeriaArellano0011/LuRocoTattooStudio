import React, { useState, useRef }  from 'react'
import './Productos.css'
import { useTodosProductosQuery } from '../../features/ProductosApi'
import ProductosCard from '../../components/productos/ProductosCard'
import InputSearch from '../../components/inputSearch/InputSearch'

const Productos = () => {
    const [searchValue,setSearchValue] = useState()
    const search = useRef(null)

    const handleValue = (e) => {
        e.preventDefault()
        setSearchValue(search.current.value)
    }
    
    let { data: productos } = useTodosProductosQuery( searchValue ? searchValue : '')


    return (
        <main className='container productos_main'>
            <h1 className='productos_h1'>PRODUCTOS</h1>
            <InputSearch searchEl={search} action={handleValue} />
            <div className='cards_container'>
                {productos?.map((item) => {
                    return (<ProductosCard key={item.key} data={item}/>)
                })}
            </div>
        </main>
    )
}

export default Productos