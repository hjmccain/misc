import chai from 'chai';

const should = chai.should();

import * as actions from '../js/actions/index'

describe('actions', function(){
	it('should add a guess', function(){
		const num = 1
		const expectedAddGuess = {
			type: actions.ADD_GUESS,
			num
		}
	actions.addGuess(num).should.eql(expectedAddGuess)
	})
	it('should start a new game', function(){
		const ourAction = actions.newGame();
		// console.log(ourAction)
		ourAction.type.should.equal('NEW_GAME')
		ourAction.magicNum.should.be.a('number')
		ourAction.magicNum.should.be.within(1,100);
	})
})
