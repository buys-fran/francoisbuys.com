---
title: 'I can CSS clearly now'
displayOrder: 2
featured: true
---

I recently had the opportunity to present TailwindCSS as an alternative to bootstrap. My approach
was to talk about the evolution from traditional to atomic CSS. A quick search led me to this
<a href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/" target="_blank" rel="noreferrer noopener">
great post
</a>
by
<a href="https://adamwathan.me/" target="_blank" rel="noreferrer noopener">Adam Wathan</a>.&nbsp;
From Adam's post, I could clearly see the natural evolution from atomic to utility-first CSS.
In this post, I would like to share the insights I gained.

<!-- more -->

### Big ideas

- [✅ Traditional CSS has its faults](#traditional-css-has-its-faults)
- [✅ BEM has its own problems](#bem-has-its-own-problems)
- [✅ A utility first approach](#a-utility-first-approach)
- [✅ TailwindCSS a utlity first CSS framework](#tailwindcss-a-utility-first-css-framework)

### Traditional CSS has its faults

CSS is known as the styling language of the web. A common webpage workflow involves:

1. Implement the structure of our pages using HTML
2. Appropriately scatter CSS classes throughout the HTML
3. Use the CSS classes to form links between the HTML and CSS

Early in our development career, we learn to care about maintainability. Similarly, we are
taught to use meaningful (or semantic) class names. Semantic class names make CSS easier to
maintain because they convey the purpose of each piece of CSS.

```css
// Semantic class
.header__text-block {
  color: #e3e3e3;
  ...;
}

// Non-semantic class
.text-grey {
  color: #e3e3e3;
  ...;
}
```

We write semantic HTML with semantic CSS classes only to find that the styling (or CSS) is
increasingly coupled to the page structure (or HTML). We can combat this dependency by
adhering to the
<a href="https://blog.decaf.de/2015/06/24/why-bem-in-a-nutshell/" target="_blank" rel="noreferrer noopener">
Block Element Modifier (BEM) methodology
</a>.

> Avoid inheritance and keep specificity low <span>BEM</span>

### [BEM has its own problems](#bem-has-its-own-problems)

BEM is great and is widely used to this day. It does however introduce its own set of
problems. The biggest problem with BEM is <em>naming</em>, or more specifically:

1. Thinking up new names becomes exhausting
2. Very targeted class names make it hard to avoid duplication

```css
// Very targeted class
.login-page-card {
  display: block;
  ...;
}
// Similar style, different class
.logout-page-card {
  display: block;
  ...;
}
```

We may decide to use BEM classes that target a broader set of elements. However, more
generic classes often need to be extended with modifiers to cater to all the edge cases.
Take a moment and think about all those times you needed a bit more padding or margin...

To address the edge cases we reach for the modifier (M) in BEM. Now we have very
specific modifiers sprinkled (read duplicated) throughout the application.

```css
// General class
.card {
  display: block;
  padding: 1rem;
  ...;
}

// General class with a modified
.card--with-more-padding {
  padded: 3rem;
  ...;
}
```

Is maintainable CSS just a pie in the sky? It seems like no matter how hard we try, CSS
inevitably becomes unwieldy. We constantly struggle to combat duplication not to mention
keeping the documentation (or style guide if you are lucky) up to date.

> Is maintainable CSS unattainable?

### [A utility first approach](#a-utility-first-approach)

Remember the issue earlier, where we required a small amount of padding or margin? One
way to solve that problem is to add small utility classes. Utility classes could look like
this:

```css
.pl-4 {
  padding-left: 1rem;
}

.pr-4 {
  padding-right: 1rem;
}
```

Whenever additional padding is required we simply add these additional utility classes.
The possibilities with utility classes are vast. Think about simple text-,
colors-, borders- or even flexbox- utility classes.

Utility classes are truly reusable. Once you have a well established set of reusable
classes, your productivity and design consistency increase dramatically. Styling the web becomes,
dare I say, easy.

Perhaps, the greatest benefit of utility first CSS is that we rarely need to add additional
CSS. I agree with Adam Wathan when he says that every new line of CSS adds complexity. We
should take each opportunity to reduce complexity.

Some might be concerned about the long lists of CSS classes in our markup. It is surprisingly
easy to structure our markup to reduce the number of classes we need to assign to a
particular element. However, a better approach would be to keep an eye on duplicated components.

You will find that buttons, cards, models and many similar components are duplicated throughout
your application. By extracting these into individual components we can keep our frontends
nice and DRY without adding much complexity.

### [TailwindCSS a utility first CSS framework](#tailwindcss-a-utility-first-css-framework)

TailwindCSS deserves an entire blog post series. However,
<a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer noopener">
TailwindCSS' documentation
</a>
is exceptional so please take a moment to go through it. TailwindCSS puts the power of
utility classes firmly into our hands.

TailwindCSS provides a large collection of reusable utility classes. I rarely find a CSS
feature that TailwindCSS does not cover. Remember that you are not prevented from still
maintaining a small set of styles for your unique requirements.

There is also no need to repeatedly use long lists of classes. Especially not for frequently
used components. TailwindCSS' @apply function makes grouping common styles trivial.

```css
.heading-3 {
  @apply font-medium tracking-wide py-4;
}
```

### Conclusion

CSS has come a long way and it would be wise to evaluate our workflow and streamline it to our
needs. Semantic CSS still has its place, but I expect a utility first approach to be more
common in the future. TailwindCSS makes it very easy to implement a utility first approach.

I hope this post encourages you to consider a utility first approach. I would encourage you
to seriously consider TailwindCSS for your next project.
