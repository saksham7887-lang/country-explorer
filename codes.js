const countryList = {
   AED: "AE", // United Arab Emirates
   INR: "IN", // India
   JPY: "JP", // Japan
   EUR: "FR", // France
   EUR: "IT", // Italy
   CHF: "CH", // Switzerland
   USD: "US", // United States
   GBP: "GB", // United Kingdom
   THB: "TH", // Thailand
   AUD: "AU", // Australia
};

const country = {
    "United Arab Emirates": "AE",
    "India": "IN",
    "Japan": "JP",
    "France": "FR",
    "Italy": "IT",
    "Switzerland": "CH",
    "United States": "US",
    "United Kingdom": "GB",
    "Thailand": "TH",
    "Australia": "AU"
}

const countryCaptions = {
    "India": "The Golden Sparrow",
    "Japan": "Land of the Rising Sun",
    "France": "The Hexagon",
    "Italy": "The Boot",
    "Switzerland": "The Land of Mountains",
    "United States": "The Land of Opportunity",
    "United Kingdom": "The Land of Royalty",  
    "Thailand": "The Land of Smiles",
    "Australia": "The Land Down Under",
    "United Arab Emirates": "The Land of Luxury"
}

const countryDescriptions = {
    "India": "India is a land of diversity, where ancient traditions coexist with modernity. From the majestic Himalayas to the serene backwaters of Kerala, India offers a rich tapestry of culture, history, and natural beauty.",
    "Japan": "Japan is a harmonious blend of tradition and innovation. From ancient temples to neon-lit cities, Japan captivates with its unique culture, stunning landscapes, and technological advancements.",
    "France": "France is renowned for its art, fashion, and culinary delights. From the romantic streets of Paris to the picturesque countryside, France offers a rich cultural experience and a taste of elegance.",
    "Italy": "Italy is a country steeped in history and culture. From the ancient ruins of Rome to the artistic treasures of Florence, Italy enchants visitors with its art, architecture, and culinary delights.",
    "Switzerland": "Switzerland is a land of breathtaking landscapes and precision engineering. From the majestic Alps to pristine lakes, Switzerland offers a perfect blend of natural beauty, outdoor adventures, and world-class craftsmanship.",
    "United States": "The United States is a land of opportunity and diversity. From the bustling cities to the vast wilderness, the U.S. offers a wide range of experiences, cultural influences, and iconic landmarks.",
    "United Kingdom": "The United Kingdom is a country rich in history and tradition. From the historic castles to the vibrant cities, the UK offers a blend of cultural heritage, scenic landscapes, and modern attractions.",
    "Thailand": "Thailand is known for its warm hospitality, stunning beaches, and vibrant culture. From bustling markets to serene temples, Thailand offers a unique blend of natural beauty and rich traditions.",
    "Australia": "Australia is a land of diverse landscapes and unique wildlife. From the iconic Sydney Opera House to the Great Barrier Reef, Australia offers a wealth of natural wonders and outdoor adventures.",
    "United Arab Emirates": "The United Arab Emirates is a land of luxury and innovation. From towering skyscrapers to desert adventures, the UAE offers a unique blend of modernity, culture, and opulence."
}

const touristPlaces = {

    AE: {
        destination: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain"],
        description: [
            "A modern city famous for luxury shopping, skyscrapers, beaches, and desert adventures.",
            "The capital of the UAE, known for the Sheikh Zayed Grand Mosque and beautiful beaches.",
            "A cultural destination known for museums, traditional architecture, and art galleries.",
            "A green oasis city known for gardens, mountains, forts, and historic sites."
        ]
    },

    IN: {
        destination: ["Agra", "Jaipur", "Goa", "Kerala"],
        description: [
            "A historic city famous for the Taj Mahal, Agra Fort, and Mughal architecture.",
            "The Pink City, known for forts, palaces, colorful markets, and rich culture.",
            "A popular coastal destination known for beautiful beaches, nightlife, and Portuguese heritage.",
            "A scenic destination famous for peaceful backwaters, beaches, and lush landscapes."
        ]
    },

    JP: {
        destination: ["Tokyo", "Mount Fuji", "Kyoto", "Osaka"],
        description: [
            "Japan's vibrant capital, famous for modern architecture, technology, shopping, and temples.",
            "Japan's iconic mountain, known for its stunning scenery and cultural significance.",
            "A historic city famous for traditional temples, shrines, gardens, and Japanese culture.",
            "A lively city known for its food, entertainment, shopping, and Osaka Castle."
        ]
    },

    FR: {
        destination: ["Paris", "Nice", "Lyon", "Bordeaux"],
        description: [
            "France's capital, famous for the Eiffel Tower, Louvre Museum, art, and historic streets.",
            "A beautiful coastal city known for beaches and Mediterranean views.",
            "A historic city known for architecture, museums, and traditional French cuisine.",
            "A charming city known for elegant architecture, historic sites, and surrounding vineyards."
        ]
    },

    IT: {
        destination: ["Rome", "Venice", "Florence", "Milan"],
        description: [
            "Italy's historic capital, famous for the Colosseum, Roman Forum, and Vatican City.",
            "A unique city famous for canals, gondolas, bridges, and historic architecture.",
            "A Renaissance city known for art, museums, architecture, and historic landmarks.",
            "A stylish city famous for fashion, shopping, architecture, and the Duomo."
        ]
    },

    CH: {
        destination: ["Zurich", "Lucerne", "Interlaken", "Geneva"],
        description: [
            "A beautiful Swiss city known for its lake, historic old town, and surrounding mountains.",
            "A picturesque city famous for Lake Lucerne, mountain views, and its historic wooden bridge.",
            "A scenic destination surrounded by the Swiss Alps and popular for adventure activities.",
            "A lakeside city known for the Jet d'Eau, international organizations, and beautiful scenery."
        ]
    },

    US: {
        destination: ["New York", "Los Angeles", "Las Vegas", "Grand Canyon"],
        description: [
            "A famous global city known for Times Square, Central Park, museums, and the Statue of Liberty.",
            "A major city known for Hollywood, beaches, entertainment, and the film industry.",
            "A vibrant desert city famous for entertainment, resorts, shows, and nightlife.",
            "A spectacular natural landmark known for its enormous canyon and breathtaking landscapes."
        ]
    },

    GB: {
        destination: ["London", "Edinburgh", "Stonehenge", "Bath"],
        description: [
            "The UK's capital, famous for Big Ben, Buckingham Palace, museums, and historic landmarks.",
            "Scotland's historic capital, known for Edinburgh Castle, old streets, and beautiful scenery.",
            "An ancient prehistoric monument famous for its mysterious arrangement of massive stones.",
            "A historic city known for Roman baths, Georgian architecture, and beautiful streets."
        ]
    },

    TH: {
        destination: ["Bangkok", "Phuket", "Pattaya", "Chiang Mai"],
        description: [
            "Thailand's busy capital, known for temples, markets, street food, and modern attractions.",
            "A popular island destination famous for tropical beaches, clear waters, and island activities.",
            "A coastal city known for beaches, entertainment, water activities, and nearby islands.",
            "A northern Thai city known for ancient temples, mountain scenery, and traditional culture."
        ]
    },

    AU: {
        destination: ["Sydney", "Melbourne", "Great Barrier Reef", "Gold Coast"],
        description: [
            "A famous Australian city known for the Sydney Opera House, Harbour Bridge, and beaches.",
            "A cultural city known for art, coffee, sports, shopping, and distinctive architecture.",
            "One of the world's largest coral reef systems, famous for marine life and underwater scenery.",
            "A popular coastal destination known for beaches, surfing, theme parks, and entertainment."
        ]
    }

};

const festivals = {
    IN: [
        "Diwali",
        "Holi",
        "Durga Puja",
        "Onam"
    ],

    JP: [
        "Hanami",
        "Gion Matsuri",
        "Tanabata",
        "Obon"
    ],

    FR: [
        "Bastille Day",
        "Cannes Film Festival",
        "Nice Carnival",
        "Festival d'Avignon"
    ],

    IT: [
        "Carnival of Venice",
        "Palio di Siena",
        "Infiorata Festival",
        "Verona Opera Festival"
    ],

    CH: [
        "Basel Carnival",
        "Fête de l'Escalade",
        "Montreux Jazz Festival",
        "Locarno Film Festival"
    ],

    US: [
        "Thanksgiving",
        "Independence Day",
        "Mardi Gras",
        "Coachella"
    ],

    GB: [
        "Notting Hill Carnival",
        "Glastonbury Festival",
        "Edinburgh Festival Fringe",
        "Guy Fawkes Night"
    ],

    AE: [
        "Dubai Shopping Festival",
        "UAE National Day",
        "Dubai Food Festival",
        "Al Dhafra Festival"
    ],

    TH: [
        "Songkran",
        "Loy Krathong",
        "Yi Peng",
        "Phi Ta Khon"
    ],

    AU: [
        "Vivid Sydney",
        "Sydney Festival",
        "Melbourne International Arts Festival",
        "Woodford Folk Festival"
    ]
};

const religions = {
    IN: ["Hinduism", "Islam", "Christianity"],

    JP: ["Buddhism", "Shinto", "Religiously Unaffiliated"],

    FR: ["Christianity", "Islam", "Religiously Unaffiliated"],

    IT: ["Christianity", "Islam", "Religiously Unaffiliated"],

    CH: ["Christianity", "Islam", "Religiously Unaffiliated"],

    US: ["Christianity", "Judaism", "Religiously Unaffiliated"],

    GB: ["Christianity", "Islam", "Religiously Unaffiliated"],

    AE: ["Islam", "Christianity", "Hinduism"],

    TH: ["Buddhism", "Islam", "Christianity"],

    AU: ["Christianity", "Islam", "Religiously Unaffiliated"]
};

const cuisines = {
    IN: ["Indian", "Mughlai", "South Indian", "Punjabi"],

    JP: ["Japanese", "Sushi", "Ramen", "Tempura"],

    FR: ["French", "Provençal", "Alsatian", "Norman"],

    IT: ["Italian", "Sicilian", "Neapolitan", "Tuscan"],

    CH: ["Swiss", "Italian Swiss", "French Swiss", "German Swiss"],

    US: ["American", "Southern", "Tex-Mex", "Cajun"],

    GB: ["British", "English", "Scottish", "Welsh"],

    AE: ["Emirati", "Middle Eastern", "Persian", "Levantine"],

    TH: ["Thai", "Isan", "Northern Thai", "Southern Thai"],

    AU: ["Australian", "Modern Australian", "Bush Tucker", "Aboriginal Australian"]
};

const travelTipsData = {
    IN: {
        bestTime: "October to March. Winter is the most popular season.",
        visa: "Check visa requirements based on nationality",
        safety: "Follow local safety guidelines and keep valuables secure",
        budget: "₹2,500–₹6,000 per day",
        transport: "Trains, buses, metro and domestic flights"
    },

    JP: {
        bestTime: "March to May and September to November. Spring and autumn are the most popular seasons.",
        visa: "Tourist visa requirements depend on nationality",
        safety: "Generally safe; follow local emergency and earthquake guidance",
        budget: "₹4,000–₹14,000 per day",
        transport: "Shinkansen, trains, metro and buses"
    },

    FR: {
        bestTime: "April to June and September to October. Spring and autumn are the most popular seasons.",
        visa: "Schengen visa may be required depending on nationality",
        safety: "Stay alert in crowded tourist areas and on public transport",
        budget: "€80–€180 per day",
        transport: "Metro, trains, buses and high-speed TGV"
    },

    IT: {
        bestTime: "April to June and September to October. Spring and autumn are the most popular seasons.",
        visa: "Schengen visa may be required depending on nationality",
        safety: "Take normal precautions in crowded tourist areas",
        budget: "€70–€160 per day",
        transport: "Trains, metro, buses and regional transport"
    },

    CH: {
        bestTime: "June to September. Summer is the most popular season.",
        visa: "Schengen visa may be required depending on nationality",
        safety: "Generally safe; take normal travel precautions",
        budget: "CHF 100–250 per day",
        transport: "Trains, buses, boats and cable cars"
    },

    US: {
        bestTime: "April to June and September to October. Spring and autumn are the most popular seasons.",
        visa: "ESTA or visa requirements depend on nationality",
        safety: "Follow local safety guidance and stay aware of your surroundings",
        budget: "$100–$250 per day",
        transport: "Cars, buses, trains, metro and domestic flights"
    },

    GB: {
        bestTime: "May to September. Summer is the most popular season.",
        visa: "Visa or ETA requirements depend on nationality",
        safety: "Generally safe; take normal precautions in crowded areas",
        budget: "£80–£180 per day",
        transport: "Trains, Underground, buses and coaches"
    },

    AE: {
        bestTime: "November to March. Winter is the most popular season.",
        visa: "Visa requirements depend on nationality",
        safety: "Follow local laws and customs",
        budget: "AED 300–700 per day",
        transport: "Metro, taxis, buses and rental cars"
    },

    TH: {
        bestTime: "November to February. The cool and dry season is the most popular.",
        visa: "Visa requirements depend on nationality",
        safety: "Take normal precautions and follow local travel guidance",
        budget: "฿1,500–฿4,000 per day",
        transport: "Buses, trains, metro, boats and taxis"
    },

    AU: {
        bestTime: "September to November and March to May. Spring and autumn are the most popular seasons.",
        visa: "Visa or ETA requirements depend on nationality",
        safety: "Follow local safety guidance and be aware of weather conditions",
        budget: "A$100–A$250 per day",
        transport: "Trains, buses, ferries and domestic flights"
    }
};