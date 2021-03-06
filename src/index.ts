import { Auth, HotelListingsQueryObj } from './types'

export const get_hotel_listings = (auth: Auth, queryObj: HotelListingsQueryObj) => {
    const payload = {
        method: 'get' as const,
        url: 'https://apim.expedia.com/hotels/listings' as const,
        params: queryObj,
        headers: {
            Key: auth.username,
            Accept: 'application/vnd.exp-hotel.v3+json' as const,
            'Partner-Transaction-Id': auth.username
        },
        auth
    }

    return payload
}
