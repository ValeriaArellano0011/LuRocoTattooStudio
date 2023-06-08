import './Agenda.css';
import React, {
    useState,
    useMemo,
    useEffect
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    MONTH_NAMES,
    WEEKDAY_NAMES,
    PRESENT_MONTH
} from '../../misc/agenda-consts';
import {
    getAppointments,
    getArtistas,
    sendAppointment
} from '../../redux/actions';
import {
    handleDayClick,
    handleChange,
    handleHourChange,
    handleInputChange,
    handleCreateAppointment
} from '../../handlers/agenda';
import {
    artistOptionsList,
    nextMonth,
    prevMonth
} from '../../functions/agenda';

function Agenda() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [month, setMonth] = useState(PRESENT_MONTH)
    const [hours, setHours] = useState([])
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [showMenu, setShowMenu] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState({})
    const [artistas, setArtistas] = useState([])
    const [color, setColor] = useState('gray')

    const dispatch = useDispatch()
    const artistasState = useSelector(state => state.artists)
    const appointments = useSelector(state => state.appointments)
    const artistOptions = artistOptionsList(artistas)
    const inputInitialState = {
        artist: selectedArtist.toString(),
        client: '',
        email: '',
        phone: '',
        description: '',
        date: null,
        hour: [],
        accepted: true,
        disabledHours: []
    }

    const [input, setInput] = useState(inputInitialState);

    const DayPuntito = ({dayrecived, monthrecived}) => {
        console.log(appointments)
        const filteredDate = appointments.filter((e) => {
            const daterecived = new Date(`${monthrecived}/ ${dayrecived}/ ${currentMonth.getFullYear()}`); 
            const date = new Date(e.date)
            return date?.getDate() === daterecived?.getDate() && date?.getFullYear() === daterecived?.getFullYear();
        })
        const takenHours = filteredDate?.map(e=> {return {artist: e.artist, hour: e.hour}});
        const flattenedHours = takenHours
        .filter(e => e.artist === selectedArtist)
        .flatMap(e => e.hour);
        if(flattenedHours === hours){
            return (<div className='puntito' style={{backgroundColor:  'red'}}/>)

        } else if (flattenedHours.length=== 0){
            return (<div className='puntito' style={{backgroundColor: 'green'}}/>)
            
        } else return (<div className='puntito' style={{backgroundColor: 'gray'}}/>)
    }

    const daysInMonth = useMemo(() => {
        return new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    }, [currentMonth]);

    const firstDayOfMonth = useMemo(() => {
        return new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay() - 1;
    }, [currentMonth]);

    useMemo(() => {
        const days = [];
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }
        return days;
    }, [daysInMonth]);

    useEffect(() => {
        dispatch(getAppointments(month))
    }, [month, dispatch])

    useEffect(() => {
        dispatch(getArtistas())
    }, [dispatch])

    useEffect(() => {
        setArtistas(artistasState)
        if (artistasState.length > 0) {
            setSelectedArtist(artistasState[0]._id.toString());
        }
    }, [artistasState])

    useEffect(() => {
        let artista = artistas.find((artist) => artist._id === selectedArtist);
        setHours(artista?.horarioslaborales || []);
    }, [selectedArtist, artistas]);

    useEffect(() => {
        if (selectedArtist) {
            setInput({
                ...input,
                artist: selectedArtist
            })
        }
    }, [selectedArtist])

    return (
        <div>
            <div className='month-year-container'>
                <div className='month-name-container'>
                    <button className='ghost-btn-agenda' onClick={() => prevMonth(month, setMonth, currentMonth, setCurrentMonth)}>{'<'}</button>
                    <h2>{MONTH_NAMES[currentMonth.getMonth()]}, {currentMonth.getFullYear()}</h2>
                    <button className='ghost-btn-agenda' onClick={() => nextMonth(month, setMonth, currentMonth, setCurrentMonth)}>{'>'}</button>
                </div>
            </div>
            <table>
                <thead className='text-align'>
                    <tr>
                        {WEEKDAY_NAMES.map((day) => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {[...Array(Math.ceil((daysInMonth + firstDayOfMonth) / 7))].map((week, index) => {
                        return (
                            <tr key={index} className='text-align'>
                                {[...Array(7)].map((day, index2) => {
                                    const dayNumber = index * 7 + index2 + 1 - firstDayOfMonth;
                                    const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), dayNumber);
                                    let classNames = 'td-numbers';
                                    if (dayNumber < 1 || dayNumber > daysInMonth ) {
                                        return <td key={index2}></td>;
                                    }
                                    if ((currentDate.getDay() === 0 || currentDate.getDate() < new Date().getDate() && month <= PRESENT_MONTH) || month < PRESENT_MONTH) {
                                        classNames = 'disabled';
                                    }
                                    return (
                                        <td
                                            key={index2}
                                            className={`day ${classNames}`}
                                            onClick={() => currentDate.getMonth() >= currentMonth.getMonth() &&
                                                currentDate.getDay() !== 0 && handleDayClick(currentDate, setSelectedDate, setShowMenu, setInput, input)}
                                        >

                                            <DayPuntito dayrecived={dayNumber} monthrecived={currentDate.getMonth() + 1} />
                                            {classNames !== 'disabled' ? dayNumber : null}
                                            {classNames === 'disabled' && <span>{dayNumber}</span>}
                                        </td>
                                    );
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {showMenu && (
                <div className="menu-container">
                    <div className="menu-content1">
                        <h3>Horarios disponibles para el {selectedDate.getDate()} de {MONTH_NAMES[selectedDate.getMonth()]}</h3>
                        {/* Agrega aquí los horarios disponibles para la fecha seleccionada */}
                        <div>
                            <label htmlFor="artist-select">Selecciona una artista:</label>
                            <select id="artist-select" value={selectedArtist} onChange={(event) => handleChange(event, setSelectedArtist, setHours, setInput, artistas, selectedArtist, input)}>
                                {artistOptions.map((artist) => (
                                    <option key={artist.value} value={artist.value}>{artist.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            {hours?.map((hour, index) => {
                                const buttonDate = new Date();
                                buttonDate.setHours(hour, 0, 0, 0);
                                
                                const filteredDate = appointments.filter((e) => {
                                    const date = new Date(e.date); 
                                    return date.getDate() === selectedDate.getDate();
                                })
                                console.log(filteredDate)
                                const takenHours = filteredDate?.map(e=> {return {artist: e.artist, hour: e.hour}});
                                const flattenedHours = takenHours
                                .filter(e => e.artist === selectedArtist)
                                .flatMap(e => e.hour);
                                const isHourTaken = flattenedHours.includes(hour);
                                const isButtonDisabled = (hour <= new Date().getHours() && selectedDate.getDate() === new Date().getDate()) || isHourTaken
                                
                                return (
                                    <button
                                        className={`${isButtonDisabled ? 'disabled' : 'hours'}`}
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
                                        disabled={isButtonDisabled}>
                                        {hour}:00
                                    </button>
                                )
                            })}
                        </div>

                        <div className='formContainer'>
                            <div className='flexFormCont'>
                                <div className='flexForm'>
                                    <label htmlFor="client">Nombre del cliente:</label>
                                    <input placeholder='John Doe' type="text" id='client' name='client' onChange={(e) => handleInputChange(e, input, setInput)} />
                                    <label htmlFor="email">Email del cliente:</label>
                                    <input placeholder='example@email.com' type="text" id='email' name='email' onChange={(e) => handleInputChange(e, input, setInput)} />
                                    <label htmlFor="phone">Número telefónico del cliente:</label>
                                    <input placeholder='(+54 261 2345 678)' type="text" id='phone' name='phone' onChange={(e) => handleInputChange(e, input, setInput)} />
                                    <label htmlFor="description">Descripción:</label>
                                    <textarea id='description' name='description' cols="30" rows="10" onChange={(e) => handleInputChange(e, input, setInput)}></textarea>
                                </div>
                                <div className='two-buttons-one-div'>
                                    <button className='agendar-button' onClick={(e) => handleCreateAppointment(e, input, setInput, dispatch, sendAppointment, selectedArtist)}>Agendar</button>
                                    <button className='agendar-button' >Ver agendados</button>                            
                                    <button className='close-menu-hours' onClick={() => setShowMenu(false)}>Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Agenda;