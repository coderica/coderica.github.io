---
layout: post
title: "Ruby Hashes && Arrays"
date: 2015-02-22
categories: blog
excerpt: "Ruby gives us two ways to deal with organizing data structures; arrays and hashes. Both are very similar and easily confused. What you can do with arrays, you can also often do with hashes, and visa versa. They share many of the same methods, and are even born in the same fashion..."
---
<p>
Ruby gives us two ways to deal with organizing data structures; arrays and hashes. Both are very similar and easily confused. What you can do with arrays, you can also often do with hashes, and visa versa. They share many of the same methods, and are even born in the same fashion...
</p><p>
  <code>new_empty_hash = {}</code>
  vs.
  <code>new_empty_array = []</code>
</p><p>
To start, lets consider the relationship between the two functions. An array is basically a hash with predefined integers as the key for each value. In arrays, we call them the "index". Let's inspect a basic array.
</p><p>
  <code>animal_array = ["cat", "dog", "snake", "pig", "bird"]</code>
</p><p>
This array of animals only has one source of input. All we can see is the name of the elements, but our array is secretly counting them for us. Let's access our array.
</p><p>
	<code>animal_array[3] => pig</code>
</p><p>
But wait, snake is the third element. Why did ruby return pig? This is evidence of how computers count. Unlike humans, computers consider 0 to be an integer, despite that it represents nothing (it is also <i>even</i>, which will be important to know later). Because of this, our array is indexed from 0 to 4, rather than 1 to 5. Lets try again.
</p><p>
  <code>animal_array[0..4] => cat dog snake pig bird</code>
</p><p>
Now how would this information look as an array? An array takes <i>two</i> forms of input.
</p><p>
  <code>animal_hash = {0 => "cat", 1 => "dog", 2 => "snake", 3 => "pig", 4 => "bird"}</code>
</p><p>
  <code>animal_hash[1] => dog</code>
</p><p>
But what if we call the whole range of elements like we did with the array?
</p><p>
  <code>animal_hash[0..4] => nil</code>
</p><p>
Why do we get nil (which means "nothing")? Because the key in a hash can be anything we want, there is no designated "order" as there is with the array. The computer doesn't know what our logic is, and it will never assume anything. Even if our key integers are in order from least to greatest, we cannot call a range on it any more than we could say "show me everything between cat and pig". It makes no sense. Here is where the differences begin to show. Lets look at a more useful example of a hash.
</p><p>
<code>translation_hash = {"lunes" => "monday", "martes" => "tuesday", "miercoles" => "wednesday", "jueves" => "thursday", "viernes" => "friday", "sabado" => "saturday", "domingo" => "sunday"}</code>
</p><p>
Here we have a translation of weekdays from Spanish to English. We can iterate through either key or value, depending on our needs. This will be very useful when you begin to write programs. Now lets go back to arrays.
</p><p>
<code>translation_array = [["lunes", "monday"], ["martes", "tuesday"], ["miercoles", "wednesday"], ["jueves", "thursday"], ["viernes", "friday"], ["sabado", "saturday"], ["domingo", "sunday"]]</code>
</p><p>
Which can also be written
</p><p>
	<code>translation_array = [["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"] ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]]</code>
</p><p>
The above was achieved with nested arrays (arrays within arrays). We can also put arrays within hashes. All of this can be useful depending on the goal. Note that there is a method, transpose, which actually allows us to manipulate the array and jump between these two different arrangements, which are considered to be "columns" and "rows".
</p>
