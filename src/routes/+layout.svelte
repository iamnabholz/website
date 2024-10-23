<script>
	import { onMount } from 'svelte';

	const darkThemeSelectionColors = ['#ff6361', '#2bff88', '#f9ce34', '#4854f9'];

	const lightThemeSelectionColors = ['#ff6361', '#4854f9', '#06BEE1'];

	const darkThemeColor =
		darkThemeSelectionColors[Math.floor(Math.random() * darkThemeSelectionColors.length)];

	const lightThemeColor =
		lightThemeSelectionColors[Math.floor(Math.random() * lightThemeSelectionColors.length)];

	onMount(() => {
		// Select the root element
		const root = document.documentElement;

		// Update CSS variables
		root.style.setProperty('--dark-theme', darkThemeColor);
		root.style.setProperty('--light-theme', lightThemeColor);
	});
</script>

<svelte:head>
	<title>Lukas Nabholz | UX Designer</title>
</svelte:head>

<slot />
