import { supported_currencies } from './constants'
import {
    ContentDetailParams,
    FilteringParams,
    SearchLatLng,
    SearchParams,
    SortingParams
} from './types'

export const get_hotel_listings = async (
    auth: {
        username: string
        password: string
    },
    queryObj: SearchLatLng & SearchParams & ContentDetailParams & FilteringParams & SortingParams
) => {
    const payload = {
        method: 'get',
        url: 'https://apim.expedia.com/hotels/listings',
        params: queryObj,
        headers: {
            Key: auth.username,
            Accept: 'application/vnd.exp-hotel.v3+json',
            'Partner-Transaction-Id': auth.username
        },
        auth
    }

    return payload
}
