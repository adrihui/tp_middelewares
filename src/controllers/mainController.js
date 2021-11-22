module.exports = {
    index : (req,res) => {
        return res.render('index')
    },
    login : (req,res) => {
        return res.render('login')
    },
    register : (req,res) => {
        return res.render('register')
    },
    administrador : (req,res) => {
        return res.render('admin')
    },
    admin : (req,res) => {
        return res.send("Hola Admin: " +req.query.user) 
    }
}