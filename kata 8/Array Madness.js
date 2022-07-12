/* Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the
 squares of each element in a is strictly greater than the sum of the cubes of each element in b. */
const arrayMadness = (a, b) => a.map(x => x**2).reduce((x,y)=>x+y)>b.map(x=>x**3).reduce((x,y)=>x+y)
