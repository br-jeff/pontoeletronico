let nVazio = (obj) => {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return true;
      }
    }
    return false;
  };
  
  
  module.exports = {nVazio}