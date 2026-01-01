<script lang="ts">
	const selectableTexts = [
		'Hälften av AI forskarna tror att risken för att artificiell superintelligens skulle innebära slutet för mänskligheten är 10% eller högre. Nämnvärda exempel är 2024 års nobelpristagare i fysik Geoffery Hinton och ai forskaren Yoshua Bengio, båda har varit med och utvecklat den tekniken som dagens ai bygger på. Denna varning bör tas på allvar.',
		'Oreglerad AI underlättar för illasinnade aktörer att osamka stor skada. Exempelvis har nyligen OpenAi (företaget bakom ChatGPT) varnat för att deras ai kan förenkla skapandet av biologiska vapen, något som även Nuclear Threat Initiative har varnat för. Nyligen användes även anthropic’s ai Claude för att genomföra cyberattacker mot 30 amerikanska företag.',
		'Oreglerad AI riskerar att skapa ökade klyftor i samhället. Det finns redan exempel på hur människor ersätts av ai-lösningar för att effektivisera inom vissa yrken, ett aktuellt exempel är HR här i Sverige. Flera framstående personer i näringslivet varnar för att ai kommer ersätta många av dagens jobb, bland annat Bill Gates och Sebastian Siemiatkowski (VD klarna). Med tydliga regler kan jobb som ersätts av ai eventuellt vara något positivt.',
		'Oreglerad AI riskerar att underminera demokratin. AI assistenter vilseleder i nästan hälften av nyhetshändelserna. Dessutom har utvecklingen för verktyg som kan skapa så kallade deepfakes gått i en rasande takt och det är numera svårt att avgöra om vissa videoklipp och bilder är äkta eller falska.'
	]

	let textIsSelected = [false, false, false, false]

	const copyEmailToClipboard = () => {
		const emailBox = document.getElementById('email-box')
		const emailToCopy = emailBox?.textContent
		const emailCopyMessage = document.getElementById('email-copy-message')

		if (!emailToCopy || emailCopyMessage) return

		navigator.clipboard.writeText(emailToCopy)
	}
</script>

<div class="container">
	<label for="name-select">Vilket Parti vill du kontakta?</label>
	<select id="name-select">
		<option value="">-- Välj ett parti --</option>
		<option value="niels.paarup-petersen@riksdagen.se">Centerpartiet</option>
		<option value="K Mejladress">Kristdemokraterna</option>
		<option value="L Mejladress">Liberalerna</option>
		<option value="Miljöpartiets Mejladress">Miljöpartiet</option>
		<option value="M Mejladress">Moderaterna</option>
		<option value="SD Mejladress">Sverigedemokraterna</option>
		<option value="S Mejladress">Socialdemokraterna</option>
		<option value="V Mejladress">Vänsterpartiet</option>
	</select>
	<span style="margin-left: 10px;">Mejladress för det valda partiet:</span>
	<div id="description-box" class="text-box"></div>
	<button on:click={copyEmailToClipboard}>Kopiera mejladress</button>
	<div id="copy-message">Mejladressen har kopierats!</div>

	<!-- Knappar för att lägga till text i mejlet -->
	<span style="margin-left: 10px;">Vad oroar dig mest med AI?</span>
	<div class="button-container">
		{#each selectableTexts as text, i}
			<button on:click={() => (textIsSelected[i] = !textIsSelected[i])}>Existentiell risk</button>
		{/each}
	</div>

	<!-- Ny sektion för förskrivet mejl -->
	<div style="margin-top: 20px;">
		<h3>Förskrivet mejl:</h3>
		<div id="email-box" class="email-box">
			Hej, Mitt namn är _NAMN_ och jag skickar detta mejl till dig eftersom jag tycker det är allt
			för lite fokus på säkerhet i AI debatten vilket gör mig orolig för hur vi säkerställer att AI
			utvecklingen blir både gynnsam men även säker för oss i Sverige. Över hälften av svenskarna
			oroar sig över den snabba ai utvecklingen och tror att ai medför större risk än möjligheter.
			Bristen på tydliga regelverk och information för hur ert parti vill hantera förändringar som
			AI medför gör mig orolig för framtiden och hur ai utvecklingen kan påverka min familj. Med
			vänliga hälsningar, [Ditt namn och adress]
		</div>

		{#each textIsSelected as text, i}
			{selectableTexts[i]}
		{/each}

		<button on:click={copyEmailToClipboard}>Kopiera mejl</button>
		<div id="email-copy-message">Mejlet har kopierats!</div>
	</div>
</div>

<style>
	.container {
		font-family: Arial, sans-serif;
		max-width: 600px;
		margin: 20px auto;
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}

	select {
		width: 200px;
		padding: 10px;
		margin-right: 20px;
		border-radius: 4px;
		border: 1px solid #ccc;
	}

	.text-box {
		display: inline-block;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		min-height: 20px;
		min-width: 250px;
		background-color: #f9f9f9;
		vertical-align: top;
		margin-right: 10px;
		margin-bottom: 10px;
	}

	button {
		padding: 10px 15px;
		background-color: #ff9800; /* Orange */
		color: black; /* Svart text */
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-right: 10px;
		margin-bottom: 10px;
	}

	button:hover {
		background-color: #ffb74d; /* Ljus orange */
	}

	button:active {
		background-color: #f57c00; /* Mörkare orange för highlight */
	}

	#copy-message,
	#email-copy-message {
		margin-top: 10px;
		color: #ff9800; /* Orange för meddelandet */
		font-size: 14px;
		display: none;
	}

	.email-box {
		margin-top: 20px;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		background-color: #f9f9f9;
		white-space: pre-line;
	}

	.button-container {
		margin-top: 10px;
		margin-bottom: 20px;
	}
</style>
