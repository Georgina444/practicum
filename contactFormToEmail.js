
const form = document.querySelector('form');
const firstName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const fbLink = document.getElementById("fbLink");
const birthDate = document.getElementById("birthDate");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const fileCV = document.getElementById("fileCV");

function sendEmail(){

  const bodyMessage = `<b>First Name:</b> ${firstName.value}<br> 
                       <b>Last Name:</b> ${lastName.value}<br>
                       <b>Email:</b> ${email.value}<br>
                       <b>Phone Number:</b> ${phone.value}<br>
                       <b>Gender:</b> ${gender.value}<br>
                       <b>Facebook Account:</b> ${fbLink.value}<br>
                       <b>Birth Date:</b> ${birthDate.value}<br>
                       <b>CV:</b> ${fileCV.value}`;
                       

  Email.send({
    SecureToken : "3f814e8b-8260-474d-87a4-57768c6b9dca",
    Host : "smtp.elasticemail.com",
    Username : "vitanovageorgina44@gmail.com",
    Password : "27A02A131C4DC12A27990F9499B87840D2F4",
    To : 'vitanovageorgina44@gmail.com',
    From : "vitanovageorgina44@gmail.com",
    // Attachments:[{

    //   //binary buffer as an attachment
    //   filename: 'me.jpeg',
    //   content: "hello world!",
    // },
    //   {

    // }],
    Subject : "New Application!",
    Body : bodyMessage
}).then(
  message => {
    if(message == "OK"){
      Swal.fire({
        title: "Submitted successfully!",
        text: "Thank you for your application",
        icon: "success"
      });
    }
  }
);  

}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();

  form.reset();
  return false;
})

// NODEMAILER

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  server
})







// function emailSend(){

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "vitanovageorgina@gmail.com",
//         Password : "3EEF79AC01FDEEB7546CE2BB04EB4134759F",
//         To : 'vitanovageorgina44@gmail.com',
//         From : "vitanovageorgina@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );

// }