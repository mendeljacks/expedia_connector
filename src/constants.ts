export const supported_currencies = [
    'ARS',
    'AUD',
    'BRL',
    'CAD',
    'CHF',
    'CNY',
    'COP',
    'CZK',
    'DKK',
    'EUR',
    'GBP',
    'HKD',
    'HRK',
    'HUF',
    'IDR',
    'INR',
    'JPY',
    'KRW',
    'MXN',
    'MYR',
    'NOK',
    'NZD',
    'PLN',
    'RUB',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'USD',
    'ZAR'
] as const

export const supported_locales = [
    {
        country: 'Argentina',
        website: 'expedia.com.ar',
        site_id: 70,
        languages: [{ language: 'Spanish', locale: 'es_AR' }]
    },
    {
        country: 'Australia',
        website: 'expedia.com.au',
        site_id: 25,
        languages: [{ language: 'English', locale: 'en_AU' }]
    },
    {
        country: 'Austria',
        website: 'expedia.at',
        site_id: 10122006,
        languages: [{ language: 'German', locale: 'de_AT' }]
    },
    {
        country: 'Belgium',
        website: 'expedia.be',
        site_id: 64,
        languages: [
            { language: 'Dutch', locale: 'nl_BE' },
            { language: 'French', locale: 'fr_BE' },
            { language: 'German', locale: 'de_BE' }
        ]
    },
    {
        country: 'Brazil',
        website: 'expedia.com.br',
        site_id: 69,
        languages: [{ language: 'Portuguese', locale: 'pt_BR' }]
    },
    {
        country: 'Canada',
        website: 'expedia.ca',
        site_id: 4,
        languages: [
            { language: 'English', locale: 'en_CA' },
            { language: 'French', locale: 'fr_CA' }
        ]
    },
    {
        country: 'Chile',
        languages: [{ language: 'Spanish', locale: 'es_CL' }]
    },
    {
        country: 'China',
        website: 'expedia.cn',
        site_id: 75,
        languages: [
            { language: 'Chinese', locale: 'zh_CN' },
            { language: 'English', locale: 'en_CN' }
        ]
    },
    {
        country: 'Columbia',
        languages: [{ language: 'Spanish', locale: 'es_CO' }]
    },
    {
        country: 'Croatia',
        languages: [{ language: 'Croatian', locale: 'hr_HR' }]
    },
    {
        country: 'Czech Republic',
        languages: [{ language: 'Czech', locale: 'cs_CZ' }]
    },
    {
        country: 'Denmark',
        website: 'expedia.dk',
        site_id: 3920336,
        languages: [{ language: 'Danish', locale: 'da_DK' }]
    },
    {
        country: 'Estonia',
        website: '',
        site_id: null,
        languages: [{ language: 'Estonian', locale: 'et_EE' }]
    },
    {
        country: 'Finland',
        website: 'expedia.fi',
        site_id: 73,
        languages: [{ language: 'Finnish', locale: 'fi_FI' }]
    },
    {
        country: 'France',
        website: 'expedia.fr',
        site_id: 20,
        languages: [{ language: 'French', locale: 'fr_FR' }]
    },
    {
        country: 'French Guiana',
        website: '',
        site_id: null,
        languages: [{ language: 'French', locale: 'fr_GF' }]
    },
    {
        country: 'Germany',
        website: 'expedia.de',
        site_id: 6,
        languages: [{ language: 'German', locale: 'de_DE' }]
    },
    {
        country: 'Greece',
        website: '',
        site_id: null,
        languages: [{ language: 'Greek', locale: 'el_GR' }]
    },
    {
        country: 'Hong Kong',
        website: 'expedia.com.hk',
        site_id: 18,
        languages: [
            { language: 'Chinese', locale: 'zh_HK' },
            { language: 'English', locale: 'en_HK' }
        ]
    },
    {
        country: 'Hungary',
        website: '',
        site_id: null,
        languages: [{ language: 'Hungarian', locale: 'hu_HU' }]
    },
    {
        country: 'Iceland',
        website: '',
        site_id: null,
        languages: [{ language: 'Icelandic', locale: 'is_IS' }]
    },

    {
        country: 'Indonesia',
        website: 'expedia.co.id',
        site_id: 61,
        languages: [
            { language: 'English', locale: 'en_ID' },
            { language: 'Indonesian', locale: 'id_ID' }
        ]
    },
    {
        country: 'India',
        website: 'expedia.co.in',
        site_id: 27,
        languages: [{ language: 'English', locale: 'en_GB' }]
    },
    {
        country: 'Ireland',
        website: 'expedia.ie',
        site_id: 7110307,
        languages: [{ language: 'English', locale: 'en_IE' }]
    },
    {
        country: 'Israel',
        website: '',
        site_id: null,
        languages: [
            { language: 'English', locale: 'en_IL' },
            { language: 'Hebrew', locale: 'he_IL' }
        ]
    },
    {
        country: 'Italy',
        website: 'expedia.it',
        site_id: 8,
        languages: [{ language: 'Italian', locale: 'it_IT' }]
    },
    {
        country: 'Japan',
        website: 'expedia.co.jp',
        site_id: 28,
        languages: [
            { language: 'English', locale: 'en_JP' },
            { language: 'Japanese', locale: 'ja_JP' }
        ]
    },
    {
        country: 'Korea (South)',
        website: 'expedia.co.kr',
        site_id: 16,
        languages: [
            { language: 'English', locale: 'en_KR' },
            { language: 'Korean', locale: 'ko_KR' }
        ]
    },
    {
        country: 'Latvia',
        website: '',
        site_id: null,
        languages: [{ language: 'Latvian', locale: 'lv_LV' }]
    },
    {
        country: 'Lithuania',
        website: '',
        site_id: null,
        languages: [{ language: 'Lithuanian', locale: 'lt_LT' }]
    },
    {
        country: 'Malaysia',
        website: 'expedia.com.my',
        site_id: 15,
        languages: [
            { language: 'English', locale: 'en_MY' },
            { language: 'Malasian', locale: 'ms_MY' }
        ]
    },
    {
        country: 'Mexico',
        website: 'expedia.mx',
        site_id: 12,
        languages: [
            { language: 'English', locale: 'en_MX' },
            { language: 'Spanish', locale: 'es_MX' }
        ]
    },
    {
        country: 'Netherlands',
        website: 'expedia.nl',
        site_id: 11,
        languages: [{ language: 'Dutch', locale: 'nl_NL' }]
    },
    {
        country: 'New Zealand',
        website: 'expedia.co.nz',
        site_id: 29,
        languages: [{ language: 'English', locale: 'en_NZ' }]
    },
    {
        country: 'Norway',
        website: 'expedia.no',
        site_id: 3270335,
        languages: [{ language: 'Norwegian', locale: 'nb_NO' }]
    },
    {
        country: 'Philippines',
        website: 'expedia.com.ph',
        site_id: 68,
        languages: [
            { language: 'English', locale: 'en_PH' },
            { language: 'Tagalog', locale: 'tl_PH' }
        ]
    },
    {
        country: 'Poland',
        website: '',
        site_id: null,
        languages: [{ language: 'Polish', locale: 'pl_PL' }]
    },
    {
        country: 'Portugal',
        website: '',
        site_id: null,
        languages: [{ language: 'Portuguese', locale: 'pt_PT' }]
    },
    {
        country: 'Russia',
        website: '',
        site_id: null,
        languages: [{ language: 'Russian', locale: 'ru_RU' }]
    },
    {
        country: 'Singapore',
        website: 'expedia.com.sg',
        site_id: 14,
        languages: [{ language: 'English', locale: 'en_SG' }]
    },
    {
        country: 'Slovakia',
        website: '',
        site_id: null,
        languages: [{ language: 'Slovakian', locale: 'sk_SK' }]
    },
    {
        country: 'South Africa',
        website: '',
        site_id: null,
        languages: [
            { language: 'Arabic', locale: 'ar_SA' },
            { language: 'English', locale: 'en_ZA' }
        ]
    },
    {
        country: 'Spain',
        website: 'expedia.es',
        site_id: 9,
        languages: [{ language: 'Spanish', locale: 'es_ES' }]
    },
    {
        country: 'Sweden',
        website: 'expedia.se',
        site_id: 3140309,
        languages: [{ language: 'Swedish', locale: 'sv_SE' }]
    },
    {
        country: 'Switzerland',
        website: 'expedia.ch',
        site_id: 72,
        languages: [
            { language: 'English', locale: 'en_CH' },
            { language: 'French', locale: 'fr_CH' },
            { language: 'German', locale: 'de_CH' },
            { language: 'Italian', locale: 'it_CH' }
        ]
    },

    {
        country: 'Taiwan',
        website: 'expedia.com.tw',
        site_id: 62,
        languages: [
            { language: 'Chinese', locale: 'zh_TW' },
            { language: 'English', locale: 'en_TW' }
        ]
    },
    {
        country: 'Thailand',
        website: 'expedia.co.th',
        site_id: 17,
        languages: [
            { language: 'English', locale: 'en_TH' },
            { language: 'Thai', locale: 'th_TH' }
        ]
    },
    {
        country: 'Turkey',
        website: '',
        site_id: null,
        languages: [{ language: 'Turkish', locale: 'tr_TR' }]
    },
    {
        country: 'Ukraine',
        website: '',
        site_id: null,
        languages: [{ language: 'Ukrainian', locale: 'uk_UA' }]
    },
    {
        country: 'United Arab Emirates',
        website: '',
        site_id: null,
        languages: [
            { language: 'Arabic', locale: 'ar_AE' },
            { language: 'English', locale: 'en_AE' }
        ]
    },
    {
        country: 'United Kingdom',
        website: 'expedia.co.uk',
        site_id: 3,
        languages: [{ language: 'English', locale: 'en_GB' }]
    },
    {
        country: 'United States',
        website: 'expedia.com',
        site_id: 1,
        languages: [
            { language: 'English', locale: 'en_US' },
            { language: 'Spanish', locale: 'es_US' }
        ]
    },
    {
        country: 'Viet Nam',
        website: 'expedia.com.vn',
        site_id: 71,
        languages: [
            { language: 'English', locale: 'en_VN' },
            { language: 'Vietnamese', locale: 'vi_VN' }
        ]
    }
] as const

export const conventional_lodging_types = [
    'Unknown',
    'Hotel',
    'Motel',
    'Hotel Resort',
    'Inn',
    'Bed & Breakfast',
    'Guest House',
    'All-Inclusive',
    'Hostel / Backpacker Accommodation',
    'Ranch',
    'Lodge',
    'Ryokan',
    'Tree House',
    'Riad',
    'Hostel (Budget Hotel)',
    'Country House',
    'Pension',
    'Pousada (Portugal)',
    'Pousada (Brazil)',
    'TownHouse',
    'Castle',
    'Safari / Tentalow',
    'Palace',
    'Agritourism',
    'Cruise',
    'Holiday Park'
] as const

export const vacation_rental_types = [
    'Condo',
    'Cabin',
    'Chalet',
    'Cottage',
    'Villa',
    'Apartment',
    'Private Vacation Home',
    'House Boat',
    'Apart-hotel',
    'Condominium Resort',
    'Caravan Park',
    'Residence'
] as const
