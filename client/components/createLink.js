import React,{Component} from 'react'; 

class CreateLink extends Component {
  constructor(props){
    super(props);
    this.state = { error: ''  };
  }

  handleSubmit(event){
    event.preventDefault();  

    Meteor.call('links.insert', this.refs.input.value, (error) => { 
                if(error){
                  this.setState({ error: "Plase enter a valid URL"  });
                } else {
                  this.setState({ error: ""  });
                  this.refs.input.value = ""; 
                }
          }); 
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label> Shorten this link </label> 
          <input ref="input" className="form-control"/>
        </div> 
        <div className="text-danger"> {this.state.error} </div> 
        <button className="btn btn-primary">Shorten!</button>
      </form> 
    );
  }
}

export default CreateLink; 
