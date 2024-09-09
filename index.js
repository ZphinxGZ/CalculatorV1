let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let operators = ["%", "+", "-", "*", "/", "="];

let output  = ""
let calculator = (btnValue) => {
    //เช็คว่าปุ่มที่กดคือ "=" ใช่มั้ย และ เช็คว่า output ไม่ใช่สตริงว่าง
    if(btnValue === "=" && output !== ""){
        //eval() คือคำนวณนิพจน์ที่อยู่ใน output โดยใช้ผลลัพธ์จากการแทนที่เปอร์เซ็นต์เป็นการหารด้วย 100    *******(ใช้เยอะ จำๆ)
        output = eval(output.replace("%", "/100")) //จะเปลี่ยนสัญลักษณ์ % ใน output เป็นการหารด้วย 100 ตัวอย่าง 50% จะเท่ากับ 50/100 = 0.5
    }else if(btnValue === "AC"){
        //หมายถึงถ้ากด AC แล้ว output จะเป็นค่าว่าง
        output = ""
    }
    else if(btnValue === "DE"){
        //หมายถึงถ้ากด DE แล้ว output จะลบตัวสุดท้าย
        output = output.slice(0, -1)
    }else{
        //output เป็นค่าว่างและปุ่มที่กดเป็นโอเปอเรเตอร์ ฟังก์ชันจะ return ออก
        if(output === "" && operators.includes(btnValue)) return

        //output ไม่เป็นค่าว่าง หรือ btnValue ไม่ใช่โอเปอเรเตอร์) โค้ดจะทำงาน
        output = output + btnValue
    }
    display.value = output
}

//อันนี้คือแอดอีเว้นให้ปุ่มทุกปุ่ม
buttons.forEach((button) => {
    button.addEventListener("click", (ele) => calculator(ele.target.dataset.value))
})




