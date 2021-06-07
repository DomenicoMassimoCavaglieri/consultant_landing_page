//This returns an object with the current date and time
function currentDate() {
    let dates = new Date();
    dates.time = dates.toLocaleTimeString();
    dates.date = dates.toLocaleDateString();
    return dates;
}
export {currentDate};