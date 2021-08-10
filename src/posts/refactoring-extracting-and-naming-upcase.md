---
title: 'Refactoring, Extraction and Naming'
date: '2021-01-10'
displayOrder: 3
featured: true
tags: ['oop', 'refactoring']
---

This post is inspired by a video lesson titled
<a href="https://thoughtbot.com/upcase/videos/refactoring-extraction-naming" target="_blank" rel="noreferrer noopener">
  Refactoring, Extraction, and Naming
</a>.
The lesson is presented by
<a href="https://thoughtbot.com/upcase" target="_blank" rel="noreferrer noopener">
Upcase
</a>
from
<a href="https://thoughtbot.com/" target="_blank" rel="noreferrer noopener">
  Thoughtbot
</a>.
Upcase graciously allows free access to their high quality content. Each video is
accompanied by show notes that make it easy to refresh your memory.
The lesson can be found
<a href="https://thoughtbot.com/upcase/videos/refactoring-extraction-naming" target="_blank" rel="noreferrer noopener">
here
</a>.

<!-- more -->

### Big ideas

- ✅ Naming is important
- ✅ Comments can be code smell
- ✅ It's a journey not a destination


### Naming is important

We should remember that our <em>code will be read many times</em> after we write it.
We deliver a great service to future readers by choosing names that clearly express our
intentions with the code.

> Code will be read many times

It is hard or even impossible to choose the perfect name right off the bat. Instead our
aim should be to write code that pass all our tests. Once all our tests pass, then
only should we shift our focus to refactoring. Refactoring is a great opportunity to
improve the names in our codebase.

We should be eager to extract and name variables, methods and classes. You can take a
look at the
<a href="https://francoisbuys.com/posts/all-the-little-things/" target="_blank" rel="noreferrer noopener">
All the little things post
</a>
to see why smaller units of code are better. As we extract and name pieces of code, the
inner workings of the application becomes clearer.

> Be eager to extract and name

### Comments can be code smells

Comments often point out opportunities to introduce better names into our code base. As
we all know comments don't automatically update as we change code. However, methods do
change with our application. Upcase suggests that we can often replace comments with
well named methods.

> Replace comments with methods

### It's a journey not a destination

As mentioned earlier, the first name we assign to a piece of code is not always the final
one. Instead, our aim should be to gradually improve the codebase. This means that
naming improves incrementally as our understanding of the domain increases. Upcase do
provide a few guidelines for making sure our names are getting better not worse.
1. Adhere to the <em>ask don't tell</em> principle 
2. Select names that reflect the correct level of abstraction

### Conclusion
Incrementally improve the quality of your code by continually extracting variables,
methods and classes. Assign great names, not comments, to express the purpose of each unit
of code. Spend a few more minutes to improve code readablabilty, it will go a long way 
towards keeping your code a joy to work with.
