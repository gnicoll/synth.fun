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

    let clippath = '';
    let range = ((Math.max(...pattern) - Math.min(...pattern)));
    
    for (let index = 0; index < pattern.length; index++) {
        const step = pattern[index];
        
        if (index !== 0 && index !== pattern.length -1) {   
            clippath = clippath + `${(index * (100/pattern.length))}% ${50-(50 / range * step)}%`
            if (index !== pattern.length -2) clippath = clippath + ',';
        }
            
    }
   return `polygon(100% ${50-(50 / range * pattern[pattern.length-1])}%, 100% 100%, 0 100%, 0 ${50-(50 / range * pattern[0])}%, ${clippath})`
}


