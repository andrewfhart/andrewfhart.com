---
layout: archive
title: "Publications"
excerpt: "Academic publications I've participated in."
id: publications
---

<h5>Journal Publications</h5>
  <ul class="menu-item publication-list">
    {% for pub in site.data.pubs_journals %}<li>
        <div class="publication">
            {% if pub.image %}<img src="/images/publications/covers/{{ pub.image }}" alt="teaser" class="pub-teaser">{% endif %}
            <div class="title pub-title">{% if pub.url %}<a href="{{ pub.url }}" target="_new">{% endif %}{{ pub.title }}{% if pub.url %}</a>{% endif %}</div>
            <div class="title pub-venue">{{ pub.venue }}</div>
            <div class="excerpt pub-authors">Authors: {{ pub.attrib }}</div>
            <div class="excerpt pub-extra">{{ pub.extra }}</div>
        </div>
    </li>{% endfor %}
  </ul>