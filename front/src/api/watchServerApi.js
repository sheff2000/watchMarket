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

const addWatch = async (formData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/watch`, {
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

const getWatchList = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/watch`, {
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

const getWatchBrandList = async (brandId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/watch/brand/${brandId}`, {
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

const deleteWatch = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/api/watch/${id}`, {
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

const updateWatch = async (id, formData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/watch/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error updating watch:', error);
        throw error;  
    }
};

const marketApi = {
    brandApi: {
        addBrand,
        getBrandList,
        deleteBrand,
    },
    watch: {
        addWatch,
        getWatchList,
        getWatchBrandList,
        deleteWatch,
        updateWatch,
    }
};

export default marketApi;