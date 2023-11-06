  const mailler = require("../config/mailler")
  const Mail ={
    to : function(email){
        this.email = email
        return this 
        
    },
    send : async function(body ,subject ="Objet du mail"){
        await mailler.sendMail({
            from:"samsy@gmail.com",
            to: this.email,
            text:body
        })

    }
 }
 module.exports = Mail