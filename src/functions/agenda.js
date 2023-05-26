export const nextMonth = (month, setMonth, currentMonth, setCurrentMonth) => {
    const newMonth = month + 1;
    setMonth(newMonth);
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
};

export const prevMonth = (month, setMonth, currentMonth, setCurrentMonth) => {
    const newMonth = month - 1;
    setMonth(newMonth);
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
};

export function artistOptionsList(artistas){
    return artistas?.map((artista) => ({
        value: artista._id,
        label: artista.nombre
    }));
}