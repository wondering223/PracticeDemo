let str = `1
3 6
33 66 99
3 6 7 30 60 90`

let a = [33,66,99]
let a2 = [1,2,3,30,60,90]

let res = a.map(e=>a2.filter(p=>e<p))
res.forEach(r=>{
    if(r.length==0){
        console.log(-1);
    }else{
        console.log(a2.indexOf(r[0]) + 1)
    }
})

function fn(str){
    let [c,d,a,a1] = str.split('\n').map(el=>el.trim().split(" ")) 

    return res = a.map(e=>a1.filter(p=>e*1<p*1)).map(r=>r.length==0?-1:a1.indexOf(r[0])+1).join(" ")
}
fn(str)