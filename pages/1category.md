---

layout: page
title: Categories
permalink: /category
icon: th-list

---

* Content
{:toc}

{% assign sortedCat = site.categories | sort: name %}

{% for category in sortedCat %}
## {{category | first}}

{% for posts in category %}

{% for post in posts %}

{% if post.url %}
{{ post.date | date:"%F" }} {{ post.date | date: "%a" }}.
{{ post.title }}
{% endif %}

{% endfor %}

{% endfor %}

{% endfor %}