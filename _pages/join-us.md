---
layout: single
classes: wide
permalink: /join-us/
title: "Join Us"
---

{% for job in site.jobs %}
<div class="job-item">
  <a href="{{ site.baseurl }}{{ job.id }}">
    <span>
      <h5>{{ job.title }}</h5>
      <div>
        <ul>
          <li>{{ job.location }}</li>
        </ul>
      </div>
    </span>
</a>
</div>
{% endfor %}