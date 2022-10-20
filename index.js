const validator  = require("./validator");

async function notification (req, res) {
    const isValid = validator(req, res);
    if(isValid) {
        const { email } = req.body;
        const response = sendEmail(email);
        res.send({
            status:"OK",
            message:"Correo enviado exitosamente",
            response
        })
    }
}

function sendEmail(email){
    console.log("Correo enviado a:", email);
    return email;
}

exports.notification = notification;