---
layout: archive
title: "Projects"
date: 2014-06-02T12:26:34-04:00
modified: 2014-08-18T14:21:32-04:00
excerpt: "A portfolio of projects that I have worked on."
---

<div class="tiles">
{% for post in site.categories.projects %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->

