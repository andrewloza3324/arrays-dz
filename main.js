//let b = [];

//for (let i = 0; i < 100; i++) {
//b.push(i);
//}
//console.log(b);

//b.pop();

//b.shift();

//console.log(b);

//let a = [];
//let i;
//for (i = 0; i <= 50; i++) {
//a.push(i);
//}
//for (let b = 50; b >= 0; b--) {
//a.push(b);
//}

//console.log(a);

//let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//a.splice(1, 1);

//a.splice(3, 1);

//a.splice(7, 1);

//console.log(a);

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let b = [];

let j = 0;

for (let i = 0; i < a.length; i++) {
  if (5 < a[i]) {
    b[j++] = a[i];
  }
}
for (let k = 1; k < b.length; k++) {
  console.log(b[k]);
}

console.log("задача 2");

let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let v = [];

let p = [];

let z = 0;

let w = 0;

for (let s = 0; s < c.length; s++) {
  if (c[s] > 5) {
    v[z++] = c[s];
  } else if (c[s] < 5) {
    p[w++] = c[s];
  }
}
for (let o = 0; o < p.length; o++) {
  console.log(p[o]);
}
console.log("менші");

for (let m = 0; m < v.length; m++) {
  console.log(v[m]);
}
console.log("більші");
