<template>
	<section class="project">
		<ProjectRenderer
			:project-items="projectItemsToRender"
			:project-name="projectName"
			:left-arrow="adjacentLinks.leftArrow"
			:right-arrow="adjacentLinks.rightArrow"
		/>
	</section>
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import ProjectRenderer from "../components/project/ProjectRenderer.vue";
import {
	getAdjacentProjectLinks,
	getProjectItems,
	getProjectName,
} from "../content/projects";

const route = useRoute();

const slug = computed(() => route.params.slug);
const projectItems = computed(() => getProjectItems(slug.value));
const projectName = computed(() => getProjectName(projectItems.value));
const projectItemsToRender = computed(() =>
	projectItems.value ?? [{ type: "error" }],
);
const adjacentLinks = computed(() => getAdjacentProjectLinks(slug.value));

watchEffect(() => {
	document.title = `${projectName.value ?? "😅"} | Jin`;
	window.scrollTo({ top: 0, behavior: "auto" });
});
</script>
