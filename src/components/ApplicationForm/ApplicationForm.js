import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ApplicationForm.css';

const ApplicationForm = () => {
    const [applicant, setApplicant] = useState({});
    let [id, setId] = useState('');
    const [districtObject, setDistrictObject] = useState({});
    const [dist, setDist] = useState([]);
    const [dist2, setDist2] = useState([]);
    const [upzilla, setUpzilla] = useState();
    const [exam1, setExam1] = useState([]);
    const [exam2, setExam2] = useState([]);
    const [exam3, setExam3] = useState([]);
    const [fill, setFill] = useState([]);
    const [care, setCare] = useState([]);
    const [village, setVillage] = useState([]);
    const [mupzilla, setMupzilla] = useState([]);



    // let cupzilla = mupzilla;
    let permanent = document.getElementById('P_CareOf');
    let permanentVillage = document.getElementById('P_Village');
    let permanentDist = document.getElementById('P_District');
    // let mx = document.getElementById('KK');
    // console.log(mx.value);

    // console.log(presentValue);
    if (fill === 'cheked') {
        permanent.value = care;
        permanentVillage.value = village;
        permanentDist.value = dist;
        // setDist2(dist);
        // mx.value = "Rashel";
        console.log(mupzilla);
        // console.log(care);
    }

    let m_dist = [];
    let p_dist = [];
    let m_upzilla = [];
    let p_upzilla = [];
    let union;
    let union1 = [];

    let ssc_board = ['Dhaka', 'Mymensingh', 'Cumilla', 'Rajshahi', 'Jashore', 'Chittagong', 'Barishal', 'Sylhet', 'Dinajpur', 'Madrasah', 'Open University', 'The State Medical Faculty of Bangladesh', 'Pharmacy Council of Bangladesh', 'Cambridge International - IGCE', 'Edexcel International', 'Bangladesh Technical Education Board (BTEB)', 'Others'];

    let ssc_sub = {
        SSC: ['Science', 'Humanities', 'Business Studies', 'Others'],

        SSC_Vocational: ['Agriculture Technology', 'Architecture and Interior Design Technology', 'Automobile Technology', 'Civil Technology', 'Computer Science & Technology',
            'Chemical Technology', 'Electrical Technology', 'Data Telecommunication and Network Technology', 'Electrical and Electronics Technology', 'Environmental Technology', 'Instrumentation & Process Control Technology', 'Mechanical Technology', 'Mechatronics Technology', 'Power Technology', 'Refregeration & Air Conditioning Technology', 'Telecommunication Technology', 'Electronics Technology', 'Library Science', 'Survey',
            'General Mechanics', 'Firm Machinery', 'Textile Technology', 'Agro-Based Food', 'General Electronics', 'Automotive', 'Building Maintenance', 'Wood Working', 'Ceramic', 'Civil Construction', 'Computer and Information Technology', 'Civil Drafting with CAD', 'Mechanical Drafting with CAD', 'Dress Making', 'Dyeing, Printing and Finishing', 'Electrical Maintenance Works', 'Farm Machinery', 'Fish Culture and Breeding', 'Food Processing and Preservation', ' Livestock Rearing and Farming', 'Machine Tools Operation', 'Poultry Rearing and Farming', 'Patient Care', 'General Electrical Works', 'Plumbing and Pipe Fittings', 'Refrigeration and Air Conditioning', 'Glass', 'Flower, Fruit and Vegetable Cultivation', 'Weaving', 'Welding and Fabrication', 'Architectural Drafting with CAD', 'Knitting', 'Shrimp Culture and Breeding', 'Others'],

        Diploma_in_Engineering: ['Agriculture', 'Architecture and Interior Design Technology', 'Automobile Technology', 'Civil Technology', 'Computer Science', 'Computer Technology', 'Computer Science & Technology', 'Computer Science & Engineering Technology', 'Chemical Technology', 'Electrical Technology', 'Data Telecommunication and Network Technology', 'Electrical and Electronics Technology', 'Environmental Technology', 'Instrumentation & Process Control Technology', 'Mechanical Technology', 'Mechatronics Technology', 'Power Technology', 'Printing Technology', 'Refrigeration & Air Conditioning Technology', 'Textile Technology', 'Telecommunication Technology', 'Electronics Technology', 'Library Science', 'Survey', 'General Mechanics', 'Farm Machinery', 'Shipbuilding Technology', 'Ceramic Technology', 'Graphic Design Technology', 'Glass Technology', 'Textile Engineering', 'Jute Technology', 'Garments Design and Pattern Making', 'Food Technology', 'Others'],
        Diploma_in_Medical_Technology: ['Radiography', 'Laboratory', 'Dental', 'Physiotherapy', 'Radiotherapy', 'Pharmacy', 'Others'],
        HSC_Vocational: ['Agro Machinery', 'Automobile', 'Building Maintenance and Construction', 'Clothing and Garments Finishing', 'Computer Operation and Maintenance', 'Drafting Civil', 'Electrical Works and Maintenance', 'Electronic Control and Communication', 'Fish Culture and Breeding', 'Machine Tools Operation and Maintenance', 'Poultry Rearing and Farming', 'Refrigeration and Air-conditioning', 'Welding and Fabrication', 'Industrial Wood Working', 'Food', 'Mechatronics', 'Others'],
        Diploma_in_Agriculture: ['Agriculture', 'Others']
    };
    let bachelor = {
        BSC_Engineering: [
            'Aeronautical Engineering',
            'Architecture',
            'Chemical Engineering',
            'Civil Engineering',
            'Computer Engineering',
            'Computer Science',
            'Computer Science & Engineering',
            'Computer Science & Information Technology',
            'Electrical & Electronics Engineering',
            'Electrical Engineering',
            'Electronic Engineering',
            'Electronics & Communication Engineering',
            'Electronics & Telecommunication Engineering',
            'Environmental Engineering',
            'Food and Process Engineering',
            'Genetic Engineering',
            'Industrial & Production Engineering',
            'Information and Communication Engineering',
            'Information and Communication Technology',
            'Leather Technology',
            'Marine Engineering',
            'Materials Science & Engineering',
            'Mechanical Engineering',
            'Metallurgical Engineering',
            'Microwave Engineering',
            'Mineral Engineering',
            'Mining Engineering',
            'Naval Architecture',
            'Physical Planning',
            'Regional Planning',
            'Software Engineering',
            'Structural Engineering',
            'Telecommunication Engineering',
            'Textile Technology',
            'Town Planning',
            'Urban & Regional Planning',
            'Water Resource Engineering',
            'Others'
        ],
        BSC_in_Agriculture: [
            'Agr.Co-operative & Marketing',
            'Agriculture Chemistry',
            'Agriculture Co-operatives',
            'Agriculture Economics',
            'Agriculture Engineering',
            'Agriculture Extension',
            'Agriculture Finance',
            'Agriculture Marketing',
            'Agriculture Science',
            'Agriculture Soil Science',
            'Agriculture Statistics',
            'Agriculture Water Management',
            'Agro Forestry',
            'Agronnomy',
            'Agronomy & Aquaculture',
            'Agronomy & Aquaculture Extension',
            'Anatomology',
            'Anatomy & Histology',
            'Animal Breeding & Genetic',
            'Animal Husbandry',
            'Animal Nutrition',
            'Animal Science',
            'Bio-Technology',
            'Breeding',
            'Business Studies',
            'Corp Botany',
            'Dairy Science',
            'Doc.of Veterinary Science',
            'Farm Power & Machinery',
            'Farm Structure',
            'Fisheries',
            'Fisheries & Aquaculture',
            'Fisheries Biology',
            'Fisheries Management',
            'Fisheries Technology',
            'Food Tech. & Rural Industry',
            'Forestry',
            'Horticulture',
            'Livestock',
            'Microbiology & Hygenic',
            'Paratrology',
            'Plant Pathology',
            'Poultry Science',
            'Production Economics',
            'Rural Sociology',
            'Surgery & Obstate',
            'Others'
        ],
        MBBS: [
            'Dental Surgery',
            'Medicine & Surgery',
            'Others'
        ],
        Honors: [
            'Accounting',
            'Agriculture',
            'Anthropology',
            'Applied Chemistry',
            'Applied Mathematics',
            'Applied Physics',
            'Archaeology',
            'Bangla',
            'Banking',
            'Biochemistry',
            'Botany',
            'Business Administration',
            'Chemistry',
            'Clinical Psychology',
            'Communication Disorders',
            'Computer Engineering',
            'Computer Science',
            'Computer Science & Engineering',
            'Computer Science & Information Technology',
            'Criminology',
            'Criminology & Police Science',
            'Development Studies',
            'Drama & Music',
            'Drawing and Printing',
            'Economics',
            'Education',
            'English',
            'Environmental science',
            'Ethics',
            'Finance',
            'Finance and Banking',
            'Fine Arts',
            'Folklore',
            'Forestry',
            'Genetic Engineering and Biotechnology',
            'Genetic and Breeding',
            'Geography',
            'Geography and Environment',
            'Geology/Geology and Mining',
            'Government and Politics',
            'Graphics',
            'Health Economics',
            'History',
            'History of Music',
            'Home Economics',
            'Industrial Arts',
            'Information Science and Library Management',
            'Information Technology',
            'Information and Communication Technology',
            'International Law',
            'International Relations',
            'Islamic History and Culture',
            'Islamic Studies',
            'Language/Linguistic',
            'Law/Jurisprudence',
            'Library Science',
            'Management',
            'Marine Science',
            'Marketing',
            'Mass Communication & Journalism',
            'Materials Science & Engineering',
            'Mathematics',
            'Medical Technology',
            'Microbiology',
            'Nutrition and Food Science',
            'Pali',
            'Peace and Conflict Studies',
            'Persian',
            'Pharmaceutical Chemistry',
            'Pharmacy',
            'Philosophy',
            'Physics',
            'Political Science',
            'Population Science',
            'Population Science and Human Resource Development',
            'Printing and Publication Studies',
            'Psychology',
            'Public Administration',
            'Public Finance',
            'Sanskrit',
            'Social Welfare/Social Work',
            'Social Works',
            'Sociology',
            'Soil Science',
            'Soil Water and Environment Science',
            'Statistics',
            'Television, Film and Photography',
            'Urban Development',
            'Urdu',
            'Women Studies',
            'Women and Gender Studies',
            'World Religion',
            'Zoology',
            'Others'
        ],
        Pass_Course: [
            'B.A',
            'B.S.S',
            'B.Sc',
            'B.com',
            'L.L.B',
            'Others'
        ],
        Fazil: [
            'Akaid',
            'Arabic',
            'Fikha',
            'Hadith',
            'Islamic Studies',
            'Modern Arabic',
            'Tafsir',
            'Others'
        ],
        BBA: [
            'Accounting',
            'Accounting and Information Systems',
            'Banking',
            'Banking and Insurance',
            'Business Administration',
            'Finance',
            'Finance and Banking',
            'Human Resource Management',
            'International Business',
            'Management',
            'Management Information Systems',
            'Marketing',
            'Organization Strategy and Leadership',
            'Tourism and Hospitality Management',
            'Others'
        ],
        Graduation_Equivalent: [
            'A & B Section of A.M.I.E',
            'Accounting',
            'Accounting and Information Systems',
            'Aeronautical Engineering',
            'Agr.Co-operative & Marketing',
            'Agriculture',
            'Agriculture Chemistry',
            'Agriculture Co-operatives',
            'Agriculture Economics',
            'Agriculture Engineering',
            'Agriculture Extension',
            'Agriculture Finance',
            'Agriculture Marketing',
            'Agriculture Science',
            'Agriculture Soil Science',
            'Agriculture Statistics',
            'Agriculture Water Management',
            'Agro Forestry',
            'Agronnomy',
            'Agronomy & Aquaculture',
            'Agronomy & Aquaculture Extension',
            'Akaid',
            'Anatomology',
            'Anatomy & Histology',
            'Animal Breeding & Genetic',
            'Animal Husbandry',
            'Animal Nutrition',
            'Animal Science',
            'Anthropology',
            'Applied Chemistry',
            'Applied Mathematics',
            'Applied Physics',
            'Arabic',
            'Archaeology',
            'Architecture',
            'B.A',
            'B.S.S',
            'B.Sc',
            'B.com',
            'Bangla',
            'Banking',
            'Banking and Insurance',
            'Bio-Technology',
            'Biochemistry',
            'Botany',
            'Breeding',
            'Business Administration',
            'Business Studies',
            'Chemical Engineering',
            'Chemistry',
            'Civil Engineering',
            'Clinical Psychology',
            'Communication Disorders',
            'Computer Engineering',
            'Computer Science',
            'Computer Science & Engineering',
            'Computer Science & Information Technology',
            'Corp Botany',
            'Criminology',
            'Criminology & Police Science',
            'Dairy Science',
            'Dental Surgery',
            'Development Studies',
            'Doc.of Veterinary Science',
            'Drama & Music',
            'Drawing and Printing',
            'Economics',
            'Education',
            'Electrical & Electronics Engineering',
            'Electrical Engineering',
            'Electronic Engineering',
            'Electronics & Communication Engineering',
            'Electronics & Telecommunication Engineering',
            'English',
            'Environmental Engineering',
            'Environmental science',
            'Ethics',
            'Farm Power & Machinery',
            'Farm Structure',
            'Fikha',
            'Finance',
            'Finance and Banking',
            'Fine Arts',
            'Fisheries',
            'Fisheries & Aquaculture',
            'Fisheries Biology',
            'Fisheries Management',
            'Fisheries Technology',
            'Folklore',
            'Food Tech. & Rural Industry',
            'Food and Process Engineering',
            'Forestry',
            'Genetic Engineering',
            'Genetic Engineering and Biotechnology',
            'Genetic and Breeding',
            'Geography',
            'Geography and Environment',
            'Geology/Geology and Mining',
            'Government and Politics',
            'Graphics',
            'Hadith',
            'Health Economics',
            'History',
            'History of Music',
            'Home Economics',
            'Horticulture',
            'Human Resource Management',
            'Industrial & Production Engineering',
            'Industrial Arts',
            'Information Science and Library Management',
            'Information Technology',
            'Information and Communication Engineering',
            'International Business',
            'International Law',
            'International Relations',
            'Islamic History and Culture',
            'Islamic Studies',
            'L.L.B',
            'Language/Linguistic',
            'Law/Jurisprudence',
            'Leather Technology',
            'Library Science',
            'Livestock',
            'Management',
            'Management Information Systems',
            'Marine Engineering',
            'Marine Science',
            'Marketing',
            'Mass Communication & Journalism',
            'Materials Science & Engineering',
            'Mathematics',
            'Mechanical Engineering',
            'Medical Technology',
            'Medicine & Surgery',
            'Metallurgical Engineering',
            'Microbiology',
            'Microbiology & Hygenic',
            'Microwave Engineering',
            'Mineral Engineering',
            'Mining Engineering',
            'Modern Arabic',
            'Naval Architecture',
            'Nutrition and Food Science',
            'Organization Strategy and Leadership',
            'Pali',
            'Paratrology',
            'Peace and Conflict Studies',
            'Persian',
            'Pharmaceutical Chemistry',
            'Pharmacy',
            'Philosophy',
            'Physical Planning',
            'Physics',
            'Plant Pathology',
            'Political Science',
            'Population Science',
            'Population Science and Human Resource Development',
            'Poultry Science',
            'Printing and Publication Studies',
            'Production Economics',
            'Psychology',
            'Public Administration',
            'Public Finance',
            'Regional Planning',
            'Rural Sociology',
            'Sanskrit',
            'Social Welfare/Social Work',
            'Social Works',
            'Sociology',
            'Software Engineering',
            'Soil Science',
            'Soil Water and Environment Science',
            'Statistics',
            'Structural Engineering',
            'Surgery & Obstate',
            'Tafsir',
            'Telecommunication Engineering',
            'Television, Film and Photography',
            'Textile Technology',
            'Tourism and Hospitality Management',
            'Town Planning',
            'Urban & Regional Planning',
            'Urban Development',
            'Urdu',
            'Water & Environment Science',
            'Water Resource Engineering',
            'Women Studies',
            'Women and Gender Studies',
            'World Religion',
            'Zoology',
            'Others'
        ]
    };
    let university = [
        'Ad-din Womens Medical College, Dhaka',
        'Ahsania Mission University of Science and Technology',
        'Ahsanullah University of Science and Technology',
        'America Bangladesh University',
        'American International University Bangladesh',
        'Anwer Khan Modern Medical College, Dhaka',
        'Anwer Khan Modern University',
        'ASA University Bangladesh',
        'Asian University for Women',
        'Asian University of Bangladesh',
        'Atish Dipankar University of Science & Technology',
        'Bandarban University',
        'Bangabandhu Sheikh Mujib Medical University',
        'Bangabandhu Sheikh Mujibur Rahman Agricultural University',
        'Bangabandhu Sheikh Mujibur Rahman Aviation And Aerospace University',
        'Bangabandhu Sheikh Mujibur Rahman Digital University',
        'Bangabandhu Sheikh Mujibur Rahman Maritime University',
        'Bangabandhu Sheikh Mujibur Rahman Science and Technology University',
        'Bangabandhu Sheikh Mujibur Rahman Univerisity, Kishoreganj',
        'Bangamata Sheikh Fojilatunnesa Mujib Science and Technology University',
        'Bangladesh Agricultural University,Mymensingh',
        'Bangladesh Airlines Training Centre (BATC)',
        'Bangladesh Army International University of Science & Technology(BAIUST) ,Comilla',
        'Bangladesh Army University of Engineering and Technology (BAUET), Qadirabad',
        'Bangladesh Army University of Science and Technology(BAUST), Saidpur',
        'Bangladesh Islami University',
        'Bangladesh Medical College',
        'Bangladesh Open University',
        'Bangladesh University',
        'Bangladesh University of Business & Technology (BUBT)',
        'Bangladesh University of Engineering & Technology',
        'Bangladesh University of Health Sciences',
        'Bangladesh University of Professionals',
        'Bangladesh University of Textiles',
        'Barisal University',
        'Barishal Engineering College',
        'Begum Rokeya University, Rangpur',
        'BGC Trust Medical College, Chittagong',
        'BGC Trust University Bangladesh, Chittagong',
        'BGMEA University of Fashion & Technology(BUFT)',
        '>BRAC University',
        'Britannia University',
        'Canadian University of Bangladesh',
        'CCN University of Science & Technology',
        'Central Medical College, Comilla',
        'Central University of Science and Technology',
        'Central Womens University',
        'Chandpur Science and Technology University',
        'Chittagong Independent University',
        'Chittagong Medical College',
        'Chittagong Medical University',
        'Chittagong University of Engineering & Technology',
        'Chittagong Veterinary and Animal Sciences University',
        'Chottagram Ma-O-Shishu Hospital Medical College',
        'City University',
        'Comilla Medical College',
        'Comilla University',
        'Community Based Medical College (cbmc), Mymensingh',
        'Community Medical College, Dhaka',
        'Coxs Bazar International University',
        'Coxs Bazar Medical College',
        'Daffodil International University',
        'Darul Ihsan University',
        'Delta Medical College, Dhaka',
        'Dhaka International University',
        'Dhaka Medical College',
        'Dhaka National Medical College',
        'Dhaka University',
        'Dhaka University of Engineering & Technology',
        'Dinajpur Medical College',
        'Durra Samad Rahman Red Crescent Womens Medical College, Sylhet',
        'East Delta University , Chittagong',
        'East West University',
        'Eastern Medical College, Comilla',
        'Eastern University',
        'Enam Medical College, Savar, Dhaka',
        'European University of Bangladesh',
        'Exim Bank Agricultural University, Bangladesh',
        'Fareast International University',
        'Faridpur Engineering College',
        'Faridpur Medical College',
        'Feni Medical College,Feni',
        'Feni University',
        'First Capital University of Bangladesh',
        'German University Bangladesh',
        'Global University Bangladesh',
        'Gono Bishwabidyalay, Savar, Dhaka',
        'Green Life Medical College, Dhaka',
        'Green University of Bangladesh',
        'Hajee Mohammad Danesh Science & Technology University',
        'Hamdard University Bangladesh',
        'Hobiganj Agricultural University',
        'Holy Family Red Crescent Medical College, Dhaka',
        'IBAIS University',
        'Ibn Sina Medical College, Dhaka',
        'Ibrahim Medical College, Dhaka',
        'Independent University, Bangladesh',
        'International Islamic University, Chittagong',
        'International Medical College, Gazipur',
        'International Standard University',
        'International University of Business Agriculture & Technology',
        'Ishakha International University, Bangladesh',
        'Islami Bank Medical College, Rajshahi',
        'Islamic Arabic University',
        'Islamic University',
        'Islamic University of Technology',
        'Islamic University of Technology, Gazipur',
        'Islamic University, Bangladesh',
        'Islamic University, Kushtia',
        'Jagannath University',
        'Jahangirnagar University',
        'Jahurul Islam Medical College, Kishoregonj',
        'Jalalabad Ragib-Rabeya Medical College, Sylhet',
        'Jatiya Kabi Kazi Nazrul Islam University',
        'Jessore Medical College',
        'Jessore Science & Technology University',
        'Jessore University of Science & Technology',
        'Khawja Yunus Ali Medical College, Sirajganj',
        'Khulna Agricultural University',
        'Khulna Khan Bahadur Ahsanullah University',
        'Khulna Medical College',
        'Khulna University',
        'Khulna University of Engineering and Technology',
        'Khwaja Yunus Ali University',
        'Kumudini Medical College, Tangail',
        'Kushtia Medical College',
        'Labaid Medical College, Dhanmondi, Dhaka',
        'Leading University, Sylhet',
        'MAG Osmani Medical College',
        'Manarat International University',
        'Maulana Bhasani Medical College',
        'Mawlana Bhashani Science & Technology University',
        'Medical College for Women and Hospital, Dhaka',
        'Metropolitan University, Sylhet',
        'Microland University of Science and Technology',
        'Military Institute of Science and Technology (MIST)',
        'Mymensingh Engineering College',
        'Mymensingh Medical College',
        'N.P.I University of Bangladesh',
        'National University',
        'Nightingale Medical College, Dhaka',
        'Noakhali Medical College',
        'Noakhali Science & Technology University',
        'North Bengal International University',
        'North Bengal Medical College, Sirajganj',
        'North East Medical College, Sylhet',
        'North East University Bangladesh',
        'North South University',
        'North Western University',
        'Northern International Medical College, Dhaka',
        'Northern Private Medical College, Rangpur',
        'Northern University Bangladesh',
        'Northern University of Business & Technology, Khulna',
        'Notre Dame University Bangladesh',
        'Pabna Medical College',
        'Pabna University of Science and Technology',
        'Patuakhali Science And Technology University',
        'Popular Medical College & Hospital, Dhaka',
        'Port City International University',
        'Premier University, Chittagong',
        'Presidency University',
        'Prime Medical College, Rangpur',
        'Prime University',
        'Primeasia University',
        'Pundra University of Science & Technology',
        'Queens University',
        'R.T.M Al-Kabir Technical University',
        'Rabindra Maitree University, Kushtia',
        'Rabindra University, Bangladesh',
        'Rajshahi Medical College',
        'Rajshahi Medical University',
        'Rajshahi Science & Technology University (RSTU), Natore',
        'Rajshahi University',
        'Rajshahi University of Engineering & Technology',
        'Ranada Prasad Shaha University',
        'Rangamati Science and Technology University',
        'Rangpur Community Hospital Medical College',
        'Rangpur Medical College',
        'Rangpur University',
        'Royal University of Dhaka',
        'Rupayan A.K.M Shamsuzzoha University',
        'Sahabuddin Medical College and Hospital',
        'Samaj Vittik Medical College, Mirzanagar, Savar',
        'Satkhira Medical College',
        'Shah Makhdum Management University, Rajshahi',
        'Shahabuddin Medical College, Dhaka',
        'Shaheed Nazrul Islam Medical College',
        'Shaheed Suhrawardy Medical College',
        'Shaheed Ziaur Rahman Medical College',
        'Shahjalal University of Science & Technology',
        'Shanto Mariam University of Creative Technology',
        'Sheikh Fazilatunnesa Mujib University',
        'Sheikh Hasina University',
        'Sheikh Sayera Khatun Medical College, Gopalganj',
        'Sher-e-Bangla Agricultural University',
        'Sher-E-Bangla Medical College',
        'Sir Salimullah Medical College',
        'Sonargaon University',
        'South Asian University',
        'Southeast University',
        'Southern Medical College, Chittagong',
        'Southern University Bangladesh',
        'Southern University of Bangladesh, Chittagong',
        'Stamford University, Bangladesh',
        'State University Of Bangladesh',
        'Sylhet Agricultural University',
        'Sylhet Engineering College',
        'Sylhet International University, Sylhet',
        'Sylhet Medical University',
        'Sylhet Women`s Medical College, Sylhet',
        'Tagore University of Creative Arts, Uttara, Dhaka, Bangladesh',
        'Tairunnessa Memorial Medical College, Gazipur',
        'The International University of Scholars',
        'The Millennium University',
        'The Peoples University of Bangladesh',
        'The University of Asia Pacific',
        'Times University, Bangladesh',
        'TMSS Medical College,Bogra',
        'Trust University, Barishal',
        'United International University',
        'University of Asia Pacific',
        'University of Barisal',
        'University of Brahmanbaria',
        'University of Chittagong',
        'University of Creative Technology, Chittagong',
        'University of Development Alternative',
        'University of Dhaka',
        'University of Global Village',
        'University of Information Technology & Sciences',
        'University of Liberal Arts Bangladesh',
        'University of Rajshahi',
        'University of Science & Technology, Chittagong',
        'University of Skill Enrichment and Technology',
        'University of South Asia',
        'Uttara Adhunik Medical College,Dhaka',
        'Uttara University',
        'Varendra University',
        'Victoria University of Bangladesh',
        'World University of Bangladesh',
        'Z. H. Sikder Women`s Medical College',
        'Z.H Sikder University of Science & Technology',
        'Z.N.R.F. University of Management Sciences',
        'Others'

    ];
    let pass_year = ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];


    if (exam1 === "Dakhil_Vocational") {
        setExam1("SSC_Vocational");
    }
    if (exam1 === "SSC_Equivalent") {
        setExam1("SSC");
    }
    if (exam1 === "O_Level") {
        setExam1("SSC");
    }
    if (exam1 === "Dakhil") {
        setExam1("SSC");
    }
    if (exam2 === "HSC") {
        setExam2("SSC")
    }
    if (exam2 === "Alim") {
        setExam2("SSC")
    }
    if (exam2 === "Business Management") {
        setExam2("SSC")
    }
    if (exam2 === "A Level") {
        setExam2("SSC")
    }
    if (exam2 === "HSC Equivalent") {
        setExam2("SSC")
    }

    let ssc = ssc_sub[exam1];
    let hsc = ssc_sub[exam2];
    let graduate = bachelor[exam3];
    let ssc1 = [];
    let hsc1 = [];
    let graduate1 = [];
    for (let n in ssc_sub[exam1]) {
        ssc1.push(ssc[n]);
    }
    for (let h in ssc_sub[exam2]) {
        hsc1.push(hsc[h]);
    }
    for (let g in bachelor[exam3]) {
        graduate1.push(graduate[g]);
    }



    useEffect(() => {
        fetch('./dist.json')
            .then(res => res.json())
            .then(data => setDistrictObject(data))
    }, []);

    for (let d in districtObject) {
        m_dist.push(d);
        p_dist.push(d);
    }
    for (let u in districtObject[dist]) {
        m_upzilla.push(u);
    }
    for (let up in districtObject[dist2]) {
        p_upzilla.push(up);
    }
    let upz = districtObject[dist];
    for (let y in upz) {
        // console.log(upz[upzilla]);
        union = upz[upzilla];
        // console.log(union);
        for (let un in union) {
            union1.push(union[un]);
        }
    }

    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newObj = { ...applicant }
        // console.log(newObj);
        // let xx = newObj;
        // console.log(xx);
        newObj[field] = value;

        setApplicant(newObj);

    }
    // console.log(id);

    const handleAddUser = e => {
        fetch('http://localhost:5000/applicantCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(applicant)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert(`${data.insertedId} Your Application Seccessfully Submitted`)
                    setId(data.insertedId);
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <div className='formWrapper'>
            <form onSubmit={handleAddUser}>

                <table cellSpacing="0" cellPadding="5" >
                    <tbody>
                        <tr>
                            <td>Name of the Post</td>
                            <td>:</td>
                            <td>
                                <select className='inputField' style={{ backgroundColor: '#bdbaba', width: '100%', outline: 'none' }} name="postName" id="postName" onBlur={handleOnblur}>
                                    <option value='0'>Select a Post</option>
                                    <option value='Computer Operator'>Computer Operator</option>
                                    <option value='Steno Typist'>Steno Typist</option>
                                    <option value='LDA Computer Operator'>LDA Computer Operator</option>
                                    <option value='Driver'>Driver</option>
                                    <option value='Cleaner'>Cleaner</option>
                                    <option value='Data Analyst'>Data Analyst</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Applicant's Name</td>
                            <td>:</td>
                            <td><input className='inputField' type="text" placeholder=" " name="applicantName" id="applicantName" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Father's Name</td>
                            <td>:</td>
                            <td><input className='inputField' type="text" placeholder=" " name="fname" id="fname" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Mother's Name</td>
                            <td>:</td>
                            <td><input className='inputField' type="text" placeholder=" " name="mname" id="mname" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>:</td>
                            <td>
                                <select style={{ padding: '3px', width: '150px' }} name="gender" id="gender" onBlur={handleOnblur}>
                                    <option value='0'>Select Gender</option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                    <option value='Others'>Others</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Date of Birth</td>
                            <td>:</td>
                            <td>
                                <label htmlFor='date'> Day </label>
                                <select style={{ height: '25px', width: '120px', marginRight: '15px', textAlign: 'center' }} id='date' name="b_day" onBlur={handleOnblur}>
                                    <option value="select" defaultValue={"select"}>Select</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                <label htmlFor='month'> Month </label>
                                <select style={{ height: '25px', width: '120px', marginRight: '15px' }} name="b_month" id="month" onBlur={handleOnblur}>
                                    <option value="select" defaultValue={"select"}>Select</option>
                                    <option value="January">01 - January</option>
                                    <option value="February">02 - February</option>
                                    <option value="March">03 - March</option>
                                    <option value="April">04 - April</option>
                                    <option value="May">05 - May</option>
                                    <option value="June">06 - June</option>
                                    <option value="July">07 - July</option>
                                    <option value="August">08 - August</option>
                                    <option value="September">09 - September</option>
                                    <option value="October">10 - October</option>
                                    <option value="November">11 - November</option>
                                    <option value="December">12 - December</option>
                                </select>
                                <label htmlFor="year"> Year </label>
                                <select name="b_year" id="year" style={{ height: '25px', width: '120px', float: 'right' }} onBlur={handleOnblur}>
                                    <option value="selected" defaultValue={"selected"}>Select</option>
                                    <option value="1976">1976</option>
                                    <option value="1977">1977</option>
                                    <option value="1978">1978</option>
                                    <option value="1979">1979</option>
                                    <option value="1980">1980</option>
                                    <option value="1981">1981</option>
                                    <option value="1982">1982</option>
                                    <option value="1983">1983</option>
                                    <option value="1984">1984</option>
                                    <option value="1985">1985</option>
                                    <option value="1986">1986</option>
                                    <option value="1987">1987</option>
                                    <option value="1988">1988</option>
                                    <option value="1989">1989</option>
                                    <option value="1990">1990</option>
                                    <option value="1991">1991</option>
                                    <option value="1992">1992</option>
                                    <option value="1993">1993</option>
                                    <option value="1994">1994</option>
                                    <option value="1995">1995</option>
                                    <option value="1996">1996</option>
                                    <option value="1997">1997</option>
                                    <option value="1998">1998</option>
                                    <option value="1999">1999</option>
                                    <option value="2000">2000</option>
                                    <option value="2001">2001</option>
                                    <option value="2002">2002</option>
                                    <option value="2003">2003</option>
                                    <option value="2004">2004</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Nationality</td>
                            <td>:</td>
                            <td>
                                <select style={{ height: '25px', width: '120px', marginRight: '10px' }} name="nationality" id="nationality" onBlur={handleOnblur}>
                                    <option>Bangladeshi</option>
                                    <option>Foreiner</option>
                                </select>
                                <label htmlFor='religion' style={{ marginLeft: '200px' }}> Religion </label>
                                <select id='religion' style={{ height: '25px', width: '120px', float: 'right' }} name="religion" onBlur={handleOnblur}>
                                    <option>Select Religion</option>
                                    <option value="Buddhism">Buddhism</option>
                                    <option value="Christianity">Christianity</option>
                                    <option value="Hinduism">Hinduism</option>
                                    <option value="Islam">Islam</option>
                                    <option value="Others">Others</option>

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>National ID</td>
                            <td>:</td>
                            <td><input className='inputField' type="number" placeholder=" " name="NID" id="NID" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Birth Registration No</td>
                            <td>:</td>
                            <td><input className='inputField' type="number" placeholder=" " name="b_reg" id="b_reg" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Merital Status</td>
                            <td>:</td>
                            <td>
                                <select style={{ padding: '3px', width: '150px' }} name="m_status" id="m_status" onBlur={handleOnblur}>
                                    <option defaultValue='0'>Select Marital Status</option>
                                    <option value='Married'>Married</option>
                                    <option value='Single'>Single</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Quota</td>
                            <td>:</td>
                            <td>
                                <select style={{ padding: '3px' }} name="quota" id="quota" onBlur={handleOnblur}>
                                    <option defaultValue='0'>Select One</option>
                                    <option value="Freedom Fighter">Freedom Fighter</option>
                                    <option value="Child of Freedom Fighter">Child of Freedom Fighter</option>
                                    <option value="Grand Child of Freedom Fighter">Grand Child of Freedom Fighter</option>
                                    <option value="Physically Handicapped">Physically Handicapped</option>
                                    <option value="Orphan">Orphan</option>
                                    <option value="Ethnic Minority">Ethnic Minority</option>
                                    <option value="Ansar-VDP">Ansar-VDP</option>
                                    <option value="Non Quota">Non Quota</option>

                                </select>
                            </td>
                        </tr>


                        <tr>
                            <td colSpan="3">
                                <table className='boxTable' style={{ width: '100%' }}>
                                    <tbody>
                                        <tr style={{ backgroundColor: '#dfdfdf' }}>
                                            {/* Mailing Address */}
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="2">Mailing Address</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Care of</td>
                                                            <td><input type="textarea" name="M_CareOf" id="M_CareOf" onBlur={handleOnblur} onChange={e => setCare(e.target.value)} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Village/Town/Road</td>
                                                            <td><input type="textarea" name="M_Village" id="M_Village" onBlur={handleOnblur} onChange={e => setVillage(e.target.value)} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="M_District" id="M_District" onBlur={handleOnblur} onChange={e => setDist(e.target.value)}>
                                                                    <option value="0" >Select District</option>
                                                                    {
                                                                        m_dist.map(d => <option key={d} value={d} >{d}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Upzilla</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="M_Upzilla" id="M_Upzilla" onBlur={handleOnblur} onChange={e => setMupzilla(e.target.value)}>
                                                                    <option value="0">Select Upzilla</option>
                                                                    {
                                                                        m_upzilla.map(u => <option key={u} value={u}>{u}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Office</td>
                                                            <td><input type="text" name="M_POffice" id="M_POffice" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Code</td>
                                                            <td><input type="number" name="M_PCode" id="M_PCode" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{ width: '2%', backgroundColor: '#dfdfdf' }}> </td>
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="2">
                                                                Permanent Address
                                                                <input type="checkbox" id="p_chk" name="p_chk" value="cheked" onChange={e => setFill(e.target.value)} />
                                                                <label htmlFor='p_chk'><small>same as present address</small></label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Care of</td>
                                                            <td><input type="text" name="P_CareOf" id="P_CareOf" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Village/Town/Road</td>
                                                            <td><input type="text" name="P_Village" id="P_Village" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="P_District" id="P_District" onBlur={handleOnblur} onChange={e => setDist2(e.target.value)}>
                                                                    <option value="0" >Select District</option>
                                                                    {
                                                                        p_dist.map(d => <option key={d} value={d} >{d}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Upzilla</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="P_Upzilla" id="KK" onBlur={handleOnblur}>
                                                                    <option value="0">Select Upzilla</option>
                                                                    {
                                                                        p_upzilla.map(u => <option key={u} value={u}>{u}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Office</td>
                                                            <td><input type="text" name="P_POffice" id="P_POffice" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Code</td>
                                                            <td><input type="number" name="P_PCode" id="P_PCode" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>

                        </tr>
                        <tr>
                            <td>Mobile Number</td>
                            <td>:</td>
                            <td><input type='number' name="p_number" id="p_number" onBlur={handleOnblur} /> <small style={{ color: 'red', lineHeight: '.5' }}> *plz mention a mobile number for getting info</small></td>
                        </tr>
                        <tr>
                            <td>Confirm Mobile</td>
                            <td>:</td>
                            <td><input type='number' name="cp_number" id="cp_number" onBlur={handleOnblur} /> <small>plz retype mobile number</small></td>
                        </tr>
                        <tr>
                            <td>Email Address</td>
                            <td>:</td>
                            <td><input type='email' className='inputField' name="email" id="email" onBlur={handleOnblur} /></td>
                        </tr>
                        {/* academic qualification  */}
                        <tr>
                            <td colSpan="3">
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr style={{ backgroundColor: '#dfdfdf' }}>
                                            {/* SSC or Equivalent */}
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="2">SSC or Equivalent Level</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Examination</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="exam1" id="exam1" onBlur={handleOnblur} onChange={e => setExam1(e.target.value)}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="SSC">S.S.C</option>
                                                                    <option value="Dakhil">Dakhil</option>
                                                                    <option value="SSC_Vocational">S.S.C Vocational</option>
                                                                    <option value="O_Level">O Level/Cambridge</option>
                                                                    <option value="SSC_Equivalent">S.S.C Equivalent</option>
                                                                    <option value="Dakhil_Vocational">Dakhil Vocational</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Board</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="board1" id="board1" onBlur={handleOnblur}>
                                                                    <option value="0">Select One</option>
                                                                    {
                                                                        ssc_board.map(board => <option key={board} value={board}>{board}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Roll No</td>
                                                            <td><input type="text" name="roll1" id="roll1" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Result</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="result1" id="result1" onBlur={handleOnblur}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="1">1st Division</option>
                                                                    <option value="2">2nd Division</option>
                                                                    <option value="3">3rd Division</option>
                                                                    <option value="4">GPA(out of 4)</option>
                                                                    <option value="5">GPA(out of 5)</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Group/Subject</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="subject1" id="subject1" onBlur={handleOnblur}>
                                                                    <option value="0">Select Subject</option>
                                                                    {
                                                                        ssc1.map(s => <option key={s} value={s}>{s}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Passing Year</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="year1" id="year1" onBlur={handleOnblur}>
                                                                    <option value="0" >Select One</option>
                                                                    {
                                                                        pass_year.map(y => <option key={y} value={y}>{y}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{ width: '2%', backgroundColor: '#dfdfdf' }}> </td>
                                            {/* HSC or Equivalent */}
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="2">HSC or Equivalent Level</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Examination</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="exam2" id="exam2" onBlur={handleOnblur} onChange={e => setExam2(e.target.value)}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="HSC">H.S.C</option>
                                                                    <option value="Alim">Alim</option>
                                                                    <option value="Business Management">Business Management</option>
                                                                    <option value="Diploma_in_Engineering">Diploma-in-Engineering</option>
                                                                    <option value="A Level">A Level/Sr. Cambridge</option>
                                                                    <option value="HSC Equivalent">H.S.C Equivalent</option>
                                                                    <option value="Diploma_in_Medical_Technology">Diploma in Medical Technology</option>
                                                                    <option value="Diploma_in_Agriculture">Diploma in Agriculture</option>
                                                                    <option value="HSC_Vocational">H.S.C Vocational</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Board</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} onBlur={handleOnblur} name="hsc_board" id="hsc_board">
                                                                    <option value="0">Select One</option>
                                                                    {
                                                                        ssc_board.map(board => <option key={board} value={board}>{board}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Roll No</td>
                                                            <td><input type="text" name="hsc_roll" id="hsc_roll" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Result</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="hsc_result" id="hsc_result" onBlur={handleOnblur} >
                                                                    <option value="0" >Select One</option>
                                                                    <option value="1">1st Division</option>
                                                                    <option value="2">2nd Division</option>
                                                                    <option value="3">3rd Division</option>
                                                                    <option value="4">GPA(out of 4)</option>
                                                                    <option value="5">GPA(out of 5)</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Group/Subject</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="hsc_subject" id="hsc_subject" onBlur={handleOnblur}>
                                                                    <option value="0" >Select One</option>
                                                                    {
                                                                        hsc1.map(h => <option key={h} value={h}>{h}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Passing Year</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="hsc_pass" id="hsc_pass" onBlur={handleOnblur}>
                                                                    <option value="0" >Select One</option>
                                                                    {
                                                                        pass_year.map(p => <option key={p} value={p}>{p}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        {/* gratuation or Equivalent level  */}

                        <tr>
                            <td colSpan="3">
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        {/* graduation and Equivalent level  */}
                                        <tr style={{ backgroundColor: '#dfdfdf' }}>

                                            <td style={{ width: '100%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="5">Gratuation/Equivalent Level</td>
                                                        </tr>

                                                        <tr>
                                                            <td style={{ width: '23%' }}>Examination</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} name="exam3" id="exam3" onBlur={handleOnblur} onChange={e => setExam3(e.target.value)}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="BSC_Engineering">BSC Engineering</option>
                                                                    <option value="BSC_in_Agriculture">BSC In Agriculture</option>
                                                                    <option value="MBBS">MBBS</option>
                                                                    <option value="Honors">Honors</option>
                                                                    <option value="Pass_Course">Pass Course</option>
                                                                    <option value="Fazil">Fazil</option>
                                                                    <option value="BBA">BBA</option>
                                                                    <option value="Graduation_Equivalent">Graduation Equivalent</option>

                                                                </select>
                                                            </td>
                                                            <td></td>

                                                            <td style={{ width: '23%' }}>Result</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} onBlur={handleOnblur} id="exam3_result" name="exam3_result">
                                                                    <option value="0" >Select One</option>
                                                                    <option value="1st Class">1st Class</option>
                                                                    <option value="2nd Class">2nd Class</option>
                                                                    <option value="3rd Class">3rd Class</option>
                                                                    <option value="4">CGPA (Out of 4)</option>
                                                                    <option value="5">CGPA (Out of 5)</option>
                                                                    <option value="Passed">Passed</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '23%' }}>Subject/Degree</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} onBlur={handleOnblur} id="exam3_sub" name="exam3_sub">
                                                                    <option value="0">Select One</option>
                                                                    {
                                                                        graduate1.map(g => <option key={g} value={g}>{g}</option>)
                                                                    }

                                                                </select>
                                                            </td>
                                                            <td></td>
                                                            <td style={{ width: '23%' }}>Passing Year</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} onBlur={handleOnblur} id="exam3_passyr" name="exam3_passyr">
                                                                    <option value="0">Select One</option>
                                                                    {
                                                                        pass_year.map(py => <option key={py} value={py}>{py}</option>)
                                                                    }

                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>University/Institution</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} name="university" id="university" onBlur={handleOnblur}>
                                                                    <option value="0">Select One</option>
                                                                    {
                                                                        university.map(u => <option key={u} value={u}>{u}</option>)
                                                                    }

                                                                </select>
                                                            </td>

                                                            <td style={{ width: '2%' }}></td>
                                                            <td>Course Duration</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} onBlur={handleOnblur} id="exam3_duration" name="exam3_duration">
                                                                    <option value="0">Select One</option>
                                                                    <option value="02 Years">02 Years</option>
                                                                    <option value="03 Years">03 Years</option>
                                                                    <option value="04 Years">04 Years</option>
                                                                    <option value="05 Years">05 Years</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <table cellPadding="5">
                                                    <tbody>
                                                        <tr style={{ backgroundColor: '#bfdfbf' }}>
                                                            <td colSpan="5">Departmental Candidate Status
                                                                <select style={{ marginLeft: '80px', width: '200px' }}>
                                                                    <option>Select One</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>


                                        {/* photo and signature */}
                                        <tr>
                                            <td colSpan="3">
                                                <table style={{ width: '100%' }}>
                                                    <tbody>
                                                        <tr style={{ backgroundColor: '#dfdfdf' }}>
                                                            {/* SSC or Equivalent */}
                                                            <td style={{ width: '48%' }}>
                                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan="2">Upload Photo <small style={{ color: 'red' }}>*(300 x 300 Pixel JPG/PNG)</small></td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td colSpan='2'>
                                                                                <input type='file' />
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style={{ width: '2%', backgroundColor: '#dfdfdf' }}> </td>
                                                            {/* HSC or Equivalent */}
                                                            <td style={{ width: '48%' }}>
                                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan="2">Upload Signature <small style={{ color: 'red' }}>*(120 x 80 Pixel JPG/PNG)</small></td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td colSpan='2'>
                                                                                <input type='file' />
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br /><br /><br />
                <input type="submit" value="Submit" style={{ padding: '10px 20px', marginBottom: '20px' }} />

                <Link to={`/admitCard/${id}`}>chk</Link>
                <p>{id}</p>

            </form>
        </div>
    );
};

export default ApplicationForm;