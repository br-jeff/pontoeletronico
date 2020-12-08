const fixSize = require('./fixSizeNumbers')

    let dateObj = new Date()
    let day = fixSize(dateObj.getDate(),2)
    let month = fixSize(dateObj.getMonth() + 1,2)
    let year = fixSize(dateObj.getFullYear(),2)
    let Hour = fixSize(dateObj.getHours(),2)
    let minutes = fixSize(dateObj.getMinutes(),2)
    
    let dateToday = new Date(year + "-" + month + "-" + day)
    let HourAndMinutes = `${Hour}:${minutes}`

module.exports = {
    dateNow: () => dateToday,
    hourNow: () => HourAndMinutes
}