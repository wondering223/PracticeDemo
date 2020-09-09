// 正则
let rgx = /(\d{3})(?=\.)/

'9999000.00'.replace(rgx,(val,a,c)=>{
    console.log(val);
    console.log(a);
    console.log(c);
    return '$1'
})
