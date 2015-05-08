---
layout: article
title: "Furnace PHP Framework"
excerpt: "A (personal) rapid application development framework for PHP 5.3+"
categories: projects
image:
  teaser: /portfolio/thumbnails/furnace-01.png
---

Furnace began in 2006 out of a desire to better understand the "magic" going on inside newly popular (at the time) PHP frameworks like Symfony and CakePHP. URL Routing, Front Controllers, Object Relational Mapping, all of it was fascinating to me. In the process of developing web applications up to that point I had amassed a small toolkit of useful homegrown scripts for doing common tasks like implementing user authentication, form generation, and so on. These formed the basis for what would eventually become Furnace.

For several years, Furnace was my playground; my sandbox for exploring PHP and trying out new ideas for "making things better". More than once I rebuilt it from the ground up, and I learned to appreciate the importance of thinking things through, of flushing out potentially limiting assumptions before they become hopelessly ingrained in layers of code.

<figure class="third">
  <img src="{{ site.url }}/images/portfolio/screenshots/furnace-01.png" alt="Furnace home page">
  <img src="{{ site.url }}/images/portfolio/screenshots/furnace-02.png" alt="Furnace documentation">
  <img src="{{ site.url }}/images/portfolio/screenshots/furnace-03.png" alt="Furnace GitHub repository">
  <figcaption>From left, the Furnace project website at the time I was actively developing it; A view of the 
  custom-built (using Furnace!), versioned documentation that I maintained as the project evolved; A view of the GitHub repository where the Furnace codebase currently resides.</figcaption>
</figure>

After a few years, many lessons, and well over a thousand commits later, I had a framework that I was actively using in a number of personal projects and even in a few applications for consulting clients. That it did its job was never a concern: it wasn't fancy, but neither was I engaging it in anything too exotic. The concern was that I was the only person on Earth who knew how it worked. I found myself never being able to turn over a project and move on, because no one else could readily maintain it. This reality, combined with the fact that, suddenly, the traditional LAMP stack wasn't the only choice for web applications anymore, was the beginning of the end for my relationship with Furnace.

I occasionally use Furnace as an excuse to try new things. I recently moved the Furnace codebase to GitHub, partly as an attempt to get greater visibility for it, but mostly for the chance to dig into git and the absolutely addictive magic that is GitHub. Furnace helped me grow as a software engineer. It was a project I poured my soul into, and thus had an incentive to maintain over time. It taught me about organizing code, the challenges of refactoring a large codebase, introduced me to continuous integration and unit tests, allowed me to explore the promise and the limitations of object-relational-mapping, balance optimizations and performance, and probably a hundred other things besides.

Though I have moved on from Furnace, it still has a warm place in my heart, and I do poke around in the code from time to time, as much to reminisce as to patch something up for the one or two applications still running on it in the wild.