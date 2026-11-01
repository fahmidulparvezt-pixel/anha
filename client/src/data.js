// All portfolio content lives here. Edit this file to update the website.

export const profile = {
  name: 'Anha Anzum Kona',
  shortName: 'Anha Anzum',
  initials: 'AK',
  roles: ['Aspiring Researcher', 'Community Leader', 'Peace Advocate'],
  phone: '01637130352',
  email: 'anzumaris29@gmail.com',
  address: 'College Para, Brahmanbaria',
  photo: '/profile.jpg', // put your photo at client/public/profile.jpg
  tagline:
    'Dedicated and enthusiastic aspiring educator committed to fostering a supportive, engaging learning environment that ignites student curiosity.',
  about: [
    'I am a dedicated and enthusiastic aspiring educator committed to fostering a supportive, engaging learning environment that ignites student curiosity.',
    'I am passionate about empowering young learners to reach their full potential through creative, student-centered teaching. Since 2020 I have been tutoring students across multiple subjects, and I also coach students at a local centre, focusing on academic performance and exam preparation.',
    'Beyond the classroom, I serve as Joint Secretary of the Brahmanbaria Government College Debating Society and volunteer in my community.',
  ],
}

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: '5.00', label: 'GPA in SSC & HSC' },
  { value: '2020', label: 'Teaching since' },
  { value: '3', label: 'Competition awards' },
  { value: '3', label: 'Certificates' },
]

export const education = [
  {
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Brahmanbaria Government College',
    result: 'GPA 5.00 / 5.00',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    school: 'Sabera Subhan Govt. Girls High School',
    result: 'GPA 5.00 / 5.00',
  },
]

export const experience = [
  {
    role: 'Private Tutor',
    period: '2020 — Present',
    type: 'Teaching',
    points: [
      'Providing private tutoring to students across multiple subjects since 2020.',
      'Helped numerous students secure admissions at the secondary and higher secondary levels.',
    ],
  },
  {
    role: 'Coaching Centre Instructor',
    period: 'Ongoing',
    type: 'Teaching',
    points: ['Coaching students at a local centre, focusing on academic performance and exam preparation.'],
  },
  {
    role: 'Joint Secretary — Brahmanbaria Government College Debating Society (BGCDS)',
    period: 'Ongoing',
    type: 'Leadership',
    points: ["Coordinated debate events and helped manage the society's activities and members."],
  },
  {
    role: 'Community Volunteer',
    period: 'Community initiative',
    type: 'Volunteering',
    points: ['Voluntarily tutored underprivileged street children alongside friends as a community initiative.'],
  },
]

export const achievements = [
  { place: '1st', title: 'English Instant Composition', event: 'Jatio Shikkha Soptaho', level: 'Upazilla & Zilla level' },
  { place: '2nd', title: 'English Instant Composition', event: 'Jatio Shikkha Soptaho', level: 'Divisional level' },
  { place: '1st', title: 'Bangla Speech', event: 'Jatio Shikkha Soptaho', level: 'Upazilla & Zilla level' },
]

export const teachingImpact =
  'Coached students to achieve placements within the top 10 roll positions in their respective exams.'

export const skills = [
  { icon: 'chat', title: 'Communication', text: 'Ability to convey ideas clearly and empathetically across diverse audiences.' },
  { icon: 'adapt', title: 'Adaptability', text: 'Comfortable adjusting teaching methods to suit different learners and environments.' },
  { icon: 'team', title: 'Teamwork & Collaboration', text: 'Experienced in coordinating with peers, juniors, and community members.' },
  { icon: 'solve', title: 'Problem Solving', text: 'Practical, calm approach to addressing student challenges and community issues.' },
]

export const digitalSkills = [
  'Spreadsheet',
  'Presentation',
  'Word Processing',
  'English & Bangla Typing',
  'Internet Research',
  'Python Data Visualization',
  'AI Fundamentals',
  'Basic PC Troubleshooting',
]

export const languages = [
  { name: 'Bangla', level: 'Native', value: 100 },
  { name: 'English', level: 'Advanced', value: 85 },
]

export const certificates = [
  {
    title: 'Basics of Data Visualization Using Python',
    issuer: 'UniAthena × Cambridge International Qualifications, UK',
    date: '09 April 2026',
    detail: 'Blockchain verified certificate',
    id: 'Blockchain ID: 4828-8509-0825',
  },
  {
    title: 'Basics of Artificial Intelligence: Learning Models',
    issuer: 'UniAthena × Cambridge International Qualifications, UK',
    date: '09 April 2026',
    detail: 'Blockchain verified certificate',
    id: 'Blockchain ID: 3654-5808-2984',
  },
  {
    title: 'National Skills Certificate — Computer Operation, Level 3',
    issuer: 'National Skills Development Authority (NSDA), Government of Bangladesh',
    date: 'Published 28 September 2024',
    detail: 'Valid until 27 September 2029',
    id: 'Serial No: NSC-ICT-CO-L3-003385',
    units: [
      'Carryout Communication with Clients',
      'Prepare a Spreadsheet',
      'Use Internet and Access Resources',
      'Type Text and Documents in English and Bangla',
      'Prepare a Presentation',
      'Prepare a Document Using Word Processor',
      'Comply to Ethical Standards in the ICT Workplace',
      'Perform Basic Maintenance and Troubleshooting',
      'Operate a Personal Computer',
    ],
  },
]
