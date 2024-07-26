function helloWorld(){
    console.log("สวัสดี")
}
้helloWorld() 

function helloName (name:string) {
    console.log(name)
}
helloName('Max')

function getP1() {
    return 3.14
}
console.log(getP1())

function st(fname: string, sname: string) {
    if (fname ==='mix'&& sname ==='zane'){
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }   
}

st('mix','zane')
 
function ga(kname: string, guname: string, mname: string) {
    if (kname ===' mix'&& guname ==='zane' || mname === 'forth') {

        console.log('พร้อมเรียน')
    }else {
        console .log('ไม่พร้อมเรียน')
    }
}
ga('mix','zane','forth')

function ky(bboy: string, height: number, weight: number) {
    if (bboy === 'gblack'&& height > 170 ||  (weight > 50 && weight <= 110 )) {
        console.log("จับใบดำใบเเดง")
    }else {
        console.log("ไม่เข้าเกณฑ์")
    }
}
ky('bboy',171,52)


    function ga( age: number ,month:number , dd:number){
    if( age >16&& month <70000 && dd < 500000 ){
     console.log('รับ100000')
    }else{
      console.log('อด')
    }
 }
  ga('20','2000','11000' )