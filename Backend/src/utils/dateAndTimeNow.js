
    let dateObj = new Date()
    let day = dateObj.getDate()
    let month = dateObj.getMonth() + 1
    let year = dateObj.getFullYear()
    let dateToday = new Date(year + "-" + month + "-" + day)
    let HourAndMinutes = `${dateObj.getHours()}:${dateObj.getMinutes()}`

module.exports = {
    dateNow: () => dateToday,
    hourNow: () => HourAndMinutes
}