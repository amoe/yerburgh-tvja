# Notes

The forum is linked here: https://forums.manning.com/forums/testing-vuejs-applications

## Ch1

"User journey" is defined to be a route through an application.  Open X, click
Y, type Z.

Runs over the usual disadvantages of end to end tests.  But says problem
with unit tests is that it makes it difficult to refactor code.  Not sure why.

Then talks about snapshot tests and mentions this cool fact:

> Instead of comparing screenshots, Jest snapshot tests can compare any
> serializable value in JavaScript. You can use them to compare the DOM output
> from Vue components.

Defines a testing pyramind of 60% unit, 30% snapshot, 10% e2e.

Ed outlines his process for a Vue component:

> 1. Decide the components I need
> 2. Write unit tests and source code for each component
> 3. Style the component
> 4. Add snapshot tests for a finished component
> 5. Test the code manually in the browser
> 6. Write an end-to-end test.

























## Errata from Dave

No proofreading comments: they have pro proofreaders
