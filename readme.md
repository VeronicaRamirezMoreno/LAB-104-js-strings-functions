![](https://user-images.githubusercontent.com/970858/63474771-d6734700-c469-11e9-83bb-9429da563909.png)


# JS Strings and Functions

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Today you have learnt Strings and functions so you are ready to solve a lot of new problems. Today's lab will have lots of exercises that increase in difficulty.

Ready?

## Requirements

- [Learn how to fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `code/labs` folder

## Starter code

You have to solve the different problems in the `starter-code/index.js` file. This Javascript file is included in the `starter-code/index.html`. 

You can easily open the HTML in Chrome, by typing in your terminal:
 
 ```
 $ open starter-code/index.html
 ```

After you open it, you can open the `Chrome Developer Tools` and see the `console.log`  of your exercises.



## **RULES**

 - All your functions have to be [pure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)


---
## Iteration 1

Create the following functions:

### 1.1/ **removeFirstAndLastChar(string)**

This function has to remove the first and last characters of a string. 

You're given one parameter, the original string. 

In case your parameter has less than two characters return empty string.

### 1.2/ **moreNerdy(string)** 

This function has to make your strings more nerdy: Replace all:
  - `'a'` or `'A'` with `4`
  - `'e'` or `'E'` with `3`.
  - `'l'` with `1`. 
  
```js
e.g. "Fundamentals" --> "Fund4m3nt41s"
``` 

### 1.3/ **noVowels(string)**. 

This function has to remove all the lowercase and uppercase vowels in a given string.

```js
e.g. shortcut("reboot") // --> rbt
e.g. shortcut("hello") // --> hll
``` 

---

## Iteration 2 - Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

```js
nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
```

If the 3rd letter is a vowel, return the first 4 letters.

```js
nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
```

If the string is less than 4 characters, return `"Error: Name too short"`.

--- 

## Iteration 3 - High and low

In this little assignment you are given a string of space separated numbers (including negative numbers), and have to return the highest and lowest number.

Example:
```js
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```

Notes:
Output string must be two numbers separated by a single space, and highest number is first.

--- 

## Iteration 4 - Reverse it

You need to write a function that reverses the words in a given string.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

```js
reverse('Hello World') == 'World Hello'
reverse('Hi    There.') == 'There. Hi'
```

## Bonus

If you have functions with more than 3 lines, rewrite the code so that your functions will be maximum 3 lines.

Divide the problem into smaller problems by using functions and conquer the world :) 


## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Then create a Pull Request!!

![happy_coding](https://user-images.githubusercontent.com/970858/63899010-c23fc480-c9ea-11e9-84a2-542907e42362.png)
