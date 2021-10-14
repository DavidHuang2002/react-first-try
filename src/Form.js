import React, {Component} from 'react';

class Form extends Component {

    // only keep track of the one character
    initialState = {
        name: '',
        job: ''
    };

    state = this.initialState;

    handleChange = (event) => {
        // target seems to be a name - value pair
        const {name, value} = event.target;

        this.setState(
            {[name]: value}
        );
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        // dont forget to reset back to initial state
        this.setState(this.initialState);
    }

    render(){
        const {name, job} = this.state;

        return (
            <form>
                <label htmlFor="name">Name:</label>
                <input
                type='text'
                name='name'
                id='name'
                // not sure whats the use of value; for consistency maybe?
                // ok I get it now. in submit form there is a step that resets state to initialState
                // this is a means of resetting the input fields, pretty clever
                value = {name}
                onChange={this.handleChange}
                />

                <label htmlFor="job">Job:</label>
                <input
                type='text'
                name='job'
                id='job'
                value = {job}
                onChange={this.handleChange}
                />
                <input
                type='button'
                value='Submit'
                onClick={this.submitForm}
                />
            </form>
        );
    }

}

export default Form;