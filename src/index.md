---
layout: layouts/home.njk
---

<section class="promo-banner">
	<ul>
		{%- for promo in collections.promos -%} 
		<li data-title="{{promo.data.title}}"> 
		<h6 class="banner-title">
			<a href="{{promo.data.title | getUrlFromTitle : collections.comics}}"> {{promo.data.title}} </a>
		</h6>
		<figure class="banner-block">
			<a href="{{promo.data.title | getUrlFromTitle : collections.comics}}" class="banner-image">
				<img src="{{promo.data.image}}" alt="{{promo.data.title}}, by {{promo.data.title | getCreditsFromTitle : collections.comics}}" /> </a> 
			<figcaption class="banner-caption">
				<cite class="banner-credit">By {{promo.data.title | getCreditsFromTitle : collections.comics}}</cite> 
			</figcaption>
		</figure>
		</li>
		{%- endfor -%} 
	</ul>
</section>
<section class="campaigns">
	<!-- <div class="campaign">
		<h6 class="campaign-title">
			Sale! 
		</h6>
		<figure class="image-block">
			<a href="#"><img src="/img/CAMP_SALE.jpg" alt="50% off sale" style="filter: grayscale(100%) contrast(40%);" /></a> 
			<figcaption class="image-caption">
				Imagine if we had a sale 
			</figcaption>
		</figure>
	</div> --> 
	<div class="campaign">
		<h6 class="campaign-title">
			Crowd<wbr/>funder! 
		</h6>
		<figure class="image-block">
			<a href="https://www.kickstarter.com/projects/scottycomics/nigh-heaven-and-hell-book-1-and-2-kickstarter" target="_blank"><img src="/img/CAMP_NHH.jpg" alt="Nigh Heaven & Hell: Book 1 & 2" /></a> 
			<figcaption class="image-caption">
				Goal reached! 
			</figcaption>
		</figure>
	</div>
	<div class="campaign">
		<h6 class="campaign-title">
			Bundle! 
		</h6>
		<figure class="image-block">
			<a href="#"><img src="/img/CAMP_EBOOKS.jpg" alt="E-book bundle" /></a> 
			<figcaption class="image-caption">
				Imagine if we had ebooks?
			</figcaption>
		</figure>
	</div>
	<div class="campaign">
		<h6 class="campaign-title">
			Kick<wbr>Started! 
		</h6>
		<figure class="image-block">
			<a href="https://www.kickstarter.com/projects/1344443281/ghost-junk-sickness-the-complete-series" target="_blank"><img src="/img/CAMP_GJR.jpg" alt="Ghost Junk Sickness: The Complete Collection" /></a> 
			<figcaption class="image-caption">
				Campaign successful! 
			</figcaption>
		</figure>
	</div>
</section>
<section class="comics">
	<h4 class="comics-title">
		Listed Comics: 
	</h4>
	<form id="comics-list-options">
	<menu class="comic-ops"> 
		<li class="comic-op" data-toggleblock="closed"><span class="op-title" data-toggler="active">Genres:</span>
		<button type="button" class="discloser-toggle" data-toggler="active" data-collection="genres">All</button> 
		<ul class="discloser-options-list">
			{%- for genre in collections.genres -%} 
			<li class="discloser-option">
				<label> 
					{{genre}}
					<input type="checkbox" name="genres" value="{{genre}}" />
				</label>
			</li>
			{%- endfor -%} 
		</ul>
		<li class="comic-op" data-toggleblock="closed"><span class="op-title" data-toggler="active">Tags:</span>
		<button type="button" class="discloser-toggle" data-toggler="active" data-collection="tags">All</button> 
		<ul class="discloser-options-list">
			{%- for tag in collections.generalTags -%} 
			<li class="discloser-option">
				<label> 
					{{tag}}
					<input type="checkbox" name="generalTags" value="{{tag}}" />
				</label>
			</li>
			{%- endfor -%} 
		</ul>
		</li>
		<li class="comic-op" data-toggleblock="closed"><span class="op-title" data-toggler="active">Status:</span>
		<button type="button" class="discloser-toggle" data-toggler="active" data-collection="statuses">All</button> 
		<ul class="discloser-options-list">
			{%- for status in collections.statuses -%} 
			<li class="discloser-option">
				<label> 
					{{status}}
					<input type="checkbox" name="statuses" value="{{status}}" />
				</label>
			</li>
			{%- endfor -%} 
		</ul>
		</li>
	</menu>
	</form>
	<div class="comic-grid-box">
		<ul class="comic-grid">
			{%- for comic in collections.comics -%}
			<li{% if page.url== comic.url %} aria-current="page" {% endif %} data-title="{{comic.data.title}}">
				<a class="comic-thumb" href='{{ comic.url }}'><img src='{{comic.data.thumbnail}}' alt='{{comic.data.title}}' /></a>
			</li>
			{%- endfor -%} 
		</ul>
	</div>
</section>
<script type="module" src="/js/randompromo.js"></script>
<script type="module" src="/js/togglers.js"></script>
