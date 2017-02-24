Function.prototype.myBind = function (boundObject) {
  // return (sound) => { this.apply(boundObject, [sound]);
  return (sound) => { this.call(boundObject, sound);
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }
}

const says = function(sound) {
  console.log(`${this.name} says ${sound}!`);
  return true;
};

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

const markovBoundSays = says.myBind(markov);
// const markovBoundSays = says.bind(markov);

markovBoundSays("meow");
