// async function renderUser(){
//     console.log("Mars");
//   try{
//     let mars = await fetch("https://randomuser.me/api/")
//     let data = await mars.json();
//     console.log("Malulot", data);
    
//   }catch(error){
//     console.log("Xato");
    
//   }
// }
// renderUser()


// async function renderUser(){
//     console.log("Mars");
//   try{
//     let mars = await fetch("https://randomuser.me/api/")
//     let marsKeldi = await mars.json();
//    marsKeldi.results.forEach(element => {
//     const div = document.createElement("div");
//     div.innerHTML = `
//     ${element.name.title} ${element.first} ${element.last}
//     `
//    });
   
//     document.body.appendChild(div)

//   }catch(error){
//     console.log("Xato");
    
//   }
// }
// renderUser()


// async function renderUser() {
//     console.log("Mars");
//     try{
//       const mars = await fetch("https://randomuser.me/api/")
//       const marsKeldi = await mars.json();
//       marsKeldi.results.forEach(element => {
//         const div = document.createElement("div");
//         div.innerHTML = `
//         <div class="box">
//         <img class="image" src = "${element.picture.large}">
//         <h1>${element.name.title} ${element.name.first} ${element.name.last}</h1>
//         <h3>${element.location.state}</h3>
//         <p>Phone: ${element.phone}</p>
//         <p>Manzil: ${element.location.country}</p>
//         <p>Yosh: ${element.registered.age}</p>
//         <p>Email:${element.email}</p>
//         <button class="btn">Change</button>
//         </div>
        
//         `
        
//         document.body.appendChild(div)
//       });
      
//     }catch(error){
//       console.log("Xato");
      
//     }
//   }
//   renderUser()

// async function renderUser() {
//   console.log("Mars");
//   try {
//       const mars = await fetch("https://randomuser.me/api/");
//       const marsKeldi = await mars.json();

//       // Oldin hamma "box"larni o‘chirish (faqat bitta ko‘rinishi uchun)
//       document.body.innerHTML = '';

//       marsKeldi.results.forEach(element => {
//           const div = document.createElement("div");
//           div.innerHTML = `
//           <div class="box">
//           <div class="top"></div>
//           <div class="bottom"><img class="image" src="${element.picture.large}">
//               <h1>${element.name.title} ${element.name.first} ${element.name.last}</h1>
//               <h3>${element.location.state}</h3>
//               <p>Phone: ${element.phone}</p>
//               <p>Manzil: ${element.location.country}</p>
//               <p>Yosh: ${element.registered.age}</p>
//               <p>Email: ${element.email}</p>
//           </div
//               <button class="btn">Change</button>
//           </div>
//           `;

//           document.body.appendChild(div);

          
//           const btn = div.querySelector('.btn');
//           btn.addEventListener('click', renderUser);
//       });

//   } catch (error) {
//       console.log("Xato", error);
//   }
// }

// renderUser();


async function renderUser() {
  console.log("Mars");
  try {
      const mars = await fetch("https://randomuser.me/api/");
      const marsKeldi = await mars.json();

      const userBox = document.querySelector('.box');
      if (userBox) {
          userBox.remove(); // Eski .box ni o‘chirish
      } 

      marsKeldi.results.forEach(element => {
          const div = document.createElement("div");
          div.classList.add("box");
          div.innerHTML = `
              <div class="top"></div>
              <div class="bottom">
                  <img class="image" src="${element.picture.large}">
                  <h1>${element.name.title} ${element.name.first} ${element.name.last}</h1>
                  <h3>${element.location.state}</h3>
                  <p>Phone: ${element.phone}</p>
                  <p>Manzil: ${element.location.country}</p>
                  <p>Yosh: ${element.registered.age}</p>
                  <p>Email: ${element.email}</p>
                  <button class="btn">Change</button>
              </div>
          `;

          document.body.appendChild(div);

          const btn = div.querySelector('.btn');
          btn.addEventListener('click', renderUser);
      });

  } catch (error) {
      console.log("Xato", error);
  }
}

renderUser();

  
