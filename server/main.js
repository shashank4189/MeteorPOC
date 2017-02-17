import { Meteor } from 'meteor/meteor';
var User;
Meteor.startup(() => {
  // code to run on server at startup
   User = new Meteor.Collection('Users');
});


/*
Router.route('/users',{where: 'server'})
  .get(function(){
    var response = ['data','data1'] // User.find().fetch();
    this.response.setHeader('Content-Type','application/json');
    this.response.end(JSON.stringify(response));
  })
  .post(function(){
    console.log(this.request.body);// User.find().fetch();
    var response = ['deeeata','data1']
    this.response.setHeader('Content-Type','application/json');
    this.response.end(JSON.stringify(response));
  })
*/
var bodyParser = Meteor.npmRequire('body-parser'); // using meteorhacks:npm package
Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );
var postRoutes = Picker.filter(function(req, res) {
  // you can write any logic you want.
  // but this callback does not run inside a fiber
  // at the end, you must return either true or false
  return req.method == "POST";
});

/*
postRoutes.route('/users',function(params, req, res, next) {
  var post = ['datyyya','data1'];
  //res.end(post);
  res.setHeader('Content-Type', 'application/json');
   console.log(req);
  res.end(JSON.stringify(post));
});
*/

/*
Picker.route('/users',function(params, req, res, next) {
  var post = ['data','data1'];
  //res.end(post);
  res.setHeader('Content-Type', 'application/json');
  console.log(req.body);
  res.end(JSON.stringify(post));
});*/
