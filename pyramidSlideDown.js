//used an inner recursive function (even after refactoring) for time performance (rather not pass a huge pyramid array on each recursive call)
const longestSlideDown = (pyramid) => {
    const recursiveFunc = (acc, row, col) => {
        let solutions = [];
        //base case: return result of successive accumulations when bottom of the pyramid is reached       
        if (row === pyramid.length - 1) {   return acc
        } else {
            //accumulate value positioned below-left and below-right
            solutions = [recursiveFunc(acc + pyramid[row + 1][col], row + 1, col),
                         recursiveFunc(acc + pyramid[row + 1][col + 1], row + 1, col + 1)]
        }
        // at the end of context of execution, return highest of the 2 values returned per call stack       
        return Math.max(...solutions);
    };
    //invoke inner function and return its output 
    return recursiveFunc(pyramid[0][0], 0, 0);
};

//test cases:
console.time('longestSlideDown');
console.log(longestSlideDown(
    [[3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]])
); //should be 23
console.timeEnd('longestSlideDown');
console.log(longestSlideDown(
    [[75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]]
)); //should be 1074
