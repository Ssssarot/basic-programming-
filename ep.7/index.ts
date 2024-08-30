co score = [10, 23, 26, 30, 31]

let sum : number = 0    

for (let i = 0; i < score.length ; i++) {
    sum = sum + score [i]
}
let avg = sum / score.length
console.log("total:",sum)
console.log("avg:",avg)

const myStudent: string = "เซน,เเทน,เวฟ,รุ้ง,เเท็ก,สร"


const animal: string ='หมา*แมว*กระต่าย*หมี'

const animalA : string[] = animal.split('*')


console.log(animalA)


const animals: string ='หมา*แมว*กระต่าย*กระทิง'

const animalAn : string[] = animals.split('*')


console.log("ตั้งต้น: ",animalAn)

animalAn.pop()
console.log("เอาตัวสุดท้ายออก:",animalAn)

animalAn.push('กระทิง')

console.log("ใส่ต่อท้าย:",animalAn)

animalAn.shift()
console.log("เอาตัวหน้าออก:",animalAn)

animalAn.unshift('กาบิบาร่า')
console.log("ใส่ตัวหน้า",animalAn)

const friend: string = "ตู่,ป้อม,โทนี่,อนุทิน"

const bestfriend: string[] = friend.split(',')

bestfriend.sort()

console.log(bestfriend)

bestfriend.reverse()

console.log(bestfriend)



const me = {
    firstname: 'Sarot',
    lastname: 'dikkhuntod',
    age: 18
}

// ประวัติส่วนตัว

// ชื่อ: Sarot
// นามสกุล: dikkhuntod
// อายุ: 18
// เบอร์: 0886656311 
// เพศ: ชาย