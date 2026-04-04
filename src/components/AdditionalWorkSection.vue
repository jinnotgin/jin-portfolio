<template>
	<section class="additional-work">
		<div class="container">
			<h1 class="header secondary">Other Work</h1>
		</div>
		<div class="additional-work-container">
			<ul class="work__list">
				<li v-for="item in items" :key="item.slug" class="work__list-item">
					<RouterLink
						:to="`/project/${item.slug}`"
						class="work__list-item-link no-default-hover"
					>
						<h2 class="work-title">{{ item.title }}</h2>
						<span class="work-detail work-role">{{ item.role }}</span>
						<span class="work-detail work-spacer"> </span>
						<span class="work-detail work-company">{{ item.company }}</span>
						<span class="work-detail work-date">{{ item.year }}</span>
					</RouterLink>
				</li>
			</ul>
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
