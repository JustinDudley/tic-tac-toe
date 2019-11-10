
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Eexist 3 React components:  Square, Board, Game

// See below:  The "Square" component "renders" a "button".
class Square extends React.Component {
    //add constructor:
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }
    render() {
        return (
            // passing a function as the onClick prop:
            <button className="square" 
            // "onClick handler"
            onClick={() => this.setState({ value: 'X'})}>
            {/* <button className="square" onClick={() => alert('click-clack')}> */}
            {/* <button className="square" onClick={function() { alert('click'); }}> */  /*it looked like this before we switched to =>  (arrow notation)*/}
                {/* {this.props.value} */}
                {this.state.value}
            </button>
        );
    }
}

// The Board component "renders" 9 squares
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }


    renderSquare(i) {
        return <Square value={this.state.squares[i]} />;
        // return <Square value={i} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ==============================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);