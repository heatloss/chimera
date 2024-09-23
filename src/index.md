---
layout: layouts/home.njk
---

<section class="promo-banner">
	<ul>
{%- for promo in collections.promos -%}
	<li>
		<figure class="banner-block">
			<a href="/comics/{{promo.data.slug}}" class="banner-image">
				<img src="{{promo.data.image}}" alt="{{promo.data.title}}}, by {{promo.data.credits}}" />
			</a>
			<figcaption class="banner-caption">
				<h6 class="banner-title"><a href="/comics/{{promo.data.slug}}">{{promo.data.title}}</a> </h6>
				<cite class="banner-credit">By {{promo.data.credits}}</cite>
			</figcaption>
		</figure>
	</li>

	{%- endfor -%}

	</ul>
</section>




<script type="module" src="/js/randompromo.js"></script>
