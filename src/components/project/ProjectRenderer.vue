<template>
	<div>
		<template v-for="(item, index) in projectItems" :key="`${item.type}-${index}`">
			<div v-if="item.type === 'error'">
				<div class="project-container">
					<h3 class="project__label">Procrastination Error</h3>
				</div>
				<div class="project-container">
					<h1 class="project__title header">Whoops - this page is still empty 😅</h1>
				</div>
				<div class="project-container">
					<div class="project__text">
						This is a beta portfolio site, so not all projects have been
						populated.
					</div>
				</div>
				<div class="project-container">
					<div class="project__text">
						For more details on this project, do reach out to me directly!
						Thank you. 🙇‍♂️
					</div>
				</div>
			</div>

			<div v-else-if="item.type === 'label'" class="project-container">
				<div v-if="isDivider(item)">&nbsp;</div>
				<h3 v-else class="project__label">{{ item.content }}</h3>
			</div>

			<div v-else-if="item.type === 'title'" class="project-container">
				<h1 class="project__title header">{{ item.content }}</h1>
			</div>

			<div v-else-if="item.type === 'image'" class="container">
				<img
					v-if="imageMap[item.content]"
					class="project__image"
					:src="imageMap[item.content]"
					:alt="`${projectName ?? 'Project'} visual`"
				/>
			</div>

			<div v-else-if="item.type === 'text'" class="project-container">
				<div class="project__text">
					<div v-if="inlineSegments(item.content).length">
						<template
							v-for="(segment, segmentIndex) in inlineSegments(item.content)"
							:key="segmentIndex"
						>
							<template v-if="typeof segment === 'string'">
								{{ segment }}{{ needsSpacer(segment) ? "" : " " }}
							</template>
							<a
								v-else-if="segment.type === 'link'"
								class="inverse project__link"
								:href="segment.href"
								target="_blank"
								rel="noreferrer"
							>
								{{ segment.content }}
							</a>
							<span v-if="segment.type === 'link'">&nbsp;</span>
						</template>
					</div>

					<ul
						v-for="(listSegment, listIndex) in listSegments(item.content)"
						:key="listIndex"
						class="project__list"
					>
						<li
							v-for="(entry, entryIndex) in listSegment.content"
							:key="entryIndex"
							class="list__item"
						>
							{{ entry }}
						</li>
					</ul>
				</div>
			</div>
		</template>

		<div class="project__links">
			<RouterLink
				:to="leftArrow.to"
				class="links__arrow left"
			>
				<span class="links__text">{{ leftArrow.text }}</span>
			</RouterLink>
			<RouterLink
				:to="rightArrow.to"
				class="links__arrow right"
			>
				<span class="links__text">{{ rightArrow.text }}</span>
			</RouterLink>
		</div>
	</div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { imageMap } from "../../content/imageMap";

defineProps({
	projectItems: {
		type: Array,
		required: true,
	},
	projectName: {
		type: String,
		default: undefined,
	},
	leftArrow: {
		type: Object,
		required: true,
	},
	rightArrow: {
		type: Object,
		required: true,
	},
});

function isDivider(item) {
	return item.remarks === "divider" || item.content === " ";
}

function inlineSegments(content = []) {
	return content.filter((segment) => !isListSegment(segment));
}

function listSegments(content = []) {
	return content.filter((segment) => isListSegment(segment));
}

function isListSegment(segment) {
	return typeof segment === "object" && segment?.type === "list";
}

function needsSpacer(segment) {
	return ["👈"].includes(segment);
}
</script>
