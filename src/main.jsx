import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ChevronDown,
  Clock3,
  Cookie,
  FileText,
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

const drawerCategories = categories.map((category, index) => ({
  label: category,
  active: index === 0
}));

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
  { label: 'Contact Us', icon: Mail }
];

const legalLinks = [
  { label: 'Privacy Policy', icon: ShieldCheck, path: '/privacy-policy' },
  { label: 'Cookie Policy', icon: Cookie, path: '/cookie-policy' },
  { label: 'Disclaimer', icon: FileText, path: '/disclaimer' },
  { label: 'RSS', icon: Rss, path: '/rss' }
];

const staticPages = {
  '/about-us': {
    eyebrow: 'Company',
    title: 'About One18',
    intro:
      'One Platform. Multiple Perspectives. Endless Stories.',
    sections: [
      {
        strong: true,
        body:
          'One18 is a next-generation digital news aggregation platform that brings together stories, perspectives, and updates from across India and around the world into one seamless experience.'
      },
      {
        body:
          'Built for a generation that consumes information differently, One18 reimagines how news is discovered, explored, and experienced.'
      },
      {
        body:
          'With a modern, intuitive, and continuously updated news feed, One18 makes it easier to stay informed about the stories that matter, without the need to navigate multiple websites or platforms.'
      },
      {
        heading: 'What We Do',
        body:
          'One18 brings together news and information across categories including politics, business, technology, entertainment, sports, lifestyle, and more.',
        bullets: [
          { label: 'News in One Place', text: 'Discover stories from multiple news sources through a unified platform.' },
          { label: 'Multiple Perspectives', text: 'Explore different viewpoints and coverage of important events.' },
          { label: 'Seamless Discovery', text: 'Stay updated through an intuitive, infinite-scrolling news feed.' },
          { label: 'Relevant Content', text: 'Discover stories across topics and interests that matter to you.' },
          { label: 'Mobile-First Experience', text: 'Enjoy a fast, responsive, and engaging experience across devices.' }
        ]
      },
      {
        heading: 'Our Vision',
        body:
          'To redefine digital news consumption by creating a connected, accessible, and engaging platform where information is easy to discover and diverse perspectives are within everyone\'s reach.'
      },
      {
        heading: 'Our Mission',
        body:
          'To simplify how people discover and consume news by bringing together credible sources, relevant stories, and diverse perspectives in a seamless digital experience.'
      },
      {
        heading: 'A New Way to Experience News',
        body:
          'The way people consume news is evolving, and One18 is built around that change.\n\nMoving beyond traditional news layouts, One18 offers a feed-first experience designed for continuous discovery. Whether you\'re catching up on the latest headlines, exploring a trending topic, or discovering a new perspective, One18 makes staying informed simple and engaging.\n\nOne18 — Every Story. One Feed.'
      },
      {
        heading: 'Get in Touch',
        body:
          'We value feedback, ideas, and suggestions that help us improve the One18 experience.\n\nFor queries, feedback, or business enquiries, please reach out to us.\n\nEmail: [Official One18 contact email]\n\nCorporate Office: [Official One18 corporate address]'
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
    summary: 'The court advised party representatives on permissions, public access, and local coordination for book stalls.',
    time: '2 hours ago',
    source: 'NEWS18',
    image: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Bedroom Vastu: Avoid keeping these 5 items in your bedroom for a happy married life',
    summary: 'A quick lifestyle guide looks at simple bedroom choices believed to improve harmony at home.',
    time: '3 hours ago',
    source: 'NEWS18',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: "Meet The Makkhi Janta Party: India's Newest Satirical Online Movement Amid Delhi Protests",
    summary: 'A satirical online movement is gaining attention as protest conversations spill across social platforms.',
    time: '4 hours ago',
    source: 'NEWS18',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Markets open higher as investors track global cues and commodity reserves',
    summary: 'Domestic markets opened on a firm note as investors watched global trends and sector updates.',
    time: '5 hours ago',
    source: 'CNBC-TV18',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Indian startups prepare hiring plans for the festive quarter',
    summary: 'Several growth-stage companies are planning selective hiring for product, sales, and operations roles.',
    time: '6 hours ago',
    source: 'MONEYCONTROL',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Local civic teams begin monsoon readiness checks across key wards',
    summary: 'Local teams started ward-level inspections focused on drains, traffic points, and public safety.',
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

function MobileDrawer({ open, onClose }) {
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
            <button className={`drawer-link ${item.active ? 'active' : ''}`} type="button" key={item.label}>
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

function DesktopSidebar({ collapsed, onToggle }) {
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
            <button className={`desktop-nav-link ${item.active ? 'active' : ''}`} type="button" key={item.label} title={collapsed ? item.label : undefined}>
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

function CategoryNav() {
  return (
    <nav className="category-wrap" aria-label="News categories">
      <div className="category-track">
        {categories.map((category) => (
          <button className={`category-tab ${category === 'For You' ? 'active' : ''}`} key={category}>
            {category}
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

function ArticleCard({ article, featured = false }) {
  return (
    <article className={`article-card ${featured ? 'article-card-featured' : ''}`} style={{ '--delay': `${article.delay}ms` }}>
      <div className="article-image">
        <img src={article.image} alt="" />
      </div>
      <div className="article-body">
        <h3>{article.title}</h3>
        {featured && (
          <>
            <div className="time-row">
              <Clock3 size={18} strokeWidth={2.1} />
              <span>{article.time}</span>
            </div>
            <p>{article.summary}</p>
          </>
        )}
        <div className="source-row">
          <span className="mini-news18">NEWS<span>18</span></span>
          <span>{article.source}</span>
          <button className="share-button small" aria-label={`Share ${article.title}`}>
            <Share2 size={17} strokeWidth={1.9} />
          </button>
        </div>
      </div>
    </article>
  );
}

function TopNews() {
  const [batches, setBatches] = useState(2);
  const sentinelRef = useRef(null);

  const articles = useMemo(() => {
    return Array.from({ length: batches }, (_, batchIndex) => buildBatch(batchIndex)).flat();
  }, [batches]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return undefined;

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
        <h1>Top News</h1>
        <div className="view-toggle" aria-label="View mode">
          <button className="selected">
            <Grid2X2 size={19} />
            Card
          </button>
          <button>
            <List size={20} />
            List
          </button>
        </div>
      </div>
      <div className="article-grid">
        {articles.map((article, index) => (
          <ArticleCard article={article} featured={index % 4 === 0} key={article.id} />
        ))}
      </div>
      <div className="feed-sentinel" ref={sentinelRef}>
        Loading more stories
      </div>
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

function StaticInfoPage({ page }) {
  return (
    <section className="static-page">
      <div className="static-page-header">
        <p>{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <span>{page.intro}</span>
      </div>

      {page.sections?.map((section) => (
        <article className={`static-section ${section.strong ? 'lead' : ''}`} key={section.heading || section.body}>
          {section.heading && <h2>{section.heading}</h2>}
          <p>{section.body}</p>
          {section.bullets && (
            <ul className="static-bullets">
              {section.bullets.map((item) => (
                <li key={item.label || item.text}>
                  {item.label ? <><strong>{item.label}:</strong> {item.text}</> : item.text}
                </li>
              ))}
            </ul>
          )}
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

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const currentPath = useCurrentPath();
  const activePage = staticPages[currentPath];

  return (
    <div className={`app-shell ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Header onMenuOpen={() => setDrawerOpen(true)} />
      <main className="app-main">
        <CategoryNav />
        <DesktopSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((current) => !current)} />
        <div className="content-shell">
          {activePage ? <StaticInfoPage page={activePage} /> : <HomeFeed />}
        </div>
      </main>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
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
