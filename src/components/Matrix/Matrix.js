import React, { Component } from 'react';
import Square from './Square.js';
import Match from './Match.js';
import Button from 'react-bootstrap/Button';
import GameEnd from './GameEnd.js';
import N from './N.js';


class Matrix extends Component {

	constructor(props){
		super(props);

		let m = [];
		for (var i=0; i<3; i++){
			m[i] = [];
			for (var j=0; j<3; j++){
				m[i][j] = <Square key={""+i+j} id={""+i+j} state={false}/>;
			}
		}

		this.state = {
			m: m,
			n: 1,
			length: 20,
			sequence: [],
			interrupt: false,
			ismatch: false,
			correct: 0,
			gameend: false
		}

		this.tick = this.tick.bind(this);
		this.drawM = this.drawM.bind(this);
		this.incrN = this.incrN.bind(this);
		this.decrN = this.decrN.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleUserMatch = this.handleUserMatch.bind(this);
	}

	drawM(){
		let table = []
		for(var i=0; i<this.state.m.length; i++){
			let row = [];
			for(var j=0; j<this.state.m[i].length; j++){
				//console.log(`${i} ${j} ${this.state.m[i][j]}`);
				row.push(
					<td key={""+i+j}>
						{this.state.m[i][j]}
					</td>
				);
			}
			table.push(<tr key={""+i}>{row}</tr>);
		}
		return table;
	}

	// tick is a recursive loop to help synchronously schedule delays
	// *this* keyword loses context in the recursive call
	// so we alias *this* as *self* and pass it as a parameter
	tick(i, self) {
		let x;
		let y;
		let xy;
		if(self.state.sequence.length < self.state.n || Math.random() < .7){
			x = parseInt(Math.floor(Math.random() * 3));
			y = parseInt(Math.floor(Math.random() * 3));
			xy = ""+x+y;
		} else {
			xy = self.state.sequence[self.state.sequence.length-self.state.n]
			x = xy.split("")[0];
			y = xy.split("")[1];
		}
		let new_m = self.state.m.slice();
		console.log(`ticking, ismatch=${xy === self.state.sequence[self.state.sequence.length-self.state.n]}`);

		self.setState({
			ismatch: (xy === self.state.sequence[self.state.sequence.length-self.state.n]),
			sequence: [...self.state.sequence, xy]
		});


		new_m[x][y] = <Square id={""+x+y} state={true}/>;
		self.setState({
			m: new_m
		});

		// duration of on blink
		setTimeout(function(){
			// need to set a *key* prop when inside a scope
			new_m[x][y] = <Square key={""+x+y} id={""+x+y} state={false}/>;
			self.setState({
				m: new_m
			});

			// check if user has right answer
			if(self.state.ismatch === self.state.usermatch){
				self.setState({
					correct: self.state.correct+1
				});
			}

			// reset user answer
			self.setState({
				usermatch: false
			});

			// time between blinks
			if(i<self.state.length && !self.state.interrupt){
				setTimeout(function(){
					self.tick(++i, self);
				}, 1000);
			}


		}, 1000);

		// display score
		if(i === self.state.length){
			self.setState({
				gameend: true
			});
			this.props.handleHistory(`n=${this.state.n} score=${this.state.correct}/20`);
		}
	}

	handleStart(){
		this.setState({
			interrupt: false
		});
		this.tick(0, this);
	}

	handleClear() {
	  this.setState({
			interrupt: true,
			correct: 0
		});
	}

	handleUserMatch(usermatch) {
		this.setState({
			usermatch: usermatch
		});
	}

	incrN(){
		this.setState({
			n: this.state.n+1
		});
	}
	decrN(){
		if(this.state.n > 1){
			this.setState({
				n: this.state.n-1
			});
		}
	}


  render() {
		return(
			<div>
	    <table style={{margin: "0 auto"}}>
				<tbody id="rootM">
					{this.drawM()}
				</tbody>
			</table>

			<N n={this.state.n} incrN={this.incrN} decrN={this.decrN} />

			<Button variant="success"id="start" onClick={this.handleStart}>Start</Button>
			<Button variant="danger" id="clear" onClick={this.handleClear}>Stop</Button>
			<br />
			<Match callback={this.handleUserMatch} />
			<br />
			<GameEnd gameend={this.state.gameend} correct={this.state.correct} />

			</div>
		)
  }
}


export default Matrix;
