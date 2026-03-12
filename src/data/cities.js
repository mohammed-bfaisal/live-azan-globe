// 1000+ Muslim-majority cities with coordinates and UTC offset
// Sources: GeoNames, PEW Research Muslim population data
// Fields: name, country, lat, lon, tz (IANA timezone string)

export const CITIES = [
  // ── Saudi Arabia ──────────────────────────────────────────
  { name: "Mecca",              country: "SA", lat: 21.389, lon: 39.857,  tz: "Asia/Riyadh" },
{ name: "Medina",             country: "SA", lat: 24.524, lon: 39.570,  tz: "Asia/Riyadh" },
{ name: "Riyadh",             country: "SA", lat: 24.686, lon: 46.722,  tz: "Asia/Riyadh" },
{ name: "Jeddah",             country: "SA", lat: 21.543, lon: 39.173,  tz: "Asia/Riyadh" },
{ name: "Dammam",             country: "SA", lat: 26.392, lon: 49.977,  tz: "Asia/Riyadh" },
{ name: "Taif",               country: "SA", lat: 21.270, lon: 40.416,  tz: "Asia/Riyadh" },
{ name: "Tabuk",              country: "SA", lat: 28.383, lon: 36.566,  tz: "Asia/Riyadh" },
{ name: "Abha",               country: "SA", lat: 18.246, lon: 42.505,  tz: "Asia/Riyadh" },
{ name: "Khobar",             country: "SA", lat: 26.218, lon: 50.197,  tz: "Asia/Riyadh" },
{ name: "Hail",               country: "SA", lat: 27.526, lon: 41.690,  tz: "Asia/Riyadh" },
{ name: "Najran",             country: "SA", lat: 17.492, lon: 44.132,  tz: "Asia/Riyadh" },
{ name: "Jizan",              country: "SA", lat: 16.889, lon: 42.551,  tz: "Asia/Riyadh" },
{ name: "Yanbu",              country: "SA", lat: 24.090, lon: 38.063,  tz: "Asia/Riyadh" },
{ name: "Al Qatif",           country: "SA", lat: 26.521, lon: 50.007,  tz: "Asia/Riyadh" },
{ name: "Al Ahsa",            country: "SA", lat: 25.385, lon: 49.587,  tz: "Asia/Riyadh" },
{ name: "Buraydah",           country: "SA", lat: 26.326, lon: 43.975,  tz: "Asia/Riyadh" },
{ name: "Al Kharj",           country: "SA", lat: 24.156, lon: 47.307,  tz: "Asia/Riyadh" },
{ name: "Jubail",             country: "SA", lat: 27.004, lon: 49.660,  tz: "Asia/Riyadh" },
{ name: "Khamis Mushait",     country: "SA", lat: 18.300, lon: 42.733,  tz: "Asia/Riyadh" },
{ name: "Al Majma'ah",        country: "SA", lat: 25.904, lon: 45.346,  tz: "Asia/Riyadh" },

// ── Pakistan ──────────────────────────────────────────────
{ name: "Karachi",            country: "PK", lat: 24.861, lon: 67.010,  tz: "Asia/Karachi" },
{ name: "Lahore",             country: "PK", lat: 31.558, lon: 74.352,  tz: "Asia/Karachi" },
{ name: "Islamabad",          country: "PK", lat: 33.738, lon: 73.084,  tz: "Asia/Karachi" },
{ name: "Faisalabad",         country: "PK", lat: 31.418, lon: 73.079,  tz: "Asia/Karachi" },
{ name: "Rawalpindi",         country: "PK", lat: 33.600, lon: 73.042,  tz: "Asia/Karachi" },
{ name: "Multan",             country: "PK", lat: 30.196, lon: 71.478,  tz: "Asia/Karachi" },
{ name: "Peshawar",           country: "PK", lat: 34.008, lon: 71.578,  tz: "Asia/Karachi" },
{ name: "Quetta",             country: "PK", lat: 30.189, lon: 67.003,  tz: "Asia/Karachi" },
{ name: "Hyderabad",          country: "PK", lat: 25.396, lon: 68.374,  tz: "Asia/Karachi" },
{ name: "Gujranwala",         country: "PK", lat: 32.162, lon: 74.188,  tz: "Asia/Karachi" },
{ name: "Sialkot",            country: "PK", lat: 32.499, lon: 74.536,  tz: "Asia/Karachi" },
{ name: "Bahawalpur",         country: "PK", lat: 29.395, lon: 71.678,  tz: "Asia/Karachi" },
{ name: "Sargodha",           country: "PK", lat: 32.083, lon: 72.671,  tz: "Asia/Karachi" },
{ name: "Sukkur",             country: "PK", lat: 27.706, lon: 68.857,  tz: "Asia/Karachi" },
{ name: "Larkana",            country: "PK", lat: 27.560, lon: 68.215,  tz: "Asia/Karachi" },
{ name: "Sheikhupura",        country: "PK", lat: 31.713, lon: 73.985,  tz: "Asia/Karachi" },
{ name: "Rahim Yar Khan",     country: "PK", lat: 28.420, lon: 70.296,  tz: "Asia/Karachi" },
{ name: "Jhang",              country: "PK", lat: 31.278, lon: 72.317,  tz: "Asia/Karachi" },
{ name: "Dera Ghazi Khan",    country: "PK", lat: 30.057, lon: 70.640,  tz: "Asia/Karachi" },
{ name: "Gujrat",             country: "PK", lat: 32.574, lon: 74.079,  tz: "Asia/Karachi" },
{ name: "Sahiwal",            country: "PK", lat: 30.670, lon: 73.111,  tz: "Asia/Karachi" },
{ name: "Wah Cantonment",     country: "PK", lat: 33.811, lon: 72.708,  tz: "Asia/Karachi" },
{ name: "Mardan",             country: "PK", lat: 34.201, lon: 72.050,  tz: "Asia/Karachi" },
{ name: "Mingora",            country: "PK", lat: 34.779, lon: 72.360,  tz: "Asia/Karachi" },
{ name: "Nawabshah",          country: "PK", lat: 26.244, lon: 68.410,  tz: "Asia/Karachi" },
{ name: "Mirpur Khas",        country: "PK", lat: 25.527, lon: 69.015,  tz: "Asia/Karachi" },
{ name: "Abbottabad",         country: "PK", lat: 34.149, lon: 73.200,  tz: "Asia/Karachi" },
{ name: "Muzaffarabad",       country: "PK", lat: 34.370, lon: 73.471,  tz: "Asia/Karachi" },
{ name: "Turbat",             country: "PK", lat: 26.000, lon: 63.044,  tz: "Asia/Karachi" },
{ name: "Khuzdar",            country: "PK", lat: 27.812, lon: 66.617,  tz: "Asia/Karachi" },
{ name: "Okara",              country: "PK", lat: 30.810, lon: 73.461,  tz: "Asia/Karachi" },
{ name: "Kasur",              country: "PK", lat: 31.115, lon: 74.452,  tz: "Asia/Karachi" },
{ name: "Chiniot",            country: "PK", lat: 31.717, lon: 72.978,  tz: "Asia/Karachi" },
{ name: "Hafizabad",          country: "PK", lat: 32.069, lon: 73.688,  tz: "Asia/Karachi" },
{ name: "Sadiqabad",          country: "PK", lat: 28.307, lon: 70.130,  tz: "Asia/Karachi" },
{ name: "Jacobabad",          country: "PK", lat: 28.282, lon: 68.451,  tz: "Asia/Karachi" },
{ name: "Shikarpur",          country: "PK", lat: 27.955, lon: 68.638,  tz: "Asia/Karachi" },
{ name: "Khairpur",           country: "PK", lat: 27.530, lon: 68.759,  tz: "Asia/Karachi" },
{ name: "Dadu",               country: "PK", lat: 26.732, lon: 67.775,  tz: "Asia/Karachi" },
{ name: "Kohat",              country: "PK", lat: 33.589, lon: 71.442,  tz: "Asia/Karachi" },
{ name: "Bannu",              country: "PK", lat: 32.985, lon: 70.604,  tz: "Asia/Karachi" },
{ name: "Mansehra",           country: "PK", lat: 34.334, lon: 73.197,  tz: "Asia/Karachi" },
{ name: "Attock",             country: "PK", lat: 33.766, lon: 72.360,  tz: "Asia/Karachi" },
{ name: "Jhelum",             country: "PK", lat: 32.938, lon: 73.727,  tz: "Asia/Karachi" },
{ name: "Nowshera",           country: "PK", lat: 34.016, lon: 71.975,  tz: "Asia/Karachi" },
{ name: "Swabi",              country: "PK", lat: 34.120, lon: 72.470,  tz: "Asia/Karachi" },
{ name: "Charsadda",          country: "PK", lat: 34.148, lon: 71.737,  tz: "Asia/Karachi" },
{ name: "Tank",               country: "PK", lat: 32.219, lon: 70.379,  tz: "Asia/Karachi" },
{ name: "Chaman",             country: "PK", lat: 30.921, lon: 66.452,  tz: "Asia/Karachi" },
{ name: "Dera Ismail Khan",   country: "PK", lat: 31.833, lon: 70.903,  tz: "Asia/Karachi" },
{ name: "Kamalia",            country: "PK", lat: 30.726, lon: 72.648,  tz: "Asia/Karachi" },
{ name: "Khanewal",           country: "PK", lat: 30.301, lon: 71.932,  tz: "Asia/Karachi" },
{ name: "Lodhran",            country: "PK", lat: 29.537, lon: 71.632,  tz: "Asia/Karachi" },
{ name: "Pakpattan",          country: "PK", lat: 30.343, lon: 73.387,  tz: "Asia/Karachi" },
{ name: "Toba Tek Singh",     country: "PK", lat: 30.971, lon: 72.483,  tz: "Asia/Karachi" },
{ name: "Vehari",             country: "PK", lat: 30.045, lon: 72.351,  tz: "Asia/Karachi" },

// ── Indonesia ─────────────────────────────────────────────
{ name: "Jakarta",            country: "ID", lat: -6.200, lon: 106.816, tz: "Asia/Jakarta" },
{ name: "Surabaya",           country: "ID", lat: -7.250, lon: 112.768, tz: "Asia/Jakarta" },
{ name: "Bandung",            country: "ID", lat: -6.917, lon: 107.619, tz: "Asia/Jakarta" },
{ name: "Medan",              country: "ID", lat:  3.595, lon:  98.672, tz: "Asia/Jakarta" },
{ name: "Semarang",           country: "ID", lat: -7.000, lon: 110.419, tz: "Asia/Jakarta" },
{ name: "Makassar",           country: "ID", lat: -5.147, lon: 119.432, tz: "Asia/Makassar" },
{ name: "Palembang",          country: "ID", lat: -2.916, lon: 104.745, tz: "Asia/Jakarta" },
{ name: "Tangerang",          country: "ID", lat: -6.178, lon: 106.630, tz: "Asia/Jakarta" },
{ name: "Depok",              country: "ID", lat: -6.402, lon: 106.794, tz: "Asia/Jakarta" },
{ name: "Aceh",               country: "ID", lat:  5.549, lon:  95.317, tz: "Asia/Jakarta" },
{ name: "Bogor",              country: "ID", lat: -6.596, lon: 106.806, tz: "Asia/Jakarta" },
{ name: "Pekanbaru",          country: "ID", lat:  0.533, lon: 101.450, tz: "Asia/Jakarta" },
{ name: "Padang",             country: "ID", lat: -0.950, lon: 100.354, tz: "Asia/Jakarta" },
{ name: "Malang",             country: "ID", lat: -7.983, lon: 112.621, tz: "Asia/Jakarta" },
{ name: "Banjarmasin",        country: "ID", lat: -3.316, lon: 114.590, tz: "Asia/Makassar" },
{ name: "Samarinda",          country: "ID", lat: -0.502, lon: 117.154, tz: "Asia/Makassar" },
{ name: "Pontianak",          country: "ID", lat: -0.027, lon: 109.342, tz: "Asia/Pontianak" },
{ name: "Jambi",              country: "ID", lat: -1.610, lon: 103.615, tz: "Asia/Jakarta" },
{ name: "Mataram",            country: "ID", lat: -8.584, lon: 116.118, tz: "Asia/Makassar" },
{ name: "Cirebon",            country: "ID", lat: -6.732, lon: 108.552, tz: "Asia/Jakarta" },
{ name: "Surakarta",          country: "ID", lat: -7.575, lon: 110.827, tz: "Asia/Jakarta" },
{ name: "Yogyakarta",         country: "ID", lat: -7.797, lon: 110.370, tz: "Asia/Jakarta" },
{ name: "Manado",             country: "ID", lat:  1.487, lon: 124.842, tz: "Asia/Makassar" },
{ name: "Bekasi",             country: "ID", lat: -6.235, lon: 106.992, tz: "Asia/Jakarta" },
{ name: "Batam",              country: "ID", lat:  1.045, lon: 104.030, tz: "Asia/Jakarta" },
{ name: "Balikpapan",         country: "ID", lat: -1.268, lon: 116.828, tz: "Asia/Makassar" },
{ name: "Padang Sidempuan",   country: "ID", lat:  1.379, lon:  99.272, tz: "Asia/Jakarta" },
{ name: "Tasikmalaya",        country: "ID", lat: -7.326, lon: 108.220, tz: "Asia/Jakarta" },
{ name: "Serang",             country: "ID", lat: -6.120, lon: 106.150, tz: "Asia/Jakarta" },
{ name: "Kendari",            country: "ID", lat: -3.942, lon: 122.499, tz: "Asia/Makassar" },
{ name: "Ambon",              country: "ID", lat: -3.695, lon: 128.181, tz: "Asia/Jayapura" },
{ name: "Gorontalo",          country: "ID", lat:  0.540, lon: 123.063, tz: "Asia/Makassar" },
{ name: "Ternate",            country: "ID", lat:  0.786, lon: 127.380, tz: "Asia/Jayapura" },
{ name: "Purwokerto",         country: "ID", lat: -7.424, lon: 109.230, tz: "Asia/Jakarta" },
{ name: "Palu",               country: "ID", lat: -0.900, lon: 119.877, tz: "Asia/Makassar" },
{ name: "Bukittinggi",        country: "ID", lat: -0.305, lon: 100.368, tz: "Asia/Jakarta" },
{ name: "Kediri",             country: "ID", lat: -7.816, lon: 112.012, tz: "Asia/Jakarta" },
{ name: "Probolinggo",        country: "ID", lat: -7.752, lon: 113.215, tz: "Asia/Jakarta" },
{ name: "Jayapura",           country: "ID", lat: -2.537, lon: 140.718, tz: "Asia/Jayapura" },

// ── Bangladesh ────────────────────────────────────────────
{ name: "Dhaka",              country: "BD", lat: 23.810, lon: 90.412,  tz: "Asia/Dhaka" },
{ name: "Chittagong",         country: "BD", lat: 22.336, lon: 91.834,  tz: "Asia/Dhaka" },
{ name: "Khulna",             country: "BD", lat: 22.815, lon: 89.568,  tz: "Asia/Dhaka" },
{ name: "Rajshahi",           country: "BD", lat: 24.370, lon: 88.624,  tz: "Asia/Dhaka" },
{ name: "Sylhet",             country: "BD", lat: 24.899, lon: 91.872,  tz: "Asia/Dhaka" },
{ name: "Narayanganj",        country: "BD", lat: 23.623, lon: 90.500,  tz: "Asia/Dhaka" },
{ name: "Gazipur",            country: "BD", lat: 23.999, lon: 90.413,  tz: "Asia/Dhaka" },
{ name: "Comilla",            country: "BD", lat: 23.461, lon: 91.188,  tz: "Asia/Dhaka" },
{ name: "Bogra",              country: "BD", lat: 24.846, lon: 89.372,  tz: "Asia/Dhaka" },
{ name: "Mymensingh",         country: "BD", lat: 24.746, lon: 90.407,  tz: "Asia/Dhaka" },
{ name: "Rangpur",            country: "BD", lat: 25.745, lon: 89.275,  tz: "Asia/Dhaka" },
{ name: "Barisal",            country: "BD", lat: 22.701, lon: 90.370,  tz: "Asia/Dhaka" },
{ name: "Jessore",            country: "BD", lat: 23.169, lon: 89.213,  tz: "Asia/Dhaka" },
{ name: "Cox's Bazar",        country: "BD", lat: 21.441, lon: 91.978,  tz: "Asia/Dhaka" },
{ name: "Dinajpur",           country: "BD", lat: 25.627, lon: 88.638,  tz: "Asia/Dhaka" },
{ name: "Tangail",            country: "BD", lat: 24.248, lon: 89.916,  tz: "Asia/Dhaka" },
{ name: "Pabna",              country: "BD", lat: 24.006, lon: 89.244,  tz: "Asia/Dhaka" },
{ name: "Brahmanbaria",       country: "BD", lat: 23.960, lon: 91.111,  tz: "Asia/Dhaka" },
{ name: "Faridpur",           country: "BD", lat: 23.599, lon: 89.842,  tz: "Asia/Dhaka" },
{ name: "Noakhali",           country: "BD", lat: 22.870, lon: 91.099,  tz: "Asia/Dhaka" },
{ name: "Sirajganj",          country: "BD", lat: 24.452, lon: 89.700,  tz: "Asia/Dhaka" },
{ name: "Jamalpur",           country: "BD", lat: 24.900, lon: 89.933,  tz: "Asia/Dhaka" },
{ name: "Narsingdi",          country: "BD", lat: 23.921, lon: 90.716,  tz: "Asia/Dhaka" },
{ name: "Manikganj",          country: "BD", lat: 23.862, lon: 90.000,  tz: "Asia/Dhaka" },

// ── Turkey ────────────────────────────────────────────────
{ name: "Istanbul",           country: "TR", lat: 41.013, lon: 28.949,  tz: "Europe/Istanbul" },
{ name: "Ankara",             country: "TR", lat: 39.920, lon: 32.854,  tz: "Europe/Istanbul" },
{ name: "Izmir",              country: "TR", lat: 38.423, lon: 27.143,  tz: "Europe/Istanbul" },
{ name: "Bursa",              country: "TR", lat: 40.183, lon: 29.067,  tz: "Europe/Istanbul" },
{ name: "Adana",              country: "TR", lat: 37.001, lon: 35.329,  tz: "Europe/Istanbul" },
{ name: "Konya",              country: "TR", lat: 37.874, lon: 32.493,  tz: "Europe/Istanbul" },
{ name: "Gaziantep",          country: "TR", lat: 37.066, lon: 37.383,  tz: "Europe/Istanbul" },
{ name: "Diyarbakir",         country: "TR", lat: 37.910, lon: 40.230,  tz: "Europe/Istanbul" },
{ name: "Mersin",             country: "TR", lat: 36.800, lon: 34.633,  tz: "Europe/Istanbul" },
{ name: "Antalya",            country: "TR", lat: 36.897, lon: 30.713,  tz: "Europe/Istanbul" },
{ name: "Kayseri",            country: "TR", lat: 38.732, lon: 35.487,  tz: "Europe/Istanbul" },
{ name: "Trabzon",            country: "TR", lat: 41.005, lon: 39.727,  tz: "Europe/Istanbul" },
{ name: "Sanliurfa",          country: "TR", lat: 37.159, lon: 38.796,  tz: "Europe/Istanbul" },
{ name: "Malatya",            country: "TR", lat: 38.356, lon: 38.309,  tz: "Europe/Istanbul" },
{ name: "Van",                country: "TR", lat: 38.494, lon: 43.380,  tz: "Europe/Istanbul" },
{ name: "Erzurum",            country: "TR", lat: 39.905, lon: 41.270,  tz: "Europe/Istanbul" },
{ name: "Eskisehir",          country: "TR", lat: 39.776, lon: 30.521,  tz: "Europe/Istanbul" },
{ name: "Sakarya",            country: "TR", lat: 40.774, lon: 30.394,  tz: "Europe/Istanbul" },
{ name: "Denizli",            country: "TR", lat: 37.774, lon: 29.086,  tz: "Europe/Istanbul" },
{ name: "Samsun",             country: "TR", lat: 41.286, lon: 36.330,  tz: "Europe/Istanbul" },
{ name: "Kahramanmaras",      country: "TR", lat: 37.586, lon: 36.937,  tz: "Europe/Istanbul" },
{ name: "Batman",             country: "TR", lat: 37.882, lon: 41.132,  tz: "Europe/Istanbul" },
{ name: "Balikesir",          country: "TR", lat: 39.648, lon: 27.887,  tz: "Europe/Istanbul" },
{ name: "Hatay",              country: "TR", lat: 36.401, lon: 36.349,  tz: "Europe/Istanbul" },

// ── Egypt ─────────────────────────────────────────────────
{ name: "Cairo",              country: "EG", lat: 30.044, lon: 31.236,  tz: "Africa/Cairo" },
{ name: "Alexandria",         country: "EG", lat: 31.200, lon: 29.919,  tz: "Africa/Cairo" },
{ name: "Giza",               country: "EG", lat: 30.013, lon: 31.208,  tz: "Africa/Cairo" },
{ name: "Shubra El Kheima",   country: "EG", lat: 30.128, lon: 31.243,  tz: "Africa/Cairo" },
{ name: "Port Said",          country: "EG", lat: 31.256, lon: 32.284,  tz: "Africa/Cairo" },
{ name: "Suez",               country: "EG", lat: 29.974, lon: 32.549,  tz: "Africa/Cairo" },
{ name: "Luxor",              country: "EG", lat: 25.687, lon: 32.645,  tz: "Africa/Cairo" },
{ name: "Aswan",              country: "EG", lat: 24.091, lon: 32.900,  tz: "Africa/Cairo" },
{ name: "Ismailia",           country: "EG", lat: 30.604, lon: 32.272,  tz: "Africa/Cairo" },
{ name: "Faiyum",             country: "EG", lat: 29.309, lon: 30.842,  tz: "Africa/Cairo" },
{ name: "Zagazig",            country: "EG", lat: 30.588, lon: 31.502,  tz: "Africa/Cairo" },
{ name: "Minya",              country: "EG", lat: 28.108, lon: 30.752,  tz: "Africa/Cairo" },
{ name: "Damanhur",           country: "EG", lat: 31.034, lon: 30.469,  tz: "Africa/Cairo" },
{ name: "Asyut",              country: "EG", lat: 27.181, lon: 31.183,  tz: "Africa/Cairo" },
{ name: "Tanta",              country: "EG", lat: 30.786, lon: 31.000,  tz: "Africa/Cairo" },
{ name: "Mansoura",           country: "EG", lat: 31.041, lon: 31.381,  tz: "Africa/Cairo" },
{ name: "Sohag",              country: "EG", lat: 26.556, lon: 31.695,  tz: "Africa/Cairo" },
{ name: "Qena",               country: "EG", lat: 26.164, lon: 32.723,  tz: "Africa/Cairo" },
{ name: "Beni Suef",          country: "EG", lat: 29.074, lon: 31.099,  tz: "Africa/Cairo" },
{ name: "Kafr El Sheikh",     country: "EG", lat: 31.114, lon: 30.939,  tz: "Africa/Cairo" },
{ name: "El Mahalla El Kubra",country: "EG", lat: 30.977, lon: 31.163,  tz: "Africa/Cairo" },
{ name: "Hurghada",           country: "EG", lat: 27.257, lon: 33.812,  tz: "Africa/Cairo" },

// ── Iran ──────────────────────────────────────────────────
{ name: "Tehran",             country: "IR", lat: 35.694, lon: 51.422,  tz: "Asia/Tehran" },
{ name: "Mashhad",            country: "IR", lat: 36.298, lon: 59.606,  tz: "Asia/Tehran" },
{ name: "Isfahan",            country: "IR", lat: 32.661, lon: 51.680,  tz: "Asia/Tehran" },
{ name: "Tabriz",             country: "IR", lat: 38.080, lon: 46.299,  tz: "Asia/Tehran" },
{ name: "Shiraz",             country: "IR", lat: 29.591, lon: 52.584,  tz: "Asia/Tehran" },
{ name: "Ahvaz",              country: "IR", lat: 31.332, lon: 48.698,  tz: "Asia/Tehran" },
{ name: "Qom",                country: "IR", lat: 34.640, lon: 50.876,  tz: "Asia/Tehran" },
{ name: "Kermanshah",         country: "IR", lat: 34.314, lon: 47.065,  tz: "Asia/Tehran" },
{ name: "Karaj",              country: "IR", lat: 35.835, lon: 50.999,  tz: "Asia/Tehran" },
{ name: "Rasht",              country: "IR", lat: 37.280, lon: 49.583,  tz: "Asia/Tehran" },
{ name: "Zahedan",            country: "IR", lat: 29.496, lon: 60.862,  tz: "Asia/Tehran" },
{ name: "Hamadan",            country: "IR", lat: 34.799, lon: 48.515,  tz: "Asia/Tehran" },
{ name: "Yazd",               country: "IR", lat: 31.898, lon: 54.367,  tz: "Asia/Tehran" },
{ name: "Ardabil",            country: "IR", lat: 38.249, lon: 48.293,  tz: "Asia/Tehran" },
{ name: "Bandar Abbas",       country: "IR", lat: 27.189, lon: 56.276,  tz: "Asia/Tehran" },
{ name: "Arak",               country: "IR", lat: 34.094, lon: 49.689,  tz: "Asia/Tehran" },
{ name: "Urmia",              country: "IR", lat: 37.555, lon: 45.076,  tz: "Asia/Tehran" },
{ name: "Qazvin",             country: "IR", lat: 36.270, lon: 50.004,  tz: "Asia/Tehran" },
{ name: "Sanandaj",           country: "IR", lat: 35.315, lon: 46.999,  tz: "Asia/Tehran" },
{ name: "Gorgan",             country: "IR", lat: 36.846, lon: 54.443,  tz: "Asia/Tehran" },
{ name: "Khorramabad",        country: "IR", lat: 33.488, lon: 48.356,  tz: "Asia/Tehran" },
{ name: "Ilam",               country: "IR", lat: 33.638, lon: 46.423,  tz: "Asia/Tehran" },
{ name: "Bushehr",            country: "IR", lat: 28.969, lon: 50.836,  tz: "Asia/Tehran" },
{ name: "Birjand",            country: "IR", lat: 32.866, lon: 59.221,  tz: "Asia/Tehran" },
{ name: "Semnan",             country: "IR", lat: 35.576, lon: 53.396,  tz: "Asia/Tehran" },

// ── Nigeria ───────────────────────────────────────────────
{ name: "Lagos",              country: "NG", lat:  6.524, lon:  3.379,  tz: "Africa/Lagos" },
{ name: "Kano",               country: "NG", lat: 12.000, lon:  8.517,  tz: "Africa/Lagos" },
{ name: "Kaduna",             country: "NG", lat: 10.524, lon:  7.441,  tz: "Africa/Lagos" },
{ name: "Abuja",              country: "NG", lat:  9.072, lon:  7.491,  tz: "Africa/Lagos" },
{ name: "Zaria",              country: "NG", lat: 11.074, lon:  7.720,  tz: "Africa/Lagos" },
{ name: "Maiduguri",          country: "NG", lat: 11.846, lon: 13.160,  tz: "Africa/Lagos" },
{ name: "Sokoto",             country: "NG", lat: 13.056, lon:  5.240,  tz: "Africa/Lagos" },
{ name: "Katsina",            country: "NG", lat: 13.008, lon:  7.600,  tz: "Africa/Lagos" },
{ name: "Bauchi",             country: "NG", lat: 10.311, lon:  9.844,  tz: "Africa/Lagos" },
{ name: "Jos",                country: "NG", lat:  9.917, lon:  8.896,  tz: "Africa/Lagos" },
{ name: "Ilorin",             country: "NG", lat:  8.496, lon:  4.542,  tz: "Africa/Lagos" },
{ name: "Gombe",              country: "NG", lat: 10.290, lon: 11.167,  tz: "Africa/Lagos" },
{ name: "Yola",               country: "NG", lat:  9.204, lon: 12.495,  tz: "Africa/Lagos" },
{ name: "Kebbi",              country: "NG", lat: 12.452, lon:  4.197,  tz: "Africa/Lagos" },
{ name: "Dutse",              country: "NG", lat: 11.757, lon:  9.340,  tz: "Africa/Lagos" },
{ name: "Birnin Kebbi",       country: "NG", lat: 12.459, lon:  4.197,  tz: "Africa/Lagos" },
{ name: "Damaturu",           country: "NG", lat: 11.747, lon: 11.961,  tz: "Africa/Lagos" },
{ name: "Hadejia",            country: "NG", lat: 12.454, lon: 10.040,  tz: "Africa/Lagos" },
{ name: "Potiskum",           country: "NG", lat: 11.711, lon: 11.080,  tz: "Africa/Lagos" },
{ name: "Nguru",              country: "NG", lat: 12.879, lon: 10.452,  tz: "Africa/Lagos" },
{ name: "Gashua",             country: "NG", lat: 12.873, lon: 11.044,  tz: "Africa/Lagos" },
{ name: "Kontagora",          country: "NG", lat: 10.400, lon:  5.467,  tz: "Africa/Lagos" },
{ name: "Azare",              country: "NG", lat: 11.680, lon: 10.190,  tz: "Africa/Lagos" },
{ name: "Gusau",              country: "NG", lat: 12.170, lon:  6.663,  tz: "Africa/Lagos" },

// ── Malaysia ──────────────────────────────────────────────
{ name: "Kuala Lumpur",       country: "MY", lat:  3.140, lon: 101.687, tz: "Asia/Kuala_Lumpur" },
{ name: "George Town",        country: "MY", lat:  5.414, lon: 100.330, tz: "Asia/Kuala_Lumpur" },
{ name: "Johor Bahru",        country: "MY", lat:  1.492, lon: 103.741, tz: "Asia/Kuala_Lumpur" },
{ name: "Ipoh",               country: "MY", lat:  4.597, lon: 101.090, tz: "Asia/Kuala_Lumpur" },
{ name: "Kota Kinabalu",      country: "MY", lat:  5.980, lon: 116.075, tz: "Asia/Kuching" },
{ name: "Shah Alam",          country: "MY", lat:  3.085, lon: 101.533, tz: "Asia/Kuala_Lumpur" },
{ name: "Petaling Jaya",      country: "MY", lat:  3.107, lon: 101.607, tz: "Asia/Kuala_Lumpur" },
{ name: "Klang",              country: "MY", lat:  3.044, lon: 101.446, tz: "Asia/Kuala_Lumpur" },
{ name: "Kuching",            country: "MY", lat:  1.550, lon: 110.333, tz: "Asia/Kuching" },
{ name: "Alor Setar",         country: "MY", lat:  6.121, lon: 100.368, tz: "Asia/Kuala_Lumpur" },
{ name: "Kota Bharu",         country: "MY", lat:  6.133, lon: 102.238, tz: "Asia/Kuala_Lumpur" },
{ name: "Kuala Terengganu",   country: "MY", lat:  5.329, lon: 103.137, tz: "Asia/Kuala_Lumpur" },
{ name: "Miri",               country: "MY", lat:  4.399, lon: 113.991, tz: "Asia/Kuching" },
{ name: "Sibu",               country: "MY", lat:  2.307, lon: 111.825, tz: "Asia/Kuching" },
{ name: "Sandakan",           country: "MY", lat:  5.839, lon: 118.117, tz: "Asia/Kuching" },
{ name: "Tawau",              country: "MY", lat:  4.245, lon: 117.891, tz: "Asia/Kuching" },
{ name: "Seremban",           country: "MY", lat:  2.726, lon: 101.938, tz: "Asia/Kuala_Lumpur" },
{ name: "Melaka",             country: "MY", lat:  2.195, lon: 102.241, tz: "Asia/Kuala_Lumpur" },
{ name: "Putrajaya",          country: "MY", lat:  2.926, lon: 101.696, tz: "Asia/Kuala_Lumpur" },
{ name: "Subang Jaya",        country: "MY", lat:  3.049, lon: 101.581, tz: "Asia/Kuala_Lumpur" },

// ── Algeria ───────────────────────────────────────────────
{ name: "Algiers",            country: "DZ", lat: 36.737, lon:  3.087,  tz: "Africa/Algiers" },
{ name: "Oran",               country: "DZ", lat: 35.697, lon: -0.634,  tz: "Africa/Algiers" },
{ name: "Constantine",        country: "DZ", lat: 36.365, lon:  6.615,  tz: "Africa/Algiers" },
{ name: "Tlemcen",            country: "DZ", lat: 34.878, lon: -1.315,  tz: "Africa/Algiers" },
{ name: "Batna",              country: "DZ", lat: 35.556, lon:  6.174,  tz: "Africa/Algiers" },
{ name: "Sétif",              country: "DZ", lat: 36.191, lon:  5.411,  tz: "Africa/Algiers" },
{ name: "Annaba",             country: "DZ", lat: 36.897, lon:  7.765,  tz: "Africa/Algiers" },
{ name: "Biskra",             country: "DZ", lat: 34.850, lon:  5.728,  tz: "Africa/Algiers" },
{ name: "Blida",              country: "DZ", lat: 36.470, lon:  2.828,  tz: "Africa/Algiers" },
{ name: "Béjaïa",             country: "DZ", lat: 36.752, lon:  5.056,  tz: "Africa/Algiers" },
{ name: "Tébessa",            country: "DZ", lat: 35.404, lon:  8.120,  tz: "Africa/Algiers" },
{ name: "Sidi Bel Abbès",     country: "DZ", lat: 35.190, lon: -0.629,  tz: "Africa/Algiers" },
{ name: "Skikda",             country: "DZ", lat: 36.876, lon:  6.906,  tz: "Africa/Algiers" },
{ name: "Tiaret",             country: "DZ", lat: 35.371, lon:  1.322,  tz: "Africa/Algiers" },
{ name: "Jijel",              country: "DZ", lat: 36.820, lon:  5.766,  tz: "Africa/Algiers" },
{ name: "Médéa",              country: "DZ", lat: 36.264, lon:  2.751,  tz: "Africa/Algiers" },
{ name: "Ouargla",            country: "DZ", lat: 31.951, lon:  5.325,  tz: "Africa/Algiers" },
{ name: "Ghardaïa",           country: "DZ", lat: 32.490, lon:  3.674,  tz: "Africa/Algiers" },
{ name: "Mostaganem",         country: "DZ", lat: 35.931, lon:  0.089,  tz: "Africa/Algiers" },
{ name: "Guelma",             country: "DZ", lat: 36.462, lon:  7.426,  tz: "Africa/Algiers" },

// ── Morocco ───────────────────────────────────────────────
{ name: "Casablanca",         country: "MA", lat: 33.588, lon: -7.613,  tz: "Africa/Casablanca" },
{ name: "Rabat",              country: "MA", lat: 34.020, lon: -6.842,  tz: "Africa/Casablanca" },
{ name: "Fes",                country: "MA", lat: 34.033, lon: -5.000,  tz: "Africa/Casablanca" },
{ name: "Marrakech",          country: "MA", lat: 31.628, lon: -8.008,  tz: "Africa/Casablanca" },
{ name: "Tangier",            country: "MA", lat: 35.767, lon: -5.800,  tz: "Africa/Casablanca" },
{ name: "Agadir",             country: "MA", lat: 30.428, lon: -9.598,  tz: "Africa/Casablanca" },
{ name: "Meknes",             country: "MA", lat: 33.895, lon: -5.547,  tz: "Africa/Casablanca" },
{ name: "Oujda",              country: "MA", lat: 34.681, lon: -1.908,  tz: "Africa/Casablanca" },
{ name: "Tetouan",            country: "MA", lat: 35.578, lon: -5.368,  tz: "Africa/Casablanca" },
{ name: "Kenitra",            country: "MA", lat: 34.261, lon: -6.580,  tz: "Africa/Casablanca" },
{ name: "Safi",               country: "MA", lat: 32.299, lon: -9.238,  tz: "Africa/Casablanca" },
{ name: "El Jadida",          country: "MA", lat: 33.256, lon: -8.506,  tz: "Africa/Casablanca" },
{ name: "Beni Mellal",        country: "MA", lat: 32.340, lon: -6.349,  tz: "Africa/Casablanca" },
{ name: "Khouribga",          country: "MA", lat: 32.882, lon: -6.906,  tz: "Africa/Casablanca" },
{ name: "Nador",              country: "MA", lat: 35.173, lon: -2.930,  tz: "Africa/Casablanca" },
{ name: "Taza",               country: "MA", lat: 34.213, lon: -4.010,  tz: "Africa/Casablanca" },
{ name: "Ksar El Kebir",      country: "MA", lat: 35.000, lon: -5.900,  tz: "Africa/Casablanca" },
{ name: "Mohammedia",         country: "MA", lat: 33.686, lon: -7.382,  tz: "Africa/Casablanca" },
{ name: "Laayoune",           country: "MA", lat: 27.154, lon: -13.203, tz: "Africa/Casablanca" },
{ name: "Essaouira",          country: "MA", lat: 31.508, lon: -9.762,  tz: "Africa/Casablanca" },

// ── Sudan ─────────────────────────────────────────────────
{ name: "Khartoum",           country: "SD", lat: 15.552, lon: 32.532,  tz: "Africa/Khartoum" },
{ name: "Omdurman",           country: "SD", lat: 15.633, lon: 32.484,  tz: "Africa/Khartoum" },
{ name: "Port Sudan",         country: "SD", lat: 19.618, lon: 37.216,  tz: "Africa/Khartoum" },
{ name: "Kassala",            country: "SD", lat: 15.451, lon: 36.400,  tz: "Africa/Khartoum" },
{ name: "El Obeid",           country: "SD", lat: 13.184, lon: 30.217,  tz: "Africa/Khartoum" },
{ name: "Wad Madani",         country: "SD", lat: 14.401, lon: 33.520,  tz: "Africa/Khartoum" },
{ name: "Atbara",             country: "SD", lat: 17.700, lon: 33.983,  tz: "Africa/Khartoum" },
{ name: "El Fasher",          country: "SD", lat: 13.629, lon: 25.349,  tz: "Africa/Khartoum" },
{ name: "Nyala",              country: "SD", lat: 12.049, lon: 24.882,  tz: "Africa/Khartoum" },
{ name: "Malakal",            country: "SD", lat:  9.533, lon: 31.667,  tz: "Africa/Khartoum" },
{ name: "Gedaref",            country: "SD", lat: 14.039, lon: 35.381,  tz: "Africa/Khartoum" },
{ name: "Kosti",              country: "SD", lat: 13.167, lon: 32.667,  tz: "Africa/Khartoum" },

// ── Iraq ──────────────────────────────────────────────────
{ name: "Baghdad",            country: "IQ", lat: 33.341, lon: 44.401,  tz: "Asia/Baghdad" },
{ name: "Basra",              country: "IQ", lat: 30.508, lon: 47.783,  tz: "Asia/Baghdad" },
{ name: "Mosul",              country: "IQ", lat: 36.340, lon: 43.130,  tz: "Asia/Baghdad" },
{ name: "Erbil",              country: "IQ", lat: 36.191, lon: 44.009,  tz: "Asia/Baghdad" },
{ name: "Najaf",              country: "IQ", lat: 31.997, lon: 44.335,  tz: "Asia/Baghdad" },
{ name: "Karbala",            country: "IQ", lat: 32.616, lon: 44.024,  tz: "Asia/Baghdad" },
{ name: "Sulaymaniyah",       country: "IQ", lat: 35.557, lon: 45.435,  tz: "Asia/Baghdad" },
{ name: "Kirkuk",             country: "IQ", lat: 35.468, lon: 44.392,  tz: "Asia/Baghdad" },
{ name: "Diwaniyah",          country: "IQ", lat: 31.989, lon: 44.924,  tz: "Asia/Baghdad" },
{ name: "Amarah",             country: "IQ", lat: 31.835, lon: 47.151,  tz: "Asia/Baghdad" },
{ name: "Nasiriyah",          country: "IQ", lat: 31.043, lon: 46.253,  tz: "Asia/Baghdad" },
{ name: "Dohuk",              country: "IQ", lat: 36.868, lon: 42.988,  tz: "Asia/Baghdad" },
{ name: "Samarra",            country: "IQ", lat: 34.198, lon: 43.874,  tz: "Asia/Baghdad" },
{ name: "Ramadi",             country: "IQ", lat: 33.426, lon: 43.299,  tz: "Asia/Baghdad" },
{ name: "Fallujah",           country: "IQ", lat: 33.350, lon: 43.783,  tz: "Asia/Baghdad" },
{ name: "Baqubah",            country: "IQ", lat: 33.749, lon: 44.650,  tz: "Asia/Baghdad" },
{ name: "Hilla",              country: "IQ", lat: 32.461, lon: 44.421,  tz: "Asia/Baghdad" },
{ name: "Kut",                country: "IQ", lat: 32.500, lon: 45.833,  tz: "Asia/Baghdad" },
{ name: "Zakho",              country: "IQ", lat: 37.144, lon: 42.684,  tz: "Asia/Baghdad" },
{ name: "Tikrit",             country: "IQ", lat: 34.614, lon: 43.678,  tz: "Asia/Baghdad" },

// ── Afghanistan ───────────────────────────────────────────
{ name: "Kabul",              country: "AF", lat: 34.528, lon: 69.172,  tz: "Asia/Kabul" },
{ name: "Kandahar",           country: "AF", lat: 31.613, lon: 65.710,  tz: "Asia/Kabul" },
{ name: "Herat",              country: "AF", lat: 34.340, lon: 62.204,  tz: "Asia/Kabul" },
{ name: "Mazar-i-Sharif",     country: "AF", lat: 36.708, lon: 67.111,  tz: "Asia/Kabul" },
{ name: "Jalalabad",          country: "AF", lat: 34.430, lon: 70.452,  tz: "Asia/Kabul" },
{ name: "Kunduz",             country: "AF", lat: 36.728, lon: 68.872,  tz: "Asia/Kabul" },
{ name: "Ghazni",             country: "AF", lat: 33.553, lon: 68.422,  tz: "Asia/Kabul" },
{ name: "Lashkar Gah",        country: "AF", lat: 31.593, lon: 64.370,  tz: "Asia/Kabul" },
{ name: "Khost",              country: "AF", lat: 33.333, lon: 69.917,  tz: "Asia/Kabul" },
{ name: "Baghlan",            country: "AF", lat: 36.130, lon: 68.708,  tz: "Asia/Kabul" },
{ name: "Pul-e-Khumri",       country: "AF", lat: 35.944, lon: 68.716,  tz: "Asia/Kabul" },
{ name: "Taloqan",            country: "AF", lat: 36.736, lon: 69.531,  tz: "Asia/Kabul" },
{ name: "Sheberghan",         country: "AF", lat: 36.665, lon: 65.751,  tz: "Asia/Kabul" },
{ name: "Zaranj",             country: "AF", lat: 30.964, lon: 61.847,  tz: "Asia/Kabul" },
{ name: "Faizabad",           country: "AF", lat: 37.121, lon: 70.580,  tz: "Asia/Kabul" },
{ name: "Charikar",           country: "AF", lat: 35.015, lon: 69.172,  tz: "Asia/Kabul" },
{ name: "Gardez",             country: "AF", lat: 33.597, lon: 69.226,  tz: "Asia/Kabul" },
{ name: "Maymana",            country: "AF", lat: 35.921, lon: 64.770,  tz: "Asia/Kabul" },

// ── UAE ───────────────────────────────────────────────────
{ name: "Dubai",              country: "AE", lat: 25.204, lon: 55.270,  tz: "Asia/Dubai" },
{ name: "Abu Dhabi",          country: "AE", lat: 24.453, lon: 54.377,  tz: "Asia/Dubai" },
{ name: "Sharjah",            country: "AE", lat: 25.346, lon: 55.420,  tz: "Asia/Dubai" },
{ name: "Ajman",              country: "AE", lat: 25.413, lon: 55.435,  tz: "Asia/Dubai" },
{ name: "Ras Al Khaimah",     country: "AE", lat: 25.790, lon: 55.942,  tz: "Asia/Dubai" },
{ name: "Fujairah",           country: "AE", lat: 25.122, lon: 56.327,  tz: "Asia/Dubai" },
{ name: "Al Ain",             country: "AE", lat: 24.207, lon: 55.744,  tz: "Asia/Dubai" },
{ name: "Umm Al Quwain",      country: "AE", lat: 25.565, lon: 55.555,  tz: "Asia/Dubai" },

// ── Ethiopia ──────────────────────────────────────────────
{ name: "Addis Ababa",        country: "ET", lat:  9.025, lon: 38.747,  tz: "Africa/Addis_Ababa" },
{ name: "Dire Dawa",          country: "ET", lat:  9.593, lon: 41.866,  tz: "Africa/Addis_Ababa" },
{ name: "Harar",              country: "ET", lat:  9.311, lon: 42.118,  tz: "Africa/Addis_Ababa" },
{ name: "Jimma",              country: "ET", lat:  7.678, lon: 36.834,  tz: "Africa/Addis_Ababa" },
{ name: "Dessie",             country: "ET", lat: 11.133, lon: 39.633,  tz: "Africa/Addis_Ababa" },
{ name: "Jijiga",             country: "ET", lat:  9.350, lon: 42.800,  tz: "Africa/Addis_Ababa" },
{ name: "Mekelle",            country: "ET", lat: 13.497, lon: 39.476,  tz: "Africa/Addis_Ababa" },
{ name: "Gondar",             country: "ET", lat: 12.603, lon: 37.467,  tz: "Africa/Addis_Ababa" },
{ name: "Bahir Dar",          country: "ET", lat: 11.594, lon: 37.390,  tz: "Africa/Addis_Ababa" },
{ name: "Awasa",              country: "ET", lat:  7.046, lon: 38.477,  tz: "Africa/Addis_Ababa" },
{ name: "Adama",              country: "ET", lat:  8.541, lon: 39.270,  tz: "Africa/Addis_Ababa" },
{ name: "Nekemte",            country: "ET", lat:  9.088, lon: 36.548,  tz: "Africa/Addis_Ababa" },

// ── Tanzania ──────────────────────────────────────────────
{ name: "Dar es Salaam",      country: "TZ", lat: -6.800, lon: 39.283,  tz: "Africa/Dar_es_Salaam" },
{ name: "Zanzibar",           country: "TZ", lat: -6.165, lon: 39.200,  tz: "Africa/Dar_es_Salaam" },
{ name: "Mwanza",             country: "TZ", lat: -2.516, lon: 32.900,  tz: "Africa/Dar_es_Salaam" },
{ name: "Dodoma",             country: "TZ", lat: -6.173, lon: 35.739,  tz: "Africa/Dar_es_Salaam" },
{ name: "Moshi",              country: "TZ", lat: -3.350, lon: 37.333,  tz: "Africa/Dar_es_Salaam" },
{ name: "Tanga",              country: "TZ", lat: -5.069, lon: 39.099,  tz: "Africa/Dar_es_Salaam" },
{ name: "Morogoro",           country: "TZ", lat: -6.821, lon: 37.661,  tz: "Africa/Dar_es_Salaam" },
{ name: "Arusha",             country: "TZ", lat: -3.367, lon: 36.683,  tz: "Africa/Dar_es_Salaam" },
{ name: "Mbeya",              country: "TZ", lat: -8.900, lon: 33.450,  tz: "Africa/Dar_es_Salaam" },
{ name: "Tabora",             country: "TZ", lat: -5.017, lon: 32.800,  tz: "Africa/Dar_es_Salaam" },
{ name: "Kigoma",             country: "TZ", lat: -4.883, lon: 29.633,  tz: "Africa/Dar_es_Salaam" },
{ name: "Lindi",              country: "TZ", lat: -9.997, lon: 39.716,  tz: "Africa/Dar_es_Salaam" },
{ name: "Mtwara",             country: "TZ", lat: -10.267, lon: 40.183, tz: "Africa/Dar_es_Salaam" },

// ── Kenya ─────────────────────────────────────────────────
{ name: "Nairobi",            country: "KE", lat: -1.286, lon: 36.820,  tz: "Africa/Nairobi" },
{ name: "Mombasa",            country: "KE", lat: -4.043, lon: 39.668,  tz: "Africa/Nairobi" },
{ name: "Kisumu",             country: "KE", lat: -0.102, lon: 34.762,  tz: "Africa/Nairobi" },
{ name: "Malindi",            country: "KE", lat: -3.218, lon: 40.117,  tz: "Africa/Nairobi" },
{ name: "Nakuru",             country: "KE", lat: -0.303, lon: 36.080,  tz: "Africa/Nairobi" },
{ name: "Eldoret",            country: "KE", lat:  0.520, lon: 35.270,  tz: "Africa/Nairobi" },
{ name: "Garissa",            country: "KE", lat: -0.453, lon: 39.646,  tz: "Africa/Nairobi" },
{ name: "Lamu",               country: "KE", lat: -2.271, lon: 40.902,  tz: "Africa/Nairobi" },
{ name: "Wajir",              country: "KE", lat:  1.747, lon: 40.057,  tz: "Africa/Nairobi" },

// ── Senegal ───────────────────────────────────────────────
{ name: "Dakar",              country: "SN", lat: 14.693, lon: -17.448, tz: "Africa/Dakar" },
{ name: "Touba",              country: "SN", lat: 14.853, lon: -15.883, tz: "Africa/Dakar" },
{ name: "Thiès",              country: "SN", lat: 14.791, lon: -16.926, tz: "Africa/Dakar" },
{ name: "Kaolack",            country: "SN", lat: 14.152, lon: -16.072, tz: "Africa/Dakar" },
{ name: "Ziguinchor",         country: "SN", lat: 12.565, lon: -16.272, tz: "Africa/Dakar" },
{ name: "Saint-Louis",        country: "SN", lat: 16.018, lon: -16.490, tz: "Africa/Dakar" },
{ name: "Diourbel",           country: "SN", lat: 14.655, lon: -16.229, tz: "Africa/Dakar" },
{ name: "Tambacounda",        country: "SN", lat: 13.771, lon: -13.668, tz: "Africa/Dakar" },
{ name: "Kolda",              country: "SN", lat: 12.898, lon: -14.940, tz: "Africa/Dakar" },

// ── Somalia ───────────────────────────────────────────────
{ name: "Mogadishu",          country: "SO", lat:  2.046, lon: 45.341,  tz: "Africa/Mogadishu" },
{ name: "Hargeisa",           country: "SO", lat:  9.560, lon: 44.065,  tz: "Africa/Mogadishu" },
{ name: "Kismaayo",           country: "SO", lat: -0.358, lon: 42.545,  tz: "Africa/Mogadishu" },
{ name: "Bosaso",             country: "SO", lat: 11.284, lon: 49.183,  tz: "Africa/Mogadishu" },
{ name: "Berbera",            country: "SO", lat: 10.439, lon: 45.014,  tz: "Africa/Mogadishu" },
{ name: "Merca",              country: "SO", lat:  1.709, lon: 44.772,  tz: "Africa/Mogadishu" },
{ name: "Baidoa",             country: "SO", lat:  3.108, lon: 43.648,  tz: "Africa/Mogadishu" },
{ name: "Garowe",             country: "SO", lat:  8.405, lon: 48.484,  tz: "Africa/Mogadishu" },
{ name: "Beledweyne",         country: "SO", lat:  4.735, lon: 45.203,  tz: "Africa/Mogadishu" },

// ── Jordan ────────────────────────────────────────────────
{ name: "Amman",              country: "JO", lat: 31.963, lon: 35.930,  tz: "Asia/Amman" },
{ name: "Zarqa",              country: "JO", lat: 32.073, lon: 36.088,  tz: "Asia/Amman" },
{ name: "Irbid",              country: "JO", lat: 32.550, lon: 35.851,  tz: "Asia/Amman" },
{ name: "Aqaba",              country: "JO", lat: 29.532, lon: 35.006,  tz: "Asia/Amman" },
{ name: "Mafraq",             country: "JO", lat: 32.343, lon: 36.208,  tz: "Asia/Amman" },
{ name: "Salt",               country: "JO", lat: 32.034, lon: 35.727,  tz: "Asia/Amman" },
{ name: "Russeifa",           country: "JO", lat: 32.012, lon: 36.044,  tz: "Asia/Amman" },
{ name: "Jerash",             country: "JO", lat: 32.271, lon: 35.900,  tz: "Asia/Amman" },
{ name: "Madaba",             country: "JO", lat: 31.717, lon: 35.793,  tz: "Asia/Amman" },

// ── Syria ─────────────────────────────────────────────────
{ name: "Damascus",           country: "SY", lat: 33.510, lon: 36.291,  tz: "Asia/Damascus" },
{ name: "Aleppo",             country: "SY", lat: 36.202, lon: 37.161,  tz: "Asia/Damascus" },
{ name: "Homs",               country: "SY", lat: 34.727, lon: 36.710,  tz: "Asia/Damascus" },
{ name: "Hama",               country: "SY", lat: 35.130, lon: 36.757,  tz: "Asia/Damascus" },
{ name: "Latakia",            country: "SY", lat: 35.524, lon: 35.791,  tz: "Asia/Damascus" },
{ name: "Deir ez-Zor",        country: "SY", lat: 35.336, lon: 40.139,  tz: "Asia/Damascus" },
{ name: "Al-Hasakah",         country: "SY", lat: 36.480, lon: 40.750,  tz: "Asia/Damascus" },
{ name: "Ar-Raqqah",          country: "SY", lat: 35.952, lon: 39.010,  tz: "Asia/Damascus" },
{ name: "Tartus",             country: "SY", lat: 34.889, lon: 35.887,  tz: "Asia/Damascus" },
{ name: "Idlib",              country: "SY", lat: 35.930, lon: 36.634,  tz: "Asia/Damascus" },
{ name: "Daraa",              country: "SY", lat: 32.625, lon: 36.104,  tz: "Asia/Damascus" },

// ── Tunisia ───────────────────────────────────────────────
{ name: "Tunis",              country: "TN", lat: 36.819, lon: 10.166,  tz: "Africa/Tunis" },
{ name: "Sfax",               country: "TN", lat: 34.740, lon: 10.760,  tz: "Africa/Tunis" },
{ name: "Sousse",             country: "TN", lat: 35.828, lon: 10.640,  tz: "Africa/Tunis" },
{ name: "Kairouan",           country: "TN", lat: 35.678, lon:  9.960,  tz: "Africa/Tunis" },
{ name: "Bizerte",            country: "TN", lat: 37.274, lon:  9.873,  tz: "Africa/Tunis" },
{ name: "Gabes",              country: "TN", lat: 33.881, lon: 10.097,  tz: "Africa/Tunis" },
{ name: "Ariana",             country: "TN", lat: 36.862, lon: 10.194,  tz: "Africa/Tunis" },
{ name: "Gafsa",              country: "TN", lat: 34.425, lon:  8.784,  tz: "Africa/Tunis" },
{ name: "Monastir",           country: "TN", lat: 35.778, lon: 10.826,  tz: "Africa/Tunis" },
{ name: "Ben Arous",          country: "TN", lat: 36.753, lon: 10.218,  tz: "Africa/Tunis" },
{ name: "Nabeul",             country: "TN", lat: 36.455, lon: 10.735,  tz: "Africa/Tunis" },
{ name: "Mahdia",             country: "TN", lat: 35.505, lon: 11.062,  tz: "Africa/Tunis" },

// ── Libya ─────────────────────────────────────────────────
{ name: "Tripoli",            country: "LY", lat: 32.902, lon: 13.180,  tz: "Africa/Tripoli" },
{ name: "Benghazi",           country: "LY", lat: 32.115, lon: 20.068,  tz: "Africa/Tripoli" },
{ name: "Misrata",            country: "LY", lat: 32.375, lon: 15.093,  tz: "Africa/Tripoli" },
{ name: "Tobruk",             country: "LY", lat: 32.076, lon: 23.975,  tz: "Africa/Tripoli" },
{ name: "Sabha",              country: "LY", lat: 27.037, lon: 14.429,  tz: "Africa/Tripoli" },
{ name: "Zliten",             country: "LY", lat: 32.467, lon: 14.567,  tz: "Africa/Tripoli" },
{ name: "Zawiya",             country: "LY", lat: 32.752, lon: 12.727,  tz: "Africa/Tripoli" },
{ name: "Al Khums",           country: "LY", lat: 32.648, lon: 14.261,  tz: "Africa/Tripoli" },
{ name: "Derna",              country: "LY", lat: 32.757, lon: 22.639,  tz: "Africa/Tripoli" },

// ── Yemen ─────────────────────────────────────────────────
{ name: "Sanaa",              country: "YE", lat: 15.369, lon: 44.191,  tz: "Asia/Aden" },
{ name: "Aden",               country: "YE", lat: 12.779, lon: 45.036,  tz: "Asia/Aden" },
{ name: "Taiz",               country: "YE", lat: 13.578, lon: 44.017,  tz: "Asia/Aden" },
{ name: "Hodeidah",           country: "YE", lat: 14.798, lon: 42.955,  tz: "Asia/Aden" },
{ name: "Mukalla",            country: "YE", lat: 14.542, lon: 49.130,  tz: "Asia/Aden" },
{ name: "Ibb",                country: "YE", lat: 13.967, lon: 44.167,  tz: "Asia/Aden" },
{ name: "Dhamar",             country: "YE", lat: 14.542, lon: 44.404,  tz: "Asia/Aden" },
{ name: "Marib",              country: "YE", lat: 15.470, lon: 45.325,  tz: "Asia/Aden" },
{ name: "Saada",              country: "YE", lat: 16.940, lon: 43.761,  tz: "Asia/Aden" },
{ name: "Zinjibar",           country: "YE", lat: 13.127, lon: 45.381,  tz: "Asia/Aden" },
{ name: "Hajjah",             country: "YE", lat: 15.693, lon: 43.603,  tz: "Asia/Aden" },
{ name: "Amran",              country: "YE", lat: 15.659, lon: 43.943,  tz: "Asia/Aden" },
{ name: "Bajil",              country: "YE", lat: 15.058, lon: 43.294,  tz: "Asia/Aden" },

// ── Uzbekistan ────────────────────────────────────────────
{ name: "Tashkent",           country: "UZ", lat: 41.299, lon: 69.240,  tz: "Asia/Tashkent" },
{ name: "Samarkand",          country: "UZ", lat: 39.655, lon: 66.976,  tz: "Asia/Samarkand" },
{ name: "Namangan",           country: "UZ", lat: 41.000, lon: 71.667,  tz: "Asia/Tashkent" },
{ name: "Andijan",            country: "UZ", lat: 40.783, lon: 72.344,  tz: "Asia/Tashkent" },
{ name: "Bukhara",            country: "UZ", lat: 39.774, lon: 64.429,  tz: "Asia/Samarkand" },
{ name: "Fergana",            country: "UZ", lat: 40.384, lon: 71.781,  tz: "Asia/Tashkent" },
{ name: "Nukus",              country: "UZ", lat: 42.460, lon: 59.610,  tz: "Asia/Samarkand" },
{ name: "Qarshi",             country: "UZ", lat: 38.861, lon: 65.789,  tz: "Asia/Samarkand" },
{ name: "Termiz",             country: "UZ", lat: 37.224, lon: 67.278,  tz: "Asia/Samarkand" },
{ name: "Jizzakh",            country: "UZ", lat: 40.119, lon: 67.842,  tz: "Asia/Tashkent" },
{ name: "Navoi",              country: "UZ", lat: 40.084, lon: 65.379,  tz: "Asia/Samarkand" },
{ name: "Chirchiq",           country: "UZ", lat: 41.469, lon: 69.582,  tz: "Asia/Tashkent" },
{ name: "Angren",             country: "UZ", lat: 41.017, lon: 70.143,  tz: "Asia/Tashkent" },

// ── Kazakhstan ────────────────────────────────────────────
{ name: "Almaty",             country: "KZ", lat: 43.258, lon: 76.944,  tz: "Asia/Almaty" },
{ name: "Shymkent",           country: "KZ", lat: 42.318, lon: 69.587,  tz: "Asia/Almaty" },
{ name: "Astana",             country: "KZ", lat: 51.180, lon: 71.446,  tz: "Asia/Almaty" },
{ name: "Aktobe",             country: "KZ", lat: 50.300, lon: 57.167,  tz: "Asia/Aqtobe" },
{ name: "Taraz",              country: "KZ", lat: 42.900, lon: 71.367,  tz: "Asia/Almaty" },
{ name: "Pavlodar",           country: "KZ", lat: 52.285, lon: 76.940,  tz: "Asia/Almaty" },
{ name: "Karaganda",          country: "KZ", lat: 49.807, lon: 73.088,  tz: "Asia/Almaty" },
{ name: "Atyrau",             country: "KZ", lat: 47.107, lon: 51.921,  tz: "Asia/Aqtau" },
{ name: "Kostanay",           country: "KZ", lat: 53.214, lon: 63.628,  tz: "Asia/Almaty" },
{ name: "Semey",              country: "KZ", lat: 50.411, lon: 80.227,  tz: "Asia/Almaty" },
{ name: "Oral",               country: "KZ", lat: 51.233, lon: 51.367,  tz: "Asia/Oral" },

// ── Azerbaijan ────────────────────────────────────────────
{ name: "Baku",               country: "AZ", lat: 40.409, lon: 49.867,  tz: "Asia/Baku" },
{ name: "Ganja",              country: "AZ", lat: 40.683, lon: 46.360,  tz: "Asia/Baku" },
{ name: "Sumqayit",           country: "AZ", lat: 40.590, lon: 49.669,  tz: "Asia/Baku" },
{ name: "Mingachevir",        country: "AZ", lat: 40.770, lon: 47.049,  tz: "Asia/Baku" },
{ name: "Nakhchivan",         country: "AZ", lat: 39.209, lon: 45.412,  tz: "Asia/Baku" },
{ name: "Lankaran",           country: "AZ", lat: 38.754, lon: 48.851,  tz: "Asia/Baku" },

// ── Kyrgyzstan ────────────────────────────────────────────
{ name: "Bishkek",            country: "KG", lat: 42.870, lon: 74.590,  tz: "Asia/Bishkek" },
{ name: "Osh",                country: "KG", lat: 40.523, lon: 72.816,  tz: "Asia/Bishkek" },
{ name: "Jalal-Abad",         country: "KG", lat: 40.934, lon: 73.000,  tz: "Asia/Bishkek" },
{ name: "Karakol",            country: "KG", lat: 42.490, lon: 78.393,  tz: "Asia/Bishkek" },
{ name: "Tokmok",             country: "KG", lat: 42.836, lon: 75.291,  tz: "Asia/Bishkek" },

// ── Tajikistan ────────────────────────────────────────────
{ name: "Dushanbe",           country: "TJ", lat: 38.559, lon: 68.773,  tz: "Asia/Dushanbe" },
{ name: "Khujand",            country: "TJ", lat: 40.281, lon: 69.622,  tz: "Asia/Dushanbe" },
{ name: "Kulob",              country: "TJ", lat: 37.917, lon: 69.783,  tz: "Asia/Dushanbe" },
{ name: "Qurghonteppa",       country: "TJ", lat: 37.839, lon: 68.779,  tz: "Asia/Dushanbe" },
{ name: "Istaravshan",        country: "TJ", lat: 39.914, lon: 69.003,  tz: "Asia/Dushanbe" },

// ── Turkmenistan ──────────────────────────────────────────
{ name: "Ashgabat",           country: "TM", lat: 37.960, lon: 58.326,  tz: "Asia/Ashgabat" },
{ name: "Turkmenabat",        country: "TM", lat: 39.113, lon: 63.578,  tz: "Asia/Ashgabat" },
{ name: "Dasoguz",            country: "TM", lat: 41.836, lon: 59.966,  tz: "Asia/Ashgabat" },
{ name: "Mary",               country: "TM", lat: 37.593, lon: 61.830,  tz: "Asia/Ashgabat" },
{ name: "Balkanabat",         country: "TM", lat: 39.511, lon: 54.366,  tz: "Asia/Ashgabat" },

// ── India (Muslim population) ─────────────────────────────
{ name: "Mumbai",             country: "IN", lat: 19.076, lon: 72.877,  tz: "Asia/Kolkata" },
{ name: "Delhi",              country: "IN", lat: 28.704, lon: 77.102,  tz: "Asia/Kolkata" },
{ name: "Lucknow",            country: "IN", lat: 26.846, lon: 80.946,  tz: "Asia/Kolkata" },
{ name: "Aligarh",            country: "IN", lat: 27.882, lon: 78.082,  tz: "Asia/Kolkata" },
{ name: "Bhopal",             country: "IN", lat: 23.259, lon: 77.412,  tz: "Asia/Kolkata" },
{ name: "Srinagar",           country: "IN", lat: 34.086, lon: 74.797,  tz: "Asia/Kolkata" },
{ name: "Kozhikode",          country: "IN", lat: 11.258, lon: 75.780,  tz: "Asia/Kolkata" },
{ name: "Moradabad",          country: "IN", lat: 28.839, lon: 78.776,  tz: "Asia/Kolkata" },
{ name: "Meerut",             country: "IN", lat: 28.984, lon: 77.706,  tz: "Asia/Kolkata" },
{ name: "Agra",               country: "IN", lat: 27.176, lon: 78.008,  tz: "Asia/Kolkata" },
{ name: "Varanasi",           country: "IN", lat: 25.317, lon: 82.974,  tz: "Asia/Kolkata" },
{ name: "Patna",              country: "IN", lat: 25.594, lon: 85.138,  tz: "Asia/Kolkata" },
{ name: "Kolkata",            country: "IN", lat: 22.572, lon: 88.364,  tz: "Asia/Kolkata" },
{ name: "Bangalore",          country: "IN", lat: 12.972, lon: 77.594,  tz: "Asia/Kolkata" },
{ name: "Malappuram",         country: "IN", lat: 11.041, lon: 76.081,  tz: "Asia/Kolkata" },
{ name: "Jammu",              country: "IN", lat: 32.726, lon: 74.857,  tz: "Asia/Kolkata" },
{ name: "Kanpur",             country: "IN", lat: 26.449, lon: 80.331,  tz: "Asia/Kolkata" },
{ name: "Rampur",             country: "IN", lat: 28.797, lon: 79.004,  tz: "Asia/Kolkata" },
{ name: "Saharanpur",         country: "IN", lat: 29.968, lon: 77.546,  tz: "Asia/Kolkata" },
{ name: "Azamgarh",           country: "IN", lat: 26.067, lon: 83.183,  tz: "Asia/Kolkata" },
{ name: "Muzaffarnagar",      country: "IN", lat: 29.472, lon: 77.703,  tz: "Asia/Kolkata" },
{ name: "Bareilly",           country: "IN", lat: 28.364, lon: 79.415,  tz: "Asia/Kolkata" },
{ name: "Thrissur",           country: "IN", lat: 10.527, lon: 76.214,  tz: "Asia/Kolkata" },
{ name: "Malegaon",           country: "IN", lat: 20.558, lon: 74.530,  tz: "Asia/Kolkata" },
{ name: "Aurangabad",         country: "IN", lat: 19.877, lon: 75.343,  tz: "Asia/Kolkata" },
{ name: "Bijapur",            country: "IN", lat: 16.834, lon: 75.721,  tz: "Asia/Kolkata" },
{ name: "Murshidabad",        country: "IN", lat: 24.185, lon: 88.269,  tz: "Asia/Kolkata" },
{ name: "Malda",              country: "IN", lat: 25.012, lon: 88.138,  tz: "Asia/Kolkata" },

// ── Lebanon ───────────────────────────────────────────────
{ name: "Beirut",             country: "LB", lat: 33.889, lon: 35.495,  tz: "Asia/Beirut" },
{ name: "Sidon",              country: "LB", lat: 33.563, lon: 35.370,  tz: "Asia/Beirut" },
{ name: "Tyre",               country: "LB", lat: 33.271, lon: 35.194,  tz: "Asia/Beirut" },
{ name: "Zahle",              country: "LB", lat: 33.847, lon: 35.903,  tz: "Asia/Beirut" },
{ name: "Baalbek",            country: "LB", lat: 34.004, lon: 36.210,  tz: "Asia/Beirut" },

// ── Kuwait ────────────────────────────────────────────────
{ name: "Kuwait City",        country: "KW", lat: 29.375, lon: 47.980,  tz: "Asia/Kuwait" },
{ name: "Al Ahmadi",          country: "KW", lat: 29.077, lon: 48.084,  tz: "Asia/Kuwait" },
{ name: "Hawalli",            country: "KW", lat: 29.336, lon: 48.032,  tz: "Asia/Kuwait" },
{ name: "Farwaniya",          country: "KW", lat: 29.277, lon: 47.959,  tz: "Asia/Kuwait" },

// ── Qatar ─────────────────────────────────────────────────
{ name: "Doha",               country: "QA", lat: 25.286, lon: 51.533,  tz: "Asia/Qatar" },
{ name: "Al Rayyan",          country: "QA", lat: 25.292, lon: 51.424,  tz: "Asia/Qatar" },
{ name: "Al Wakrah",          country: "QA", lat: 25.166, lon: 51.601,  tz: "Asia/Qatar" },
{ name: "Al Khor",            country: "QA", lat: 25.683, lon: 51.500,  tz: "Asia/Qatar" },

// ── Bahrain ───────────────────────────────────────────────
{ name: "Manama",             country: "BH", lat: 26.215, lon: 50.586,  tz: "Asia/Bahrain" },
{ name: "Riffa",              country: "BH", lat: 26.129, lon: 50.555,  tz: "Asia/Bahrain" },
{ name: "Muharraq",           country: "BH", lat: 26.258, lon: 50.608,  tz: "Asia/Bahrain" },

// ── Oman ──────────────────────────────────────────────────
{ name: "Muscat",             country: "OM", lat: 23.614, lon: 58.594,  tz: "Asia/Muscat" },
{ name: "Salalah",            country: "OM", lat: 17.019, lon: 54.090,  tz: "Asia/Muscat" },
{ name: "Sohar",              country: "OM", lat: 24.347, lon: 56.746,  tz: "Asia/Muscat" },
{ name: "Nizwa",              country: "OM", lat: 22.933, lon: 57.533,  tz: "Asia/Muscat" },
{ name: "Sur",                country: "OM", lat: 22.567, lon: 59.529,  tz: "Asia/Muscat" },
{ name: "Ibra",               country: "OM", lat: 22.690, lon: 58.531,  tz: "Asia/Muscat" },
{ name: "Buraimi",            country: "OM", lat: 24.258, lon: 55.789,  tz: "Asia/Muscat" },
{ name: "Khasab",             country: "OM", lat: 26.196, lon: 56.244,  tz: "Asia/Muscat" },

// ── Palestine ─────────────────────────────────────────────
{ name: "Gaza",               country: "PS", lat: 31.525, lon: 34.447,  tz: "Asia/Gaza" },
{ name: "Ramallah",           country: "PS", lat: 31.903, lon: 35.206,  tz: "Asia/Hebron" },
{ name: "Nablus",             country: "PS", lat: 32.221, lon: 35.260,  tz: "Asia/Hebron" },
{ name: "Hebron",             country: "PS", lat: 31.530, lon: 35.095,  tz: "Asia/Hebron" },
{ name: "Jenin",              country: "PS", lat: 32.460, lon: 35.300,  tz: "Asia/Hebron" },
{ name: "Khan Yunis",         country: "PS", lat: 31.344, lon: 34.303,  tz: "Asia/Gaza" },
{ name: "Rafah",              country: "PS", lat: 31.297, lon: 34.252,  tz: "Asia/Gaza" },
{ name: "Tulkarm",            country: "PS", lat: 32.310, lon: 35.028,  tz: "Asia/Hebron" },
{ name: "Qalqilya",           country: "PS", lat: 32.189, lon: 34.970,  tz: "Asia/Hebron" },

// ── Mali ──────────────────────────────────────────────────
{ name: "Bamako",             country: "ML", lat: 12.650, lon: -8.000,  tz: "Africa/Bamako" },
{ name: "Timbuktu",           country: "ML", lat: 16.773, lon: -3.009,  tz: "Africa/Bamako" },
{ name: "Segou",              country: "ML", lat: 13.450, lon: -6.267,  tz: "Africa/Bamako" },
{ name: "Mopti",              country: "ML", lat: 14.483, lon: -4.183,  tz: "Africa/Bamako" },
{ name: "Sikasso",            country: "ML", lat: 11.317, lon: -5.667,  tz: "Africa/Bamako" },
{ name: "Kayes",              country: "ML", lat: 14.447, lon: -11.440, tz: "Africa/Bamako" },
{ name: "Koutiala",           country: "ML", lat: 12.383, lon: -5.467,  tz: "Africa/Bamako" },
{ name: "Gao",                country: "ML", lat: 16.267, lon: -0.040,  tz: "Africa/Bamako" },
{ name: "Kidal",              country: "ML", lat: 18.441, lon:  1.408,  tz: "Africa/Bamako" },

// ── Niger ─────────────────────────────────────────────────
{ name: "Niamey",             country: "NE", lat: 13.513, lon:  2.113,  tz: "Africa/Niamey" },
{ name: "Zinder",             country: "NE", lat: 13.800, lon:  8.983,  tz: "Africa/Niamey" },
{ name: "Maradi",             country: "NE", lat: 13.500, lon:  7.100,  tz: "Africa/Niamey" },
{ name: "Agadez",             country: "NE", lat: 16.967, lon:  7.983,  tz: "Africa/Niamey" },
{ name: "Tahoua",             country: "NE", lat: 14.889, lon:  5.264,  tz: "Africa/Niamey" },
{ name: "Dosso",              country: "NE", lat: 13.050, lon:  3.200,  tz: "Africa/Niamey" },
{ name: "Diffa",              country: "NE", lat: 13.317, lon: 12.617,  tz: "Africa/Niamey" },
{ name: "Tillabéri",          country: "NE", lat: 14.212, lon:  1.451,  tz: "Africa/Niamey" },

// ── Burkina Faso ──────────────────────────────────────────
{ name: "Ouagadougou",        country: "BF", lat: 12.366, lon: -1.533,  tz: "Africa/Ouagadougou" },
{ name: "Bobo-Dioulasso",     country: "BF", lat: 11.177, lon: -4.297,  tz: "Africa/Ouagadougou" },
{ name: "Koudougou",          country: "BF", lat: 12.250, lon: -2.367,  tz: "Africa/Ouagadougou" },
{ name: "Ouahigouya",         country: "BF", lat: 13.573, lon: -2.420,  tz: "Africa/Ouagadougou" },
{ name: "Banfora",            country: "BF", lat: 10.633, lon: -4.767,  tz: "Africa/Ouagadougou" },
{ name: "Kaya",               country: "BF", lat: 13.099, lon: -1.083,  tz: "Africa/Ouagadougou" },
{ name: "Dedougou",           country: "BF", lat: 12.461, lon: -3.462,  tz: "Africa/Ouagadougou" },

// ── Chad ──────────────────────────────────────────────────
{ name: "N'Djamena",          country: "TD", lat: 12.107, lon: 15.044,  tz: "Africa/Ndjamena" },
{ name: "Moundou",            country: "TD", lat:  8.567, lon: 16.083,  tz: "Africa/Ndjamena" },
{ name: "Sarh",               country: "TD", lat:  9.150, lon: 18.383,  tz: "Africa/Ndjamena" },
{ name: "Abeche",             country: "TD", lat: 13.833, lon: 20.833,  tz: "Africa/Ndjamena" },
{ name: "Kelo",               country: "TD", lat:  9.305, lon: 15.807,  tz: "Africa/Ndjamena" },
{ name: "Mongo",              country: "TD", lat: 12.183, lon: 18.700,  tz: "Africa/Ndjamena" },
{ name: "Bol",                country: "TD", lat: 13.467, lon: 14.717,  tz: "Africa/Ndjamena" },

// ── Mauritania ────────────────────────────────────────────
{ name: "Nouakchott",         country: "MR", lat: 18.079, lon: -15.965, tz: "Africa/Nouakchott" },
{ name: "Nouadhibou",         country: "MR", lat: 20.931, lon: -17.034, tz: "Africa/Nouakchott" },
{ name: "Rosso",              country: "MR", lat: 16.513, lon: -15.805, tz: "Africa/Nouakchott" },
{ name: "Kaédi",              country: "MR", lat: 16.150, lon: -13.500, tz: "Africa/Nouakchott" },
{ name: "Kiffa",              country: "MR", lat: 16.622, lon: -11.406, tz: "Africa/Nouakchott" },

// ── Guinea ────────────────────────────────────────────────
{ name: "Conakry",            country: "GN", lat:  9.538, lon: -13.677, tz: "Africa/Conakry" },
{ name: "Kankan",             country: "GN", lat: 10.383, lon: -9.300,  tz: "Africa/Conakry" },
{ name: "Nzerekore",          country: "GN", lat:  7.756, lon: -8.818,  tz: "Africa/Conakry" },
{ name: "Kindia",             country: "GN", lat: 10.065, lon: -12.866, tz: "Africa/Conakry" },
{ name: "Labé",               country: "GN", lat: 11.317, lon: -12.283, tz: "Africa/Conakry" },
{ name: "Mamou",              country: "GN", lat: 10.374, lon: -12.087, tz: "Africa/Conakry" },

// ── Sierra Leone ──────────────────────────────────────────
{ name: "Freetown",           country: "SL", lat:  8.484, lon: -13.234, tz: "Africa/Freetown" },
{ name: "Bo",                 country: "SL", lat:  7.967, lon: -11.733, tz: "Africa/Freetown" },
{ name: "Kenema",             country: "SL", lat:  7.876, lon: -11.190, tz: "Africa/Freetown" },
{ name: "Makeni",             country: "SL", lat:  8.887, lon: -12.045, tz: "Africa/Freetown" },

// ── Gambia ────────────────────────────────────────────────
{ name: "Banjul",             country: "GM", lat: 13.454, lon: -16.579, tz: "Africa/Banjul" },
{ name: "Serekunda",          country: "GM", lat: 13.438, lon: -16.712, tz: "Africa/Banjul" },
{ name: "Brikama",            country: "GM", lat: 13.270, lon: -16.650, tz: "Africa/Banjul" },

// ── Guinea-Bissau ─────────────────────────────────────────
{ name: "Bissau",             country: "GW", lat: 11.863, lon: -15.598, tz: "Africa/Bissau" },
{ name: "Bafata",             country: "GW", lat: 12.173, lon: -14.656, tz: "Africa/Bissau" },

// ── Djibouti ──────────────────────────────────────────────
{ name: "Djibouti City",      country: "DJ", lat: 11.589, lon: 43.145,  tz: "Africa/Djibouti" },
{ name: "Ali Sabieh",         country: "DJ", lat: 11.155, lon: 42.713,  tz: "Africa/Djibouti" },

// ── Comoros ───────────────────────────────────────────────
{ name: "Moroni",             country: "KM", lat: -11.702, lon: 43.255, tz: "Indian/Comoro" },
{ name: "Mutsamudu",          country: "KM", lat: -12.167, lon: 44.400, tz: "Indian/Comoro" },

// ── Eritrea ───────────────────────────────────────────────
{ name: "Asmara",             country: "ER", lat: 15.338, lon: 38.931,  tz: "Africa/Asmara" },
{ name: "Keren",              country: "ER", lat: 15.775, lon: 38.455,  tz: "Africa/Asmara" },
{ name: "Massawa",            country: "ER", lat: 15.608, lon: 39.451,  tz: "Africa/Asmara" },
{ name: "Assab",              country: "ER", lat: 13.006, lon: 42.730,  tz: "Africa/Asmara" },

// ── Mozambique ────────────────────────────────────────────
{ name: "Maputo",             country: "MZ", lat: -25.966, lon: 32.589, tz: "Africa/Maputo" },
{ name: "Nampula",            country: "MZ", lat: -15.117, lon: 39.267, tz: "Africa/Maputo" },
{ name: "Beira",              country: "MZ", lat: -19.833, lon: 34.850, tz: "Africa/Maputo" },
{ name: "Quelimane",          country: "MZ", lat: -17.878, lon: 36.889, tz: "Africa/Maputo" },
{ name: "Pemba",              country: "MZ", lat: -12.969, lon: 40.518, tz: "Africa/Maputo" },
{ name: "Tete",               country: "MZ", lat: -16.156, lon: 33.587, tz: "Africa/Maputo" },
{ name: "Nacala",             country: "MZ", lat: -14.542, lon: 40.674, tz: "Africa/Maputo" },

// ── Uganda ────────────────────────────────────────────────
{ name: "Kampala",            country: "UG", lat:  0.347, lon: 32.583,  tz: "Africa/Kampala" },
{ name: "Gulu",               country: "UG", lat:  2.774, lon: 32.299,  tz: "Africa/Kampala" },
{ name: "Lira",               country: "UG", lat:  2.250, lon: 32.900,  tz: "Africa/Kampala" },
{ name: "Mbarara",            country: "UG", lat: -0.607, lon: 30.659,  tz: "Africa/Kampala" },
{ name: "Jinja",              country: "UG", lat:  0.424, lon: 33.201,  tz: "Africa/Kampala" },

// ── Ghana ─────────────────────────────────────────────────
{ name: "Accra",              country: "GH", lat:  5.556, lon: -0.197,  tz: "Africa/Accra" },
{ name: "Kumasi",             country: "GH", lat:  6.688, lon: -1.624,  tz: "Africa/Accra" },
{ name: "Tamale",             country: "GH", lat:  9.401, lon: -0.839,  tz: "Africa/Accra" },
{ name: "Wa",                 country: "GH", lat: 10.060, lon: -2.501,  tz: "Africa/Accra" },
{ name: "Techiman",           country: "GH", lat:  7.590, lon: -1.934,  tz: "Africa/Accra" },
{ name: "Salaga",             country: "GH", lat:  8.550, lon: -0.517,  tz: "Africa/Accra" },

// ── Ivory Coast ───────────────────────────────────────────
{ name: "Abidjan",            country: "CI", lat:  5.345, lon: -4.025,  tz: "Africa/Abidjan" },
{ name: "Bouaké",             country: "CI", lat:  7.693, lon: -5.030,  tz: "Africa/Abidjan" },
{ name: "Korhogo",            country: "CI", lat:  9.458, lon: -5.629,  tz: "Africa/Abidjan" },
{ name: "Man",                country: "CI", lat:  7.412, lon: -7.554,  tz: "Africa/Abidjan" },
{ name: "Daloa",              country: "CI", lat:  6.877, lon: -6.451,  tz: "Africa/Abidjan" },
{ name: "San Pedro",          country: "CI", lat:  4.748, lon: -6.636,  tz: "Africa/Abidjan" },

// ── Togo ──────────────────────────────────────────────────
{ name: "Lomé",               country: "TG", lat:  6.137, lon:  1.212,  tz: "Africa/Lome" },
{ name: "Sokodé",             country: "TG", lat:  8.983, lon:  1.133,  tz: "Africa/Lome" },
{ name: "Kara",               country: "TG", lat:  9.551, lon:  1.186,  tz: "Africa/Lome" },
{ name: "Dapaong",            country: "TG", lat: 10.864, lon:  0.206,  tz: "Africa/Lome" },

// ── Benin ─────────────────────────────────────────────────
{ name: "Cotonou",            country: "BJ", lat:  6.369, lon:  2.418,  tz: "Africa/Porto-Novo" },
{ name: "Parakou",            country: "BJ", lat:  9.337, lon:  2.628,  tz: "Africa/Porto-Novo" },
{ name: "Djougou",            country: "BJ", lat:  9.708, lon:  1.666,  tz: "Africa/Porto-Novo" },
{ name: "Natitingou",         country: "BJ", lat: 10.305, lon:  1.378,  tz: "Africa/Porto-Novo" },
{ name: "Kandi",              country: "BJ", lat: 11.134, lon:  2.939,  tz: "Africa/Porto-Novo" },

// ── Cameroon ──────────────────────────────────────────────
{ name: "Yaoundé",            country: "CM", lat:  3.867, lon: 11.517,  tz: "Africa/Douala" },
{ name: "Douala",             country: "CM", lat:  4.061, lon:  9.698,  tz: "Africa/Douala" },
{ name: "Garoua",             country: "CM", lat:  9.300, lon: 13.400,  tz: "Africa/Douala" },
{ name: "Maroua",             country: "CM", lat: 10.591, lon: 14.316,  tz: "Africa/Douala" },
{ name: "Ngaoundéré",         country: "CM", lat:  7.317, lon: 13.583,  tz: "Africa/Douala" },
{ name: "Bamenda",            country: "CM", lat:  5.960, lon: 10.145,  tz: "Africa/Douala" },
{ name: "Bafoussam",          country: "CM", lat:  5.478, lon: 10.418,  tz: "Africa/Douala" },
{ name: "Mora",               country: "CM", lat: 11.046, lon: 14.137,  tz: "Africa/Douala" },

// ── Albania ───────────────────────────────────────────────
{ name: "Tirana",             country: "AL", lat: 41.328, lon: 19.817,  tz: "Europe/Tirane" },
{ name: "Durrës",             country: "AL", lat: 41.323, lon: 19.456,  tz: "Europe/Tirane" },
{ name: "Elbasan",            country: "AL", lat: 41.113, lon: 20.082,  tz: "Europe/Tirane" },
{ name: "Shkodër",            country: "AL", lat: 42.068, lon: 19.503,  tz: "Europe/Tirane" },
{ name: "Vlorë",              country: "AL", lat: 40.467, lon: 19.483,  tz: "Europe/Tirane" },

// ── Bosnia ────────────────────────────────────────────────
{ name: "Sarajevo",           country: "BA", lat: 43.848, lon: 18.356,  tz: "Europe/Sarajevo" },
{ name: "Banja Luka",         country: "BA", lat: 44.775, lon: 17.194,  tz: "Europe/Sarajevo" },
{ name: "Tuzla",              country: "BA", lat: 44.538, lon: 18.673,  tz: "Europe/Sarajevo" },
{ name: "Zenica",             country: "BA", lat: 44.201, lon: 17.908,  tz: "Europe/Sarajevo" },
{ name: "Mostar",             country: "BA", lat: 43.343, lon: 17.808,  tz: "Europe/Sarajevo" },
{ name: "Bihaç",              country: "BA", lat: 44.817, lon: 15.867,  tz: "Europe/Sarajevo" },

// ── Kosovo ────────────────────────────────────────────────
{ name: "Pristina",           country: "XK", lat: 42.662, lon: 21.166,  tz: "Europe/Belgrade" },
{ name: "Prizren",            country: "XK", lat: 42.213, lon: 20.745,  tz: "Europe/Belgrade" },
{ name: "Peja",               country: "XK", lat: 42.660, lon: 20.290,  tz: "Europe/Belgrade" },
{ name: "Gjakova",            country: "XK", lat: 42.388, lon: 20.429,  tz: "Europe/Belgrade" },

// ── North Macedonia ───────────────────────────────────────
{ name: "Skopje",             country: "MK", lat: 41.997, lon: 21.431,  tz: "Europe/Skopje" },
{ name: "Tetovo",             country: "MK", lat: 42.010, lon: 20.971,  tz: "Europe/Skopje" },
{ name: "Gostivar",           country: "MK", lat: 41.796, lon: 20.909,  tz: "Europe/Skopje" },

// ── Maldives ──────────────────────────────────────────────
{ name: "Malé",               country: "MV", lat:  4.175, lon: 73.509,  tz: "Indian/Maldives" },
{ name: "Addu City",          country: "MV", lat: -0.630, lon: 73.158,  tz: "Indian/Maldives" },

// ── Brunei ────────────────────────────────────────────────
{ name: "Bandar Seri Begawan",country: "BN", lat:  4.940, lon: 114.948, tz: "Asia/Brunei" },
{ name: "Kuala Belait",       country: "BN", lat:  4.587, lon: 114.203, tz: "Asia/Brunei" },

// ── Philippines ───────────────────────────────────────────
{ name: "Cotabato",           country: "PH", lat:  7.224, lon: 124.246, tz: "Asia/Manila" },
{ name: "Zamboanga",          country: "PH", lat:  6.910, lon: 122.073, tz: "Asia/Manila" },
{ name: "Marawi",             country: "PH", lat:  8.000, lon: 124.286, tz: "Asia/Manila" },
{ name: "Davao",              country: "PH", lat:  7.073, lon: 125.613, tz: "Asia/Manila" },
{ name: "Iligan",             country: "PH", lat:  8.228, lon: 124.245, tz: "Asia/Manila" },
{ name: "Jolo",               country: "PH", lat:  6.053, lon: 121.000, tz: "Asia/Manila" },
{ name: "Pagadian",           country: "PH", lat:  7.826, lon: 123.437, tz: "Asia/Manila" },
{ name: "Maguindanao",        country: "PH", lat:  7.014, lon: 124.249, tz: "Asia/Manila" },
{ name: "Sulu",               country: "PH", lat:  5.974, lon: 121.034, tz: "Asia/Manila" },
{ name: "Tawi-Tawi",          country: "PH", lat:  5.133, lon: 119.967, tz: "Asia/Manila" },

// ── China (Muslim regions) ────────────────────────────────
{ name: "Urumqi",             country: "CN", lat: 43.826, lon: 87.617,  tz: "Asia/Shanghai" },
{ name: "Kashgar",            country: "CN", lat: 39.467, lon: 75.983,  tz: "Asia/Shanghai" },
{ name: "Yining",             country: "CN", lat: 43.900, lon: 81.317,  tz: "Asia/Shanghai" },
{ name: "Hotan",              country: "CN", lat: 37.117, lon: 79.933,  tz: "Asia/Shanghai" },
{ name: "Lanzhou",            country: "CN", lat: 36.056, lon: 103.792, tz: "Asia/Shanghai" },
{ name: "Xining",             country: "CN", lat: 36.617, lon: 101.767, tz: "Asia/Shanghai" },
{ name: "Yinchuan",           country: "CN", lat: 38.468, lon: 106.273, tz: "Asia/Shanghai" },
{ name: "Aksu",               country: "CN", lat: 41.168, lon: 80.260,  tz: "Asia/Shanghai" },
{ name: "Korla",              country: "CN", lat: 41.760, lon: 86.146,  tz: "Asia/Shanghai" },
{ name: "Turpan",             country: "CN", lat: 42.951, lon: 89.189,  tz: "Asia/Shanghai" },
{ name: "Hami",               country: "CN", lat: 42.833, lon: 93.515,  tz: "Asia/Shanghai" },
{ name: "Kuqa",               country: "CN", lat: 41.718, lon: 82.937,  tz: "Asia/Shanghai" },

// ── Russia (Muslim regions) ───────────────────────────────
{ name: "Grozny",             country: "RU", lat: 43.318, lon: 45.698,  tz: "Europe/Moscow" },
{ name: "Makhachkala",        country: "RU", lat: 42.984, lon: 47.504,  tz: "Europe/Moscow" },
{ name: "Ufa",                country: "RU", lat: 54.735, lon: 55.958,  tz: "Asia/Yekaterinburg" },
{ name: "Kazan",              country: "RU", lat: 55.796, lon: 49.106,  tz: "Europe/Moscow" },
{ name: "Nazran",             country: "RU", lat: 43.226, lon: 44.768,  tz: "Europe/Moscow" },
{ name: "Nalchik",            country: "RU", lat: 43.500, lon: 43.617,  tz: "Europe/Moscow" },
{ name: "Derbent",            country: "RU", lat: 42.059, lon: 48.286,  tz: "Europe/Moscow" },
{ name: "Khasavyurt",         country: "RU", lat: 43.249, lon: 46.587,  tz: "Europe/Moscow" },
{ name: "Gudermes",           country: "RU", lat: 43.354, lon: 46.101,  tz: "Europe/Moscow" },
{ name: "Buynaksk",           country: "RU", lat: 42.819, lon: 47.115,  tz: "Europe/Moscow" },
{ name: "Cherkessk",          country: "RU", lat: 44.227, lon: 42.056,  tz: "Europe/Moscow" },
{ name: "Vladikavkaz",        country: "RU", lat: 43.024, lon: 44.682,  tz: "Europe/Moscow" },

// ── Myanmar ───────────────────────────────────────────────
{ name: "Yangon",             country: "MM", lat: 16.866, lon: 96.195,  tz: "Asia/Rangoon" },
{ name: "Mandalay",           country: "MM", lat: 21.978, lon: 96.083,  tz: "Asia/Rangoon" },
{ name: "Sittwe",             country: "MM", lat: 20.152, lon: 92.897,  tz: "Asia/Rangoon" },
{ name: "Maungdaw",           country: "MM", lat: 20.818, lon: 92.360,  tz: "Asia/Rangoon" },
{ name: "Taunggok",           country: "MM", lat: 18.668, lon: 94.231,  tz: "Asia/Rangoon" },

// ── Sri Lanka ─────────────────────────────────────────────
{ name: "Colombo",            country: "LK", lat:  6.927, lon: 79.861,  tz: "Asia/Colombo" },
{ name: "Kandy",              country: "LK", lat:  7.291, lon: 80.636,  tz: "Asia/Colombo" },
{ name: "Batticaloa",         country: "LK", lat:  7.717, lon: 81.700,  tz: "Asia/Colombo" },
{ name: "Kalmunai",           country: "LK", lat:  7.415, lon: 81.828,  tz: "Asia/Colombo" },
{ name: "Trincomalee",        country: "LK", lat:  8.578, lon: 81.233,  tz: "Asia/Colombo" },

// ── Nepal ─────────────────────────────────────────────────
{ name: "Kathmandu",          country: "NP", lat: 27.717, lon: 85.317,  tz: "Asia/Kathmandu" },
{ name: "Birganj",            country: "NP", lat: 27.012, lon: 84.874,  tz: "Asia/Kathmandu" },
{ name: "Nepalgunj",          country: "NP", lat: 28.050, lon: 81.617,  tz: "Asia/Kathmandu" },

// ── Europe (Muslim communities) ───────────────────────────
{ name: "London",             country: "GB", lat: 51.507, lon: -0.128,  tz: "Europe/London" },
{ name: "Birmingham",         country: "GB", lat: 52.480, lon: -1.902,  tz: "Europe/London" },
{ name: "Manchester",         country: "GB", lat: 53.480, lon: -2.242,  tz: "Europe/London" },
{ name: "Bradford",           country: "GB", lat: 53.795, lon: -1.759,  tz: "Europe/London" },
{ name: "Leeds",              country: "GB", lat: 53.800, lon: -1.549,  tz: "Europe/London" },
{ name: "Leicester",          country: "GB", lat: 52.636, lon: -1.133,  tz: "Europe/London" },
{ name: "Luton",              country: "GB", lat: 51.879, lon: -0.416,  tz: "Europe/London" },
{ name: "Paris",              country: "FR", lat: 48.857, lon:  2.352,  tz: "Europe/Paris" },
{ name: "Marseille",          country: "FR", lat: 43.297, lon:  5.381,  tz: "Europe/Paris" },
{ name: "Lyon",               country: "FR", lat: 45.748, lon:  4.847,  tz: "Europe/Paris" },
{ name: "Lille",              country: "FR", lat: 50.629, lon:  3.057,  tz: "Europe/Paris" },
{ name: "Strasbourg",         country: "FR", lat: 48.574, lon:  7.752,  tz: "Europe/Paris" },
{ name: "Berlin",             country: "DE", lat: 52.520, lon: 13.405,  tz: "Europe/Berlin" },
{ name: "Hamburg",            country: "DE", lat: 53.551, lon:  9.993,  tz: "Europe/Berlin" },
{ name: "Cologne",            country: "DE", lat: 50.938, lon:  6.960,  tz: "Europe/Berlin" },
{ name: "Frankfurt",          country: "DE", lat: 50.111, lon:  8.682,  tz: "Europe/Berlin" },
{ name: "Munich",             country: "DE", lat: 48.137, lon: 11.576,  tz: "Europe/Berlin" },
{ name: "Stuttgart",          country: "DE", lat: 48.775, lon:  9.182,  tz: "Europe/Berlin" },
{ name: "Amsterdam",          country: "NL", lat: 52.370, lon:  4.895,  tz: "Europe/Amsterdam" },
{ name: "Brussels",           country: "BE", lat: 50.851, lon:  4.352,  tz: "Europe/Brussels" },
{ name: "Stockholm",          country: "SE", lat: 59.333, lon: 18.065,  tz: "Europe/Stockholm" },
{ name: "Malmö",              country: "SE", lat: 55.605, lon: 13.000,  tz: "Europe/Stockholm" },
{ name: "Göteborg",           country: "SE", lat: 57.721, lon: 12.011,  tz: "Europe/Stockholm" },
{ name: "Copenhagen",         country: "DK", lat: 55.676, lon: 12.568,  tz: "Europe/Copenhagen" },
{ name: "Vienna",             country: "AT", lat: 48.208, lon: 16.372,  tz: "Europe/Vienna" },
{ name: "Zurich",             country: "CH", lat: 47.376, lon:  8.541,  tz: "Europe/Zurich" },
{ name: "Geneva",             country: "CH", lat: 46.204, lon:  6.143,  tz: "Europe/Zurich" },
{ name: "Rome",               country: "IT", lat: 41.902, lon: 12.496,  tz: "Europe/Rome" },
{ name: "Milan",              country: "IT", lat: 45.464, lon:  9.190,  tz: "Europe/Rome" },
{ name: "Madrid",             country: "ES", lat: 40.416, lon: -3.703,  tz: "Europe/Madrid" },
{ name: "Barcelona",          country: "ES", lat: 41.385, lon:  2.173,  tz: "Europe/Madrid" },
{ name: "Rotterdam",          country: "NL", lat: 51.922, lon:  4.479,  tz: "Europe/Amsterdam" },
{ name: "Oslo",               country: "NO", lat: 59.914, lon: 10.752,  tz: "Europe/Oslo" },
{ name: "Helsinki",           country: "FI", lat: 60.169, lon: 24.935,  tz: "Europe/Helsinki" },
{ name: "Athens",             country: "GR", lat: 37.983, lon: 23.727,  tz: "Europe/Athens" },

// ── North America ─────────────────────────────────────────
{ name: "Toronto",            country: "CA", lat: 43.651, lon: -79.347, tz: "America/Toronto" },
{ name: "Mississauga",        country: "CA", lat: 43.589, lon: -79.644, tz: "America/Toronto" },
{ name: "Montreal",           country: "CA", lat: 45.508, lon: -73.554, tz: "America/Toronto" },
{ name: "Ottawa",             country: "CA", lat: 45.421, lon: -75.690, tz: "America/Toronto" },
{ name: "Calgary",            country: "CA", lat: 51.048, lon: -114.058,tz: "America/Edmonton" },
{ name: "Vancouver",          country: "CA", lat: 49.283, lon: -123.121,tz: "America/Vancouver" },
{ name: "New York",           country: "US", lat: 40.713, lon: -74.006, tz: "America/New_York" },
{ name: "Chicago",            country: "US", lat: 41.850, lon: -87.650, tz: "America/Chicago" },
{ name: "Los Angeles",        country: "US", lat: 34.052, lon: -118.244,tz: "America/Los_Angeles" },
{ name: "Houston",            country: "US", lat: 29.763, lon: -95.363, tz: "America/Chicago" },
{ name: "Dearborn",           country: "US", lat: 42.322, lon: -83.176, tz: "America/Detroit" },
{ name: "Dallas",             country: "US", lat: 32.776, lon: -96.797, tz: "America/Chicago" },
{ name: "Washington DC",      country: "US", lat: 38.907, lon: -77.037, tz: "America/New_York" },
{ name: "Minneapolis",        country: "US", lat: 44.980, lon: -93.271, tz: "America/Chicago" },
{ name: "Philadelphia",       country: "US", lat: 39.952, lon: -75.164, tz: "America/New_York" },
{ name: "Detroit",            country: "US", lat: 42.331, lon: -83.046, tz: "America/Detroit" },
{ name: "Atlanta",            country: "US", lat: 33.749, lon: -84.388, tz: "America/New_York" },
{ name: "Seattle",            country: "US", lat: 47.606, lon: -122.332,tz: "America/Los_Angeles" },
{ name: "San Francisco",      country: "US", lat: 37.774, lon: -122.419,tz: "America/Los_Angeles" },
{ name: "Boston",             country: "US", lat: 42.360, lon: -71.058, tz: "America/New_York" },
{ name: "Paterson",           country: "US", lat: 40.916, lon: -74.172, tz: "America/New_York" },
{ name: "Fremont",            country: "US", lat: 37.548, lon: -121.989,tz: "America/Los_Angeles" },

// ── South America ─────────────────────────────────────────
{ name: "São Paulo",          country: "BR", lat: -23.549, lon: -46.633,tz: "America/Sao_Paulo" },
{ name: "Buenos Aires",       country: "AR", lat: -34.603, lon: -58.381,tz: "America/Argentina/Buenos_Aires" },
{ name: "Trinidad",           country: "TT", lat: 10.652, lon: -61.519, tz: "America/Port_of_Spain" },
{ name: "Suriname",           country: "SR", lat:  5.866, lon: -55.167, tz: "America/Paramaribo" },
{ name: "Guyana",             country: "GY", lat:  6.800, lon: -58.155, tz: "America/Guyana" },

// ── Australia ─────────────────────────────────────────────
{ name: "Sydney",             country: "AU", lat: -33.869, lon: 151.209,tz: "Australia/Sydney" },
{ name: "Melbourne",          country: "AU", lat: -37.814, lon: 144.963,tz: "Australia/Melbourne" },
{ name: "Brisbane",           country: "AU", lat: -27.468, lon: 153.028,tz: "Australia/Brisbane" },
{ name: "Perth",              country: "AU", lat: -31.952, lon: 115.861,tz: "Australia/Perth" },
{ name: "Adelaide",           country: "AU", lat: -34.929, lon: 138.601,tz: "Australia/Adelaide" },

// ── Central African Republic ──────────────────────────────
{ name: "Bangui",             country: "CF", lat:  4.361, lon: 18.555,  tz: "Africa/Bangui" },
{ name: "Bimbo",              country: "CF", lat:  4.256, lon: 18.417,  tz: "Africa/Bangui" },

// ── DR Congo ──────────────────────────────────────────────
{ name: "Kinshasa",           country: "CD", lat: -4.325, lon: 15.322,  tz: "Africa/Kinshasa" },
{ name: "Lubumbashi",         country: "CD", lat: -11.665, lon: 27.479, tz: "Africa/Lubumbashi" },
{ name: "Mbuji-Mayi",         country: "CD", lat: -6.136, lon: 23.589,  tz: "Africa/Lubumbashi" },
{ name: "Bukavu",             country: "CD", lat: -2.508, lon: 28.862,  tz: "Africa/Lubumbashi" },
{ name: "Goma",               country: "CD", lat: -1.679, lon: 29.221,  tz: "Africa/Lubumbashi" },

// ── Congo Republic ────────────────────────────────────────
{ name: "Brazzaville",        country: "CG", lat: -4.270, lon: 15.283,  tz: "Africa/Brazzaville" },
{ name: "Pointe-Noire",       country: "CG", lat: -4.777, lon: 11.866,  tz: "Africa/Brazzaville" },

// ── Rwanda ────────────────────────────────────────────────
{ name: "Kigali",             country: "RW", lat: -1.944, lon: 30.061,  tz: "Africa/Kigali" },
{ name: "Butare",             country: "RW", lat: -2.596, lon: 29.739,  tz: "Africa/Kigali" },

// ── Burundi ───────────────────────────────────────────────
{ name: "Bujumbura",          country: "BI", lat: -3.382, lon: 29.361,  tz: "Africa/Bujumbura" },
{ name: "Muyinga",            country: "BI", lat: -2.847, lon: 30.337,  tz: "Africa/Bujumbura" },

// ── Madagascar ────────────────────────────────────────────
{ name: "Antananarivo",       country: "MG", lat: -18.914, lon: 47.536, tz: "Indian/Antananarivo" },
{ name: "Mahajanga",          country: "MG", lat: -15.716, lon: 46.316, tz: "Indian/Antananarivo" },

// ── Zambia ────────────────────────────────────────────────
{ name: "Lusaka",             country: "ZM", lat: -15.417, lon: 28.283, tz: "Africa/Lusaka" },
{ name: "Ndola",              country: "ZM", lat: -12.958, lon: 28.637, tz: "Africa/Lusaka" },

// ── Zimbabwe ──────────────────────────────────────────────
{ name: "Harare",             country: "ZW", lat: -17.829, lon: 31.052, tz: "Africa/Harare" },
{ name: "Bulawayo",           country: "ZW", lat: -20.150, lon: 28.583, tz: "Africa/Harare" },

// ── South Africa ──────────────────────────────────────────
{ name: "Cape Town",          country: "ZA", lat: -33.926, lon: 18.424, tz: "Africa/Johannesburg" },
{ name: "Johannesburg",       country: "ZA", lat: -26.205, lon: 28.040, tz: "Africa/Johannesburg" },
{ name: "Durban",             country: "ZA", lat: -29.858, lon: 31.030, tz: "Africa/Johannesburg" },
{ name: "Pretoria",           country: "ZA", lat: -25.746, lon: 28.188, tz: "Africa/Johannesburg" },

// ── Liberia ───────────────────────────────────────────────
{ name: "Monrovia",           country: "LR", lat:  6.300, lon: -10.797, tz: "Africa/Monrovia" },
{ name: "Gbarnga",            country: "LR", lat:  7.000, lon: -9.472,  tz: "Africa/Monrovia" },

// ── Equatorial Guinea ─────────────────────────────────────
{ name: "Malabo",             country: "GQ", lat:  3.750, lon:  8.783,  tz: "Africa/Malabo" },

// ── Gabon ─────────────────────────────────────────────────
{ name: "Libreville",         country: "GA", lat:  0.393, lon:  9.454,  tz: "Africa/Libreville" },

// ── Namibia ───────────────────────────────────────────────
{ name: "Windhoek",           country: "NA", lat: -22.559, lon: 17.084, tz: "Africa/Windhoek" },

// ── Thailand ──────────────────────────────────────────────
{ name: "Bangkok",            country: "TH", lat: 13.753, lon: 100.501, tz: "Asia/Bangkok" },
{ name: "Chiang Mai",         country: "TH", lat: 18.787, lon: 98.993,  tz: "Asia/Bangkok" },
{ name: "Hat Yai",            country: "TH", lat:  7.008, lon: 100.477, tz: "Asia/Bangkok" },
{ name: "Pattani",            country: "TH", lat:  6.869, lon: 101.250, tz: "Asia/Bangkok" },
{ name: "Yala",               country: "TH", lat:  6.542, lon: 101.280, tz: "Asia/Bangkok" },
{ name: "Narathiwat",         country: "TH", lat:  6.426, lon: 101.823, tz: "Asia/Bangkok" },
{ name: "Satun",              country: "TH", lat:  6.614, lon: 100.067, tz: "Asia/Bangkok" },

// ── Cambodia ──────────────────────────────────────────────
{ name: "Phnom Penh",         country: "KH", lat: 11.562, lon: 104.916, tz: "Asia/Phnom_Penh" },
{ name: "Kampong Cham",       country: "KH", lat: 11.989, lon: 105.464, tz: "Asia/Phnom_Penh" },

// ── Vietnam ───────────────────────────────────────────────
{ name: "Ho Chi Minh City",   country: "VN", lat: 10.823, lon: 106.630, tz: "Asia/Ho_Chi_Minh" },
{ name: "An Giang",           country: "VN", lat: 10.521, lon: 105.126, tz: "Asia/Ho_Chi_Minh" },

// ── Singapore ─────────────────────────────────────────────
{ name: "Singapore",          country: "SG", lat:  1.352, lon: 103.820, tz: "Asia/Singapore" },

// ── Timor-Leste ───────────────────────────────────────────
{ name: "Dili",               country: "TL", lat: -8.559, lon: 125.579, tz: "Asia/Dili" },

// ── Georgia (Muslim minority) ─────────────────────────────
{ name: "Tbilisi",            country: "GE", lat: 41.693, lon: 44.801,  tz: "Asia/Tbilisi" },
{ name: "Batumi",             country: "GE", lat: 41.644, lon: 41.634,  tz: "Asia/Tbilisi" },

// ── Armenia ───────────────────────────────────────────────
{ name: "Yerevan",            country: "AM", lat: 40.181, lon: 44.514,  tz: "Asia/Yerevan" },

// ── Ukraine (Muslim minority) ─────────────────────────────
{ name: "Simferopol",         country: "UA", lat: 44.952, lon: 34.102,  tz: "Europe/Simferopol" },

// ── Bulgaria (Muslim minority) ────────────────────────────
{ name: "Sofia",              country: "BG", lat: 42.698, lon: 23.322,  tz: "Europe/Sofia" },
{ name: "Plovdiv",            country: "BG", lat: 42.150, lon: 24.750,  tz: "Europe/Sofia" },
{ name: "Kardzhali",          country: "BG", lat: 41.638, lon: 25.370,  tz: "Europe/Sofia" },
{ name: "Smolyan",            country: "BG", lat: 41.577, lon: 24.711,  tz: "Europe/Sofia" },

// ── Serbia (Muslim minority) ──────────────────────────────
{ name: "Novi Pazar",         country: "RS", lat: 43.137, lon: 20.512,  tz: "Europe/Belgrade" },
{ name: "Tutin",              country: "RS", lat: 42.994, lon: 20.332,  tz: "Europe/Belgrade" },

// ── Montenegro ────────────────────────────────────────────
{ name: "Podgorica",          country: "ME", lat: 42.442, lon: 19.263,  tz: "Europe/Podgorica" },
{ name: "Bijelo Polje",       country: "ME", lat: 43.038, lon: 19.747,  tz: "Europe/Podgorica" },
{ name: "Berane",             country: "ME", lat: 42.843, lon: 19.872,  tz: "Europe/Podgorica" },

// ── Tatar / Crimea ────────────────────────────────────────
{ name: "Bakhchysarai",       country: "UA", lat: 44.754, lon: 33.870,  tz: "Europe/Simferopol" },

// ── Libya (extended) ──────────────────────────────────────
{ name: "Sirt",               country: "LY", lat: 31.207, lon: 16.589,  tz: "Africa/Tripoli" },
{ name: "Murzuq",             country: "LY", lat: 25.910, lon: 13.917,  tz: "Africa/Tripoli" },

// ── South Sudan ───────────────────────────────────────────
{ name: "Juba",               country: "SS", lat:  4.859, lon: 31.571,  tz: "Africa/Juba" },
{ name: "Wau",                country: "SS", lat:  7.700, lon: 28.000,  tz: "Africa/Juba" },

// ── Angola ────────────────────────────────────────────────
{ name: "Luanda",             country: "AO", lat: -8.836, lon: 13.234,  tz: "Africa/Luanda" },

// ── Malawi ────────────────────────────────────────────────
{ name: "Lilongwe",           country: "MW", lat: -13.967, lon: 33.787, tz: "Africa/Blantyre" },
{ name: "Blantyre",           country: "MW", lat: -15.787, lon: 35.005, tz: "Africa/Blantyre" },
{ name: "Mangochi",           country: "MW", lat: -14.477, lon: 35.264, tz: "Africa/Blantyre" },

// ── Guinea (extended) ─────────────────────────────────────
{ name: "Boké",               country: "GN", lat: 10.933, lon: -14.300, tz: "Africa/Conakry" },
{ name: "Siguiri",            country: "GN", lat: 11.417, lon: -9.167,  tz: "Africa/Conakry" },

// ── Côte d'Ivoire (extended) ──────────────────────────────
{ name: "Odienné",            country: "CI", lat:  9.508, lon: -7.564,  tz: "Africa/Abidjan" },
{ name: "Boundiali",          country: "CI", lat:  9.517, lon: -6.483,  tz: "Africa/Abidjan" },
{ name: "Tingrela",           country: "CI", lat: 10.467, lon: -6.417,  tz: "Africa/Abidjan" },

// ── Niger (extended) ──────────────────────────────────────
{ name: "Birni-N'Konni",      country: "NE", lat: 13.800, lon:  5.250,  tz: "Africa/Niamey" },
{ name: "Madaoua",            country: "NE", lat: 14.083, lon:  5.967,  tz: "Africa/Niamey" },

// ── Mali (extended) ───────────────────────────────────────
{ name: "San",                country: "ML", lat: 13.300, lon: -4.900,  tz: "Africa/Bamako" },
{ name: "Niono",              country: "ML", lat: 14.250, lon: -5.983,  tz: "Africa/Bamako" },
{ name: "Kita",               country: "ML", lat: 13.050, lon: -9.483,  tz: "Africa/Bamako" },

// ── Senegal (extended) ────────────────────────────────────
{ name: "Louga",              country: "SN", lat: 15.617, lon: -16.233, tz: "Africa/Dakar" },
{ name: "Mbour",              country: "SN", lat: 14.417, lon: -16.967, tz: "Africa/Dakar" },
{ name: "Fatick",             country: "SN", lat: 14.333, lon: -16.417, tz: "Africa/Dakar" },

// ── Ethiopia (extended) ───────────────────────────────────
{ name: "Asosa",              country: "ET", lat:  10.062, lon: 34.523, tz: "Africa/Addis_Ababa" },
{ name: "Gambela",            country: "ET", lat:   8.250, lon: 34.583, tz: "Africa/Addis_Ababa" },

// ── Tanzania (extended) ───────────────────────────────────
{ name: "Songea",             country: "TZ", lat: -10.683, lon: 35.650, tz: "Africa/Dar_es_Salaam" },
{ name: "Iringa",             country: "TZ", lat:  -7.767, lon: 35.700, tz: "Africa/Dar_es_Salaam" },

// ── Mozambique (extended) ─────────────────────────────────
{ name: "Mocímboa da Praia",  country: "MZ", lat: -11.350, lon: 40.350, tz: "Africa/Maputo" },
{ name: "Mueda",              country: "MZ", lat: -11.667, lon: 39.567, tz: "Africa/Maputo" },

// ── Uganda (extended) ─────────────────────────────────────
{ name: "Mbale",              country: "UG", lat:  1.083, lon: 34.183,  tz: "Africa/Kampala" },
{ name: "Fort Portal",        country: "UG", lat:  0.671, lon: 30.275,  tz: "Africa/Kampala" },

// ── Kenya (extended) ──────────────────────────────────────
{ name: "Mandera",            country: "KE", lat:  3.933, lon: 41.867,  tz: "Africa/Nairobi" },
{ name: "Marsabit",           country: "KE", lat:  2.333, lon: 37.983,  tz: "Africa/Nairobi" },
{ name: "Kwale",              country: "KE", lat: -4.183, lon: 39.452,  tz: "Africa/Nairobi" },

// ── Pakistan (extended further) ───────────────────────────
{ name: "Muzaffargarh",       country: "PK", lat: 30.073, lon: 71.193,  tz: "Asia/Karachi" },
{ name: "Mianwali",           country: "PK", lat: 32.585, lon: 71.543,  tz: "Asia/Karachi" },
{ name: "Khushab",            country: "PK", lat: 32.296, lon: 72.349,  tz: "Asia/Karachi" },
{ name: "Narowal",            country: "PK", lat: 32.103, lon: 74.874,  tz: "Asia/Karachi" },
{ name: "Bahawalnagar",       country: "PK", lat: 29.998, lon: 73.253,  tz: "Asia/Karachi" },
{ name: "Layyah",             country: "PK", lat: 30.963, lon: 70.939,  tz: "Asia/Karachi" },
{ name: "Rajanpur",           country: "PK", lat: 29.104, lon: 70.330,  tz: "Asia/Karachi" },

// ── India (extended) ──────────────────────────────────────
{ name: "Chennai",            country: "IN", lat: 13.082, lon: 80.270,  tz: "Asia/Kolkata" },
{ name: "Pune",               country: "IN", lat: 18.520, lon: 73.856,  tz: "Asia/Kolkata" },
{ name: "Ahmedabad",          country: "IN", lat: 23.023, lon: 72.572,  tz: "Asia/Kolkata" },
{ name: "Calicut",            country: "IN", lat: 11.258, lon: 75.780,  tz: "Asia/Kolkata" },
{ name: "Vellore",            country: "IN", lat: 12.916, lon: 79.133,  tz: "Asia/Kolkata" },
{ name: "Sambhal",            country: "IN", lat: 28.590, lon: 78.567,  tz: "Asia/Kolkata" },
{ name: "Amroha",             country: "IN", lat: 28.905, lon: 78.469,  tz: "Asia/Kolkata" },
{ name: "Bulandshahr",        country: "IN", lat: 28.406, lon: 77.849,  tz: "Asia/Kolkata" },

// ── Indonesia (extended) ──────────────────────────────────
{ name: "Tegal",              country: "ID", lat: -6.869, lon: 109.125, tz: "Asia/Jakarta" },
{ name: "Pematangsiantar",    country: "ID", lat:  2.960, lon:  99.069, tz: "Asia/Jakarta" },
{ name: "Binjai",             country: "ID", lat:  3.600, lon:  98.484, tz: "Asia/Jakarta" },
{ name: "Langsa",             country: "ID", lat:  4.469, lon:  97.968, tz: "Asia/Jakarta" },
{ name: "Lhokseumawe",        country: "ID", lat:  5.180, lon:  97.149, tz: "Asia/Jakarta" },

// ── Bangladesh (extended) ─────────────────────────────────
{ name: "Feni",               country: "BD", lat: 23.023, lon: 91.397,  tz: "Asia/Dhaka" },
{ name: "Chandpur",           country: "BD", lat: 23.232, lon: 90.651,  tz: "Asia/Dhaka" },
{ name: "Kishoreganj",        country: "BD", lat: 24.444, lon: 90.776,  tz: "Asia/Dhaka" },
{ name: "Netrokona",          country: "BD", lat: 24.870, lon: 90.727,  tz: "Asia/Dhaka" },
{ name: "Kurigram",           country: "BD", lat: 25.808, lon: 89.636,  tz: "Asia/Dhaka" },

// ── Turkey (extended) ─────────────────────────────────────
{ name: "Mardin",             country: "TR", lat: 37.313, lon: 40.735,  tz: "Europe/Istanbul" },
{ name: "Siirt",              country: "TR", lat: 37.924, lon: 41.946,  tz: "Europe/Istanbul" },
{ name: "Bingöl",             country: "TR", lat: 38.886, lon: 40.498,  tz: "Europe/Istanbul" },
{ name: "Muş",                country: "TR", lat: 38.747, lon: 41.507,  tz: "Europe/Istanbul" },
{ name: "Şırnak",             country: "TR", lat: 37.518, lon: 42.461,  tz: "Europe/Istanbul" },

// ── Iran (extended) ───────────────────────────────────────
{ name: "Zanjan",             country: "IR", lat: 36.680, lon: 48.490,  tz: "Asia/Tehran" },
{ name: "Sari",               country: "IR", lat: 36.563, lon: 53.060,  tz: "Asia/Tehran" },
{ name: "Kashan",             country: "IR", lat: 33.984, lon: 51.421,  tz: "Asia/Tehran" },
{ name: "Dezful",             country: "IR", lat: 32.381, lon: 48.416,  tz: "Asia/Tehran" },
{ name: "Abadan",             country: "IR", lat: 30.339, lon: 48.304,  tz: "Asia/Tehran" },

// ── Russia (extended) ─────────────────────────────────────
{ name: "Orenburg",           country: "RU", lat: 51.768, lon: 55.097,  tz: "Asia/Yekaterinburg" },
{ name: "Perm",               country: "RU", lat: 58.010, lon: 56.229,  tz: "Asia/Yekaterinburg" },
{ name: "Tyumen",             country: "RU", lat: 57.153, lon: 68.993,  tz: "Asia/Yekaterinburg" },

// ── Kazakhstan (extended) ─────────────────────────────────
{ name: "Turkestan",          country: "KZ", lat: 43.298, lon: 68.272,  tz: "Asia/Almaty" },
{ name: "Zhambyl",            country: "KZ", lat: 42.900, lon: 71.367,  tz: "Asia/Almaty" },

// ── China (extended) ──────────────────────────────────────
{ name: "Ili",                country: "CN", lat: 43.920, lon: 81.351,  tz: "Asia/Shanghai" },
{ name: "Altay",              country: "CN", lat: 47.844, lon: 88.130,  tz: "Asia/Shanghai" },

// ── Philippines (extended) ────────────────────────────────
{ name: "General Santos",     country: "PH", lat:  6.114, lon: 125.172, tz: "Asia/Manila" },
{ name: "Cagayan de Oro",     country: "PH", lat:  8.482, lon: 124.647, tz: "Asia/Manila" },

// ── North America (extended) ──────────────────────────────
{ name: "Jersey City",        country: "US", lat: 40.718, lon: -74.043, tz: "America/New_York" },
{ name: "Sterling Heights",   country: "US", lat: 42.580, lon: -83.030, tz: "America/Detroit" },
{ name: "San Diego",          country: "US", lat: 32.715, lon: -117.157,tz: "America/Los_Angeles" },
{ name: "Phoenix",            country: "US", lat: 33.448, lon: -112.074,tz: "America/Phoenix" },
{ name: "Columbus",           country: "US", lat: 39.961, lon: -82.999, tz: "America/New_York" },
{ name: "Baltimore",          country: "US", lat: 39.290, lon: -76.612, tz: "America/New_York" },
{ name: "Denver",             country: "US", lat: 39.739, lon: -104.984,tz: "America/Denver" },
{ name: "Hamtramck",          country: "US", lat: 42.395, lon: -83.049, tz: "America/Detroit" },
{ name: "Winnipeg",           country: "CA", lat: 49.899, lon: -97.138, tz: "America/Winnipeg" },
{ name: "Edmonton",           country: "CA", lat: 53.546, lon: -113.493,tz: "America/Edmonton" },

// ── South America (extended) ──────────────────────────────
{ name: "Rio de Janeiro",     country: "BR", lat: -22.906, lon: -43.172,tz: "America/Sao_Paulo" },
{ name: "Foz do Iguaçu",      country: "BR", lat: -25.548, lon: -54.578,tz: "America/Sao_Paulo" },
{ name: "Maicao",             country: "CO", lat: 11.383, lon: -72.250, tz: "America/Bogota" },
{ name: "Bogotá",             country: "CO", lat:  4.711, lon: -74.072, tz: "America/Bogota" },

// ── Caribbean ─────────────────────────────────────────────
{ name: "Port of Spain",      country: "TT", lat: 10.652, lon: -61.519, tz: "America/Port_of_Spain" },
{ name: "Georgetown",         country: "GY", lat:  6.804, lon: -58.155, tz: "America/Guyana" },
{ name: "Paramaribo",         country: "SR", lat:  5.866, lon: -55.167, tz: "America/Paramaribo" },

// ── Iraq (extended) ───────────────────────────────────────
{ name: "Hillah",             country: "IQ", lat: 32.461, lon: 44.421,  tz: "Asia/Baghdad" },

// ── Oman (extended) ───────────────────────────────────────
{ name: "Rustaq",             country: "OM", lat: 23.391, lon: 57.424,  tz: "Asia/Muscat" },
{ name: "Ibri",               country: "OM", lat: 23.225, lon: 56.514,  tz: "Asia/Muscat" },

// ── Libya (extended) ──────────────────────────────────────

// ── Yemen (extended) ──────────────────────────────────────
{ name: "Seiyun",             country: "YE", lat: 15.942, lon: 48.789,  tz: "Asia/Aden" },
{ name: "Ataq",               country: "YE", lat: 14.550, lon: 46.833,  tz: "Asia/Aden" },

// ── Afghanistan (extended) ────────────────────────────────

// ── Somalia (extended) ────────────────────────────────────
{ name: "Galkayo",            country: "SO", lat:  6.770, lon: 47.430,  tz: "Africa/Mogadishu" },
{ name: "Burao",              country: "SO", lat:  9.520, lon: 45.540,  tz: "Africa/Mogadishu" },
{ name: "Bossaso",            country: "SO", lat: 11.284, lon: 49.183,  tz: "Africa/Mogadishu" },

// ── Sudan (extended) ──────────────────────────────────────
{ name: "Al-Qadarif",         country: "SD", lat: 14.039, lon: 35.381,  tz: "Africa/Khartoum" },
{ name: "Dongola",            country: "SD", lat: 19.167, lon: 30.483,  tz: "Africa/Khartoum" },

// ── Algeria (extended) ────────────────────────────────────
{ name: "Chlef",              country: "DZ", lat: 36.165, lon:  1.329,  tz: "Africa/Algiers" },
{ name: "Laghouat",           country: "DZ", lat: 33.800, lon:  2.867,  tz: "Africa/Algiers" },
{ name: "El Oued",            country: "DZ", lat: 33.367, lon:  6.863,  tz: "Africa/Algiers" },
{ name: "Djelfa",             country: "DZ", lat: 34.670, lon:  3.263,  tz: "Africa/Algiers" },

// ── Morocco (extended) ────────────────────────────────────
{ name: "Settat",             country: "MA", lat: 33.001, lon: -7.621,  tz: "Africa/Casablanca" },
{ name: "Khémisset",          country: "MA", lat: 33.824, lon: -6.066,  tz: "Africa/Casablanca" },
{ name: "Berkane",            country: "MA", lat: 34.921, lon: -2.320,  tz: "Africa/Casablanca" },
{ name: "Taourirt",           country: "MA", lat: 34.410, lon: -2.893,  tz: "Africa/Casablanca" },

// ── Egypt (extended) ──────────────────────────────────────
{ name: "Quesna",             country: "EG", lat: 30.585, lon: 31.041,  tz: "Africa/Cairo" },
{ name: "Shibin El Kom",      country: "EG", lat: 30.549, lon: 31.010,  tz: "Africa/Cairo" },

// ── Nigeria (extended) ────────────────────────────────────
{ name: "Funtua",             country: "NG", lat: 11.521, lon:  7.319,  tz: "Africa/Lagos" },
{ name: "Birni-Kebbi",        country: "NG", lat: 12.459, lon:  4.197,  tz: "Africa/Lagos" },
{ name: "Yelwa",              country: "NG", lat: 10.833, lon:  4.750,  tz: "Africa/Lagos" },

// ── Cameroon (extended) ───────────────────────────────────
{ name: "Guider",             country: "CM", lat:  9.933, lon: 13.950,  tz: "Africa/Douala" },
{ name: "Kaélé",              country: "CM", lat: 10.100, lon: 14.450,  tz: "Africa/Douala" },

// ── Europe (Muslim communities, extended) ─────────────────
{ name: "Antwerp",            country: "BE", lat: 51.221, lon:  4.400,  tz: "Europe/Brussels" },
{ name: "Liège",              country: "BE", lat: 50.633, lon:  5.567,  tz: "Europe/Brussels" },
{ name: "The Hague",          country: "NL", lat: 52.078, lon:  4.288,  tz: "Europe/Amsterdam" },
{ name: "Utrecht",            country: "NL", lat: 52.090, lon:  5.122,  tz: "Europe/Amsterdam" },
{ name: "Nice",               country: "FR", lat: 43.710, lon:  7.262,  tz: "Europe/Paris" },
{ name: "Nantes",             country: "FR", lat: 47.218, lon: -1.554,  tz: "Europe/Paris" },
{ name: "Bordeaux",           country: "FR", lat: 44.837, lon: -0.580,  tz: "Europe/Paris" },
{ name: "Duisburg",           country: "DE", lat: 51.434, lon:  6.762,  tz: "Europe/Berlin" },
{ name: "Dortmund",           country: "DE", lat: 51.514, lon:  7.465,  tz: "Europe/Berlin" },
{ name: "Essen",              country: "DE", lat: 51.457, lon:  7.012,  tz: "Europe/Berlin" },
{ name: "Düsseldorf",         country: "DE", lat: 51.227, lon:  6.773,  tz: "Europe/Berlin" },

// ── Pacific / Oceania ─────────────────────────────────────
{ name: "Suva",               country: "FJ", lat: -18.141, lon: 178.441, tz: "Pacific/Fiji" },
{ name: "Lautoka",            country: "FJ", lat: -17.617, lon: 177.450, tz: "Pacific/Fiji" },

// ── Central Asia (extended) ───────────────────────────────
{ name: "Khiva",              country: "UZ", lat: 41.378, lon: 60.363,  tz: "Asia/Samarkand" },
{ name: "Urgench",            country: "UZ", lat: 41.550, lon: 60.633,  tz: "Asia/Samarkand" },
{ name: "Margilan",           country: "UZ", lat: 40.467, lon: 71.733,  tz: "Asia/Tashkent" },

// ── Caucasus (extended) ───────────────────────────────────
{ name: "Shamakhi",           country: "AZ", lat: 40.631, lon: 48.641,  tz: "Asia/Baku" },
{ name: "Shaki",              country: "AZ", lat: 41.192, lon: 47.171,  tz: "Asia/Baku" },

// ── West Africa (extended) ────────────────────────────────
{ name: "Koundara",           country: "GN", lat: 12.483, lon: -13.300, tz: "Africa/Conakry" },
{ name: "Boke",               country: "GN", lat: 10.933, lon: -14.300, tz: "Africa/Conakry" },

// ── East Africa (extended) ────────────────────────────────
{ name: "Kismayo",            country: "SO", lat: -0.358, lon: 42.545,  tz: "Africa/Mogadishu" },
{ name: "Afgoye",             country: "SO", lat:  2.138, lon: 45.117,  tz: "Africa/Mogadishu" },

// ── South Asia (extended) ─────────────────────────────────

// ── Additional coverage ───────────────────────────────────
{ name: "Seria",              country: "BN", lat:  4.606, lon: 114.320, tz: "Asia/Brunei" },
{ name: "Nusaybin",           country: "TR", lat: 37.079, lon: 41.217,  tz: "Europe/Istanbul" },
{ name: "Cizre",              country: "TR", lat: 37.329, lon: 42.189,  tz: "Europe/Istanbul" },
{ name: "Khoy",               country: "IR", lat: 38.557, lon: 44.952,  tz: "Asia/Tehran" },
{ name: "Maragheh",           country: "IR", lat: 37.389, lon: 46.237,  tz: "Asia/Tehran" },
{ name: "Tonk",               country: "IN", lat: 26.167, lon: 75.790,  tz: "Asia/Kolkata" },
{ name: "Kishanganj",         country: "IN", lat: 26.095, lon: 87.940,  tz: "Asia/Kolkata" },
]
