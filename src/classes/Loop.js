export default class Loop {
    constructor(d, s) {
        this.synth = s;
        this.dispatch = d;
        //bool to indicate if the loop is playing
        this.patternIndex = 0;
        this.sequenceIndex = 0;
        //an array of arrays of Step objects
        this.sequences = [[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]];
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
        if (!currentSequence[this.sequenceIndex]){
            this.sequenceIndex = 0;
            this.patternIndex = 0;
        }
        let step = currentSequence[this.sequenceIndex];
        let noteNumber = undefined;
        let sequenceIndex = this.sequenceIndex;
        let patternIndex = this.patternIndex;
        //if no step, get the next step
        if (!step) {
        } else {
            //get the noteNumber
            if (step.rootNote !== null && step.pattern[this.patternIndex] !== null) {
                noteNumber = step.rootNote.number + step.pattern[this.patternIndex]
            } else {
                noteNumber = null;
            }
            this.patternIndex++;
            //if the pattern is done, go to the next step
            if (this.patternIndex >= step.pattern.length) {
                this.sequenceIndex++;
                this.patternIndex = 0;
            }
        }

        let playDetails = {
            noteNumber,
            'sequenceIndex':sequenceIndex,
            'pattern': step?.pattern,
            'patternIndex': [patternIndex]
        }

        //if the sequence is done, repeat it or go to the next sequence
        if (this.sequenceIndex >= currentSequence.length || noteNumber === undefined) {
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

        return this.sequences[this.sequencesIndex];
    }

    getNextStepIndex() {
        let sequence = this.sequences[this.sequencesIndex];
        for (let index = 0; index < sequence.length; index++) {
            if (sequence[index] === undefined) {
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
                    sequence[index] = step;
                    return;
                }
            }
            sequence[index] = step;
        }
    }

    setNextSequence(sequence) {
        this.nextSequence = sequence;
    }

  }