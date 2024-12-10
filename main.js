// *** Day 10: Hoof It ***

// You all arrive at a Lava Production Facility on a floating island in the sky. As the others begin to search the massive industrial complex, you feel a small nose boop your leg and look down to discover a reindeer wearing a hard hat.

const day10Input =
  "6541001098012789610347890107654656710323,7832102127643898701256521218323465891410,8996543034556789650987434309012534892565,3887689678965876501874345892105621763676,4305678563456903416765676756898760654980,5214107852107812321254382347872108901221,6543236943056921010341291078963457654338,7896545987045430010980012569454968983549,3217830656189899121676101430356879892678,2106921043210778234585232321267898761432,3478854430345665056798743410456901050501,4569763521012552143895654501345012347670,3654012678903443212104309690432167898981,2783656987654874908765218781201254012567,1092347897893965889034765670387063013498,1001298756102456776121874989496122110901,2310891043201307655430923876565434325892,3456780103011218967649810189410145456743,2561078212320989858236702107320236787654,1232569343423874749145893678741199899873,0343454358514565632098704569632087684562,0456789969609034501347612189323456893001,1499876878798123101256543079012548762110,2387905462687678871212344568187659450223,3456012301056549960305650127691098321054,3456732102345832154454781034540107650169,2369847898738981023763692321121256743278,1078456654567670119832103400012349894361,0012387763456543208041076510123412765010,7650196892565454589107889623296503854321,8943256781074303673236908774387654983432,8912965890985210984365219985345015676541,7607834187866789875434308776236723498650,6506543045679012766923105698109894567743,5410432134988703457810014567056210754892,0322345028767845893456723459847349889701,1201276719454936712679801210738256776545,2450989805103221604589752345629145480230,2347823456012120113298943238710076591121,1056910147893012320107654109656789432012";

const day10InputLines = day10Input.split(",").map(String);
const day10Grid = [];
let day10ReachedGrid = [];
let day10TrailheadScoreSum = 0;

function day10() {
  console.log("Starting day10 function...");

  // Creating a 2d array grid of the day 10 input
  for (let i = 0; i < day10InputLines.length; i++) {
    day10Grid[i] = [];
    day10ReachedGrid[i] = [];
    for (let j = 0; j < day10InputLines[i].length; j++) {
      day10Grid[i][j] = Number(day10InputLines[i].charAt(j));
      day10ReachedGrid[i][j] = false;
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
    if (!day10ReachedGrid[row][column]) {
      console.log(
        `Reached number 9, adding to score... at [${row}, ${column}]`
      );
      day10AddToScore();
      day10ReachedGrid[row][column] = true; // Marking the cell as reached so doesn't count again
    }
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
