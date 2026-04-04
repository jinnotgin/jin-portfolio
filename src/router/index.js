import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProjectPage from "../pages/ProjectPage.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
		},
		{
			path: "/project/:slug",
			name: "project",
			component: ProjectPage,
			props: true,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}

		if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth",
				top: 0,
			};
		}

		return { top: 0, left: 0, behavior: "auto" };
	},
});

export default router;
