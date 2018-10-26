# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Specifications
* _**Program replaces "0" with "Beep!".**_  
_Example Input: "0"_  
_Example Output: "Beep!"_
* _**Program replaces "1" with "Boop!".**_  
_Example Input: "1"_  
_Example Output: "Boop!"_
* _**Program replaces numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that.".**_  
_Example Input: "3"_  
_Example Output: "I'm sorry, Dave. I'm afraid I can't do that."_
* _**These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third.**_  
_Example Input: "10"_  
_Example Output: "Boop!"_  
_Example Input: "30"_  
_Example Output: "I'm sorry, Dave. I'm afraid I can't do that."_
* _**Program takes a number from a user and returns a range of numbers from 0 to the user inputted number with the aforementioned exceptions**_  
_Example Input: "5"_  
_Example Output: "Beep!, Boop!, 2, I'm sorry, Dave. I'm afraid I can't do that., 4, 5"_ 


## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

MIT License

Copyright (c) 2018, _J. Michael Brown_  

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._



Numbers that contain a 0 are replaced (all digits) with "Beep!"

Numbers that contain a 1 are replaced (all digits) with "Boop!"

Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program the number 10 should be replaced with "Boop!", and the number 30 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

Also a user should be able to enter a new number and see new results over and over again.

Example: If a user inputs a 5, the program should display a list of values: "Beep!", "Boop!", 2, "I'm Sorry...", 4, 5
