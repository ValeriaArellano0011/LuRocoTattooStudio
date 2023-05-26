import React, { useState, useEffect } from 'react'
import { MONTH_NAMES } from '../../misc/consts';
import { handleChange, handleCreateAppointment, handleHourChange, handleInputChange } from '../../handlers/agenda';
import { useDispatch, useSelector } from 'react-redux';
import { artistOptionsList } from '../../functions/agenda';
import { sendAppointment } from '../../redux/actions';

const MenuAgenda = ({ input, setInput, selectedDate, setShowMenu }) => {

    const dispatch = useDispatch()

    const appointments = useSelector(state => state.appointments)
    const [hours, setHours] = useState([])
    const artistas = useSelector(state => state.artists)
    const [selectedArtist, setSelectedArtist] = useState({})
    const artistOptions = artistOptionsList(artistas)

    const filteredDate = appointments.filter((e) => {
        const date = new Date(e.date); 
        return date.getDate() === selectedDate.getDate();
    })
    const takenHours = filteredDate?.map(e=> {return {artist: e.artist, hour: e.hour}});
    const flattenedHours = takenHours
    .filter(e => e.artist === selectedArtist)
    .flatMap(e => e.hour);

    useEffect(() => {
        console.log('artistas: ', artistas)
        let artista = artistas.find((artist) => artist._id === selectedArtist);
        setHours(artista?.horarioslaborales || []);
    }, [selectedArtist]);

    useEffect(() => {
        let artista = artistas.find((artist) => artist._id === selectedArtist);
        setHours(artista?.horarioslaborales || []);
    }, [selectedArtist, artistas]);

    useEffect(() => {
        if (artistas.length > 0) {
            setSelectedArtist(artistas[0]._id.toString());
        }
    }, [artistas])

    return (
        <div className="menu-container">
            <div className="menu-content">
                <h3>Horarios disponibles para el {selectedDate.getDate()} de {MONTH_NAMES[selectedDate.getMonth()]}</h3>
                {/* Agrega aquí los horarios disponibles para la fecha seleccionada */}
                <div>
                    <label htmlFor="artist-select">Selecciona una artista:</label>
                    <select id="artist-select" value={selectedArtist} onChange={(event) => handleChange(event, selectedDate, appointments, setSelectedArtist, setHours, setInput, artistas, selectedArtist, input)}>
                        {artistOptions.map((artist) => (
                            <option key={artist.value} value={artist.value}>{artist.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    {hours?.map((hour, index) => {
                        const buttonDate = new Date();
                        buttonDate.setHours(hour, 0, 0, 0);
                        const isButtonDisabled = (hour <= new Date().getHours() && selectedDate.getDate() === new Date().getDate())
                        const flat = hours.includes(flattenedHours)
                        
                        return (
                            <button
                                className={`${isButtonDisabled ? 'disabled' : 'close-menu-hours '}`}
                                id={`taken${index}`}
                                onClick={() => {
                                    handleHourChange(hour, index, input, setInput)
                                    return (
                                        document.getElementById(`taken${index}`).classList.contains('taken')
                                            ?
                                            document.getElementById(`taken${index}`).classList.remove('taken')
                                            :
                                            document.getElementById(`taken${index}`).classList.add('taken'))
                                }}
                                key={index}
                                disabled={isButtonDisabled && flat}>
                                {hour}:00
                            </button>
                        )
                    })}
                </div>

                <div>
                    <label htmlFor="client">Nombre del cliente:</label>
                    <input type="text" id='client' name='client' onChange={(e) => handleInputChange(e, input, setInput)} />
                    <label htmlFor="email">Email del cliente:</label>
                    <input type="text" id='email' name='email' onChange={(e) => handleInputChange(e, input, setInput)} />
                    <label htmlFor="phone">Número telefónico del cliente:</label>
                    <input type="text" id='phone' name='phone' onChange={(e) => handleInputChange(e, input, setInput)} />
                    <label htmlFor="description">Descripción:</label>
                    <textarea id='description' name='description' cols="30" rows="10" onChange={(e) => handleInputChange(e, input, setInput)}></textarea>
                    <button onClick={(e) => handleCreateAppointment(e, input, setInput, dispatch, sendAppointment, selectedArtist)}>Agendar</button>
                </div>

                <button className='close-menu-hours' onClick={() => setShowMenu(false)}>Cerrar</button>
            </div>
        </div>
    )
}

export default MenuAgenda