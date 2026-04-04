<template>
	<nav class="nav">
		<div
			class="container container--horizontally-spaced container--vertically-center"
		>
			<RouterLink to="/" aria-label="Go to home" @click="animateLogo">
				<svg
					class="nav__logo"
					viewBox="0 0 4010 3990"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path ref="logoMorphPath" class="logo-path" :d="iconPathData" />
				</svg>
			</RouterLink>

			<ul class="nav__list">
				<li class="nav__list-entry">
					<RouterLink to="/" class="nav__list-item hidden-mobile" @click="animateLogo">
						Home
					</RouterLink>
				</li>
				<li class="nav__list-entry">
					<button
						type="button"
						class="nav__list-item nav__button"
						@click="goToWork"
					>
						Work
					</button>
				</li>
				<li class="nav__list-entry">
					<button
						type="button"
						class="nav__list-item nav__button"
						@click="goToContact"
					>
						Contact
					</button>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup>
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

gsap.registerPlugin(MorphSVGPlugin);

const route = useRoute();
const router = useRouter();
const logoMorphPath = ref(null);
let logoTimeline = null;

const iconPathData =
	"M20 2395 l0 -1575 180 0 180 0 0 1400 0 1400 1630 0 1630 0 0 -1630 0 -1630 -1810 0 -1810 0 0 -175 0 -175 1990 0 1990 0 0 1980 0 1980 -1990 0 -1990 0 0 -1575z M2099 3130 c-115 -20 -171 -88 -173 -210 -1 -154 85 -228 254 -218 94 5 144 29 184 86 38 53 48 158 21 228 -19 49 -75 99 -123 108 -61 11 -120 13 -163 6z M1790 2525 c0 -24 2 -25 76 -25 l75 0 -4 -722 c-4 -777 -4 -782 -56 -834 -22 -22 -32 -25 -70 -21 -51 6 -81 34 -81 74 0 46 17 63 65 63 l44 0 7 56 c12 98 -7 151 -70 198 -22 17 -42 21 -109 21 -99 0 -147 -20 -185 -78 -37 -55 -44 -165 -14 -223 23 -46 74 -99 115 -121 79 -41 258 -54 382 -28 184 39 295 143 360 337 50 150 55 227 55 801 l0 527 -295 0 -295 0 0 -25z";

const textPathData =
	"M805 2821 c-78 -20 -147 -83 -171 -154 -24 -71 -15 -190 17 -254 49 -95 145 -133 302 -120 88 8 152 39 194 95 40 53 53 98 53 182 -1 114 -39 181 -128 226 -44 22 -69 27 -145 30 -51 2 -105 0 -122 -5z M1692 2820 c-41 -10 -102 -52 -130 -90 -24 -32 -52 -126 -52 -174 0 -52 31 -143 62 -180 53 -65 97 -81 223 -81 158 0 222 31 272 133 23 48 28 70 28 137 0 178 -102 267 -303 264 -37 -1 -82 -5 -100 -9z M3320 2121 c-145 -20 -245 -89 -307 -212 l-23 -44 0 118 0 117 -350 0 -350 0 0 -30 0 -30 75 0 75 0 0 -630 0 -630 -75 0 -75 0 0 -30 0 -30 410 0 410 0 0 30 0 30 -61 0 -60 0 3 468 c3 465 3 467 27 527 77 194 223 271 279 147 15 -33 17 -102 20 -589 l3 -553 -60 0 -61 0 0 -30 0 -30 410 0 410 0 0 30 0 30 -80 0 -80 0 0 478 c0 531 -4 567 -63 676 -44 79 -116 139 -200 165 -75 23 -199 33 -277 22z M450 2070 l0 -30 96 0 96 0 -5 -867 c-4 -881 -7 -953 -43 -1038 -19 -47 -50 -65 -107 -65 -94 0 -139 49 -117 129 l11 41 58 0 58 0 7 37 c35 212 -54 324 -244 311 -147 -11 -240 -111 -240 -258 0 -80 27 -139 95 -207 53 -53 72 -65 136 -85 65 -20 94 -23 234 -23 139 0 170 3 232 23 199 62 327 201 397 432 58 190 58 198 63 943 l4 687 -365 0 -366 0 0 -30z M1360 2070 l0 -30 85 0 85 0 0 -630 0 -630 -80 0 -80 0 0 -30 0 -30 430 0 430 0 0 30 0 30 -80 0 -80 0 0 660 0 660 -355 0 -355 0 0 -30z";

function animateLogo() {
	if (!logoMorphPath.value) {
		return;
	}

	logoTimeline?.kill();

	logoTimeline = gsap.timeline();
	logoTimeline
		.set(logoMorphPath.value, {
			attr: { d: iconPathData },
			transformOrigin: "center center",
		})
		.to(logoMorphPath.value, {
			duration: 0.34,
			morphSVG: {
				shape: textPathData,
				shapeIndex: "auto",
			},
			ease: "power2.inOut",
		})
		.to(logoMorphPath.value, {
			duration: 0.34,
			morphSVG: {
				shape: iconPathData,
				shapeIndex: "auto",
			},
			ease: "power2.inOut",
		});
}

function goToWork() {
	if (route.name === "home") {
		document.getElementById("work")?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		return;
	}

	router.push({ name: "home", hash: "#work" });
}

function goToContact() {
	document.getElementById("contact")?.scrollIntoView({
		behavior: "smooth",
		block: "start",
	});
}

onMounted(() => {
	gsap.set(logoMorphPath.value, {
		attr: { d: iconPathData },
		transformOrigin: "center center",
	});
	animateLogo();
});

onBeforeUnmount(() => {
	logoTimeline?.kill();
});
</script>

<style scoped>
.nav__list {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	list-style-type: none;
	margin: 0;
	min-height: 2.5rem;
	padding-left: 0;
}

.nav__list-entry {
	display: flex;
	align-items: center;
	height: 100%;
}

.nav__button {
	background: transparent;
	border: 0;
	color: inherit;
	cursor: pointer;
	font: inherit;
	padding: 0;
}

.nav__list-item {
	display: inline-flex;
	align-items: center;
	line-height: 1;
	margin-left: 0;
	margin-top: 0;
}

.nav__list-entry + .nav__list-entry .nav__list-item {
	margin-left: 3.5rem;
}

.logo-path {
	fill: #000000;
	stroke: none;
}
</style>
