<template>
	<div>
		<HeroSection />
		<FeaturedWorkSection :items="featuredWorkItems" />
		<AdditionalWorkSection :items="additionalWorkItems" />
	</div>
</template>

<script setup>
import { nextTick, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import AdditionalWorkSection from "../components/AdditionalWorkSection.vue";
import FeaturedWorkSection from "../components/FeaturedWorkSection.vue";
import HeroSection from "../components/HeroSection.vue";
import { additionalWorkItems, featuredWorkItems } from "../content/work";

const route = useRoute();

function syncHomeMetaAndScroll(hash) {
	document.title = "Jin | Product Business Analyst, Full Stack Developer";

	nextTick(() => {
		if (hash) {
			document.querySelector(hash)?.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
			return;
		}

		window.scrollTo({ top: 0, behavior: "auto" });
	});
}

onMounted(() => {
	syncHomeMetaAndScroll(route.hash);
});

watch(
	() => route.fullPath,
	() => {
		syncHomeMetaAndScroll(route.hash);
	},
);
</script>
