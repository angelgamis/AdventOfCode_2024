// *** Day Template ***

class DayTemplate {
  // Initalize
  constructor() {
    // Reports (Reports with level array inside each)
    //this.reports = [];
    // Debugs
    //this.debug_fullDataText = false;
    //this.debug_eachReport = false;
    //this.debug_eachLevel = false;
  }

  // Loading data from data folder for day 1 txt
  async loadData() {
    try {
      // Get data from txt
      const response = await fetch("Data/dayTemplate.txt");

      // If fetch did not work throw error
      if (!response.ok) {
        throw new Error(
          `Error! Status: ${response.status}. Cannot get dayTemplate.txt file.`
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
    // this.reports = data.split("\n");

    // let count = 0;
    // // For each report, separate each number in the report into a new "level" array
    // for (let report of this.reports) {
    //   count++;
    //   const level = report.split(" ");
    //   // * Debug *
    //   if (this.debug_eachReport) {
    //     console.log("Report: " + count + ": ");
    //     console.log(report);
    //   }
    //   // * Debug *
    //   if (this.debug_eachLevel) {
    //     console.log("Level: " + count + ": ");
    //     console.log(level);
    //   }
    // }

    document.getElementById("dayTemplateAnswerPart1").textContent =
      "Part 1: " + this.part1();
    document.getElementById("dayTemplateAnswerPart2").textContent =
      "Part 2: " + this.part2();
  }

  part1() {
    return 0;
  }

  part2() {
    return 0;
  }
}

// Call the function to load and process the data in correct format, then call part1 & part2 to set as document text
const dayTemplate = new DayTemplate();
day2.loadData();
