import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Header from './components/header'; 
import CreateLink from './components/createLink';  
import {Links} from '../imports/collections/links'; 
import LinkList from './components/linkList'; 

const App = () => {
  return (
    <div> 
      <Header /> 
      <CreateLink /> 
      <LinkList /> 
    </div> 
  );
}

Meteor.startup(() => {
  // code to run on client at startup
  ReactDOM.render(<App/>, document.querySelector('.container')); 
});
