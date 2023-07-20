let sayMixin = {
  say(phrase) {
    console.log(phrase);
  },
};

// mixin
let sayHiMixin = {
  __proto__: sayMixin,
  sayHi() {
    // call parent method
    super.say("Hello " + this.name);
  },
};

// usage:
export class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);
