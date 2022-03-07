let a = parseInt (prompt ("Enter your century code- 1800 = 5, 1900= 3, 2000 = 2"));

let birthYear = parseInt (prompt ("Enter your birth year e.g 1999, 2000, 1984 etc."));

let birthYearSection = parseInt (prompt ("Enter your birth year last two numbers e.g 1999 = 99, 2000 = 0, 1902 = 2 etc"));

let b = parseInt (birthYear / 12); 

let bb = b.toFixed();
/* console.log (b); */
/* let bb = math.floor(b); */

/* let z = bb * 12; */

let c = parseInt (birthYearSection % 12) / 4;

let u = c.toFixed();

let d 
d = parseInt (a + bb + u);

let e 
e = parseInt (a + bb + u + 2);

let f = parseInt (d % 7);

let g = parseInt (e % 7);

let h = parseInt (birthYear % 4);

/* let j = prompt ("Enter date of birth. Should be between 1 and 31"); */

if (h < 0) {
 alert(`Write this down = ${g}`);
}

else {
alert(`Write this down = ${f}`);
}

