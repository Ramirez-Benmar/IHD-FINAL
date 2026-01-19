export interface ProjectImage {
    slug: string;
    projectNumber: string;
    name: string;               
    description?: string;
    location?: string;
    country: string;
    disciplines: string[];     
    types: string[];           
    image: string;
}

export const projectImages: ProjectImage[] = [
    {
        slug: 'PA123001',
        projectNumber: 'PA123001',
        name: 'Metro Bank Center Grand Hyatt',
        description: 'Metro Bank Center Grand Hyatt in Bonifacio Global City, Taguig, a landmark mixed use development in one of Metro Manila’s prime business districts.',
        location: 'Bonifacio Global City, Taguig',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Information Technology'],
        types: ['Bank'],
        image: '/projects/metrobankcenter.jpg'
    },
    {
        slug: 'PA123002',
        projectNumber: 'PA123002',
        name: 'Ascott Residences',
        description: 'Ascott Residences in Makati City, a premium serviced residence within the city’s central business and lifestyle district.',
        location: 'Makati City',
        country: 'Philippines',
        disciplines: ['Audio Visual'],
        types: ['Hotel'],
        image: '/projects/ascott.jpg'
    },
    {
        slug: 'PA123006',
        projectNumber: 'PA123006',
        name: 'Crimson Boracay Resort',
        description: 'Crimson Boracay Resort in Boracay, a beachfront destination on one of the Philippines’ most popular white sand island getaways.',
        location: 'Boracay',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic', 'Information Technology', 'Security'],
        types: ['Hotel & Resort'],
        image: '/projects/crimsonboracay.jpg'
    },
    {
        slug: 'PA133001',
        projectNumber: 'PA133001',
        name: 'Grand Hyatt Residences',
        description: 'Grand Hyatt Residences in Taguig City, a high end residential development offering premium living in a modern urban setting.',
        location: 'Taguig City',
        country: 'Philippines',
        disciplines: ['Security'],
        types: ['Hotel'],
        image: '/projects/grandhyatt.jpg'
    },
    {
        slug: 'PA133003',
        projectNumber: 'PA133003',
        name: 'Savoy Hotel Newport',
        description: 'Savoy Hotel Newport in Newport City, Pasay, a contemporary hotel serving travelers beside the airport and integrated resort complex.',
        location: 'Newport City, Pasay City',
        country: 'Philippines',
        disciplines: ['Audio Visual'],
        types: ['Hotel'],
        image: '/projects/savoynewport.jpg'
    },
    {
        slug: 'PA133009',
        projectNumber: 'PA133009',
        name: 'Winford',
        description: 'Winford Resort & Casino in Metro Manila, a hospitality and gaming destination serving guests from across the capital region.',
        location: 'Metro Manila',
        country: 'Philippines',
        disciplines: ['Audio Visual'],
        types: ['Resort & Casino'],
        image: '/projects/winford.png'
    },
    {
        slug: 'PA133011',
        projectNumber: 'PA133011',
        name: 'Hilton',
        description: 'Hilton in Newport City, Pasay, an international hotel brand within a vibrant integrated resort and commercial precinct.',
        location: 'Newport City, Pasay City',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Information Technology'],
        types: ['Hotel'],
        image: '/projects/hilton.jpg'
    },
    {
        slug: 'PA133013',
        projectNumber: 'PA133013',
        name: 'Dusit Davao Hotel',
        description: 'Dusit Davao Hotel in Davao City, a lakeside style urban resort serving both business travelers and leisure guests in Mindanao.',
        location: 'Davao City',
        country: 'Philippines',
        disciplines: ['Information Technology'],
        types: ['Hotel'],
        image: '/projects/dusit.jpg'
    },
    {
        slug: 'PA133014',
        projectNumber: 'PA133014',
        name: 'Shangri-la Mactan',
        description: 'Shangri-la Mactan renovations in Mactan, Cebu, at a well known beachfront resort overlooking tropical waters and landscaped grounds.',
        location: 'Mactan, Cebu',
        country: 'Philippines',
        disciplines: ['Audio Visual'],
        types: ['Hotel'],
        image: '/projects/shangmactan.png'
    },
    {
        slug: 'PA133015',
        projectNumber: 'PA133015',
        name: 'EDSA Shangri-La Health Club',
        description: 'EDSA Shangri-La Health Club in Mandaluyong City, Metro Manila, a wellness facility within a major city hotel complex.',
        location: 'Mandaluyong City, Metro Manila',
        country: 'Philippines',
        disciplines: ['Audio Visual'],
        types: ['Fitness Center'],
        image: '/projects/edsashangcenter.png'
    },
    {
        slug: 'PA133016',
        projectNumber: 'PA133016',
        name: 'Makati Shangri-La Health Club & Inagiku',
        description: 'Makati Shangri-La Health Club & Inagiku in Makati, providing fitness and dining spaces in a landmark luxury hotel setting.',
        location: 'Makati, Metro Manila',
        country: 'Philippines',
        disciplines: ['Audio Visual'],
        types: ['Fitness Center'],
        image: '/projects/makatishang.png'
    },
    {
        slug: 'PA143001',
        projectNumber: 'PA143001',
        name: 'Full Gospel Church',
        description: 'Full Gospel Church in Makati, Metro Manila, a city church serving a growing congregation in a dense urban environment.',
        location: 'Makati, Metro Manila',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic'],
        types: ['Church'],
        image: '/projects/fullgospel.png'
    },
    {
        slug: 'PA143002',
        projectNumber: 'PA143002',
        name: 'Savoy Mactan',
        description: 'Savoy Mactan in Mactan, Cebu, a hotel catering to resort guests and business travelers near beaches and commercial hubs.',
        location: 'Mactan, Cebu',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic'],
        types: ['Hotel'],
        image: '/projects/savoymactan.png'
    },
    {
        slug: 'PA143003',
        projectNumber: 'PA143003',
        name: 'ESL Tower & Garden Wing',
        description: 'ESL Tower & Garden Wing in Mandaluyong City, Metro Manila, a residential development within a wider mixed use community.',
        location: 'Mandaluyong City, Metro Manila',
        country: 'Philippines',
        disciplines: ['Audio Visual'],
        types: ['Residential'],
        image: '/projects/eslgarden.png'
    },
    {
        slug: 'PA143004',
        projectNumber: 'PA143004',
        name: 'Savoy Hotel Boracay',
        description: 'Savoy Hotel Boracay in Boracay, a resort hotel offering direct access to one of the island’s leisure and beachfront areas.',
        location: 'Boracay',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic'],
        types: ['Hotel & Resort'],
        image: '/projects/savoyboracay.png'
    },
    {
        slug: 'PA143005',
        projectNumber: 'PA143005',
        name: 'Savoy Hotel Bayshore',
        description: 'Savoy Hotel Bayshore in Mactan, Cebu, a coastal hotel development designed for both holiday and business stays.',
        location: 'Mactan, Cebu',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic'],
        types: ['Hotel & Resort'],
        image: '/projects/savoyhotelbayshore.jpg'
    },
    {
        slug: 'PA143007',
        projectNumber: 'PA143007',
        name: 'Philam Life Building',
        description: 'Philam Life Building in Makati, Metro Manila, an office property in a key business and commercial district.',
        location: 'Makati, Metro Manila',
        country: 'Philippines',
        disciplines: ['Acoustic'],
        types: ['Business'],
        image: '/projects/philamlife.jpg'
    },
    {
        slug: 'PA143009',
        projectNumber: 'PA143009',
        name: 'Belmont Hotel Mactan',
        description: 'Belmont Hotel Mactan in Mactan, Cebu, a hotel serving tourists and corporate guests near the island’s resorts and airport.',
        location: 'Mactan, Cebu',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic'],
        types: ['Hotel'],
        image: '/projects/belmontmactan.jpg'
    },
    {
        slug: 'PA143010',
        projectNumber: 'PA143010',
        name: 'Eton Tower',
        description: 'Eton Tower in Makati, Metro Manila, a residential tower located close to offices, retail, and transport connections.',
        location: 'Makati, Metro Manila',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic', 'Information Technology', 'Security'],
        types: ['Residential'],
        image: '/projects/etontower.jpeg'
    },
    {
        slug: 'PA153001',
        projectNumber: 'PA153001',
        name: 'Marco Polo Hotel Ballroom Renovation',
        description: 'Marco Polo Hotel Ballroom Renovation in Ortigas, Manila, upgrading a major events venue within a prominent city hotel.',
        location: 'Ortigas, Manila',
        country: 'Philippines',
        disciplines: ['Audio Visual'],
        types: ['Hotel'],
        image: '/projects/ballroommarco.png'
    },
    {
        slug: 'PA153003',
        projectNumber: 'PA153003',
        name: 'Pasig Catholic School Auditorium',
        description: 'Pasig Catholic School Auditorium in Pasig City, a multipurpose hall used for academic programs, performances, and community events.',
        location: 'Pasig City',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic'],
        types: ['School'],
        image: '/projects/pasigcatholic.jpg'
    },
    {
        slug: 'PA153005',
        projectNumber: 'PA153005',
        name: 'Shangrila Plaza Mall - Chapel',
        description: 'Shangrila Plaza Mall Chapel in Ortigas, Manila, a worship space integrated within a major shopping and lifestyle complex.',
        location: 'Ortigas, Manila',
        country: 'Philippines',
        disciplines: ['Audio Visual'],
        types: ['Chapel'],
        image: '/projects/shangrila plaza mall chapel.jpg'
    },
    {
        slug: 'PA153006',
        projectNumber: 'PA153006',
        name: 'Christian Bible Church',
        description: 'Christian Bible Church in Quezon City, a community church serving worship services, gatherings, and outreach activities.',
        location: 'Quezon City',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic'],
        types: ['Church'],
        image: '/projects/christianbible.jpg'
    },
    {
        slug: 'PA153008',
        projectNumber: 'PA153008',
        name: 'Grand Hyatt Rooftop',
        description: 'Grand Hyatt Rooftop in Taguig City, an elevated venue used for events and dining with panoramic views over the city.',
        location: 'Taguig City',
        country: 'Philippines',
        disciplines: ['Acoustic'],
        types: ['Hotel'],
        image: '/projects/grandhyattrooftop.png'
    },
    {
        slug: 'PA153009',
        projectNumber: 'PA153009',
        name: 'Widus Tower3',
        description: 'Widus Tower3 in Clark, Pampanga, a hotel tower within a growing mixed use and leisure destination in Central Luzon.',
        location: 'Clark, Pampanga',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic', 'Information Technology', 'Security'],
        types: ['Hotel'],
        image: '/projects/widustower3.png'
    },
    {
        slug: 'PA163011',
        projectNumber: 'PA163011',
        name: 'Seda Hotel BGC',
        description: 'Seda Hotel BGC in Bonifacio Global City, Taguig, a business hotel located amid corporate offices and lifestyle destinations.',
        location: 'Bonifacio Global City, Taguig',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic'],
        types: ['Hotel'],
        image: '/projects/sedahotel.png'
    },
    {
        slug: 'PA163014',
        projectNumber: 'PA163014',
        name: 'Seda Hotel Arca South',
        description: 'Seda Hotel Arca South in Arca South, Taguig City, a contemporary hotel within an emerging mixed use estate.',
        location: 'Arca South, Taguig City',
        country: 'Philippines',
        disciplines: ['Acoustic'],
        types: ['Hotel'],
        image: '/projects/sedaarca.png'
    },
    {
        slug: 'PA163015',
        projectNumber: 'PA163015',
        name: 'Seda Hotel Glorietta',
        description: 'Seda Hotel Glorietta in Makati, Metro Manila, directly connected to a major mall and surrounded by offices and retail.',
        location: 'Makati, Metro Manila',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic'],
        types: ['Hotel'],
        image: '/projects/sedamakati.jpg'
    },
    {
        slug: 'PA173008',
        projectNumber: 'PA173008',
        name: 'Sheraton Mactan',
        description: 'Sheraton Mactan in Mactan, Cebu, a beachfront resort hotel with ocean views and resort style amenities.',
        location: 'Mactan, Cebu',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Information Technology'],
        types: ['Hotel'],
        image: '/projects/sheraton.jpg'
    },
    {
        slug: 'PA183002',
        projectNumber: 'PA183002',
        name: 'Crimson Mactan',
        description: 'Crimson Mactan in Mactan, Cebu, a luxury resort featuring villas, beachfront areas, and leisure facilities.',
        location: 'Mactan, Cebu',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic', 'Information Technology', 'Security'],
        types: ['Hotel'],
        image: '/projects/crimsonmactan.jpg'
    },
    {
        slug: 'PA183008',
        projectNumber: 'PA183008',
        name: 'Okura Hotel (Newport City)',
        description: 'Okura Hotel in Newport City, Pasay, a Japanese inspired luxury hotel in a large integrated resort complex.',
        location: 'Newport City, Pasay City',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic'],
        types: ['Hotel'],
        image: '/projects/okura.jpg'
    },
    {
        slug: 'PA183009',
        projectNumber: 'PA183009',
        name: 'Rockwell Performing Arts Theater',
        description: 'Rockwell Performing Arts Theater in Makati, Metro Manila, a dedicated venue for concerts, shows, and cultural performances.',
        location: 'Makati, Metro Manila',
        country: 'Philippines',
        disciplines: ['Acoustic'],
        types: ['Theater'],
        image: '/projects/rockwellperformingarts.jpg'
    },
    {
        slug: 'PA183013',
        projectNumber: 'PA183013',
        name: 'Quest Hotel Clark Expansion',
        description: 'Quest Hotel Clark Expansion in Clark, Pampanga, an extension of a business and leisure hotel within a growing economic zone.',
        location: 'Clark, Pampanga',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Information Technology', 'Security'],
        types: ['Hotel'],
        image: '/projects/questhotelclark.png'
    },
    {
        slug: 'PA183014',
        projectNumber: 'PA183014',
        name: 'Mactan World Museum',
        description: 'Mactan World Museum in Mactan, Cebu, a museum style attraction designed to showcase history and culture in an immersive setting.',
        location: 'Mactan, Cebu',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic'],
        types: ['Museum'],
        image: '/projects/mactanworld.jpg'
    },
    {
        slug: 'PA193001',
        projectNumber: 'PA193001',
        name: 'The Fifth at Rockwell',
        description: 'The Fifth at Rockwell in Makati, Metro Manila, a premium events hall used for conferences, launches, and social celebrations.',
        location: 'Makati, Metro Manila',
        country: 'Philippines',
        disciplines: ['Acoustic'],
        types: ['Events hall'],
        image: '/projects/thefifthrockwell.jpg'
    },
    {
        slug: 'PA193008',
        projectNumber: 'PA193008',
        name: 'Four Points - Palawan',
        description: 'Four Points Hotel in Palawan, a resort style property located in one of the Philippines’ most scenic island provinces.',
        location: 'Palawan',
        country: 'Philippines',
        disciplines: ['Audio Visual', 'Acoustic', 'Information Technology', 'Security'],
        types: ['Hotel'],
        image: '/projects/fourpoints.png'
    }
];
