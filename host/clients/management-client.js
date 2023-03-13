import { ManagementClient } from 'auth0';

export default new ManagementClient({
    domain: process.env.AUTH0_ISSUER_BASE_URL.replace('https://', ''),
    clientId: 'dxBNUURjlYDIcgfB4V7ysdrgUew8iv1I',
    clientSecret: 'CpiAyEn6-9vD2_SZaRxrjkT-ZaAQDy7Af0p7ZJHqnl5ThGgzfc912iS-Bf20Zk5T',
    scope: 'read:users update:users',
    audience: process.env.AUTH0_ISSUER_BASE_URL + '/api/v2/'
})