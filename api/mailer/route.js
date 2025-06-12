export async function POST(request) {
    const {email, firstName, lastName} = await request.json();

    if (!email) {
        return new Response(JSON.stringify({error: 'Email is required'}), {
            status: 400,
            headers: {'Content-Type': 'application/json'},
        });
    }

    const contactPayload = {
        email,
        attributes: {
            FIRSTNAME: firstName || '',
            LASTNAME: lastName || ''
        },
        listIds: [3],
        updateEnabled: true
    };

    const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
            'api-key': process.env.BREVO_API_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactPayload)
    });

    if (!res.ok) {
        const errorText = await res.text();
        return new Response(JSON.stringify({error: 'Failed to subscribe', details: errorText}), {
            status: res.status,
            headers: {'Content-Type': 'application/json'}
        });
    }

    return new Response(JSON.stringify({success: true}), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    });
}
