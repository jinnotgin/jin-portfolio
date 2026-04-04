<template>
	<div class="App">
		<SiteNav />
		<RouterView />
		<ContactSection />
	</div>
</template>

<script setup>
import { RouterView } from "vue-router";
import ContactSection from "./components/ContactSection.vue";
import SiteNav from "./components/SiteNav.vue";
</script>
