import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component { 
  // state = {
  //   characters: [
  //     {
  //       name: 'David',
  //       job: 'Loafer'
  //     },
  //     {
  //       name: 'John',
  //       job: 'Goldfish trainer'
  //     },
  //     {
  //       name: 'Jack',
  //       job: 'the Rapper'
  //     },
  //   ]
  // };

  state = {
    characters: [],
  };

  // !important note: this function has to be an arrow func
  // because arrow function inherits its enclosing scope instead of creating a 
  // scope for itself like normal func does

  // if we use a normal func here, we will have to write a constructor func
  // which binds the removeCharater to its scope to make sure 'this' refers to the
  // scope of App
  removeCharacter = indexToRm => {
    const {characters} = this.state;
    
    const editedCharacters = (
      characters.filter(
        (elem, index) => {return (index !== indexToRm);}
      )
    );

    this.setState({characters: editedCharacters});
  }; 

  handleSubmit = (characterToAdd) => {
    const {characters} = this.state;

    this.setState({
      characters: [...characters, characterToAdd]
    });
  };

  render() {
    // the {} here does the unpacking
    // like let {a, b, c} = obj is equivalent to let a = obj.a; let b =...
    const {characters} = this.state;

    return (
      // the div here is necessary because 
      // "Adjacent JSX elements must be wrapped in an enclosing tag"
      <div>
        <Table charactersData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  };
}

export default App;