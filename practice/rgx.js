// 正则
let rgx = /(\d+?)(?=(\d{3})+[\.|$])/g


console.log('9999000.00'.replace(rgx,"$1,"));