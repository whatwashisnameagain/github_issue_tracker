import React, { Component } from 'react';

class Enter extends Component {
    state = {
        name: '',
        email: ''
    }

    handleChange = e => {
        console.log(e);
    }

    render() { 

        { name, email } = this.state;

        return (
            <div>
                <input
                    type='text'
                    name='name'
                    value={ name }
                    onChange={ e => handleChange(e)}
                />
            </div>
        );
    }
}

export default Enter;