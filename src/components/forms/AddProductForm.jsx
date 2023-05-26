import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from '../../redux/actions';

const AddProductForm = () => {

    const dispatch = useDispatch()
    const [data, setData] = useState({});
    const [previewProductImage, setPreviewProductImage] = useState('');

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setData({
            ...data,
            [name]: value,
        });
    }

    const handleAccept = (e) => {
        e.preventDefault()
        console.log(data)
        let formData = new FormData();
        if (data.imagen) {
            console.log(data.imagen)
            formData.append("imagen", data.imagen);
        }
        formData.append('nombre', data.nombre)
        formData.append('descripcion', data.descripcion)
        formData.append('precio', data.precio)
        formData.append('stock', data.stock)
        dispatch(addProduct(formData))

    }


    return (
        <div style={{ width: '75vw' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Agregar nuevo producto</h2>
            </div>

            <form>
                <input name="nombre" placeholder='nombre' className='form-input' type="text" onChange={(e) => {
                    handleInputChange(e)
                }} />
                <img src={previewProductImage ? previewProductImage : require('../../assets/tu-foto-aca.png')} alt="producto" width='130px' height="200px" />
                <input name="imagen" className='form-input' type='file' accept='image/*' onChange={(e) => {
                    handleInputChange(e)
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setPreviewProductImage(reader.result);
                    }
                    reader.readAsDataURL(file);
                }} />
                <textarea placeholder="descripcion" name="descripcion" className='form-input' onChange={(e) => handleInputChange(e)} />
                <div>
                    <input type="number" placeholder='precio' name='precio' className='form-input' onChange={(e) => handleInputChange(e)} />
                </div>
                <div>
                    <input type="number" name='stock' placeholder='stock' className='form-input' onChange={(e) => handleInputChange(e)} />
                </div>
                <button className='accept-btn' onClick={(e) => handleAccept(e)}>Aceptar</button>
            </form>
        </div>
    )
}

export default AddProductForm