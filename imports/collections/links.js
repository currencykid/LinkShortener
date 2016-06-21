import { Mongo } from 'meteor/mongo'; 
import validUrl from 'valid-url'; 

Meteor.methods({
  'links.insert':function(url){
  validUrl.isUri(url); 
  }
});

export const Links = new Mongo.Collection('links'); 


