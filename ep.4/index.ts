function ttheg(size: string) {
    switch (size) {
        case 's':
        console.log('ผอม')
        break
        case 'l' :
        console.log('ท้วม')
        break
        case 'xl' :
        console.log('อ้วน')
        break
        case '2xl' :
        console.log('อ้วน')
        default:
        console.log('Error')
        break
    }
}
ttheg('xl')

function fixDeamical(n:number, digit : number) {
    const x = n.toFixed(digit)
    return x

}
console.log(fixDeamical(40,50,7))

function m(a:number){
    const b = a.toLocaleString()
    return b
}    
console.log (m(10000))

function checkStringLength(str: string) {
    console.log(str.length)
}

checkStringLength('tonynahee')

function sayHi(dayOfweek:number){
    if(dayOfweek === 1){
        console.log('สวัสดีวันอาทิตย์')
    }else if (dayOfweek ===2){
        console.log('สวัสดีวันจันทร์')
    }else if (dayOfweek ===3){
        console.log('สวัสดีวันอังคาร')
    }else if (dayOfweek ===4){
        console.log('สวัสดีวันพุธ')
    }else if (dayOfweek ===5){
        console.log('สวัสดีวันพฤหัสบดี')
    }else if (dayOfweek ===6){
        console.log('สวัสดีวันศุกร์')
    }else if (dayOfweek ===7){
        console.log('สวัสดีวันเสาร์')
    }
}

function sayHiSwitch(dayOfweek:number){
    switch (dayOfweek){
    case 1:
    console.log('สวัสดีวันอาทิตย์')
    break
case 2:
    console.log('สวัสดีวันจันทร์')
    break
case 3:   
    console.log('สวัสดีวันอังคาร')
    break
case 4:   
    console.log('สวัสดีวันพุธ')
    break
case 5:   
    console.log('สวัสดีวันพฤหัสบดั')
    break
case 6:   
    console.log('สวัสดีวันศุกร์')
    break
case 7:   
    console.log('สวัสดีวันเสาร์')
    break
    default :
    console.log('error')
    break
}
}
sayHiSwitch('2')

function getCharByIndex(str : string, index : number){

    return str.charAt(index)

}
console.log(getCharByIndex('หิวขี้',4))    


const str: string = 'อยากนอน'

console.log(str.indexOf('น'))

const r: string = 'อยากกลับบบ้าน'

console.log(r.includes('ไม่อยาก'))

function checkStrIndex(str : string, search : string) {
    if(str.includes(search)){
        console.log(str.indexOf(search))
    }else{
        console.log('ไมาพบที่ค้นหา')
    }
}
checkStrIndex('อยากกลับ home','m')