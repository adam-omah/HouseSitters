/* GET 'login' page */
const loginPage = function(req, res){
res.render('login-page', { title: 'Login' });
};
/* GET 'registration' page */
const registerPage = function(req, res){
res.render('registration-page', { title: 'Register Today!' });
};

/* GET 'Add review' page */
const addReview = function(req, res){
res.render('location-review-form', { title: 'Add review' });
};


module.exports = {
loginPage,
registerPage
};
