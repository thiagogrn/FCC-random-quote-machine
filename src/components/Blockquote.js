import React, { Component } from 'react';
import "../App.css"


class Blockquote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            text: ''
        };

        this.getNewQuote = this.getNewQuote.bind(this)
    }


    componentDidMount() {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => {
                const randomNumber = Math.floor(Math.random() * data.length);
                const singleQuote = data[randomNumber];
                this.setState({author: singleQuote.author, text: singleQuote.text})
            }
        )
    }

    getNewQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => {
                const newRandomNumber = Math.floor(Math.random() * data.length);
                const singleQuote = data[newRandomNumber];
                this.setState({author: singleQuote.author, text: singleQuote.text})
            }
        )
    }

    render() {   
        return (
            <div id="quote-box">
                <div id="text">
                    <div className="quote">
                        {this.state.text}
                    </div>
                    <p id="author">
                        {this.state.author ? `-${this.state.author}` : ""}
                    </p>
                </div>
                <div className="click-section">
                    <div className="social-media">
                        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"> 
                            <i className="fa-brands fa-square-twitter"></i>
                        </a>
                        <span className="post">{this.state.text && "Tweet this quote!"}</span>
                    </div>
                    <button id="new-quote" onClick={this.getNewQuote}>
                        New Quote
                    </button>
                </div>
            </div>
        )
    }
}

export default Blockquote;
