// var add = function(number1, number2) {
//     return number1 + number2;
//     };
//     var number1 = parseInt(prompt("Enter a number:"));
//     var number2 = parseInt(prompt("Enter another number:"));
//     alert(add(number1,number2));


let doomsDays = ['Jan 3', 'Jan 4', 'Feb 28', 'Feb 29', 'March 14', 'April 4', 'May 9', 'June 6', 'July 11', 'Aug 8', 'Sept 5', 'Oct 10', 'Nov 7', 'Dec 12'];

let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sartuday'];

let Female = ['Sunday: Akosua', 'Monday: Adwoa', 'Tuesday: Abenaa', 'Wednesday: Akua', 'Thursday: Yaa', 'Friday: Afua', 'Saturday: Ama'];

let Male = ['Sunday: Kwasi', 'Monday: Kwadwo', 'Tuesday: Kwabena', 'Wednesday: Kwaku', 'Thursday: Yaw', 'Friday: Kofi', 'Saturday: Kwame'];

let dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let birthYears = [1900, 1901, 1902, 1903, 1905, 1906, 1907, 1909, 1910, 1911, 1913, 1914, 1915, 1917, 1918, 1919, 1921, 1922, 1923, 1925, 1926, 1927, 1929, 1930, 1931, 1933, 1934, 1935, 1937, 1938, 1939, 1941, 1942, 1943,1945, 1946, 1947, 1949, 1950, 1951, 1953, 1954, 1955, 1957, 1958, 1959, 1961, 1962, 1963, 1965, 1966, 1967, 1969, 1970, 1971, 1973, 1974, 1975, 1977, 1978,1979, 1981, 1982, 1983, 1985, 1986, 1987, 1989,1990, 1991, 1993, 1994, 1995, 1997, 1998, 1999, 2001, 2002,2003, 2005, 2006, 2007, 2009, 2010, 2011, 2013, 2014, 2015, 2017, 2018, 2019, 2021, 2022];

/* let leapYears = [1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020]; */

let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let numberOfMonths = 12;

let diviser = 4;

let numberOfDays = 7;


let partOne = function(birthYear, numberOfMonths) {
	return birthYear / numberOfMonths;
};

let partTwo = function(birthYear, numberOfMonths) {
	return birthYear % numberOfMonths;
};

let partThree = function(partTwo, diviser) {
	return partTwo / diviser;
};

let partFour = function(centuryCode, partOne, partTwo, partThree) {
	return centuryCode + partOne + partTwo + partThree;
};

	let partFive = function(centuryCode, partOne, partTwo, partThree) {
  	return centuryCode + partOne + partTwo + partThree + 2;
  };
  
  let partSix = function(partFive, numberOfDays) {
  	return partFive % numberOfDays;
  };
  
  let partSeven = function(partFour, numberOfDays) {
  	return partFour % numberOfDays;
  };
  

 let accept = confirm ("Wanna know your Akan Names?");
  
let centuryCode = prompt ("Enter your century code e.g 1800 = 5, 1900 = 3, 2000 = 2, etc");

let birthYear = prompt (" Enter your century year e.g 1999 =99, 2000, 1902, etc");

let leapYears = confirm ("Is your birth year a leap year? consider using a website to confirm");

/* let knowLeapYear = alert ("https://www.timeanddate.com/date/leapyear.html"); */

let birthDate = prompt ("Enter your birth date e.g 1, upto 31");

let gender = prompt ("Enter your gender e.g Male, Female");
