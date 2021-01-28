// Demo Higher order functions

//Sample Data
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ForEach: This is quick for loop iterator
// 01 - Requirement: List all Company Name

companies.forEach((company) => {
  console.log(company.name);
});

// Filter: Creates a new array with all elements that pass the test implemented
// 01 - Requirement: Age > 21

let ageGreate21 = ages.filter((age) => {
  if(age>21)
    return 1;
})
console.log(ageGreate21);

// 02 - Requirement: company.category === 'Retail'
let reatilCompany = companies.filter((company) => {
  if(company.category === 'Retail')
    return true;
});
console.log(reatilCompany);

// Map: Creates a new Map object holds key-value pairs and remembers the original insertion order of the keys.
// 01 - Requirement: Create Company - Total Years
let companyDetails = companies.map((company)=>{
  let age=company.end-company.start;
  return `${company.name} - ${age} years`;
} );
console.log(companyDetails);

//Sort: Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending
// 01 - Requirement: List ages in decending
let decendingAge = ages.sort((a,b) => {
  return b-a;
})
console.log(decendingAge);

// 02 - Requirement: Return companine in Total years descending
let decendingCompanies = companies.sort((a,b) => {
  let bAge=b.end-b.start;
  let aAge=a.end-a.start;
  return bAge-aAge;
})
console.log(decendingCompanies);

//Reduce: Reduces the array to a single value.
// 01 - Requirement: Total Age
let totalAge = ages.reduce((total,age) => {
  return total+ age;
},0)
console.log(totalAge);

// 02 - Requirement: Total Company Age
let totalCompanyAge = companies.reduce((total,company) => {
  return total+ company.end-company.start;
},0)
console.log(totalCompanyAge);

// Destructuring 

// Object
let company = {name: "Company One", category: "Finance", start: 1981, end: 2004};

let {name, category, start, end} = company;
console.log("name = "+ name);

// Renaming Assignment
let {name1, category1, start1, end: endDate} = company;
console.log("endDate = "+ endDate);

//Nested Object
let nestedObject = {
  name: "Test Name",
  company: "Test Company",
  address: {
    add1:"address 1",
    add2:"address 2",
    zip:"50003",
  }
}

let { address: { zip} } = nestedObject
console.log(zip);

//Arrays & Spread Operator
let [first, second,...remaining] = ages
console.log(first, second, remaining);