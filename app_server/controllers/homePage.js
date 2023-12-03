/* Request API parts */
const request = require('request');
const apiOptions = {
server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
apiOptions.server = 'https://wsrender.onrender.com';
}


/* house posts retrieving data from the api. */
const homePage = function(req, res){
  res.render('index', { user : req.user, error : req.flash('error')});
};


module.exports = {
homePage
};
