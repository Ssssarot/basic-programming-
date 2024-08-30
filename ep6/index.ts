for(let i = 1 ; i <= 13 ; i++){
    console.log('ฉันอายุ'+ i +'ปี')
  }
  
  let i : number = 1
  while (i <= 13 )  {
    console.log('ฉันอายุ'+ i +'ปี')
    i++
  }
  
  let i : number = 1
  do  {
    console.log('ฉันอายุ'+ i +'ปี')
    i++
  } while (i <= 13)
  
  let car1 : string = 'Toyota'
  let car2 : string = 'Honda'
  let car3 : string = 'Suzuki'
  let car4 : string = 'Yamaha'
  let car5 : string = 'Mazda'
  
  const cars : string[] = ['Toyota','Honda','Suzuki','Yamaha','Mazda']
  const num : number[] =[1,2,3,4,5]
  
  const str : string ='ชอบก็จัด ประหยัดทำไม'
  
  console.log(str.charAt(2))

  for(let i =0;i< cars.length; i++) {
    if (cars[i] === 'Yamaha') {
      console.log('รถซื้อแกง จะแรงได้ไง')
    }
}
    let i : number = 0

    while ( i < cars.length) {
        if (cars [i] === 'Yamaha') {
      console.log('รถซื้อแกง จะแรงได้ไง')
        }
        i++
    }


    const lek: number[] = [1,2,3,4,5,6,7,8,9,10]

for(let x = 0; x < 10; x++) {
    if(lek[x] === 3 || lek[x] === 5 || lek[x] === 7) {
       lek[x] = 0
    }
}
console.log(lek)

const freind: string[] = ['ตะวันฉาย','ภูริทัต','ประยุทธ์','ภานุพล','ประวิท']

for (let i = 0; i < 5; i++) {
    if(freind[i] === 'ประยุทธ์') {
        console.log('ไปกินหมูกระทะกัน')
    }
