// *** Day 1: Historian Hysteria ***

// The Chief Historian is always present for the big Christmas sleigh launch, but nobody has seen him in months! Last anyone heard, he was visiting locations that are historically significant to the North Pole; a group of Senior Historians has asked you to accompany them as they check the places they think he was most likely to visit.

// Location Lists
let locationList_1 = [];
let locationList_2 = [];

// Debugs
let debug_fullDataText = false;
let debug_locationLists = false;
let debug_locationListsSortedAscending = false;

// Loading data from data folder for day 1 txt
async function loadData() {
  try {
    // Get data from txt
    const response = await fetch("Data/day1.txt");

    // If fetch did not work throw error
    if (!response.ok) {
      throw new Error(
        `Error! Status: ${response.status}. Cannot get txt file.`
      );
    }
    const text = await response.text(); // Read the content of the txt file

    // * Debug *
    if (debug_fullDataText) {
      console.log(text); // See all text from data
    }

    // You can now pass `text` as a string to other JavaScript functions
    processData(text);
  } catch (error) {
    console.error("Error fetching the file:", error);
  }
}

// Getting data and turing it into 2 lists of number locations
function processData(data) {
  // Temp Variable to allow me to switch which arrays to push to
  let locationListToggle = true;

  // Seperating each line into a lines array
  const lines = data.split("\n");

  // For each line, split the two numbers into locations and then add one of each to seperate location lists
  for (line of lines) {
    const locations = line.split("   ");
    // Iterate through locations and alternate which list it goes into
    for (let location of locations) {
      // Make sure location is not null
      if (location) {
        // Switch every other one which list to add to
        if (locationListToggle) {
          locationList_1.push(Number(location));
        } else {
          locationList_2.push(Number(location));
        }
        // Toggle back and forth
        locationListToggle = !locationListToggle;
      }
    }
  }

  // * Debug *
  if (debug_locationLists) {
    console.log("Location list 1:");
    console.log(locationList_1);
    console.log("Location list 2:");
    console.log(locationList_2);
  }

  document.getElementById("day1AnswerPart1").textContent = "Part 1: " + part1();
  document.getElementById("day1AnswerPart2").textContent = "Part 2: " + part2();
}

// Finding the total distances between each locations on lists
// Your actual left and right lists contain many location IDs. What is the total distance between your lists?
function part1() {
  let locationsDistancesSum = 0;

  // Sorting in ascending order
  locationList_1.sort((a, b) => a - b);
  locationList_2.sort((a, b) => a - b);

  // * Debug *
  if (debug_locationListsSortedAscending) {
    console.log("Location list 1 Sorted:");
    console.log(locationList_1);
    console.log("Location list 2 Sorted:");
    console.log(locationList_2);
  }

  for (let i = 0; i < locationList_1.length; i++) {
    locationsDistancesSum += Math.abs(locationList_1[i] - locationList_2[i]);
  }

  return locationsDistancesSum;
}

// Finding the total similarities score between the two lists
// How often each number from the left list appears in the right list. Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.
function part2() {
  let locationsSimilarityScore = 0;
  for (let location_1 of locationList_1) {
    for (let location_2 of locationList_2) {
      if (location_1 == location_2) {
        locationsSimilarityScore += location_2;
      }
    }
  }
  return locationsSimilarityScore;
}

// Call the function to load and process the data in correct format, then call part1 & part2 to set as document text
loadData();
