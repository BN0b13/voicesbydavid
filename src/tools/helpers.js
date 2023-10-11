export const formatInputDate = (date) => {
    const monthDay = date.slice(5);
    const year = date.substring(0,4);
    return `${monthDay}-${year}`;
}