<template>
	<section class="hero">
		<div class="container container--horizontally-spaced personal">
			<h1 class="hero__title header">
				I’m Jin, a
				<a
					class="inverse"
					href="https://agility.im/frequent-agile-question/what-is-an-agile-business-analyst/"
					target="_blank"
					rel="noreferrer"
				>
					product business analyst
				</a>
				and a
				<a
					class="inverse"
					href="https://github.com/jinnotgin"
					target="_blank"
					rel="noreferrer"
				>
					full stack developer
				</a>
				who leverages on technology to unlock innovation in everyday
				processes.
			</h1>

			<div class="hero__headshot">
				<img
					alt="Portrait of Jin"
					class="hero__headshot-image"
					:src="profileImage"
				/>
			</div>
		</div>

		<div class="container container--wrap">
			<div class="hero__employer">
				<h3 class="employer__label">Currently:</h3>
				<a href="https://www.ufinity.com/" target="_blank" rel="noreferrer">
					<img
						alt="Ufinity logo"
						class="employer__logo decolourize-logo"
						:src="logoUfinity"
					/>
				</a>
			</div>

			<div class="hero__employer">
				<h3 class="employer__label">Previously:</h3>
				<a
					href="https://home.kpmg/sg/en/home/campaigns/2019/09/digital-village.html"
					target="_blank"
					rel="noreferrer"
				>
					<img
						alt="KPMG Digital Village logo"
						class="employer__logo kpmgdv-logo"
						:src="logoKpmgDv"
					/>
				</a>
				<a href="https://www.ncs.com.sg/" target="_blank" rel="noreferrer">
					<img
						alt="NCS logo"
						class="employer__logo decolourize-logo last"
						:src="logoNcs"
					/>
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
import logoKpmgDv from "../assets/images/logo-kpmgdv.png";
import logoNcs from "../assets/images/logo-ncs.svg";
import logoUfinity from "../assets/images/logo-ufinity.png";
import profileImage from "../assets/images/profilepic-jin.jpg";
</script>
