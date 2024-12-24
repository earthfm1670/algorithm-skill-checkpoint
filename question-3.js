/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n), linear. It is considered a linear notation due to the fact that everytime we add an additional student to the array, the loop would have to run 1 additional time. If we add n students to the array, the loop would have to run n more times.


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n). Binary search cuts down the number of the array by half each time the loop runs. This means that it is more efficient that a linear search as in the more the loop runs, the less number of items in the array it has to loop through.


*/

/* 
Which function is more efficient and why?
Answer: O(log n) is more efficient than O(n). Linear search has to run n number of times regardless. On the other hand, logarithm is more efficient as it allows the loop to only check half the array every time the loop restarts.
Lets say we have an array of [1,2,3,4,5,6] and we want to check for number 5.
O(n) would compare 5 to every item in the array which contains 6 numbers, the maximum comparison amount is 6.
O(log n) will check if 5 is more than or less then 3((1+6) / 2), since 5 is more than 3, then its going to cut 1,2,3 out of the array that the algorithm is comparing. This will give us the maximum total of comparison to be 3, which is more efficient than 6 from linear O(n).


*/
