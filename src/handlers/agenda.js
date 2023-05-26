export function handleDayClick(date, setSelectedDate, setShowMenu, setInput, input) {
    if (date.getDay() === 0) {
        return;
    }
    setSelectedDate(date);
    setShowMenu(true);
    setInput({
        ...input,
        date: date
    })
    console.log(input)
}

export const handleChange = (event, setSelectedArtist, setHours, setInput, artistas, selectedArtist, input) => {
    setSelectedArtist(event.target.value);
    let artista = artistas.find((artist) => { return artist._id === selectedArtist })
    setHours(artista.horarioslaborales)
    setInput({
        ...input,
        artist: artista._id,
        hour: [],
    })
    const takenElements = document.getElementsByClassName('taken');
    while (takenElements.length > 0) {
        takenElements[0].classList.remove('taken');
    }
    console.log(input)
}

export const handleHourChange = (hour, index, input, setInput) => {
    if (!document.getElementById(`taken${index}`).classList.contains('taken')) {
        setInput({
            ...input,
            hour: [...input.hour, hour]
        });
        console.log(input);
    } else {
        setInput({
            ...input,
            hour: [...input.hour.filter(e => e !== hour)]
        });
        console.log(input);
    }
}

export const handleInputChange = (e, input, setInput) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value.toLowerCase()
    });
}

export const handleCreateAppointment = (e, input, setInput, dispatch, sendAppointment, selectedArtist)=> {
    e.preventDefault();
    console.log(input)
    dispatch(sendAppointment(input))
    setInput({
        ...input,
        artist: selectedArtist.toString(),
        client: '',
        email: '',
        phone: '',
        description: '',
        date: null,
        hour: [],
        accepted: true
    })
}