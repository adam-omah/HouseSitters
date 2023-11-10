/* Request API parts */
const request = require('request');
const apiOptions = {
server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
apiOptions.server = 'https://wsrender.onrender.com';
}

/* House Posts: */
const housePosts = function(req, res){
res.render('house-posts', {
  title: 'Heroes Wanted',
  housePosts: [{
    title: 'House1',
    days: 5,
    startDate: '2023-10-09',
    imageURL:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    address: '125 High Street, Reading, RG6 1PS',
    description: "House 1 lloking for hero for 5 days",
    dogs: ['barky', 'scratchy', 'walky'],
    cats: ['fluffy','snoozey'],
    others: ['swimmy'],
    applicants: 3,
    dayPosted: '2022-12-05'
  },{
    title: 'House2',
    days: 3,
    startDate: '2023-08-05',
    imageURL:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    address: '125 High Street, Reading, RG6 1PS',
    description: "House 2 looking for hero for 3 days",
    dogs: ['barky'],
    cats: ['snoozey'],
    others: ['horse: speedy'],
    applicants: 1,
    dayPosted: '2023-11-11'
  },{
    title: 'House3',
    days: 7,
    startDate: '2023-09-19',
    imageURL:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    address: '125 High Street, Reading, RG6 1PS',
    description: "House 3 looking for hero for 7 days",
    dogs: ['barky', 'scratchy', 'Snoopy'],
    cats: [],
    others: ['fluffy'],
    applicants: 5,
    dayPosted: '2023-05-05'
  }]
});
};


module.exports = {
housePosts
};
