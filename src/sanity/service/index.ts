
const BASE_URL = 'https://94zkm4p5.api.sanity.io/v2024-08-05/data/mutate/production'

export default async function saveContactInfo() {
    const data = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
                createContactInfo(data: {
                    name: "John Doe",
                    email: "    
                    message: "Hello, I would like to know more about your services."
                }) {
                    _id
                }
            }`
        })
    })

    return data.json()
}