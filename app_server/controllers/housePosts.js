/* Request API parts */
const request = require('request');
const apiOptions = {
server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
apiOptions.server = 'https://house-sitters.onrender.com';
}

/* House Posts: */

const _renderHomepage = function(req, res, responseBody){
res.render('house-posts', {
title: 'Loc8r - find a place to work with wifi',
housePosts: responseBody
});
};


/* house posts retrieving data from the api. */
const housePosts = function(req, res){
  const path = '/api/housePosts';
  const requestOptions = {
    url : apiOptions.server + path,
    method : 'GET',
    json : {},
  };
  request(requestOptions, (err, response, body) => {
    _renderHomepage(req, res, body);
    }
  );
};


module.exports = {
housePosts
};
