export interface RightCategory {
  id: string;
  letter: string;
  title: string;
  shortDescription: string;
  icon: string;
  fullDescription: string;
  examples: string[];
  whatToDo: string[];
  contacts: {
    name: string;
    phone?: string;
    link?: string;
  }[];
  relatedLaws: string[];
  keyFacts: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const rightsCategories: RightCategory[] = [
  {
    id: "birth-identity",
    letter: "A",
    title: "Birth, Identity & Citizenship",
    shortDescription: "Your right to legal identity and citizenship",
    icon: "id-card",
    fullDescription: "Every Indian citizen has the right to a legal identity from birth. This includes the right to a birth certificate, citizenship, Aadhaar card, voter ID, and other identity documents. These documents are essential for accessing government services, education, employment, and benefits. Under the Citizenship Act, 1955, citizenship can be acquired by birth, descent, registration, or naturalization. The Registration of Births and Deaths Act, 1969 mandates registration of all births within 21 days.",
    examples: [
      "Getting a birth certificate for your child",
      "Applying for Aadhaar card",
      "Registering as a voter",
      "Obtaining a passport",
      "Proving your citizenship status",
      "Name correction in identity documents",
      "Getting duplicate documents for lost originals"
    ],
    whatToDo: [
      "If your birth certificate is denied, file a complaint with the Municipal Corporation or Gram Panchayat",
      "For Aadhaar issues, contact the nearest Aadhaar Enrollment Center or UIDAI",
      "If citizenship rights are violated, approach the Ministry of Home Affairs",
      "Seek help from a lawyer or Legal Services Authority for complex cases",
      "File RTI application to know the status of pending applications",
      "Approach the District Collector for escalated issues"
    ],
    contacts: [
      { name: "Ministry of Home Affairs", link: "https://indiancitizenshiponline.nic.in" },
      { name: "UIDAI (Aadhaar)", link: "https://uidai.gov.in" },
      { name: "Legal Services Authority", link: "https://nalsa.gov.in" },
      { name: "Passport Seva", link: "https://passportindia.gov.in" }
    ],
    relatedLaws: [
      "Citizenship Act, 1955",
      "Registration of Births and Deaths Act, 1969",
      "Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016",
      "Passports Act, 1967",
      "Representation of the People Act, 1950"
    ],
    keyFacts: [
      "Birth must be registered within 21 days - delay requires magistrate approval",
      "Aadhaar is mandatory for many government schemes but optional for others",
      "You can apply for voter ID card once you turn 18",
      "Passport can be applied for at any age",
      "NRI children born abroad can get OCI (Overseas Citizen of India) card"
    ],
    faqs: [
      {
        question: "Can birth certificate be obtained even after many years?",
        answer: "Yes, delayed birth registration is possible through a Magistrate's order. You need to provide supporting documents like school certificates, hospital records, and an affidavit."
      },
      {
        question: "Is Aadhaar mandatory for all services?",
        answer: "No, Aadhaar cannot be made mandatory for all services. The Supreme Court has clarified that Aadhaar is mandatory only for government subsidies and tax filing, not for bank accounts or mobile connections."
      },
      {
        question: "What if my name is different in different documents?",
        answer: "You should get a name change affidavit notarized and publish it in a newspaper. Then apply for corrections in individual documents using this affidavit."
      }
    ]
  },
  {
    id: "life-liberty",
    letter: "B",
    title: "Life, Liberty & Dignity",
    shortDescription: "Your fundamental right to live with freedom and respect",
    icon: "heart",
    fullDescription: "Article 21 of the Constitution guarantees the right to life and personal liberty. This includes the right to live with dignity, privacy, clean environment, healthcare, shelter, and protection from torture or inhuman treatment. No person can be deprived of life or liberty except by procedure established by law. The Supreme Court has expanded this right to include right to livelihood, sleep, shelter, travel abroad, and reputation. This is considered the most important fundamental right.",
    examples: [
      "Protection from illegal detention",
      "Right to medical treatment in emergencies",
      "Protection of personal privacy",
      "Right to clean drinking water",
      "Protection from torture by authorities",
      "Right to fair trial and speedy justice",
      "Right to travel within and outside India",
      "Protection from public humiliation"
    ],
    whatToDo: [
      "In case of illegal detention, immediately contact the nearest police station and inform family",
      "File a habeas corpus petition in High Court for unlawful detention",
      "For privacy violations, file a complaint with the police and consider civil action",
      "Report torture or abuse to NHRC immediately",
      "Seek emergency medical help at any government hospital",
      "Document all violations with photographs, videos, and witness statements",
      "Contact media if authorities are unresponsive"
    ],
    contacts: [
      { name: "Police Emergency", phone: "112" },
      { name: "Legal Services Authority", link: "https://nalsa.gov.in" },
      { name: "National Human Rights Commission", link: "https://nhrc.nic.in" },
      { name: "State Human Rights Commission", phone: "Contact state office" }
    ],
    relatedLaws: [
      "Article 21 - Constitution of India",
      "Protection of Human Rights Act, 1993",
      "Criminal Procedure Code (Sections on Arrest)",
      "Right to Information Act, 2005",
      "Mental Healthcare Act, 2017"
    ],
    keyFacts: [
      "Article 21 cannot be suspended even during Emergency",
      "Right to privacy was declared a fundamental right in 2017 (Puttaswamy case)",
      "Government hospitals cannot deny emergency treatment to anyone",
      "Custodial death is a serious violation and must be investigated",
      "Right to sleep and shelter are part of right to life"
    ],
    faqs: [
      {
        question: "Can police detain me without giving a reason?",
        answer: "No, police must inform you of the grounds of arrest at the time of arrest. This is your constitutional right under Article 22."
      },
      {
        question: "What is habeas corpus?",
        answer: "Habeas corpus is a legal petition you can file in High Court when someone is illegally detained. The court will ask the detaining authority to produce the person and justify the detention."
      },
      {
        question: "Can a private hospital refuse emergency treatment?",
        answer: "No, all hospitals (government and private) are legally obligated to provide emergency treatment first. Refusing is a punishable offense under Clinical Establishments Act."
      }
    ]
  },
  {
    id: "equality",
    letter: "C",
    title: "Equality & Non-Discrimination",
    shortDescription: "Equal treatment under law regardless of background",
    icon: "scale",
    fullDescription: "The Constitution guarantees equality before law (Article 14) and prohibits discrimination based on religion, race, caste, sex, or place of birth (Article 15). Every citizen has equal access to public places, facilities, and opportunities. Untouchability is abolished (Article 17) and its practice is punishable under the Protection of Civil Rights Act, 1955. The state is also empowered to make special provisions for socially and educationally backward classes, women, and children.",
    examples: [
      "Denial of entry to public places based on caste",
      "Discrimination in employment based on religion",
      "Unequal pay for same work based on gender",
      "Denial of services based on social background",
      "Harassment based on community identity",
      "Denial of housing based on religion or caste",
      "Discrimination in educational institutions"
    ],
    whatToDo: [
      "File an FIR under SC/ST Prevention of Atrocities Act for caste-based discrimination",
      "Report workplace discrimination to the Labour Commissioner",
      "Approach NHRC for human rights violations",
      "File a complaint with State Human Rights Commission",
      "Seek help from civil rights organizations",
      "Document incidents with evidence for legal proceedings",
      "Approach District Collector for immediate intervention"
    ],
    contacts: [
      { name: "National Human Rights Commission", link: "https://nhrc.nic.in" },
      { name: "National Commission for SC", link: "https://ncsc.nic.in" },
      { name: "National Commission for ST", link: "https://ncst.nic.in" },
      { name: "National Commission for Backward Classes", link: "https://ncbc.nic.in" }
    ],
    relatedLaws: [
      "Articles 14, 15, 16, 17 - Constitution of India",
      "Protection of Civil Rights Act, 1955",
      "SC/ST (Prevention of Atrocities) Act, 1989",
      "Equal Remuneration Act, 1976",
      "Sexual Harassment of Women at Workplace Act, 2013"
    ],
    keyFacts: [
      "Untouchability in any form is a criminal offense",
      "Private establishments cannot discriminate in providing services",
      "Reservations are a constitutional provision for historically disadvantaged groups",
      "Equal pay for equal work is a legal right",
      "Denial of promotion based on caste/religion is punishable"
    ],
    faqs: [
      {
        question: "What can I do if a restaurant refuses to serve me based on caste?",
        answer: "This is a criminal offense. You can file an FIR under the Protection of Civil Rights Act, 1955 and SC/ST (Prevention of Atrocities) Act if applicable. Also file a complaint with the District Collector."
      },
      {
        question: "Are reservations constitutional?",
        answer: "Yes, reservations for SC, ST, OBC, and EWS are constitutional provisions under Articles 15(4), 15(5), 16(4), and recent amendments. They are meant to ensure equality of opportunity."
      },
      {
        question: "Can a landlord refuse to rent to me based on religion?",
        answer: "While there's no specific law against this, it can be challenged under fundamental rights. Document the discrimination and approach local authorities or human rights commission."
      }
    ]
  },
  {
    id: "freedom-expression",
    letter: "D",
    title: "Freedom & Expression",
    shortDescription: "Your right to speak, move, and live freely",
    icon: "megaphone",
    fullDescription: "Article 19 grants six freedoms: speech and expression, peaceful assembly, forming associations, moving freely throughout India, residing anywhere, and practicing any profession. These freedoms have reasonable restrictions for sovereignty, security, public order, decency, morality, contempt of court, defamation, and incitement to offense. The press enjoys freedom under this article though not explicitly mentioned. Internet access has been recognized as part of free speech.",
    examples: [
      "Expressing opinions on social media",
      "Participating in peaceful protests",
      "Choosing your profession or business",
      "Traveling and living in any state",
      "Forming or joining associations",
      "Publishing articles and books",
      "Criticizing government policies peacefully",
      "Access to internet and information"
    ],
    whatToDo: [
      "If freedom of speech is unlawfully restricted, approach the High Court",
      "For wrongful arrest during peaceful protest, file habeas corpus petition",
      "Challenge any unconstitutional restrictions through PIL",
      "Seek help from press councils for media-related issues",
      "Contact legal aid for professional restrictions",
      "Document any censorship or suppression attempts",
      "Approach Internet Freedom Foundation for digital rights issues"
    ],
    contacts: [
      { name: "High Court of your State", link: "https://ecourts.gov.in" },
      { name: "Legal Services Authority", link: "https://nalsa.gov.in" },
      { name: "Press Council of India", link: "https://presscouncil.nic.in" },
      { name: "Bar Council of India", link: "https://barcouncilofindia.org" }
    ],
    relatedLaws: [
      "Article 19 - Constitution of India",
      "Information Technology Act, 2000",
      "Indian Penal Code (Sections on Sedition, Defamation)",
      "Press Council Act, 1978",
      "Official Secrets Act, 1923"
    ],
    keyFacts: [
      "Freedom of speech is not absolute - reasonable restrictions apply",
      "Sedition law requires actual incitement to violence",
      "Right to protest peacefully is a fundamental right",
      "Internet shutdowns require legal justification and review",
      "Pre-censorship of media is generally unconstitutional"
    ],
    faqs: [
      {
        question: "Can I be arrested for a social media post?",
        answer: "Potentially, if the post violates laws against hate speech, defamation, or incitement to violence. However, mere criticism or opinion cannot be the basis for arrest. Misuse of IT Act provisions has been struck down by courts."
      },
      {
        question: "Do I need permission to hold a peaceful protest?",
        answer: "While not explicitly required, Section 144 or local police regulations may require prior notice. Courts have held that peaceful protests cannot be denied without valid reasons."
      },
      {
        question: "Can the government block websites?",
        answer: "Yes, under IT Act Section 69A, but there must be valid grounds like national security. Such orders can be challenged in court."
      }
    ]
  },
  {
    id: "religion-belief",
    letter: "E",
    title: "Religion & Belief",
    shortDescription: "Freedom to practice and profess your faith",
    icon: "hands-praying",
    fullDescription: "Articles 25-28 guarantee freedom of conscience and the right to freely profess, practice, and propagate religion. Religious denominations can manage their own affairs, own property, and establish institutions. The state maintains secularism by not favoring any religion. However, forced conversion is illegal, and religious freedom is subject to public order, morality, and health. Religious instruction in government schools is prohibited.",
    examples: [
      "Practicing religious customs and rituals",
      "Visiting places of worship",
      "Observing religious holidays and fasts",
      "Running religious institutions",
      "Teaching religion to children",
      "Wearing religious symbols or attire",
      "Conducting religious ceremonies and festivals"
    ],
    whatToDo: [
      "Report forced conversion attempts to police immediately",
      "File complaint with District Magistrate for religious discrimination",
      "Approach NHRC if religious rights are violated by authorities",
      "Seek court intervention for disputes over religious properties",
      "Contact religious organization heads for internal disputes",
      "Document any coercion or harassment related to religion"
    ],
    contacts: [
      { name: "District Magistrate Office", phone: "Contact local district office" },
      { name: "Police", phone: "112" },
      { name: "NHRC", link: "https://nhrc.nic.in" },
      { name: "National Commission for Minorities", link: "https://ncm.nic.in" }
    ],
    relatedLaws: [
      "Articles 25, 26, 27, 28 - Constitution of India",
      "Religious Institutions (Prevention of Misuse) Act, 1988",
      "Places of Worship (Special Provisions) Act, 1991",
      "State Anti-Conversion Laws (where applicable)",
      "Waqf Act, 1995"
    ],
    keyFacts: [
      "India is a secular state - no state religion",
      "Forced conversion is illegal under various state laws",
      "Religious practices that harm public order can be restricted",
      "Government schools cannot provide religious instruction",
      "Minority institutions have special constitutional protection"
    ],
    faqs: [
      {
        question: "Can my employer force me to work on religious holidays?",
        answer: "Generally, employers should accommodate religious observances. Many religious holidays are recognized as restricted/optional holidays. Discuss with HR or approach Labour Commissioner if denied."
      },
      {
        question: "Is atheism protected?",
        answer: "Yes, freedom of conscience includes the right to not follow any religion. You cannot be forced to participate in religious activities."
      },
      {
        question: "Can I convert to another religion?",
        answer: "Yes, voluntary conversion is your right. However, some states have anti-conversion laws that prohibit forced or fraudulent conversions."
      }
    ]
  },
  {
    id: "education",
    letter: "F",
    title: "Education Rights",
    shortDescription: "Free and compulsory education for every child",
    icon: "graduation-cap",
    fullDescription: "The Right to Education Act, 2009 (RTE) guarantees free and compulsory education for all children aged 6-14 years. Article 21A makes education a fundamental right. Schools cannot deny admission based on caste, religion, or economic status. Private schools must reserve 25% seats for economically weaker sections (EWS) and disadvantaged groups. Protection from discrimination and corporal punishment is ensured. Higher education also has provisions for scholarships and reservations.",
    examples: [
      "Admission denied due to lack of documents",
      "Charging fees in government schools",
      "Discrimination in schools based on caste or religion",
      "Corporal punishment by teachers",
      "Denial of 25% quota in private schools",
      "Expulsion without due process",
      "Denial of scholarships or benefits",
      "Poor infrastructure in government schools"
    ],
    whatToDo: [
      "Approach School Education Department for admission issues",
      "File complaint with Block Education Officer",
      "Report corporal punishment to Child Rights Commission",
      "Contact District Education Officer for quota violations",
      "File RTI for information about available seats",
      "Approach State Commission for Protection of Child Rights",
      "Contact UGC for higher education issues"
    ],
    contacts: [
      { name: "Ministry of Education", link: "https://education.gov.in" },
      { name: "National Commission for Protection of Child Rights", link: "https://ncpcr.gov.in" },
      { name: "District Education Office", phone: "Contact local DEO" },
      { name: "University Grants Commission", link: "https://ugc.ac.in" }
    ],
    relatedLaws: [
      "Article 21A - Constitution of India",
      "Right of Children to Free and Compulsory Education Act, 2009",
      "National Commission for Protection of Child Rights Act, 2005",
      "UGC Act, 1956",
      "National Education Policy, 2020"
    ],
    keyFacts: [
      "Education is a fundamental right for children 6-14 years",
      "No child can be held back or expelled till Class 8",
      "Corporal punishment is banned in all schools",
      "25% seats in private schools are reserved for EWS/disadvantaged",
      "Schools cannot conduct screening tests for admission till Class 8"
    ],
    faqs: [
      {
        question: "Can a school ask for donation during admission?",
        answer: "No, capitation fee or donation as condition for admission is illegal under RTE Act. Schools can only charge approved fees."
      },
      {
        question: "What if my child doesn't have a birth certificate for admission?",
        answer: "Schools cannot deny admission for lack of documents. An affidavit from parent or self-declaration can be accepted. Age can be determined by medical examination."
      },
      {
        question: "Can my child be failed in school?",
        answer: "Under RTE, no child can be failed till Class 8. However, the 2019 amendment allows states to conduct exams in Class 5 and 8 with provision for re-examination."
      }
    ]
  },
  {
    id: "employment",
    letter: "G",
    title: "Employment & Workplace Rights",
    shortDescription: "Fair wages, safety, and dignity at work",
    icon: "briefcase",
    fullDescription: "Workers have the right to fair wages, safe working conditions, reasonable working hours, and protection from exploitation. The Minimum Wages Act ensures basic wage standards. The Factories Act and Occupational Safety, Health and Working Conditions Code ensure workplace safety. Laws protect against child labor, forced labor, and workplace harassment. Employees can form unions and have the right to social security benefits including PF, ESI, and gratuity.",
    examples: [
      "Non-payment of minimum wages",
      "Unsafe working conditions",
      "Sexual harassment at workplace",
      "Wrongful termination",
      "Denial of maternity/paternity benefits",
      "Unpaid overtime work",
      "Denial of PF or ESI benefits",
      "Contract labour exploitation"
    ],
    whatToDo: [
      "File complaint with Labour Commissioner for wage issues",
      "Report unsafe conditions to Factory Inspector",
      "Approach Internal Complaints Committee for harassment",
      "File case in Labour Court for wrongful termination",
      "Contact EPFO for PF issues",
      "File complaint with ESIC for medical benefit denial",
      "Approach Labour Welfare Officer for disputes"
    ],
    contacts: [
      { name: "Ministry of Labour", link: "https://labour.gov.in" },
      { name: "Labour Commissioner", phone: "Contact state labour department" },
      { name: "EPFO", link: "https://epfindia.gov.in" },
      { name: "ESIC", link: "https://esic.gov.in" }
    ],
    relatedLaws: [
      "Minimum Wages Act, 1948",
      "Payment of Wages Act, 1936",
      "Industrial Disputes Act, 1947",
      "Sexual Harassment of Women at Workplace Act, 2013",
      "Employee Provident Fund Act, 1952",
      "Maternity Benefit Act, 1961",
      "New Labour Codes (2020)"
    ],
    keyFacts: [
      "Minimum wages are revised periodically by government",
      "Working hours cannot exceed 48 hours per week normally",
      "Every woman is entitled to 26 weeks maternity leave",
      "PF deduction is mandatory for establishments with 20+ employees",
      "Termination requires one month notice or salary in lieu"
    ],
    faqs: [
      {
        question: "What is the current minimum wage?",
        answer: "Minimum wages vary by state, skill level, and industry. Check your state's Labour Department website for current rates. The national floor wage was set at ₹178/day in 2023."
      },
      {
        question: "Can I be fired without notice?",
        answer: "Generally, one month's notice or salary in lieu is required for termination. For retrenchment, 3 months' notice and compensation is required in establishments with 100+ workers."
      },
      {
        question: "What if my employer doesn't deposit my PF?",
        answer: "File a complaint on the EPFO portal or approach the Regional PF Commissioner. Non-deposit of PF is a criminal offense punishable with imprisonment."
      }
    ]
  },
  {
    id: "property",
    letter: "H",
    title: "Property & Economic Rights",
    shortDescription: "Right to own property and protection from fraud",
    icon: "home",
    fullDescription: "Citizens have the right to acquire, hold, and dispose of property under Article 300A. While not a fundamental right, property cannot be taken without authority of law and due compensation. The Constitution protects against arbitrary deprivation. Consumer rights are protected under Consumer Protection Act, 2019 with provisions for unfair trade practices, defective goods, and deficient services. RERA protects homebuyers.",
    examples: [
      "Property disputes with family or neighbors",
      "Fraudulent real estate deals",
      "Defective products purchased",
      "Unfair trade practices by businesses",
      "Banking fraud and unauthorized transactions",
      "Builder delays in property delivery",
      "Land grabbing or encroachment"
    ],
    whatToDo: [
      "Register property disputes in Civil Court",
      "File consumer complaint for defective products",
      "Report fraud to Cyber Crime Portal or Police",
      "Approach Consumer Forum for trade disputes",
      "Contact Banking Ombudsman for bank issues",
      "File RERA complaint for real estate issues",
      "Approach Revenue Department for land disputes"
    ],
    contacts: [
      { name: "Consumer Helpline", phone: "1800-11-4000", link: "https://consumerhelpline.gov.in" },
      { name: "Banking Ombudsman", link: "https://rbi.org.in" },
      { name: "Civil Court", link: "https://ecourts.gov.in" },
      { name: "RERA Authority", link: "https://rera.gov.in" }
    ],
    relatedLaws: [
      "Article 300A - Constitution of India",
      "Consumer Protection Act, 2019",
      "Real Estate (Regulation and Development) Act, 2016",
      "Transfer of Property Act, 1882",
      "Registration Act, 1908",
      "Indian Contract Act, 1872"
    ],
    keyFacts: [
      "Property registration is mandatory for valid transfer",
      "Consumer complaints can be filed online at edaakhil.nic.in",
      "RERA registration is mandatory for real estate projects",
      "Banking Ombudsman handles complaints up to ₹20 lakhs",
      "Adverse possession can transfer ownership after 12 years"
    ],
    faqs: [
      {
        question: "What if a builder doesn't deliver my flat on time?",
        answer: "File a complaint with your state RERA authority. You're entitled to interest on your payments and can claim compensation or refund with interest."
      },
      {
        question: "How do I file a consumer complaint?",
        answer: "You can file online at edaakhil.nic.in or visit the nearest Consumer Forum. District Forum handles complaints up to ₹1 crore, State Commission up to ₹10 crores."
      },
      {
        question: "What is the process for property registration?",
        answer: "Prepare sale deed, pay stamp duty (varies by state, usually 5-7%), submit documents to Sub-Registrar office, and complete biometric verification. Registration is typically completed same day."
      }
    ]
  },
  {
    id: "family-law",
    letter: "I",
    title: "Family & Personal Law",
    shortDescription: "Rights in marriage, divorce, and family matters",
    icon: "users",
    fullDescription: "Laws protect rights related to marriage, divorce, maintenance, child custody, and inheritance. Protection from domestic violence is guaranteed under the Protection of Women from Domestic Violence Act, 2005. Different personal laws apply based on religion, but secular laws like Special Marriage Act, 1954 are also available. Maintenance can be claimed under CrPC Section 125 regardless of religion. The Hindu Succession Act was amended to give daughters equal inheritance rights.",
    examples: [
      "Domestic violence - physical, mental, or economic",
      "Child custody disputes after separation",
      "Maintenance claims for spouse and children",
      "Property inheritance after death of family member",
      "Marriage registration",
      "Inter-caste or inter-faith marriage issues",
      "Dowry harassment"
    ],
    whatToDo: [
      "Call Women Helpline 181 for domestic violence",
      "Approach Family Court for divorce and custody",
      "File maintenance petition under CrPC Section 125",
      "Contact Protection Officer for domestic violence cases",
      "Seek help from Legal Services Authority",
      "Register FIR for dowry harassment under Section 498A",
      "Approach One Stop Centre for comprehensive support"
    ],
    contacts: [
      { name: "Women Helpline", phone: "181" },
      { name: "National Commission for Women", link: "https://ncw.nic.in" },
      { name: "Family Court", phone: "Contact district court" },
      { name: "One Stop Centre", phone: "Contact local centre" }
    ],
    relatedLaws: [
      "Protection of Women from Domestic Violence Act, 2005",
      "Hindu Marriage Act, 1955",
      "Special Marriage Act, 1954",
      "Muslim Personal Law (Shariat) Application Act, 1937",
      "Hindu Succession Act, 1956 (Amendment 2005)",
      "Dowry Prohibition Act, 1961",
      "CrPC Section 125 (Maintenance)"
    ],
    keyFacts: [
      "Marriage registration is advisable though not mandatory for religious marriages",
      "Daughters have equal right to ancestral property since 2005",
      "Domestic violence includes physical, emotional, verbal, economic, and sexual abuse",
      "Maintenance can be claimed even without divorce",
      "Minimum legal age for marriage is 21 for men and 18 for women"
    ],
    faqs: [
      {
        question: "What is the process for divorce in India?",
        answer: "For mutual consent: file joint petition, 6-month cooling period, then decree. For contested divorce: file petition citing grounds like cruelty, adultery, desertion etc., followed by trials and final hearing."
      },
      {
        question: "Can a working woman claim maintenance?",
        answer: "Yes, if her income is significantly lower than her husband's. Maintenance is based on relative earning capacity, not just employment status."
      },
      {
        question: "What is the 498A law?",
        answer: "Section 498A IPC deals with cruelty by husband or his relatives. It's a cognizable, non-bailable offense. Filing false cases is also punishable."
      }
    ]
  },
  {
    id: "women-rights",
    letter: "J",
    title: "Women's Rights",
    shortDescription: "Protection and empowerment for women",
    icon: "female",
    fullDescription: "Women have equal rights in all spheres of life guaranteed by the Constitution. Special laws protect against domestic violence, sexual harassment, dowry, trafficking, and discrimination. The Sexual Harassment of Women at Workplace Act (POSH Act) mandates Internal Complaints Committees. Maternity benefits, equal pay, and property rights are guaranteed. Crimes against women have special investigation procedures with women officers.",
    examples: [
      "Sexual harassment at workplace",
      "Domestic violence and abuse",
      "Dowry harassment and demands",
      "Eve teasing, stalking, and cyberstalking",
      "Denial of property rights",
      "Maternity benefit denial",
      "Acid attacks and physical assault",
      "Gender discrimination in employment"
    ],
    whatToDo: [
      "Call 181 for immediate help in any distress",
      "File FIR at Women's Cell in police station",
      "Approach Internal Complaints Committee at workplace for harassment",
      "Contact One Stop Centre for comprehensive support - medical, legal, shelter",
      "File complaint with NCW for rights violations",
      "Use She-Box portal for reporting sexual harassment",
      "Seek help from local women's organizations"
    ],
    contacts: [
      { name: "Women Helpline", phone: "181" },
      { name: "Police", phone: "112" },
      { name: "National Commission for Women", link: "https://ncw.nic.in" },
      { name: "She-Box (Harassment Complaints)", link: "http://shebox.nic.in" }
    ],
    relatedLaws: [
      "Protection of Women from Domestic Violence Act, 2005",
      "Sexual Harassment of Women at Workplace Act, 2013",
      "Dowry Prohibition Act, 1961",
      "IPC Sections 354, 376, 498A, 509",
      "Maternity Benefit Act, 1961",
      "Equal Remuneration Act, 1976",
      "POCSO Act, 2012 (for girl children)"
    ],
    keyFacts: [
      "Every workplace with 10+ employees must have Internal Complaints Committee",
      "Police must register FIR for crimes against women - cannot refuse",
      "Woman's statement is recorded by a woman officer",
      "Medical examination must be done within 24 hours of reporting",
      "Zero FIR can be filed at any police station"
    ],
    faqs: [
      {
        question: "What is the POSH Act?",
        answer: "Prevention of Sexual Harassment at Workplace Act, 2013 protects women from sexual harassment at work. Every organization must have an Internal Complaints Committee to handle complaints within 90 days."
      },
      {
        question: "Can I file a complaint without going to police station?",
        answer: "Yes, you can file online complaints on NCW website, She-Box portal, or use the Mahila Helpline app. Many states also have online FIR filing."
      },
      {
        question: "What support is available at One Stop Centres?",
        answer: "One Stop Centres provide integrated support: emergency response, medical aid, assistance in filing FIR, legal aid, psycho-social counseling, and temporary shelter."
      }
    ]
  },
  {
    id: "child-rights",
    letter: "K",
    title: "Child Rights",
    shortDescription: "Protection and care for every child",
    icon: "baby",
    fullDescription: "Every child has the right to survival, protection, development, and participation under the UN Convention on Rights of the Child ratified by India. The Juvenile Justice Act protects children from abuse, exploitation, and ensures their rehabilitation. Child labor is prohibited under 14 years. POCSO Act provides strict punishment for sexual offenses against children. Education, healthcare, and nutrition are guaranteed through various schemes.",
    examples: [
      "Child labor in factories, shops, homes",
      "Child abuse or neglect by family or institutions",
      "Child trafficking for labor or exploitation",
      "Denial of education",
      "Child marriage",
      "Cyberbullying of children",
      "Malnutrition and healthcare denial",
      "Children in conflict with law"
    ],
    whatToDo: [
      "Call Child Helpline 1098 immediately - available 24/7",
      "Report to Child Welfare Committee of your district",
      "File FIR for crimes against children",
      "Contact NCPCR for rights violations",
      "Approach Juvenile Justice Board for child in conflict with law",
      "Report online abuse on cybercrime.gov.in",
      "Contact Childline NGO for rescue operations"
    ],
    contacts: [
      { name: "Child Helpline", phone: "1098" },
      { name: "NCPCR", link: "https://ncpcr.gov.in" },
      { name: "Child Welfare Committee", phone: "Contact district office" },
      { name: "Ministry of Women and Child Development", link: "https://wcd.nic.in" }
    ],
    relatedLaws: [
      "Juvenile Justice (Care and Protection of Children) Act, 2015",
      "Protection of Children from Sexual Offences Act (POCSO), 2012",
      "Right of Children to Free and Compulsory Education Act, 2009",
      "Child Labour (Prohibition and Regulation) Act, 1986",
      "Prohibition of Child Marriage Act, 2006",
      "Commissions for Protection of Child Rights Act, 2005"
    ],
    keyFacts: [
      "Child labor is banned for all children under 14 years",
      "POCSO provides for child-friendly courts and procedures",
      "Child marriage is punishable for adults who marry minors",
      "Children's identity must be protected in media reports",
      "Every district must have a Child Welfare Committee"
    ],
    faqs: [
      {
        question: "What is POCSO Act?",
        answer: "Protection of Children from Sexual Offences Act criminalizes all forms of sexual abuse against children under 18. It mandates child-friendly procedures, recording of evidence, and strict punishments including death penalty in aggravated cases."
      },
      {
        question: "Can a 16-year-old be tried as an adult?",
        answer: "Under JJ Act, children 16-18 accused of heinous offenses can be tried as adults after assessment by Juvenile Justice Board. Otherwise, children are handled through the juvenile justice system focusing on rehabilitation."
      },
      {
        question: "What is Child Welfare Committee?",
        answer: "CWC is the authority for children in need of care and protection. It can order placement in foster care, adoption, or children's homes. Every district must have one."
      }
    ]
  },
  {
    id: "senior-citizen",
    letter: "L",
    title: "Senior Citizen Rights",
    shortDescription: "Care and protection for elderly persons",
    icon: "heart-handshake",
    fullDescription: "Senior citizens (60+) have the right to maintenance from children and relatives under the Maintenance and Welfare of Parents and Senior Citizens Act, 2007. Protection from abuse, abandonment, and neglect is guaranteed. Priority treatment in healthcare, legal proceedings, and public services. Tax benefits and various social security schemes are available. The Act empowers the government to establish old age homes.",
    examples: [
      "Abandonment by children or relatives",
      "Denial of property rights by children",
      "Elder abuse - physical, emotional, or financial",
      "Healthcare denial or neglect",
      "Non-payment of pension or benefits",
      "Eviction from own house by children",
      "Frauds targeting senior citizens"
    ],
    whatToDo: [
      "File application before Maintenance Tribunal for maintenance",
      "Report abuse to police under Senior Citizens Act",
      "Contact District Social Welfare Office",
      "Approach Legal Services Authority for free legal aid",
      "File complaint with State Commission for Elderly",
      "Call senior citizen helpline 14567",
      "Use Elderline (14567) for guidance and support"
    ],
    contacts: [
      { name: "Senior Citizen Helpline", phone: "14567" },
      { name: "District Social Welfare Office", phone: "Contact local office" },
      { name: "Maintenance Tribunal", phone: "Contact district court" },
      { name: "Ministry of Social Justice", link: "https://socialjustice.gov.in" }
    ],
    relatedLaws: [
      "Maintenance and Welfare of Parents and Senior Citizens Act, 2007",
      "Hindu Adoption and Maintenance Act, 1956",
      "CrPC Section 125",
      "Indian Succession Act, 1925",
      "Senior Citizens (Amendment) Bill (proposed)"
    ],
    keyFacts: [
      "Children and relatives can be legally ordered to pay maintenance",
      "Tribunal must decide maintenance cases within 90 days",
      "Elderly can revoke property transfer made to abusive relatives",
      "Senior citizens get priority in court cases",
      "Income tax exemption limit is higher for senior citizens"
    ],
    faqs: [
      {
        question: "Can I get maintenance from my children?",
        answer: "Yes, under the Senior Citizens Act, you can file an application with the Maintenance Tribunal seeking maintenance up to ₹10,000 per month from your children or relatives."
      },
      {
        question: "What if I transferred my property and my children now neglect me?",
        answer: "Under the 2007 Act, such transfers can be declared void if made for maintenance which is not being provided. File application with Tribunal."
      },
      {
        question: "Are there special schemes for senior citizens?",
        answer: "Yes - Indira Gandhi National Old Age Pension Scheme, Atal Pension Yojana, senior citizen health insurance (PMJAY), and various state-specific schemes. Contact your local BDO or Social Welfare office."
      }
    ]
  },
  {
    id: "disability",
    letter: "M",
    title: "Disability Rights",
    shortDescription: "Equal opportunities and accessibility for all",
    icon: "accessibility",
    fullDescription: "Persons with disabilities have equal rights in education, employment, and public life under the Rights of Persons with Disabilities Act, 2016. The Act recognizes 21 types of disabilities. Accessibility in buildings, transport, and digital platforms is mandated. 4% reservation in government jobs and higher education is provided. Protection from discrimination, exploitation, and cruelty is guaranteed. Disability certificate entitles benefits.",
    examples: [
      "Denial of education or job due to disability",
      "Inaccessible public buildings and transport",
      "Discrimination in services or housing",
      "Denial of disability certificate",
      "Workplace harassment based on disability",
      "Denial of reasonable accommodation",
      "Inaccessible websites and digital services"
    ],
    whatToDo: [
      "File complaint with Chief Commissioner for Disabilities",
      "Approach State Commissioner for Disabilities",
      "Report to District Disability Rehabilitation Centre",
      "Seek help from disability rights organizations",
      "File case under Rights of Persons with Disabilities Act",
      "Apply for Unique Disability ID (UDID) for benefits",
      "Approach NHRC for serious violations"
    ],
    contacts: [
      { name: "Department of Empowerment of PwD", link: "https://disabilityaffairs.gov.in" },
      { name: "Unique Disability ID Portal", link: "https://swavlambancard.gov.in" },
      { name: "State Commissioner for Disabilities", phone: "Contact state office" },
      { name: "National Trust", link: "https://thenationaltrust.gov.in" }
    ],
    relatedLaws: [
      "Rights of Persons with Disabilities Act, 2016",
      "National Trust Act, 1999",
      "Mental Healthcare Act, 2017",
      "Rehabilitation Council of India Act, 1992",
      "Accessible India Campaign Guidelines"
    ],
    keyFacts: [
      "21 types of disabilities are now recognized by law",
      "4% reservation in government jobs (up from 3%)",
      "All public buildings must be accessible by 2025",
      "Disability certificate can be obtained from government hospitals",
      "Persons with benchmark disability (40%+) get special benefits"
    ],
    faqs: [
      {
        question: "How do I get a disability certificate?",
        answer: "Apply at the nearest government hospital or DDRC with medical records. A medical board will assess and issue certificate. Now also available through Swavlamban portal online."
      },
      {
        question: "What is the UDID card?",
        answer: "Unique Disability ID is a universal ID for persons with disabilities. It stores disability details and makes availing benefits easier. Apply online at swavlambancard.gov.in."
      },
      {
        question: "Can I be denied admission or job due to disability?",
        answer: "No, denial based on disability alone is discrimination under the 2016 Act. Educational institutions and employers must provide reasonable accommodation."
      }
    ]
  },
  {
    id: "legal-justice",
    letter: "N",
    title: "Legal & Justice Rights",
    shortDescription: "Right to fair trial and equal justice",
    icon: "gavel",
    fullDescription: "Every person has the right to a fair and speedy trial under Article 21, legal representation, and presumption of innocence until proven guilty. Free legal aid is available for the poor, women, children, SC/ST, and others under the Legal Services Authorities Act. Protection from double jeopardy and self-incrimination is guaranteed. Right to appeal exists against every court order.",
    examples: [
      "Denial of bail despite eligibility",
      "Extremely delayed trial (case pending for years)",
      "Unable to afford a lawyer",
      "Wrongful conviction",
      "Coerced confession by police",
      "Harassment by court staff",
      "Non-execution of court orders"
    ],
    whatToDo: [
      "Apply for free legal aid at DLSA or SLSA",
      "File bail application in appropriate court",
      "Appeal to higher court against any order",
      "Approach Legal Services Authority for assistance",
      "File complaint against judicial delay with High Court",
      "Use eFiling and eCourts services for convenience",
      "Contact Lok Adalat for settlement of disputes"
    ],
    contacts: [
      { name: "Legal Services Authority", link: "https://nalsa.gov.in" },
      { name: "District Legal Services Authority", phone: "Contact district court" },
      { name: "High Court", link: "https://ecourts.gov.in" },
      { name: "Supreme Court of India", link: "https://main.sci.gov.in" }
    ],
    relatedLaws: [
      "Article 21, 22 - Constitution of India",
      "Legal Services Authorities Act, 1987",
      "Code of Criminal Procedure, 1973",
      "Code of Civil Procedure, 1908",
      "Indian Evidence Act, 1872",
      "Limitation Act, 1963"
    ],
    keyFacts: [
      "Free legal aid is a fundamental right for those who cannot afford",
      "Undertrial cannot be detained longer than half the maximum sentence",
      "Bail is the rule, jail is the exception - Supreme Court",
      "Lok Adalats provide free and fast dispute resolution",
      "Case status can be checked online at ecourts.gov.in"
    ],
    faqs: [
      {
        question: "How do I get free legal aid?",
        answer: "Visit your District Legal Services Authority (in district court complex) with income proof. If income is below the limit (varies by state), you'll get a free lawyer and court fees waiver."
      },
      {
        question: "How long can trial go on?",
        answer: "There's no fixed limit, but undue delay violates Article 21. You can petition High Court under Article 226 for direction to speed up trial."
      },
      {
        question: "What is Lok Adalat?",
        answer: "Lok Adalat is an alternative dispute resolution mechanism where cases are settled amicably. It's free, fast, and decisions are final (no appeal). Good for motor accident claims, bank recovery, matrimonial disputes etc."
      }
    ]
  },
  {
    id: "police-arrest",
    letter: "O",
    title: "Police & Arrest Rights",
    shortDescription: "Know your rights when dealing with police",
    icon: "shield",
    fullDescription: "Police must follow proper procedures during arrest as laid down in CrPC and DK Basu guidelines. You have the right to know the reason for arrest, inform family, access a lawyer, and be produced before magistrate within 24 hours. Protection from torture and custodial violence is guaranteed. Women can only be arrested by female officers and not between sunset and sunrise except in exceptional circumstances.",
    examples: [
      "Arrest without explaining grounds",
      "Custodial torture or violence",
      "Not informing family about arrest",
      "Denial of lawyer access",
      "Illegal detention beyond 24 hours",
      "Forcing confession through coercion",
      "Third degree methods by police"
    ],
    whatToDo: [
      "Demand to know reason for arrest clearly",
      "Ask police to inform family immediately (mandatory)",
      "Request to meet your lawyer",
      "Insist on medical examination at time of arrest",
      "File complaint with NHRC for torture",
      "Approach Judicial Magistrate immediately",
      "Note down badge numbers of police officers"
    ],
    contacts: [
      { name: "NHRC", link: "https://nhrc.nic.in" },
      { name: "Police", phone: "112" },
      { name: "Judicial Magistrate", phone: "Contact district court" },
      { name: "State Human Rights Commission", phone: "Contact state office" }
    ],
    relatedLaws: [
      "Code of Criminal Procedure, 1973 (Sections 41-60)",
      "DK Basu Guidelines (Supreme Court)",
      "Article 22 - Constitution of India",
      "Protection of Human Rights Act, 1993",
      "Prevention of Torture Bill (proposed)"
    ],
    keyFacts: [
      "Arrest memo must be prepared with date and time",
      "One family member must be informed immediately",
      "Medical examination is mandatory at time of arrest",
      "Handcuffing is not automatic - requires magistrate order",
      "Women cannot be arrested after sunset and before sunrise"
    ],
    faqs: [
      {
        question: "Can police arrest without a warrant?",
        answer: "Yes, for cognizable offenses (serious crimes). But even then, proper procedure must be followed - explaining grounds, informing family, medical examination, and production before magistrate within 24 hours."
      },
      {
        question: "What are my rights if arrested?",
        answer: "Right to know grounds of arrest, inform family, meet lawyer, medical examination, not be tortured, be produced before magistrate within 24 hours, and apply for bail."
      },
      {
        question: "What if police torture me?",
        answer: "File complaint with NHRC, State Human Rights Commission, or Judicial Magistrate. Custodial torture is a serious crime. Also get medical examination done and documented."
      }
    ]
  },
  {
    id: "political-voting",
    letter: "P",
    title: "Political & Voting Rights",
    shortDescription: "Your voice in democracy matters",
    icon: "vote",
    fullDescription: "Every citizen above 18 has the right to vote guaranteed by Article 326. Voting is free, fair, and by secret ballot. Right to contest elections (with some disqualifications), form political parties, and participate in political activities. Election Commission ensures free and fair elections. Protection from booth capturing, voter intimidation, and electoral malpractices. NOTA (None of the Above) option available.",
    examples: [
      "Name missing from voter list",
      "Denied voting at polling booth",
      "Electoral malpractice witnessed",
      "Booth capturing or violence",
      "Voter intimidation or bribery",
      "Not getting voter ID card",
      "Unable to vote due to work/travel"
    ],
    whatToDo: [
      "Apply for voter registration online at nvsp.in",
      "Report electoral violations to Election Commission",
      "Call voter helpline 1950 during elections",
      "File complaint with Returning Officer for malpractices",
      "Use cVIGIL app to report model code violations",
      "Apply for postal ballot if eligible",
      "Report missing name to BLO (Booth Level Officer)"
    ],
    contacts: [
      { name: "Election Commission of India", link: "https://eci.gov.in" },
      { name: "Voter Helpline", phone: "1950" },
      { name: "National Voters Service Portal", link: "https://voters.eci.gov.in" },
      { name: "cVIGIL App", link: "https://eci.gov.in/cvigil" }
    ],
    relatedLaws: [
      "Article 326 - Constitution of India",
      "Representation of the People Act, 1950 and 1951",
      "Conduct of Elections Rules, 1961",
      "Model Code of Conduct",
      "Election Symbols (Reservation and Allotment) Order, 1968"
    ],
    keyFacts: [
      "Voter ID is not mandatory - EPIC can be used for identity",
      "You can vote even if name is not in list with proper documents",
      "NOTA option allows you to reject all candidates",
      "Paid leave on voting day is mandatory for employees",
      "Electronic Voting Machines (EVMs) have VVPAT for verification"
    ],
    faqs: [
      {
        question: "How do I register as a voter?",
        answer: "Apply online at nvsp.in or voters.eci.gov.in using Form 6. You need proof of age, identity, and residence. You can also approach your BLO (Booth Level Officer)."
      },
      {
        question: "What if my name is not in the voter list?",
        answer: "You can still vote if you have valid identity documents and your name appears in the booth-specific voters' roll. Contact BLO to add your name."
      },
      {
        question: "Can I vote if I'm away from my registered location?",
        answer: "Currently, no remote voting for general voters. You need to vote at your registered polling booth. Postal ballot is available for armed forces, government servants on duty, and some other categories."
      }
    ]
  },
  {
    id: "rti",
    letter: "Q",
    title: "Information & Transparency",
    shortDescription: "Right to know what government does",
    icon: "file-search",
    fullDescription: "The Right to Information Act, 2005 allows citizens to access government records and documents. Public authorities must provide information within 30 days (48 hours for matters of life/liberty). Application fee is ₹10. First appeal lies with higher authority within 30 days, second appeal with Information Commission. RTI promotes transparency and accountability. Personal information and certain security-related information is exempt.",
    examples: [
      "Seeking information about government schemes you applied for",
      "Checking status of your pending application",
      "Getting copies of government records and files",
      "Knowing how public money is spent",
      "Accessing inspection reports of public facilities",
      "Getting information about government contracts",
      "Checking reasons for rejection of your application"
    ],
    whatToDo: [
      "File RTI application online at rtionline.gov.in or offline",
      "Pay ₹10 as application fee (BPL exempted)",
      "File first appeal within 30 days if denied or unsatisfied",
      "Approach Information Commission for second appeal",
      "Seek help from RTI activists and NGOs for guidance",
      "Be specific in your request for faster response",
      "Use RTI to enforce other rights and entitlements"
    ],
    contacts: [
      { name: "RTI Online Portal", link: "https://rtionline.gov.in" },
      { name: "Central Information Commission", link: "https://cic.gov.in" },
      { name: "State Information Commission", phone: "Contact state office" },
      { name: "Department of Personnel and Training", link: "https://dopt.gov.in" }
    ],
    relatedLaws: [
      "Right to Information Act, 2005",
      "RTI Rules, 2012",
      "Official Secrets Act, 1923 (exemptions)",
      "Public Records Act, 1993",
      "IT Act for digital records"
    ],
    keyFacts: [
      "RTI application fee is only ₹10",
      "Response must come within 30 days",
      "Life/liberty matters require response in 48 hours",
      "Penalty up to ₹25,000 for officers who wrongly deny information",
      "BPL card holders are exempted from fees"
    ],
    faqs: [
      {
        question: "What information can I not get under RTI?",
        answer: "Information affecting sovereignty/security, cabinet papers, personal information without public interest, trade secrets, privileged information, and information that would endanger life/safety."
      },
      {
        question: "Can I file RTI against private companies?",
        answer: "RTI applies only to public authorities. However, information held by government about private companies (contracts, compliance) can be obtained."
      },
      {
        question: "What if my RTI is denied?",
        answer: "File first appeal with the appellate authority within 30 days. If still denied, file second appeal with Central/State Information Commission within 90 days."
      }
    ]
  },
  {
    id: "digital-rights",
    letter: "R",
    title: "Digital & Online Rights",
    shortDescription: "Safety and privacy in the digital world",
    icon: "laptop",
    fullDescription: "Citizens have the right to digital privacy and protection from cyber crimes under the IT Act, 2000. Online harassment, identity theft, financial fraud, and hacking are punishable. Data protection principles apply through IT Rules and upcoming Data Protection Act. Right to be forgotten is emerging. Social media platforms have grievance mechanisms. Cyber crimes can be reported online 24/7.",
    examples: [
      "Online harassment, trolling, or cyberbullying",
      "Identity theft - misuse of your photos/information",
      "Financial fraud - UPI scam, card cloning",
      "Hacking of social media or email accounts",
      "Morphed images or non-consensual intimate images",
      "Online stalking and tracking",
      "Ransomware and malware attacks",
      "Fake profiles and impersonation"
    ],
    whatToDo: [
      "Report cyber crime immediately on cybercrime.gov.in",
      "File FIR at nearest Cyber Crime Cell",
      "Preserve all evidence - screenshots, URLs, messages",
      "Contact bank immediately for financial fraud (within golden hour)",
      "Report social media abuse to the platform",
      "Change passwords and enable 2-factor authentication",
      "Approach CERT-In for serious cyber security incidents"
    ],
    contacts: [
      { name: "Cyber Crime Portal", link: "https://cybercrime.gov.in" },
      { name: "Cyber Crime Helpline", phone: "1930" },
      { name: "CERT-In", link: "https://cert-in.org.in" },
      { name: "National Cyber Security Coordinator", link: "https://ncsc.gov.in" }
    ],
    relatedLaws: [
      "Information Technology Act, 2000",
      "IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
      "IT (Reasonable Security Practices and Procedures) Rules, 2011",
      "Digital Personal Data Protection Act, 2023",
      "Indian Penal Code (for cyber crimes)"
    ],
    keyFacts: [
      "Report financial fraud within 24 hours for better recovery chances",
      "Social media platforms must resolve complaints within 15 days",
      "Sharing intimate images without consent is punishable by 2 years jail",
      "Banks must credit wrongly debited amounts within 10 days",
      "Cyber crimes can be reported anonymously"
    ],
    faqs: [
      {
        question: "What to do if money was fraudulently debited?",
        answer: "Call bank immediately to block card/freeze account. Report on cybercrime.gov.in within 24 hours. File complaint with bank's nodal officer. If not resolved, approach Banking Ombudsman."
      },
      {
        question: "Can I get fake accounts impersonating me removed?",
        answer: "Yes, report to the platform directly - they must act within reasonable time. Also file cyber crime complaint. For persistent issues, approach court for injunction."
      },
      {
        question: "How to protect myself from cyber fraud?",
        answer: "Never share OTP/passwords, enable 2FA, don't click suspicious links, verify caller identity before sharing information, check URLs for authenticity, and keep devices updated."
      }
    ]
  },
  {
    id: "health",
    letter: "S",
    title: "Health & Medical Rights",
    shortDescription: "Right to healthcare and medical treatment",
    icon: "stethoscope",
    fullDescription: "Every person has the right to emergency medical treatment that cannot be denied by any hospital. The Clinical Establishments Act mandates standards for hospitals. Protection from medical negligence is available through consumer forums. Rights under clinical trials are protected. Generic medicines must be suggested. Mental health rights are protected under Mental Healthcare Act. Ayushman Bharat provides free treatment to 50 crore Indians.",
    examples: [
      "Denial of emergency treatment without payment",
      "Medical negligence causing harm",
      "Overcharging by hospitals",
      "Lack of informed consent before treatment",
      "Denial of insurance claim for treatment",
      "Not getting proper medical records",
      "Forced mental health treatment",
      "Denial of second opinion"
    ],
    whatToDo: [
      "Approach hospital administration for immediate issues",
      "File complaint with State Medical Council for negligence",
      "Report to Consumer Forum for overcharging",
      "Contact State Health Department for hospital violations",
      "File insurance complaint with IRDAI",
      "Use Ayushman Bharat helpline for scheme-related issues",
      "Approach Mental Health Review Board for mental health rights"
    ],
    contacts: [
      { name: "Health Helpline", phone: "104" },
      { name: "Ayushman Bharat", link: "https://pmjay.gov.in" },
      { name: "State Medical Council", phone: "Contact state office" },
      { name: "IRDAI Grievance", link: "https://igms.irda.gov.in" }
    ],
    relatedLaws: [
      "Clinical Establishments Act, 2010",
      "Consumer Protection Act, 2019",
      "Mental Healthcare Act, 2017",
      "Drugs and Cosmetics Act, 1940",
      "Medical Termination of Pregnancy Act, 1971",
      "Epidemic Diseases Act, 1897",
      "Transplantation of Human Organs Act, 1994"
    ],
    keyFacts: [
      "Emergency treatment cannot be denied - stabilize first, payment later",
      "Patient has right to complete medical records",
      "Doctors must inform about generic alternatives",
      "Insurance claim cannot be rejected for pre-existing disease after waiting period",
      "Mental Healthcare Act prohibits chaining of mentally ill persons"
    ],
    faqs: [
      {
        question: "Can hospital detain body for unpaid bills?",
        answer: "No, detaining dead bodies for unpaid bills is illegal. The body must be handed over. Hospitals can pursue recovery through legal means."
      },
      {
        question: "What is Ayushman Bharat eligibility?",
        answer: "Ayushman Bharat (PMJAY) covers approximately 10.74 crore poor and vulnerable families. Check eligibility on the PMJAY website using your ration card or SECC data."
      },
      {
        question: "How to file medical negligence complaint?",
        answer: "Gather all medical records, get expert opinion, file complaint with State Medical Council and Consumer Forum. Time limit is 2 years from knowledge of negligence."
      }
    ]
  },
  {
    id: "environment",
    letter: "T",
    title: "Environment & Public Welfare",
    shortDescription: "Right to clean environment",
    icon: "leaf",
    fullDescription: "The right to a clean and healthy environment is part of the right to life under Article 21. Citizens can challenge pollution and environmental degradation through courts and tribunals. The National Green Tribunal handles environmental cases exclusively. Public Interest Litigation can be filed for environmental protection. Access to clean air, water, and green spaces is a right.",
    examples: [
      "Industrial pollution in your area",
      "Illegal tree cutting or deforestation",
      "Water contamination from factories",
      "Excessive noise pollution",
      "Illegal waste dumping",
      "Construction on wetlands or forest land",
      "Air pollution from vehicles/industries"
    ],
    whatToDo: [
      "File complaint with Pollution Control Board",
      "Approach National Green Tribunal",
      "File PIL in High Court for widespread environmental issues",
      "Report to Forest Department for tree cutting/wildlife issues",
      "Contact Municipal Corporation for waste management issues",
      "Use SAMEER app to report air pollution",
      "Document pollution with photos, videos, and readings"
    ],
    contacts: [
      { name: "National Green Tribunal", link: "https://ngt.nic.in" },
      { name: "Central Pollution Control Board", link: "https://cpcb.nic.in" },
      { name: "Ministry of Environment", link: "https://moef.gov.in" },
      { name: "Wildlife Crime Control Bureau", link: "https://wccb.gov.in" }
    ],
    relatedLaws: [
      "Environment Protection Act, 1986",
      "Air (Prevention and Control of Pollution) Act, 1981",
      "Water (Prevention and Control of Pollution) Act, 1974",
      "National Green Tribunal Act, 2010",
      "Forest Conservation Act, 1980",
      "Wildlife Protection Act, 1972"
    ],
    keyFacts: [
      "NGT can impose heavy penalties on polluters",
      "Environmental clearance is mandatory for certain projects",
      "Courts have recognized rights of rivers and nature",
      "Polluter pays principle is established law",
      "NGT decisions can be implemented directly"
    ],
    faqs: [
      {
        question: "How to file a case in NGT?",
        answer: "File application with ₹1,000 fee (individuals) at regional NGT bench or online. You don't need a lawyer. Cases are disposed within 6 months."
      },
      {
        question: "What is PIL for environment?",
        answer: "Public Interest Litigation can be filed in High Court or Supreme Court for environmental issues affecting the public. You need to establish public interest, not just personal grievance."
      },
      {
        question: "Can I stop construction near my house?",
        answer: "If construction violates environmental norms, lacks clearances, or encroaches on public land, yes. File complaint with local authorities and approach NGT if needed."
      }
    ]
  },
  {
    id: "transport",
    letter: "U",
    title: "Transport & Travel Rights",
    shortDescription: "Rights as a passenger and traveler",
    icon: "car",
    fullDescription: "Passengers have rights to safe and fair transportation. The Motor Vehicles Act governs road transport. Overcharging by transport services is punishable. Rights in case of accident or injury include compensation from Insurance. Access to public transport without discrimination. Airlines and railways have passenger charters. Traffic violations can be challenged if wrongly issued.",
    examples: [
      "Overcharging by auto/taxi/aggregators",
      "Bus/train/air accident compensation",
      "Denied boarding by airlines",
      "Lost or damaged luggage",
      "Traffic challan disputes",
      "Refusal to provide transport service",
      "Flight delays and cancellations"
    ],
    whatToDo: [
      "Complain to Transport Authority for overcharging",
      "File claim with Motor Accident Claims Tribunal for accident compensation",
      "Approach Aviation Regulator (DGCA) for airline issues",
      "Challenge wrong challan in designated court",
      "Use NHAI helpline for highway issues",
      "File complaint on railway grievance portal",
      "Approach Consumer Forum for service deficiency"
    ],
    contacts: [
      { name: "Parivahan Portal", link: "https://parivahan.gov.in" },
      { name: "Railway Helpline", phone: "139" },
      { name: "Transport Authority", phone: "Contact state RTO" },
      { name: "DGCA (Aviation)", link: "https://dgca.gov.in" }
    ],
    relatedLaws: [
      "Motor Vehicles Act, 1988",
      "Railways Act, 1989",
      "Carriage by Air Act, 1972",
      "Metro Railways (Operation and Maintenance) Act, 2002",
      "DGCA Civil Aviation Requirements"
    ],
    keyFacts: [
      "E-challan can be paid online or challenged in court",
      "Airlines must compensate for denied boarding (₹up to 20,000)",
      "Railways must refund for delayed trains beyond certain limits",
      "Accident compensation is no-fault up to ₹2.5 lakhs",
      "Surge pricing by app-based taxis is regulated in some states"
    ],
    faqs: [
      {
        question: "What to do if I receive a wrong traffic challan?",
        answer: "You have 60 days to challenge. File representation with traffic police or approach the designated court. Collect evidence like CCTV footage or witnesses."
      },
      {
        question: "How to claim accident compensation?",
        answer: "File claim petition with Motor Accident Claims Tribunal within 6 months. Include medical bills, loss of income proof. You can claim from both insurance and owner."
      },
      {
        question: "What are my rights if flight is cancelled?",
        answer: "Airlines must offer full refund or alternate flight. If informed less than 24 hours before, compensation of ₹5,000-10,000 depending on flight length. Also entitled to meals and accommodation."
      }
    ]
  },
  {
    id: "taxation",
    letter: "V",
    title: "Taxation & Financial Rights",
    shortDescription: "Protection from unfair taxation",
    icon: "receipt",
    fullDescription: "Taxpayers have the right to fair assessment, appeal against orders, timely refunds, and confidentiality of information. The Taxpayer's Charter outlines rights and expectations. Protection from harassment by tax authorities is available through multiple levels of appeal. GST has streamlined indirect taxes. Senior citizens and disabled persons get additional exemptions.",
    examples: [
      "Wrong tax assessment or demand",
      "Delay in refund processing",
      "Harassment by tax officials",
      "GST registration or compliance issues",
      "TDS not credited to your account",
      "Wrong penalty imposed",
      "Tax deducted on exempt income"
    ],
    whatToDo: [
      "File appeal with Commissioner (Appeals) against assessment orders",
      "Use Income Tax e-Nivaran portal for grievances",
      "Approach Income Tax Ombudsman for unresolved issues",
      "File complaint against harassment with Chief Commissioner",
      "Use GST grievance portal for GST issues",
      "Approach Appellate Tribunal for final appeal",
      "Seek professional help from tax consultant"
    ],
    contacts: [
      { name: "Income Tax Grievance Portal", link: "https://e-nivaran.incometax.gov.in" },
      { name: "GST Portal", link: "https://gst.gov.in" },
      { name: "Income Tax Ombudsman", phone: "Contact regional office" },
      { name: "CBDT", link: "https://incometaxindia.gov.in" }
    ],
    relatedLaws: [
      "Income Tax Act, 1961",
      "Central Goods and Services Tax Act, 2017",
      "Taxpayer's Charter",
      "Customs Act, 1962",
      "Finance Act (Annual)"
    ],
    keyFacts: [
      "Tax refund due within 9 months of filing with interest",
      "You can file revised return within 2 years",
      "E-assessment has reduced physical interface",
      "Ombudsman resolves issues within 45 days",
      "Senior citizens have higher exemption limits and no advance tax"
    ],
    faqs: [
      {
        question: "What if I receive a wrong tax demand?",
        answer: "Respond within the given time with proper explanation and documents. If not satisfied with outcome, file appeal with CIT(Appeals) within 30 days of the order."
      },
      {
        question: "Why is my refund delayed?",
        answer: "Check status on income tax portal. If pending beyond 9 months, file grievance on e-Nivaran. Ensure bank account is validated and linked to PAN."
      },
      {
        question: "Can tax officials search my house?",
        answer: "Search requires authorization from Principal Director or Director. You have rights during search: make inventory, have witness present, not be detained unnecessarily."
      }
    ]
  },
  {
    id: "emergency",
    letter: "W",
    title: "Emergency & Crisis Situations",
    shortDescription: "Rights during disasters and emergencies",
    icon: "alert-triangle",
    fullDescription: "During disasters and emergencies, citizens have the right to relief, rehabilitation, and compensation under the Disaster Management Act, 2005. Government must provide food, shelter, and medical aid. Protection from exploitation during crisis. Right to accurate information during emergencies. NDRF provides rescue and relief. States have disaster response funds for immediate relief.",
    examples: [
      "Natural disasters - floods, earthquakes, cyclones",
      "Pandemic situations and health emergencies",
      "Man-made disasters - industrial accidents",
      "Displacement and forced evacuation",
      "Emergency medical situations",
      "Fire and building collapse",
      "Chemical or nuclear emergencies"
    ],
    whatToDo: [
      "Contact District Administration immediately",
      "Call emergency services 112 or 108",
      "Register for relief at designated centers",
      "Document losses for compensation claims",
      "Contact NHRC if rights violated during emergency",
      "Use state disaster helplines for local assistance",
      "Keep emergency kit and documents ready"
    ],
    contacts: [
      { name: "National Emergency Number", phone: "112" },
      { name: "Disaster Management Helpline", phone: "1078" },
      { name: "NDMA", link: "https://ndma.gov.in" },
      { name: "NDRF", link: "https://ndrf.gov.in" }
    ],
    relatedLaws: [
      "Disaster Management Act, 2005",
      "Epidemic Diseases Act, 1897",
      "National Disaster Management Authority Guidelines",
      "State Disaster Response Fund Rules",
      "Public Liability Insurance Act, 1991"
    ],
    keyFacts: [
      "Ex-gratia payment is immediate assistance, not full compensation",
      "Relief centers must provide basic amenities",
      "Hoarding and black marketing during disaster is punishable",
      "Spreading false information during disaster is criminal offense",
      "Insurance claims expedited during notified disasters"
    ],
    faqs: [
      {
        question: "What compensation can I get for disaster losses?",
        answer: "SDRF/NDRF provides ex-gratia assistance: death - ₹4 lakhs, injury - up to ₹2 lakhs, house damage - up to ₹1.3 lakhs. Amounts vary by state and disaster type."
      },
      {
        question: "Can government take my property during emergency?",
        answer: "Yes, for relief operations under Disaster Management Act. But fair compensation must be paid. It should be returned after emergency if possible."
      },
      {
        question: "How to prepare for disasters?",
        answer: "Know local hazards, prepare emergency kit (water, food, medicine, documents), make family emergency plan, stay informed through official channels, know evacuation routes."
      }
    ]
  },
  {
    id: "corruption",
    letter: "X",
    title: "Ethical Issues & Corruption",
    shortDescription: "Report corruption and protect whistleblowers",
    icon: "eye",
    fullDescription: "Citizens have the right and duty to report corruption and unethical practices. The Prevention of Corruption Act makes bribery and corruption by public servants a serious offense. Whistleblower protection is provided under the Whistle Blowers Protection Act, 2014. Anti-corruption bodies like CVC and Lokpal investigate complaints. You have the right to refuse bribe demands.",
    examples: [
      "Bribe demand by government officials",
      "Government contract fraud or kickbacks",
      "Misuse of public funds",
      "Corruption in public services - ration, pension",
      "Witness tampering or pressure",
      "Disproportionate assets of public servants",
      "Nepotism in government appointments"
    ],
    whatToDo: [
      "Report to Anti-Corruption Bureau or CBI directly",
      "File complaint with Central Vigilance Commission",
      "Use CPGRAMS portal for online complaints",
      "Gather evidence before reporting (but don't do sting without help)",
      "Seek whistleblower protection if you're an insider",
      "Contact Lokpal for complaints against high officials",
      "Use RTI to expose corruption"
    ],
    contacts: [
      { name: "Central Vigilance Commission", link: "https://cvc.gov.in" },
      { name: "CBI", link: "https://cbi.gov.in" },
      { name: "CPGRAMS Portal", link: "https://pgportal.gov.in" },
      { name: "Lokpal of India", link: "https://lokpal.gov.in" }
    ],
    relatedLaws: [
      "Prevention of Corruption Act, 1988",
      "Whistle Blowers Protection Act, 2014",
      "Lokpal and Lokayuktas Act, 2013",
      "Central Vigilance Commission Act, 2003",
      "Right to Information Act, 2005"
    ],
    keyFacts: [
      "Both bribe giver and taker can be prosecuted",
      "Coerced bribe payment is not punishable if reported within 7 days",
      "Whistleblowers get protection from victimization",
      "Anonymous complaints are also investigated if specific",
      "Public servants must declare assets annually"
    ],
    faqs: [
      {
        question: "What if official asks for bribe?",
        answer: "You can refuse and report to ACB/CBI. If you pay under coercion, report within 7 days - you won't be prosecuted. Never try to do sting operation on your own."
      },
      {
        question: "Can I complain anonymously?",
        answer: "Yes, anonymous complaints are accepted if they contain specific and verifiable information. However, named complaints are more likely to be acted upon."
      },
      {
        question: "What is whistleblower protection?",
        answer: "Under the Act, whistleblowers are protected from victimization. Competent Authority can direct protection of identity, safeguard against termination, and provide security."
      }
    ]
  },
  {
    id: "duties",
    letter: "Y",
    title: "Duties & Responsibilities",
    shortDescription: "Understand your duties as a citizen",
    icon: "flag",
    fullDescription: "Article 51A of the Constitution prescribes 11 Fundamental Duties for citizens. These include respecting the Constitution and national symbols, protecting sovereignty, promoting harmony, preserving heritage, protecting environment, developing scientific temper, safeguarding public property, and striving for excellence. While not legally enforceable generally, they are moral obligations and courts consider them.",
    examples: [
      "Respecting the Constitution, flag, and national anthem",
      "Protecting public property and national heritage",
      "Paying taxes honestly and on time",
      "Voting responsibly in elections",
      "Protecting environment and wildlife",
      "Promoting harmony across communities",
      "Defending the country if called upon"
    ],
    whatToDo: [
      "If duties are misused against you, seek legal help immediately",
      "Approach Legal Services Authority for guidance",
      "File complaint if forced to perform unlawful acts in name of duty",
      "Report misuse of authority to appropriate forum",
      "Know that duties cannot override your fundamental rights",
      "Participate in civic activities and community service",
      "Lead by example in following duties"
    ],
    contacts: [
      { name: "Legal Services Authority", link: "https://nalsa.gov.in" },
      { name: "NHRC", link: "https://nhrc.nic.in" },
      { name: "District Administration", phone: "Contact local office" },
      { name: "High Court", link: "https://ecourts.gov.in" }
    ],
    relatedLaws: [
      "Article 51A - Constitution of India",
      "Prevention of Insults to National Honour Act, 1971",
      "Environment Protection Act, 1986",
      "Prevention of Damage to Public Property Act, 1984"
    ],
    keyFacts: [
      "Fundamental Duties were added by 42nd Amendment in 1976",
      "There are 11 Fundamental Duties currently",
      "Duties are not directly enforceable but courts consider them",
      "Duties help in interpreting fundamental rights",
      "Some duties have separate penal laws (insult to national flag)"
    ],
    faqs: [
      {
        question: "Can I be punished for not following Fundamental Duties?",
        answer: "Fundamental Duties are not directly enforceable. However, some duties like respecting national symbols have separate laws with penalties. Duties serve as moral guidelines."
      },
      {
        question: "Can duties override my rights?",
        answer: "No, Fundamental Rights take precedence. Duties cannot be used to violate your rights. If someone forces you citing duty, seek legal recourse."
      },
      {
        question: "What is the duty regarding national anthem?",
        answer: "When National Anthem is played in a cinema or gathering, standing is expected as mark of respect. Not singing is not punishable, but disrespecting is punishable under law."
      }
    ]
  },
  {
    id: "death-rights",
    letter: "Z",
    title: "Death & Post-Death Rights",
    shortDescription: "Dignity in death and inheritance rights",
    icon: "scroll",
    fullDescription: "Every person has the right to die with dignity and have proper last rites according to their faith. Legal heirs have inheritance rights under succession laws. Death certificates are essential for legal procedures. Insurance and pension claims must be processed. Will registration is advisable but not mandatory. Different personal laws govern succession for different communities.",
    examples: [
      "Obtaining death certificate from authorities",
      "Processing insurance claim after death",
      "Inheritance and succession disputes",
      "Pension and gratuity claims for dependents",
      "Disputes over will or testament",
      "Property transfer to legal heirs",
      "Nominee vs legal heir conflicts"
    ],
    whatToDo: [
      "Apply for death certificate at Municipal/Panchayat office within 21 days",
      "File insurance claim with all required documents",
      "Approach Civil Court for succession certificate",
      "Contact deceased's employer for pension/benefits",
      "Register will with Sub-Registrar (if making one)",
      "Seek legal help for inheritance disputes",
      "Apply for legal heir certificate from Tehsildar"
    ],
    contacts: [
      { name: "Municipal Corporation", phone: "Contact local office" },
      { name: "Civil Court", link: "https://ecourts.gov.in" },
      { name: "Insurance Ombudsman", link: "https://igms.irda.gov.in" },
      { name: "Tehsildar/SDM Office", phone: "Contact local revenue office" }
    ],
    relatedLaws: [
      "Hindu Succession Act, 1956",
      "Indian Succession Act, 1925",
      "Muslim Personal Law (Shariat) Application Act, 1937",
      "Registration of Births and Deaths Act, 1969",
      "Insurance Act, 1938",
      "Transplantation of Human Organs Act, 1994"
    ],
    keyFacts: [
      "Death must be registered within 21 days",
      "Nominee is only custodian - legal heirs have actual right",
      "Succession certificate needed for movable property",
      "Will can be registered but registration is not mandatory",
      "Organ donation can be done with family consent"
    ],
    faqs: [
      {
        question: "How to transfer property of deceased without will?",
        answer: "Get death certificate and legal heir certificate. File for succession certificate (movable) or letters of administration (immovable) in Civil Court. Property will be divided as per applicable succession law."
      },
      {
        question: "Is nominee the owner of insurance money?",
        answer: "No, nominee is only a custodian. Legal heirs have the right to claim the amount. Nominee must hand over the money to legal heirs unless they are the same person."
      },
      {
        question: "Can I donate organs of deceased family member?",
        answer: "Yes, family members can give consent for organ donation after brain death. Contact hospital's transplant coordinator. Registration as organ donor is advisable."
      }
    ]
  }
];

export const emergencyContacts = [
  { name: "National Emergency", number: "112", description: "For all emergencies - police, fire, ambulance" },
  { name: "Women Helpline", number: "181", description: "For women in distress - 24/7" },
  { name: "Child Helpline", number: "1098", description: "For children in need - 24/7" },
  { name: "Senior Citizen Helpline", number: "14567", description: "For elderly assistance" },
  { name: "Cyber Crime Helpline", number: "1930", description: "Report cyber crimes and online fraud" },
  { name: "Health Helpline", number: "104", description: "Medical emergencies and health queries" },
  { name: "Ambulance", number: "108", description: "Emergency ambulance services" },
  { name: "Disaster Management", number: "1078", description: "During natural disasters" },
  { name: "Railway Helpline", number: "139", description: "Railway assistance and complaints" },
  { name: "Road Accident Helpline", number: "1073", description: "Road emergencies and accidents" },
  { name: "Voter Helpline", number: "1950", description: "Election and voting queries" },
  { name: "Anti-Corruption Helpline", number: "1031", description: "Report corruption to CBI" },
  { name: "Tourist Helpline", number: "1363", description: "Tourist assistance and safety" },
  { name: "Mental Health Helpline", number: "08046110007", description: "NIMHANS - mental health support" }
];

export const legalGlossary = [
  { term: "FIR", fullForm: "First Information Report", definition: "A written document prepared by police when they receive information about a cognizable offense." },
  { term: "PIL", fullForm: "Public Interest Litigation", definition: "A legal action initiated in a court of law for the enforcement of public interest." },
  { term: "RTI", fullForm: "Right to Information", definition: "Act that allows citizens to request information from public authorities." },
  { term: "Habeas Corpus", fullForm: "Latin: You have the body", definition: "A writ requiring a person under arrest to be brought before a court to secure their release unless lawful grounds are shown." },
  { term: "Cognizable Offense", fullForm: "", definition: "An offense where police can arrest without warrant and start investigation without court permission." },
  { term: "Non-cognizable Offense", fullForm: "", definition: "An offense where police cannot arrest without warrant and need court permission to investigate." },
  { term: "Bail", fullForm: "", definition: "Temporary release of an accused person awaiting trial, sometimes on condition of providing security." },
  { term: "Anticipatory Bail", fullForm: "", definition: "Bail granted in anticipation of arrest, protecting the person from being taken into custody." },
  { term: "Magistrate", fullForm: "", definition: "A civil officer who administers the law, especially one who conducts a court that deals with minor offenses." },
  { term: "Affidavit", fullForm: "", definition: "A written statement confirmed by oath for use as evidence in court." },
  { term: "Writ", fullForm: "", definition: "A form of written command issued by a court to act or abstain from acting in some way." },
  { term: "Injunction", fullForm: "", definition: "A court order requiring a person to do or stop doing a specific action." },
  { term: "Lok Adalat", fullForm: "People's Court", definition: "Alternative dispute resolution mechanism where cases are settled amicably. Decisions are final." },
  { term: "NALSA", fullForm: "National Legal Services Authority", definition: "Provides free legal services to weaker sections of society." },
  { term: "NHRC", fullForm: "National Human Rights Commission", definition: "Statutory body responsible for the protection of human rights in India." },
  { term: "NCW", fullForm: "National Commission for Women", definition: "Statutory body examining matters relating to safeguards for women." },
  { term: "NCPCR", fullForm: "National Commission for Protection of Child Rights", definition: "Statutory body to protect child rights." },
  { term: "CrPC", fullForm: "Code of Criminal Procedure", definition: "Main legislation on procedure for administration of criminal law in India." },
  { term: "IPC", fullForm: "Indian Penal Code", definition: "Main criminal code of India that covers all substantive aspects of criminal law." },
  { term: "Consumer Forum", fullForm: "", definition: "Quasi-judicial body to resolve consumer disputes at district, state, and national levels." }
];

export const knowYourRightsQuickFacts = [
  "You cannot be arrested without being told the reason",
  "You have the right to make one phone call upon arrest",
  "Police cannot enter your home after sunset without a warrant",
  "No one can be detained in custody for more than 24 hours without being produced before a magistrate",
  "Free legal aid is your fundamental right if you cannot afford a lawyer",
  "Emergency medical treatment cannot be refused by any hospital",
  "Your Aadhaar data cannot be shared without your consent",
  "You can file an RTI asking any public authority about any information",
  "Consumer complaints can be filed online from your home",
  "Women have equal right to ancestral property as sons",
  "Child labor is completely banned for children under 14 years",
  "Every workplace with 10+ employees must have a committee against sexual harassment",
  "You can vote even if your name is not in the electoral roll",
  "Whistleblowers are protected by law from victimization",
  "You have the right to die with dignity",
  "Lok Adalat settles disputes free of cost with no appeal",
  "You can challenge any traffic challan within 60 days",
  "Mental illness cannot be ground for discrimination in employment",
  "Senior citizens must get priority in medical treatment",
  "You can donate organs to save lives even after death"
];
