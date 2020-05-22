// looping

// for(let i=0; i<100; i++){
//     console.log("Hello "+i);
// }


// calling a function

// recursion


// function sayHelloNumberTimes(number){
//     console.log("Hello World!")
//     console.log("I have called the function!")
//     if(number == 0){
//         return true
//     }
//     else{
//         sayHelloNumberTimes(number-1);
//     }
// }


// sayHelloNumberTimes(10)






// Flood Fill

// Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. 

// Note: diagonally related pixels are not considered adjacent.


// … we examine the cells that are directly (not diagonally) adjacent to startXY, which is[2,2]. If any have a value of 3 (the original value at startXY), we change its value to 1 (newColor) and repeat the process with its directly-adjacent neighbor cells. We repeat this until the entire zone of similarly-colored cells is changed.

// Our canvas2D becomes:

// canvas = [ [3,2,1,4,3],
//            [2,1,1,4,0],
//            [7,1,1,5,3],
//            [6,5,1,4,1],
//            [1,2,1,1,1] ]

// declare a function, given canvas, start, and color
//  if canvas[start] is not color
//      change it into color
//  if canvas[right] is not color && [right] is not greater than canvas bounds
//      call floodfill, where canvas[right] is start
// if canvas[left] is not color && [left] is not greater than canvas bounds
//      call floodfill, canvas[left] at start 
// if canvas[up] is not color && [up] is not greater than canvas bounds
//      call floodfill, canvas[up] as start
// if canvas[down] is not color && [down] is not greater than canvas bounds
//      call floodfill, canvas[down] is start


// Given a 2D canvas of: 

canvas = [ [3,2,3,4,3],
           [2,3,3,4,0],
           [7,3,3,5,3],
           [6,5,3,4,1],
           [1,2,3,3,3] ]

// A start point of:

start = [2,2];

// And a new color of:

color = 1;

function floodFill(canvas, start, color){
     // print the start point
     // INSTEAD OF AND, CHECK FOR BOUNDS WITH A SEPERATE CONDITIONAL
     up_and_down = start[0];
     left_and_right = start[1];
     console.log(canvas[up_and_down][left_and_right], "This is the current color")
     console.log(color, "This is the new color")
     if(canvas[up_and_down][left_and_right] !== color){
         canvas[up_and_down][left_and_right] = color;
     }
     // checking to the right
     if(canvas[up_and_down][left_and_right+1] !== color && left_and_right+1 < canvas[up_and_down].length){
         return floodFill(canvas, [up_and_down, left_and_right+1], color)
     }
     // checking to the left
     if(canvas[up_and_down][left_and_right-1] !== color && left_and_right-1 >= 0){
        return floodFill(canvas, [up_and_down, left_and_right-1], color)
     }
     // check above
     console.log(canvas[up_and_down-1])
     if(canvas[up_and_down-1][left_and_right] !== color && up_and_down-1 > 0){
         return floodFill(canvas, [up_and_down-1, left_and_right], color)
     }
     // check under
     if(canvas[up_and_down+1][left_and_right] !== color && up_and_down+1 < canvas.length){
         return floodFill(canvas, [up_and_down+1, left_and_right], color)
     }
     return canvas
}


console.log(floodFill(canvas, start, color));