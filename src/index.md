---
layout: layouts/home.njk
---

<section class="splash-banner">
	<ul>
		{%- for splash in collections.splash -%} 
		<li data-title="{{splash.data.title}}"> 
		<h6 class="banner-title">
			<a href="{{splash.data.title | getUrlFromTitle : collections.comics}}"> {{splash.data.title}} </a>
		</h6>
		<figure class="banner-block">
			<a href="{{splash.data.title | getUrlFromTitle : collections.comics}}" class="banner-image">
				<img src="{{splash.data.image}}" loading="eager" sizes="100vw"
				eleventy:widths="360,480,960" alt="{{splash.data.title}}, by {{splash.data.title | getCreditsFromTitle : collections.comics}}" />
			</a> 
			<figcaption class="banner-caption">
				<cite class="banner-credit">By {{splash.data.title | getCreditsFromTitle : collections.comics}}</cite> 
			</figcaption>
		</figure>
		</li>
		{%- endfor -%} 
	</ul>
</section>
<section class="campaigns">
	{%- for campaign in collections.campaigns -%} 
	<div class="campaign">
		<h6 class="campaign-title">
			{{campaign.data.label | addWBR }}
		</h6>
		<figure class="image-block">
			<a href="{{campaign.data.link}}" target="_blank"><img src="{{campaign.data.image}}" sizes="30vw"
			eleventy:widths="240,320,480" alt="{{campaign.data.label}}" /></a> 
			<figcaption class="image-caption">
				{{campaign.data.blurb}}
			</figcaption>
		</figure>
	</div>
	{%- endfor -%} 	
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
<script type="module" src="/js/togglers.js"></script>
<script type="module" src="/js/randomsplash.js"></script>
