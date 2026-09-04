<script lang="ts">
	import { onMount } from 'svelte'

	/** Prefills the form's country of residence. */
	export let country = ''
	/** Background colour, so the embed blends into the host page. Hex without the #, or a CSS colour name. */
	export let bg = 'fff'
	/** Height before the embed reports its own. */
	export let height = 900

	$: params = new URLSearchParams({ ...(country && { country }), ...(bg && { bg }) })
	// No trailing slash before the query: the slashed form 308-redirects, costing
	// every visitor a round-trip before the form loads.
	$: src = `https://pauseai.info/embed/onboarding-form?${params}`
	// Match the card to whatever the embed itself is painting.
	$: cardBg = /^[0-9a-f]{3,8}$/i.test(bg) ? `#${bg}` : bg

	let iframe: HTMLIFrameElement

	// The form reports its rendered height on every step change; without this
	// listener the iframe keeps `height` and later steps are cut off.
	onMount(() => {
		const onMessage = (event: MessageEvent) => {
			if (event.origin !== 'https://pauseai.info') return
			if (event.source !== iframe?.contentWindow) return
			const h = event.data?.height
			if (typeof h === 'number' && Number.isFinite(h) && h > 0) height = h
		}
		window.addEventListener('message', onMessage)
		return () => window.removeEventListener('message', onMessage)
	})
</script>

<div class="onboarding-embed" style="background-color: {cardBg};">
	<iframe
		bind:this={iframe}
		{src}
		title="Join PauseAI"
		style="width: 100%; height: {height}px; border: 0;"
	></iframe>
</div>

<p class="onboarding-embed-fallback">
	Form not loading? <a href="https://pauseai.info/join">Open it on pauseai.info</a>.
</p>

<style>
	.onboarding-embed {
		margin: 2rem 0 0.5rem;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}
	.onboarding-embed-fallback {
		margin: 0 0 2rem;
		font-size: 0.875rem;
		text-align: center;
		opacity: 0.75;
	}
</style>
