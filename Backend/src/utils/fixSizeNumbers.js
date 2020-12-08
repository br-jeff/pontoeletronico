function fixSize(num,size){
    let numStr = String(num)
    let zero = '0'
    
    if (numStr.length < size){
        let dif = size - numStr.length
        console.log(dif)
        for(i=1;i < dif;i++){
            zero+= '0'
        }
    }
    return String(zero + num)

}

module.exports = fixSize()