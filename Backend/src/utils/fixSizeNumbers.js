function fixSize(numStr,size){
    if (typeof numStr != "string"){
       numStr = String(numStr)
    }

    let zero = '0'
    
    if (numStr.length < size){
        let dif = size - numStr.length
        for(i=1;i < dif;i++){
            zero+= '0'
        }
        return String(zero + numStr)
    }
    
    else return numStr

}
module.exports = fixSize