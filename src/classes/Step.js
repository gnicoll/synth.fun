export default class Step {
    constructor(n, rp) {
        this.name = '';
        this.rootPattern = rp;
        this.rootNote = n;
        this.pattern = undefined;
        this.selectable = false;
    }

    setSelectable(s) {
        this.selectable = s;
    }

    getSelectable() {
        return this.selectable;
    }

    getRootPattern() {
        return this.rootPattern;
    }
    
    getPattern() {
        return this.pattern;
    }
    
    setPattern(p) {
        this.pattern = p;
    }

    setName(n) {
        this.name = n;
    }

    getRootNote() {
        return this.rootNote;
    }
  }