import React from 'react';
// import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import {Trello, Board, List, Card, AddCard} from '../js/index';

const should = chai.should();
let result;

describe('Trello component', function () {

	beforeEach(() => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Trello />);
		result = renderer.getRenderOutput();
	});

	it.only('Renders and returns a Board', function() {
		const {title, lists, onCardAdd} = result.props;
		// console.log(lists[0].title);
		result.type.should.equal(Board);
		title.should.be.a('string');
		lists.should.be.an('array');
		lists[0].should.have.property('title', 'List 1 title');
		lists[0].title.should.be.a('string');
		lists[0].should.have.property('cards');
		lists[0].cards.should.be.an('array');
		onCardAdd.should.be.a('function');
	});
});

// describe('Board component')

// describe('List component')
//
// describe('Card component')
//
// describe('Add card component')
