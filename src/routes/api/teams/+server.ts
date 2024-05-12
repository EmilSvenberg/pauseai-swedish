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

