const fixSize = require('./fixSizeNumbers')
module.exports = {
    justDate: (date) => {
        let dateObj = new Date(date)
        let day = fixSize(dateObj.getDate(),2)
        let month = fixSize(dateObj.getMonth() + 1,2)
        let year = fixSize(dateObj.getFullYear(),2)
        return new Date(year+"-"+month+"-"+day)
    }
}