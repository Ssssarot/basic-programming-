function add(a: number, b: number){
    return a + b 
}


console.log(add(3,4))
function vd(c: number, e : number ){
    return c- e
}
console.log (vd(5,10))
function ad (a : number , b : number , c : number , e : number){
    return 3*4*5*10
}
console.log(ad(3,4,5,10))



function หิว (หิวจริงไหม : boolean) {
    if( หิว===true) {
         console.log('หิวโว๊ย')
    }else {
        console.log('ไม่หิว')
    }
    
    }
    function grade (homework : number, midterm: number,final:number){
        let score : number = homework + midterm +final
    
        if (score<50){
             return 'สอบตก'
        }else {
            return 'สอบผ่าน' 
        }
    }
    console.log(grade(8,20,30))
    function grade (homework:number,midterm:number,final:number){
        let score :number = homework+midterm+final
        if (score<50) {
            return 'เกรด F'
         }else if (score < 60){
           return 'เกรด D'
         }else if (score < 70){
           return 'เกรด C'
         }else if (score < 80){
           return 'เกรด B'
         }else {
            return 'เกรด A'
         }
        }
        console.log (grade(20,20,30))