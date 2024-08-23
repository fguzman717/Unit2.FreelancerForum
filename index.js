//Is your HTML file connected to your JS file?
// Yes. I used the <script src=""></script> to connect my JS file with the HTML file

//*** New freelancers continue to appear every few seconds, and the average starting price is updated accordingly
// Each freelancer will have their name, occupation, and starting price displayed
// Each freelancer's info will be put in their own individual object with in an array which contains a list of the other freelancers

//Do you know how you want the freelancers' information to be displayed on the page?
// Yes. I'm going to replicate the example that is shown on the assignment page on Canvas

//Have you defined arrays for possible names and occupations?
// Yes. There will be an array named 'names' that will contain at least 10 different names, there will also be an array named 'occupations' of at least 5 different occupations, and finally an array named 'prices' with 10 different prices
let names = [
  "Alice",
  "Bob",
  "Carol",
  "Dylan",
  "Eric",
  "Francis",
  "George",
  "Helen",
  "Ian",
  "Joe",
];
let occupations = ["writer", "teacher", "programmer", "gardener", "driver"];
let prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// This will be the maximum number of freelancers
let maxFreelancers = 10;

//Have you defined an initial array of freelancers?
// Yes. There will be an array named 'freelancerList' that will contain the added freelancer names and occupations
let freelancerList = [
  {
    name: "Alice",
    occupation: "writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50,
  },
  {
    name: "Carol",
    occupation: "Programmer",
    price: 70,
  },
];

//Is this function being called in an interval?
// Yes. This will call `addFreelancer` every 1000 milliseconds (1 second)
const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

//Have you written and called a function to render the initial freelancer data?
// Yes. This function will render the initial freelancer data
render();

function render() {
  // This will select '#freelancers' id
  const freelancers = document.querySelector("#freelancers");
  const freelancerElements = freelancerList.map((person) => {
    // This will add a list element to the <ul>
    const element = document.createElement("li");
    // element.classList.add(
    //   freelancerList.name,
    //   freelancerList.occupation,
    //   freelancerList.price
    // );
    return element;
  });
  // This will replace the existing children with the new ones
  freelancers.replaceChildren(...freelancerElements);
}

//Have you written a function to generate a new random freelancer?
// Yes. This function will randomly add a freelancer to the array
function addFreelancer() {
  // This will randomize the names
  const name = names[Math.floor(Math.random() * names.length)];

  // This will randomize the occupations
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];

  // This will randomize the prices
  const price = prices[Math.floor(Math.random() * prices.length)];

  // This will add an object with freelancer properties but empty values to the freelancerList array
  freelancerList.push({ name, occupation, price });

  // This will call the render function to add a new freelancer
  render();

  //When should this function be called to update the displayed message?
  // This function will be called once a new freelancer has been added to the list
  calculateAverage();

  // Once we've reached the maximum number of shapes we will stop the interval
  if (freelancerList.length >= maxFreelancers) {
    // This will stop the interval.
    clearInterval(addFreelancerIntervalId);
  }
}

//Have you written a function to calculate the average starting price of your freelancers' array?
function calculateAverage() {
  let sum = 0;

  freelancerList.forEach(function (element) {
    sum += element.price;
  });

  return sum / freelancerList.length;
}
