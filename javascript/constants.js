// constants.js

export const MATCHES_FROM_1970_TO_TODAY_PATH = '../data/matches/matches_from_1970_to_today.csv';
export const MATCHES_FROM_1970_TO_TODAY_JSON_PATH = '../data/matches/data.json';

// years
export const minYear = 1970;
export const maxYear = 2024;

export var SURFACES = ["Clay", "Grass", "Hard"]; 
export var COLOR_SURFACES = {"Clay": "#D58A5B", "Grass": "#A7C7A9", "Hard": "#A0D6E6"};

// svg
export const margin = { top: 20, right: 30, bottom: 30, left: 40 };

// country names
export const countryNames = {
    "AHO": "Netherlands Antilles",
    "ALG": "Algeria",
    "AND": "Andorra",
    "ARG": "Argentina",
    "ARM": "Armenia",
    "AUS": "Australia",
    "AUT": "Austria",
    "AZE": "Azerbaijan",
    "BAH": "Bahamas",
    "BAN": "Bangladesh",
    "BAR": "Barbados",
    "BEL": "Belgium",
    "BEN": "Benin",
    "BER": "Bermuda",
    "BIH": "Bosnia and Herzegovina",
    "BLR": "Belarus",
    "BOL": "Bolivia",
    "BRA": "Brazil",
    "BRN": "Bahrain",
    "BUL": "Bulgaria",
    "BUR": "Burkina Faso",
    "CAN": "Canada",
    "CAR": "Central African Republic",
    "CGO": "Congo",
    "CHI": "Chile",
    "CHN": "China",
    "CIV": "Ivory Coast",
    "CMR": "Cameroon",
    "COK": "Cook Islands",
    "COL": "Colombia",
    "CRC": "Costa Rica",
    "CRO": "Croatia",
    "CUB": "Cuba",
    "CUW": "Curaçao",
    "CYP": "Cyprus",
    "CZE": "Czech Republic",
    "DEN": "Denmark",
    "DOM": "Dominican Republic",
    "ECA": "East Africa",
    "ECU": "Ecuador",
    "EGY": "Egypt",
    "ESA": "El Salvador",
    "ESP": "Spain",
    "EST": "Estonia",
    "FIJ": "Fiji",
    "FIN": "Finland",
    "FRA": "France",
    "GBR": "United Kingdom",
    "GEO": "Georgia",
    "GER": "Germany",
    "GHA": "Ghana",
    "GRE": "Greece",
    "GUA": "Guatemala",
    "HAI": "Haiti",
    "HKG": "Hong Kong",
    "HUN": "Hungary",
    "INA": "Indonesia",
    "IND": "India",
    "IRI": "Iran",
    "IRL": "Ireland",
    "IRQ": "Iraq",
    "ISR": "Israel",
    "ITA": "Italy",
    "JAM": "Jamaica",
    "JOR": "Jordan",
    "JPN": "Japan",
    "KAZ": "Kazakhstan",
    "KEN": "Kenya",
    "KOR": "South Korea",
    "KSA": "Saudi Arabia",
    "KUW": "Kuwait",
    "LAT": "Latvia",
    "LBA": "Libya",
    "LBN": "Lebanon",
    "LIB": "Liberia",
    "LTU": "Lithuania",
    "LUX": "Luxembourg",
    "MAD": "Madagascar",
    "MAR": "Morocco",
    "MAS": "Malaysia",
    "MDA": "Moldova",
    "MEX": "Mexico",
    "MHL": "Marshall Islands",
    "MKD": "North Macedonia",
    "MLT": "Malta",
    "MNE": "Montenegro",
    "MON": "Monaco",
    "NED": "Netherlands",
    "NGR": "Nigeria",
    "NIG": "Niger",
    "NOR": "Norway",
    "NZL": "New Zealand",
    "OMA": "Oman",
    "PAK": "Pakistan",
    "PAN": "Panama",
    "PAR": "Paraguay",
    "PER": "Peru",
    "PHI": "Philippines",
    "PNG": "Papua New Guinea",
    "POC": "Pacific Oceania",
    "POL": "Poland",
    "POR": "Portugal",
    "PUR": "Puerto Rico",
    "QAT": "Qatar",
    "RHO": "Rhodesia",
    "ROU": "Romania",
    "RSA": "South Africa",
    "RUS": "Russia",
    "SAM": "Samoa",
    "SEN": "Senegal",
    "SGP": "Singapore",
    "SLO": "Slovenia",
    "SOL": "Solomon Islands",
    "SRB": "Serbia",
    "SRI": "Sri Lanka",
    "SUD": "Sudan",
    "SUI": "Switzerland",
    "SVK": "Slovakia",
    "SWE": "Sweden",
    "SYR": "Syria",
    "TCH": "Czechoslovakia",
    "THA": "Thailand",
    "TJK": "Tajikistan",
    "TOG": "Togo",
    "TPE": "Taiwan",
    "TRI": "Trinidad and Tobago",
    "TUN": "Tunisia",
    "TUR": "Turkey",
    "UAE": "United Arab Emirates",
    "UKR": "Ukraine",
    "UNK": "Unknown",
    "URS": "Soviet Union",
    "URU": "Uruguay",
    "USA": "United States",
    "UZB": "Uzbekistan",
    "VAN": "Vanuatu",
    "VEN": "Venezuela",
    "VIE": "Vietnam",
    "VUT": "Vanuatu",
    "YUG": "Yugoslavia",
    "ZAM": "Zambia",
    "ZIM": "Zimbabwe"
};


export const countryColors = {
    AHO: "#B3C8E6",  // Light pastel blue
    ALG: "#E6B3B3",  // Light pastel red
    AND: "#C8E6C8",  // Light pastel green
    ARG: "#F2B6A0",  // Light pastel orange
    ARM: "#D8B2E0",  // Light pastel purple
    AUS: "#F2E6A0",  // Light pastel yellow
    AUT: "#D6A0E6",  // Light pastel pink
    AZE: "#A0D6E6",  // Light pastel cyan
    BAH: "#F2C8E6",  // Light pastel rose
    BAN: "#A0C8A0",  // Light pastel green
    BAR: "#E6D8B3",  // Light pastel beige
    BEL: "#B3D8E6",  // Light pastel blue
    BEN: "#E6D8E6",  // Light pastel lavender
    BER: "#A0A0C8",  // Light pastel violet
    BIH: "#F2D6B2",  // Light pastel peach
    BLR: "#D0E6F2",  // Light pastel sky blue
    BOL: "#E6A0B3",  // Light pastel pink
    BRA: "#F2A0A0",  // Light pastel red
    BRN: "#B2F2C8",  // Light pastel mint
    BUL: "#C8D6F2",  // Light pastel periwinkle
    BUR: "#D8F2B3",  // Light pastel lime green
    CAN: "#B3E6D8",  // Light pastel turquoise
    CAR: "#E0F2B3",  // Light pastel yellow-green
    CGO: "#C8B3D8",  // Light pastel lavender
    CHI: "#F2A0E6",  // Light pastel pink
    CHN: "#D0F2A0",  // Light pastel lime
    CIV: "#F2C8A0",  // Light pastel orange
    CMR: "#B3D8A0",  // Light pastel light green
    COK: "#A0D8F2",  // Light pastel blue
    COL: "#F2B3E6",  // Light pastel pink
    CRC: "#A0E6F2",  // Light pastel cyan
    CRO: "#D8F2A0",  // Light pastel yellow
    CUB: "#A0F2D8",  // Light pastel seafoam
    CUW: "#D8B3C8",  // Light pastel rose
    CYP: "#F2B3D6",  // Light pastel light purple
    CZE: "#E6A0D8",  // Light pastel lavender
    DEN: "#B3C8D8",  // Light pastel blue
    DOM: "#D6F2A0",  // Light pastel yellow
    ECA: "#B3D6A0",  // Light pastel green
    ECU: "#C8A0F2",  // Light pastel purple
    EGY: "#F2D8A0",  // Light pastel peach
    ESA: "#D8A0D8",  // Light pastel violet
    ESP: "#A0F2B3",  // Light pastel mint green
    EST: "#E6D0F2",  // Light pastel lavender
    FIJ: "#B3F2D8",  // Light pastel teal
    FIN: "#A0D8E6",  // Light pastel blue
    FRA: "#F2A0D8",  // Light pastel pink
    GBR: "#D6C8F2",  // Light pastel lavender
    GEO: "#D8A0E6",  // Light pastel purple
    GER: "#A0C8F2",  // Light pastel blue
    GHA: "#F2E6A0",  // Light pastel yellow
    GRE: "#C8D8A0",  // Light pastel green
    GUA: "#D8F2C8",  // Light pastel lime
    HAI: "#A0E6D8",  // Light pastel teal
    HKG: "#F2C8D8",  // Light pastel rose
    HUN: "#A0B3F2",  // Light pastel periwinkle
    INA: "#B3A0F2",  // Light pastel lavender
    IND: "#E6D8F2",  // Light pastel violet
    IRI: "#D8E6F2",  // Light pastel blue
    IRL: "#F2B3D8",  // Light pastel pink
    IRQ: "#A0F2D6",  // Light pastel mint
    ISR: "#E6A0F2",  // Light pastel purple
    ITA: "#B3D8F2",  // Light pastel blue
    JAM: "#F2A0C8",  // Light pastel pink
    JOR: "#D8F2B3",  // Light pastel yellow
    JPN: "#B3C8F2",  // Light pastel blue
    KAZ: "#A0D8C8",  // Light pastel teal
    KEN: "#D8A0C8",  // Light pastel pink
    KOR: "#F2C8A0",  // Light pastel orange
    KSA: "#C8F2B3",  // Light pastel green
    KUW: "#A0B3F2",  // Light pastel lavender
    LAT: "#D8C8F2",  // Light pastel lilac
    LBA: "#A0F2A0",  // Light pastel mint
    LBN: "#B3F2D8",  // Light pastel teal
    LIB: "#C8A0F2",  // Light pastel purple
    LTU: "#A0D8F2",  // Light pastel blue
    LUX: "#F2E0A0",  // Light pastel yellow
    MAD: "#C8E6F2",  // Light pastel blue
    MAR: "#B3E6D8",  // Light pastel turquoise
    MAS: "#F2A0D8",  // Light pastel pink
    MDA: "#D8F2A0",  // Light pastel yellow
    MEX: "#F2C8B3",  // Light pastel orange
    MHL: "#A0B3F2",  // Light pastel blue
    MKD: "#D8A0F2",  // Light pastel lavender
    MLT: "#B3F2A0",  // Light pastel green
    MNE: "#D8B3C8",  // Light pastel pink
    MON: "#E6F2A0",  // Light pastel lime
    NED: "#A0C8D8",  // Light pastel blue
    NGR: "#A0D6C8",  // Light pastel mint
    NIG: "#F2D8E6",  // Light pastel rose
    NOR: "#C8D8A0",  // Light pastel green
    NZL: "#B3D8F2",  // Light pastel blue
    OMA: "#F2A0D6",  // Light pastel pink
    PAK: "#A0E6D8",  // Light pastel teal
    PAN: "#F2B3A0",  // Light pastel orange
    PAR: "#A0D8E6",  // Light pastel blue
    PER: "#B3D8F2",  // Light pastel blue
    PHI: "#F2E6A0",  // Light pastel yellow
    PNG: "#D8A0F2",  // Light pastel purple
    POC: "#E6A0D8",  // Light pastel pink
    POL: "#F2B3D8",  // Light pastel pink
    POR: "#A0D8F2",  // Light pastel blue
    PUR: "#B3E6C8",  // Light pastel green
    QAT: "#D8F2A0",  // Light pastel yellow
    RHO: "#A0B3F2",  // Light pastel lavender
    ROU: "#B3D8F2",  // Light pastel blue
    RSA: "#C8F2A0",  // Light pastel green
    RUS: "#F2D8A0",  // Light pastel orange
    SAM: "#B3A0F2",  // Light pastel violet
    SEN: "#F2B3D6",  // Light pastel rose
    SGP: "#A0E6F2",  // Light pastel cyan
    SLO: "#D8C8F2",  // Light pastel lilac
    SOL: "#F2D6B3",  // Light pastel peach
    SRB: "#E6A0B3",  // Light pastel red
    SRI: "#B3F2D8",  // Light pastel teal
    SUD: "#A0F2C8",  // Light pastel green
    SUI: "#C8D8F2",  // Light pastel blue
    SVK: "#A0D8F2",  // Light pastel blue
    SWE: "#E6F2B3",  // Light pastel yellow
    SYR: "#D8A0F2",  // Light pastel lavender
    TCH: "#C8D6F2",  // Light pastel blue
    THA: "#B3E6A0",  // Light pastel green
    TJK: "#D8B3E6",  // Light pastel purple
    TOG: "#A0F2D6",  // Light pastel mint
    TPE: "#B3C8F2",  // Light pastel blue
    TRI: "#F2B3D8",  // Light pastel pink
    TUN: "#C8E6D8",  // Light pastel cyan
    TUR: "#D8C8F2",  // Light pastel lilac
    UAE: "#A0F2A0",  // Light pastel green
    UKR: "#B3A0F2",  // Light pastel lavender
    UNK: "#F2E6A0",  // Light pastel yellow
    URU: "#A0D8F2",  // Light pastel blue
    USA: "#E6F2B3",  // Light pastel lime
    UZB: "#D8A0F2",  // Light pastel lavender
    VAN: "#A0F2C8",  // Light pastel mint
    VEN: "#C8D8A0",  // Light pastel green
    VIE: "#A0E6F2",  // Light pastel cyan
    VUT: "#D8F2A0",  // Light pastel yellow
    YUG: "#F2B3A0",  // Light pastel orange
    ZAM: "#B3F2A0",  // Light pastel mint green
    ZIM: "#F2D8B3"   // Light pastel peach
  };
  


