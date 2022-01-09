export const getMeals = async () => {
    const response = await fetch("/api/meals");
    const data = await response.json();
    return data;
}
