
function partOfDay(hour) {

    if (hour >= 7 && hour <= 18)
        return 'Daylight'

    return 'Night'
}

module.exports = {
    partOfDay
}