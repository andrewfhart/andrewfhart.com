---
layout: page
title: Publications
permalink: /publications/
---

<div class="row publications">
    <div class="col-xs-12 col-md-6 col-lg-6">
        <section>
            <blockquote>
                <p class="fsource">&quot;The single biggest problem in communication is the illusion that it has taken place.&quot;</p>
                <footer>
                    <cite> George Bernard Shaw</cite>
                </footer>
            </blockquote>
            <p>I find that writing helps me to organize my thoughts, clarify my motivations, and pushes me become a better overall communicator. This page contains a complete list of the publications that I have either led or participated in.</p>

            <p>The corresponding "tag cloud" was generated using the words in the titles of all of the publications listed below.</p>
        </section>
    </div>
    <div class="col-xs-12 col-md-6 col-lg-6">
        <img id="" src="/images/publications/tagcloud/sized/s_tc-alternative-2014-03-08-8.39.41-blue.png">
    </div>
</div>


### Peer-reviewed Journal Publications

  <ul class="menu-item publication-list">
    {% for pub in site.data.pubs_journals %}<li>
        <div class="publication">
            {% if pub.image %}<img src="/images/publications/covers/{{ pub.image }}" alt="cover" class="pub-teaser">{% endif %}
            <div class="title pub-title">{% if pub.url %}<a href="{{ pub.url }}" target="_new">{% endif %}{{ pub.title }}{% if pub.url %}</a>{% endif %}</div>
            <div class="title pub-venue">{{ pub.venue }}</div>
            <div class="excerpt pub-authors">Authors: {{ pub.attrib }}</div>
            <div class="excerpt pub-extra">{{ pub.extra }}</div>
        </div>
    </li>{% endfor %}
  </ul>

### Book Chapters

  <ul class="menu-item publication-list">
    {% for pub in site.data.pubs_chapters %}<li>
        <div class="publication">
            {% if pub.image %}<img src="/images/publications/covers/{{ pub.image }}" alt="cover" class="pub-teaser">{% endif %}
            <div class="title pub-title">{% if pub.url %}<a href="{{ pub.url }}" target="_new">{% endif %}{{ pub.title }}{% if pub.url %}</a>{% endif %}</div>
            <div class="title pub-venue">{{ pub.venue }}</div>
            <div class="excerpt pub-authors">Authors: {{ pub.attrib }}</div>
            <div class="excerpt pub-extra">{{ pub.extra }}</div>
        </div>
    </li>{% endfor %}
  </ul>

### Technology Reports

  <ul class="menu-item publication-list">
    {% for pub in site.data.pubs_technicalreports %}<li>
        <div class="publication no-image">
            {% if pub.image %}<img src="/images/publications/covers/{{ pub.image }}" alt="cover" class="pub-teaser">{% endif %}
            <div class="title pub-title">{% if pub.url %}<a href="{{ pub.url }}" target="_new">{% endif %}{{ pub.title }}{% if pub.url %}</a>{% endif %}</div>
            <div class="title pub-venue">{{ pub.venue }}</div>
            <div class="excerpt pub-authors">Authors: {{ pub.attrib }}</div>
            <div class="excerpt pub-extra">{{ pub.extra }}</div>
        </div>
    </li>{% endfor %}
  </ul>

### Technical Articles

  <ul class="menu-item publication-list">
    {% for pub in site.data.pubs_technicalarticles %}<li>
        <div class="publication no-image">
            {% if pub.image %}<img src="/images/publications/covers/{{ pub.image }}" alt="cover" class="pub-teaser">{% endif %}
            <div class="title pub-title">{% if pub.url %}<a href="{{ pub.url }}" target="_new">{% endif %}{{ pub.title }}{% if pub.url %}</a>{% endif %}</div>
            <div class="title pub-venue">{{ pub.venue }}</div>
            <div class="excerpt pub-authors">Authors: {{ pub.attrib }}</div>
            <div class="excerpt pub-extra">{{ pub.extra }}</div>
        </div>
    </li>{% endfor %}
  </ul>

### Research Grants

  <ul class="menu-item publication-list">
    {% for pub in site.data.pubs_researchgrants %}<li>
        <div class="publication no-image">
            {% if pub.image %}<img src="/images/publications/covers/{{ pub.image }}" alt="cover" class="pub-teaser">{% endif %}
            <div class="title pub-title">{% if pub.url %}<a href="{{ pub.url }}" target="_new">{% endif %}{{ pub.title }}{% if pub.url %}</a>{% endif %}</div>
            <div class="title pub-venue">{{ pub.venue }}</div>
            <div class="excerpt pub-authors">{{ pub.attrib }}</div>
            <div class="excerpt pub-extra">{{ pub.extra }}</div>
        </div>
    </li>{% endfor %}
  </ul>


### Refereed Conferences and Workshops

  <ul class="menu-item publication-list">
    {% for pub in site.data.pubs_conferences %}<li>
        <div class="publication no-image">
            {% if pub.image %}<img src="/images/publications/covers/{{ pub.image }}" alt="cover" class="pub-teaser">{% endif %}
            <div class="title pub-title">{% if pub.url %}<a href="{{ pub.url }}" target="_new">{% endif %}{{ pub.title }}{% if pub.url %}</a>{% endif %}</div>
            <div class="title pub-venue">{{ pub.venue }}</div>
            <div class="excerpt pub-authors">Authors: {{ pub.attrib }}</div>
            <div class="excerpt pub-extra">{{ pub.extra }}</div>
        </div>
    </li>{% endfor %}
  </ul>
