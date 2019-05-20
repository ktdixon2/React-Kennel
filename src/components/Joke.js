import React, { Component } from 'react'
import { directive } from '@babel/types';

export default class Joke extends Component {
    tellNewJoke = () => {
        const joke = {
            id: 1005,
            type: "Sean Joke",
            setup: "What do you call a fly with no wings?",
            punchline: "A walk"

        }

    }

    render() {
        return (
            <div>
                <header>type {this.props.type}</header>
                <h2>setup {this.props.setup}</h2>
                <p>punchline {this.props.punchline}</p>
                <button onClick={this.tellNewJoke}>Tell a New Joke</button>

            </div>
        );
    }
}
