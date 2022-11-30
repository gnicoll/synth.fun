const scales = {
    'chromatic': {
        'name': 'chromatic',
        'notes': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    'major':  {
        'scale': [0,2,4,5,7,9,11],
        'name': 'Major',
        'chords': ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished']
    },
    'diminished': {
        'scale': [0,2,3,5,6,8,9,11],
        'name': 'Diminished',
        'chords': ['diminished', 'diminished', 'major', 'diminished', 'diminished', 'major', 'major', 'diminished']
    },
    'minor': {
        'scale': [0,2,3,5,7,8,10],
        'name': 'Minor',
        'chords': ['minor', 'diminished', 'major', 'minor', 'minor', 'major', 'major']
    },
    'dorian': {
        'scale': [0,2,3,5,7,9,10],
        'name': 'Dorian',
        'chords': ['minor', 'diminished', 'major', 'minor', 'minor', 'major', 'major']
    },
    'phrygian': {
        'scale': [0,1,3,5,7,8,10],
        'name': 'Phrygian',
        'chords': ['diminished', 'major', 'minor', 'minor', 'major', 'major', 'minor']
    },
    'lydian': {
        'scale': [0,2,4,6,7,9,11],
        'name': 'Lydian',
        'chords': ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished']
    },
    'mixolydian': {
        'scale': [0,2,4,5,7,9,10],
        'name': 'Mixolydian',
        'chords': ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished']
    },
    'locrian': {
        'scale': [0,1,3,5,6,8,10],
        'name': 'Locrian',
        'chords': ['diminished', 'major', 'minor', 'minor', 'major', 'major', 'minor']
    },
    'major pentatonic': {
        'scale': [0,2,4,7,9],
        'name': 'Major Pentatonic',
        'chords': ['major', 'minor', 'minor', 'major', 'major']
    },
    'minor pentatonic': {
        'scale': [0,3,5,7,10],
        'name': 'Minor Pentatonic',
        'chords': ['minor', 'major', 'major', 'minor', 'minor']
    }
}
    /*
    'diatonic':         [0, 2, 4, 5, 7, 9, 11],
    'blues diatonic':   [0, 2, 3, 4, 5, 7, 9, 10],
    'major diatonic':   [0, 2, 4, 5, 7, 9, 11],
    'minor diatonic':   [0, 2, 3, 5, 7, 9, 10],
    'major blues':      [0, 2, 3, 4, 5, 7, 9, 10],
    'minor blues':      [0, 2, 3, 5, 6, 7, 9, 10],
    'major bebop':      [0, 2, 4, 5, 7, 9, 11],
    'minor bebop':      [0, 2, 3, 5, 7, 8, 10],
    'major bebop dominant': [0, 2, 4, 5, 7, 9, 10, 11],
    'minor bebop dominant': [0, 2, 3, 5, 7, 8, 10, 11],
    'major bebop minor': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop minor': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop tonic': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop tonic': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop secondary dominant': [0, 2, 3, 5, 7, 9, 10, 11],
    'minor bebop secondary dominant': [0, 2, 3, 5, 7, 8, 10, 11],
    'major bebop secondary minor': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop secondary minor': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop secondary tonic': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop secondary tonic': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop tertiary dominant': [0, 2, 3, 5, 7, 9, 10, 11],
    'minor bebop tertiary dominant': [0, 2, 3, 5, 7, 8, 10, 11],
    'major bebop tertiary minor': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop tertiary minor': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop tertiary tonic': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop tertiary tonic': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop quartenary dominant': [0, 2, 3, 5, 7, 9, 10, 11],
    'minor bebop quartenary dominant': [0, 2, 3, 5, 7, 8, 10, 11],
    'major bebop quartenary minor': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop quartenary minor': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop quartenary tonic': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop quartenary tonic': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop quintenary dominant': [0, 2, 3, 5, 7, 9, 10, 11],
    'minor bebop quintenary dominant': [0, 2, 3, 5, 7, 8, 10, 11],
    'major bebop quintenary minor': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop quintenary minor': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop quintenary tonic': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop quintenary tonic': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop sextenary dominant': [0, 2, 3, 5, 7, 9, 10, 11],
    'minor bebop sextenary dominant': [0, 2, 3, 5, 7, 8, 10, 11],
    'major bebop sextenary minor': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop sextenary minor': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop sextenary tonic': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop sextenary tonic': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop septenary dominant': [0, 2, 3, 5, 7, 9, 10, 11],
    'minor bebop septenary dominant': [0, 2, 3, 5, 7, 8, 10, 11],
    'major bebop septenary minor': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop septenary minor': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop septenary tonic': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop septenary tonic': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop octonary dominant': [0, 2, 3, 5, 7, 9, 10, 11],
    'minor bebop octonary dominant': [0, 2, 3, 5, 7, 8, 10, 11],
    'major bebop octonary minor': [0, 2, 3, 5, 7, 8, 9, 11],
    'minor bebop octonary minor': [0, 2, 3, 5, 7, 8, 9, 10],
    'major bebop octonary tonic': [0, 2, 3, 5, 7, 8, 9, 11],
}//*/


export default scales;