export default class Loop {
    constructor(d) {
        this.dispatch = d;
        //bool to indicate if the loop is playing
        this.patternIndex = 0;
        this.playingIndex = 0;
        //an array of arrays of Step objects
        this.sequences = [[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]];
        this.sequencesIndex = 0;
        //an array of indexes (ints) of the sequences 
        this.sequencesQueue = [];
        this.sequencesQueueIndex = [];
    }

    play() {
        //get the current sequence
        let playingSequence = this.sequences[this.sequencesIndex];
        if (!playingSequence) return undefined;
        //get the current step in the sequence
        if (!playingSequence[this.playingIndex]){
            this.playingIndex = 0;
            this.patternIndex = 0;
        }
        let step = playingSequence[this.playingIndex];
        let noteNumber = undefined;
        let sequenceIndex = this.playingIndex;
        //if no step, get the next step
        if (!step) {
            console.log('playing note: nothing' );
        } else {
            //get the noteNumber
            if (step.rootNote !== null && step.pattern[this.patternIndex] !== null) {
                noteNumber = step.rootNote.number + step.pattern[this.patternIndex]
            } else {
                noteNumber = null;
            }
            console.log('playing note: ' + step?.rootNote?.number + ' ' + this.patternIndex + ': ' + noteNumber);
            this.patternIndex++;
            //if the pattern is done, go to the next step
            if (this.patternIndex >= step.pattern.length) {
                this.playingIndex++;
                this.patternIndex = 0;
            }
        }


        //if the sequence is done, repeat it or go to the next sequence
        if (this.playingIndex >= playingSequence.length || noteNumber === undefined) {
            //at the end of the sequence go back to the beginning or to the next sequence
            if (this.sequencesQueue.length) {
                this.sequencesIndex = this.sequencesQueue[this.sequencesQueueIndex];
                this.sequencesQueueIndex++;
                if (this.sequencesQueueIndex >= this.sequencesQueue.length) {
                    this.sequencesQueueIndex = 0;
                }
            }
            this.playingIndex = 0;
        }

        let playDetails = {
            noteNumber,
            sequenceIndex
            
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

    addStepToSequence(step, index=undefined) {
        let sequence = this.sequences[this.sequencesIndex];
        if (index === undefined) {
            for (let index = 0; index < sequence.length; index++) {
                if (sequence[index] === undefined) {
                    sequence[index] = step;
                    return;
                }
            }
        }

        sequence[index] = step;
        //this.sequencesIndex++;
    }

    setNextSequence(sequence) {
        this.nextSequence = sequence;
    }

  }