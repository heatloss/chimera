---
layout: layouts/home.njk
---

<section class="promo-banner">
	<ul>
{%- for promo in collections.promos -%}
	<li>
		<figure class="banner-block">
			<a href="{{promo.data.title | getUrlFromTitle : collections.comics}}" class="banner-image">
				<img src="{{promo.data.image}}" alt="{{promo.data.title}}}, by {{promo.data.title | getCreditsFromTitle : collections.comics}}" />
			</a>
			<figcaption class="banner-caption">
				<h6 class="banner-title"><a href="{{promo.data.title | getUrlFromTitle : collections.comics}}">
					{{promo.data.title}}
				</a></h6>
				<cite class="banner-credit">By {{promo.data.title | getCreditsFromTitle : collections.comics}}</cite>
			</figcaption>
		</figure>
	</li>
{%- endfor -%}
	</ul>

</section>

<script type="module" src="/js/randompromo.js"></script>
