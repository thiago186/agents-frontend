import api from "./api";

export const getOrganizations = async () => {
    let userOrganizations = [];
    let response = await api.get('/commons/user-orgs');
    if (response.status === 200) {
        userOrganizations = response.data.organizations;
        if (userOrganizations.length > 0) {
            // const organizationNames = userOrganizations.map(org => org.organizationName);
            console.log('User organizations:', userOrganizations)
            return userOrganizations;
        } else {
            throw new Error('User has no organizations');
        }
        
    } else {
        throw new Error('Error getting user organizations');
    }
}