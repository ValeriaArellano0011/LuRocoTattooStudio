import React, { useEffect, useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { editArtist, getArtistas } from '../../redux/actions'
const EditArtistForm = () => {

    const dispatch = useDispatch()

    const [artistas, setArtistas] = useState([])
    const [artista, setArtista] = useState({});
    const [editing, setEditing] = useState(false)
    const [previewArtistImage, setPreviewArtistImage] = useState();
    const [selectedHours, setSelectedHours] = useState([])
    const [data, setData] = useState({});

    useEffect(() => {
        dispatch(getArtistas())
    }, [])

    const artistasState = useSelector(state => state.artists)

    useEffect(() => {
        setArtistas(artistasState)
    }, [artistasState])

    const sortedArtists = [...artistas].sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1;
        }
        return 0;
    });

    const hours = [
        { id: 8, name: "8" },
        { id: 9, name: "9" },
        { id: 10, name: "10" },
        { id: 11, name: "11" },
        { id: 12, name: "12" },
        { id: 13, name: "13" },
        { id: 14, name: "14" },
        { id: 15, name: "15" },
        { id: 16, name: "16" },
        { id: 17, name: "17" },
        { id: 18, name: "18" },
        { id: 19, name: "19" },
        { id: 20, name: "20" },
        { id: 21, name: "21" }
    ]

    const handleSelectHours = (hour) => {
        const index = selectedHours.indexOf(hour);
        if (index > -1) {
            setSelectedHours(selectedHours.filter(i => i !== hour));
            return
        } else {
            setSelectedHours([...selectedHours, hour]);
            return
        }
    };

    const handleEdit = (artist) => {
        setEditing(true)
        setPreviewArtistImage(artist.imagen)
        setArtista(artist)
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
        var nothingchange = objetosIguales(data, artista)
        if (nothingchange) {
            console.log('nada que cambiar') //mandar mensaje
            setEditing(false)
        } else {
            setEditing(false)
            let formData = new FormData();
            if (!data.imagen) {
                formData.append("oldImage", artista.imagen);
            } else {
                formData.append("imagen", data.imagen);
            }
            if (data.imagen !== null) {
                formData.append("imagen", data.imagen);
            }
            formData.append('nombre', data.nombre)
            formData.append('descripcion', data.descripcion)
            formData.append('horarioslaborales', data.horarioslaborales)
            dispatch(editArtist(formData, artista._id))
        }
    }

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        setData({
            nombre: artista.nombre,
            descripcion: artista.descripcion,
            horarioslaborales: artista.horarioslaborales
        })
    }, [artista])

    useEffect(() => {
        if (data.horarioslaborales) {
            setSelectedHours(data.horarioslaborales)
        }
    }, [data])

    useEffect(() => {
        if (selectedHours !== data.horarioslaborales) {
            setData({
                ...data,
                horarioslaborales: selectedHours
            })
        }
    }, [selectedHours])

    return (
        <div style={{ width: '75vw' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Editar artista</h2>
            </div>
            <div>
                <ul>
                    {sortedArtists?.map((artist, index) => {
                        return <li key={index}>
                            <p>{artist.nombre}</p>
                            <div onClick={() => handleEdit(artist)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
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
                <img src={previewArtistImage ? previewArtistImage : require('../../assets/tu-foto-aca.png')} alt="artista" width='170px' height="120px" />
                <input name="imagen" className='form-input' type='file' accept='image/jpg' onChange={(e) => {
                    setData({
                        ...data,
                        imagen: e.target.files[0],
                    });
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setPreviewArtistImage(reader.result);
                    }
                    reader.readAsDataURL(file);
                }} />
                <textarea value={data.descripcion} name="descripcion" className='form-input' onChange={(e) => handleInputChange(e)} />
                <div>
                    <p>Selecciona todos los horarios laborales del artista:</p>
                    <div className='multiselector-hours'>
                        {hours?.map(hour => {
                            const isSelected = selectedHours.includes(hour.name);
                            return (
                                <div
                                    key={hour.id}
                                    onClick={() => {
                                        handleSelectHours(hour.name)
                                    }}
                                    className={`${isSelected ? "hour-selected" : "hour-to-select"}`}
                                >
                                    {hour.name}:00
                                </div>
                            );
                        })}
                    </div>
                </div>
                <button className='accept-btn' onClick={(e) => handleAccept(e)}>Aceptar</button>
            </form>}
        </div>
    )
}

export default EditArtistForm