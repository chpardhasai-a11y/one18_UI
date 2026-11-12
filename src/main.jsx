import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ChevronDown,
  Clock3,
  Cookie,
  FileText,
  ExternalLink,
  Rss,
  Grid2X2,
  Home,
  Info,
  Landmark,
  BriefcaseBusiness,
  Car,
  ChartNoAxesCombined,
  GraduationCap,
  Globe2,
  HeartHandshake,
  List,
  MapPin,
  Menu,
  Monitor,
  Newspaper,
  Palette,
  PanelLeftClose,
  PanelLeftOpen,
  ShieldCheck,
  Share2,
  SlidersHorizontal,
  Sparkles,
  Clapperboard,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Trophy,
  TrendingUp,
  UserRound,
  X,
  Mail
} from 'lucide-react';
import './styles.css';

const categories = [
  'For You',
  'Entertainment',
  'National',
  'Sports',
  'Markets',
  'Business & Economy',
  'Lifestyle',
  'World',
  'Astrology & Religion',
  'Technology',
  'Education & Jobs',
  'Auto',
  'Politics'
];

const categoryLinks = categories.map((label) => ({
  label,
  path: label === 'For You' ? '/' : `/${label.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-')}`
}));

const drawerCategories = categoryLinks;

const categoryIconMap = {
  'For You': Home,
  Entertainment: Palette,
  National: Landmark,
  Sports: Trophy,
  Markets: ChartNoAxesCombined,
  'Business & Economy': BriefcaseBusiness,
  Lifestyle: HeartHandshake,
  World: Globe2,
  'Astrology & Religion': Sparkles,
  Technology: Monitor,
  'Education & Jobs': GraduationCap,
  Auto: Car,
  Politics: Landmark
};

const supportLinks = [
  { label: 'About Us', icon: Info, path: '/about-us' },
  { label: 'Contact Us', icon: Mail, path: '/contact-us' }
];

const legalLinks = [
  { label: 'Privacy Policy', icon: ShieldCheck, path: '/privacy-policy' },
  { label: 'Cookie Policy', icon: Cookie, path: '/cookie-policy' },
  { label: 'Disclaimer', icon: FileText, path: '/disclaimer' },
  { label: 'RSS', icon: Rss, path: '/rss' }
];

const staticPages = {
  '/sitemap': {
    eyebrow: 'Explore',
    title: 'Sitemap',
    seoTitle: 'Sitemap | One18',
    metaDescription: 'Explore One18 news categories, company information and policy pages.',
    intro: 'Find news categories and useful pages across One18.',
    linkGroups: [
      { heading: 'News Categories', links: categoryLinks.map((item) => item.path === '/' ? { label: 'Home', path: '/' } : item) },
      { heading: 'About & Support', links: supportLinks },
      { heading: 'Policies & Resources', links: legalLinks }
    ]
  },
  '/contact-us': {
    "eyebrow": "Company",
    "title": "Contact Us",
    "seoTitle": "Contact Us | One18",
    "metaDescription": "Contact One18 for questions, comments and suggestions. Find corporate and registered office details, grievance contacts and recruitment fraud reporting information.",
    "intro": "At One18 we are always looking forward to hearing from you.\n\nIf you have any questions, comments, suggestions for us please send them to",
    "sections": [
      {
        "heading": "FRAUD-RECRUITMENT ALERT!!!",
        "body": "Corporate frauds have become rampant and have widely spread over the years. We at Network18 Media & Investments Limited and its Group Companies have observed a trend wherein certain fraudster individuals and companies have been approaching innocent job seekers and promising them lucrative job offers in our group companies. Once a potential applicant is taken into confidence, these fraudsters ask them to make payments to a designated bank account or through mobile payment gateways, after creating scenarios to the actual appointment or interview."
      },
      {
        "heading": "Here’s how it works:",
        "bullets": [
          {
            "text": "The first payment demands are generally in small amounts so that the aspirant is not alerted and takes it in stride."
          },
          {
            "text": "Once he/she is in the net, the fraudster slowly increases the amount, with the dates coming closer to the designated interview or appointment."
          },
          {
            "text": "There are also trends that have seen them demand large amounts on the pretext of providing an initial start-up kit, for instance a laptop, computer, or some kind of training."
          },
          {
            "text": "Besides money, these fraudsters have reportedly been seeking personal information to process the application. This data is invariably later sold in the market."
          }
        ]
      },
      {
        "heading": "Through this Fraud Alert we wish to caution all potential job seekers that Network18 Media & Investments Limited and its Group Companies:",
        "bullets": [
          {
            "text": "Does not charge any job seeker any money or deposit for giving employment offers and interviews or for providing laptop / uniform, etc."
          },
          {
            "text": "Does not appoint any Agent, Agency or Individual to make or issue offers of employment or benefits on its behalf."
          },
          {
            "text": "Does not ask for personal documents like marksheets, PAN Card, Aadhaar Card, CV to be shared through WhatsApp."
          },
          {
            "text": "Does not communicate using personal email IDs like Gmail, Yahoo, Hotmail, Outlook, etc. All official communications related to employment are done using an email address ending with “@nw18.com”."
          }
        ],
        "afterword": "Any job seeker dealing with such an Agency, Employment Portal or Individual will be doing so solely at his or her own risk and Network18 and its Group Companies do not stand responsible for any damages suffered in the process, directly or indirectly.\n\nIt will be in our mutual interest that should there be any suspicious activity pertaining to fraudulent enrolment noticed, it be reported to our Fraud & Misconduct Investigations team at **recruitment.fraud@nw18.com**."
      }
    ],
    "offices": {
      "corporate": [
        "Skymark one, Tower-E,",
        "Sector 98,",
        "Noida, Uttar Pradesh,",
        "India. PIN 201303"
      ],
      "grievance": [
        "Apurv Narula,",
        "Principal Counsel"
      ],
      "registered": [
        "First Floor, Empire Complex,",
        "414 Senapati Bapat Marg,",
        "Lower Parel, Mumbai-400013",
        "Maharashtra, India",
        "CIN: L65910MH1996PLC280969"
      ]
    }
  },
  '/about-us': {
    "eyebrow": "Company",
    "title": "About One18 – Your News. All in One Place.",
    "seoTitle": "About One18 | News Aggregator Powered by Network18",
    "metaDescription": "Discover One18, a news aggregator powered by Network18, bringing together news and updates from participating Network18 news and media brands.",
    "intro": "One18 is a **digital news platform powered by Network18**, bringing together news and updates from its leading news and media brands in one convenient destination.\n\nFrom breaking news and politics to business, sports, entertainment and regional updates, One18 makes it easier to stay informed about what's happening around you.\n\nWhether you want a quick update on the day's biggest headlines or want to explore a story in detail, One18 offers news summaries, articles, videos and photo galleries to suit the way you consume news.",
    "sections": [
      {
        "heading": "Discover News from Leading Network18 Brands",
        "body": "One18 brings together content from participating brands within the Network18 news and media ecosystem, giving you access to a wide range of news and information without having to visit multiple websites.\n\nThe Network18 portfolio includes some of India's well-known news and media brands:",
        "bullets": [
          {
            "label": "News18",
            "text": "Stay updated with national headlines, breaking news, politics, regional developments, sports and entertainment."
          },
          {
            "label": "CNBC-TV18",
            "text": "Follow business news, corporate developments, financial markets and updates on the Indian economy."
          },
          {
            "label": "Moneycontrol",
            "text": "Explore stock market news, investment updates, personal finance and business developments."
          },
          {
            "label": "Firstpost",
            "text": "Discover national and international news, global affairs, politics and current events."
          },
          {
            "label": "Forbes India",
            "text": "Read about business leadership, entrepreneurship, innovation and emerging industry trends."
          },
          {
            "label": "Storyboard18",
            "text": "Explore the latest news and insights on advertising, marketing, branding, media, creative campaigns and industry trends."
          }
        ],
        "afterword": "With coverage spanning multiple subjects and regions, One18 helps you discover more stories from across the Network18 ecosystem in one place."
      },
      {
        "heading": "Explore News That Matters to You",
        "body": "Everyone has different interests, and One18 makes it simple to find news that is relevant to you.\n\nBrowse a wide range of categories, including **India News, World News, Politics, Business, Stock Markets, Sports, Entertainment, Technology, Lifestyle, Education and Automobiles**.\n\nWhether you're following an important political development, checking market updates, catching up on cricket or exploring the latest technology trends, One18 helps you stay connected to the topics you care about.\n\nYou can also explore related stories to get additional context and follow important developments as they unfold."
      },
      {
        "heading": "Stay Informed in Your Preferred Language",
        "body": "News is easier to follow when it's available in a language you're comfortable with.\n\nOne18 brings together multilingual news content, helping readers discover national, international and regional developments in their preferred language.\n\nExplore news in supported languages such as **English, Hindi, Telugu, Tamil, Marathi and Bengali**, making it easier to stay informed about events across India and beyond.\n\nFrom major national headlines to important regional stories, One18 helps you stay connected to the news that matters to your community."
      },
      {
        "heading": "Catch Up Quickly with News Summaries",
        "body": "You don't always have time to read a full-length news article. One18 makes catching up easier with short, easy-to-read news summaries that highlight the key details of a story.\n\nQuickly understand important developments, browse the latest updates and move between stories without spending too much time searching for information.\n\nWhen a story interests you, explore related coverage or visit the original source for more details."
      },
      {
        "heading": "Read, Watch and Explore",
        "body": "News isn't limited to text, and neither is One18.\n\nDiscover stories through different content formats based on how you prefer to stay informed.",
        "bullets": [
          {
            "label": "News Articles",
            "text": "Read headlines, summaries and detailed coverage."
          },
          {
            "label": "Photo Galleries",
            "text": "Explore important events and stories through images."
          },
          {
            "label": "Videos",
            "text": "Watch news updates, reports and other video content."
          },
          {
            "label": "Related Stories",
            "text": "Discover additional coverage and updates on topics that interest you."
          }
        ],
        "afterword": "Whether you prefer reading, watching or browsing, One18 brings different news experiences together in one destination."
      },
      {
        "heading": "News You Can Trace to Its Source",
        "body": "Knowing where your news comes from is important.\n\nOne18 aggregates content from the Network18 news ecosystem and provides attribution to the original publishing source, helping readers identify the news brand behind each story.\n\nBy bringing together content from established news and media properties, One18 makes it convenient to discover updates across different topics while maintaining visibility of the original publisher."
      }
    ]
  },
  '/cookie-policy': {
    eyebrow: 'Legal',
    title: 'Cookie Policy',
    intro:
      'One18 is committed to protecting the privacy and security of your personal data. We are committed to being transparent about the technologies we use while making the website.',
    sections: [
      {
        heading: 'Scope Of This Policy',
        body:
          'This Cookie Policy applies to the One18 website and services offered by us to all individuals. We use cookies to provide our services and improve your experience of the website.\n\nThis Policy explains how and why we use cookies and the choices you have. This Policy describes the usage of the data captured using cookies which we collect from you when you access or use the website.\n\nBefore using our website or availing any of our products and/or services, you are advised to carefully read the Privacy Policy of our website. Except otherwise stated in this Policy, the Privacy Policy shall govern the way we collect and process data via cookies. By visiting and/or using our website, you are consenting to the collection, use and storage of cookies in the manner set forth in this Policy.'
      },
      {
        heading: 'What Cookies Are',
        body:
          'A cookie is a small text file that the website saves on your computer, mobile, tablet or any other device when you visit the website, to the extent you agree to the same. It enables the website to remember your actions and preferences such as login, language, location, and display preferences over a period, so you do not have to keep re-entering them whenever you revisit the website or browse different pages.\n\nCookies make your next visit easier and help identify and learn more about your interests. This allows our website to uniquely identify your device from those of other users of the website.'
      },
      {
        heading: 'How We Use Cookies',
        body:
          'We use cookies to offer you a more tailored experience by understanding and remembering your browsing preferences. We use cookies for various purposes, including:',
        bullets: [
          { text: 'To provide you with our services and offer a better browsing experience.' },
          { text: 'To make this website and its content available to you and to further optimize and develop it.' },
          { text: 'To provide non-personalized or personalized advertisements.' },
          { text: 'To identify and distinguish between a human and bot.' },
          { text: 'To identify your browser and device.' },
          { text: 'To perform analytics and research based on aggregate data.' },
          { text: 'For fraud detection and prevention.' },
          { text: 'To measure and analyze the audience for each page in order to improve browsing, visibility of content, and website reliability.' },
          { text: 'To offer varied ads adapted to users’ areas of interest.' },
          { text: 'To detect unauthorized access to the website and minimize blocking of legitimate users.' }
        ]
      },
      {
        heading: 'How Long Cookies Last',
        body:
          'We do not store data for longer than is necessary to fulfil the purposes covered herein. A number of cookies we use last only for the duration of your web session and expire when you close your browser or exit the website. Others are used to remember you when you return to the website and will last depending on the purpose.'
      },
      {
        heading: 'First-Party Cookies',
        body:
          'These cookies are set by the website and only that website can read them. They are also called internal cookies. For example, first-party cookies can keep you logged in as you navigate through different pages or remember your language settings.\n\nSome of these cookies are necessary for proper functioning of our website. You can opt out of these cookies through your browser settings. If you choose to opt out of these cookies, then we may not be able to provide you an optimum website experience.\n\nOthers are used for purposes such as analytics and performance. We identify these cookies before they are used so that you can decide whether you wish to accept them or not through the cookie banner provided when you visit the website, or through the cookie settings page at the bottom of every page of the website.'
      },
      {
        heading: 'Third-Party Cookies',
        body:
          'These cookies are set by third parties when you access or use our website and have a different domain to that of the website you are visiting. They enable certain website functionality, such as analytics and delivery of personalized content to users.\n\nWe identify these cookies before they are used so that you can decide whether you wish to accept them or not through the cookie banner provided when you visit the website, or through the cookie settings page at the bottom of every page of the website.'
      },
      {
        heading: 'Cookie Choices',
        body:
          'You can choose to allow or block cookies, delete existing cookies, and set cookie preferences for the website. We use cookies to personalize your experience when you interact with or use our services.\n\nPlease note that blocking cookies may restrict us from providing certain website features, and your overall user experience may deteriorate. If your browser setting is already set to block all cookies, then some website features may not operate as intended.\n\nIf you allow cookies through your browser or device, they will be readable only by their issuer. If you want to remove previously stored cookies, you can manually delete the cookies at any time through your browser’s cookie settings. However, this will not prevent the website from placing further cookies on your device. You may choose to change your cookie preference at any time by updating your browser’s cookie settings. We recommend that you allow all cookies in order to provide you with a personalized experience on the website.'
      },
      {
        heading: 'Minors',
        body:
          'We do not knowingly collect or solicit personal data from minors. Our products and/or services are not designed for any person who is under 18 years of age, and we do not knowingly permit such persons to register for products and/or services or share data through any web forms without verifiable consent from minors’ parents or lawful guardians.\n\nFurther, we do not undertake tracking or behavioral monitoring of children or targeted advertising directed at children. If we learn that we have collected personal data from a minor without verified parental consent, we will erase such personal data.\n\nIf you believe that a child under 18 years may have provided us their personal data, please contact us at dpo@nw18.com.'
      },
      {
        heading: 'Contact',
        body:
          'If you have questions or comments regarding this Policy or for any other queries relating to device data that we have collected and processed, please contact us using the contact details given in our Privacy Policy.'
      },
      {
        heading: 'Changes To This Policy',
        body:
          'We reserve the right to change this Policy at our sole discretion at any time. Any material changes to this Policy will be posted on this page. We encourage you to review this Policy regularly for such changes. The updated Cookie Policy will take effect as soon as it has been updated.'
      }
    ]
  },
  '/disclaimer': {
    eyebrow: 'Legal',
    title: 'Disclaimer',
    intro:
      'By accessing One18 or any of its associate/group sites, including sub-domains, you have read, understood and agree to be legally bound by this disclaimer and user agreement.',
    sections: [
      {
        heading: '1. Site Ownership And Scope',
        body:
          'This Site, its underlying code and software, and trademarks are owned and operated by One18/NW18. The Site contains material and content derived in whole or in part from material supplied by and/or owned by the Company, various news agencies, and other sources. The term One18 is also used through this User Agreement to refer to the Site, its owner, and associates of the owner.\n\nThe Privacy Policy shall govern all aspects of your personal information that may pertain to your use of the Site. In case of any conflict or overlap between the Privacy Policy and this User Agreement, the Privacy Policy shall prevail.'
      },
      {
        heading: '2. Intellectual Property',
        body:
          'The user interface, design, domain and sub-domains, getup of the Site, proprietary material and content on the Site, marks, and underlying code and software, whether registered or not, are protected by Indian intellectual property laws and may also be protected under intellectual property laws of other countries. You shall not use the Site or Intellectual Property in violation of proprietary rights therein.\n\nOne18/NW18 intellectual property is valuable, exclusive property, and nothing in this User Agreement shall be construed as transferring or assigning any ownership rights to you or any other person or entity.\n\nExcept where specifically authorized in writing, users shall not modify, copy, reproduce, republish, upload, post, transmit, distribute, store, resell, redistribute, broadcast, transfer, rent, lease, sublicense, publicly display, publish, adapt, or time-share any Intellectual Property, information, data, content, software, applications, material, underlying code, or any part of the Site.'
      },
      {
        heading: '3. Restricted Uses',
        body:
          'You shall not, directly or indirectly, manually, using software tools, or otherwise:',
        bullets: [
          { text: 'Make a copy of, store, resell, redistribute, broadcast, or transfer information, data, content, software, or applications of the Site.' },
          { text: 'Use information, data, or content of the Site in a searchable and/or machine-readable format, including as a database, for any purpose, including creating large language models and/or training AI tools, unless specifically authorized in writing prior to such use.' },
          { text: 'Scrape, crawl, mine, or extract data from the Site, including personal data, without express written permission.' },
          { text: 'Rent, lease, sublicense, distribute, transfer, copy, reproduce, publicly display, publish, adapt, store, or time-share the Site or any material thereon through any other person or entity unless specifically authorized in writing.' },
          { text: 'Remove, alter, or obscure any copyright, legal, or proprietary notices on any portion of the Site without prior written authorization.' }
        ]
      },
      {
        heading: '4. Changes To Terms',
        body:
          'By visiting our Site, you agree to be bound by the terms and conditions herein. We may change these terms and conditions at any time. Your continued use of the Site means that you accept any new or modified terms and conditions.\n\nThe Company may change or modify the terms applicable to use of the Site, impose new conditions, or add fees and charges for use. Such changes shall be effective immediately upon notice, which may be given by posting on the Site, electronic or conventional mail, or any other means by which users obtain notice.'
      },
      {
        heading: '5. Third-Party Services And Links',
        body:
          'One18 may use third-party APIs or services to showcase video or other content on its Site and app platforms. By using the Site, you may also be subject to the applicable terms and privacy policies of such third-party services.\n\nLinks on this Site may allow you to leave One18. Linked sites may not be under the ownership, control, or operation of One18. One18 has not endorsed, reviewed, or approved such third-party sites and is not responsible for the contents, omissions, privacy practices, security standards, or links contained in any linked site.'
      },
      {
        heading: '6. Registration And Access',
        body:
          'By registering, you certify that all information you provide, now or in the future, is accurate and that your access to the Site is legal. One18 reserves the right, in its sole discretion, to deny access to this Site or any portion thereof without notice for unauthorized access or use, attempted assignment or transfer of rights granted under this User Agreement, or violation of any terms and conditions.\n\nAny personal data collected during registration shall be processed in accordance with applicable law and the Privacy Policy.'
      },
      {
        heading: '7. Limited License',
        body:
          'One18 grants you a limited, non-exclusive, non-assignable, and non-transferable license to access the Site, expressly conditioned upon your agreement that all such access and use shall be governed by the terms and conditions set forth in this User Agreement.'
      },
      {
        heading: '8. Interruptions And Availability',
        body:
          'One18, including its directors, employees, affiliates, agents, representatives, or subcontractors, shall not be liable for any loss or liability resulting directly or indirectly from delays or interruptions due to electronic or mechanical equipment failures, telephone or internet interconnect problems, defects, weather, strikes, walkouts, fire, acts of God, riots, armed conflicts, acts of war, epidemics, pandemics, cyber-crime incidents, or similar causes. One18 has no responsibility to provide access while interruption is due to any such cause.'
      },
      {
        heading: '9. Disclaimer Of Warranty And Limitation Of Liability',
        body:
          'YOU EXPRESSLY AGREE THAT USE OF THE SITE IS AT YOUR SOLE RISK.\n\nThe contents, information, software, products, features, and services published on this Site may include inaccuracies or typographical errors. Changes may be periodically added. One18 and/or its suppliers may make improvements and/or changes at any time. The Site may be temporarily unavailable due to maintenance, telecommunications interruptions, or other disruptions.\n\nOne18 and its owners, suppliers, consultants, advertisers, affiliates, partners, employees, and associated entities shall not be liable to any user, subscriber, or third party should One18 exercise its right to modify or discontinue any or all contents, information, software, products, features, or services published on this Site.\n\nIn no event shall One18 and/or its associated entities be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of or connected with use of the Site, delay or inability to use the Site, contents or services obtained through the Site, or otherwise arising from use of the Site, whether based on contract, tort, strict liability, or otherwise, even if One18 or its associated entities have been advised of the possibility of damages.'
      },
      {
        heading: '10. News, Views And Investment Information',
        body:
          'One18/NW18 takes due care and caution in compilation of data for the Site. Views and investment tips expressed by investment experts on the Site are their own, and not that of the Site, NW18, or its management. Users are advised to check with certified experts before taking any investment decision. One18 does not guarantee the accuracy, adequacy, or completeness of any information, including news and current affairs media, and is not responsible for errors, omissions, or results obtained from use of such information. One18 has no financial liability whatsoever to any user or subscriber on account of use of information provided on the Site.'
      },
      {
        heading: '11. Forums And User Content',
        body:
          'If the Site contains ancillary features such as message boards, bulletin boards, chat rooms, or other communication facilities, you agree to use them only to send and receive messages and material that are proper and related to the particular forum in compliance with applicable laws. You agree not to:',
        bullets: [
          { text: 'Defame, abuse, harass, stalk, threaten, or otherwise violate the legal rights of others.' },
          { text: 'Publish, post, distribute, or disseminate any defamatory, infringing, obscene, pornographic, indecent, unlawful, or privacy-invasive material or information.' },
          { text: 'Upload files containing software or material protected by intellectual property laws unless you own or control the rights or have received all necessary consents.' },
          { text: 'Upload viruses, corrupted files, or similar software or programs that may damage another computer.' },
          { text: 'Conduct or forward surveys, contests, or chain letters.' },
          { text: 'Download any file posted by another user that you know, or reasonably should know, cannot be legally distributed in such manner.' }
        ]
      },
      {
        heading: '12. Public Communications',
        body:
          'All forums are public and not private communications. Chats, postings, conferences, and other communications by users are not endorsed by One18 and shall not be considered reviewed, screened, or approved by One18. One18 reserves the right to remove without notice any contents of forums received from users, including message board postings. One18 shall not be responsible or liable for third-party content, including user-generated content.'
      },
      {
        heading: '13. User Equipment',
        body:
          'You shall provide and maintain all telephone, internet, and other equipment necessary to access One18. Costs of such equipment and/or telephone or internet connections or use, including applicable taxes, shall be borne solely by you. You are responsible for operating your own equipment used to access One18.'
      },
      {
        heading: '14. Indemnity',
        body:
          'YOU SHALL INDEMNIFY, DEFEND AND HOLD HARMLESS One18, INCLUDING ITS OFFICERS, DIRECTORS, EMPLOYEES, AFFILIATES, GROUP COMPANIES, AGENTS, REPRESENTATIVES OR SUBCONTRACTORS, FROM ANY AND ALL CLAIMS AND LOSSES IMPOSED ON, INCURRED BY OR ASSERTED AS A RESULT OF OR RELATED TO YOUR ACCESS AND USE OF ONE18, NON-COMPLIANCE WITH THESE TERMS, OR THIRD-PARTY ACTIONS RELATED TO YOUR RECEIPT AND USE OF INFORMATION, WHETHER AUTHORIZED OR UNAUTHORIZED.'
      },
      {
        heading: '15. Confidentiality, Termination And Governing Law',
        body:
          'Subject to the Privacy Policy, if there is any conflict between this User Agreement and other documents, this User Agreement shall govern. If any provision is held invalid, the remainder shall not be affected.\n\nYou agree to keep information received from One18 and services confidential and not disclose knowledge gained to any person or firm unless required by law.\n\nThis User Agreement and the license rights granted hereunder shall remain in full force and effect unless terminated or cancelled for unauthorized access or use, attempted assignment or transfer of rights, or violation of any terms and conditions. Upon termination, all rights granted to you terminate immediately. Any fee charged for access, if applicable, is non-refundable unless otherwise stated.\n\nThe terms of this User Agreement are based on and subject to Indian law. You consent to exclusive jurisdiction and venue of courts in New Delhi, India for disputes arising out of or relating to use of this Site.'
      },
      {
        heading: '16. Grievance Officer',
        body:
          'The details of the Grievance Officer for grievance redressal for the Site are as follows:\n\nName: Apurv Narula\nContact details: Complaint@nw18.com\n\nAny grievance with respect to the Site must be addressed to the above-named Grievance Officer at the stated contact details. All grievances shall be acknowledged and resolved within the timelines prescribed under applicable law.'
      }
    ]
  },
  '/privacy-policy': {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    intro:
      'One18 is committed to protecting the privacy and security of your personal data. This Privacy Policy applies to all products and/or services offered by us to all individuals.',
    sections: [
      {
        heading: '1. Data Privacy Disclaimer',
        body:
          'This Policy explains how we collect, receive, store, disclose, share, and use your personal data for the purpose of your participation and consumption of our products and/or services offered through our website and/or software application, collectively referred to as the Platform, or during any interaction with us, and how you can exercise your privacy rights.\n\nBefore using our Platform or availing any of our products and/or services, you are advised to carefully read this Policy. If you do not agree with the terms of this Policy, please do not access this Platform. By visiting and/or using our Platform, you are consenting to process your personal data in the manner set forth in this Policy.\n\nThe scope of this Policy is limited to products and/or services provided by us within the territory of India and applies to users who request these products and/or services within the Indian territory.'
      },
      {
        heading: '2. What Personal Data Do We Collect About You?',
        body:
          'When you interact with us, we collect different types of information from you based on the type of interaction. Personal Data means any data about an individual who is identifiable by or in relation to such data.\n\nProcessing, Processed, or Process in relation to personal data means a wholly or partly automated operation or set of operations performed on digital personal data, including collection, recording, organization, structuring, storage, adaptation, retrieval, use, alignment, combination, indexing, sharing, disclosure by transmission, dissemination or otherwise making available, restriction, erasure, or destruction.\n\nWe endeavor to collect only such personal data that is reasonably necessary to perform our services for you. When you interact with our Platform or otherwise with us, we may collect the following personal data directly:',
        bullets: [
          { label: 'General Data', text: 'Your first name, last name, email, mobile number, address with PIN code, gender, and preferred language.' },
          { label: 'Government Identification Data', text: 'Data that enables us to identify you, such as Aadhaar card and PAN card details.' },
          { label: 'Authentication', text: 'Data required for authentication, such as username and password.' },
          { label: 'Technical and Network Activity Data', text: 'Data about your device and usage of our Platform, including IP address, device ID, hardware model and version, mobile network information, operating system, online identifiers, browser type, browsing history, search history, access time, pages viewed, URLs clicked, forms submitted, and physical location.' },
          { label: 'Financial Data', text: 'Bank details, including account name, account number, and cancelled cheque.' },
          { label: 'Employment Details', text: 'Employment details such as company name, designation, educational qualification, and resume.' }
        ]
      },
      {
        heading: '3. How Do We Collect Your Personal Data?',
        body:
          'You may choose to provide us with data that is essential for us to deliver the products and/or services you request. Without this data, we may not be able to provide all requested products and/or services.\n\nWe may collect information when you use our Platform, register on our Platform, share or use your social media profile to contact us, enter a contest or competition organized by us, engage with one of our sales representatives, manage or update your profile information, get in touch for support or feedback, attend an online or on-ground event, ask questions, or view any news, quiz, poll, or related service offered through the Platform.\n\nIf you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Platform, we may collect and store such data.\n\nWe may collect additional data when you provide feedback, modify your content or email preferences, respond to surveys, or communicate with us. This data may include your name, email id, mobile number, and similar information.\n\nWe also collect data automatically about your interactions with us and the devices used to access our Platform, including activities on the Platform, interactions with email, customer care and contact pages, geo-location data through IP addresses, device information, unique identifiers, and data collected via cookies.\n\nWe may collect or receive data about you from third-party sources and process this data in accordance with this Policy. These sources may include publicly accessible sources, marketing vendors, event management agencies, and social media platforms. If you connect your social media account to our Platform, you may share certain personal data from that account with us, including your name, email address, photo, contact list, and other data you make accessible.'
      },
      {
        heading: '4. Lawful Basis For Processing Your Personal Data',
        body:
          'We collect personal data by lawful and fair means and, where appropriate, with the knowledge of the individual concerned. We only collect and process personal data about you where we have a lawful basis. Lawful bases include explicit consent and processing for legitimate uses where processing is necessary to provide products and/or services.',
        bullets: [
          { text: 'To enforce our terms and conditions.' },
          { text: 'To ensure compliance with legal obligations and obligations towards public authorities.' },
          { text: 'To enforce any legal right or claim.' },
          { text: 'For responding to a medical emergency involving a threat to your health or life or that of any other individual.' },
          { text: 'For taking measures to ensure safety of, or provide assistance or services to, any individual during a disaster or breakdown of public order.' },
          { text: 'For legal and compliance reasons, including prevention, detection, or investigation of crime, loss prevention, or fraud prevention.' },
          { text: 'As otherwise described to you at the time of collection of your personal data.' }
        ]
      },
      {
        heading: '5. How Do We Use Your Personal Data?',
        body:
          'We use your personal data for the purposes described in this Policy, or for purposes reasonably compatible with those described.\n\nTo manage our relationship with you, we may use personal data to verify your identity, provide and administer products and/or services, communicate with you about the Platform, share details about new features and content, conduct marketing where you have agreed, conduct market research, provide contests and employment opportunities, identify and authenticate your access, invite feedback or event participation, personalize your experience, respond to queries, and provide information when requested or when we believe our products and/or services may be of interest.\n\nTo manage and improve our processes and business operations, we may use personal data to manage network and information system security, manage our workforce effectively, perform data analysis, auditing and research, improve our digital Platform, content, products and/or services, and monitor trends, usage and activity.\n\nWe may also use personal data for legal and regulatory purposes, including internal and external audit requirements, information security purposes, and to gain insights and feedback on products and/or services through external sources such as Google, Facebook, Twitter, and others.'
      },
      {
        heading: '6. Office Visits',
        body:
          'When you visit our offices, we process your personal data in accordance with this Privacy Policy. Specific information regarding the use of visitor data and the potential use of CCTV in our offices is provided in the reception area.'
      },
      {
        heading: '7. How Do We Protect Your Personal Data?',
        body:
          'We implement reasonable technical and organizational measures in relation to the data and personal data processed by us. We take reasonable measures to protect personal data from unauthorized processing or accidental disclosure, alteration, misuse, destruction, loss, unauthorized access, and unauthorized modification that compromises confidentiality, integrity, and availability.\n\nWhile we endeavor to protect our Platform, operations, and data against unauthorized access, use, modification, and disclosure, due to the inherent nature of the Internet, we cannot guarantee that any data, during transmission or while stored on our systems, will be completely safe and secure from intrusion by others.'
      },
      {
        heading: '8. Your Rights In Connection With Your Personal Data',
        body:
          'We respect your right to access and control your personal data and will respond to requests to exercise your rights under applicable laws. Where applicable, we will correct, update, or erase your personal data.',
        bullets: [
          { label: 'Right to access data', text: 'You can contact us for a summary of your personal data held by us, processing activities undertaken, identities of persons with whom your personal data has been shared, and related processing details.' },
          { label: 'Right to request correction', text: 'If your personal data is incomplete, inaccurate, misleading, or out of date, you can inform us and your personal data will be corrected, completed, or updated.' },
          { label: 'Right to request erasure', text: 'You may request deletion of personal data unless retention is necessary for compliance with applicable law.' },
          { label: 'Right of grievance redressal', text: 'You can raise a request to alter your consent choices at dpo@nw18.com.' },
          { label: 'Right to nominate', text: 'In the event of death or incapacity to exercise these rights, you can nominate another individual to exercise such rights.' },
          { label: 'Right to withdraw consent', text: 'You can withdraw consent by emailing dpo@nw18.com. Withdrawal does not affect lawful processing before withdrawal, but opting out may result in cessation of respective services.' }
        ]
      },
      {
        heading: '9. Sharing And Disclosure Of Personal Data',
        body:
          'As far as necessary for the purposes set out above, we may share your personal data with recipients who have a need to know and who process it for us based on our instructions and for no other purpose.\n\nWe may disclose personal data to related companies, third-party advertising companies serving ads when you visit our Platform, employees and contractors required to follow our data protection and security policies, and external parties where we have your consent. Personal data may also be shared in the event of merger, sale, restructure, acquisition, joint venture, assignment, transfer, or other disposition of all or any portion of our business, assets, or stock.\n\nOccasionally, to provide products and/or services, it is necessary to collaborate with external service providers. These providers process personal data on our behalf subject to appropriate safeguards and only insofar as necessary for them to provide products and/or services to us.\n\nWe may provide personal data to affiliates and trusted businesses or persons to process it based on our instructions and in compliance with this Policy and appropriate confidentiality and security measures.\n\nWe may share personal data with courts and public authorities to comply with legal obligations, respond to government or law enforcement requests, prevent, detect, or investigate offences or cyber incidents, prosecute or punish offences, raise or defend legal claims, and protect users, systems, products and/or services.\n\nWe only share personal data with recipients that have an adequate level of data protection by implementing appropriate technical and organizational security measures, or we take measures to ensure that recipients provide an adequate level of data protection as prescribed by applicable law. We do not sell your personal data to anyone.'
      },
      {
        heading: '10. Personal Data Transfer, Storage And Processing Globally',
        body:
          'We operate globally and may transfer your personal data to affiliates or third parties in territories outside India for the purposes described in this Policy in accordance with applicable data protection laws, provided that no such restriction is notified by the Government or appropriate authority.'
      },
      {
        heading: '11. How Long Do We Keep Your Personal Data?',
        body:
          'We will retain personal data collected for as long as we reasonably consider necessary for achieving the purposes mentioned above and as permissible under applicable law. This is determined on a case-to-case basis.\n\nWe will delete your personal data whenever you request us to do so. However, we may archive and/or retain personal data for as long as statutory retention obligations exist or potential legal claims are not yet time barred.'
      },
      {
        heading: '12. Safeguarding The Privacy Of Children',
        body:
          'We do not knowingly collect or solicit personal data from minors. Our products and/or services are not designed for any person under 18 years of age, and we do not knowingly permit such persons to register for products and/or services or share data through web forms without verifiable consent from parents or lawful guardians.\n\nFurther, we do not undertake tracking or behavioral monitoring of children or targeted advertising directed at children. If we learn that we have collected personal data from a minor without verified parental consent, we will erase such personal data.\n\nIf you believe that a child under 18 years may have provided us their personal data, please contact us at dpo@nw18.com.'
      },
      {
        heading: '13. Contact Information',
        body:
          'If you have questions or comments regarding this Policy, want to exercise any of your rights, or express grievances regarding processing of your personal data, please contact:\n\nNetwork18 Media and Investments Limited\n\nApurv Narula\nData Protection Officer\ndpo@nw18.com\n\nIf you are not satisfied with the resolution provided, you may log your complaint with the Data Protection Board of India following the procedure prescribed by them.'
      },
      {
        heading: '14. Changes To This Privacy Policy',
        body:
          'We reserve the right to change this Policy at our sole discretion at any time. Any material changes to this Policy will be posted on this page. We encourage you to review this Policy regularly for such changes. The updated Privacy Policy will take effect as soon as it has been updated.'
      }
    ]
  },
  '/rss': {
    eyebrow: 'Feeds',
    title: 'RSS',
    intro:
      'Use RSS to follow One18 topic streams in a reader of your choice. These feed cards are static UI placeholders for the prototype and can be connected to real XML feeds later.',
    rssFeeds: [
      { title: 'Top News', url: '/rss/top-news.xml', description: 'The latest major headlines and developing stories.' },
      { title: 'National', url: '/rss/national.xml', description: 'Updates from across India and public affairs.' },
      { title: 'World', url: '/rss/world.xml', description: 'International headlines and global developments.' },
      { title: 'Markets', url: '/rss/markets.xml', description: 'Market movement, economy, and business signals.' },
      { title: 'Entertainment', url: '/rss/entertainment.xml', description: 'Film, streaming, celebrity, and culture updates.' },
      { title: 'Sports', url: '/rss/sports.xml', description: 'Match updates, fixtures, results, and sports news.' },
      { title: 'Technology', url: '/rss/technology.xml', description: 'Technology, gadgets, platforms, and innovation.' },
      { title: 'Lifestyle', url: '/rss/lifestyle.xml', description: 'Health, food, travel, wellness, and daily living.' },
      { title: 'Politics', url: '/rss/politics.xml', description: 'Political developments, policy, and governance.' }
    ]
  }
};

const storyItems = [
  {
    title: 'Top News',
    trend: false,
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=240&q=80'
  },
  {
    title: 'Local',
    trend: false,
    image: 'https://images.unsplash.com/photo-1516959512470-53955cd40f40?auto=format&fit=crop&w=240&q=80'
  },
  {
    title: 'Delhi Anti-C...',
    trend: true,
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=240&q=80'
  },
  {
    title: 'Saudi-Houth...',
    trend: true,
    image: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?auto=format&fit=crop&w=240&q=80'
  },
  {
    title: 'Markets',
    trend: false,
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=240&q=80'
  },
  {
    title: 'Entertainme...',
    trend: false,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=240&q=80'
  },
  {
    title: 'Viral',
    trend: false,
    image: 'https://images.unsplash.com/photo-1496386263223-905aafa3c437?auto=format&fit=crop&w=240&q=80'
  },
  {
    title: 'National',
    trend: false,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=240&q=80'
  }
];

const baseArticles = [
  {
    title: 'Calcutta High Court advises CPIM on setting up book stalls',
    category: 'National',
    summary: 'The court advised party representatives on permissions, public access, and local coordination for book stalls.',
    points: ['The Calcutta High Court addressed plans by CPIM representatives to set up book stalls.', 'The court’s guidance included the permissions needed for arranging the book stalls.', 'Keeping public access in mind was another aspect of the advice given to representatives.', 'Coordination with local authorities also featured in the guidance on setting up stalls.', 'The report brings together the court’s advice on permissions, access, and coordination.'],
    faqs: [{ question: 'What is the court’s advice about?', answer: 'Permissions, public access, and coordination for setting up book stalls.' }, { question: 'Who is involved?', answer: 'CPIM representatives and the local authorities responsible for permissions and coordination.' }],
    time: '2 hours ago',
    source: 'NEWS18',
    image: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Bedroom Vastu: Avoid keeping these 5 items in your bedroom for a happy married life',
    category: 'Lifestyle',
    summary: 'A quick lifestyle guide looks at simple bedroom choices believed to improve harmony at home.',
    points: ['The lifestyle guide explores bedroom arrangements through traditional Vastu beliefs.', 'The headline focuses on five items that the guide suggests avoiding in the bedroom.', 'It considers how the objects kept in a bedroom fit within traditional Vastu ideas.', 'The suggestions connect bedroom choices with beliefs about harmony in married life.', 'These traditional suggestions offer no established guarantee of relationship harmony.'],
    faqs: [{ question: 'What does the guide cover?', answer: 'Bedroom choices and placement of items from a Vastu perspective.' }, { question: 'Are the claimed effects guaranteed?', answer: 'No. These are traditional beliefs, and should not be treated as guarantees about relationship outcomes.' }],
    time: '3 hours ago',
    source: 'NEWS18',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: "Meet The Makkhi Janta Party: India's Newest Satirical Online Movement Amid Delhi Protests",
    category: 'Trending',
    summary: 'A satirical online movement is gaining attention as protest conversations spill across social platforms.',
    points: ['The Makkhi Janta Party is presented in the report as a satirical online movement.', 'The movement is drawing attention as conversations about Delhi protests spread online.', 'Its appearance is part of the wider discussion taking place across social platforms.', 'Satire is central to how the movement is described in the article and its headline.', 'The report follows the connection between this online movement and protest conversations.'],
    faqs: [{ question: 'What is the Makkhi Janta Party?', answer: 'The article describes it as a satirical online movement.' }, { question: 'Why is it being discussed?', answer: 'It has gained attention alongside online conversations about Delhi protests.' }],
    time: '4 hours ago',
    source: 'NEWS18',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Markets open higher as investors track global cues and commodity reserves',
    category: 'Markets',
    summary: 'Domestic markets opened on a firm note as investors watched global trends and sector updates.',
    points: ['Domestic markets opened on a firm note as investors followed the start of the session.', 'The report describes a higher opening while investors kept track of global market cues.', 'Developments in commodity reserves were another area of focus in the market report.', 'Investors were also watching sector updates alongside the broader global market trends.', 'The article brings together the opening market direction and the cues being monitored.'],
    faqs: [{ question: 'How did markets open?', answer: 'The report describes a higher opening for domestic markets.' }, { question: 'What were investors watching?', answer: 'Global trends, commodity reserves, and updates across sectors.' }],
    time: '5 hours ago',
    source: 'CNBC-TV18',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Indian startups prepare hiring plans for the festive quarter',
    category: 'Business',
    summary: 'Several growth-stage companies are planning selective hiring for product, sales, and operations roles.',
    points: ['Several growth-stage Indian startups are preparing hiring plans for the festive quarter.', 'The report describes selective recruitment plans across the companies being discussed.', 'Product roles are among the positions mentioned in the startups’ plans for recruitment.', 'Sales roles also feature in the hiring plans being prepared for the festive quarter.', 'Operations positions complete the functions highlighted in the report on startup hiring.'],
    faqs: [{ question: 'Which roles are mentioned?', answer: 'Product, sales, and operations roles are highlighted.' }, { question: 'Is this broad hiring across all startups?', answer: 'The report describes selective hiring plans at several growth-stage companies.' }],
    time: '6 hours ago',
    source: 'MONEYCONTROL',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Local civic teams begin monsoon readiness checks across key wards',
    category: 'Local',
    summary: 'Local teams started ward-level inspections focused on drains, traffic points, and public safety.',
    points: ['Local civic teams have started monsoon readiness inspections across several key wards.', 'Drain inspections form part of the ward-level checks described in the preparations.', 'Traffic points are also being checked as civic teams assess readiness for the monsoon.', 'Public safety is another focus of the local inspections being carried out across wards.', 'The report follows civic preparations through checks on drains, traffic, and safety.'],
    faqs: [{ question: 'What are teams inspecting?', answer: 'Drains, traffic points, and other locations relevant to public safety.' }, { question: 'Why are the checks happening?', answer: 'They are part of local preparations for the monsoon.' }],
    time: '7 hours ago',
    source: 'LOCAL18',
    image: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=900&q=80'
  }
];

function buildBatch(batchIndex) {
  return baseArticles.map((article, index) => ({
    ...article,
    id: `${batchIndex}-${index}`,
    title: batchIndex === 0 ? article.title : `${article.title}`,
    delay: index * 45
  }));
}

function Logo() {
  return (
    <div className="logo" aria-label="One18">
      <span className="logo-one">ONE</span>
      <span className="logo-eighteen">18</span>
    </div>
  );
}

function goToPath(path) {
  if (!path || path === window.location.pathname) return;
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function useCurrentPath() {
  const normalizePath = (value) => value.replace(/\/+$/, '') || '/';
  const [path, setPath] = useState(normalizePath(window.location.pathname));

  useEffect(() => {
    const handleRouteChange = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return path;
}

function Header({ onMenuOpen }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="mobile-menu-button" type="button" aria-label="Open navigation menu" onClick={onMenuOpen}>
          <Menu size={22} strokeWidth={2.2} />
        </button>
        <div className="header-left">
          <Logo />
          <button className="header-action">
            <Monitor size={19} strokeWidth={2.2} />
            LIVE TV
          </button>
          <button className="header-action">
            <MapPin size={20} strokeWidth={2.25} />
            LOCAL
          </button>
        </div>
        <div className="header-right">
          <button className="ask-button">
            <Sparkles size={22} strokeWidth={2.2} />
            ASK18
          </button>
          <button className="language-button">
            ENGLISH
            <ChevronDown size={18} strokeWidth={2.6} />
          </button>
        </div>
      </div>
    </header>
  );
}

function DrawerSection({ title, children }) {
  return (
    <div className="drawer-section">
      <p>{title}</p>
      <div className="drawer-list">{children}</div>
    </div>
  );
}

function MobileDrawer({ open, onClose, activeCategory }) {
  useEffect(() => {
    if (!open) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div className={`drawer-root ${open ? 'open' : ''}`} aria-hidden={!open}>
      <button className="drawer-backdrop" type="button" aria-label="Close navigation menu" onClick={onClose} tabIndex={open ? 0 : -1} />
      <aside className="mobile-drawer" aria-label="Navigation menu" aria-modal="true" role="dialog">
        <div className="drawer-top">
          <Logo />
          <button className="drawer-close" type="button" aria-label="Close navigation menu" onClick={onClose}>
            <X size={22} strokeWidth={2.1} />
          </button>
        </div>

        <div className="drawer-intro">
          <span className="drawer-intro-icon">
            <UserRound size={17} strokeWidth={2.1} />
          </span>
          <div>
            <h2>Explore One18</h2>
            <p>News from multiple trusted sources</p>
          </div>
        </div>

        <DrawerSection title="News">
          {drawerCategories.map((item) => (
            <button className={`drawer-link ${item.label === activeCategory ? 'active' : ''}`} type="button" key={item.label} onClick={() => { goToPath(item.path); onClose(); }}>
              <Newspaper size={17} strokeWidth={2.1} />
              <span>{item.label}</span>
            </button>
          ))}
        </DrawerSection>

        <DrawerSection title="About & Support">
          {supportLinks.map(({ label, icon: Icon, path }) => (
            <button className="drawer-link" type="button" key={label} onClick={() => { goToPath(path); onClose(); }}>
              <Icon size={17} strokeWidth={2.1} />
              <span>{label}</span>
            </button>
          ))}
        </DrawerSection>

        <DrawerSection title="Legal">
          {legalLinks.map(({ label, icon: Icon, path }) => (
            <button className="drawer-link" type="button" key={label} onClick={() => { goToPath(path); onClose(); }}>
              <Icon size={17} strokeWidth={2.1} />
              <span>{label}</span>
            </button>
          ))}
        </DrawerSection>

        <p className="drawer-footer">© 2026 One18. All rights reserved.</p>
      </aside>
    </div>
  );
}

function DesktopSidebar({ collapsed, onToggle, activeCategory }) {
  return (
    <aside className={`desktop-sidebar ${collapsed ? 'collapsed' : ''}`} aria-label="Desktop navigation">
      <div className="desktop-sidebar-top">
        <Logo />
        <button
          className="desktop-sidebar-toggle"
          type="button"
          aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
          onClick={onToggle}
        >
          {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </button>
      </div>

      <nav className="desktop-nav-list" aria-label="News categories">
        {drawerCategories.map((item) => {
          const Icon = categoryIconMap[item.label] || Newspaper;
          return (
            <button className={`desktop-nav-link ${item.label === activeCategory ? 'active' : ''}`} type="button" key={item.label} title={collapsed ? item.label : undefined} onClick={() => goToPath(item.path)}>
              <Icon size={18} strokeWidth={2.1} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="desktop-sidebar-footer">
        <div className="desktop-sidebar-section">
          <p>About</p>
          {supportLinks.map(({ label, icon: Icon, path }) => (
            <button className="desktop-legal-link" type="button" key={label} title={collapsed ? label : undefined} onClick={() => goToPath(path)}>
              <Icon size={15} strokeWidth={2} />
              <span>{label}</span>
            </button>
          ))}
        </div>
        <div className="desktop-sidebar-section">
          <p>Legal</p>
          {legalLinks.map(({ label, icon: Icon, path }) => (
            <button className="desktop-legal-link" type="button" key={label} title={collapsed ? label : undefined} onClick={() => goToPath(path)}>
              <Icon size={15} strokeWidth={2} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

function CategoryNav({ activeCategory }) {
  return (
    <nav className="category-wrap" aria-label="News categories">
      <div className="category-track">
        {categoryLinks.map(({ label, path }) => (
          <button className={`category-tab ${label === activeCategory ? 'active' : ''}`} key={path} onClick={() => goToPath(path)}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Stories() {
  return (
    <section className="stories-section">
      <div className="stories-head">
        <h2>Stories</h2>
        <button className="add-button">
          <SlidersHorizontal size={17} />
          Add
        </button>
      </div>
      <div className="stories-row">
        {storyItems.map((story) => (
          <button className="story" key={story.title}>
            <span className="story-ring">
              <img src={story.image} alt="" />
              {story.trend && (
                <span className="trend-badge">
                  <TrendingUp size={15} strokeWidth={2.6} />
                </span>
              )}
            </span>
            <span className="story-label">{story.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <article className="hero-card">
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1300&q=82"
          alt=""
        />
      </div>
      <div className="hero-copy">
        <h3>India Plans Strategic Critical Mineral Reserves to Shield Key...</h3>
        <div className="time-row">
          <Clock3 size={18} strokeWidth={2.1} />
          <span>1 hours ago</span>
        </div>
        <p>India is preparing to establish a strategic reserve of critical minerals to protect industries like electr...</p>
        <div className="source-row hero-source">
          <div className="firstpost-mark">
            <span>F</span>
            <i />
          </div>
          <span>FIRSTPOST</span>
          <button className="share-button" aria-label="Share story">
            <Share2 size={19} strokeWidth={1.9} />
          </button>
        </div>
      </div>
    </article>
  );
}

function ArticleCard({ article, featured = false, expanded = false, onToggle, onRelatedSelect }) {
  const [reaction, setReaction] = useState(null);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    }, { threshold: 0.25 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [article.video]);

  async function toggleVideo() {
    const video = videoRef.current;
    if (!video.paused) {
      video.pause();
      return;
    }
    try {
      setVideoError(false);
      await video.play();
    } catch {
      setVideoError(true);
    }
  }

  return (
    <article id={`article-${article.id}`} className={`article-card ${featured ? 'article-card-featured' : ''} ${article.video ? 'video-post' : ''} ${expanded ? 'is-expanded' : ''}`} style={{ '--delay': `${article.delay}ms` }} onClick={(event) => {
      if (!event.target.closest('button, a, video, .article-expansion')) onToggle?.();
    }}>
      <div className="article-image">
        {article.video ? (
          <>
            <video ref={videoRef} src={article.video} poster={article.image} playsInline preload="none" aria-label={article.title} onPlay={() => setVideoPlaying(true)} onPause={() => setVideoPlaying(false)} onError={() => setVideoError(true)} />
            <button className={`reel-play ${videoPlaying ? 'is-playing' : ''}`} type="button" onClick={toggleVideo} aria-label={`${videoPlaying ? 'Pause' : 'Play'} ${article.title}`}>
              {videoPlaying ? <Pause size={28} /> : <Play size={30} fill="currentColor" />}
            </button>
          </>
        ) : <img src={article.image} alt="" />}
      </div>
      {videoError && <p className="video-post-error" role="status">This video couldn’t load. Please try again later.</p>}
      <div className="article-body">
        <h3><button className="article-expand-toggle" type="button" aria-expanded={expanded} aria-controls={`article-details-${article.id}`} onClick={onToggle}><span>{article.title}</span><ChevronDown size={16} /></button></h3>
        <div className="article-metadata">
          <div className="time-row article-time">
            <Clock3 size={18} strokeWidth={2.1} />
            <span>{article.time}</span>
          </div>
          {featured && <p>{article.summary}</p>}
          <div className="source-row">
            <span className="mini-news18">NEWS<span>18</span></span>
            <span>{article.source}</span>
            <button className="share-button small" aria-label={`Share ${article.title}`}>
              <Share2 size={17} strokeWidth={1.9} />
            </button>
          </div>
        <div className="article-reactions" aria-label="Article feedback">
          <button type="button" aria-label={`Like ${article.title}`} aria-pressed={reaction === 'like'} onClick={() => setReaction(reaction === 'like' ? null : 'like')}>
            <ThumbsUp size={16} />
          </button>
          <button type="button" aria-label={`Dislike ${article.title}`} aria-pressed={reaction === 'dislike'} onClick={() => setReaction(reaction === 'dislike' ? null : 'dislike')}>
            <ThumbsDown size={16} />
          </button>
          <button type="button" className="article-mobile-share" aria-label={`Share ${article.title}`}>
            <Share2 size={18} strokeWidth={1.9} />
          </button>
        </div>
        <span className="article-category-tag">{article.category || (article.id === 'video-travel' ? 'Travel' : 'Auto')}</span>
        </div>
      </div>
      <div id={`article-details-${article.id}`} className="article-expansion" aria-hidden={!expanded} inert={!expanded}>
        <div className="article-expansion-inner">
          <ul className="article-summary-points">
            {(article.points || [article.summary, 'This video is part of the One18 watch selection for stories in your home feed.', 'Tap the play icon on the video above to start watching the complete featured clip.', 'You can pause the video at any point by tapping the video area while it is playing.', 'Explore the similar articles below for more stories from the One18 home feed.']).map((point) => <li key={point}><span>{point}</span></li>)}
          </ul>
          <div className="article-source-action">
            <button type="button" className="read-full-article">Read full article <ExternalLink size={12} /></button>
          </div>
          <h4>Frequently asked questions</h4>
          <div className="article-faqs">
            {(article.faqs || [{ question: 'What is this video about?', answer: article.summary }, { question: 'How do I watch it?', answer: 'Tap the play icon on the video above. Tap the video again to pause.' }]).map((faq) => (
              <details key={faq.question}><summary>{faq.question}<ChevronDown size={15} /></summary><p>{faq.answer}</p></details>
            ))}
          </div>
          <h4>Similar articles</h4>
          <div className="similar-articles" tabIndex={0} aria-label="Scroll for similar articles">
            {baseArticles.filter((related) => related.title !== article.title).slice(0, 4).map((related) => (
              <button type="button" className="similar-article" key={related.title} onClick={() => onRelatedSelect?.(related.title)}>
                <img src={related.image} alt="" loading="lazy" />
                <span>{related.title}</span>
                <small>{related.source} · {related.time}</small>
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

const reels = [
  { id: 'escape', title: 'A quick escape from the everyday', category: 'Travel', poster: baseArticles[5].image, video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
  { id: 'adventure', title: 'A little adventure, a different perspective', category: 'Discover', poster: baseArticles[2].image, video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
  { id: 'road', title: 'Life in the fast lane', category: 'Auto', poster: baseArticles[3].image, video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' }
];

const videoPosts = [
  { id: 'video-travel', title: 'Take a break: a new perspective on getting away', summary: 'Watch our travel video pick and explore a change of scene.', time: '1 hour ago', source: 'ONE18', image: baseArticles[5].image, video: reels[0].video, delay: 0 },
  { id: 'video-auto', title: 'Watch: life on the road, in motion', summary: 'A video pick for your next scroll through the world of auto.', time: '2 hours ago', source: 'ONE18', image: baseArticles[3].image, video: reels[2].video, delay: 0 }
];

function ReelCard({ reel }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [liked, setLiked] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    }, { threshold: 0.5 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video.paused) {
      video.pause();
      return;
    }
    try {
      setError('');
      await video.play();
    } catch {
      setError('Video unavailable. Tap to retry.');
    }
  }

  return (
    <article className="reel-card" aria-label={reel.title}>
      <video ref={videoRef} src={reel.video} poster={reel.poster} preload="none" playsInline loop muted={muted} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setError('Video unavailable. Tap to retry.')} />
      <button className={`reel-play ${playing ? 'is-playing' : ''}`} type="button" onClick={togglePlayback} aria-label={`${playing ? 'Pause' : 'Play'} ${reel.title}`}>
        {playing ? <Pause size={28} /> : <Play size={30} fill="currentColor" />}
      </button>
      <span className="reel-category">{reel.category}</span>
      <div className="reel-controls">
        <button type="button" onClick={() => setMuted(!muted)} aria-label={muted ? 'Unmute reel' : 'Mute reel'}>{muted ? <VolumeX size={18} /> : <Volume2 size={18} />}</button>
        <button type="button" onClick={() => setLiked(!liked)} aria-pressed={liked} aria-label={`Like ${reel.title}`}><Heart size={20} fill={liked ? 'currentColor' : 'none'} /></button>
      </div>
      <div className="reel-caption">
        <span>ONE18 · VIDEOS</span>
        <h3>{reel.title}</h3>
        {error && <p role="status">{error}</p>}
      </div>
    </article>
  );
}

function ReelsFeed() {
  return (
    <section className="reels-feed" aria-label="Videos">
      <div className="reels-heading"><h2><Clapperboard size={20} /> Videos</h2><span>Swipe to explore</span></div>
      <div className="reels-track" tabIndex={0} aria-label="Swipe or scroll for more videos">
        {reels.map((reel) => <ReelCard key={reel.id} reel={reel} />)}
      </div>
    </section>
  );
}

function TopNews({ category }) {
  const [batches, setBatches] = useState(2);
  const [expandedId, setExpandedId] = useState(null);
  const [viewMode, setViewMode] = useState('card');
  const sentinelRef = useRef(null);

  const articles = useMemo(() => {
    const allArticles = Array.from({ length: batches }, (_, batchIndex) => buildBatch(batchIndex)).flat();
    if (!category) return allArticles;
    const articleCategory = category === 'Business & Economy' ? 'Business' : category;
    return allArticles.filter((article) => article.category === articleCategory);
  }, [batches, category]);

  function toggleArticle(id) {
    setExpandedId((current) => current === id ? null : id);
  }

  function openRelated(title) {
    const related = articles.find((article) => article.title === title);
    if (!related) return;
    setExpandedId(related.id);
    requestAnimationFrame(() => {
      const card = document.getElementById(`article-${related.id}`);
      card?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
      card?.querySelector('.article-expand-toggle')?.focus({ preventScroll: true });
    });
  }

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || category) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBatches((current) => Math.min(current + 1, 16));
        }
      },
      { rootMargin: '620px 0px 620px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="top-news">
      <div className="section-title-row">
        <h1>{category || 'Top News'}</h1>
        <div className="view-toggle" aria-label="View mode">
          <button type="button" className={viewMode === 'card' ? 'selected' : ''} aria-label="Card view" aria-pressed={viewMode === 'card'} onClick={() => setViewMode('card')}>
            <Grid2X2 size={19} />
            Card
          </button>
          <button type="button" className={viewMode === 'list' ? 'selected' : ''} aria-label="List view" aria-pressed={viewMode === 'list'} onClick={() => setViewMode('list')}>
            <List size={20} />
            List
          </button>
        </div>
      </div>
      <div className={`article-grid ${viewMode === 'list' ? 'feed-list' : ''}`}>
        {articles.map((article, index) => (
          <React.Fragment key={article.id}>
            <ArticleCard article={article} featured={index % 4 === 0} expanded={expandedId === article.id} onToggle={() => toggleArticle(article.id)} onRelatedSelect={openRelated} />
            {!category && index === 2 && <ReelsFeed />}
            {!category && viewMode === 'card' && (index === 4 || index === 10) && (() => {
              const video = videoPosts[index === 4 ? 0 : 1];
              return <ArticleCard article={video} featured expanded={expandedId === video.id} onToggle={() => toggleArticle(video.id)} onRelatedSelect={openRelated} />;
            })()}
          </React.Fragment>
        ))}
      </div>
      {articles.length === 0 && <p className="category-empty">No stories are available in {category} yet.</p>}
      {!category && <div className="feed-sentinel" ref={sentinelRef}>
        Loading more stories
      </div>}
    </section>
  );
}

function HomeFeed() {
  return (
    <>
      <Stories />
      <TopNews />
    </>
  );
}

function renderEmphasis(text) {
  if (typeof text !== 'string') return text;
  return text.split(/(\*\*[^*]+\*\*|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b)/g).map((part, index) => (
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={index}>{renderEmphasis(part.slice(2, -2))}</strong>
      : /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(part)
        ? <a key={index} href={`mailto:${part}`}>{part}</a>
        : part
  ));
}

function StaticInfoPage({ page }) {
  return (
    <section className="static-page">
      <div className="static-page-header">
        <p>{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <span>{renderEmphasis(page.intro)}</span>
      </div>

      {page.linkGroups?.map(({ heading, links }) => (
        <section className="static-section" key={heading}>
          <h2>{heading}</h2>
          <ul className="static-bullets sitemap-links">
            {links.map(({ label, path }) => <li key={path}><a href={path}>{label}</a></li>)}
          </ul>
        </section>
      ))}

      {page.offices && (
        <div className="contact-offices">
          <section className="contact-office contact-office-corporate" aria-labelledby="corporate-office">
            <h2 id="corporate-office">Corporate Office</h2>
            <address>
              {page.offices.corporate.map((line) => <p key={line}>{line}</p>)}
              <h3>Grievance Officer</h3>
              {page.offices.grievance.map((line) => <p key={line}>{line}</p>)}
              <p>Contact detail: <a href="mailto:complaint@nw18.com">complaint@nw18.com</a></p>
            </address>
          </section>
          <section className="contact-office" aria-labelledby="registered-office">
            <h2 id="registered-office">Registered Office</h2>
            <address>
              {page.offices.registered.map((line) => <p key={line}>{line}</p>)}
              <p>Corporate Communications Telephone : <a href="tel:+912240019000">(+91 22) 40019000</a></p>
            </address>
          </section>
        </div>
      )}

      {page.sections?.map((section) => (
        <article className={`static-section ${section.strong ? 'lead' : ''}`} key={section.heading || section.body}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.body && <p>{renderEmphasis(section.body)}</p>}
          {section.bullets && (
            <ul className="static-bullets">
              {section.bullets.map((item) => (
                <li key={item.label || item.text}>
                  {item.label ? <><strong>{item.label}:</strong> {item.text}</> : item.text}
                </li>
              ))}
            </ul>
          )}
          {section.afterword && <p>{renderEmphasis(section.afterword)}</p>}
        </article>
      ))}

      {page.rawContent?.map((block, index) => (
        <p className={`static-raw-copy ${block.strong ? 'strong' : ''}`} key={`${page.title}-${index}`}>
          {block.text}
        </p>
      ))}

      {page.rssFeeds && (
        <div className="rss-grid">
          {page.rssFeeds.map((feed) => (
            <article className="rss-card" key={feed.title}>
              <div>
                <h2>{feed.title}</h2>
                <p>{feed.description}</p>
              </div>
              <code>{feed.url}</code>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

const network18GroupSites = [
  { label: 'Network18', url: 'https://www.nw18.com/' },
  { label: 'News18', url: 'https://www.news18.com/' },
  { label: 'CNBC-TV18', url: 'https://www.cnbctv18.com/' },
  { label: 'Moneycontrol', url: 'https://www.moneycontrol.com/' },
  { label: 'Firstpost', url: 'https://www.firstpost.com/' },
  { label: 'Forbes India', url: 'https://www.forbesindia.com/' },
  { label: 'Storyboard18', url: 'https://www.storyboard18.com/' }
];

function AboutFooter({ currentPath }) {
  return (
    <footer className="about-footer">
      <div className="content-shell about-footer-inner">
        <div className="about-footer-top">
          <div className="about-footer-brand">
            <a href="/" aria-label="One18 home"><Logo /></a>
            <p>Powered by Network18</p>
          </div>
          <nav className="about-footer-links" aria-label="Footer navigation">
            <a href="/">Home</a>
            {supportLinks.map(({ label, path }) => (
              <a href={path} key={path} aria-current={currentPath === path ? 'page' : undefined}>{label}</a>
            ))}
            {legalLinks.map(({ label, path }) => (
              <a href={path} key={path}>{label}</a>
            ))}
            <a href="/sitemap" aria-current={currentPath === '/sitemap' ? 'page' : undefined}>Sitemap</a>
          </nav>
        </div>
        <div className="about-footer-group">
          <h2 id="footer-categories">Explore Categories</h2>
          <nav className="about-footer-links about-footer-group-links" aria-labelledby="footer-categories">
            {categoryLinks.filter(({ path }) => path !== '/').map(({ label, path }) => (
              <a href={path} key={path}>{label}</a>
            ))}
          </nav>
        </div>
        <div className="about-footer-group">
          <h2 id="network18-group-sites">Network18 Group Sites</h2>
          <nav className="about-footer-links about-footer-group-links" aria-labelledby="network18-group-sites">
            {network18GroupSites.map(({ label, url }) => (
              <a href={url} key={url} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <p className="about-footer-copyright">© Copyright Network18 Media and Investments Ltd 2026. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const currentPath = useCurrentPath();
  const activePage = staticPages[currentPath];
  const activeCategory = categoryLinks.find(({ path }) => path === currentPath)?.label;

  useEffect(() => {
    if (!activePage?.seoTitle) return undefined;

    const originalTitle = document.title;
    document.title = activePage.seoTitle;

    const originalDescription = document.querySelector('meta[name="description"]');
    const description = originalDescription || document.createElement('meta');
    const previousDescription = description.getAttribute('content');
    description.setAttribute('name', 'description');
    description.setAttribute('content', activePage.metaDescription);
    if (!originalDescription) document.head.appendChild(description);

    const originalCanonical = document.querySelector('link[rel="canonical"]');
    const canonical = originalCanonical || document.createElement('link');
    const previousCanonical = canonical.getAttribute('href');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', new URL(currentPath, window.location.origin).href);
    if (!originalCanonical) document.head.appendChild(canonical);

    return () => {
      document.title = originalTitle;
      if (originalDescription) {
        if (previousDescription === null) description.removeAttribute('content');
        else description.setAttribute('content', previousDescription);
      } else description.remove();
      if (originalCanonical) {
        if (previousCanonical === null) canonical.removeAttribute('href');
        else canonical.setAttribute('href', previousCanonical);
      } else canonical.remove();
    };
  }, [activePage, currentPath]);

  return (
    <div className={`app-shell ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Header onMenuOpen={() => setDrawerOpen(true)} />
      <main className="app-main">
        <CategoryNav activeCategory={activeCategory} />
        <DesktopSidebar activeCategory={activeCategory} collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((current) => !current)} />
        <div className="content-shell">
          {activePage ? <StaticInfoPage page={activePage} /> : activeCategory && currentPath !== '/' ? <TopNews key={currentPath} category={activeCategory} /> : <HomeFeed />}
        </div>
      </main>
      {['/about-us', '/contact-us', '/sitemap'].includes(currentPath) && <AboutFooter currentPath={currentPath} />}
      <MobileDrawer activeCategory={activeCategory} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <button className="active">
          <Home size={22} />
          Home
        </button>
        <button>
          <Sparkles size={22} />
          ASK18
        </button>
        <button>
          <MapPin size={22} />
          Local
        </button>
        <button>
          <Monitor size={22} />
          Live TV
        </button>
      </nav>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
