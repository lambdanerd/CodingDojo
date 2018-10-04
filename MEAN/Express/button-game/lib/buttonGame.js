class Button {
  constructor() {
    this.clicks = 0;
  }

  decrement() {
    return this.clicks > 1 ? --this.clicks && this : this.resetClicks();
  }

  increment() {
    return ++this.clicks && this;
  }

  resetClicks() {
    this.clicks = 0;
    return this;
  }

  // I knew I'd find a banger of an object literal implementation somewhere!
  // https://www.blog.wax-o.com/2015/05/an-alternative-to-if-else-and-switch-in-javascript/
  handleMessage(msg) {
    (({
      decrement: () => {
        this.decrement();
      },
      increment: () => {
        this.increment();
      },
      reset: () => {
        this.resetClicks();
      }
    }[msg] ||
      (() => {
        console.log(`${msg} is not a recognized action.`);
      }))());
  }
}

module.exports = Button;
