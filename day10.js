// *** Day 10: Hoof It ***

// You all arrive at a Lava Production Facility on a floating island in the sky. As the others begin to search the massive industrial complex, you feel a small nose boop your leg and look down to discover a reindeer wearing a hard hat.

const day10Input =
  "89010123,78121874,87430965,96549874,45678903,32019012,01329801,10456732";

const day10InputLines = day10Input.split(",").map(String);
const day10Grid = [];
//let day10ReachedGrid = [];
let day10TrailheadScoreSum = 0;

function day10() {
  console.log("Starting day10 function...");

  // Creating a 2d array grid of the day 10 input
  for (let i = 0; i < day10InputLines.length; i++) {
    day10Grid[i] = [];
    //day10ReachedGrid[i] = [];
    for (let j = 0; j < day10InputLines[i].length; j++) {
      day10Grid[i][j] = Number(day10InputLines[i].charAt(j));
      //day10ReachedGrid[i][j] = false;
    }
  }

  console.log("Grid constructed:", day10Grid);

  // Checking each item on grid to see if it is a trailhead (0)
  for (let i = 0; i < day10Grid.length; i++) {
    for (let j = 0; j < day10Grid[i].length; j++) {
      if (day10Grid[i][j] == 0) {
        day10CheckNeighbours(0, i, j);
      }
    }
  }

  console.log("Trailhead score sum:", day10TrailheadScoreSum);

  return day10TrailheadScoreSum;
}

// Adding to score sum
function day10AddToScore() {
  console.log("Adding to score sum...");

  day10TrailheadScoreSum++;
}

// Check Neighbours
function day10CheckNeighbours(currentCount, row, column) {
  let top = row - 1;
  let right = column + 1;
  let bottom = row + 1;
  let left = column - 1;

  // If path reached 9 add to score
  if (currentCount == 9) {
    // Only add to score if 9 hasn't been reached yet
    //if (!day10ReachedGrid[row][column]) {
    console.log(`Reached number 9, adding to score... at [${row}, ${column}]`);
    day10AddToScore();
    //day10ReachedGrid[row][column] = true; // Marking the cell as reached so doesn't count again
    //}
    return;
  }

  // Top Neighbour
  // If in bounds
  if (top >= 0) {
    console.log(`Checking top neighbour at [${top}, ${column}]`);
    if (day10Grid[top][column] == currentCount + 1) {
      day10CheckNeighbours(currentCount + 1, top, column);
    }
  }

  // Right Neighbour
  // If in bounds
  if (right < day10Grid[0].length) {
    console.log(`Checking right neighbour at [${row}, ${right}]`);

    if (day10Grid[row][right] == currentCount + 1) {
      day10CheckNeighbours(currentCount + 1, row, right);
    }
  }

  // Bottom Neighbour
  // If in bounds
  if (bottom < day10Grid.length) {
    console.log(`Checking bottom neighbour at [${bottom}, ${column}]`);

    if (day10Grid[bottom][column] == currentCount + 1) {
      day10CheckNeighbours(currentCount + 1, bottom, column);
    }
  }

  // Left Neighbour
  // If in bounds
  if (left >= 0) {
    console.log(`Checking left neighbour at [${row}, ${left}]`);

    if (day10Grid[row][left] == currentCount + 1) {
      day10CheckNeighbours(currentCount + 1, row, left);
    }
  }
}

//console.log(day10Grid);

document.getElementById("day10Answer").textContent = day10();
