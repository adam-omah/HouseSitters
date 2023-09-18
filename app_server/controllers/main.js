/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'House Sitters' });
};

module.exports = {
  index
};
