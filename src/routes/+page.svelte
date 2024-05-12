<script lang="ts">
	import Block from '$lib/components/Block.svelte'
	import Mark from '$lib/components/Mark.svelte'
	import PostMeta from '$lib/components/PostMeta.svelte'

	const title = 'We need to Pause AI'
	const description = 'We are risking human extinction. We need to pause AI development, right now.'
</script>

<PostMeta {title} {description} />

<section>
	<Block linkText="Läs om riskerna" href="/risks">
		<span slot="title">Vi riskerar att <Mark>förlora kontrollen</Mark></span>
		AI kan ha fantastiska fördelar, men det kan också urholka vår demokrati, destabilisera vår ekonomi och
		kunna användas för att skapa kraftfulla cyber vapen.
	</Block>
	<Block linkText="Varför och hur AI kan utplåna oss" href="/xrisk">
		<span slot="title">Vi riskerar <Mark>mänsklig utrotning</Mark></span>
		Många AI-labb och experter håller med: AI kan avsluta mänskligheten.
	</Block>
	<Block linkText="Läs förslaget" href="/proposal">
		<span slot="title">Vi behöver en <Mark>paus</Mark></span>
		Stoppa utvecklingen av AI-system kraftfullare än GPT-4 tills vi vet hur man gör dem säkra.
		Detta behöver ske på en internationell nivå, och det behöver hända snart.
	</Block>
	<Block linkText="Hur lång tid har vi?" href="/urgency">
		<span slot="title">VI BEHÖVER HANDLA <Mark>GENAST</Mark></span>
		År 2020 trodde experter att vi hade mer än 35 år till AGI. Senaste genombrotten visar att vi kan
		vara nästan där. Superintelligens kan vara en innovation bort, så vi bör vara försiktiga.</Block
	>
	<Block linkText="Gör en insats" href="/action">
		<span slot="title"><Mark>DU</Mark> KAN HJÄLPA</span>
		För få människor är väl informerade om de potentiella riskerna med AI. Informera andra och hjälp till att stoppa denna
		kapplöpning till botten.</Block
	>
</section>
