document.addEventListener('DOMContentLoaded', () => {  
    // รับองค์ประกอบ div ที่มี ID 'user-list' จาก HTML  
    const userListElement = document.getElementById('user-list');  
  
    // เริ่มต้นคำขอ fetch ไปยัง URL ที่ระบุ เพื่อดึงข้อมูลผู้ใช้  
    fetch('https://jsonplaceholder.typicode.com/users')  
      // เมื่อได้รับคำตอบ แปลงเป็น JSON  
      .then(response => response.json())  
      // เมื่อได้ข้อมูลผู้ใช้แล้ว ทำงานกับข้อมูล  
      .then(users => {  
        // วนซ้ำผ่านผู้ใช้แต่ละคนในรายการ  
        users.forEach(user => {  
          // สร้างองค์ประกอบ div ใหม่สำหรับแต่ละผู้ใช้  
          const userElement = document.createElement('div');  
          // เพิ่มคลาส CSS 'user-item' ให้กับองค์ประกอบ div  
          userElement.classList.add('user-item');  
          // ตั้งค่า HTML ภายในขององค์ประกอบ div ด้วยข้อมูลผู้ใช้ (ชื่อ, อีเมล, โทรศัพท์)  
          userElement.innerHTML = `  
            <h3>${user.name}</h3>  
            <p>อีเมล: ${user.email}</p>  
          `;  
          // เพิ่มองค์ประกอบ div ของผู้ใช้ลงในองค์ประกอบ 'user-list'  
          userListElement.appendChild(userElement);  
        });  
      })  
      // หากเกิดข้อผิดพลาดระหว่างการดึงข้อมูลหรือการประมวลผลผู้ใช้  
      .catch(error => {  
        // บันทึกข้อผิดพลาดลงในคอนโซล  
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้:', error);  
        // แสดงข้อความแสดงข้อผิดพลาดในองค์ประกอบ 'user-list'  
        userListElement.textContent = 'เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้';  
      });  
  });