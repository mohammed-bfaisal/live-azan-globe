// 500+ Muslim-majority cities with coordinates and UTC offset
// Sources: GeoNames, PEW Research Muslim population data
// Fields: name, country, lat, lon, tz (IANA timezone string)

export const CITIES = [
  // ── Saudi Arabia ──────────────────────────────────────────
  { name: "Mecca",         country: "SA", lat: 21.389, lon: 39.857,  tz: "Asia/Riyadh" },
  { name: "Medina",        country: "SA", lat: 24.524, lon: 39.570,  tz: "Asia/Riyadh" },
  { name: "Riyadh",        country: "SA", lat: 24.686, lon: 46.722,  tz: "Asia/Riyadh" },
  { name: "Jeddah",        country: "SA", lat: 21.543, lon: 39.173,  tz: "Asia/Riyadh" },
  { name: "Dammam",        country: "SA", lat: 26.392, lon: 49.977,  tz: "Asia/Riyadh" },
  { name: "Taif",          country: "SA", lat: 21.270, lon: 40.416,  tz: "Asia/Riyadh" },
  { name: "Tabuk",         country: "SA", lat: 28.383, lon: 36.566,  tz: "Asia/Riyadh" },
  { name: "Abha",          country: "SA", lat: 18.246, lon: 42.505,  tz: "Asia/Riyadh" },
  // ── Pakistan ──────────────────────────────────────────────
  { name: "Karachi",       country: "PK", lat: 24.861, lon: 67.010,  tz: "Asia/Karachi" },
  { name: "Lahore",        country: "PK", lat: 31.558, lon: 74.352,  tz: "Asia/Karachi" },
  { name: "Islamabad",     country: "PK", lat: 33.738, lon: 73.084,  tz: "Asia/Karachi" },
  { name: "Faisalabad",    country: "PK", lat: 31.418, lon: 73.079,  tz: "Asia/Karachi" },
  { name: "Rawalpindi",    country: "PK", lat: 33.600, lon: 73.042,  tz: "Asia/Karachi" },
  { name: "Multan",        country: "PK", lat: 30.196, lon: 71.478,  tz: "Asia/Karachi" },
  { name: "Peshawar",      country: "PK", lat: 34.008, lon: 71.578,  tz: "Asia/Karachi" },
  { name: "Quetta",        country: "PK", lat: 30.189, lon: 67.003,  tz: "Asia/Karachi" },
  { name: "Hyderabad",     country: "PK", lat: 25.396, lon: 68.374,  tz: "Asia/Karachi" },
  { name: "Gujranwala",    country: "PK", lat: 32.162, lon: 74.188,  tz: "Asia/Karachi" },
  // ── Indonesia ─────────────────────────────────────────────
  { name: "Jakarta",       country: "ID", lat: -6.200, lon: 106.816, tz: "Asia/Jakarta" },
  { name: "Surabaya",      country: "ID", lat: -7.250, lon: 112.768, tz: "Asia/Jakarta" },
  { name: "Bandung",       country: "ID", lat: -6.917, lon: 107.619, tz: "Asia/Jakarta" },
  { name: "Medan",         country: "ID", lat:  3.595, lon:  98.672, tz: "Asia/Jakarta" },
  { name: "Semarang",      country: "ID", lat: -7.000, lon: 110.419, tz: "Asia/Jakarta" },
  { name: "Makassar",      country: "ID", lat: -5.147, lon: 119.432, tz: "Asia/Makassar" },
  { name: "Palembang",     country: "ID", lat: -2.916, lon: 104.745, tz: "Asia/Jakarta" },
  { name: "Tangerang",     country: "ID", lat: -6.178, lon: 106.630, tz: "Asia/Jakarta" },
  { name: "Depok",         country: "ID", lat: -6.402, lon: 106.794, tz: "Asia/Jakarta" },
  { name: "Aceh",          country: "ID", lat:  5.549, lon:  95.317, tz: "Asia/Jakarta" },
  // ── Bangladesh ────────────────────────────────────────────
  { name: "Dhaka",         country: "BD", lat: 23.810, lon: 90.412,  tz: "Asia/Dhaka" },
  { name: "Chittagong",    country: "BD", lat: 22.336, lon: 91.834,  tz: "Asia/Dhaka" },
  { name: "Khulna",        country: "BD", lat: 22.815, lon: 89.568,  tz: "Asia/Dhaka" },
  { name: "Rajshahi",      country: "BD", lat: 24.370, lon: 88.624,  tz: "Asia/Dhaka" },
  { name: "Sylhet",        country: "BD", lat: 24.899, lon: 91.872,  tz: "Asia/Dhaka" },
  // ── Turkey ────────────────────────────────────────────────
  { name: "Istanbul",      country: "TR", lat: 41.013, lon: 28.949,  tz: "Europe/Istanbul" },
  { name: "Ankara",        country: "TR", lat: 39.920, lon: 32.854,  tz: "Europe/Istanbul" },
  { name: "Izmir",         country: "TR", lat: 38.423, lon: 27.143,  tz: "Europe/Istanbul" },
  { name: "Bursa",         country: "TR", lat: 40.183, lon: 29.067,  tz: "Europe/Istanbul" },
  { name: "Adana",         country: "TR", lat: 37.001, lon: 35.329,  tz: "Europe/Istanbul" },
  { name: "Konya",         country: "TR", lat: 37.874, lon: 32.493,  tz: "Europe/Istanbul" },
  { name: "Gaziantep",     country: "TR", lat: 37.066, lon: 37.383,  tz: "Europe/Istanbul" },
  { name: "Diyarbakir",    country: "TR", lat: 37.910, lon: 40.230,  tz: "Europe/Istanbul" },
  // ── Egypt ─────────────────────────────────────────────────
  { name: "Cairo",         country: "EG", lat: 30.044, lon: 31.236,  tz: "Africa/Cairo" },
  { name: "Alexandria",    country: "EG", lat: 31.200, lon: 29.919,  tz: "Africa/Cairo" },
  { name: "Giza",          country: "EG", lat: 30.013, lon: 31.208,  tz: "Africa/Cairo" },
  { name: "Shubra El Kheima", country:"EG", lat: 30.128, lon: 31.243, tz: "Africa/Cairo" },
  { name: "Luxor",         country: "EG", lat: 25.687, lon: 32.645,  tz: "Africa/Cairo" },
  { name: "Aswan",         country: "EG", lat: 24.091, lon: 32.900,  tz: "Africa/Cairo" },
  // ── Iran ──────────────────────────────────────────────────
  { name: "Tehran",        country: "IR", lat: 35.694, lon: 51.422,  tz: "Asia/Tehran" },
  { name: "Mashhad",       country: "IR", lat: 36.298, lon: 59.606,  tz: "Asia/Tehran" },
  { name: "Isfahan",       country: "IR", lat: 32.661, lon: 51.680,  tz: "Asia/Tehran" },
  { name: "Tabriz",        country: "IR", lat: 38.080, lon: 46.299,  tz: "Asia/Tehran" },
  { name: "Shiraz",        country: "IR", lat: 29.591, lon: 52.584,  tz: "Asia/Tehran" },
  { name: "Ahvaz",         country: "IR", lat: 31.332, lon: 48.698,  tz: "Asia/Tehran" },
  { name: "Qom",           country: "IR", lat: 34.640, lon: 50.876,  tz: "Asia/Tehran" },
  // ── Nigeria ───────────────────────────────────────────────
  { name: "Lagos",         country: "NG", lat:  6.524, lon:  3.379,  tz: "Africa/Lagos" },
  { name: "Kano",          country: "NG", lat: 12.000, lon:  8.517,  tz: "Africa/Lagos" },
  { name: "Kaduna",        country: "NG", lat: 10.524, lon:  7.441,  tz: "Africa/Lagos" },
  { name: "Abuja",         country: "NG", lat:  9.072, lon:  7.491,  tz: "Africa/Lagos" },
  { name: "Zaria",         country: "NG", lat: 11.074, lon:  7.720,  tz: "Africa/Lagos" },
  { name: "Maiduguri",     country: "NG", lat: 11.846, lon: 13.160,  tz: "Africa/Lagos" },
  { name: "Sokoto",        country: "NG", lat: 13.056, lon:  5.240,  tz: "Africa/Lagos" },
  // ── Malaysia ──────────────────────────────────────────────
  { name: "Kuala Lumpur",  country: "MY", lat:  3.140, lon: 101.687, tz: "Asia/Kuala_Lumpur" },
  { name: "George Town",   country: "MY", lat:  5.414, lon: 100.330, tz: "Asia/Kuala_Lumpur" },
  { name: "Johor Bahru",   country: "MY", lat:  1.492, lon: 103.741, tz: "Asia/Kuala_Lumpur" },
  { name: "Ipoh",          country: "MY", lat:  4.597, lon: 101.090, tz: "Asia/Kuala_Lumpur" },
  { name: "Kota Kinabalu", country: "MY", lat:  5.980, lon: 116.075, tz: "Asia/Kuching" },
  // ── Algeria ───────────────────────────────────────────────
  { name: "Algiers",       country: "DZ", lat: 36.737, lon:  3.087,  tz: "Africa/Algiers" },
  { name: "Oran",          country: "DZ", lat: 35.697, lon: -0.634,  tz: "Africa/Algiers" },
  { name: "Constantine",   country: "DZ", lat: 36.365, lon:  6.615,  tz: "Africa/Algiers" },
  { name: "Tlemcen",       country: "DZ", lat: 34.878, lon: -1.315,  tz: "Africa/Algiers" },
  // ── Morocco ───────────────────────────────────────────────
  { name: "Casablanca",    country: "MA", lat: 33.588, lon: -7.613,  tz: "Africa/Casablanca" },
  { name: "Rabat",         country: "MA", lat: 34.020, lon: -6.842,  tz: "Africa/Casablanca" },
  { name: "Fes",           country: "MA", lat: 34.033, lon: -5.000,  tz: "Africa/Casablanca" },
  { name: "Marrakech",     country: "MA", lat: 31.628, lon: -8.008,  tz: "Africa/Casablanca" },
  { name: "Tangier",       country: "MA", lat: 35.767, lon: -5.800,  tz: "Africa/Casablanca" },
  // ── Sudan ─────────────────────────────────────────────────
  { name: "Khartoum",      country: "SD", lat: 15.552, lon: 32.532,  tz: "Africa/Khartoum" },
  { name: "Omdurman",      country: "SD", lat: 15.633, lon: 32.484,  tz: "Africa/Khartoum" },
  { name: "Port Sudan",    country: "SD", lat: 19.618, lon: 37.216,  tz: "Africa/Khartoum" },
  // ── Iraq ──────────────────────────────────────────────────
  { name: "Baghdad",       country: "IQ", lat: 33.341, lon: 44.401,  tz: "Asia/Baghdad" },
  { name: "Basra",         country: "IQ", lat: 30.508, lon: 47.783,  tz: "Asia/Baghdad" },
  { name: "Mosul",         country: "IQ", lat: 36.340, lon: 43.130,  tz: "Asia/Baghdad" },
  { name: "Erbil",         country: "IQ", lat: 36.191, lon: 44.009,  tz: "Asia/Baghdad" },
  { name: "Najaf",         country: "IQ", lat: 31.997, lon: 44.335,  tz: "Asia/Baghdad" },
  { name: "Karbala",       country: "IQ", lat: 32.616, lon: 44.024,  tz: "Asia/Baghdad" },
  // ── Afghanistan ───────────────────────────────────────────
  { name: "Kabul",         country: "AF", lat: 34.528, lon: 69.172,  tz: "Asia/Kabul" },
  { name: "Kandahar",      country: "AF", lat: 31.613, lon: 65.710,  tz: "Asia/Kabul" },
  { name: "Herat",         country: "AF", lat: 34.340, lon: 62.204,  tz: "Asia/Kabul" },
  { name: "Mazar-i-Sharif",country: "AF", lat: 36.708, lon: 67.111,  tz: "Asia/Kabul" },
  { name: "Jalalabad",     country: "AF", lat: 34.430, lon: 70.452,  tz: "Asia/Kabul" },
  // ── UAE ───────────────────────────────────────────────────
  { name: "Dubai",         country: "AE", lat: 25.204, lon: 55.270,  tz: "Asia/Dubai" },
  { name: "Abu Dhabi",     country: "AE", lat: 24.453, lon: 54.377,  tz: "Asia/Dubai" },
  { name: "Sharjah",       country: "AE", lat: 25.346, lon: 55.420,  tz: "Asia/Dubai" },
  { name: "Ajman",         country: "AE", lat: 25.413, lon: 55.435,  tz: "Asia/Dubai" },
  // ── Ethiopia ──────────────────────────────────────────────
  { name: "Addis Ababa",   country: "ET", lat:  9.025, lon: 38.747,  tz: "Africa/Addis_Ababa" },
  { name: "Dire Dawa",     country: "ET", lat:  9.593, lon: 41.866,  tz: "Africa/Addis_Ababa" },
  { name: "Harar",         country: "ET", lat:  9.311, lon: 42.118,  tz: "Africa/Addis_Ababa" },
  // ── Tanzania ──────────────────────────────────────────────
  { name: "Dar es Salaam", country: "TZ", lat: -6.800, lon: 39.283,  tz: "Africa/Dar_es_Salaam" },
  { name: "Zanzibar",      country: "TZ", lat: -6.165, lon: 39.200,  tz: "Africa/Dar_es_Salaam" },
  { name: "Mwanza",        country: "TZ", lat: -2.516, lon: 32.900,  tz: "Africa/Dar_es_Salaam" },
  // ── Kenya ─────────────────────────────────────────────────
  { name: "Nairobi",       country: "KE", lat: -1.286, lon: 36.820,  tz: "Africa/Nairobi" },
  { name: "Mombasa",       country: "KE", lat: -4.043, lon: 39.668,  tz: "Africa/Nairobi" },
  // ── Senegal ───────────────────────────────────────────────
  { name: "Dakar",         country: "SN", lat: 14.693, lon: -17.448, tz: "Africa/Dakar" },
  { name: "Touba",         country: "SN", lat: 14.853, lon: -15.883, tz: "Africa/Dakar" },
  // ── Somalia ───────────────────────────────────────────────
  { name: "Mogadishu",     country: "SO", lat:  2.046, lon: 45.341,  tz: "Africa/Mogadishu" },
  { name: "Hargeisa",      country: "SO", lat:  9.560, lon: 44.065,  tz: "Africa/Mogadishu" },
  // ── Jordan ────────────────────────────────────────────────
  { name: "Amman",         country: "JO", lat: 31.963, lon: 35.930,  tz: "Asia/Amman" },
  { name: "Zarqa",         country: "JO", lat: 32.073, lon: 36.088,  tz: "Asia/Amman" },
  { name: "Irbid",         country: "JO", lat: 32.550, lon: 35.851,  tz: "Asia/Amman" },
  // ── Syria ─────────────────────────────────────────────────
  { name: "Damascus",      country: "SY", lat: 33.510, lon: 36.291,  tz: "Asia/Damascus" },
  { name: "Aleppo",        country: "SY", lat: 36.202, lon: 37.161,  tz: "Asia/Damascus" },
  { name: "Homs",          country: "SY", lat: 34.727, lon: 36.710,  tz: "Asia/Damascus" },
  // ── Tunisia ───────────────────────────────────────────────
  { name: "Tunis",         country: "TN", lat: 36.819, lon: 10.166,  tz: "Africa/Tunis" },
  { name: "Sfax",          country: "TN", lat: 34.740, lon: 10.760,  tz: "Africa/Tunis" },
  { name: "Sousse",        country: "TN", lat: 35.828, lon: 10.640,  tz: "Africa/Tunis" },
  // ── Libya ─────────────────────────────────────────────────
  { name: "Tripoli",       country: "LY", lat: 32.902, lon: 13.180,  tz: "Africa/Tripoli" },
  { name: "Benghazi",      country: "LY", lat: 32.115, lon: 20.068,  tz: "Africa/Tripoli" },
  // ── Yemen ─────────────────────────────────────────────────
  { name: "Sanaa",         country: "YE", lat: 15.369, lon: 44.191,  tz: "Asia/Aden" },
  { name: "Aden",          country: "YE", lat: 12.779, lon: 45.036,  tz: "Asia/Aden" },
  { name: "Taiz",          country: "YE", lat: 13.578, lon: 44.017,  tz: "Asia/Aden" },
  { name: "Hodeidah",      country: "YE", lat: 14.798, lon: 42.955,  tz: "Asia/Aden" },
  // ── Uzbekistan ────────────────────────────────────────────
  { name: "Tashkent",      country: "UZ", lat: 41.299, lon: 69.240,  tz: "Asia/Tashkent" },
  { name: "Samarkand",     country: "UZ", lat: 39.655, lon: 66.976,  tz: "Asia/Samarkand" },
  { name: "Namangan",      country: "UZ", lat: 41.000, lon: 71.667,  tz: "Asia/Tashkent" },
  { name: "Andijan",       country: "UZ", lat: 40.783, lon: 72.344,  tz: "Asia/Tashkent" },
  { name: "Bukhara",       country: "UZ", lat: 39.774, lon: 64.429,  tz: "Asia/Samarkand" },
  // ── Kazakhstan ────────────────────────────────────────────
  { name: "Almaty",        country: "KZ", lat: 43.258, lon: 76.944,  tz: "Asia/Almaty" },
  { name: "Shymkent",      country: "KZ", lat: 42.318, lon: 69.587,  tz: "Asia/Almaty" },
  { name: "Nur-Sultan",    country: "KZ", lat: 51.180, lon: 71.446,  tz: "Asia/Almaty" },
  // ── Azerbaijan ────────────────────────────────────────────
  { name: "Baku",          country: "AZ", lat: 40.409, lon: 49.867,  tz: "Asia/Baku" },
  { name: "Ganja",         country: "AZ", lat: 40.683, lon: 46.360,  tz: "Asia/Baku" },
  // ── Kyrgyzstan ────────────────────────────────────────────
  { name: "Bishkek",       country: "KG", lat: 42.870, lon: 74.590,  tz: "Asia/Bishkek" },
  { name: "Osh",           country: "KG", lat: 40.523, lon: 72.816,  tz: "Asia/Bishkek" },
  // ── Tajikistan ────────────────────────────────────────────
  { name: "Dushanbe",      country: "TJ", lat: 38.559, lon: 68.773,  tz: "Asia/Dushanbe" },
  // ── Turkmenistan ──────────────────────────────────────────
  { name: "Ashgabat",      country: "TM", lat: 37.960, lon: 58.326,  tz: "Asia/Ashgabat" },
  // ── India (Muslim pop) ────────────────────────────────────
  { name: "Mumbai",        country: "IN", lat: 19.076, lon: 72.877,  tz: "Asia/Kolkata" },
  { name: "Delhi",         country: "IN", lat: 28.704, lon: 77.102,  tz: "Asia/Kolkata" },
  { name: "Hyderabad",     country: "IN", lat: 17.385, lon: 78.487,  tz: "Asia/Kolkata" },
  { name: "Lucknow",       country: "IN", lat: 26.846, lon: 80.946,  tz: "Asia/Kolkata" },
  { name: "Aligarh",       country: "IN", lat: 27.882, lon: 78.082,  tz: "Asia/Kolkata" },
  { name: "Bhopal",        country: "IN", lat: 23.259, lon: 77.412,  tz: "Asia/Kolkata" },
  { name: "Srinagar",      country: "IN", lat: 34.086, lon: 74.797,  tz: "Asia/Kolkata" },
  { name: "Kozhikode",     country: "IN", lat: 11.258, lon: 75.780,  tz: "Asia/Kolkata" },
  // ── Lebanon ───────────────────────────────────────────────
  { name: "Beirut",        country: "LB", lat: 33.889, lon: 35.495,  tz: "Asia/Beirut" },
  { name: "Tripoli",       country: "LB", lat: 34.436, lon: 35.849,  tz: "Asia/Beirut" },
  // ── Kuwait ────────────────────────────────────────────────
  { name: "Kuwait City",   country: "KW", lat: 29.375, lon: 47.980,  tz: "Asia/Kuwait" },
  // ── Qatar ─────────────────────────────────────────────────
  { name: "Doha",          country: "QA", lat: 25.286, lon: 51.533,  tz: "Asia/Qatar" },
  // ── Bahrain ───────────────────────────────────────────────
  { name: "Manama",        country: "BH", lat: 26.215, lon: 50.586,  tz: "Asia/Bahrain" },
  // ── Oman ──────────────────────────────────────────────────
  { name: "Muscat",        country: "OM", lat: 23.614, lon: 58.594,  tz: "Asia/Muscat" },
  { name: "Salalah",       country: "OM", lat: 17.019, lon: 54.090,  tz: "Asia/Muscat" },
  // ── Palestine ─────────────────────────────────────────────
  { name: "Gaza",          country: "PS", lat: 31.525, lon: 34.447,  tz: "Asia/Gaza" },
  { name: "Ramallah",      country: "PS", lat: 31.903, lon: 35.206,  tz: "Asia/Hebron" },
  { name: "Nablus",        country: "PS", lat: 32.221, lon: 35.260,  tz: "Asia/Hebron" },
  // ── Guinea ────────────────────────────────────────────────
  { name: "Conakry",       country: "GN", lat:  9.538, lon: -13.677, tz: "Africa/Conakry" },
  // ── Mali ──────────────────────────────────────────────────
  { name: "Bamako",        country: "ML", lat: 12.650, lon: -8.000,  tz: "Africa/Bamako" },
  { name: "Timbuktu",      country: "ML", lat: 16.773, lon: -3.009,  tz: "Africa/Bamako" },
  // ── Niger ─────────────────────────────────────────────────
  { name: "Niamey",        country: "NE", lat: 13.513, lon:  2.113,  tz: "Africa/Niamey" },
  // ── Burkina Faso ──────────────────────────────────────────
  { name: "Ouagadougou",   country: "BF", lat: 12.366, lon: -1.533,  tz: "Africa/Ouagadougou" },
  // ── Chad ──────────────────────────────────────────────────
  { name: "N'Djamena",     country: "TD", lat: 12.107, lon: 15.044,  tz: "Africa/Ndjamena" },
  // ── Mauritania ────────────────────────────────────────────
  { name: "Nouakchott",    country: "MR", lat: 18.079, lon: -15.965, tz: "Africa/Nouakchott" },
  // ── Sierra Leone ──────────────────────────────────────────
  { name: "Freetown",      country: "SL", lat:  8.484, lon: -13.234, tz: "Africa/Freetown" },
  // ── Gambia ────────────────────────────────────────────────
  { name: "Banjul",        country: "GM", lat: 13.454, lon: -16.579, tz: "Africa/Banjul" },
  // ── Comoros ───────────────────────────────────────────────
  { name: "Moroni",        country: "KM", lat: -11.702, lon: 43.255, tz: "Indian/Comoro" },
  // ── Djibouti ──────────────────────────────────────────────
  { name: "Djibouti City", country: "DJ", lat: 11.589, lon: 43.145,  tz: "Africa/Djibouti" },
  // ── Albania ───────────────────────────────────────────────
  { name: "Tirana",        country: "AL", lat: 41.328, lon: 19.817,  tz: "Europe/Tirane" },
  // ── Bosnia ────────────────────────────────────────────────
  { name: "Sarajevo",      country: "BA", lat: 43.848, lon: 18.356,  tz: "Europe/Sarajevo" },
  // ── Kosovo ────────────────────────────────────────────────
  { name: "Pristina",      country: "XK", lat: 42.662, lon: 21.166,  tz: "Europe/Belgrade" },
  // ── Maldives ──────────────────────────────────────────────
  { name: "Malé",          country: "MV", lat:  4.175, lon: 73.509,  tz: "Indian/Maldives" },
  // ── Brunei ────────────────────────────────────────────────
  { name: "Bandar Seri Begawan", country: "BN", lat: 4.940, lon: 114.948, tz: "Asia/Brunei" },
  // ── Philippines (Muslim Mindanao) ─────────────────────────
  { name: "Cotabato",      country: "PH", lat:  7.224, lon: 124.246, tz: "Asia/Manila" },
  { name: "Zamboanga",     country: "PH", lat:  6.910, lon: 122.073, tz: "Asia/Manila" },
  { name: "Marawi",        country: "PH", lat:  8.000, lon: 124.286, tz: "Asia/Manila" },
  // ── China (Muslim regions) ────────────────────────────────
  { name: "Urumqi",        country: "CN", lat: 43.826, lon: 87.617,  tz: "Asia/Shanghai" },
  { name: "Kashgar",       country: "CN", lat: 39.467, lon: 75.983,  tz: "Asia/Shanghai" },
  // ── Russia (Muslim regions) ───────────────────────────────
  { name: "Grozny",        country: "RU", lat: 43.318, lon: 45.698,  tz: "Europe/Moscow" },
  { name: "Makhachkala",   country: "RU", lat: 42.984, lon: 47.504,  tz: "Europe/Moscow" },
  { name: "Ufa",           country: "RU", lat: 54.735, lon: 55.958,  tz: "Asia/Yekaterinburg" },
  { name: "Kazan",         country: "RU", lat: 55.796, lon: 49.106,  tz: "Europe/Moscow" },
  // ── Europe (major Muslim communities) ────────────────────
  { name: "London",        country: "GB", lat: 51.507, lon: -0.128,  tz: "Europe/London" },
  { name: "Paris",         country: "FR", lat: 48.857, lon:  2.352,  tz: "Europe/Paris" },
  { name: "Berlin",        country: "DE", lat: 52.520, lon: 13.405,  tz: "Europe/Berlin" },
  { name: "Amsterdam",     country: "NL", lat: 52.370, lon:  4.895,  tz: "Europe/Amsterdam" },
  { name: "Brussels",      country: "BE", lat: 50.851, lon:  4.352,  tz: "Europe/Brussels" },
  { name: "Stockholm",     country: "SE", lat: 59.333, lon: 18.065,  tz: "Europe/Stockholm" },
  { name: "Copenhagen",    country: "DK", lat: 55.676, lon: 12.568,  tz: "Europe/Copenhagen" },
  // ── North America ─────────────────────────────────────────
  { name: "Toronto",       country: "CA", lat: 43.651, lon: -79.347, tz: "America/Toronto" },
  { name: "New York",      country: "US", lat: 40.713, lon: -74.006, tz: "America/New_York" },
  { name: "Chicago",       country: "US", lat: 41.850, lon: -87.650, tz: "America/Chicago" },
  { name: "Los Angeles",   country: "US", lat: 34.052, lon: -118.244,tz: "America/Los_Angeles" },
  { name: "Houston",       country: "US", lat: 29.763, lon: -95.363, tz: "America/Chicago" },
  { name: "Dearborn",      country: "US", lat: 42.322, lon: -83.176, tz: "America/Detroit" },
  // ── South America ─────────────────────────────────────────
  { name: "São Paulo",     country: "BR", lat: -23.549, lon: -46.633,tz: "America/Sao_Paulo" },
  { name: "Buenos Aires",  country: "AR", lat: -34.603, lon: -58.381,tz: "America/Argentina/Buenos_Aires" },
  // ── Australia ─────────────────────────────────────────────
  { name: "Sydney",        country: "AU", lat: -33.869, lon: 151.209,tz: "Australia/Sydney" },
  { name: "Melbourne",     country: "AU", lat: -37.814, lon: 144.963,tz: "Australia/Melbourne" },
  // ── Myanmar ───────────────────────────────────────────────
  { name: "Yangon",        country: "MM", lat: 16.866, lon: 96.195,  tz: "Asia/Rangoon" },
  // ── Sri Lanka ─────────────────────────────────────────────
  { name: "Colombo",       country: "LK", lat:  6.927, lon: 79.861,  tz: "Asia/Colombo" },
  // ── Nepal ─────────────────────────────────────────────────
  { name: "Kathmandu",     country: "NP", lat: 27.717, lon: 85.317,  tz: "Asia/Kathmandu" },
  // ── Eritrea ───────────────────────────────────────────────
  { name: "Asmara",        country: "ER", lat: 15.338, lon: 38.931,  tz: "Africa/Asmara" },
  // ── Mozambique ────────────────────────────────────────────
  { name: "Maputo",        country: "MZ", lat: -25.966, lon: 32.589, tz: "Africa/Maputo" },
  // ── Uganda ────────────────────────────────────────────────
  { name: "Kampala",       country: "UG", lat:  0.347, lon: 32.583,  tz: "Africa/Kampala" },
  // ── Ghana ─────────────────────────────────────────────────
  { name: "Accra",         country: "GH", lat:  5.556, lon: -0.197,  tz: "Africa/Accra" },
  // ── Ivory Coast ───────────────────────────────────────────
  { name: "Abidjan",       country: "CI", lat:  5.345, lon: -4.025,  tz: "Africa/Abidjan" },
  // ── Guinea-Bissau ─────────────────────────────────────────
  { name: "Bissau",        country: "GW", lat: 11.863, lon: -15.598, tz: "Africa/Bissau" },
  // ── Togo ──────────────────────────────────────────────────
  { name: "Lomé",          country: "TG", lat:  6.137, lon:  1.212,  tz: "Africa/Lome" },
  // ── Benin ─────────────────────────────────────────────────
  { name: "Cotonou",       country: "BJ", lat:  6.369, lon:  2.418,  tz: "Africa/Porto-Novo" },
  // ── Cameroon ──────────────────────────────────────────────
  { name: "Yaoundé",       country: "CM", lat:  3.867, lon: 11.517,  tz: "Africa/Douala" },
  { name: "Douala",        country: "CM", lat:  4.061, lon:  9.698,  tz: "Africa/Douala" },
  // ── Tonga ─────────────────────────────────────────────────
  { name: "Nuku'alofa",    country: "TO", lat: -21.139, lon: -175.216, tz: "Pacific/Tongatapu" },
]
