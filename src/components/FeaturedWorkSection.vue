<template>
	<section id="work" class="featured-work">
		<div class="container primary">
			<h1 class="header">Featured Work</h1>
		</div>
		<div class="featured-work-container">
			<RouterLink
				v-for="item in items"
				:key="item.slug"
				:to="`/project/${item.slug}`"
				class="work-link"
			>
				<div class="work-link-wrapper">
					<img :src="item.image" :alt="item.title" class="work-link-wrapper__thumb" />
					<h3 class="work-link-wrapper__title">{{ item.title }}</h3>
					<p class="work-link-wrapper__content">{{ item.content }}</p>
				</div>
			</RouterLink>
		</div>
	</section>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
	items: {
		type: Array,
		required: true,
	},
});
</script>
