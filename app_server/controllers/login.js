/* GET 'login' page */
const loginPage = function(req, res){
res.render('login-page', { title: 'Login' });
};
/* GET 'registration' page */
const registerPage = function(req, res){
res.render('registration-page', { title: 'Register Today!' });
};


module.exports = {
loginPage,
registerPage
};
