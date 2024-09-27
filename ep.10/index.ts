console.log("1")
console.log("2")
console.log("3")

setTimeout(() => {
    console.log("4")
})

console.log("5")


// zane.com -> no
// tan@ -> no
// safe@utk.ac.th -> yes
// poppy@gmail.com -> yes
const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYou3000'
    }
]

function register(email: string, password: string,) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            database.push(userObject)
            alert('สมัครสมาชิกเเล้ว ยินดีต้อนรับ คุณ' + email)
        } else {
            alert('รหัสผ่านถูกต้องมากว่า 8 ตัว เเละไม่เกิน 16')
        }
    } else {
        alert('email ไม่ถูกต้อง')
    }
}

register('usaer@gmail.com', 'loveYou3000')


// zane.com -> no
// tan@ -> no
// safe@utk.ac.th -> yes
// poppy@gmail.com -> yes
const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYou3000'
    },
    {
        email: 'mmm@gmail.com',
        password: '1234567เเปด'
    }
]

function login(email: string, password: string) {
    const user = database.filter(function (element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        if (user[0].password === password) {
            alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
        } else {
            alert('รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบ')
        }
    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}
login('mmm@gmail.com', '1234567เเปด')


// กฎการเข้ารหัส
// เปลี่ยน u เป็น +
// เปลี่ยน 6 เป็น *
// เปลี่ยนเลข 0 เป็น ^
+u6*0^ --> ++**^^ --> uu6600
const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYou3000'
    },
    {
        email: 'mmm@gmail.com',
        password: '1234567เเปด'
    }
]

function decryptPassword(password: string) {
    return password.replaceAll('+','u').replaceAll('*', '6').replaceAll('^', '0')
}

function login(email: string, password: string) {
    const user = database.filter(function (element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        const realPassword = decryptPassword(user[0].password)
        if(realPassword === password) {
            alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
        }else {
            alert('รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบ')
        }
    }else {
        alert('ไม่พบผู้ใช้ระบบ')
    }
}
login('mmm@gmail.com' ,'1234567เเปด')




