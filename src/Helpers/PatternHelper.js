import patterns from "../data/patterns";
import chords from "../data/chords";
import scales from "../data/scales";



export function patternGenerator(key, pattern) {
    const root = key.rootNote;
    const scale =  scales[key.scale];
    console.log('scale: ', scale);
    console.log('root: ', root);
    const patternNotes = pattern.map((step) => {
        //pattern is not zero indexed
        let noteNum = scale[step-1];
        console.log('noteNum: ', noteNum);
        //if (noteNum > scale.length-1)
        //    noteNum = noteNum - scale.length;
        console.log('returning: ', scale[noteNum]);
        return noteNum;
    });
    return patternNotes;
}

