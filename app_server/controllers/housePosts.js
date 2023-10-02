const housePosts = function(req, res){
res.render('house-posts', {
  title: 'Heroes Wanted',
  housePosts: [{
    title: 'House1',
    days: 5,
    dateStart: '5th October',
    imageURL:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    address: '125 High Street, Reading, RG6 1PS',
    description: "House 1 lloking for hero for 5 days",
    dogs: ['barky', 'scratchy', 'walky'],
    cats: ['fluffy','snoozey'],
    others: ['swimmy'],
    applicants: 3,
    dayPosted: '12-10-2023'
  },{
    title: 'House2',
    days: 3,
    dateStart: '5th August',
    imageURL:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    address: '125 High Street, Reading, RG6 1PS',
    description: "House 2 looking for hero for 3 days",
    dogs: ['barky', 'scratchy', 'walky'],
    cats: ['fluffy','snoozey'],
    others: ['horse: speedy'],
    applicants: 1,
    dayPosted: '11-11-2023'
  },{
    title: 'House3',
    days: 7,
    dateStart: '19th October',
    imageURL:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    address: '125 High Street, Reading, RG6 1PS',
    description: "House 3 looking for hero for 7 days",
    dogs: ['barky', 'scratchy', 'Snoopy'],
    cats: [],
    others: ['fluffy'],
    applicants: 5,
    dayPosted: '5-5-2023'
  }]
});
};


module.exports = {
housePosts
};
