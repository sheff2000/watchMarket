const BASE_URL = 'http://localhost:5001';

export const addBrand = async (formData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/brand`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ formData })
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;  
    }
};

const marketApi = {
    brandApi: {
        addBrand,
    },
};

export default marketApi;