import React, { useRef } from 'react'
import './Input.css'

const Input = (props) => {
    const inputArray = props.inputsData
    const formElement = useRef()
    const classPage = props.classPage
    const sendData = (e) => {
        e.preventDefault()
        props.event(Array.from(formElement.current), e)
        formElement.current.reset()
    }
    
    const formStructure = (item) => {
        return (
            <label className="formulario-label" key={item.nombre}>
                <p className="formulario-p">{item.nombre}</p>
                <input type={item.type} className="formulario-input" placeholder={item.placeholder} name={item.nombre} defaultValue={item.value} />
            </label>
        )
    }

    return (
        <div className=''>        
            <form className="formulario-registro" onSubmit={sendData} ref={formElement}>
                {props.children}
                {inputArray.map(formStructure)}
                <button type='submit' className="btn-registro">Enviar</button>
            </form>
        </div>
    )
}

export default Input