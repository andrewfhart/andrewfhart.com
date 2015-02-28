---
layout: archive
permalink: /
title: "Andrew F. Hart"
excerpt: "I speak data, fluently."
image:
  feature: home-feature.jpg
id: home
---

Welcome to the personal website of [Andrew F. Hart]({{ site.url }}/about/). Andrew is an entreprenurial software engineer and avid photographer living and working in Los Angeles, California.

---

### [Articles and Blog Posts]({{ site.url }}/articles/)

<div class="tiles">
{% for post in site.categories.articles limit:4 %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->

---

### [Photography]({{ site.url }}/photos/)

<ul class="th-grid-full">
{% for post in site.categories.photos limit:8 %}
  <li><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}"><img src="{{ site.url }}/images/{{ post.image.thumb }}" alt="thumbnail image"></a></li>
{% endfor %}
</ul>
