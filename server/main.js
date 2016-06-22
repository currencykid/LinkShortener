import { Meteor } from 'meteor/meteor';
import {Links} from '../imports/collections/links'; 
import {WebApp} from 'meteor/webapp'; 
import ConnectRoute from 'connect-route'; 

Meteor.startup(() => {

  Meteor.publish('links', function(){
      return Links.find({}); 

  });
});

//executed whenever a user visits w a route like 
//'localhost:3000/abcd' 
function onRoute(req,res,next){
  //take token out of url and try
  //to find a matching link in the Links collection
  const link = Links.findOne({ token: req.params.token });

  if(link){
  // if we find a link object, redirect user to long url
  Links.update(link, { $inc: {clicks: 1} }); 
  res.writeHead(307, {'Location': link.url}); 
  res.end(); 
  }else{
  // if we dont find link obj, send user to normal react app
  next(); 
  }
}

const middleware  = ConnectRoute(function(router){
  router.get('/:token', onRoute); 
});

WebApp.connectHandlers.use(middleware); 
