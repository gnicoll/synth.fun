import chords from "../data/chords";
import scales from "../data/scales";
import {getChordInScale} from "../Helpers/PatternHelper";

export default class Loop {
    constructor(d, s) {
        this.synth = s;
        this.dispatch = d;
        //bool to indicate if the loop is playing
        this.patternIndex = 0;
        this.sequenceIndex = 0;
        //an array of arrays of Step objects
        this.sequences = [
            {
                'name': 'Sequence 1',
                'steps': [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
                'key': 24, //C
                'scale': 'major'
            }
        ];
        this.sequencesIndex = 0;
        //an array of indexes (ints) of the sequences 
        this.sequencesQueue = [];
        this.sequencesQueueIndex = [];
    }

    play() {
        //get the current sequence
        let currentSequence = this.sequences[this.sequencesIndex];
        if (!currentSequence) return undefined;
        //get the current step in the sequence
        if (!currentSequence.steps[this.sequenceIndex]){
            this.sequenceIndex = 0;
            this.patternIndex = 0;
        }
        let step = currentSequence.steps[this.sequenceIndex];
        let noteNumbers = undefined;
        let sequenceIndex = this.sequenceIndex;
        let patternIndex = this.patternIndex;
        //if no step, get the next step
        if (!step) {
        } else {
            //get the noteNumber
            if (step.rootNote !== null && step.pattern[this.patternIndex] !== null) {
                noteNumbers = getChordInScale(currentSequence.key, currentSequence.scale, (step.rootNote.number + step.pattern[this.patternIndex]))
                console.log(noteNumbers)
            } else {
                noteNumbers = null;
            }
            this.patternIndex++;
            //if the pattern is done, go to the next step
            if (this.patternIndex >= step.pattern.length) {
                this.sequenceIndex++;
                this.patternIndex = 0;
            }
        }

        let playDetails = {
            noteNumbers,
            'sequenceIndex':sequenceIndex,
            'pattern': step?.pattern,
            'patternIndex': [patternIndex]
        }

        //if the sequence is done, repeat it or go to the next sequence
        if (this.sequenceIndex >= currentSequence.steps.length || noteNumbers === undefined) {
            //at the end of the sequence go back to the beginning or to the next sequence
            if (this.sequencesQueue.length) {
                this.sequencesIndex = this.sequencesQueue[this.sequencesQueueIndex];
                this.sequencesQueueIndex++;
                if (this.sequencesQueueIndex >= this.sequencesQueue.length) {
                    this.sequencesQueueIndex = 0;
                }
            }
            this.sequenceIndex = 0;
        }

        
        this.dispatch({
            'type': 'setPlayDetails',
            playDetails
        });

        return playDetails;
    }

    getCurrentSequence() {
        if (!this.sequences[this.sequencesIndex]){
            this.sequences[this.sequencesIndex] = [[]];
        }

        return this.sequences[this.sequencesIndex].steps;
    }

    getNextStepIndex() {
        let sequence = this.sequences[this.sequencesIndex];
        for (let index = 0; index < sequence.steps.length; index++) {
            if (sequence.steps[index] === undefined) {
                return index;
            }
        }
        return sequence.length;
    }

    addStepToSequence(step, index=undefined) {
        let sequence = this.sequences[this.sequencesIndex];
        if (index !== undefined && this.getNextStepIndex() < 16) {
            for (let index = 0; index < sequence.length; index++) {
                if (sequence[index] === undefined) {
                    sequence.steps[index] = step;
                    return;
                }
            }
            sequence.steps[index] = step;
        }
    }

    setNextSequence(sequence) {
        this.nextSequence = sequence;
    }

  }