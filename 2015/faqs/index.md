---
layout: article
title: "Frequently Asked Questions"
date: 2015-02-02
modified: 2015-02-20
excerpt: "A compilation of common questions I've been asked..."
image:
  feature: 1280x376.jpg
---

Here is a compilation of common questions I've been asked. If you have a question that's not addressed here, please feel free to get in touch via Twitter or Email.

{% assign other_faqs = site.faqs | where: "type", "other" | sort: "order" %}

<nav class="toc">
  <ul>
    <li><h6>Other/General</h6></li>
{% for faq in other_faqs %}
  <li><a href="{{ faq.url }}">{{ faq.title }}</a></li>
{% endfor %}
  </ul>
</nav><!-- /.toc-left -->

{% for faq in other_faqs %}
<h2><a href="{{ faq.url }}">{{ faq.title }}</a></h2>
{{ faq.content }}
<hr />
{% endfor %}
