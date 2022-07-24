export default class Step {
    constructor(n, p) {
        this.rootNote = n;
        this.pattern = p;
        this.selectable = false;
    }

    setSelectable(s) {
        this.selectable = s;
    }

    getSelectable() {
        return this.selectable;
    }

    getPattern() {
        return this.pattern;
    }

    getRootNote() {
        return this.rootNote;
    }
  }