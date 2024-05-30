const getAppUser = ` SELECT ID, NAME, USERNAME FROM APP_USER `;
const getAppUserById = ` SELECT ID, NAME, USERNAME FROM APP_USER $1 `;

export default {
    getAppUser,
    getAppUserById,
};