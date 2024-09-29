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
<section class="campaigns">
	<div class="campaign">
		<h6 class="campaign-title">
			Sale!
		</h6>
		<figure class="image-block">
			<a href="#"><img src="/img/CAMP_SALE.jpg" alt="50% off sale" style="filter: grayscale(100%) contrast(40%);" /></a>
			<figcaption class="image-caption">
				Imagine if we had a sale
			</figcaption>
		</figure>
	</div>
	<div class="campaign">
		<h6 class="campaign-title">
			Bundle!
		</h6>
		<figure class="image-block">
			<a href="#"><img src="/img/CAMP_EBOOKS.jpg" alt="E-book bundle" style="filter: grayscale(100%) contrast(67%);" /></a>
			<figcaption class="image-caption">
				Imagine if we had ebooks
			</figcaption>
		</figure>
	</div>
	<div class="campaign">
		<h6 class="campaign-title">
			Crowdfunder!
		</h6>
		<figure class="image-block">
			<a href="https://www.kickstarter.com/projects/1344443281/ghost-junk-sickness-the-complete-series"><img src="/img/CAMP_GJR.jpg" alt="Ghost Junk Sickness: The Complete Collection"/></a>
			<figcaption class="image-caption">
				Stretch goal unlocked!
			</figcaption>
		</figure>
	</div>
</section>

<script type="module" src="/js/randompromo.js"></script>
