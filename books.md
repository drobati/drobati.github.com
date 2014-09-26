---
layout: page
title: Bookshelf
permalink: /books/
---

<div class="home">

  <p>I love to read, so here's what is on my bookshelf.</p>

  <ul class="post-list">
    {% assign sorted_books = site.books | sort: 'series' | sort: 'volume' %}
    {% for book in sorted_books %}
      <li>
        <h4>
          <a href="{{ book.url }}">{{ book.title }} by {{ book.author }}</a>
        </h4>
      </li>
    {% endfor %}
  </ul>

</div>


