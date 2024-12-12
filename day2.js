// *** Day 2: Red-Nosed Reports ***

// Fortunately, the first location The Historians want to search isn't a long walk from the Chief Historian's office.

class Day2 {
  // Initalize
  constructor() {
    // Reports
    this.lines = []; // Each line with spaces
    this.reports = []; // Each line of as an array numbers
    // Debugs
    this.debug_fullDataText = false;
    this.debug_eachLine = false;
    this.debug_eachReport = false;
  }

  // Loading data from data folder for day 1 txt
  async loadData() {
    try {
      // Get data from txt
      const response = await fetch("Data/day2.txt");

      // If fetch did not work throw error
      if (!response.ok) {
        throw new Error(
          `Error! Status: ${response.status}. Cannot get day2.txt file.`
        );
      }
      const text = await response.text(); // Read the content of the txt file

      // * Debug *
      if (this.debug_fullDataText) {
        console.log(text); // See all text from data
      }

      // You can now pass `text` as a string to other JavaScript functions
      this.processData(text);
    } catch (error) {
      console.error("Error fetching the file:", error);
    }
  }

  // Getting data and turning it into reports (Lines of data txt)
  processData(data) {
    // Separating each line into the reports array
    this.lines = data.split("\n");

    let lineCount = 0;
    let reportCount = 0;

    // For each line, separate each number add it into an array, then add that to the reports
    for (let line of this.lines) {
      lineCount++; // For debugging
      this.reports.push(line.split(" ").map(Number)); // Push report from line

      // * Debug *
      if (this.debug_eachLine) {
        console.log("Line: " + lineCount + ": ");
        console.log(line);
      }
    }

    // * Debug *
    for (let report of this.reports) {
      reportCount++; // For debugging

      if (this.debug_eachReport) {
        console.log("Report: " + reportCount + ": ");
        console.log(report);
      }
    }

    document.getElementById("day2AnswerPart1").textContent =
      "Part 1: " + this.part1();
    document.getElementById("day2AnswerPart2").textContent =
      "Part 2: " + this.part2();
  }

  // So, a report only counts as safe if both of the following are true:
  // - The levels are either all increasing or all decreasing.
  // - Any two adjacent levels differ by at least one and at most three.
  // Analyze the unusual data from the engineers. How many reports are safe?
  part1() {
    let numberOfSafeReports = 0;
    let count = 0;
    // Loop through each report in reports and loop through each level of that report
    for (let report of this.reports) {
      count++;
      // Each report can either be decreasing or increasing
      let increasing = false;
      // While report is still safe
      let stillSafe = true;
      // Saving prev level while checking conditions
      let cachedLevel = 0;

      // Looping through levels
      for (let level = 0; level < report.length; level++) {
        // If second level, check inital increase or decrease
        if (level == 1) {
          if (report[level] > cachedLevel) {
            increasing = true;
          }
          if (report[level] < cachedLevel) {
            increasing = false;
          }
        } else if (level > 1) {
          if (increasing && report[level] > cachedLevel) {
          } else {
            stillSafe = false;
            break;
          }
          if (!increasing && report[level] > cachedLevel) {
            stillSafe = false;
            break;
          } else {
          }
        }
        if (
          Math.abs(report[level] - cachedLevel) < 1 ||
          Math.abs(report[level] - cachedLevel) > 3
        ) {
          stillSafe = false;
          break;
        }

        cachedLevel = report[level];
      }

      if (stillSafe) {
        numberOfSafeReports++;
      }
    }

    return numberOfSafeReports;
  }

  part2() {
    return 0;
  }
}

// Call the function to load and process the data in correct format, then call part1 & part2 to set as document text
const day2 = new Day2();
day2.loadData();
