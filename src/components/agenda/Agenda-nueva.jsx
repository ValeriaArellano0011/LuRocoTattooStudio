import './Agenda-vieja.css';
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
} from '../../misc/consts';
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
import MenuAgenda from './MenuAgenda';

function Agenda() {

    const dispatch = useDispatch()

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [month, setMonth] = useState(PRESENT_MONTH)
    const [selectedDate, setSelectedDate] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const artistas = useSelector(state => state.artists)

    const inputInitialState = {
        artist: artistas[0]?._id.toString(),
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

    const daysInMonth = useMemo(() => {
        return new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    }, [currentMonth]);

    const firstDayOfMonth = useMemo(() => {
        return new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay() - 1;
    }, [currentMonth]);



    useEffect(() => {
        dispatch(getAppointments(month))
    }, [month, dispatch])

    useEffect(() => {
        dispatch(getArtistas())
    }, [dispatch])


    return (
        <div>
            <div className='month-year-container'>
                <div className='month-name-container'>
                    <h2>{MONTH_NAMES[currentMonth.getMonth()]}, {currentMonth.getFullYear()}</h2>
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
                                    if (dayNumber < 1 || dayNumber > daysInMonth) {
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

            <div className='prev-month-next-container'>
                <button className='ghost-btn' onClick={() => prevMonth(month, setMonth, currentMonth, setCurrentMonth)}>Anterior</button>
                <button className='ghost-btn' onClick={() => nextMonth(month, setMonth, currentMonth, setCurrentMonth)}>Siguiente</button>
            </div>

            {showMenu && <MenuAgenda input={input} setInput={setInput} artistas={artistas} selectedDate={selectedDate} setShowMenu={setShowMenu}/>}
        </div>
    )
}

export default Agenda;