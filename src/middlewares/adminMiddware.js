module.exports = (req,res,next) => {
    let administradores = (req.query.user === "Ada" || req.query.user === "Greta" || req.query.user === "Vim" || req.query.user === "Tim")
    if (administradores){
        next()      
    }else{
        return res.send("No tienes los privilegios para ingresar");
    }  
}


