/*  
What is the Big O notation for Function sortProductsByPrice of the Question 4. Explain your reason.
Answer: O(n^2) or qudratic algorithm, the amount of time the algorith has to run grow quadraticallys.
Since question 4 use Bubble sort algorithm, which is an algorithm that requires nested loop,
everytime we add a new item into the array, that item will be run through both loops(loop i and loop j).
The maximum number of times the loop will be run will equal to number of both loops multiply by each other
which would result in n*n or n^2 hence quadratic.


*/
