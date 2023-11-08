import { IMAGES } from '../../assets/IMAGES'

export const text1 = 'FRRONT-END DEVELOPER'
export const text2 = 'RREACT JS DEVELOPER'
export const text3 = 'MMOBILE APP DEVELOPER'

export const SkillsList = [
    {
        key: '1',
        image: IMAGES.REACT_WHITE,
        title: 'REACT NATIVE',
    },
    {
        key: '2',
        image: IMAGES.REACT_WHITE,
        title: 'REACT JS',
    },
    {
        key: '3',
        image: IMAGES.HTML,
        title: 'HTML 5',
    },
    {
        key: '4',
        image: IMAGES.CSS,
        title: 'CSS 3',
    },
    {
        key: '5',
        image: IMAGES.JS,
        title: 'JAVASCRIPT',
    },
    {
        key: '6',
        image: IMAGES.BS,
        title: 'BOOTSTRAP',
    },
    {
        key: '7',
        image: IMAGES.PHP,
        title: 'PHP',
    },
    {
        key: '8',
        image: IMAGES.TAILWIND,
        title: 'TAILWIND',
    },
    {
        key: '9',
        image: IMAGES.NODE,
        title: 'NODE JS',
    },
    {
        key: '10',
        image: IMAGES.MY_SQL,
        title: 'MY SQL',
    },
]

export const ProjectsData = [
    {
        key: '1',
        name: 'Dental Chart',
        year: '2023',
        image: [IMAGES.DENTAL1, IMAGES.DENTAL2],
        languages: [
            { title: 'React JS', img: IMAGES.REACT_WHITE },
            { title: 'Php', img: IMAGES.PHP },
            { title: 'Bootstrap', img: IMAGES.BS },
        ],
        description:
            'Dental chart software is an essential tool for modern dental practitioners, providing a digital platform to record and manage patient information, treatment plans, and clinical data. This detailed description will outline the key features and benefits of a comprehensive dental chart software designed for doctors.',
        moreDetails: '',
    },
    {
        key: '2',
        name: 'The ParTimers',
        year: '2022',
        image: [IMAGES.PT1, IMAGES.PT2],
        languages: [
            { title: 'Mongo DB', img: IMAGES.MONGO },
            { title: 'React Native', img: IMAGES.REACT_WHITE },
        ],
        description:
            'The partimer is a dedicated platform for part-time jobs and simplified application processes in the UK. From job advert to (remote) handshake, they provide an end-to-end solution for part time recruitment. Struggling to fit in that interview? Swap a live meeting for a recorded session, and review at your convenience.',
        moreDetails:
            'Used Redux and Async Storage, Used Axios for Api Integration Handling multiple user Accounts like, Employer and Employee, Platform indevidually handeled (Ios & Android)',
    },
    {
        key: '3',
        name: 'My Phone Book',
        year: '2021',
        image: [IMAGES.PB1, IMAGES.PB2],
        languages: [
            { title: 'Mongo DB', img: IMAGES.MONGO },
            { title: 'React Native', img: IMAGES.REACT_WHITE },
        ],
        description:
            'Built around the concept of ‘Vocal for Local’ the App gives users details of services and utilities available in their immediate vicinity. More importantly it gives the local service providers, small scale businesses and vendors a platform for getting noticed by their prospective customers',
        moreDetails:
            'Used Redux and Async Storage, Used Axios for Api Integration Memoization for best Performance Geo location to fetch user Current Location',
    },
]

export const experienceItems = [
    {
        label: '2017-03-01',
        children: <div className="exprnc-timeline">test</div>,
    },
    {
        children: 'Solve initial network problems 2015-09-01',
    },
    {
        // dot: (
        //     <ClockCircleOutlined
        //         style={{ fontSize: '16px' }}
        //     />
        // ),
        children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
    {
        // color: 'red',
        children: 'Network problems being solved 2015-09-01',
    },
    {
        children: 'Create a services site 2015-09-01',
    },
    {
        // dot: (
        //     <ClockCircleOutlined
        //         style={{ fontSize: '16px' }}
        //     />
        // ),
        children: 'Technical testing 2015-09-01',
    },
]

export const Testimonial = [
    {
        key: '1',
        name: 'sibanatechopc',
        location: 'India',
        rate: '5',
        response:
            'Great job and Nice work .Harispatel is very patient and seller is very professional with great intuition.Definately would like to work with on future projects.',
    },
    {
        key: '2',
        name: 'jahadappleton',
        location: 'Jamaica',
        rate: '5',
        response:
            'Extremely one of the best on Fiverr. Lovely working with his team, I definitely will be using his service in near future.',
    },
    {
        key: '3',
        name: 'randomthingsfro',
        location: 'United Kingdom',
        rate: '5',
        response: 'I love the work they do',
    },
    {
        key: '4',
        name: 'alpeshbhalani',
        location: 'India',
        rate: '5',
        response:
            'Veri Nice person. Ready to incorporate suggestions, prompt communication, good understanding of customers need. Thank you.',
    },
    {
        key: '5',
        name: 'venkat_selvaraj',
        location: 'United Kingdom',
        rate: '5',
        response:
            'Very satisfied with the final outcome. Great commitment to deliver quality service. Cheers team. Will get back again.',
    },
    {
        key: '6',
        name: 'jshank29',
        location: 'United States',
        rate: '5',
        response:
            'Very easy to work with, made the changes I asked for. Would work with them again.',
    },
    
    {
        key: '7',
        name: 'sandragerth',
        location: 'Netherlands',
        rate: '5',
        response:
            'Our video needed some adjustments and it was done quick and it got better and better. Truly appreciate the effort, creativity and fast delivery. Working with hasrispatel62 was like being in a team. I would recommend having a beautiful video done by harispatel62.',
    },
]
