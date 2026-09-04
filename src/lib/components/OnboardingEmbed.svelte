<script>
	import { onMount } from 'svelte'

	/** Prefills the form's country of residence. */
	export let country = ''
	/** Background colour, so the embed blends into the host page. */
	export let bg = 'fff'
	/** Height before the embed reports its own. */
	export let height = 900

	$: params = new URLSearchParams({ ...(country && { country }), ...(bg && { bg }) })
	$: src = `https://pauseai.info/embed/onboarding-form/?${params}`

	// The form reports its rendered height on every step change; without this
	// listener the iframe keeps `height` and later steps are cut off.
	onMount(() => {
		const onMessage = (event) => {
			if (event.origin !== 'https://pauseai.info') return
			if (typeof event.data?.height === 'number') height = event.data.height
		}
		window.addEventListener('message', onMessage)
		return () => window.removeEventListener('message', onMessage)
	})
</script>

<div class="onboarding-embed">
	<iframe {src} title="Join PauseAI" style="width: 100%; height: {height}px; border: 0;"></iframe>
</div>

<style>
	.onboarding-embed {
		margin: 2rem 0;
		background-color: white;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}
</style>
