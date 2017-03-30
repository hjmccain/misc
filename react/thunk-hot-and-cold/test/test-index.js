import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();
// file paths
// import Index from '../js/index';
import Feedback from '../js/components/feedback';
import {Game} from '../js/components/game';
import GuessCount from '../js/components/guess-count';
// import GuessInput from '../js/components/guess-input';
// import NavBar from '../js/components/nav-bar';
import PrevGuesses from '../js/components/prev-guesses';

const renderer = TestUtils.createRenderer();

// describe('Game Component', function() {
//   it('renders the game',  function() {
//   	renderer.render(<Game />)
//
//   	const result = renderer.getRenderOutput();
//   	// console.log(result);
//
//
//   });
// });

describe('GuessCount Component', function() {
  it('renders a p with guess count',  function() {
  	// const renderer = TestUtils.createRenderer();
  	renderer.render(<GuessCount stateCount={4}/>)

  	const result = renderer.getRenderOutput();
  	// console.log(result);

  	result.type.should.equal('p')
  	result.props.children.join('').should.equal('Guess #4!')

  });
});
describe('Feedback Component', function() {
  it('renders a feedback div with current feedback', function(){
    renderer.render(<Feedback stateFeedback='hot'/>)

    const result = renderer.getRenderOutput();
    // console.log(result);

    result.type.should.equal('div')
    result.props.id.should.equal('feedback')
    result.props.children.should.equal('hot')
  });
});

describe('PrevGuesses Component', function(){
  it('renders a prev-guesses div with a mapped list', function() {
    renderer.render(<PrevGuesses guessedNumbers={[1, 2, 3]} />)

    const result = renderer.getRenderOutput();
    // console.log(result);
    // console.log(result.props.children.props);
    //console.log(result.props.children);

    result.type.should.equal('div')
    result.props.id.should.equal('prev-guesses')
    result.props.children.type.should.equal('ul')
    result.props.children.props.children[0].type.should.equal('li')
    result.props.children.props.children[1].type.should.equal('li')
    result.props.children.props.children[2].type.should.equal('li')
    result.props.children.props.children[0].props.children.should.equal(1)
    result.props.children.props.children[1].props.children.should.equal(2)
    result.props.children.props.children[2].props.children.should.equal(3)

    result.props.children.props.children[0].key.should.equal('0')
    result.props.children.props.children[1].key.should.equal('1')
    result.props.children.props.children[2].key.should.equal('2')

    result.props.children.props.children.length.should.equal(3)

  });
});
