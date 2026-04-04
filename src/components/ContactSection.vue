<template>
	<section id="contact" class="contact">
		<div class="container">
			<h1 class="contact__title header">
				Looking to start a journey?
				<a class="inverse" href="mailto:hey@jinn.me">Let's talk.</a>
			</h1>
		</div>

		<div class="container">
			<ul class="social-list">
				<li v-for="item in socialLinks" :key="item.label" class="social-list__entry">
					<a
						class="social-list__item"
						:href="item.href"
						:target="item.external ? '_blank' : undefined"
						:rel="item.external ? 'noreferrer' : undefined"
					>
						{{ item.label }}
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
const socialLinks = [
	{
		label: "Github",
		href: "https://github.com/jinnotgin",
		external: true,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/jin-sg/",
		external: true,
	},
	{
		label: "Email",
		href: "mailto:hey@jinn.me",
		external: false,
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/linjin",
		external: true,
	},
	{
		label: "Instagram",
		href: "https://instagram.com/linjin",
		external: true,
	},
];
</script>
