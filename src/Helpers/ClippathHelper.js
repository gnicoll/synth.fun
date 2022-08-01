const options = [
    'X000',
    '0X00',
    '00X0',
    '000X',
]


export default function GenerateClipPath(){

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