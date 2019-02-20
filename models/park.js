const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function () {
  this.dinosaurCollection.pop();
};

Park.prototype.dinosaurCount = function(){
  return this.dinosaurCollection.length;
};

Park.prototype.mostVisitedDinosaur = function(){
  let topDinosaur;

  for (var dinosaur of this.dinosaurCollection){
    if (topDinosaur === undefined)
    {
      topDinosaur = dinosaur;
    } else if(dinosaur.guestsAttractedPerDay > topDinosaur.guestsAttractedPerDay){
      topDinosaur = dinosaur;
    }
  }
  return topDinosaur;
};

Park.prototype.dinosaurSpecies = function(species){

  let dinosaurSpecies = [];

  for (let dinosaur of this.dinosaurCollection){
    if(dinosaur.species === species){
      dinosaurSpecies.push(dinosaur);
    }
  }
  return dinosaurSpecies;
};

Park.prototype.removeSpecies = function(species){
  for(let i = 0; i < this.dinosaurCollection.length; i++){
    if (this.dinosaurCollection[i].species === species){
      this.dinosaurCollection.pop(i);
    }
  }
}

module.exports = Park;
