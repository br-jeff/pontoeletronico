const fixSize = require('./fixSizeNumbers')
module.exports = {
     //YYYY-MM-DD
    justDate: (date) => {
        let dateObj = new Date(date)
        let day = fixSize(dateObj.getDate(),2)
        let month = fixSize(dateObj.getMonth() + 1,2)
        let year = fixSize(dateObj.getFullYear(),2)
        return new Date(year+"-"+month+"-"+day)
    },
    //YYYY-MM-DD
    stringToDate: (dateString) => {
            let date = new Date(dateString);
            return date;
    },
    addDate: (dateString,addDay) => {
        let date = new Date(dateString);
        if(addDay)
            date.setDate(date.getDate() + addDay);
        return date;
}
    
}