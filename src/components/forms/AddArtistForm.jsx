import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewArtist } from '../../redux/actions';
import './AddArtistForm.css';

const AddArtistForm = () => {
    const [previewArtistImage, setPreviewArtistImage] = useState();
    const [selectedHours, setSelectedHours] = useState([])

    const handleSelectHours = (hour) => { //10
        const index = selectedHours.indexOf(hour);
        if (index > -1) {
            setSelectedHours(selectedHours.filter(i => i !== hour));
        } else {
            setSelectedHours([...selectedHours, hour]);
        }
    };

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

    const [artistDescription, setArtistDescription] = useState("");

    const handleChangeArtistDescription = (event) => {
        setArtistDescription(event.target.value);
    }

    const [artistImage, setArtistImage] = useState(null);
    const [nombre, setNombre] = useState("");

    const dispatch = useDispatch()
    const handleAccept = (e) => {
        let formData = new FormData();
        if (artistImage !== null) {
            formData.append("imagen", artistImage);
        }
        formData.append('nombre', nombre)
        formData.append('descripcion', artistDescription)
        formData.append('horarioslaborales', selectedHours)
        dispatch(addNewArtist(formData))

        setPreviewArtistImage(null)
        setNombre('')
        setArtistDescription('')
        setSelectedHours([])
    }

    return (
        <div style={{ width: '75vw' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Añadir nuev@ artista</h2>
            </div>
            <form>
                <input className='form-input' type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                <img src={previewArtistImage ? previewArtistImage : require('../../assets/tu-foto-aca.png')} alt="artista" width='170px' height="120px" />
                <input className='form-input' type='file' accept='image/*'onChange={(e) => {
                    setArtistImage(e.target.files[0])
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setPreviewArtistImage(reader.result);
                    }
                    reader.readAsDataURL(file);
                }} />
                <textarea className='form-input' placeholder='Descripción' onChange={handleChangeArtistDescription} />
                <div>
                    <p>Selecciona todos los horarios laborales del artista:</p>
                    <div className='multiselector-hours'>
                        {hours?.map(hour => {
                            return <div key={hour.id} onClick={() => handleSelectHours(hour.name)} className={selectedHours.includes(hour.name) ? "hour-selected" : "hour-to-select"}>
                                {hour.name}:00
                            </div>
                        })}
                    </div>
                </div>
                <button type='submit' className='accept-btn' onClick={(e) => handleAccept(e)}>Aceptar</button>
            </form>
        </div>
    )
}

export default AddArtistForm