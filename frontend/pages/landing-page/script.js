function sendMail(){
    let parms = {
        name : document.getElementById("full-name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        budget : document.getElementById("budget").value,
        message : document.getElementById("message").value,

        
    }

    emailjs.send("service_p5amosr","template_wi67vcu",parms).then(alert("Email Sent!"))
}