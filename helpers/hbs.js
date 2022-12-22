const moment = require("moment")
    
const formatDate = (date,format) => {
    return moment(date).utc().format(format)
}

module.exports = {
    formatDate
}