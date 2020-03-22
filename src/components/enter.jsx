import React, { Component } from 'react';

class Enter extends Component {
    state = {
        name: '',
        email: ''
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    };

    render() { 

        const { name , email } = this.state;

        return (
            <div>
                <h1>Hello { name }</h1>
                <p>{ email }</p>
                <form>
                    <label>
                        Name
                        <input
                            type='text'
                            name='name'
                            placeholder="what is your name"
                            value={ name }
                            onChange={ e => this.handleChange(e)}
                        />
                    </label>
                    <label>
                        Name
                        <input
                            type='email'
                            name='email'
                            placeholder="what is your email"
                            value={ email }
                            onChange={ e => this.handleChange(e)}
                        />
                    </label>
                </form>
            </div>
        );
    }
}

export default Enter;