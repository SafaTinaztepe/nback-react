import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import styles from './Matrix.scss';
import Square from './Square.js';


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
			n: 5,
			sequence: []
		}

		this.tick = this.tick.bind(this);
		this.drawM = this.drawM.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.handleClear = this.handleClear.bind(this);
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
	// however *this* keyword loses context in the recursive call
	// so we pass it as a parameter
	tick(i, self) {
		console.log('ticking');
		let x = parseInt(Math.floor(Math.random() * 3));
		let y = parseInt(Math.floor(Math.random() * 3));
		let xy = ""+x+y;
		let new_m = self.state.m.slice();

		self.setState({
			sequence: [...self.state.sequence, xy]
		});

		new_m[x][y] = <Square id={xy} state={true}/>;
		self.setState({
			m: new_m
		});

		// duration of on blink
		setTimeout(function(){
			new_m[x][y] = <Square key={xy} id={xy} state={false}/>;
			self.setState({
				m: new_m
			});

			// time between blinks
			if(i<self.state.n){
				setTimeout(function(){
					self.tick(++i, self);
				}, 1000);
			}

		}, 1000);

	}



	handleStart(){
		this.tick(1, this);
	}


	handleClear() {
	  clearInterval(this.state.timer);
	}


  render() {
		return(
			<>
	    <table>
				<tbody id="rootM">
					{this.drawM()}
				</tbody>
			</table>

			<button id="start" onClick={this.handleStart}>Start</button>
			<button id="clear" onClick={this.handleClear}>Clear</button>
			</>
		)
  }
}

const MatrixPropTypes = {
	// always use prop types!
};

Matrix.propTypes = MatrixPropTypes;

export default Matrix;
