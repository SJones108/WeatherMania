let token = '8d72db3a58220371a06250714fdfd88e2328e13ae308899b'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://flaskweather.glitch.me/api/storms`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://flaskweather.glitch.me/api/storms`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://flaskweather.glitch.me/api/storms/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data) 
        });

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async(id: string) => {
        const response = await fetch(`https://flaskweather.glitch.me/api/storms/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }
    }
}
