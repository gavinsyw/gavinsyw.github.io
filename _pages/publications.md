---
layout: page
permalink: /publications/
title: Papers
description: 
years: [2026,2025,2024,2023,2022,2021]
nav: true
---

<div class="publications publications-timeline">
{% for y in page.years %}
  {% capture year_bib %}{% bibliography -f papers -q @*[year={{y}}]* %}{% endcapture %}
  {% if year_bib contains '<li>' %}
  <div class="timeline-year-group">
    <h2 class="timeline-year-label">{{y}}</h2>
    {{ year_bib }}
  </div>
  {% endif %}
{% endfor %}
</div>
