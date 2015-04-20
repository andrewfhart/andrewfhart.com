---
layout: archive
title: "Publications"
excerpt: "Academic publications I've participated in."
id: publications
---

<div class="row page-cover">
    <div>
        <div>
            <img id="coverpic" src="/images/publications/tagcloud/sized/s_tc-alternative-2014-03-08-8.39.41-blue.png" class="rounded">
        </div>
        <section id="page-cover opensans">
            <blockquote style="font-size:70%">
                <p class="fsource">&quot;The single biggest problem in communication is the illusion that it has taken place.&quot;</p>
                <footer>
                    <cite>- George Bernard Shaw</cite>
                </footer>
            </blockquote>
            <p>
                I find that writing helps me to organize my thoughts, clarify my motivations, and pushes me become a better overall communicator. This page contains a complete list of the publications that I have either led or participated in.
                The corresponding "tag cloud" was compiled by aggregating words in the titles of all of the
                publications listed below.
            </p>
        </section>
    </div>
</div>

<br />

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

  <h5>Book Chapters</h5>
  <ul class="menu-item publication-list">
    {% for pub in site.data.pubs_chapters %}<li>
        <div class="publication">
            {% if pub.image %}<img src="/images/publications/covers/{{ pub.image }}" alt="teaser" class="pub-teaser">{% endif %}
            <div class="title pub-title">{% if pub.url %}<a href="{{ pub.url }}" target="_new">{% endif %}{{ pub.title }}{% if pub.url %}</a>{% endif %}</div>
            <div class="title pub-venue">{{ pub.venue }}</div>
            <div class="excerpt pub-authors">Authors: {{ pub.attrib }}</div>
            <div class="excerpt pub-extra">{{ pub.extra }}</div>
        </div>
    </li>{% endfor %}
  </ul>
