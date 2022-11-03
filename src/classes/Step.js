export default class Step {
    constructor(n, rp) {
        this.name = '';
        this.rootNote = n;
        this.pattern = undefined;
        this.patternMap = undefined;
        this.selectable = false;
    }

    setSelectable(s) {
        this.selectable = s;
    }

    getSelectable() {
        return this.selectable;
    }
    
    getPatternMap() {
        return this.patternMap;
    }
    
    setPatternMap(p) {
        this.patternMap = p;
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