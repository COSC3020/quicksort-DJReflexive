# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


## My Runtime Analysis

First, addressing the base case where the length is equal to 0, we 
actually get a constant run time since an array that is empty is 
already sorted. However, we are going to look at the more general case 
where the length is greater than 0.

The large while loop will always iteratate through the entire array 
and will pick every element to be the pivot at one point. This has a 
complexity of $\Theta(n)$. 

Going into the for loop (which is nested inside of the while loop), 
and since we are interested in the worst case scenario, every element 
within the low and high bounds will be checked at least once as well
in order to call the correct swap calls, which also has a complexity 
of $\Theta(n)$ (the high and low bounds are then set based which is a 
constant time operation).

Combining the two complexities from the two loops, since the two 
operations are nested, we get a final complexity of $\Theta(n*n)$. 
This can be simplified to $\Theta(n^2)$ for the worst case scenario 
in this algorithm. 


# Sources

- geeksforgeeks.org: for an example of a recursive quick sort algorithm,
                    in which the basics of this algorithm are inspired from.
- CuriousWalk on YouTube: for a detailed animation sequence of quick sort.


# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.