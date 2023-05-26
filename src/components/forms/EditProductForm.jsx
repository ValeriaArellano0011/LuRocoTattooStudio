import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, editProduct } from '../../redux/actions'
import { BiEditAlt } from 'react-icons/bi'

const EditProductForm = () => {

    const dispatch = useDispatch()

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({});
    const [editing, setEditing] = useState(false)
    const [previewProductImage, setPreviewProductImage] = useState();
    const [data, setData] = useState({});

    useEffect(() => {
        dispatch(getProducts(''))
    }, [dispatch])

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

    const handleEdit = (product) => {
        setEditing(true)
        setPreviewProductImage(product.imagen)
        setProduct(product)
    }

    function objetosIguales(obj1, obj2) {
        const props1 = Object.keys(obj1);
        for (let i = 0; i < props1.length; i++) {
            const propName = props1[i];
            if (propName === 'nombre' || propName === 'imagen' || propName === 'descripcion' || propName === 'horarioslaborales') {
                if (obj1[propName] !== obj2[propName]) {
                    console.log('el cambio: ', propName)
                    return false;
                }
            }
        }
        return true
    }

    const handleAccept = (e) => {
        e.preventDefault()
        var nothingchange = objetosIguales(data, product)
        if (nothingchange) {
            console.log('nada que cambiar') //mandar mensaje
            setEditing(false)
        } else {
            setEditing(false)
            console.log('entraa', data)
            let formData = new FormData();
            if (!data.imagen) {
                formData.append("oldImage", product.imagen);
            } else {
                console.log(data, 'laaaa imagennnn', data.imagen)
                formData.append("imagen", data.imagen);
                console.log(data.imagen)
            }
            formData.append('nombre', data.nombre)
            formData.append('descripcion', data.descripcion)
            formData.append('precio', (data.precio).toString())
            formData.append('stock', (data.stock).toString())
            console.log('entra 2')
            dispatch(editProduct(formData, product._id))
            console.log('entra 3')
        }
    }

    const handleInputChange = (e) => {
        // if (e.target.name === 'imagen') {
        //     setData({
        //         ...data,
        //         [data.imagen]: e.target.files[0],
        //     });
        // }
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        setData({
            nombre: product.nombre,
            descripcion: product.descripcion,
            precio: product.precio,
            stock: product.stock
        })
    }, [product])

    return (
        <div style={{ width: '75vw' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Editar Producto</h2>
            </div>
            <div>
                <ul>
                    {sortedProducts?.map((product, index) => {
                        return <li key={index}>
                            <p>{product.nombre}</p>
                            <div onClick={() => handleEdit(product)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                Editar
                                <BiEditAlt color='blue' />
                            </div>
                        </li>
                    })}
                </ul>
            </div>
            {editing && <form>
                <input name="nombre" className='form-input' type="text" value={data.nombre} onChange={(e) => {
                    handleInputChange(e)
                }} />
                <img src={previewProductImage ? previewProductImage : require('../../assets/tu-foto-aca.png')} alt="producto" width='170px' height="120px" />
                <input name="imagen" className='form-input' type='file' accept='image/*' onChange={(e) => {
                    console.log(e.target.files[0])
                    setData({
                        ...data,
                        imagen: e.target.files[0],
                    });
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setPreviewProductImage(reader.result);
                    }
                    reader.readAsDataURL(file);
                }} />
                <textarea value={data.descripcion} name="descripcion" className='form-input' onChange={(e) => handleInputChange(e)} />
                <input name='precio' type="number" value={data.precio} className='form-input' onChange={(e) => handleInputChange(e)}></input>
                <input name='stock' type="number" value={data.stock} className='form-input' onChange={(e) => handleInputChange(e)}></input>
                <button className='accept-btn' onClick={(e) => handleAccept(e)}>Aceptar</button>
            </form>}
        </div>
    )
}

export default EditProductForm