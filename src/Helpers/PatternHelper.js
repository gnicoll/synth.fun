import patterns from "../data/patterns";
import chords from "../data/chords";
import scales from "../data/scales";



export function patternGenerator(key, pattern) {
    console.log('pattern: ', pattern);
    const root = key.rootNote;
    const scale =  scales[key.scale];
    console.log('root: ', root);
    const patternNotes = pattern.map(({step, transpose}) => {
        //pattern is not zero indexed

        console.log('------------- ');
        let noteNum = getNote(step, transpose, scale);
        console.log('noteNum: ', noteNum);
        //if (noteNum > scale.length-1)
        //    noteNum = noteNum - scale.length;
        return noteNum;
    });
    return patternNotes;
}

function getNote(i, transpose, scale){
    let index = i;
    let noteNum = 0;
    if (index < 0) {
        index = index * -1;
        console.log('scale: ', scale);
        console.log('index: ', index);
        let calc = ((index % (scale.length-1))-1)*-1 ;
        console.log('calc: ', calc);
        index++;
    } else {
        index--;
        console.log('scale: ', scale);
        console.log('index: ', index);
        let calc = (index % (scale.length-1))-1;
        console.log('calc: ', calc);
        if (calc === 0 || index <= scale.length-1)
            noteNum = scale[index];
        else{
            noteNum = scale[calc];
            noteNum = noteNum + (Math.floor(index / scale.length-1) * 12);
        }
    }
    return noteNum + (12 * transpose);
}

 
