# JS-Advanced-Concepts-Study
JS Sprint 2- Task for Sept 14 2023


9/13 i just realized i didn't save my README From videos 1-4 so i will try to remember what i typed and learned and had questions about?

Video 1- Just a baic overaly of the design pattern idea in where we take a "reuseable" apprach to specific types of coding or problems

Video 2- was the Builder Pattern- it is a creational design pattern used specifically so that we can build objects that might have
complex or optional paramters and instead of building them all into each object or class, we build a builder "class" that we use to construct those
objects step by steo

Video 3- Facade PAttern- in this patern it is in a structural pattern i believe where we can hide lengthy or unsightly necessaery code behind 
a more simplified version of that code often having one simplified version tied to one or more complex subclasses. 

Video 4- Oberserver Patternm-  this is a "subscription" model in which objects subscribe to an event and get notified when the event occures. 
There is an object, called the subject, that maintains a list of dependents/observers and notifies them of any state changes. 
In watching the video and coding along i have too many questions to ask here. I haven't learned most of the methods used 
like .eventListener. I will circle back around to this after I have gone through some of the other items in the task. I have sopent a couple hours on this one.

Video 5- Destructuring-
We learned that you can take an object or array and take out the properties or elements and assign them to their own variables.
We learned how you can skip elements in an array or take an ending sequence and assign the "rest" to a single variable using
the "spread syntax" of ...    
We learned how to swap variables by what i took was taking an object and then setting it to an array and just swapping the order?
Also how to get at a nested object inside an object.  This is helpful because it lets you much easier, get to the values of an array or object without
having to do it for every single one which is how the old way looked to be. I don't have a ton of questions about this at the moment and 
it seems that with a little practive it is easy to comprehend. ONe more thing it mentioned was pulling proeprties out of a function by doing it similar to an object but
by using paranthesis then {} and creating new variables that way i believe?

VIDEO 6- Spread Operator
In this video he went over the spread operator which was just touched on in this last video about destructuring. The spread operator can be used in three instances:
1. function calls
2. In Array Literals
3. In object literals
   He showed how in a fucntion call we, instead of doing the Math.min with numerous list items listed as part of an array, we could use the spread operator ... before the arrays name, so that the function call back will then seperate those array items and analiyze them indivually instread of as a group with a name.
   the math.min(...temperature) will work the same as Math.min(33,25,25,64,43,87,44) if there is an array named temperature.
   and it will not return NaN like it would if you just asked it to Math.min(Temperature) becaue it his case it is just looking at the name or as the array as a whole.
   WE looked at combining and creating new arrays with spread oeprators with the parent and kid and fullFamily example, and we did the same or similar things with object literals with the making of the hybrid animal.  I also took away the idea of mutability whereas we do not want to change originals, but make copies with them using the spread operator, and then changing them or updating them, and then telling the program to use that instead. He was mentioning how this is particulary import for frameworks like react.

   Video 7- Memoization and Dynamic Programming
    What i took from this video is that memoization is a way to drastically reduce inefficiencies by not having to rerun the same computations but instead have fucntions or the program check to see if a certain computation was already done and use those results in cache instead of rerunning them. The example on the Fibonacci Sequence is used because all it is is recalculating figures based on prior results all the way up to infinty. I also learned by reading about it that recursion is the conecpt of a functiuon calling itself inside of itself causing an inifite loop.  I also found that Dynamic programming relies on Memoization and also that Memoization relies on 2 things:
   1. Closures
   2. Higher order functions- functions that operate on other functions
   3. 
   VIDEO 8- Callbacks
    I ran through the example with him on names and his explanation does not really explain to me how it's useful  or how callback is involved besides in its name or with his example of an oil change.
WIth the example on names in an arraty then using the names.forEach((name)=> console.log(name). I understand that this is maybe a "built in method" (forEach) that then uses a "callback" with setting name as a parameter in an arrow function. the forEach separates each element in the array but i dont understand how the callback is being "called back". it logs the items from the above array. I have researched this some and don't fully grasp it yet after spenging some time searching around about it. He mentions how the above example is synchronus but not why, then goes on to much more complicated what Asynchronus and lost me on that. Look forward to diving deeper into call backs and how they are useful


