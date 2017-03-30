require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

export var Trello = React.createClass({
    getInitialState: function() {
        return {
            title: 'Board title',
            lists: [
                {
                    title: 'List 1 title',
                    cards: ['Card 1', 'Card 2', 'Card 3']
                },
                {
                    title: 'List 2 title',
                    cards: ['Card 1', 'Card 2', 'Card 3']
                }
            ]
        };
    },

    onCardAdd: function(index, text) {
        var lists = this.state.lists.concat();
        lists[index] = {
            title: lists[index].title,
            cards: lists[index].cards.concat(text)
        };
        this.setState({
            lists: lists
        });
    },

    render: function() {
        return <Board title={this.state.title}
                      lists={this.state.lists}
                      onCardAdd={this.onCardAdd} />
    }
});

export var Board = function(props) {
    var lists = props.lists.map(function(list, index) {
        return <List key={index} title={list.title} cards={list.cards}
                     onCardAdd={props.onCardAdd.bind(null, index)} />
    });

    return (
        <div className="board">
            <h2>{props.title}</h2>
            {lists}
        </div>
    );
};

export var List = function(props) {
    var cards = props.cards.map(function(text, index) {
        return <Card key={index} text={text} />
    });

    return (
        <div className="list">
            <h3>{props.title}</h3>
            {cards}
            <AddCard onCardAdd={props.onCardAdd} />
        </div>
    );
};

export var Card = function(props) {
    return (
        <div className="card">
            {props.text}
        </div>
    );
};

export var AddCard = React.createClass({
    onSubmit: function(event) {
        event.preventDefault();

        if (!this.props.onCardAdd) {
            return;
        }

        this.props.onCardAdd(this.refs.textInput.value);
    },
    render: function() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" ref="textInput" />
                <button>Add card</button>
            </form>
        );
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<Trello/>, document.getElementById('app'));
// });
