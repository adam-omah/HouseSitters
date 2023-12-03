const apiOptions = {
server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
apiOptions.server = 'https://wsrender.onrender.com';
}


/* GET 'login' page */
const loginPage = function(req, res){
  res.render('login', { title: 'Login' });
};
/* GET 'registration' page */
const registerPage = function(req, res){
  res.render('registration-page', { title: 'Register Today!', user : req.user, error : req.flash('error')});
};


module.exports = {
loginPage,
registerPage
};
