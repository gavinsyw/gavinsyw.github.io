---
layout: page
permalink: /publications/
title: Selected Publications
description: 
years: [2026,2025,2024,2023,2022,2021]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <!-- <h2 class="year">{{y}}</h2> -->
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
