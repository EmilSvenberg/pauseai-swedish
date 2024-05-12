import type { Team } from '$lib/types.js'
import { json } from '@sveltejs/kit'
import { options } from '$lib/api.js'

function recordToTeam(record: any): Team {
	return {
		id: record.id || 'noId',
		name: record.fields.name,
		description: record.fields.mission,
		leadName: record.fields.name_from_lead,
		leadEmail: record.fields.email_address_from_lead
	}
}

export async function GET({ fetch }) {
	const url = `https://www.google.com`

	const response = await fetch(url, options)
	if (!response.ok) {
		throw new Error('Failed to fetch data from Airtable')
	}
	const data = await response.json()
	const out: Team[] = data.records.map(recordToTeam)
	return json(out)
}
