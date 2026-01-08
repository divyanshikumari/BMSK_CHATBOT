// Bihar Districts and Blocks Data
const biharData = {
    Araria: ["Araria", "Bhargama", "Forbesganj", "Jokihat", "Kursa Kanta", "Narpatganj", "Palasi", "Raniganj", "Sikti"],
    Arwal: ["Arwal", "Kaler", "Karpi", "Kurtha", "Sonbhadra Banshi Suryapur"],
    Aurangabad: [
        "Aurangabad",
        "Barun",
        "Daudnagar",
        "Deo",
        "Goh",
        "Haspura",
        "Kutumba",
        "Madanpur",
        "Nabinagar",
        "Obra",
        "Rafiganj",
    ],
    Banka: [
        "Amarpur",
        "Banka",
        "Barahat",
        "Belhar",
        "Bounsi",
        "Chandan",
        "Dhoraiya",
        "Fullidumar",
        "Katoria",
        "Rajoun",
        "Sambhuganj",
    ],
    Begusarai: [
        "Bachhwara",
        "Bakhri",
        "Balia",
        "Barauni",
        "Begusarai",
        "Bhagwanpur",
        "Birpur",
        "Cheria Bariarpur",
        "Chhorahi",
        "Dandari",
        "Garhpura",
        "Khodawandpur",
        "Mansurchak",
        "Matihani",
        "Naokothi",
        "Sahebpur Kamal",
        "Samho Akha Kurha",
        "Teghra",
    ],
    Bhagalpur: [
        "Bihpur",
        "Gopalpur",
        "Goradih",
        "Ismailpur",
        "Jagdishpur",
        "Kahalgaon",
        "Kharik",
        "Narayanpur",
        "Nathnagar",
        "Naugachhia",
        "Pirpainti",
        "Rangra Chowk",
        "Sabour",
        "Sanhaula",
        "Shahkund",
        "Sultanganj",
    ],
    Bhojpur: [
        "Arrah",
        "Agiaon",
        "Barhara",
        "Bihiya",
        "Charpokhari",
        "Garhani",
        "Jagdishpur",
        "Koilwar",
        "Piro",
        "Sahar",
        "Sandesh",
        "Shahpur",
        "Tarari",
        "Udwantnagar",
    ],
    Buxar: [
        "Buxar",
        "Brahmapur",
        "Chakki",
        "Chausa",
        "Chaugain",
        "Dumraon",
        "Itarhi",
        "Kesath",
        "Nawanagar",
        "Rajpur",
        "Simri",
    ],
    Darbhanga: [
        "Alinagar",
        "Bahadurpur",
        "Baheri",
        "Benipur",
        "Biraul",
        "Darbhanga Sadar",
        "Gaura Bauram",
        "Ghanshyampur",
        "Hanuman Nagar",
        "Hayaghat",
        "Jale",
        "Keoti",
        "Kiratpur",
        "Kusheshwar Asthan East",
        "Kusheshwar Asthan",
        "Manigachhi",
        "Singhwara",
        "Tardih",
    ],
    "East Champaran": [
        "Adapur",
        "Areraj",
        "Banjaria",
        "Bankatwa",
        "Chakia",
        "Chiraiya",
        "Dhaka",
        "Ghorasahan",
        "Harsidhi",
        "Kalyanpur",
        "Kesaria",
        "Kotwa",
        "Madhuban",
        "Mehsi",
        "Motihari",
        "Narkatia",
        "Paharpur",
        "Pakri Dayal",
        "Patahi",
        "Phenhara",
        "Piprakothi",
        "Ramgarhwa",
        "Raxaul",
        "Sangrampur",
        "Sugauli",
        "Tetaria",
        "Turkaulia",
    ],
    Gaya: [
        "Gaya Town",
        "Amas",
        "Atri",
        "Banke Bazar",
        "Barachatti",
        "Bathani",
        "Belaganj",
        "Bodh Gaya",
        "Dobhi",
        "Dumaria",
        "Fatehpur",
        "Guraru",
        "Gurua",
        "Imamganj",
        "Khizirsarai",
        "Konch",
        "Manpur",
        "Mohanpur",
        "Muhra",
        "Paraiya",
        "Sherghati",
        "Tan Kuppa",
        "Tekari",
        "Wazirganj",
    ],
    Gopalganj: [
        "Baikunthpur",
        "Barauli",
        "Bhorey",
        "Bijaipur",
        "Gopalganj",
        "Hathua",
        "Katiya",
        "Kuchaikote",
        "Manjha",
        "Pach Deuri",
        "Phulwaria",
        "Sidhwalia",
        "Thawe",
        "Uchkagaon",
    ],
    Jamui: [
        "Barhat",
        "Chakai",
        "Gidhour",
        "Islampur Aliganj",
        "Jamui",
        "Jhajha",
        "Khaira",
        "Laxmipur",
        "Sikandra",
        "Sono",
    ],
    Jehanabad: ["Ghoshi", "Hulasganj", "Jehanabad", "Kako", "Makhdumpur", "Modanganj", "Ratni Faridpur"],
    Khagaria: ["Alauli", "Baldaur", "Chautham", "Gogri", "Khagaria", "Mansi", "Parbatta"],
    Kishanganj: ["Bahadurganj", "Dighalbank", "Kishanganj", "Kochadhaman", "Pothia", "Terhagachh", "Thakurganj"],
    Kaimur: [
        "Adhaura",
        "Bhabua",
        "Bhagwanpur",
        "Chainpur",
        "Chand",
        "Durgawati",
        "Kudra",
        "Mohania",
        "Nuaon",
        "Ramgarh",
        "Rampur",
    ],
    Katihar: [
        "Amdabad",
        "Azamnagar",
        "Balrampur",
        "Barari",
        "Barsoi",
        "Dandkhora",
        "Falka",
        "Hasanganj",
        "Kadwa",
        "Katihar",
        "Korha",
        "Kursela",
        "Manihari",
        "Mansahi",
        "Pranpur",
        "Sameli",
    ],
    Lakhisarai: ["Barahiya", "Chanan", "Halsi", "Lakhisarai", "Pipariya", "Ramgarh Chowk", "Surajgarha"],
    Madhubani: [
        "Andhra Tharhi",
        "Babubarhi",
        "Basopatti",
        "Benipatti",
        "Bisfi",
        "Ghoghardiha",
        "Harlakhi",
        "Jainagar",
        "Jhanjharpur",
        "Kaluahi",
        "Khajauli",
        "Ladania",
        "Lakhnaur",
        "Laukahi",
        "Madhwapur",
        "Madhubani",
        "Pandaul",
        "Phulparas",
        "Rahika",
        "Rajnagar",
    ],
    Munger: [
        "Asarganj",
        "Bariarpur",
        "Dharhara",
        "Haveli Kharagpur",
        "Jamalpur",
        "Munger",
        "Sangrampur",
        "Tarapur",
        "Tetia Bambar",
    ],
    Madhepura: [
        "Alamnagar",
        "Bihariganj",
        "Chousa",
        "Gamhariya",
        "Ghelardh",
        "Gwalpara",
        "Kumarkhand",
        "Madhepura",
        "Murliganj",
        "Puraini",
        "Shankarpur",
        "Singheshwar",
        "Udakishunganj",
    ],
    Muzaffarpur: [
        "Aurai",
        "Bandra",
        "Bochaha",
        "Gaighat",
        "Kanti",
        "Katra",
        "Kurhani",
        "Marwan",
        "Minapur",
        "Muraul",
        "Motipur",
        "Musahri",
        "Paroo",
        "Sahebganj",
        "Sakra",
        "Saraiya",
    ],
    Nalanda: [
        "Asthawan",
        "Bena",
        "Biharsharif",
        "Bind",
        "Chandi",
        "Ekangarsarai",
        "Giriyak",
        "Harnaut",
        "Hilsa",
        "Islampur",
        "Karai Parsurai",
        "Katrisarai",
        "Nagarnausa",
        "Noorsarai",
        "Parwalpur",
        "Rahui",
        "Rajgir",
        "Sarmera",
        "Silao",
        "Tharthari",
    ],
    Nawada: [
        "Akbarpur",
        "Govindpur",
        "Hisua",
        "Kashichak",
        "Kawakol",
        "Meskaur",
        "Nardiganj",
        "Narhat",
        "Nawada",
        "Pakribarawan",
        "Rajauli",
        "Roh",
        "Sirdala",
        "Warisaliganj",
    ],
    Patna: [
        "Patna Sadar",
        "Athmalgola",
        "Bakhtiarpur",
        "Barh",
        "Belchi",
        "Bihta",
        "Bikram",
        "Danapur",
        "Daniyawan",
        "Dhanarua",
        "Dulhin Bazar",
        "Fatuha",
        "Ghoswari",
        "Khusrupur",
        "Maner",
        "Masaurhi",
        "Mokama",
        "Naubatpur",
        "Paliganj",
        "Pandarak",
        "Phulwari Sharif",
        "Punpun",
        "Sampatchak",
    ],
    Purnia: [
        "Amour",
        "Baisa",
        "Baisi",
        "Banmankhi",
        "Barhara Kothi",
        "Bhawanipur Rajdham",
        "Dagarua",
        "Dhamdaha",
        "Jalalgarh",
        "Kasba",
        "Krityanand Nagar",
        "Purnia East",
        "Rupauli",
        "Srinagar",
    ],
    Rohtas: [
        "Akorhi Gola",
        "Bikramganj",
        "Chenari",
        "Dawath",
        "Dehri",
        "Dinara",
        "Karakat",
        "Kargahar",
        "Kochas",
        "Nasriganj",
        "Nauhatta",
        "Nokha",
        "Rajpur",
        "Rohtas",
        "Sanjhauli",
        "Sasaram",
        "Sheosagar",
        "Suryapura",
        "Tilauthu",
    ],
    Saharsa: [
        "Banma Itahri",
        "Kahara",
        "Mahishi",
        "Nauhatta",
        "Patarghat",
        "Salkhua",
        "Sattar Kataiya",
        "Sour Bazar",
        "Simri Bakhtiyarpur",
        "Sonbarsa",
    ],
    Samastipur: [
        "Bibhutipur",
        "Bithan",
        "Dalsing Sarai",
        "Hasanpur",
        "Kalyanpur",
        "Khanpur",
        "Mohanpur",
        "Mohiuddin Nagar",
        "Morwa",
        "Patori",
        "Pusa",
        "Rosera",
        "Samastipur",
        "Sarairanjan",
        "Shivajinagar",
        "Singhiya",
        "Tajpur",
        "Ujiyarpur",
    ],
    Saran: [
        "Amnour",
        "Baniapur",
        "Chapra",
        "Dariapur",
        "Dighwara",
        "Ekma",
        "Garkha",
        "Isuapur",
        "Lahladpur",
        "Maker",
        "Manjhi",
        "Marhaura",
        "Nagra",
        "Parsa",
        "Panapur",
        "Revelganj",
        "Sonepur",
        "Tariwa",
    ],
    Sheohar: ["Dumri Katsari", "Piprahi", "Purnahiya", "Sheohar", "Tariyani"],
    Sheikhpura: ["Ariari", "Barbigha", "Chewara", "Ghat Kusumba", "Sheikhpura", "Shekhopur Sarai"],
    Sitamarhi: [
        "Bairgania",
        "Bathnaha",
        "Belsand",
        "Bokhra",
        "Dumra",
        "Majorganj",
        "Nanpur",
        "Parsauni",
        "Parihar",
        "Pupri",
        "Riga",
        "Runni Saidpur",
        "Sitamarhi",
        "Sonbarsa",
    ],
    Siwan: [
        "Andar",
        "Barharia",
        "Basantpur",
        "Bhagwanpur Hat",
        "Darauli",
        "Goriakothi",
        "Hasanpura",
        "Hussainganj",
        "Lakri Nabiganj",
        "Maharajganj",
        "Mairwa",
        "Nautan",
        "Pachrukhi",
        "Raghunathpur",
        "Siwan",
        "Siswan",
        "Ziradei",
    ],
    Supaul: [
        "Basantpur",
        "Chhatapur",
        "Kishanpur",
        "Marauna",
        "Nirmali",
        "Pipra",
        "Pratapganj",
        "Raghopur",
        "Saraigarh Bhaptiyahi",
        "Supaul",
        "Tribeniganj",
    ],
    Vaishali: [
        "Hajipur",
        "Bidupur",
        "Desri",
        "Goraul",
        "Jandaha",
        "Lalganj",
        "Mahnar",
        "Mahua",
        "Patepur",
        "Paterhi Belsar",
        "Raghopur",
        "Rajapakar",
        "Sahdei Buzurg",
    ],
    "West Champaran": [
        "Bettiah",
        "Bagaha",
        "Bairia",
        "Bhitiharwa",
        "Chanpatia",
        "Gaunaha",
        "Jogapatti",
        "Lauriya",
        "Mainatanr",
        "Majhaulia",
        "Narkatiaganj",
        "Nautan",
        "Piprasi",
        "Ramnagar",
        "Sikta",
        "Thakrahan",
    ],
}

// Language content
const content = {
    en: {
        welcome: "Welcome to Bihar Mausam Sewa Kendra.",
        selectLanguage: "Please select your preferred language:",
        forecast: "Forecast",
        observed: "Observed",
        selectDistrict: "Please select a district:",
        selectBlock: "Please select a block in",
        mm: "mm",
        restart: "Start New Query",
        userSelected: "You selected:",
        forecast5day: "5-Day Forecast",
        observedData: "Observed Weather Data",
        selectObserved: "Select Observed",
        selectDifferentDistrict: "Select Different District",
        selectForecast: "Select Forecast",
        temperature: "Temperature",
        humidity: "Humidity",
        windSpeed: "Wind Speed",
        windDirection: "Wind Direction",
        cloudCover: "Cloud Cover",
    },
    hi: {
        welcome: "बिहार मौसम सेवा केंद्र में आपका स्वागत है।",
        selectLanguage: "कृपया अपनी पसंदीदा भाषा चुनें:",
        forecast: "पूर्वानुमान",
        observed: "देखा गया",
        selectDistrict: "कृपया एक जिला चुनें:",
        selectBlock: "कृपया ब्लॉक चुनें",
        mm: "मिमी",
        restart: "नई क्वेरी शुरू करें",
        userSelected: "आपने चुना:",
        forecast5day: "5 दिन का अनुमान",
        observedData: "देखी गई मौसम जानकारी",
        selectObserved: "देखा गया चुनें",
        selectDifferentDistrict: "अलग जिला चुनें",
        selectForecast: "पूर्वानुमान चुनें",
        temperature: "तापमान",
        humidity: "आर्द्रता",
        windSpeed: "पवन गति",
        windDirection: "पवन दिशा",
        cloudCover: "बादल आवरण",
    },
}

let currentLanguage = "en"
let selectedDataType = ""
let selectedDistrict = ""
let selectedBlock = ""
let selectedDay = ""
let forecastData = []
const allDistricts = Object.keys(biharData).sort()


const API_KEY = '4d609a3f9f5afd59ca96c01776113a34'

const chatBody = document.getElementById("chatbot-body")

// Initialize chatbot
function init() {
    showWelcomeMessage()
}

// Show welcome message
function showWelcomeMessage() {
    chatBody.innerHTML = ""

    const welcomeDiv = document.createElement("div")
    welcomeDiv.className = "message"
    welcomeDiv.innerHTML = `
        <div class="bot-message welcome">
            <p>${content.en.welcome}</p>
            <p style="margin-top: 10px;">${content.hi.welcome}</p>
        </div>
    `
    chatBody.appendChild(welcomeDiv)

    setTimeout(() => showLanguageSelection(), 500)
}

// Show language selection
function showLanguageSelection() {
    const langDiv = document.createElement("div")
    langDiv.className = "message"

    langDiv.innerHTML = `
        <div class="bot-message">
            <p>${content.en.selectLanguage}</p>
            <p>${content.hi.selectLanguage}</p>
            <div class="button-group two-buttons">
                <button class="chat-button lang-option" onclick="selectLanguage('en')">English</button>
                <button class="chat-button lang-option" onclick="selectLanguage('hi')">हिंदी</button>
            </div>
        </div>
    `
    chatBody.appendChild(langDiv)
    scrollToBottom()
}

// Select language
function selectLanguage(lang) {
    const langButtons = document.querySelectorAll(".lang-option")
    langButtons.forEach((btn) => {
        btn.disabled = true
        btn.style.opacity = "0.5"
        btn.style.cursor = "not-allowed"
    })

    currentLanguage = lang

    const userDiv = document.createElement("div")
    userDiv.className = "message"
    userDiv.innerHTML = `
        <div class="user-message">
            ${lang === "en" ? "English" : "हिंदी"}
        </div>
    `
    chatBody.appendChild(userDiv)
    scrollToBottom()

    setTimeout(() => showDataTypeSelection(), 500)
}

function showDataTypeSelection() {
    const dataTypeDiv = document.createElement("div")
    dataTypeDiv.className = "message"

    dataTypeDiv.innerHTML = `
        <div class="bot-message">
            <div class="data-type-cards">
                <div class="data-type-card" onclick="selectDataType('forecast')">
                    <div class="card-image forecast-image">
                        <img src="images/forecast.png" alt="Weather Forecast">
                    </div>
                    <div class="card-label">${content[currentLanguage].forecast}</div>
                </div>
                <div class="data-type-card" onclick="selectDataType('observed')">
                    <div class="card-image observed-image">
                        <img src="images/observed.jpg" alt="Current Weather">
                    </div>
                    <div class="card-label">${content[currentLanguage].observed}</div>
                </div>
            </div>
        </div>
    `
    chatBody.appendChild(dataTypeDiv)
    scrollToBottom()
}

// New function to handle data type selection
function selectDataType(type) {
    selectedDataType = type

    const userDiv = document.createElement("div")
    userDiv.className = "message"
    userDiv.innerHTML = `
        <div class="user-message">
            ${type === "forecast" ? content[currentLanguage].forecast : content[currentLanguage].observed}
        </div>
    `
    chatBody.appendChild(userDiv)
    scrollToBottom()

    // After data type selection, proceed to district selection
    setTimeout(() => showDistrictSelection(), 500)
}

// Show district selection
function showDistrictSelection() {
    const districtDiv = document.createElement("div")
    districtDiv.className = "message"

    const listHTML = allDistricts
        .map(
            (district) =>
            `<div class="list-item-option" onclick="selectDistrict('${district}')">
          <span class="list-item-text">${getLocalizedName(district).toUpperCase()}</span>
        </div>`,
        )
        .join("")

    districtDiv.innerHTML = `
        <div class="bot-message">
            ${content[currentLanguage].selectDistrict}
            <input type="text" id="districtSearch" placeholder="Search districts..." oninput="filterDistricts()" class="search-input">
            <div class="list-group" id="districtList">
                ${listHTML}
            </div>
        </div>
    `
    chatBody.appendChild(districtDiv)
    scrollToBottom()
}

// Select district
function selectDistrict(district) {
    selectedDistrict = district

    const userDiv = document.createElement("div")
    userDiv.className = "message"
    userDiv.innerHTML = `
        <div class="user-message">
            ${district.toUpperCase()}
        </div>
    `
    chatBody.appendChild(userDiv)
    scrollToBottom()

    setTimeout(() => showBlockSelection(district), 500)
}

// Filter districts based on search input
function filterDistricts() {
    const searchValue = document.getElementById('districtSearch').value.toLowerCase()
    const filteredDistricts = allDistricts.filter(district =>
        getLocalizedName(district).toLowerCase().includes(searchValue)
    )
    const listHTML = filteredDistricts
        .map(
            (district) =>
            `<div class="list-item-option" onclick="selectDistrict('${district}')">
          <span class="list-item-text">${getLocalizedName(district).toUpperCase()}</span>
        </div>`,
        )
        .join("")
    document.getElementById('districtList').innerHTML = listHTML
}

// Filter blocks based on search input
function filterBlocks() {
    const searchValue = document.getElementById('blockSearch').value.toLowerCase()
    const allBlocks = biharData[selectedDistrict]
    const filteredBlocks = allBlocks.filter(block =>
        getLocalizedName(block).toLowerCase().includes(searchValue)
    )
    const listHTML = filteredBlocks
        .map(
            (block) =>
            `<div class="list-item-option" onclick="handleBlockClick('${block}')">
          <span class="list-item-text">${getLocalizedName(block)}</span>
        </div>`,
        )
        .join("")
    document.getElementById('blockList').innerHTML = listHTML
}

// Show block selection
function showBlockSelection(district) {
    const blockDiv = document.createElement("div")
    blockDiv.className = "message"

    const blocks = biharData[district]
    const listHTML = blocks
        .map(
            (block) =>
            `<div class="list-item-option" onclick="handleBlockClick('${block}')">
          <span class="list-item-text">${getLocalizedName(block)}</span>
        </div>`,
        )
        .join("")

    blockDiv.innerHTML = `
        <div class="bot-message">
            ${content[currentLanguage].selectBlock} ${getLocalizedName(district)}:
            <input type="text" id="blockSearch" placeholder="Search blocks..." oninput="filterBlocks()" class="search-input">
            <div class="list-group" id="blockList">
                ${listHTML}
            </div>
        </div>
    `
    chatBody.appendChild(blockDiv)
    scrollToBottom()
}

function getWindDirectionName(degrees) {
    if (degrees >= 341 || degrees <= 30) return currentLanguage === "en" ? "North" : "उत्तर"
    if (degrees >= 31 && degrees <= 70) return currentLanguage === "en" ? "Northeast" : "उत्तर-पूर्व"
    if (degrees >= 71 && degrees <= 120) return currentLanguage === "en" ? "East" : "पूर्व"
    if (degrees >= 121 && degrees <= 160) return currentLanguage === "en" ? "Southeast" : "दक्षिण-पूर्व"
    if (degrees >= 161 && degrees <= 210) return currentLanguage === "en" ? "South" : "दक्षिण"
    if (degrees >= 211 && degrees <= 250) return currentLanguage === "en" ? "Southwest" : "दक्षिण-पश्चिम"
    if (degrees >= 251 && degrees <= 280) return currentLanguage === "en" ? "West" : "पश्चिम"
    if (degrees >= 281 && degrees <= 340) return currentLanguage === "en" ? "Northwest" : "उत्तर-पश्चिम"
    return currentLanguage === "en" ? "Variable" : "परिवर्तनशील"
}

function getWindDirectionArrow(degrees) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 100 100" style="transition: transform 0.3s ease;">
      <!-- Dashed circular border -->
      <circle cx="50" cy="50" r="40" fill="none" stroke="#666" stroke-width="2" stroke-dasharray="5,3"/>
      
      <!-- Compass lines for cardinal directions -->
      <line x1="50" y1="15" x2="50" y2="25" stroke="#999" stroke-width="1.5"/>
      <line x1="50" y1="75" x2="50" y2="85" stroke="#999" stroke-width="1.5"/>
      <line x1="15" y1="50" x2="25" y2="50" stroke="#999" stroke-width="1.5"/>
      <line x1="75" y1="50" x2="85" y2="50" stroke="#999" stroke-width="1.5"/>
      
      <!-- Navigation arrow pointing in wind direction -->
      <g transform="rotate(${degrees} 50 50)">
        <polygon points="50,20 58,50 50,45 42,50" fill="#2c3e50" stroke="#fff" stroke-width="1.5"/>
        <polygon points="50,55 42,50 50,80 58,50" fill="#34495e" opacity="0.7"/>
      </g>
      
      <!-- Center dot -->
      <circle cx="50" cy="50" r="4" fill="#e74c3c"/>
    </svg>
  `
}

function handleBlockClick(block) {
    selectedBlock = block

    const userDiv = document.createElement("div")
    userDiv.className = "message"
    userDiv.innerHTML = `
    <div class="user-message">
      ${block}
    </div>
  `
    chatBody.appendChild(userDiv)
    scrollToBottom()

    // Show weather data based on selected data type
    setTimeout(() => {
        if (selectedDataType === "forecast") {
            showForecastData()
        } else {
            showObservedData()
        }
    }, 500)
}

async function showForecastData() {
    // Show loading message
    const loadingDiv = document.createElement("div")
    loadingDiv.className = "message"
    loadingDiv.innerHTML = `
    <div class="bot-message loading">
      ${currentLanguage === "en" ? "Fetching forecast data" : "पूर्वानुमान डेटा प्राप्त कर रहे हैं"}
    </div>
  `
    chatBody.appendChild(loadingDiv)
    scrollToBottom()

    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedDistrict},IN&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('Failed to fetch forecast data');
        }
        const data = await response.json();

        // Process API data to get daily forecasts
        const dailyForecasts = {};
        data.list.forEach(item => {
            const date = new Date(item.dt * 1000).toDateString();
            if (!dailyForecasts[date]) {
                dailyForecasts[date] = {
                    temps: [],
                    humidities: [],
                    windSpeeds: [],
                    windDirections: [],
                    clouds: [],
                    weather: item.weather[0].description
                };
            }
            dailyForecasts[date].temps.push(item.main.temp);
            dailyForecasts[date].humidities.push(item.main.humidity);
            dailyForecasts[date].windSpeeds.push(item.wind.speed);
            dailyForecasts[date].windDirections.push(item.wind.deg);
            dailyForecasts[date].clouds.push(item.clouds.all);
        });

        const forecastDays = Object.keys(dailyForecasts).slice(0, 5).map((date, index) => {
            const dayData = dailyForecasts[date];
            return {
                dayNumber: index + 1,
                date: formatForecastDate(new Date(date)),
                tmax: Math.max(...dayData.temps),
                tmin: Math.min(...dayData.temps),
                humidity: Math.round(dayData.humidities.reduce((a, b) => a + b) / dayData.humidities.length),
                windSpeed: Math.round((dayData.windSpeeds.reduce((a, b) => a + b) / dayData.windSpeeds.length) * 3.6), // m/s to km/h
                windDirection: Math.round(dayData.windDirections.reduce((a, b) => a + b) / dayData.windDirections.length),
                cloudCover: getCloudCondition(Math.round(dayData.clouds.reduce((a, b) => a + b) / dayData.clouds.length)),
            };
        });

        forecastData = forecastDays

        // Remove loading message
        chatBody.removeChild(loadingDiv)

        // Show day selection
        showDaySelection()
    } catch (error) {
        chatBody.removeChild(loadingDiv)

        const errorDiv = document.createElement("div")
        errorDiv.className = "message"
        errorDiv.innerHTML = `
      <div class="bot-message" style="color: #d32f2f;">
        ${currentLanguage === "en" ? "Sorry, unable to fetch forecast data. Please try again." : "क्षमा करें, पूर्वानुमान डेटा प्राप्त करने में असमर्थ। कृपया पुन: प्रयास करें।"}
      </div>
    `
        chatBody.appendChild(errorDiv)
    }

    scrollToBottom()
}

function showDaySelection() {
    const dayDiv = document.createElement("div")
    dayDiv.className = "message"

    const listHTML = forecastData
        .map(
            (day) =>
            `<div class="list-item-option" onclick="selectDay(${day.dayNumber})">
          <span class="list-item-text">${currentLanguage === "hi" ? `दिन ${day.dayNumber} - ${day.date}` : `Day ${day.dayNumber} - ${day.date}`}</span>
        </div>`,
    )
    .join("")

  dayDiv.innerHTML = `
        <div class="bot-message">
            ${currentLanguage === "en" ? "Select a day to view forecast:" : "पूर्वानुमान देखने के लिए दिन चुनें:"}
            <div class="list-group">
                ${listHTML}
            </div>
        </div>
    `
  chatBody.appendChild(dayDiv)
  scrollToBottom()
}

function selectDay(dayNumber) {
  selectedDay = dayNumber

  const userDiv = document.createElement("div")
  userDiv.className = "message"
  userDiv.innerHTML = `
        <div class="user-message">
            ${currentLanguage === "hi" ? `दिन ${dayNumber}` : `Day ${dayNumber}`}
        </div>
    `
  chatBody.appendChild(userDiv)
  scrollToBottom()

  setTimeout(() => showDayForecast(dayNumber), 500)
}

function showDayForecast(dayNumber) {
  const day = forecastData.find(d => d.dayNumber === dayNumber)
  if (!day) return

  const forecastDiv = document.createElement("div")
  forecastDiv.className = "message"

  forecastDiv.innerHTML = `
    <div class="bot-message forecast-display-new">
      <div class="forecast-header-new">
        <h2>${currentLanguage === "en" ? `Weather Forecast for Day ${day.dayNumber}` : `दिन ${day.dayNumber} के लिए मौसम पूर्वानुमान`}</h2>
      </div>
      
      <div class="forecast-cards-container-new">
        <div class="forecast-day-card-new">
          <div class="day-header-new">
            <div class="day-badge">${currentLanguage === "hi" ? `दिन ${day.dayNumber}` : `Day ${day.dayNumber}`}</div>
            <div class="day-date-new">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              ${day.date}
            </div>
          </div>
          
          <div class="forecast-params-grid">
            <div class="forecast-param-item">
            <div class="param-icon-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" stroke-width="2.5">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
            </svg>
            <span class="param-label-text">${content[currentLanguage].temperature}</span>
            </div>
            <div class="param-value-new">${Number(day.tmax).toFixed(1)}°C / ${Number(day.tmin).toFixed(1)}°C</div>
            </div>

            
            <div class="forecast-param-item">
              <div class="param-icon-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 64 64" fill="none">
                  <defs>
                    <linearGradient id="dropGrad${day.dayNumber}" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style="stop-color:#B3E5FC;stop-opacity:1" />
                      <stop offset="50%" style="stop-color:#4FC3F7;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#0288D1;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <path d="M32 8 C24 20, 16 24, 16 36 C16 44, 23 52, 32 52 C41 52, 48 44, 48 36 C48 24, 40 20, 32 8 Z" fill="url(#dropGrad${day.dayNumber})"/>
                  <text x="32" y="38" font-family="Arial" font-size="16" font-weight="bold" fill="white" text-anchor="middle">%</text>
                </svg>
                <span class="param-label-text">${content[currentLanguage].humidity}</span>
              </div>
              <div class="param-value-new">${day.humidity}%</div>
            </div>
            
            <div class="forecast-param-item">
              <div class="param-icon-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 64 64" fill="none">
                  <path d="M12 28 Q20 20, 28 28 Q36 20, 44 28" fill="#B3D9FF" stroke="#4A90E2" stroke-width="2"/>
                  <path d="M8 38 Q16 30, 24 38 Q32 30, 40 38 Q48 30, 56 38" fill="#7FB3E5" stroke="#2E5C8A" stroke-width="2"/>
                  <circle cx="16" cy="48" r="3" fill="#4FC3F7"/>
                  <circle cx="28" cy="52" r="3" fill="#4FC3F7"/>
                  <circle cx="40" cy="48" r="3" fill="#4FC3F7"/>
                  <circle cx="32" cy="56" r="3" fill="#4FC3F7"/>
                  <circle cx="44" cy="54" r="3" fill="#4FC3F7"/>
                </svg>
                <span class="param-label-text">${content[currentLanguage].cloudCover}</span>
              </div>
              <div class="param-value-new">${day.cloudCover}</div>
            </div>
            
            <div class="forecast-param-item">
              <div class="param-icon-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 64 64" fill="none">
                  <path d="M8 32 Q16 28, 24 32" stroke="#4A90E2" stroke-width="3" fill="none" stroke-linecap="round"/>
                  <path d="M8 24 Q16 20, 24 24" stroke="#66BB6A" stroke-width="3" fill="none" stroke-linecap="round"/>
                  <path d="M8 40 Q16 36, 24 40" stroke="#42A5F5" stroke-width="3" fill="none" stroke-linecap="round"/>
                  <path d="M32 32 L48 32 L44 28 M48 32 L44 36" stroke="#1976D2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                </svg>
                <span class="param-label-text">${content[currentLanguage].windSpeed}</span>
              </div>
              <div class="param-value-new">${day.windSpeed} km/h</div>
            </div>
            
            <div class="forecast-param-item forecast-param-wind">
              <div class="param-icon-label">
                ${getWindDirectionArrow(day.windDirection)}
                <span class="param-label-text">${content[currentLanguage].windDirection}</span>
              </div>
              <div class="param-value-new">${getWindDirectionName(day.windDirection)}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="forecast-actions">
        <button class="forecast-action-btn" onclick="showDaySelection()">
          ${currentLanguage === "en" ? "Select Different Day" : "अलग दिन चुनें"}
        </button>
        <button class="forecast-action-btn" onclick="selectDifferentBlock()">
          ${currentLanguage === "en" ? "Select Different Block" : "अलग ब्लॉक चुनें"}
        </button>
        <button class="forecast-action-btn" onclick="restartChat()">
          ${currentLanguage === "en" ? "Start New Query" : "नई क्वेरी शुरू करें"}
        </button>
          <button class="forecast-action-btn" onclick="showObservedFromForecast()">
            ${currentLanguage === "en" ? content[currentLanguage].selectObserved : content[currentLanguage].selectObserved}
          </button>
      </div>
    </div>
  `
  chatBody.appendChild(forecastDiv)
  scrollToBottom()
}

async function showObservedData() {
  // Show loading message
  const loadingDiv = document.createElement("div")
  loadingDiv.className = "message"
  loadingDiv.innerHTML = `
    <div class="bot-message loading">
      ${currentLanguage === "en" ? "Fetching observed data" : "प्रेक्षित डेटा प्राप्त कर रहे हैं"}
    </div>
  `
  chatBody.appendChild(loadingDiv)
  scrollToBottom()

  try {
  
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedDistrict},IN&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error('Failed to fetch observed data');
    }
    const data = await response.json();

    // Remove loading message
    chatBody.removeChild(loadingDiv)

    const now = new Date()
    const dateStr = now
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
      .replace(/\//g, "-")

    const timeStr = now.toLocaleTimeString(currentLanguage === "en" ? "en-IN" : "hi-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })

    const messageDiv = document.createElement("div")
    messageDiv.className = "message"
    messageDiv.innerHTML = `
  <div class="bot-message">

    <div class="weather-section-header">
      <h2>${currentLanguage === "en" ? "Observed Weather" : "प्रेक्षित मौसम"}</h2>
      <div class="header-datetime">${dateStr}</div>
    </div>

    <div class="observed-data-card">
      <div class="observed-params-grid">
        <!-- Temperature - 1st -->
        <div class="observed-param-card">
          <div class="param-icon">🌡️</div>
          <div class="param-content">
            <div class="param-label">Temperature</div>
            <div class="param-value">${Math.round(data.main.temp)}°C</div>
          </div>
        </div>

        <!-- Humidity - 2nd -->
        <div class="observed-param-card">
          <div class="param-icon">💧</div>
          <div class="param-content">
            <div class="param-label">Humidity</div>
            <div class="param-value">${data.main.humidity}%</div>
          </div>
        </div>

        <!-- Rainfall - 3rd -->
        <div class="observed-param-card">
          <div class="param-icon">🌧️</div>
          <div class="param-content">
            <div class="param-label">Rainfall</div>
            <div class="param-value">${data.rain ? data.rain["1h"] || 0 : 0} mm</div>
          </div>
        </div>

        <!-- Wind Direction - 4th -->
        <div class="observed-param-card">
          <div class="param-icon">
            ${getWindDirectionArrow(data.wind.deg)}
          </div>
          <div class="param-content">
            <div class="param-label">Wind Direction</div>
            <div class="param-value">${getWindDirectionName(data.wind.deg)}</div>
          </div>
        </div>

        <!-- Wind Speed - 5th -->
        <div class="observed-param-card">
          <div class="param-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 64 64" fill="none">
              <path d="M8 32 Q16 28, 24 32" stroke="#4A90E2" stroke-width="3" fill="none" stroke-linecap="round"/>
              <path d="M8 24 Q16 20, 24 24" stroke="#66BB6A" stroke-width="3" fill="none" stroke-linecap="round"/>
              <path d="M8 40 Q16 36, 24 40" stroke="#42A5F5" stroke-width="3" fill="none" stroke-linecap="round"/>
              <path d="M32 32 L48 32 L44 28 M48 32 L44 36" stroke="#1976D2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </div>
          <div class="param-content">
            <div class="param-label">Wind Speed</div>
            <div class="param-value">${Math.round(data.wind.speed * 3.6)} km/h</div>
          </div>
        </div>

        <!-- Atmospheric Pressure - 6th -->
        <div class="observed-param-card">
          <div class="param-icon">📊</div>
          <div class="param-content">
            <div class="param-label">Atmospheric Pressure</div>
            <div class="param-value">${data.main.pressure} hPa</div>
          </div>
        </div>

        <!-- Sunrise - 7th -->
        <div class="observed-param-card">
          <div class="param-icon">🌅</div>
          <div class="param-content">
            <div class="param-label">Sunrise</div>
            <div class="param-value">
              ${new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
        </div>

        <!-- Sunset - 8th -->
        <div class="observed-param-card">
          <div class="param-icon">🌇</div>
          <div class="param-content">
            <div class="param-label">Sunset</div>
            <div class="param-value">
              ${new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="weather-action-buttons">
      <button class="weather-action-btn" onclick="selectDifferentDistrict()">Select Different District</button>
      <button class="weather-action-btn" onclick="selectDifferentBlock()">Select Different Block</button>
      <button class="weather-action-btn" onclick="restartChat()">Start New Query</button>
      <button class="weather-action-btn" onclick="showForecastFromObserved()">${currentLanguage === "en" ? content[currentLanguage].selectForecast || 'Select Forecast' : content[currentLanguage].selectForecast || 'पूर्वानुमान चुनें'}</button>
    </div>

  </div>
`;


  chatBody.appendChild(messageDiv)
  scrollToBottom()
  } catch (error) {
    chatBody.removeChild(loadingDiv)

    const errorDiv = document.createElement("div")
    errorDiv.className = "message"
    errorDiv.innerHTML = `
      <div class="bot-message" style="color: #d32f2f;">
        ${currentLanguage === "en" ? "Sorry, unable to fetch observed data. Please try again." : "क्षमा करें, प्रेक्षित डेटा प्राप्त करने में असमर्थ। कृपया पुन: प्रयास करें।"}
      </div>
    `
    chatBody.appendChild(errorDiv)
  }

  scrollToBottom()
}

function showRestartButton() {
  const restartDiv = document.createElement("div")
  restartDiv.className = "message"
  restartDiv.innerHTML = `
    <div class="bot-message">
      <button class="chat-button restart-button" onclick="restartChat()">
        ${content[currentLanguage].restart}
      </button>
    </div>
  `
  chatBody.appendChild(restartDiv)
  scrollToBottom()
}

function restartChat() {
  selectedDataType = ""
  selectedDistrict = ""
  selectedBlock = ""
  chatBody.innerHTML = ""
  // Directly show data type selection without language selection
  showDataTypeSelection()
}

function scrollToBottom() {
  chatBody.scrollTop = chatBody.scrollHeight
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", init)

function getWeatherCondition(random) {
  if (random < 0.2) return currentLanguage === "en" ? "Cloudy" : "बादल छाए"
  if (random < 0.4) return currentLanguage === "en" ? "Heavy Rain" : "भारी बारिश"
  if (random < 0.6) return currentLanguage === "en" ? "Few Clouds" : "कुछ बादल"
  if (random < 0.8) return currentLanguage === "en" ? "Sunny" : "धूप"
  return currentLanguage === "en" ? "Partly Cloudy" : "आंशिक बादल"
}

function getWeatherIconURL(random) {
  // Using weather icon CDN URLs
  if (random < 0.2) return "https://cdn-icons-png.flaticon.com/128/414/414927.png" // Cloudy
  if (random < 0.4) return "https://cdn-icons-png.flaticon.com/128/4005/4005817.png" // Heavy Rain
  if (random < 0.6) return "https://cdn-icons-png.flaticon.com/128/1163/1163661.png" // Few Clouds
  if (random < 0.8) return "https://cdn-icons-png.flaticon.com/128/869/869869.png" // Sunny
  return "https://cdn-icons-png.flaticon.com/128/1146/1146869.png" // Partly Cloudy
}

function getCloudCondition(cloudPercent) {
  if (cloudPercent < 25) return "Clear"
  if (cloudPercent < 50) return "Partly Cloudy"
  if (cloudPercent < 75) return "Cloudy"
  return "Overcast"
}

function selectDifferentDistrict() {
  displayDistrictSelection()
  scrollToBottom()
}

function selectDifferentBlock() {
  if (selectedDistrict) {
    displayBlockSelection(selectedDistrict)
    scrollToBottom()
  }
}

// Switch from forecast view to observed view (keeps district/block selection)
function showObservedFromForecast() {
  selectedDataType = 'observed'
  const userDiv = document.createElement('div')
  userDiv.className = 'message'
  userDiv.innerHTML = `
    <div class="user-message">
      ${content[currentLanguage].observed}
    </div>
  `
  chatBody.appendChild(userDiv)
  scrollToBottom()
  setTimeout(() => showObservedData(), 300)
}

// Switch from observed view to forecast view (keeps district/block selection)
function showForecastFromObserved() {
  selectedDataType = 'forecast'
  const userDiv = document.createElement('div')
  userDiv.className = 'message'
  userDiv.innerHTML = `
    <div class="user-message">
      ${content[currentLanguage].forecast}
    </div>
  `
  chatBody.appendChild(userDiv)
  scrollToBottom()
  setTimeout(() => showForecastData(), 300)
}

function displayDistrictSelection() {
  const districtDiv = document.createElement("div")
  districtDiv.className = "message"

  const districts = Object.keys(biharData).sort()
  const listHTML = districts
    .map(
      (district) =>
        `<div class="list-item-option" onclick="selectDistrict('${district}')">
          <span class="list-item-text">${getLocalizedName(district).toUpperCase()}</span>
        </div>`,
    )
    .join("")

  districtDiv.innerHTML = `
        <div class="bot-message">
            ${content[currentLanguage].selectDistrict}
            <div class="list-group">
                ${listHTML}
            </div>
        </div>
    `
  chatBody.appendChild(districtDiv)
  scrollToBottom()
}

function displayBlockSelection(district) {
  const blockDiv = document.createElement("div")
  blockDiv.className = "message"

  const blocks = biharData[district]
  const listHTML = blocks
    .map(
      (block) =>
        `<div class="list-item-option" onclick="handleBlockClick('${block}')">
          <span class="list-item-text">${getLocalizedName(block)}</span>
        </div>`,
    )
    .join("")

  blockDiv.innerHTML = `
        <div class="bot-message">
            ${content[currentLanguage].selectBlock} ${getLocalizedName(district)}:
            <div class="list-group">
                ${listHTML}
            </div>
        </div>
    `
  chatBody.appendChild(blockDiv)
  scrollToBottom()
}

function getLocalizedName(name) {
  // Prioritize the comprehensive blockNamesHindi if available
  if (currentLanguage === "hi" && blockNamesHindi[name]) {
    return blockNamesHindi[name]
  }
  // Fallback to the existing biharDataHindi for districts and any blocks not in blockNamesHindi
  if (currentLanguage === "hi" && biharDataHindi[name]) {
    return biharDataHindi[name]
  }
  return name
}

// Bihar Districts and Blocks Data in Hindi
const biharDataHindi = {
  Araria: "अररिया",
  Arwal: "अरवल",
  Aurangabad: "औरंगाबाद",
  Banka: "बांका",
  Begusarai: "बेगूसराय",
  Bhagalpur: "भागलपुर",
  Bhojpur: "भोजपुर",
  Buxar: "बक्सर",
  Darbhanga: "दरभंगा",
  "East Champaran": "पूर्वी चंपारण",
  Gaya: "गया",
  Gopalganj: "गोपालगंज",
  Jamui: "जमुई",
  Jehanabad: "जहानाबाद",
  Kaimur: "कैमूर",
  Katihar: "कटिहार",
  Khagaria: "खगड़िया",
  Kishanganj: "किशनगंज",
  Lakhisarai: "लखीसराय",
  Madhepura: "मधेपुरा",
  Madhubani: "मधुबनी",
  Munger: "मुंगेर",
  Muzaffarpur: "मुजफ्फरपुर",
  Nalanda: "नालंदा",
  Nawada: "नवादा",
  Patna: "पटना",
  Purnia: "पूर्णिया",
  Rohtas: "रोहतास",
  Saharsa: "सहरसा",
  Samastipur: "समस्तीपुर",
  Saran: "सारण",
  Sheikhpura: "शेखपुरा",
  Sheohar: "शिवहर",
  Sitamarhi: "सीतामढ़ी",
  Siwan: "सिवान",
  Supaul: "सुपौल",
  Vaishali: "वैशाली",
  "West Champaran": "पश्चिम चंपारण",
}

// Comprehensive Hindi translations for all Bihar blocks
const blockNamesHindi = {
  // Araria blocks
  Araria: "अररिया",
  Bhargama: "भरगामा",
  Forbesganj: "फोर्बिसगंज",
  Jokihat: "जोकीहाट",
  "Kursa Kanta": "कुर्साकांटा",
  Narpatganj: "नरपतगंज",
  Palasi: "पलासी",
  Raniganj: "रानीगंज",
  Sikti: "सिकटी",

  // Arwal blocks
  Arwal: "अरवल",
  Kaler: "कलेर",
  Karpi: "करपी",
  Kurtha: "कुर्था",
  "Sonbhadra Banshi Suryapur": "सोनभद्र बांशी सूर्यपुर",

  // Aurangabad blocks
  Aurangabad: "औरंगाबाद",
  Barun: "बरुन",
  Daudnagar: "दाउदनगर",
  Deo: "देव",
  Goh: "गोह",
  Haspura: "हसपुरा",
  Kutumba: "कुटुम्बा",
  Madanpur: "मदनपुर",
  Nabinagar: "नबीनगर",
  Obra: "ओबरा",
  Rafiganj: "रफीगंज",

  // Banka blocks
  Amarpur: "अमरपुर",
  Banka: "बांका",
  Barahat: "बड़हाट",
  Belhar: "बेलहर",
  Bounsi: "बौंसी",
  Chandan: "चंदन",
  Dhoraiya: "धोरैया",
  Fullidumar: "फुल्लीदुमर",
  Katoria: "कटोरिया",
  Rajoun: "राजौन",
  Sambhuganj: "सम्भुगंज",

  // Begusarai blocks
  Bachhwara: "बच्छवारा",
  Bakhri: "बाखरी",
  Balia: "बलिया",
  Barauni: "बरौनी",
  Begusarai: "बेगूसराय",
  Bhagwanpur: "भगवानपुर",
  Birpur: "बिरपुर",
  "Cheria Bariarpur": "चेरिया बरियारपुर",
  Chhorahi: "छोरही",
  Dandari: "डांडारी",
  Garhpura: "गढ़पुरा",
  Khodawandpur: "खोदावंदपुर",
  Mansurchak: "मंसूरचक",
  Matihani: "मतिहानी",
  Naokothi: "नाओकोठी",
  "Sahebpur Kamal": "साहेबपुर कमाल",
  "Samho Akha Kurha": "समहो आखा कुर्हा",
  Teghra: "तेघरा",

  // Bhagalpur blocks
  Bihpur: "बिहपुर",
  Gopalpur: "गोपालपुर",
  Goradih: "गोराडीह",
  Ismailpur: "इस्माइलपुर",
  Jagdishpur: "जगदीशपुर",
  Kahalgaon: "कहलगांव",
  Kharik: "खारिक",
  Narayanpur: "नारायणपुर",
  Nathnagar: "नाTथननगर",
  Naugachhia: "नौगछिया",
  Pirpainti: "पीरपैंती",
  "Rangra Chowk": "रंगरा चौक",
  Sabour: "सबौर",
  Sanhaula: "सनहौला",
  Shahkund: "शाहकुंड",
  Sultanganj: "सुल्तानगंज",

  // Bhojpur blocks
  Arrah: "आरा",
  Agiaon: "अगियांव",
  Barhara: "बरहारा",
  Bihiya: "बिहिया",
  Charpokhari: "चारपोखरी",
  Garhani: "गढ़ानी",
  Koilwar: "कोइलवर",
  Piro: "पीरो",
  Sahar: "सहार",
  Sandesh: "संदेश",
  Shahpur: "शाहपुर",
  Tarari: "तरारी",
  Udwantnagar: "उदवंतनगर",

  // Buxar blocks
  Buxar: "बक्सर",
  Brahmapur: "ब्रह्मपुर",
  Chakki: "चक्की",
  Chausa: "चौसा",
  Chaugain: "चौगांई",
  Dumraon: "डुमरांव",
  Itarhi: "इटारही",
  Kesath: "केसठ",
  Nawanagar: "नवानगर",
  Rajpur: "राजपुर",
  Simri: "सिमरी",

  // Darbhanga blocks
  Alinagar: "अलीनगर",
  Bahadurpur: "बहादुरपुर",
  Baheri: "बहेरी",
  Benipur: "बेनीपुर",
  Biraul: "बिरौल",
  "Darbhanga Sadar": "दरभंगा सदर",
  "Gaura Bauram": "गौरा बौराम",
  Ghanshyampur: "घनश्यामपुर",
  "Hanuman Nagar": "हनुमान नगर",
  Hayaghat: "हयाघाट",
  Jale: "जाले",
  Keoti: "केओटी",
  Kiratpur: "किरतपुर",
  "Kusheshwar Asthan East": "कुशेश्वर अस्थान पूर्व",
  "Kusheshwar Asthan": "कुशेश्वर अस्थान",
  Manigachhi: "मनीगाछी",
  Singhwara: "सिंहवारा",
  Tardih: "तरदीह",

  // East Champaran blocks
  Adapur: "अदापुर",
  Areraj: "अरेराज",
  Banjaria: "बनजारिया",
  Bankatwa: "बनकटवा",
  Chakia: "चकिया",
  Chiraiya: "चिरैया",
  Dhaka: "ढाका",
  Ghorasahan: "घोड़ासहन",
  Harsidhi: "हरसिद्धि",
  Kalyanpur: "कल्याणपुर",
  Kesaria: "केसरिया",
  Kotwa: "कोटवा",
  Madhuban: "मधुबन",
  Mehsi: "मेहसी",
  Motihari: "मोतिहारी",
  Narkatia: "नरकटिया",
  Paharpur: "पहाड़पुर",
  "Pakri Dayal": "पकड़ी दयाल",
  Patahi: "पटाही",
  Phenhara: "फेनहारा",
  Piprakothi: "पिपराकोठी",
  Ramgarhwa: "रामगढ़वा",
  Raxaul: "रक्सौल",
  Sangrampur: "संग्रामपुर",
  Sugauli: "सुगौली",
  Tetaria: "टेटरिया",
  Turkaulia: "तुर्कौलिया",

  // Gaya blocks
  "Gaya Town": "गया टाउन",
  Amas: "अमस",
  Atri: "अत्री",
  "Banke Bazar": "बांके बाजार",
  Barachatti: "बाराचट्टी",
  Bathani: "बथानी",
  Belaganj: "बेलागंज",
  "Bodh Gaya": "बोध गया",
  Dobhi: "डोभी",
  Dumaria: "डुमरिया",
  Fatehpur: "फतेहपुर",
  Guraru: "गुरारू",
  Gurua: "गुरुआ",
  Imamganj: "इमामगंज",
  Khizirsarai: "खिजीरसराय",
  Konch: "कोंच",
  Manpur: "मानपुर",
  Mohanpur: "मोहनपुर",
  Muhra: "मुहरा",
  Paraiya: "पराइया",
  Sherghati: "शेरघाटी",
  "Tan Kuppa": "टान कुप्पा",
  Tekari: "टेकारी",
  Wazirganj: "वजीरगंज",

  // Gopalganj blocks
  Baikunthpur: "बैकुंठपुर",
  Barauli: "बरौली",
  Bhorey: "भोरे",
  Bijaipur: "बिजयपुर",
  Gopalganj: "गोपालगंज",
  Hathua: "हथुआ",
  Katiya: "कटिया",
  Kuchaikote: "कुचैकोट",
  Manjha: "मांझा",
  "Pach Deuri": "पच्छ देउरी",
  Phulwaria: "फुलवरिया",
  Sidhwalia: "सिधवलिया",
  Thawe: "थावे",
  Uchkagaon: "उचकागांव",

  // Jamui blocks
  Barhat: "बड़हाट",
  Chakai: "चकई",
  Gidhour: "गिद्धौर",
  "Islampur Aliganj": "इस्लामपुर अलीगंज",
  Jamui: "जमुई",
  Jhajha: "झझा",
  Khaira: "खैरा",
  Laxmipur: "लक्ष्मीपुर",
  Sikandra: "सिकंदरा",
  Sono: "सोनो",

  // Jehanabad blocks
  Ghoshi: "घोसी",
  Hulasganj: "हुलासगंज",
  Jehanabad: "जहानाबाद",
  Kako: "काको",
  Makhdumpur: "मखदुमपुर",
  Modanganj: "मोदनगंज",
  "Ratni Faridpur": "रतनी फरीदपुर",

  // Khagaria blocks
  Alauli: "अलौली",
  Baldaur: "बलदौर",
  Chautham: "चौथम",
  Gogri: "गोगरी",
  Khagaria: "खगड़िया",
  Mansi: "मानसी",
  Parbatta: "परबत्ता",

  // Kishanganj blocks
  Bahadurganj: "बहादुरगंज",
  Dighalbank: "दिघलबैंक",
  Kishanganj: "किशनगंज",
  Kochadhaman: "कोचाधामन",
  Pothia: "पोथिया",
  Terhagachh: "तेरहगाछ",
  Thakurganj: "ठाकुरगंज",

  // Kaimur blocks
  Adhaura: "अधौरा",
  Bhabua: "भभुआ",
  Chainpur: "चैनपुर",
  Chand: "चाँद",
  Durgawati: "दुर्गावती",
  Kudra: "कुदरा",
  Mohania: "मोहनिया",
  Nuaon: "नुआओं",
  Ramgarh: "रामगढ़",
  Rampur: "रामपुर",

  // Katihar blocks
  Amdabad: "अमदाबाद",
  Azamnagar: "आजमनगर",
  Balrampur: "बलरामपुर",
  Barari: "बड़ारी",
  Barsoi: "बरसोई",
  Dandkhora: "दांडखोरा",
  Falka: "फलका",
  Hasanganj: "हसनगंज",
  Kadwa: "कड़वा",
  Katihar: "कटिहार",
  Korha: "कोरहा",
  Kursela: "कुर्सेला",
  Manihari: "मनिहारी",
  Mansahi: "मानसाही",
  Pranpur: "प्राणपुर",
  Sameli: "समेली",

  // Lakhisarai blocks
  Barahiya: "बरहिया",
  Chanan: "चानन",
  Halsi: "हल्सी",
  Lakhisarai: "लखीसराय",
  Pipariya: "पिपरिया",
  "Ramgarh Chowk": "रामगढ़ चौक",
  Surajgarha: "सूरजगढ़ा",

  // Madhubani blocks
  "Andhra Tharhi": "अंधरा ठाढ़ी",
  Babubarhi: "बाबूबरही",
  Basopatti: "बसोपट्टी",
  Benipatti: "बेनीपट्टी",
  Bisfi: "बिस्फी",
  Ghoghardiha: "घोघरडीहा",
  Harlakhi: "हरलाखी",
  Jainagar: "जयनगर",
  Jhanjharpur: "झंझारपुर",
  Kaluahi: "कलुआही",
  Khajauli: "खजौली",
  Ladania: "लदानिया",
  Lakhnaur: "लखनौर",
  Laukahi: "लौकही",
  Madhwapur: "मधवापुर",
  Madhubani: "मधुबनी",
  Pandaul: "पंडौल",
  Phulparas: "फुलपरास",
  Rahika: "रहिका",
  Rajnagar: "राजनगर",

  // Munger blocks
  Asarganj: "असरगंज",
  Bariarpur: "बरियारपुर",
  Dharhara: "धरहरा",
  "Haveli Kharagpur": "हवेली खड़गपुर",
  Jamalpur: "जमालपुर",
  Munger: "मुंगेर",
  Tarapur: "तारापुर",
  "Tetia Bambar": "टेटिया बम्बर",

  // Madhepura blocks
  Alamnagar: "आलमनगर",
  Bihariganj: "बिहारीगंज",
  Chousa: "चौसा",
  Gamhariya: "गमहरिया",
  Ghelardh: "घेलारध",
  Gwalpara: "ग्वालपाड़ा",
  Kumarkhand: "कुमारखंड",
  Madhepura: "मधेपुरा",
  Murliganj: "मुरलीगंज",
  Puraini: "पुरैनी",
  Shankarpur: "शंकरपुर",
  Singheshwar: "सिंघेश्वर",

  // Muzaffarpur blocks
  Aurai: "औराई",
  Bandra: "बांद्रा",
  Bochahan: "बोचहान",
  Gaighat: "गाईघाट",
  Kanti: "कांटी",
  Kathra: "कथरा",
  Kurhani: "कुढ़नी",
  Marwan: "मरवान",
  Minapur: "मीनापुर",
  Motipur: "मोतीपुर",
  "Mushahari Muzaffarpur": "मुशहरी मुजफ्फरपुर",
  Paroo: "परू",
  Sahebganj: "साहेबगंज",
  Sakra: "साकरा",
  Saraiya: "सरैया",

  // Nalanda blocks
  Asthawan: "अस्थावां",
  "Ben Bigha": "बेन बिघा",
  Biharsharif: "बिहारशरीफ",
  Bind: "बिंद",
  Chandi: "चांदी",
  Ekangarsarai: "एकंगरसराय",
  Giriyak: "गिरियक",
  Harnaut: "हरनौत",
  Hilsa: "हिलसा",
  Islampur: "इस्लामपुर",
  Karaiparsurai: "कड़ाईपरसुराई",
  Katrisarai: "कटरिसराय",
  Nagarnausa: "नगरनौसा",
  Noorsarai: "नूरसराई",
  Parwalpur: "परवलपुर",
  Rahui: "राहुई",
  Rajgir: "राजगीर",
  Sarmera: "सरमेरा",
  Silao: "सिलाव",
  Tharthari: "थारथरी",

  // Nawada blocks
  Akbarpur: "अकबरपुर",
  Gobindpur: "गोबिंदपुर",
  Hisua: "हिसुआ",
  Kawakol: "कवाकोल",
  Kashichak: "कशीचक",
  Meskaur: "मेसकौर",
  Nardiganj: "नरदीगंज",
  Narhat: "नरहट",
  Nawada: "नवादा",
  "Pakri Barawan": "पकड़ी बरवां",
  Rajauli: "राजौली",
  Roh: "रोह",
  Sirdala: "सिरदाला",
  Warisaliganj: "वारिसलीगंज",

  // Patna blocks
  Athmalgola: "अथमलगोला",
  Bakhtiarpur: "बख्तियारपुर",
  Barh: "बाढ़",
  Belchi: "बेल्ची",
  Bihta: "बिहटा",
  Bikram: "बिक्रम",
  Danapur: "दानापुर",
  Dhanarua: "धनरुआ",
  Dulhin: "दुलहिन",
  Fatuha: "फतुहा",
  Ghoswari: "घोसवारी",
  Khusrupur: "खुसरूपुर",
  Maner: "मानेर",
  Masaurhi: "मसौढ़ी",
  Mokama: "मोकामा",
  Naubatpur: "नौबतपुर",
  Paliganj: "पालीगंज",
  Pandarak: "पंडारक",
  Phulwari: "फुलवारी",
  Punpun: "पुनपुन",
  "Patna Sadar": "पटना सदर",
  Sampatchak: "सम्पतचक",

  // Purnia blocks
  Amour: "अमौर",
  Baisa: "बैसा",
  Banmankhi: "बनमनखी",
  Baisi: "बैसी",
  Barhara: "बरहारा",
  Bhawanipur: "भवानीपुर",
  Dhamdaha: "धमदाहा",
  Jalalgarh: "जलालगढ़",
  Kasba: "कसबा",
  Krityanand: "कृत्यानंद",
  Purnia: "पूर्णिया",
  Rupauli: "रुपौली",
  Srinagar: "श्रीनगर",

  // Rohtas blocks
  Akorha: "अकोढ़ा",
  Bikramganj: "बिक्रमगंज",
  Chenari: "चेनारी",
  Dawath: "दावठ",
  Dehri: "डेहरी",
  Dinara: "दिनारा",
  Karakat: "कराकाट",
  Kargahar: "करगहर",
  Kochas: "कोचस",
  Nasriganj: "नसरीगंज",
  Nauhatta: "नौहट्टा",
  Nokha: "नोखा",
  Rohtas: "रोहतास",
  Sasaram: "सासाराम",
  Sheosagar: "शिवसागर",
  Surajpura: "सूरजपुरा",
  Tilouthu: "तिलौथु",

  // Saharsa blocks
  Banmankhi: "बनमनखी",
  Kahra: "कहरा",
  Mahishi: "महिषी",
  Nauhatta: "नौहट्टा",
  Patarghat: "पाटरघाट",
  Saharsa: "सहरसा",
  Sattar: "सत्तार",
  Simri: "सिमरी",
  Sour: "सौर",

  // Samastipur blocks
  Bibhutipur: "बिभूतिपुर",
  Bithan: "बिठान",
  Dalsinghsarai: "दलसिंहसराय",
  Hasanpur: "हसनपुर",
  Kalyanpur: "कल्याणपुर",
  Khanpur: "खानपुर",
  Mohiuddinagar: "मोहियुद्दीननगर",
  Morwa: "मोरवा",
  Patori: "पाटोरी",
  Pusa: "पुसा",
  Rosera: "रोसेड़ा",
  Samastipur: "समस्तीपुर",
  Sarairanjan: "सरायरंजन",
  Shivajinagar: "शिवाजीनगर",
  Singhia: "सिंघिया",
  Tajpur: "ताजपुर",
  Ujiyarpur: "उजियारपुर",
  Vidyapati: "विद्यापति",
  Warisnagar: "वारिसनगर",

  // Saran blocks
  Amnour: "अमनौर",
  Baniapur: "बनियापुर",
  Chapra: "छपरा",
  Dariapur: "दरियापुर",
  Dighwara: "दीघवारा",
  Ekma: "एकमा",
  Garkha: "गड़खा",
  Isuapur: "इसुआपुर",
  Jalalpur: "जलालपुर",
  Lahladpur: "लहलादपुर",
  Manjhi: "मांझी",
  Marhaura: "मढ़ौरा",
  Nagra: "नगरा",
  Panapur: "पानापुर",
  Parsa: "परसा",
  Revelganj: "रेवेलगंज",
  Rivilganj: "रिविलगंज",
  Sonepur: "सोनपुर",
  Taraiya: "तरैया",

  // Sheikhpura blocks
  Ariari: "अरियारी",
  Barbigha: "बारबीघा",
  Chewara: "चेवारा",
  Ghatkusumbha: "घाटकुसुम्भा",
  Sheikhpura: "शेखपुरा",
  Shekhopur: "शेखोपुर",

  // Sheohar blocks
  Dumri: "डुमरी",
  Piprahi: "पिपराही",
  Purnahiya: "पूर्णहिया",
  Sheohar: "शिवहर",
  Taryani: "तरयानी",

  // Sitamarhi blocks
  Bairgania: "बैरगनिया",
  Bajpatti: "बाजपट्टी",
  Bathanaha: "बथनाहा",
  Belsand: "बेलसंड",
  Bokhra: "बोखरा",
  Chorauti: "चौरौटी",
  Dumra: "डुमरा",
  Majorganj: "मेजरगंज",
  Nanpur: "नानपुर",
  Parihar: "परिहार",
  Parsauni: "परसौनी",
  Pupri: "पुपरी",
  Riga: "रीगा",
  Runisaidpur: "रूनीसैदपुर",
  Sitamarhi: "सीतामढ़ी",
  Sonbarsa: "सोनबरसा",
  Suppi: "सुप्पी",

  // Siwan blocks
  Andar: "अंदर",
  Barharia: "बरहरिया",
  Darauli: "दरौली",
  Goriakothi: "गोरियाकोठी",
  Guthni: "गुठनी",
  Hasanpura: "हसनपुरा",
  Hussainganj: "हुसैनगंज",
  Lakri: "लकड़ी",
  Maharajganj: "महाराजगंज",
  Mairwa: "मैरवा",
  Nabiganj: "नबीगंज",
  Pachrukhi: "पचरुखी",
  Raghunathpur: "रघुनाथपुर",
  Siwan: "सिवान",
  Siswan: "सिसवां",
  Ziradei: "जीरादेई",

  // Supaul blocks
  Basantpur: "बसंतपुर",
  Chhatapur: "छातापुर",
  Kishanpur: "किशनपुर",
  Marauna: "मरौना",
  Nirmali: "निर्मली",
  Pipra: "पिपरा",
  Pratapganj: "प्रतापगंज",
  Raghopur: "राघोपुर",
  Saraigarh: "सरायगढ़",
  Supaul: "सुपौल",
  Tribeniganj: "त्रिवेणीगंज",

  // Vaishali blocks
  Biddupur: "बिद्दुपुर",
  Bidupur: "बिदुपुर",
  Desri: "देसरी",
  Goraul: "गोरौल",
  Hajipur: "हाजीपुर",
  Jandaha: "जंदाहा",
  Lalganj: "लालगंज",
  Mahnar: "महनार",
  Mahua: "महुआ",
  Patedhi: "पटेढ़ी",
  Patepur: "पटेपुर",
  Raghopur: "राघोपुर",
  Rajapakar: "राजापाकड़",
  Sahdei: "सहदेई",
  Vaishali: "वैशाली",

  // West Champaran blocks
  Bagaha: "बगहा",
  Bairia: "बैरिया",
  Bettiah: "बेतिया",
  Bhitaha: "भिठाहा",
  Chanpatia: "चानपटिया",
  Gaunaha: "गौनाहा",
  Jogapatti: "जोगापट्टी",
  Lauriya: "लौरिया",
  Madhubani: "मधुबनी",
  Mainatand: "मैनाटांड",
  Majhaulia: "मझौलिया",
  Narkatiaganj: "नरकटियागंज",
  Nautan: "नौतन",
  Piprasi: "पिपरासी",
  Ramnagar: "रामनगर",
  Sikta: "सिकटा",
  Thakrahan: "ठाकराहान",
}

const hindiMonths = {
  Jan: "जनवरी",
  Feb: "फरवरी",
  Mar: "मार्च",
  Apr: "अप्रैल",
  May: "मई",
  Jun: "जून",
  Jul: "जुलाई",
  Aug: "अगस्त",
  Sep: "सितंबर",
  Oct: "अक्टूबर",
  Nov: "नवंबर",
  Dec: "दिसंबर",
}

const hindiDays = {
  Sunday: "रविवार",
  Monday: "सोमवार",
  Tuesday: "मंगलवार",
  Wednesday: "बुधवार",
  Thursday: "गुरुवार",
  Friday: "शुक्रवार",
  Saturday: "शनिवार",
}

function formatForecastDate(date) {
  if (currentLanguage === "hi") {
    const day = date.getDate()
    const month = date.toLocaleDateString("en-IN", { month: "short" })
    const year = date.getFullYear()
    const hindiMonth = hindiMonths[month] || month
    return `${day} ${hindiMonth} ${year}`
  }
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}
`${Number(data.tmax).toFixed(1)}°C / ${Number(data.tmin).toFixed(1)}°C`