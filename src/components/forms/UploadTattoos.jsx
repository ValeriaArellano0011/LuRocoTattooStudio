import React, { useEffect, useState } from 'react'
import './UploadTattoos.css'
import { useDispatch, useSelector } from 'react-redux'
import { getArtistas, uploadMyTattoos } from '../../redux/actions'

export const UploadTattoos = () => {
    const [artistas, setArtistas] = useState([])

    const [selectedArtist, setSelectedArtist] = useState({})

    const [tattoo, setTattoo] = useState(null);

    const handleTattooChange = (event) => {
        const selectedFile = event.target.files[0];
        setTattoo(selectedFile);
    };

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArtistas())
    }, [])
    const artistasState = useSelector(state => state.artists)

    useEffect(() => {
        setArtistas(artistasState)
        if (artistasState.length > 0) {
            setSelectedArtist(artistasState[0]._id.toString());
        }
    }, [artistasState])

    const artistOptions = artistas?.map((artista) => ({
        value: artista._id,
        label: artista.nombre
    }));

    const handleChange = (event) => {
        setSelectedArtist(event.target.value);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData();
        if (tattoo) {
            formData.append("tattoo", tattoo);
            formData.append("artist", selectedArtist)
            //agregar actions para enviar formulario a la API
            dispatch(uploadMyTattoos(formData))
        }
        //cerrar formulario

    }

    return (
        <div className="upload-tatoo-container">
            <h1>Upload your tattoos</h1>
            <div>
                <form onSubmit={(e)=>handleOnSubmit(e)}>
                    <label htmlFor="artist-select">Selecciona una artista:</label>
                        <select id="artist-select" value={selectedArtist} onChange={handleChange}>
                            {
                                artistOptions.map((artist) => (
                                <option key={artist.value} value={artist.value}>{artist.label}</option>
                            ))}
                        </select>
                    <input type="file" onChange={handleTattooChange}/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}
