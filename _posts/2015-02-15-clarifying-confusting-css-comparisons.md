---
layout: post
title: "Clarifying Confusing CSS Comparisons"
date: 2015-02-15
categories: blog
excerpt: "When you first begin working with CSS, many people suggest getting the code to function is more important than HOW you get it function. To some degree, I can see how this would serve as a sort of confidence boost to encourage you to keep working with plans of going back later to revise old code. The problem is you probably never will."
---

<p>
When you first begin working with CSS, many people suggest getting the code to function is more important than HOW you get it function. To some degree, I can see how this would serve as a sort of confidence boost to encourage you to keep working with plans of going back later to revise old code. The problem is you probably never will. You might say "Well that's just negative, Erica". Actually, quite the opposite sparky, this is assuming that the more you learn, the more work you will find, which won't leave much time to go back and fix old projects once you know better. Because of this, I tend to avoid that line of thinking. If you want to learn how to do something, learn it right the <i>first time</i> so you can form good habits from the get go. This can be a bit overwhelming because there are a lot of opinions out there about what "good code" is, but there are some basics you should learn that will open you up to the option of delving into the subject more deeply on your own time. Thus, I have provided below some short discussions on some very common choices you will encounter, and when each option is appropriate.
</p><p>
<b>CLASS || ID?</b> This one is pretty simple. Is the element you are creating going to be recurring or used more than once? Use a class. If you are not sure, use a class. Is this a very unique situation on the page which you will need to stylize individually? Use an ID. You should only ever use an ID if it is going to be used one time. An id style will take precedence over class style because the element is being told <i>directly</i> to do something. Here's a great analogical explanation on <a href="http://stackoverflow.com/questions/544010/css-div-id-vs-div-class">Stack Overflow</a>.
</p><p>
<b>MARGIN || PADDING?</b> It is very easy to go on ignoring the difference between these two styles, tweaking margin-top and padding-bottom to your heart's content without any clue why there are two ways to do the same thing. Funnily enough, the people who wrote CSS didn't actually create two ways to do the same thing. What a thought, huh? Thankfully, the difference is very basic (which is why they are easily confused). Margin exists on the outside of block elements and will overlap automatically while padding is integrated into the element and is therefore always preserved. Both are spacing styles, but you should only ever use margin to separate the block from things outside it and use padding to move the contents away from the inside edges of the block. If two separate elements lay side by side, each with a margin of 1em, there will be (total) 1em of space between the two. If you change margin to padding, there will be a 2em space between them. If you are using both 1em margin and 1em padding on both elements, there will be a 3em space. Ya catch my drift? Google "CSS Block Model" for further explanation.
</p><p>
<b>INLINE || BLOCK || INLINE-BLOCK?</b> Inline display ignores top and bottom padding/margins, width, and height, as well as allows elements to sit side by side. The block display neither ignore those styles nor allow elements to sit side by side. Rather, they force elements to sit one on top of another. Inline-block allows elements to sit side by side AND respects sizing/spacing styles. <a href="http://dustwell.com/div-span-inline-block.html">Here</a> is a great visual to clarify the difference between the three display properties.
</p><p>
<b>DIV || TABLE?</b> Let's put it this way: More divs, less tables. Divs were created to replace tables, and they do a pretty good job of it because they use less code. However, tables still have their purpose, mostly to display two dimensional data. If you are nesting tables, turn back and exit that rabbit hole. This conversation could probably go on for days. Some developers only ever use tables (I don't recommend this unless you plan to time travel back to the 90's), while others refuse to touch them with a ten foot pole. My suggestion practice making the same designs with both. When you see a site you like, check out the source code to see how they accomplished the positioning. Both operations have their individual strengths and weaknesses, and both can be easily abused, beat to a pulp by over-styling. When you consider that the golden rule of code is "less is more" (boast your <strike>lazyness</strike> efficiency to the world!), the best thing you can do is get to know these strengths and weaknesses. I have come to the conclusion that a combination of the two will take you much further than sheer avoidance.
</p>