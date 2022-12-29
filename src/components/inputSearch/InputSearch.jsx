import React from 'react'
import './InputSearch.css'

const InputSearch = (props) => {
    return (
        <form className="InputForm" onSubmit={props.action}>
            <input className="InputSearch" type="text" name="search" ref={props.searchEl} placeholder='Producto...'/>
            <button className="InputButton" type='submit'>Buscar</button>
        </form>
    )
}

export default InputSearch