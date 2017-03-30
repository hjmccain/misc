import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import Game from '../js/components/game';
import { Form } from '../js/components/form';
import { NewGame } from '../js/components/new-game';

const should = chai.should();
let result;

describe('Game component', function () {

	beforeEach(() => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Game />);
		result = renderer.getRenderOutput();
	});

	it('Renders Game component and its children', function() {
		const children = result.props.children;
		result.type.should.equal('div');
		children.should.have.length(2);
		result.props.children[0].should.be.an('object');
	});

});

describe('Form component', function () {

	beforeEach(() => {
		const renderer = TestUtils.createRenderer();
		renderer.render(
			<Form game={
				{secretNumber: 0,
			  guess: [],
			  message: ''}
			}/>);
		result = renderer.getRenderOutput();
	});

	it.only('Renders Form and its children', function() {
		const children = result.props.children;
		console.log('form', children);
		result.type.should.equal('div');
		children.should.have.length(3);
	});

});

describe('NewGame component', function () {

	beforeEach(() => {
		const renderer = TestUtils.createRenderer();
		renderer.render(
			<NewGame game={
				{secretNumber: 0,
			  guess: [],
			  message: ''}
			}/>);
		result = renderer.getRenderOutput();
	});

	it('Renders NewGame', function() {
		const child = result.props.children;
		result.type.should.equal('button');
		child.should.be.a('string');
	});

});
