const BASE_URL = 'http://localhost:5001';

const addBrand = async (formData) => {
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

const getBrandList = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/brand`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;  
    }
};

const deleteBrand = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/api/brand/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
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
        getBrandList,
        deleteBrand,
    },
};

export default marketApi;