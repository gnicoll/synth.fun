import {getPatternMap} from '../Helpers/PatternHelper';

export default class Sequence {
    constructor(name, key, scale, rp) {
        this.name =  name;
        this.steps = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
        this.key = key; //C
        this.scale = scale;
        this.rootPattern = rp;
        this.patternMap = rp? getPatternMap(rp) : undefined;
        console.log('rp: ', rp);
        console.log('patternMap')
        console.log(this.patternMap)
    }

    getRootPattern() {
        return this.rootPattern;
    }

    setSelectable(s) {
        this.selectable = s;
    }

    getSelectable() {
        return this.selectable;
    }

  }