const moment = require("moment")
    
const formatDate = (date,format) => {
    return moment(date).utc().format(format)
}

const truncate = (str) => {
    if (str.length > 120 && str.length > 0) {
      let new_str = str + ' '
      new_str = str.substr(0, 120)
      new_str = str.substr(0, new_str.lastIndexOf(' '))
      new_str = new_str.length > 0 ? new_str : str.substr(0, 120)
      return new_str + '...'
    }
    return str
  }

const stripTags = (input) => {
    return input.replace(/<(?:.|\n)*?>/gm, '')
  }

const editIcon = (storyUser, loggedUser, storyId, floating = true) => {
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        return `<a href="/content/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
      } else {
        return `<a href="/content/edit/${storyId}"><i class="fas fa-edit"></i></a>`
      }
    } else {
      return ''
    }
  }  

module.exports = {
    formatDate,
    truncate,
    stripTags,
    editIcon
}