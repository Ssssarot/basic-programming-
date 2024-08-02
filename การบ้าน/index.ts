function BMI(Weight: number, Height: number){
    let Body: number = (Weight / (Height*Height))
    
    if(Body < 18.5){
        return 'น้ำหนักน้อย'
    } else if (Body >= 18.50 && Body <= 22.90 ){
        return 'ปกติ '
    } else if (Body >= 23 && Body <= 24.90){
        return 'ท้วม/เริ่มอ้วน '
    } else if(Body >= 25 && Body <= 29.90){
        return 'อ้วน'
    }else if (Body > 30){
        return 'อ้วนมากครับ'
    }return
}
console.log(BMI(70,1.40))