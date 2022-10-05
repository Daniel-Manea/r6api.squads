import { Token } from '../auth/cacheToken';
import { Ubi_HEADERS } from './headers.config.json';

export default async function () {

    const token = await Token();

    const expiration = new Date(token?.Expiration!).toISOString()

    const Prod = {
        'Authorization': `ubi_v1 t=${token?.AuthToken}`,
        'Accept': Ubi_HEADERS.Accept,
        'User-Agent': Ubi_HEADERS.UserAgent,
        'Ubi-AppId': Ubi_HEADERS.UbiAppId,
        'Ubi-SessionId': Ubi_HEADERS.UbiSessionId,
        'expiration': `${expiration}`,
        'Host': Ubi_HEADERS.Host_Prod,
        'Connection': 'keep-alive',
    }
    const Public = {
        'Authorization': `ubi_v1 t=${token?.AuthToken}`,
        'Accept': Ubi_HEADERS.Accept,
        'User-Agent': Ubi_HEADERS.UserAgent,
        'Ubi-AppId': Ubi_HEADERS.UbiAppId,
        'Ubi-SessionId': Ubi_HEADERS.UbiSessionId,
        'expiration': `${expiration}`,
        'Host': Ubi_HEADERS.Host_Public,
        'Connection': 'keep-alive',
    }
    return { Prod, Public };
}