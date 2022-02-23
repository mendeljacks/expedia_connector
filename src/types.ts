import { supported_currencies } from './constants'

export type SearchLatLng = {
    geoLocation?: string // '40.714269,-74.005973'
    radius?: number
    unit?: 'km' | 'mi'
}
export type SearchParams = {
    checkIn?: string //2022-09-19
    checkOut?: string //2022-09-20
    locale?: string
    currency?: typeof supported_currencies[number]
    // 'room#.adults': number;
    // 'room#.childAges': string; // '2,3'
    source?: 'browser' | 'mobileapp'
}
export type ContentDetailParams = {
    contentDetails?: 'lowest' | 'low' | 'medium' | 'high'
    allRoomTypes?: boolean
    links?: string //WD,WS,AD,WEB,API
}
export type Rating = '1.0' | '1.5' | '2.0' | '2.5' | '3.0' | '3.5' | '4.0' | '4.5' | '5.0'
export type FilteringParams = {
    minStarRating?: Rating
    maxStarRating?: string
    limit?: number
    queryText?: string
    availOnly?: boolean
    smokingPreference?: 'smoking' | 'nonsmoking' | 'both'
    rateType?: 'all' | 'payhotel' | 'payonline'
    imageSizes?: 't' | 's' | 'b' | 'y' | 'z'
    thumbnailImageSize?: 't' | 's' | 'b' | 'y' | 'z'
    includedPropertyTypeIds?: string
    excludedPropertyTypeIds?: string
    includedInventorySourceIds?: string
    freeCancellation?: boolean
    groupedAmenities?: boolean
}
export type SortingParams = {
    sortType?:
        | 'price'
        | 'starrating'
        | 'avgrate'
        | 'deals'
        | 'guestrating'
        | 'hotelname'
        | 'distance'
        | 'totalpricewithfees'
    sortOrder?: 'asc' | 'desc'
}

export type Auth = {
    username: string
    password: string
}
export type HotelListingsQueryObj = SearchLatLng &
    SearchParams &
    ContentDetailParams &
    FilteringParams &
    SortingParams
