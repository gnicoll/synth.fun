const patterns = {
    beat: [
        { step: 1, transpose: 0 },
        undefined,
        undefined,
        undefined
    ],
    octave: [
        {
            step: 1,
            transpose: 0
        },
        undefined,
        undefined,
        undefined,
        {
            step: 1,
            transpose: 1
        },
        undefined,
        undefined,
        undefined,
    ],
    octaveupdown: [
        {
            step: 1,
            transpose: 0
        },
        undefined,
        undefined,
        undefined,
        {
            step: 1,
            transpose: 1
        },
        undefined,
        undefined,
        undefined,
        {
            step: 1,
            transpose: 0
        },
        undefined,
        undefined,
        undefined,
        {
            step: 1,
            transpose: -1
        },
        undefined,
        undefined,
        undefined,
    ],
    j61: [
        {
            step: 1,
            transpose: 0
        },
        undefined,
        undefined,
        {
            step: 4,
            transpose: 0
        },
        {
            step: 1,
            transpose: 1
        },
        undefined,
        undefined,
        undefined
    ],
    j6: [
        {
            step: 1,
            transpose: 0
        },
        undefined,
        undefined,
        {
            step: 4,
            transpose: -1
        },
        {
            step: 1,
            transpose: -1
        },
        undefined,
        undefined,
        undefined,
        {
            step: 1,
            transpose: 0
        },
        undefined,
        undefined,
        {
            step: 4,
            transpose: 0
        },
        {
            step: 1,
            transpose: 1
        },
        undefined,
        undefined,
        undefined
    ],
    gn : [
        {step: 1, transpose: 0},
        {step: 4, transpose: 0},
        undefined,
        {step: 3, transpose: 0},
        undefined,
        {step: 4, transpose: 0},
        undefined,
        {step: 6, transpose: 0},
        undefined,
        {step: 7, transpose: 0},
        undefined,
        {step: 6, transpose: 0},
        undefined,
        {step: 4, transpose: 0},
        undefined,
        {step: 3, transpose: 0},
    ]
    /*
    arp: [
        {
            step: 1,
            transpose: 0
        },
        {
            step: 3,
            transpose: 0
        },
        {
            step: 5,
            transpose: 0
        },
        {
            step: 7,
            transpose: 0
        },
        {
            step: 9,
            transpose: 0
        },
        {
            step: 7,
            transpose: 0
        },
        {
            step: 5,
            transpose: 0
        },
        {
            step: 3,
            transpose: 0
        }
    ],
    doublearp: [
        {
            step: 1,
            transpose: 0
        },
        undefined,
        {
            step: 3,
            transpose: 0
        },
        undefined,
        {
            step: 5,
            transpose: 0
        },
        undefined,
        {
            step: 7,
            transpose: 0
        },
        undefined,
        {
            step: 9,
            transpose: 0
        },
        undefined,
        {
            step: 7,
            transpose: 0
        },
        undefined,
        {
            step: 5,
            transpose: 0
        },
        undefined,
        {
            step: 3,
            transpose: 0
        },undefined
    ],*/
}

export default function choosePattern(pattern = undefined) {
    if (!pattern)
        return patterns[Object.keys(patterns)[Math.round(Math.random() * (Object.keys(patterns).length-1))]];
    return patterns[pattern];
};