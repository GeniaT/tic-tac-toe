const horizontal = [0,3,6].map(i => [i,i+1,i+2]);
const vertical = [0,1,2].map(i => [i,i+3,i+6]);
const diagonal = [[0,4,8],[2,4,6]];
export const allwins = [].concat(horizontal).concat(vertical).concat(diagonal);