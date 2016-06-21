import React,{Component} from 'react'; 

class CreateLink extends Component {
  handleSubmit(event){
    event.preventDefault();  

    Meteor.call('links.insert', this.refs.input.value); 
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label> Shorten this link </label> 
          <input ref="input" className="form-control"/>
        </div> 
        <button className="btn btn-primary">Shorten!</button>
      </form> 
    );
  }
}

export default CreateLink; 
