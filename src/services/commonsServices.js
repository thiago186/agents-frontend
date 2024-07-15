import api from "./api";

export const isValidToken = async () => {
    try {
        let response = await api.get('/auth/verify');
        return response.status === 200;
    } catch (error) {
        console.error('Error validating token:', error);
        return false;
    }
};

export const getOrganizations = async () => {
    try {
        let response = await api.get('/commons/user-orgs');
        if (response.status === 200) {
            let userOrganizations = response.data.organizations;
            if (userOrganizations.length > 0) {
                console.log('User organizations:', userOrganizations);
                return userOrganizations;
            } else {
                throw new Error('User has no organizations');
            }
        } else {
            throw new Error('Error getting user organizations');
        }
    } catch (error) {
        console.error('Error fetching organizations:', error);
        throw error;
    }
};