export default class Pattern {
    constructor(n, p) {
        this.name = n;
        this.pattern = p;
    }

    setSelectable(s) {
        this.selectable = s;
    }

    getSelectable() {
        return this.selectable;
    }
  }