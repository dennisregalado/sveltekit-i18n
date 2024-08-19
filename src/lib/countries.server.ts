export type Localization = {
	language: LanguageCode;
	country: CountryCode;
	label: string;
	currency: CurrencyCode;
};

/**
 * A record of country localizations.
 * 
 * Each key is a lowercase ISO language code followed by a hyphen and a lowercase ISO country code.
 * Each value is a Localization object containing:
 * - label: The country name in English
 * - language: The ISO 639-1 language code (always 'EN' in this case)
 * - country: The ISO 3166-1 alpha-2 country code
 * - currency: The ISO 4217 currency code for the country
 * 
 * This data can be used for internationalization purposes, such as displaying country names,
 * setting language preferences, or handling currency conversions.
 */
export const countries: Record<string, Localization> = {
	'en-us': {
		label: 'United States',
		language: 'EN',
		country: 'US',
		currency: 'USD'
	},
	'en-ae': {
		label: 'United Arab Emirates',
		language: 'EN',
		country: 'AE',
		currency: 'AED'
	},
	'en-at': {
		label: 'Austria',
		language: 'EN',
		country: 'AT',
		currency: 'EUR'
	},
	'en-au': {
		label: 'Australia',
		language: 'EN',
		country: 'AU',
		currency: 'AUD'
	},
	'en-be': {
		label: 'Belgium',
		language: 'EN',
		country: 'BE',
		currency: 'EUR'
	},
	'en-ca': {
		label: 'Canada',
		language: 'EN',
		country: 'CA',
		currency: 'CAD'
	},
	'en-ch': {
		label: 'Switzerland',
		language: 'EN',
		country: 'CH',
		currency: 'CHF'
	},
	'en-cz': {
		label: 'Czechia',
		language: 'EN',
		country: 'CZ',
		currency: 'CZK'
	},
	'en-de': {
		label: 'Germany',
		language: 'EN',
		country: 'DE',
		currency: 'EUR'
	},
	'en-dk': {
		label: 'Denmark',
		language: 'EN',
		country: 'DK',
		currency: 'DKK'
	},
	'en-es': {
		label: 'Spain',
		language: 'EN',
		country: 'ES',
		currency: 'EUR'
	},
	'en-fi': {
		label: 'Finland',
		language: 'EN',
		country: 'FI',
		currency: 'EUR'
	},
	'en-fr': {
		label: 'France',
		language: 'EN',
		country: 'FR',
		currency: 'EUR'
	},
	'en-gb': {
		label: 'United Kingdom',
		language: 'EN',
		country: 'GB',
		currency: 'GBP'
	},
	'en-hk': {
		label: 'Hong Kong SAR',
		language: 'EN',
		country: 'HK',
		currency: 'HKD'
	},
	'en-ie': {
		label: 'Ireland',
		language: 'EN',
		country: 'IE',
		currency: 'EUR'
	},
	'en-il': {
		label: 'Israel',
		language: 'EN',
		country: 'IL',
		currency: 'ILS'
	},
	'en-it': {
		label: 'Italy',
		language: 'EN',
		country: 'IT',
		currency: 'EUR'
	},
	'en-jp': {
		label: 'Japan',
		language: 'EN',
		country: 'JP',
		currency: 'JPY'
	},
	'en-kr': {
		label: 'South Korea',
		language: 'EN',
		country: 'KR',
		currency: 'KRW'
	},
	'en-mx': {
		label: 'Mexico',
		language: 'EN',
		country: 'MX',
		currency: 'MXN'
	},
	'en-my': {
		label: 'Malaysia',
		language: 'EN',
		country: 'MY',
		currency: 'MYR'
	},
	'en-nl': {
		label: 'Netherlands',
		language: 'EN',
		country: 'NL',
		currency: 'EUR'
	},
	'en-no': {
		label: 'Norway',
		language: 'EN',
		country: 'NO',
		currency: 'USD'
	},
	'en-nz': {
		label: 'New Zealand',
		language: 'EN',
		country: 'NZ',
		currency: 'NZD'
	},
	'en-pl': {
		label: 'Poland',
		language: 'EN',
		country: 'PL',
		currency: 'PLN'
	},
	'en-pt': {
		label: 'Portugal',
		language: 'EN',
		country: 'PT',
		currency: 'EUR'
	},
	'en-se': {
		label: 'Sweden',
		language: 'EN',
		country: 'SE',
		currency: 'SEK'
	},
	'en-sg': {
		label: 'Singapore',
		language: 'EN',
		country: 'SG',
		currency: 'SGD'
	},
	'en-va': {
		label: 'Vatican City',
		language: 'EN',
		country: 'VA',
		currency: 'EUR'
	},
	'en-ad': {
		label: 'Andorra',
		language: 'EN',
		country: 'AD',
		currency: 'EUR'
	},
	'en-cn': {
		label: 'China',
		language: 'EN',
		country: 'CN',
		currency: 'CNY'
	},
	'en-cy': {
		label: 'Cyprus',
		language: 'EN',
		country: 'CY',
		currency: 'EUR'
	},
	'en-ee': {
		label: 'Estonia',
		language: 'EN',
		country: 'EE',
		currency: 'EUR'
	},
	'en-gr': {
		label: 'Greece',
		language: 'EN',
		country: 'GR',
		currency: 'EUR'
	},
	'en-id': {
		label: 'Indonesia',
		language: 'EN',
		country: 'ID',
		currency: 'IDR'
	},
	'en-in': {
		label: 'India',
		language: 'EN',
		country: 'IN',
		currency: 'INR'
	},
	'en-lt': {
		label: 'Lithuania',
		language: 'EN',
		country: 'LT',
		currency: 'EUR'
	},
	'en-lu': {
		label: 'Luxembourg',
		language: 'EN',
		country: 'LU',
		currency: 'EUR'
	},
	'en-lv': {
		label: 'Latvia',
		language: 'EN',
		country: 'LV',
		currency: 'EUR'
	},
	'en-mc': {
		label: 'Monaco',
		language: 'EN',
		country: 'MC',
		currency: 'EUR'
	},
	'en-me': {
		label: 'Montenegro',
		language: 'EN',
		country: 'ME',
		currency: 'EUR'
	},
	'en-mt': {
		label: 'Malta',
		language: 'EN',
		country: 'MT',
		currency: 'EUR'
	},
	'en-si': {
		label: 'Slovenia',
		language: 'EN',
		country: 'SI',
		currency: 'EUR'
	},
	'en-sk': {
		label: 'Slovakia',
		language: 'EN',
		country: 'SK',
		currency: 'EUR'
	},
	'en-sm': {
		label: 'San Marino',
		language: 'EN',
		country: 'SM',
		currency: 'EUR'
	},
	'en-th': {
		label: 'Thailand',
		language: 'EN',
		country: 'TH',
		currency: 'THB'
	},
	'en-vn': {
		label: 'Vietnam',
		language: 'EN',
		country: 'VN',
		currency: 'VND'
	},
	'en-xk': {
		label: 'Kosovo',
		language: 'EN',
		country: 'XK',
		currency: 'EUR'
	}
};

export type CountryCode =
	/** Ascension Island. */
	| 'AC'
	/** Andorra. */
	| 'AD'
	/** United Arab Emirates. */
	| 'AE'
	/** Afghanistan. */
	| 'AF'
	/** Antigua & Barbuda. */
	| 'AG'
	/** Anguilla. */
	| 'AI'
	/** Albania. */
	| 'AL'
	/** Armenia. */
	| 'AM'
	/** Netherlands Antilles. */
	| 'AN'
	/** Angola. */
	| 'AO'
	/** Argentina. */
	| 'AR'
	/** Austria. */
	| 'AT'
	/** Australia. */
	| 'AU'
	/** Aruba. */
	| 'AW'
	/** Åland Islands. */
	| 'AX'
	/** Azerbaijan. */
	| 'AZ'
	/** Bosnia & Herzegovina. */
	| 'BA'
	/** Barbados. */
	| 'BB'
	/** Bangladesh. */
	| 'BD'
	/** Belgium. */
	| 'BE'
	/** Burkina Faso. */
	| 'BF'
	/** Bulgaria. */
	| 'BG'
	/** Bahrain. */
	| 'BH'
	/** Burundi. */
	| 'BI'
	/** Benin. */
	| 'BJ'
	/** St. Barthélemy. */
	| 'BL'
	/** Bermuda. */
	| 'BM'
	/** Brunei. */
	| 'BN'
	/** Bolivia. */
	| 'BO'
	/** Caribbean Netherlands. */
	| 'BQ'
	/** Brazil. */
	| 'BR'
	/** Bahamas. */
	| 'BS'
	/** Bhutan. */
	| 'BT'
	/** Bouvet Island. */
	| 'BV'
	/** Botswana. */
	| 'BW'
	/** Belarus. */
	| 'BY'
	/** Belize. */
	| 'BZ'
	/** Canada. */
	| 'CA'
	/** Cocos (Keeling) Islands. */
	| 'CC'
	/** Congo - Kinshasa. */
	| 'CD'
	/** Central African Republic. */
	| 'CF'
	/** Congo - Brazzaville. */
	| 'CG'
	/** Switzerland. */
	| 'CH'
	/** Côte d'Ivoire. */
	| 'CI'
	/** Cook Islands. */
	| 'CK'
	/** Chile. */
	| 'CL'
	/** Cameroon. */
	| 'CM'
	/** China. */
	| 'CN'
	/** Colombia. */
	| 'CO'
	/** Costa Rica. */
	| 'CR'
	/** Cuba. */
	| 'CU'
	/** Cape Verde. */
	| 'CV'
	/** Curaçao. */
	| 'CW'
	/** Christmas Island. */
	| 'CX'
	/** Cyprus. */
	| 'CY'
	/** Czechia. */
	| 'CZ'
	/** Germany. */
	| 'DE'
	/** Djibouti. */
	| 'DJ'
	/** Denmark. */
	| 'DK'
	/** Dominica. */
	| 'DM'
	/** Dominican Republic. */
	| 'DO'
	/** Algeria. */
	| 'DZ'
	/** Ecuador. */
	| 'EC'
	/** Estonia. */
	| 'EE'
	/** Egypt. */
	| 'EG'
	/** Western Sahara. */
	| 'EH'
	/** Eritrea. */
	| 'ER'
	/** Spain. */
	| 'ES'
	/** Ethiopia. */
	| 'ET'
	/** Finland. */
	| 'FI'
	/** Fiji. */
	| 'FJ'
	/** Falkland Islands. */
	| 'FK'
	/** Faroe Islands. */
	| 'FO'
	/** France. */
	| 'FR'
	/** Gabon. */
	| 'GA'
	/** United Kingdom. */
	| 'GB'
	/** Grenada. */
	| 'GD'
	/** Georgia. */
	| 'GE'
	/** French Guiana. */
	| 'GF'
	/** Guernsey. */
	| 'GG'
	/** Ghana. */
	| 'GH'
	/** Gibraltar. */
	| 'GI'
	/** Greenland. */
	| 'GL'
	/** Gambia. */
	| 'GM'
	/** Guinea. */
	| 'GN'
	/** Guadeloupe. */
	| 'GP'
	/** Equatorial Guinea. */
	| 'GQ'
	/** Greece. */
	| 'GR'
	/** South Georgia & South Sandwich Islands. */
	| 'GS'
	/** Guatemala. */
	| 'GT'
	/** Guinea-Bissau. */
	| 'GW'
	/** Guyana. */
	| 'GY'
	/** Hong Kong SAR. */
	| 'HK'
	/** Heard & McDonald Islands. */
	| 'HM'
	/** Honduras. */
	| 'HN'
	/** Croatia. */
	| 'HR'
	/** Haiti. */
	| 'HT'
	/** Hungary. */
	| 'HU'
	/** Indonesia. */
	| 'ID'
	/** Ireland. */
	| 'IE'
	/** Israel. */
	| 'IL'
	/** Isle of Man. */
	| 'IM'
	/** India. */
	| 'IN'
	/** British Indian Ocean Territory. */
	| 'IO'
	/** Iraq. */
	| 'IQ'
	/** Iran. */
	| 'IR'
	/** Iceland. */
	| 'IS'
	/** Italy. */
	| 'IT'
	/** Jersey. */
	| 'JE'
	/** Jamaica. */
	| 'JM'
	/** Jordan. */
	| 'JO'
	/** Japan. */
	| 'JP'
	/** Kenya. */
	| 'KE'
	/** Kyrgyzstan. */
	| 'KG'
	/** Cambodia. */
	| 'KH'
	/** Kiribati. */
	| 'KI'
	/** Comoros. */
	| 'KM'
	/** St. Kitts & Nevis. */
	| 'KN'
	/** North Korea. */
	| 'KP'
	/** South Korea. */
	| 'KR'
	/** Kuwait. */
	| 'KW'
	/** Cayman Islands. */
	| 'KY'
	/** Kazakhstan. */
	| 'KZ'
	/** Laos. */
	| 'LA'
	/** Lebanon. */
	| 'LB'
	/** St. Lucia. */
	| 'LC'
	/** Liechtenstein. */
	| 'LI'
	/** Sri Lanka. */
	| 'LK'
	/** Liberia. */
	| 'LR'
	/** Lesotho. */
	| 'LS'
	/** Lithuania. */
	| 'LT'
	/** Luxembourg. */
	| 'LU'
	/** Latvia. */
	| 'LV'
	/** Libya. */
	| 'LY'
	/** Morocco. */
	| 'MA'
	/** Monaco. */
	| 'MC'
	/** Moldova. */
	| 'MD'
	/** Montenegro. */
	| 'ME'
	/** St. Martin. */
	| 'MF'
	/** Madagascar. */
	| 'MG'
	/** North Macedonia. */
	| 'MK'
	/** Mali. */
	| 'ML'
	/** Myanmar (Burma). */
	| 'MM'
	/** Mongolia. */
	| 'MN'
	/** Macao SAR. */
	| 'MO'
	/** Martinique. */
	| 'MQ'
	/** Mauritania. */
	| 'MR'
	/** Montserrat. */
	| 'MS'
	/** Malta. */
	| 'MT'
	/** Mauritius. */
	| 'MU'
	/** Maldives. */
	| 'MV'
	/** Malawi. */
	| 'MW'
	/** Mexico. */
	| 'MX'
	/** Malaysia. */
	| 'MY'
	/** Mozambique. */
	| 'MZ'
	/** Namibia. */
	| 'NA'
	/** New Caledonia. */
	| 'NC'
	/** Niger. */
	| 'NE'
	/** Norfolk Island. */
	| 'NF'
	/** Nigeria. */
	| 'NG'
	/** Nicaragua. */
	| 'NI'
	/** Netherlands. */
	| 'NL'
	/** Norway. */
	| 'NO'
	/** Nepal. */
	| 'NP'
	/** Nauru. */
	| 'NR'
	/** Niue. */
	| 'NU'
	/** New Zealand. */
	| 'NZ'
	/** Oman. */
	| 'OM'
	/** Panama. */
	| 'PA'
	/** Peru. */
	| 'PE'
	/** French Polynesia. */
	| 'PF'
	/** Papua New Guinea. */
	| 'PG'
	/** Philippines. */
	| 'PH'
	/** Pakistan. */
	| 'PK'
	/** Poland. */
	| 'PL'
	/** St. Pierre & Miquelon. */
	| 'PM'
	/** Pitcairn Islands. */
	| 'PN'
	/** Palestinian Territories. */
	| 'PS'
	/** Portugal. */
	| 'PT'
	/** Paraguay. */
	| 'PY'
	/** Qatar. */
	| 'QA'
	/** Réunion. */
	| 'RE'
	/** Romania. */
	| 'RO'
	/** Serbia. */
	| 'RS'
	/** Russia. */
	| 'RU'
	/** Rwanda. */
	| 'RW'
	/** Saudi Arabia. */
	| 'SA'
	/** Solomon Islands. */
	| 'SB'
	/** Seychelles. */
	| 'SC'
	/** Sudan. */
	| 'SD'
	/** Sweden. */
	| 'SE'
	/** Singapore. */
	| 'SG'
	/** St. Helena. */
	| 'SH'
	/** Slovenia. */
	| 'SI'
	/** Svalbard & Jan Mayen. */
	| 'SJ'
	/** Slovakia. */
	| 'SK'
	/** Sierra Leone. */
	| 'SL'
	/** San Marino. */
	| 'SM'
	/** Senegal. */
	| 'SN'
	/** Somalia. */
	| 'SO'
	/** Suriname. */
	| 'SR'
	/** South Sudan. */
	| 'SS'
	/** São Tomé & Príncipe. */
	| 'ST'
	/** El Salvador. */
	| 'SV'
	/** Sint Maarten. */
	| 'SX'
	/** Syria. */
	| 'SY'
	/** Eswatini. */
	| 'SZ'
	/** Tristan da Cunha. */
	| 'TA'
	/** Turks & Caicos Islands. */
	| 'TC'
	/** Chad. */
	| 'TD'
	/** French Southern Territories. */
	| 'TF'
	/** Togo. */
	| 'TG'
	/** Thailand. */
	| 'TH'
	/** Tajikistan. */
	| 'TJ'
	/** Tokelau. */
	| 'TK'
	/** Timor-Leste. */
	| 'TL'
	/** Turkmenistan. */
	| 'TM'
	/** Tunisia. */
	| 'TN'
	/** Tonga. */
	| 'TO'
	/** Türkiye. */
	| 'TR'
	/** Trinidad & Tobago. */
	| 'TT'
	/** Tuvalu. */
	| 'TV'
	/** Taiwan. */
	| 'TW'
	/** Tanzania. */
	| 'TZ'
	/** Ukraine. */
	| 'UA'
	/** Uganda. */
	| 'UG'
	/** U.S. Outlying Islands. */
	| 'UM'
	/** United States. */
	| 'US'
	/** Uruguay. */
	| 'UY'
	/** Uzbekistan. */
	| 'UZ'
	/** Vatican City. */
	| 'VA'
	/** St. Vincent & Grenadines. */
	| 'VC'
	/** Venezuela. */
	| 'VE'
	/** British Virgin Islands. */
	| 'VG'
	/** Vietnam. */
	| 'VN'
	/** Vanuatu. */
	| 'VU'
	/** Wallis & Futuna. */
	| 'WF'
	/** Samoa. */
	| 'WS'
	/** Kosovo. */
	| 'XK'
	/** Yemen. */
	| 'YE'
	/** Mayotte. */
	| 'YT'
	/** South Africa. */
	| 'ZA'
	/** Zambia. */
	| 'ZM'
	/** Zimbabwe. */
	| 'ZW'
	/** Unknown Region. */
	| 'ZZ';

/** ISO 639-1 language codes */
export type LanguageCode =
	/** Afrikaans. */
	| 'AF'
	/** Akan. */
	| 'AK'
	/** Amharic. */
	| 'AM'
	/** Arabic. */
	| 'AR'
	/** Assamese. */
	| 'AS'
	/** Azerbaijani. */
	| 'AZ'
	/** Belarusian. */
	| 'BE'
	/** Bulgarian. */
	| 'BG'
	/** Bambara. */
	| 'BM'
	/** Bangla. */
	| 'BN'
	/** Tibetan. */
	| 'BO'
	/** Breton. */
	| 'BR'
	/** Bosnian. */
	| 'BS'
	/** Catalan. */
	| 'CA'
	/** Chechen. */
	| 'CE'
	/** Central Kurdish. */
	| 'CKB'
	/** Czech. */
	| 'CS'
	/** Church Slavic. */
	| 'CU'
	/** Welsh. */
	| 'CY'
	/** Danish. */
	| 'DA'
	/** German. */
	| 'DE'
	/** Dzongkha. */
	| 'DZ'
	/** Ewe. */
	| 'EE'
	/** Greek. */
	| 'EL'
	/** English. */
	| 'EN'
	/** Esperanto. */
	| 'EO'
	/** Spanish. */
	| 'ES'
	/** Estonian. */
	| 'ET'
	/** Basque. */
	| 'EU'
	/** Persian. */
	| 'FA'
	/** Fulah. */
	| 'FF'
	/** Finnish. */
	| 'FI'
	/** Filipino. */
	| 'FIL'
	/** Faroese. */
	| 'FO'
	/** French. */
	| 'FR'
	/** Western Frisian. */
	| 'FY'
	/** Irish. */
	| 'GA'
	/** Scottish Gaelic. */
	| 'GD'
	/** Galician. */
	| 'GL'
	/** Gujarati. */
	| 'GU'
	/** Manx. */
	| 'GV'
	/** Hausa. */
	| 'HA'
	/** Hebrew. */
	| 'HE'
	/** Hindi. */
	| 'HI'
	/** Croatian. */
	| 'HR'
	/** Hungarian. */
	| 'HU'
	/** Armenian. */
	| 'HY'
	/** Interlingua. */
	| 'IA'
	/** Indonesian. */
	| 'ID'
	/** Igbo. */
	| 'IG'
	/** Sichuan Yi. */
	| 'II'
	/** Icelandic. */
	| 'IS'
	/** Italian. */
	| 'IT'
	/** Japanese. */
	| 'JA'
	/** Javanese. */
	| 'JV'
	/** Georgian. */
	| 'KA'
	/** Kikuyu. */
	| 'KI'
	/** Kazakh. */
	| 'KK'
	/** Kalaallisut. */
	| 'KL'
	/** Khmer. */
	| 'KM'
	/** Kannada. */
	| 'KN'
	/** Korean. */
	| 'KO'
	/** Kashmiri. */
	| 'KS'
	/** Kurdish. */
	| 'KU'
	/** Cornish. */
	| 'KW'
	/** Kyrgyz. */
	| 'KY'
	/** Latin. */
	| 'LA'
	/** Luxembourgish. */
	| 'LB'
	/** Ganda. */
	| 'LG'
	/** Lingala. */
	| 'LN'
	/** Lao. */
	| 'LO'
	/** Lithuanian. */
	| 'LT'
	/** Luba-Katanga. */
	| 'LU'
	/** Latvian. */
	| 'LV'
	/** Malagasy. */
	| 'MG'
	/** Māori. */
	| 'MI'
	/** Macedonian. */
	| 'MK'
	/** Malayalam. */
	| 'ML'
	/** Mongolian. */
	| 'MN'
	/** Moldavian. */
	| 'MO'
	/** Marathi. */
	| 'MR'
	/** Malay. */
	| 'MS'
	/** Maltese. */
	| 'MT'
	/** Burmese. */
	| 'MY'
	/** Norwegian (Bokmål). */
	| 'NB'
	/** North Ndebele. */
	| 'ND'
	/** Nepali. */
	| 'NE'
	/** Dutch. */
	| 'NL'
	/** Norwegian Nynorsk. */
	| 'NN'
	/** Norwegian. */
	| 'NO'
	/** Oromo. */
	| 'OM'
	/** Odia. */
	| 'OR'
	/** Ossetic. */
	| 'OS'
	/** Punjabi. */
	| 'PA'
	/** Polish. */
	| 'PL'
	/** Pashto. */
	| 'PS'
	/** Portuguese. */
	| 'PT'
	/** Portuguese (Brazil). */
	| 'PT_BR'
	/** Portuguese (Portugal). */
	| 'PT_PT'
	/** Quechua. */
	| 'QU'
	/** Romansh. */
	| 'RM'
	/** Rundi. */
	| 'RN'
	/** Romanian. */
	| 'RO'
	/** Russian. */
	| 'RU'
	/** Kinyarwanda. */
	| 'RW'
	/** Sanskrit. */
	| 'SA'
	/** Sardinian. */
	| 'SC'
	/** Sindhi. */
	| 'SD'
	/** Northern Sami. */
	| 'SE'
	/** Sango. */
	| 'SG'
	/** Serbo-Croatian. */
	| 'SH'
	/** Sinhala. */
	| 'SI'
	/** Slovak. */
	| 'SK'
	/** Slovenian. */
	| 'SL'
	/** Shona. */
	| 'SN'
	/** Somali. */
	| 'SO'
	/** Albanian. */
	| 'SQ'
	/** Serbian. */
	| 'SR'
	/** Sundanese. */
	| 'SU'
	/** Swedish. */
	| 'SV'
	/** Swahili. */
	| 'SW'
	/** Tamil. */
	| 'TA'
	/** Telugu. */
	| 'TE'
	/** Tajik. */
	| 'TG'
	/** Thai. */
	| 'TH'
	/** Tigrinya. */
	| 'TI'
	/** Turkmen. */
	| 'TK'
	/** Tongan. */
	| 'TO'
	/** Turkish. */
	| 'TR'
	/** Tatar. */
	| 'TT'
	/** Uyghur. */
	| 'UG'
	/** Ukrainian. */
	| 'UK'
	/** Urdu. */
	| 'UR'
	/** Uzbek. */
	| 'UZ'
	/** Vietnamese. */
	| 'VI'
	/** Volapük. */
	| 'VO'
	/** Wolof. */
	| 'WO'
	/** Xhosa. */
	| 'XH'
	/** Yiddish. */
	| 'YI'
	/** Yoruba. */
	| 'YO'
	/** Chinese. */
	| 'ZH'
	/** Chinese (Simplified). */
	| 'ZH_CN'
	/** Chinese (Traditional). */
	| 'ZH_TW'
	/** Zulu. */
	| 'ZU';

/**
 * The three-letter currency codes that represent the world currencies used in
 * stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
export type CurrencyCode =
	/** United Arab Emirates Dirham (AED). */
	| 'AED'
	/** Afghan Afghani (AFN). */
	| 'AFN'
	/** Albanian Lek (ALL). */
	| 'ALL'
	/** Armenian Dram (AMD). */
	| 'AMD'
	/** Netherlands Antillean Guilder. */
	| 'ANG'
	/** Angolan Kwanza (AOA). */
	| 'AOA'
	/** Argentine Pesos (ARS). */
	| 'ARS'
	/** Australian Dollars (AUD). */
	| 'AUD'
	/** Aruban Florin (AWG). */
	| 'AWG'
	/** Azerbaijani Manat (AZN). */
	| 'AZN'
	/** Bosnia and Herzegovina Convertible Mark (BAM). */
	| 'BAM'
	/** Barbadian Dollar (BBD). */
	| 'BBD'
	/** Bangladesh Taka (BDT). */
	| 'BDT'
	/** Bulgarian Lev (BGN). */
	| 'BGN'
	/** Bahraini Dinar (BHD). */
	| 'BHD'
	/** Burundian Franc (BIF). */
	| 'BIF'
	/** Bermudian Dollar (BMD). */
	| 'BMD'
	/** Brunei Dollar (BND). */
	| 'BND'
	/** Bolivian Boliviano (BOB). */
	| 'BOB'
	/** Brazilian Real (BRL). */
	| 'BRL'
	/** Bahamian Dollar (BSD). */
	| 'BSD'
	/** Bhutanese Ngultrum (BTN). */
	| 'BTN'
	/** Botswana Pula (BWP). */
	| 'BWP'
	/** Belarusian Ruble (BYN). */
	| 'BYN'
	/** Belarusian Ruble (BYR). */
	| 'BYR'
	/** Belize Dollar (BZD). */
	| 'BZD'
	/** Canadian Dollars (CAD). */
	| 'CAD'
	/** Congolese franc (CDF). */
	| 'CDF'
	/** Swiss Francs (CHF). */
	| 'CHF'
	/** Chilean Peso (CLP). */
	| 'CLP'
	/** Chinese Yuan Renminbi (CNY). */
	| 'CNY'
	/** Colombian Peso (COP). */
	| 'COP'
	/** Costa Rican Colones (CRC). */
	| 'CRC'
	/** Cape Verdean escudo (CVE). */
	| 'CVE'
	/** Czech Koruny (CZK). */
	| 'CZK'
	/** Djiboutian Franc (DJF). */
	| 'DJF'
	/** Danish Kroner (DKK). */
	| 'DKK'
	/** Dominican Peso (DOP). */
	| 'DOP'
	/** Algerian Dinar (DZD). */
	| 'DZD'
	/** Egyptian Pound (EGP). */
	| 'EGP'
	/** Eritrean Nakfa (ERN). */
	| 'ERN'
	/** Ethiopian Birr (ETB). */
	| 'ETB'
	/** Euro (EUR). */
	| 'EUR'
	/** Fijian Dollars (FJD). */
	| 'FJD'
	/** Falkland Islands Pounds (FKP). */
	| 'FKP'
	/** United Kingdom Pounds (GBP). */
	| 'GBP'
	/** Georgian Lari (GEL). */
	| 'GEL'
	/** Ghanaian Cedi (GHS). */
	| 'GHS'
	/** Gibraltar Pounds (GIP). */
	| 'GIP'
	/** Gambian Dalasi (GMD). */
	| 'GMD'
	/** Guinean Franc (GNF). */
	| 'GNF'
	/** Guatemalan Quetzal (GTQ). */
	| 'GTQ'
	/** Guyanese Dollar (GYD). */
	| 'GYD'
	/** Hong Kong Dollars (HKD). */
	| 'HKD'
	/** Honduran Lempira (HNL). */
	| 'HNL'
	/** Croatian Kuna (HRK). */
	| 'HRK'
	/** Haitian Gourde (HTG). */
	| 'HTG'
	/** Hungarian Forint (HUF). */
	| 'HUF'
	/** Indonesian Rupiah (IDR). */
	| 'IDR'
	/** Israeli New Shekel (NIS). */
	| 'ILS'
	/** Indian Rupees (INR). */
	| 'INR'
	/** Iraqi Dinar (IQD). */
	| 'IQD'
	/** Iranian Rial (IRR). */
	| 'IRR'
	/** Icelandic Kronur (ISK). */
	| 'ISK'
	/** Jersey Pound. */
	| 'JEP'
	/** Jamaican Dollars (JMD). */
	| 'JMD'
	/** Jordanian Dinar (JOD). */
	| 'JOD'
	/** Japanese Yen (JPY). */
	| 'JPY'
	/** Kenyan Shilling (KES). */
	| 'KES'
	/** Kyrgyzstani Som (KGS). */
	| 'KGS'
	/** Cambodian Riel. */
	| 'KHR'
	/** Kiribati Dollar (KID). */
	| 'KID'
	/** Comorian Franc (KMF). */
	| 'KMF'
	/** South Korean Won (KRW). */
	| 'KRW'
	/** Kuwaiti Dinar (KWD). */
	| 'KWD'
	/** Cayman Dollars (KYD). */
	| 'KYD'
	/** Kazakhstani Tenge (KZT). */
	| 'KZT'
	/** Laotian Kip (LAK). */
	| 'LAK'
	/** Lebanese Pounds (LBP). */
	| 'LBP'
	/** Sri Lankan Rupees (LKR). */
	| 'LKR'
	/** Liberian Dollar (LRD). */
	| 'LRD'
	/** Lesotho Loti (LSL). */
	| 'LSL'
	/** Lithuanian Litai (LTL). */
	| 'LTL'
	/** Latvian Lati (LVL). */
	| 'LVL'
	/** Libyan Dinar (LYD). */
	| 'LYD'
	/** Moroccan Dirham. */
	| 'MAD'
	/** Moldovan Leu (MDL). */
	| 'MDL'
	/** Malagasy Ariary (MGA). */
	| 'MGA'
	/** Macedonia Denar (MKD). */
	| 'MKD'
	/** Burmese Kyat (MMK). */
	| 'MMK'
	/** Mongolian Tugrik. */
	| 'MNT'
	/** Macanese Pataca (MOP). */
	| 'MOP'
	/** Mauritanian Ouguiya (MRU). */
	| 'MRU'
	/** Mauritian Rupee (MUR). */
	| 'MUR'
	/** Maldivian Rufiyaa (MVR). */
	| 'MVR'
	/** Malawian Kwacha (MWK). */
	| 'MWK'
	/** Mexican Pesos (MXN). */
	| 'MXN'
	/** Malaysian Ringgits (MYR). */
	| 'MYR'
	/** Mozambican Metical. */
	| 'MZN'
	/** Namibian Dollar. */
	| 'NAD'
	/** Nigerian Naira (NGN). */
	| 'NGN'
	/** Nicaraguan Córdoba (NIO). */
	| 'NIO'
	/** Norwegian Kroner (NOK). */
	| 'NOK'
	/** Nepalese Rupee (NPR). */
	| 'NPR'
	/** New Zealand Dollars (NZD). */
	| 'NZD'
	/** Omani Rial (OMR). */
	| 'OMR'
	/** Panamian Balboa (PAB). */
	| 'PAB'
	/** Peruvian Nuevo Sol (PEN). */
	| 'PEN'
	/** Papua New Guinean Kina (PGK). */
	| 'PGK'
	/** Philippine Peso (PHP). */
	| 'PHP'
	/** Pakistani Rupee (PKR). */
	| 'PKR'
	/** Polish Zlotych (PLN). */
	| 'PLN'
	/** Paraguayan Guarani (PYG). */
	| 'PYG'
	/** Qatari Rial (QAR). */
	| 'QAR'
	/** Romanian Lei (RON). */
	| 'RON'
	/** Serbian dinar (RSD). */
	| 'RSD'
	/** Russian Rubles (RUB). */
	| 'RUB'
	/** Rwandan Franc (RWF). */
	| 'RWF'
	/** Saudi Riyal (SAR). */
	| 'SAR'
	/** Solomon Islands Dollar (SBD). */
	| 'SBD'
	/** Seychellois Rupee (SCR). */
	| 'SCR'
	/** Sudanese Pound (SDG). */
	| 'SDG'
	/** Swedish Kronor (SEK). */
	| 'SEK'
	/** Singapore Dollars (SGD). */
	| 'SGD'
	/** Saint Helena Pounds (SHP). */
	| 'SHP'
	/** Sierra Leonean Leone (SLL). */
	| 'SLL'
	/** Somali Shilling (SOS). */
	| 'SOS'
	/** Surinamese Dollar (SRD). */
	| 'SRD'
	/** South Sudanese Pound (SSP). */
	| 'SSP'
	/** Sao Tome And Principe Dobra (STD). */
	| 'STD'
	/** Sao Tome And Principe Dobra (STN). */
	| 'STN'
	/** Syrian Pound (SYP). */
	| 'SYP'
	/** Swazi Lilangeni (SZL). */
	| 'SZL'
	/** Thai baht (THB). */
	| 'THB'
	/** Tajikistani Somoni (TJS). */
	| 'TJS'
	/** Turkmenistani Manat (TMT). */
	| 'TMT'
	/** Tunisian Dinar (TND). */
	| 'TND'
	/** Tongan Pa'anga (TOP). */
	| 'TOP'
	/** Turkish Lira (TRY). */
	| 'TRY'
	/** Trinidad and Tobago Dollars (TTD). */
	| 'TTD'
	/** Taiwan Dollars (TWD). */
	| 'TWD'
	/** Tanzanian Shilling (TZS). */
	| 'TZS'
	/** Ukrainian Hryvnia (UAH). */
	| 'UAH'
	/** Ugandan Shilling (UGX). */
	| 'UGX'
	/** United States Dollars (USD). */
	| 'USD'
	/** Uruguayan Pesos (UYU). */
	| 'UYU'
	/** Uzbekistan som (UZS). */
	| 'UZS'
	/** Venezuelan Bolivares (VED). */
	| 'VED'
	/** Venezuelan Bolivares (VEF). */
	| 'VEF'
	/** Venezuelan Bolivares Soberanos (VES). */
	| 'VES'
	/** Vietnamese đồng (VND). */
	| 'VND'
	/** Vanuatu Vatu (VUV). */
	| 'VUV'
	/** Samoan Tala (WST). */
	| 'WST'
	/** Central African CFA Franc (XAF). */
	| 'XAF'
	/** East Caribbean Dollar (XCD). */
	| 'XCD'
	/** West African CFA franc (XOF). */
	| 'XOF'
	/** CFP Franc (XPF). */
	| 'XPF'
	/** Unrecognized currency. */
	| 'XXX'
	/** Yemeni Rial (YER). */
	| 'YER'
	/** South African Rand (ZAR). */
	| 'ZAR'
	/** Zambian Kwacha (ZMW). */
	| 'ZMW';
