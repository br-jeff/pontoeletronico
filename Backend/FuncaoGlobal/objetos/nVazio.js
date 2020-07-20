function nVazio(obj)  {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return true;
    }
    return false;
}


module.exports = {nVazio}