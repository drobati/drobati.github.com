---
layout: page
title: Bookshelf
permalink: /books/
---

<div class="home">

<p>I love to read, so here's what is on my bookshelf.</p>

<div id="shelf">
  <div id="columns">
  {% for book in site.books %}
    <div class="pin">
        <img src="/assets/covers/{{ book.coverphoto }}" />
        <h4>
        {{ book.title }}
        </h4>
    </div>
  {% endfor %}
  </div>
</div>

</div>


