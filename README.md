# longest-slope-from-pyramid
Infamous codeWars challenge (https://www.codewars.com/kata/pyramid-slide-down/discuss/javascript)

Consider a pyramid array such as the following:

                 /3/  
                \7\ 4   
               2 \4\ 6  
              8 5 \9\ 3

the function longestSlideDown() should return the highest of the sum of consecutive numbers from the top to the bottom of the pyramid.
In the above example, the highest slide down is 23 (3+7+4+9).




<!--------------> <!--------------> <!--------------> <!--------------> <!--------------> <!--------------> <!--------------> <!-------------->
Time performance still not under limit on CodeWars. I refactored my code further:

const longestSlideDown = (pyramid) =>
    (recursiveFunc = (acc, row, col) =>
        row === pyramid.length - 1 ? acc : Math.max(
            recursiveFunc(acc + pyramid[row + 1][col], row + 1, col),
            recursiveFunc(acc + pyramid[row + 1][col + 1], row + 1, col + 1)
        )
    )(pyramid[0][0], 0, 0);
;

accepting any sggestions.