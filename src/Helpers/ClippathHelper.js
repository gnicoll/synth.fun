const options = [
    'X000',
    '0X00',
    '00X0',
    '000X',
]


export function GenerateClipPath(){

    let coord1 = RandomsizeCoordinates([0, 0]);
    let coord2 = RandomsizeCoordinates([100, 0]);
    let coord3 = RandomsizeCoordinates([100, 100]);
    let coord4 = RandomsizeCoordinates([0, 100]);

    const option = options[Math.floor(Math.random() * options.length)];
    if ([...option][0] === 'X') {
        coord1 = [0, 0];
    }
    if ([...option][1] === 'X') {
        coord2 = [100, 0];
    }
    if ([...option][2] === 'X') {
        coord3 = [100, 100];
    }
    if ([...option][3] === 'X') {
        coord4 = [0, 100];
    }

    return `polygon(${coord1[0]}% ${coord1[1]}%, ${coord2[0]}% ${coord2[1]}%, ${coord3[0]}% ${coord3[1]}%, ${coord4[0]}% ${coord4[1]}%)`;
}

function RandomsizeCoordinates(coordinates, variance = 5){
    let randomised = [];
    
    for (let index = 0; index < coordinates.length; index++) {
        let value = coordinates[index];
        if (value === 0){
            value = value + Math.random() * variance;
        } else if (value === 100) {
            value = value - Math.random() * variance;
        }
        randomised[index] = value;
    };

    return randomised;
}


export function GeneratePatternClipPath(pattern = undefined){
    if (!pattern){
        return `polygon(100% 50%, 100% 100%, 0 100%, 0 50%)`;
    }
    for (let index = 0; index < pattern.length; index++) {
        const step = pattern[index];
        
    }
   return `polygon(100% 50%, 100% 100%, 0 100%, 0 50%, 10% 40%, 20% 30%, 30% 20%, 40% 10%, 50% 00%, 60% 10%, 70% 20%, 80% 30%,90% 40%)`
}


