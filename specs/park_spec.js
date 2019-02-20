const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let park;

    let dinosaur1;
    let dinosaur2;
    let dinosaur3;
    let dinosaur4;
    let dinosaur5;

    let dinosaurCollection1;


  beforeEach(function () {

    park = new Park('jurassic', 200);

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 850);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 915);
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 575);
    dinosaur4 = new Dinosaur('oviraptor', 'omnivore', 620);
    dinosaur5 = new Dinosaur('brachiosaurus', 'herbivore', 310);

    dinosaurCollection1 = [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5];
    dinosaurCollection2 = [dinosaur1, dinosaur2, dinosaur3, dinosaur3, dinosaur5];

    // park.addDinosaur(dinosaur1);
    // park.addDinosaur(dinosaur2);
    // park.addDinosaur(dinosaur3);
    // park.addDinosaur(dinosaur4);
    // park.addDinosaur(dinosaur5);

  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'jurassic');
  });

  it('should have a ticket price', function () {
    const actual = park.price;
    assert.strictEqual(actual, 200);
  });

  it('should have a collection of dinosaurs', function () {
    const expected = [];
    assert.deepStrictEqual(park.dinosaurCollection, expected);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.dinosaurCount();
    const expected = 5;
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.dinosaurCollection = dinosaurCollection1;
    park.removeDinosaur()
    const actual = park.dinosaurCount();
    const expected = 4;
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.dinosaurCollection = dinosaurCollection1;
    result = park.mostVisitedDinosaur();
    actual = result.species
    expected = "velociraptor";
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.dinosaurCollection = dinosaurCollection2;
    result = park.dinosaurSpecies('triceratops');
    actual = result.length;
    expected = 2;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove all dinosaurs of a particular species',function(){
    park.dinosaurCollection = dinosaurCollection2;
    park.removeSpecies('triceratops');
    actual = park.dinosaurCount();
    expected = 3;
    assert.strictEqual(actual, expected);
  });

});
