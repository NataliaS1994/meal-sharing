export const getReservations = async() => {
    const response = await fetch("/api/reservations");
    const data = await response.json();
    return data;
}