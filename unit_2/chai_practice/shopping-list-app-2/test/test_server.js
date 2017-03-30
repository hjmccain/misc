// describe('Shopping List', function() {
//     it('should list items on get');
//     it('should add an item on post');
//     it('should edit an item on put');
//     it('should delete an item on delete');
// });

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should(),
    app = server.app,
    storage = server.storage;

chai.use(chaiHttp);

/*
POST to an ID that exists
POST without body data
POST with something other than valid JSON
PUT without an ID in the endpoint
PUT with different ID in the endpoint than the body
PUT to an ID that doesn't exist
PUT without body data
PUT with something other than valid JSON
DELETE an ID that doesn't exist
DELETE without an ID in the endpoint
*/

describe('Shopping list', function() {
  it('should return an array of objects on GET', function(done) {
    chai.request(app)
      .get('/items')
      .end(function(err, res) {
        should.equal(err, null);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        storage.items.should.have.length(3);
        res.body[0].should.have.all.keys('name', 'id');
        res.body[0].should.be.an('object');
        res.body[0].name.should.be.a('string');
        res.body[0].id.should.be.a('number');
        res.body[0].name.should.equal('Broad beans');
        res.body[1].name.should.equal('Tomatoes');
        res.body[2].name.should.equal('Peppers');
        done();
    });
  });
  it('should add and display a new item on POST', function(done) {
    chai.request(app)
      .post('/items/')
      .send( { 'name' : 'Kale' } )
      .end(function(err, res) {
        should.equal(err, null);
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.an('object');
        res.body.should.have.all.keys('name', 'id');
        res.body.name.should.be.a('string');
        res.body.id.should.be.a('number');
        storage.items.should.have.length(4);
        storage.items[0].name.should.equal('Broad beans');
        storage.items[1].name.should.equal('Tomatoes');
        storage.items[2].name.should.equal('Peppers');
        storage.items[3].should.have.all.keys('name', 'id');
        done();
      });
  });
  it('should not post an empty object on POST', function(done) {
    chai.request(app)
      .post('/items/')
      .send( {} )
      .end(function(err, res) {
        res.should.have.status(400);
        should.not.equal(err, null);
        storage.items[0].name.should.equal('Broad beans');
        storage.items[1].name.should.equal('Tomatoes');
        storage.items[2].name.should.equal('Peppers');
        done();
      });
  });
  it('Should return the updated item on put', function(done) {
    chai.request(app)
      .put('/items/2')
      .send( { 'name' : 'Red onion', 'id' : '2' } )
      .end(function(err,res) {
        res.should.have.status(200);
        should.equal(err, null);
        res.should.be.json;
        res.body.id.should.be.a('number');
        res.body.name.should.be.a('string');
        res.body.name.should.equal('Red onion');
        res.body.should.have.all.keys('name','id');
        res.body.should.be.an('object');
        storage.items.should.have.length(4);
        done();
    });
  });
});
