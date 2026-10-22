import type {
  CapabilityItem,
  Differentiator,
  FaqItem,
  IndustrySector,
  NavItem,
  ProcessStep,
  ServiceItem,
} from '../types'

export const COMPANY_INFO = {
  legalNameVi: 'BrandShield Vietnam Co., Ltd',
  legalNameEn: 'BrandShield Vietnam Co., Ltd',
  legalName: 'BrandShield Vietnam Co., Ltd',
  tradingName: 'BrandShield Vietnam',
  taxId: '0319263557',
  registrationNumber: 'Tax ID / ERC: 0319263557 (Ho Chi Minh City)',
  registeredAddress: '14th Floor, HM Town Building, 412 Nguyen Thi Minh Khai, Ban Co Ward, Ho Chi Minh City, Vietnam',
  registrationDate: 'Registered Enterprise in Ho Chi Minh City',
  headquarters: '14th Floor, HM Town Building, 412 Nguyen Thi Minh Khai, Ban Co Ward, Ho Chi Minh City, Vietnam',
  contactEmail: 'info@brandshieldvietnam.com',
  inquiriesEmail: 'info@brandshieldvietnam.com',
  contactPhone: '+84 932 094 186',
  workingHours: 'Monday – Friday, 08:30 – 18:00 (ICT / UTC+7)',
  g2Rank: '#1 Online Brand Protection on G2 Grid',
  csat: '96.7%',
  yearlyTakedowns: '1.5M+',
  investigationCenter: 'Digital Risk Investigation Hub — Ho Chi Minh City, Vietnam',
  jurisdictionNotice:
    'BrandShield Vietnam Co., Ltd is an external cybersecurity and online brand protection enterprise incorporated in Vietnam (Tax ID / ERC: 0319263557), operating a dedicated Digital Risk Investigation Hub in Ho Chi Minh City alongside a global IP enforcement network.',
}

export const NAV_ITEMS_VI: NavItem[] = [
  { label: 'Giải pháp', href: '#solutions' },
  { label: 'Công nghệ AI.ClusterX™', href: '#pipeline' },
  { label: 'Ngành hàng', href: '#industries' },
  { label: 'Trung tâm Vận hành VN', href: '#vietnam-hub' },
  { label: 'Lộ trình ROI', href: '#roi-timeline' },
  { label: 'Quét thử thương hiệu', href: '#brand-scanner' },
]

export const NAV_ITEMS_EN: NavItem[] = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'AI.ClusterX™ Tech', href: '#pipeline' },
  { label: 'Industries', href: '#industries' },
  { label: 'Vietnam Hub', href: '#vietnam-hub' },
  { label: 'ROI Timeline', href: '#roi-timeline' },
  { label: 'Brand Scanner', href: '#brand-scanner' },
]

// 6 Core Solutions with full details for Section 4
export interface FullSpectrumSolution {
  id: string
  titleVi: string
  titleEn: string
  tag: string
  badgeColor: string
  shortDescVi: string
  shortDescEn: string
  keyFeaturesVi: string[]
  keyFeaturesEn: string[]
  mockupData: {
    title: string
    status: string
    riskScore: string
    items: {
      source: string
      indicator: string
      status: string
      threatType: string
    }[]
  }
}

export const FULL_SOLUTIONS: FullSpectrumSolution[] = [
  {
    id: 'anti-phishing',
    titleVi: 'Chống Phishing & Web Giả Mạo',
    titleEn: 'Anti-Phishing & Fake Website Defense',
    tag: 'Cyber Defense',
    badgeColor: 'rose',
    shortDescVi:
      'Phát hiện sớm các trang web giả mạo giao diện, tên miền typosquatting (.vn, .com.vn, .shop, .click), lừa đảo tài chính và đánh cắp tài khoản người dùng.',
    shortDescEn:
      'Early detection and rapid takedown of lookalike web domains, typosquatting, fraudulent banking portals, and phishing attacks before credential compromise.',
    keyFeaturesVi: [
      'Quét phát hiện chứng chỉ SSL giả lập và tên miền lừa đảo mới đăng ký trong 24h',
      'Công nghệ Website Duplication Detector so sánh 99.1% độ trùng khớp giao diện',
      'Chặn tức thì trên Google Safe Browsing, Microsoft Defender và DNS Abuse Desks',
    ],
    keyFeaturesEn: [
      'Scans lookalike domains & rogue SSL certificates registered within 24h',
      'Website Duplication Detector matching 99.1% visual & code clones',
      'Immediate blacklisting on Google Safe Browsing and major DNS registrars',
    ],
    mockupData: {
      title: 'Active Phishing Cluster Scanner',
      status: 'CRITICAL THREAT DETECTED',
      riskScore: '9.9 / 10',
      items: [
        {
          source: 'vietcombank-ebanking-login.shop',
          indicator: 'Credential Harvesting + OTP Hijack',
          status: 'Takedown Initiated',
          threatType: 'Phishing 9.9',
        },
        {
          source: 'techcombank-online-xacthuc.click',
          indicator: 'VietQR Spoofing + Fake Auth',
          status: 'DNS Blacklisted',
          threatType: 'Phishing 9.7',
        },
        {
          source: 'secure-brand-portal-verify.net',
          indicator: 'Corporate SSO Clone',
          status: 'Registrar Suspended',
          threatType: 'Impersonation 9.4',
        },
      ],
    },
  },
  {
    id: 'marketplace-counterfeit',
    titleVi: 'Bảo Vệ Sàn TMĐT & Chống Hàng Giả',
    titleEn: 'Marketplace Protection & Anti-Counterfeit',
    tag: 'E-Commerce Shield',
    badgeColor: 'sky',
    shortDescVi:
      'Giám sát liên tục 24/7 trên Shopee, Lazada, TikTok Shop, Tiki và Amazon. Phát hiện gian hàng vi phạm sở hữu trí tuệ, bán hàng nhái với giá thấp bất thường.',
    shortDescEn:
      'Continuous 24/7 surveillance across Shopee VN, Lazada, TikTok Shop, Tiki, and global marketplaces detecting counterfeit listings, price dumping, and IP abuse.',
    keyFeaturesVi: [
      'AI nhận diện hình ảnh phát hiện logo bị làm mờ, biến tấu hoặc cắt ghép trái phép',
      'Phân tích chênh lệch giá (discount > 70% so với niêm yết chính hãng)',
      'Gom cụm hàng chục gian hàng ảo về cùng một đầu mối kho hàng qua AI.ClusterX™',
    ],
    keyFeaturesEn: [
      'Visual AI identifying blurred, modified, or stolen proprietary product photos',
      'Abnormal pricing disparity alerts (> 70% below official MSRP)',
      'Clusters dozens of ghost merchant stores to single warehouse networks',
    ],
    mockupData: {
      title: 'Shopee & TikTok Shop Enforcement Feed',
      status: 'ACTIVE CLUSTER MONITORING',
      riskScore: '8.9 / 10',
      items: [
        {
          source: 'Shopee VN / Shop_HangHieu_GiaRe_SG',
          indicator: 'Counterfeit Class 18 Luxury Handbags (-82% MSRP)',
          status: 'Listing Removed',
          threatType: 'Counterfeit 9.2',
        },
        {
          source: 'TikTok Shop / LiveStream_KhoTong_VN',
          indicator: 'Unauthorized Brand Badge + Replica Cosmetics',
          status: 'Account Restricted',
          threatType: 'IP Infringement 8.8',
        },
        {
          source: 'Lazada VN / TongKho_PhuKien_HN',
          indicator: 'Fake Charger/Battery OEM Clone',
          status: 'Store Delisted',
          threatType: 'Safety Hazard 9.5',
        },
      ],
    },
  },
  {
    id: 'executive-impersonation',
    titleVi: 'Chống Mạo Danh Thương Hiệu & Lãnh Đạo',
    titleEn: 'Brand & Executive Impersonation Defense',
    tag: 'Identity Defense',
    badgeColor: 'amber',
    shortDescVi:
      'Triệt phá tài khoản Facebook, Zalo, Telegram giả mạo CEO/Lãnh đạo cấp cao hoặc fanpage tích xanh giả chạy sự kiện trúng thưởng, tuyển dụng lừa đảo.',
    shortDescEn:
      'Eliminate fake Facebook, Zalo, Telegram accounts impersonating executives or deceptive verified fanpages running fraudulent giveaways and recruitment scams.',
    keyFeaturesVi: [
      'Quét nhận diện khuôn mặt và tên lãnh đạo trên mạng xã hội và diễn đàn',
      'Phát hiện các nhóm Telegram/Zalo tài chính lừa đảo gắn logo thương hiệu',
      'Đường dây nóng xử lý ưu tiên với Meta, TikTok, Telegram và Google',
    ],
    keyFeaturesEn: [
      'Facial recognition and executive name surveillance across social platforms',
      'Discovery of fraudulent Telegram/Zalo investment groups using stolen logos',
      'High-priority triage with Meta, TikTok, Telegram, and Google abuse desks',
    ],
    mockupData: {
      title: 'Social Identity Abuse Queue',
      status: 'HIGH-PRIORITY ESCALATION',
      riskScore: '9.4 / 10',
      items: [
        {
          source: 'Facebook / [Fanpage Giả] CSKH Tập Đoàn BrandShield VN',
          indicator: 'Running Paid Scam Ads + Requesting OTP Transfer',
          status: 'Page Deactivated',
          threatType: 'Impersonation 9.6',
        },
        {
          source: 'Telegram Group / HoiDauTu_ChungKhoan_VIP',
          indicator: 'Unauthorized Usage of CEO Avatar & Corporate Brand',
          status: 'Reported to CERT',
          threatType: 'Financial Scam 9.5',
        },
        {
          source: 'Zalo OA / TuyenDung_NhanSu_BrandOfficial',
          indicator: 'Fake Recruitment Deposit Fee Scam',
          status: 'Account Banned',
          threatType: 'Social Abuse 9.1',
        },
      ],
    },
  },
  {
    id: 'paid-ad-scams',
    titleVi: 'Chặn Quảng Cáo Lừa Đảo (Paid Ad Scams)',
    titleEn: 'Paid Search & Social Ad Hijacking Defense',
    tag: 'Ad Protection',
    badgeColor: 'emerald',
    shortDescVi:
      'Phát hiện và ngăn chặn đối thủ hoặc kẻ lừa đảo đấu thầu từ khóa thương hiệu trên Google Ads / Meta Ads để dẫn người dùng vào trang thanh toán độc hại.',
    shortDescEn:
      'Detect and take down malicious Google Ads and sponsored social posts bidding on your brand keywords to redirect customers to phishing landing pages.',
    keyFeaturesVi: [
      'Quét liên tục vị trí số 1 trên Google Search Ads cho mọi từ khóa thương hiệu',
      'Bắt quả tang kỹ thuật Cloaking (hiển thị trang sạch cho Google nhưng trang lừa đảo cho người dùng)',
      'Gửi thông báo vi phạm bản quyền trực tiếp vào hệ thống Google Ads Compliance',
    ],
    keyFeaturesEn: [
      'Continuous scanning of #1 sponsored positions on Google Search Ads',
      'Uncovers ad cloaking techniques deceiving search review bots',
      'Automated evidence filing directly with Google Ads Compliance and Meta',
    ],
    mockupData: {
      title: 'Google Ads & Meta Sponsored Audit',
      status: 'CLOAKING DETECTED',
      riskScore: '9.6 / 10',
      items: [
        {
          source: 'Google Search Ad / "Dang Nhap Internet Banking Brand"',
          indicator: 'Cloaked redirect to phishing domain on mobile devices',
          status: 'Ad Campaign Suspended',
          threatType: 'Ad Hijacking 9.8',
        },
        {
          source: 'Meta Sponsored Ad / "Sale Khung 80% Hom Nay"',
          indicator: 'Bypassing ad review via dynamic JavaScript redirect',
          status: 'Ad Account Banned',
          threatType: 'Malvertising 9.3',
        },
      ],
    },
  },
  {
    id: 'rogue-apps',
    titleVi: 'Giám Sát Ứng Dụng Giả Mạo (Rogue Apps)',
    titleEn: 'Rogue App & APK Malware Surveillance',
    tag: 'Mobile Security',
    badgeColor: 'sky',
    shortDescVi:
      'Phát hiện file APK chứa mã độc đánh cắp tiền ngân hàng và ứng dụng nhái giao diện trên Google Play, App Store và các kho ứng dụng thứ ba tại Việt Nam.',
    shortDescEn:
      'Track malicious APK clones, trojanized mobile applications, and unauthorized app listings across Google Play, App Store, and third-party Vietnamese APK repos.',
    keyFeaturesVi: [
      'Phân tích mã nguồn file APK phát hiện hành vi đọc trộm SMS, OTP và điều khiển từ xa',
      'Giám sát các đường link tải ứng dụng giả mạo gửi qua tin nhắn SMS Brandname lừa đảo',
      'Phối hợp với Cục An toàn Thông tin (A05 / VNCERT) để chặn tên miền phân phối mã độc',
    ],
    keyFeaturesEn: [
      'Static APK decompilation detecting SMS/OTP interceptors and remote RATs',
      'Surveillance of rogue app download links distributed via SMS spoofing',
      'Coordinated takedown with national CERTs and app repository administrators',
    ],
    mockupData: {
      title: 'Mobile App Store & APK Repository Feed',
      status: 'MALICIOUS APK NEUTRALIZED',
      riskScore: '9.9 / 10',
      items: [
        {
          source: 'Direct APK Link / dichvucong-xacthuc-vn.apk',
          indicator: 'Banking Trojan + Accessibility Service Hijack',
          status: 'Host Blocked',
          threatType: 'Trojan/Malware 9.9',
        },
        {
          source: 'Third-Party App Market / BrandFinance-VIP.apk',
          indicator: 'Data Exfiltration to Overseas Command & Control IP',
          status: 'Repository Removed',
          threatType: 'Spyware 9.8',
        },
      ],
    },
  },
  {
    id: 'domain-ai-platforms',
    titleVi: 'Bảo Vệ Tên Miền & Nền Tảng AI',
    titleEn: 'Domain Portfolio & AI Search Brand Defense',
    tag: 'Domain & AI Presence',
    badgeColor: 'teal',
    shortDescVi:
      'Quản lý danh mục tên miền phái sinh, ngăn chặn đầu cơ thương hiệu và kiểm soát độ chính xác của thương hiệu trên các công cụ tìm kiếm trí tuệ nhân tạo (ChatGPT, Perplexity, Gemini).',
    shortDescEn:
      'Comprehensive defense for typosquatting domains, brand squatting, and protecting corporate reputation across generative AI search platforms.',
    keyFeaturesVi: [
      'Quét hơn 1,500 đuôi tên miền quốc tế và tên miền quốc gia cấp cao (.vn, .com.vn)',
      'Phân tích câu trả lời của AI Search để phát hiện thông tin sai lệch hoặc link lừa đảo',
      'Thu hồi tên miền vi phạm qua thủ tục UDRP và hòa giải tranh chấp tên miền tại Việt Nam',
    ],
    keyFeaturesEn: [
      'Monitors 1,500+ gTLDs and ccTLDs (.vn, .com.vn) for unauthorized registrations',
      'Audits AI search models for brand hallucination or malicious link citations',
      'UDRP dispute filing and administrative domain recovery proceedings',
    ],
    mockupData: {
      title: 'Domain Perimeter & AI Knowledge Audit',
      status: 'PERIMETER SECURED',
      riskScore: '7.8 / 10',
      items: [
        {
          source: 'brandshield-vietnam.com.vn',
          indicator: 'Registered by Cybersquatter with monetization parked page',
          status: 'UDRP Initiated',
          threatType: 'Domain Squatting 8.5',
        },
        {
          source: 'Perplexity AI Search Citation',
          indicator: 'Scraped unauthorized distributor phone number as official support',
          status: 'Correction Submitted',
          threatType: 'AI Citation Error 7.2',
        },
      ],
    },
  },
]

// 6 Industry Matrices for Section 5
export interface IndustryMatrixItem {
  id: string
  nameVi: string
  nameEn: string
  commonThreatsVi: string
  commonThreatsEn: string
  topChannelsVi: string
  topChannelsEn: string
  activatedSolutionVi: string
  activatedSolutionEn: string
  realOutcomeVi: string
  realOutcomeEn: string
}

export const INDUSTRY_MATRICES: IndustryMatrixItem[] = [
  {
    id: 'banking-fintech',
    nameVi: 'Tài Chính, Ngân Hàng & Fintech',
    nameEn: 'Banking, Finance & Fintech',
    commonThreatsVi: 'Web lừa đảo OTP, giả mạo ứng dụng ngân hàng số, tin nhắn SMS Brandname giả, tài khoản Zalo/Telegram đầu tư ảo.',
    commonThreatsEn: 'Phishing login portals, banking trojan APKs, spoofed SMS brandnames, fraudulent investment chat groups.',
    topChannelsVi: 'Tên miền .shop/.click, Google Search Ads, Nhóm Telegram, Ứng dụng Android',
    topChannelsEn: '.shop / .click domains, Google Search Ads, Telegram, Android Repositories',
    activatedSolutionVi: 'AI.ClusterX™ Anti-Phishing + Giám sát APK độc hại + Triệt phá tức thì trong 2 giờ.',
    activatedSolutionEn: 'AI.ClusterX™ Anti-Phishing + Rogue APK Surveillance + Fast-track 2h Takedowns.',
    realOutcomeVi: 'Giảm 94% số lượng trang web phishing hoạt động quá 4 giờ; bảo vệ an toàn cho hàng triệu giao dịch khách hàng.',
    realOutcomeEn: '94% reduction in active phishing domains lasting >4 hours; millions of transactions protected.',
  },
  {
    id: 'pharma-health',
    nameVi: 'Dược Phẩm & Thực Phẩm Chức Năng',
    nameEn: 'Pharmaceuticals & Health Supplements',
    commonThreatsVi: 'Hàng giả nguy hại sức khỏe, thuốc không rõ nguồn gốc, video cắt ghép hình ảnh bác sĩ/người nổi tiếng quảng cáo sai sự thật.',
    commonThreatsEn: 'Dangerous counterfeit formulations, grey-market medicines, deepfake celebrity/doctor video endorsements.',
    topChannelsVi: 'Shopee, TikTok Shop, Facebook LiveStream, Nhóm kín Zalo',
    topChannelsEn: 'Shopee, TikTok Shop, Facebook LiveStreams, Private Zalo Groups',
    activatedSolutionVi: 'Quét thị giác máy tính đối chiếu bao bì chính hãng + Xử lý gian hàng mạo danh chứng nhận của Bộ Y Tế.',
    activatedSolutionEn: 'Computer vision packaging verification + Elimination of fake Ministry of Health certifications.',
    realOutcomeVi: 'Gỡ bỏ hơn 12,000 sản phẩm nhái/năm, bảo vệ uy tín thương hiệu và an toàn tính mạng người tiêu dùng.',
    realOutcomeEn: 'Over 12,000 counterfeit items removed annually, safeguarding consumer health and brand integrity.',
  },
  {
    id: 'fashion-luxury',
    nameVi: 'Thời Trang, Mỹ Phẩm & Hàng Xa Xỉ',
    nameEn: 'Fashion, Cosmetics & Luxury Goods',
    commonThreatsVi: 'Hàng replica 1:1 đội lốt "hàng tuồn xuất khẩu", bán phá giá 80%, đánh cắp toàn bộ bộ ảnh lookbook để lập shop ảo.',
    commonThreatsEn: 'Super-clone replicas marketed as "factory excess", 80% price dumping, stolen lookbook studio photography.',
    topChannelsVi: 'TikTok Shop VN, Shopee VN, Instagram, Hội nhóm thanh lý Facebook',
    topChannelsEn: 'TikTok Shop VN, Shopee VN, Instagram, Private Facebook Buy/Sell Groups',
    activatedSolutionVi: 'AI.ClusterX™ truy vết chuỗi kho hàng TMĐT + Tự động gửi hồ sơ bản quyền và nhãn hiệu bảo hộ.',
    activatedSolutionEn: 'AI.ClusterX™ e-commerce warehouse clustering + Automated trademark/copyright enforcement filings.',
    realOutcomeVi: 'Khôi phục doanh thu bán lẻ chính hãng tăng 24% tại thị trường Việt Nam sau khi triệt phá các cụm bán hàng giả.',
    realOutcomeEn: '24% retail revenue recovery in Vietnam market following neutralization of organized counterfeit rings.',
  },
  {
    id: 'retail-chains',
    nameVi: 'Bán Lẻ & Chuỗi Cửa Hàng',
    nameEn: 'Retail & Multi-Location Chains',
    commonThreatsVi: 'Gian hàng giả mạo đại lý ủy quyền, voucher điện tử giả lừa tiền cọc, website clone tên thương hiệu.',
    commonThreatsEn: 'Fake authorized distributor shops, voucher deposit advance-fee scams, clone web storefronts.',
    topChannelsVi: 'Google Search Ads, Sàn TMĐT nội địa, Fanpage giả mạo',
    topChannelsEn: 'Google Search Ads, Domestic Marketplaces, Impersonating Fanpages',
    activatedSolutionVi: 'Giám sát tên miền typosquatting + Báo cáo gỡ bỏ quảng cáo mạo danh khuyến mãi.',
    activatedSolutionEn: 'Typosquatting domain surveillance + Rapid removal of fake promotion advertising campaigns.',
    realOutcomeVi: 'Ngăn chặn hoàn toàn các chiến dịch lừa tiền đặt cọc dịp khuyến mãi Tết và Black Friday.',
    realOutcomeEn: 'Complete neutralization of advance-deposit fraud campaigns during peak holiday shopping surges.',
  },
  {
    id: 'tech-gaming',
    nameVi: 'Công Nghệ, Phần Mềm & Game',
    nameEn: 'Software, Tech & Gaming',
    commonThreatsVi: 'Phần mềm bẻ khóa (cracked build) kèm mã độc đào coin, trang nạp thẻ game lừa đảo, giả mạo tài khoản nhà phát hành.',
    commonThreatsEn: 'Cracked builds embedding cryptominers, fake in-game top-up portals, impersonated publisher accounts.',
    topChannelsVi: 'Diễn đàn công nghệ, Kênh YouTube hướng dẫn, Web nạp tiền giả mạo',
    topChannelsEn: 'Tech forums, YouTube tutorial descriptions, Phishing top-up portals',
    activatedSolutionVi: 'Gỡ bỏ link tải vi phạm bản quyền (DMCA) + Thu hồi tên miền phishing tài khoản game.',
    activatedSolutionEn: 'Automated DMCA takedowns for illegal distribution + Recovery of phishing game portals.',
    realOutcomeVi: 'Bảo vệ hơn 500,000 tài khoản người chơi và giảm 88% lượng link tải lậu trên trang tìm kiếm.',
    realOutcomeEn: 'Over 500,000 user accounts protected; 88% reduction in pirated software links on search index.',
  },
  {
    id: 'crypto-web3',
    nameVi: 'Tài Sản Số, Crypto & Web3',
    nameEn: 'Digital Assets & Web3',
    commonThreatsVi: 'Web lừa đảo kết nối ví (drainer wallet), token nhái tên thương hiệu, tài khoản Discord/X mạo danh admin tặng airdrop.',
    commonThreatsEn: 'Malicious wallet drainer sites, counterfeit lookalike tokens, compromised Discord/X airdrop bots.',
    topChannelsVi: 'Mạng xã hội X (Twitter), Telegram Airdrop Bot, Tên miền .io/.xyz',
    topChannelsEn: 'X (Twitter), Telegram Bots, Deceptive .io / .xyz domains',
    activatedSolutionVi: 'Quét hợp đồng thông minh giả mạo + Chặn domain drainer trên các nhà cung cấp ví toàn cầu (Metamask, TrustWallet).',
    activatedSolutionEn: 'Smart contract clone scanning + Direct domain blacklisting on MetaMask, TrustWallet, and web gateways.',
    realOutcomeVi: 'Chặn đứng các đợt rút cạn tài sản người dùng trước khi chiến dịch lừa đảo được phát tán rộng.',
    realOutcomeEn: 'Preemptive blocking of wallet drainer campaigns before widespread dissemination to community.',
  },
]

// 6 Pipeline Steps for Section 3 (Scroll-pinned Defense Pipeline)
export interface PipelineStep {
  step: string
  code: string
  titleVi: string
  titleEn: string
  subtitleVi: string
  subtitleEn: string
  descVi: string
  descEn: string
}

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    step: '01',
    code: 'DETECT',
    titleVi: 'Phát Hiện Đa Kênh Toàn Diện',
    titleEn: 'Multi-Channel Autonomous Detection',
    subtitleVi: 'Quét 24/7 trên toàn bộ bề mặt số bên ngoài',
    subtitleEn: '24/7 scanning across your external digital attack surface',
    descVi:
      'Hệ thống AI quét liên tục trên hơn 1,500 đuôi tên miền, các sàn TMĐT tại Việt Nam (Shopee, Lazada, TikTok Shop, Tiki), mạng xã hội (Facebook, Zalo, Telegram), quảng cáo Google/Meta và Dark Web để thu thập tín hiệu vi phạm.',
    descEn:
      'Continuous AI scanning across 1,500+ gTLDs/ccTLDs, Vietnamese & global marketplaces, social platforms, paid ads, app stores, and dark web repositories to capture early threat signals.',
  },
  {
    step: '02',
    code: 'CLUSTER',
    titleVi: 'Gom Cụm Bằng AI.ClusterX™',
    titleEn: 'AI.ClusterX™ Network Clustering',
    subtitleVi: 'Liên kết hàng trăm vi phạm về cùng một mạng lưới',
    subtitleEn: 'Linking hundreds of isolated listings to single criminal entities',
    descVi:
      'Thay vì gỡ từng đường link riêng lẻ, AI.ClusterX™ tự động phân tích mã nguồn HTML, tài khoản nhận tiền VietQR, địa chỉ kho hàng và số điện thoại để gom 40+ gian hàng và tên miền về một mạng lưới duy nhất.',
    descEn:
      'Instead of playing whack-a-mole with individual links, AI.ClusterX™ correlates shared server IPs, bank accounts, warehouse origin zip codes, and phone numbers to eliminate entire criminal syndicates.',
  },
  {
    step: '03',
    code: 'ANALYZE',
    titleVi: 'Chấm Điểm Rủi Ro & Nhân Bản',
    titleEn: 'Duplication & Risk Scoring Engine',
    subtitleVi: 'Đo lường mức độ tương đồng và nguy hại',
    subtitleEn: 'Quantifying visual clone percentages and consumer hazard',
    descVi:
      'Công nghệ Website Duplication Detector đặt song song trang web chính thức và trang giả mạo, tính toán tỷ lệ giống nhau về logo, hình ảnh, văn bản (ví dụ: 99.1% Visual Clone) và chấm điểm rủi ro nguy cấp (Critical 9.8/10).',
    descEn:
      'Website Duplication Detector runs side-by-side computer vision audits, verifying trademark misuse, visual mimicry (>99%), SSL forgery, and deceptive pricing to calculate precise hazard tiers.',
  },
  {
    step: '04',
    code: 'VALIDATE',
    titleVi: 'Chuyên Gia Bản Địa Xác Thực',
    titleEn: 'Local Digital Risk Investigator Review',
    subtitleVi: 'Con người kiểm duyệt loại bỏ báo động giả',
    subtitleEn: 'Human-in-the-loop verification eliminating false positives',
    descVi:
      'Đội ngũ Digital Risk Investigators tại TP. Hồ Chí Minh phối hợp cùng chuyên gia pháp lý IP toàn cầu trực tiếp xác thực hồ sơ bằng chứng, đảm bảo không ảnh hưởng đến các đại lý ủy quyền và đối tác hợp pháp.',
    descEn:
      'Dedicated Digital Risk Investigators based in Ho Chi Minh City review and approve evidentiary dossiers, ensuring zero disruption to legitimate distributors or authorized partners.',
  },
  {
    step: '05',
    code: 'ENFORCE',
    titleVi: 'Thực Thi Gỡ Bỏ Tốc Độ Cao',
    titleEn: 'Automated Managed Takedown',
    subtitleVi: 'Làm việc trực tiếp với nhà đăng ký và nền tảng',
    subtitleEn: 'Direct execution with registrars, hosting desks & platforms',
    descVi:
      'Gửi thông báo pháp lý tự động và làm việc trực tiếp với VNNIC, các nhà đăng ký tên miền quốc tế, ban quản trị sàn TMĐT (Shopee, Meta, TikTok) để gỡ bỏ nội dung vi phạm với thời gian trung bình chỉ 2 - 3 giờ.',
    descEn:
      'Automated transmission of policy-compliant takedown packages to domain registries, cloud hosts, and marketplace compliance teams, achieving rapid removal in hours.',
  },
  {
    step: '06',
    code: 'PROVE',
    titleVi: 'Báo Cáo ROI & Thu Hồi Doanh Thu',
    titleEn: 'ROI Reporting & Revenue Recovery',
    subtitleVi: 'Chỉ số minh bạch với < 1 giờ/tuần vận hành',
    subtitleEn: 'Transparent impact metrics with < 1 hour/week client effort',
    descVi:
      'Hệ thống cung cấp biểu đồ trực quan về tỷ lệ sụt giảm mối đe dọa (trung bình giảm 82%), số giờ tiết kiệm cho đội ngũ pháp chế nội bộ và lượng doanh thu thu hồi về các kênh phân phối chính thức.',
    descEn:
      'Actionable executive dashboards showcasing measurable reduction in brand misuse (-82%), consumer trust protection, and quantified revenue diverted back to authentic channels.',
  },
]

export const NAV_ITEMS = NAV_ITEMS_VI

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'monitoring',
    title: 'Brand Monitoring 24/7',
    description: 'Systematic observation across marketplaces, standalone web domains, and social channels.',
    iconName: 'Radar',
  },
  {
    id: 'trademark',
    title: 'Trademark Enforcement',
    description: 'Documentation and administrative reporting of unauthorized brand asset and trademark misuse.',
    iconName: 'FileCheck2',
  },
  {
    id: 'copyright',
    title: 'Copyright Support',
    description: 'Structured takedown notices for unauthorized creative assets, product photography, and copy.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'marketplace',
    title: 'Marketplace & Social Platform Review',
    description: 'Focused coverage of regional Southeast Asian platforms and major international commerce hubs.',
    iconName: 'Store',
  },
  {
    id: 'evidence',
    title: 'Evidence & Reporting',
    description: 'Standardized evidentiary dossiers with verifiable timestamps, source code archives, and audit trails.',
    iconName: 'FolderArchive',
  },
]

export const SERVICES: ServiceItem[] = [
  {
    id: 'online-monitoring',
    title: 'Online Brand Monitoring',
    shortDescription: 'Continuous scanning and threat clustering across marketplaces, domains, and social channels.',
    fullDescription: 'Comprehensive digital surveillance designed to detect potential unauthorized brand mentions, trademark infringements, and suspicious product offerings before they escalate.',
    deliverables: [
      'Periodic executive risk summaries and channel-specific threat logs',
      'Configurable keyword, image match, and regional domain alerts',
      'AI.ClusterX™ categorization by risk tier and seller network',
    ],
    platforms: ['Shopee VN', 'Lazada', 'TikTok Shop', 'Facebook/Zalo', 'ccTLD .vn'],
    iconName: 'ScanLine',
    tag: 'Core Monitoring',
  },
  {
    id: 'trademark-support',
    title: 'Trademark Infringement Support',
    shortDescription: 'Verification, documentation, and notice submission for unauthorized wordmarks and logos.',
    fullDescription: 'Structured technical and administrative assistance for brand owners seeking to challenge unauthorized commercial usage of their registered trademarks.',
    deliverables: [
      'Side-by-side trademark registration comparison dossiers',
      'Platform-compliant intellectual property complaint submissions',
      'Case tracking logs with platform reference and ticket IDs',
    ],
    platforms: ['Shopee VN', 'Lazada', 'TikTok Shop', 'Tiki', 'Global Platforms'],
    iconName: 'Award',
    tag: 'IP Enforcement Support',
  },
  {
    id: 'copyright-support',
    title: 'Copyright Infringement Support',
    shortDescription: 'Takedown coordination for stolen marketing imagery, packaging designs, and media.',
    fullDescription: 'Targeted support for proprietary digital assets. We compile verifiable evidence showing original authorship and assist in filing formal DMCA notices.',
    deliverables: [
      'Original vs. infringing media side-by-side alignment briefs',
      'Formal notice preparation adhering to platform IP guidelines',
      'Post-takedown recurrence checks to identify re-uploads',
    ],
    platforms: ['Social Media', 'E-Commerce Portals', 'Independent Websites'],
    iconName: 'FileText',
    tag: 'Asset Protection',
  },
  {
    id: 'counterfeit-investigation',
    title: 'Counterfeit & Unauthorized-Sale Investigations',
    shortDescription: 'Systematic intelligence gathering, digital footprint tracking, and physical sample coordination.',
    fullDescription: 'In-depth operational review of suspicious merchant networks, parallel import operations, and counterfeit merchandise distributors.',
    deliverables: [
      'Merchant network profiling (cross-platform seller linkage)',
      'Digital test-purchase coordination and receipt archiving',
      'Actionable investigation reports suitable for legal review',
    ],
    platforms: ['Regional B2C Marketplaces', 'Wholesale Groups', 'Messaging Commerce'],
    iconName: 'SearchCheck',
    tag: 'Investigation',
  },
  {
    id: 'impersonation-reporting',
    title: 'Impersonation & Fraudulent Account Reporting',
    shortDescription: 'Expedited documentation and abuse reporting for fake executive accounts and scam brand profiles.',
    fullDescription: 'Proactive mitigation against malicious digital actors posing as your enterprise or corporate leadership across social networks.',
    deliverables: [
      'High-priority abuse desk notice compilation',
      'Deceptive handle and impersonation profile dossier',
      'Continuous verification until platform resolution',
    ],
    platforms: ['Facebook', 'Telegram', 'Zalo', 'X', 'Domain Registrars'],
    iconName: 'UserX',
    tag: 'Identity Defense',
  },
  {
    id: 'evidence-reporting',
    title: 'Evidence Collection & Reporting',
    shortDescription: 'Forensically structured digital evidence gathering with cryptographic SHA-256 hashing and timestamps.',
    fullDescription: 'Rigorous archiving of online infringement states designed to prevent seller spoliation. All captures include verifiable UTC timestamps and routing records.',
    deliverables: [
      'Cryptographically hashed PDF snapshots and HTML archives',
      'HTTP header extraction and server IP/DNS routing records',
      'Chain-of-custody documentation and investigator logs',
    ],
    platforms: ['Universal Web', 'Regional Mobile Apps', 'Marketplace Feeds'],
    iconName: 'Database',
    tag: 'Forensics & Audit',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Share Brand, Rights & Suspected Vectors',
    description: 'Provide registered trademarks and high-risk channels to initiate audit.',
    keyActions: ['Scope definition', 'Trademark certificate intake', 'Monitored channels selection'],
    sampleDeliverable: 'Intake Summary & Scoping Confirmation',
  },
  {
    stepNumber: '02',
    title: 'Forensic Evidence Archiving & Clustering',
    description: 'Validate digital footprints with SHA-256 hashing and cluster merchant syndicates.',
    keyActions: ['Cryptographic DOM capture', 'AI.ClusterX™ correlation', 'Policy matching'],
    sampleDeliverable: 'Forensic Dossier & Network Map',
  },
  {
    stepNumber: '03',
    title: 'Platform Notice & Fast-Track Takedown',
    description: 'Assemble platform-compliant notice packages for administrative takedown filing.',
    keyActions: ['Notice compilation', 'Verified channel filing', 'Registrar escalation'],
    sampleDeliverable: 'Platform Submission Manifest',
  },
  {
    stepNumber: '04',
    title: 'Resolution Logging & Recurrence Watch',
    description: 'Confirm removal disposition and monitor recurring merchant networks for 30+ days.',
    keyActions: ['404 status verification', 'Recurrence alert trigger', 'Monthly impact logging'],
    sampleDeliverable: 'Case Resolution Ledger',
  },
]

export const INDUSTRIES: IndustrySector[] = [
  {
    id: 'consumer-goods',
    name: 'Consumer Goods & FMCG',
    description: 'Consumer products vulnerable to parallel trade and counterfeit packaging.',
    commonRisks: ['Unauthorized distributor leakage', 'Counterfeit barcodes', 'Deceptive bundles'],
    iconName: 'Package',
  },
  {
    id: 'fashion',
    name: 'Fashion, Apparel & Luxury',
    description: 'High-end brands facing replica manufacturing and unauthorized lookbook usage.',
    commonRisks: ['Replica sales', 'Live-stream counterfeit sales', 'Stolen studio lookbooks'],
    iconName: 'Sparkles',
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    description: 'Cosmetics and skincare facing hazardous fake formulations and gray market stock.',
    commonRisks: ['Dangerous chemical formulations', 'Tampered expiration dates', 'Clinic impersonation'],
    iconName: 'HeartPulse',
  },
  {
    id: 'electronics',
    name: 'Electronics & Hardware',
    description: 'Consumer tech and replacement parts exposed to sub-standard dangerous clones.',
    commonRisks: ['Fake batteries/chargers', 'Uncertified OEM badges', 'Counterfeit warranties'],
    iconName: 'Cpu',
  },
  {
    id: 'media',
    name: 'Media & Entertainment',
    description: 'Publishing and digital entertainment facing stream scraping and copyright piracy.',
    commonRisks: ['Unauthorized download portals', 'Unlicensed merch printing', 'Pirated courses'],
    iconName: 'Film',
  },
  {
    id: 'software',
    name: 'Software & Digital Assets',
    description: 'SaaS and software products battling cracked builds and typosquatting login portals.',
    commonRisks: ['Cracked license keys', 'Phishing login portals', 'Unauthorized API reselling'],
    iconName: 'Terminal',
  },
]

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: 'evidence-structure',
    title: 'Structured Evidence Handling',
    summary: 'SHA-256 hashed evidentiary records with immutable timestamps.',
    detail: 'Every capture is preserved using forensically defensible practices with complete HTTP header metadata.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'case-communication',
    title: 'Clear Case Communication',
    summary: 'Direct updates with real platform ticket IDs and actionable summaries.',
    detail: 'Zero ambiguous metrics. Transparent tracking from initial discovery to confirmed removal.',
    iconName: 'MessagesSquare',
  },
  {
    id: 'multi-platform',
    title: 'Multi-Platform Workflow',
    summary: 'Procedures aligned with major global and regional platforms.',
    detail: 'Coverage across Shopee VN, Lazada, TikTok Shop, Meta, Google, and domain registrars.',
    iconName: 'Network',
  },
  {
    id: 'tailored-scope',
    title: 'Tailored Monitoring Scope',
    summary: 'Monitoring parameters calibrated to your highest-risk SKUs and distribution vectors.',
    detail: 'No rigid monolithic bundles. Adaptable scanning based on high-risk commercial territories.',
    iconName: 'SlidersHorizontal',
  },
  {
    id: 'regional-understanding',
    title: 'Regional Understanding, International Orientation',
    summary: 'Operating from TP. Hồ Chí Minh with deep local fluency and global IP standards.',
    detail: 'Bilingual investigative execution structured for global headquarters and local counsel.',
    iconName: 'Globe2',
  },
]

export const SAMPLE_CASE_DATA = {
  caseReference: 'SAMPLE-CASE-#VN-202X-084',
  disclaimer: 'FICTIONAL SAMPLE DATA — FOR DEMONSTRATION PURPOSES ONLY.',
  suspectedSubject: 'Suspected counterfeit luxury leather goods listing using altered trademark logos',
  detectedChannel: 'Regional Third-Party Marketplace [Sample Channel B]',
  initialRiskTier: 'Tier 2 (High Risk)',
  timeline: [
    {
      stage: 'Discovery & Archiving',
      timeEstimate: 'Day 1 — 09:15 ICT',
      title: 'Automated Detection & Forensic Capture',
      summary: 'Listing flagged matching trademark keyword patterns and promotional images.',
      evidenceDetails: [
        { label: 'Observed URL', value: 'https://marketplace-sample.example/item/984712039' },
        { label: 'Archived Hash', value: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069' },
      ],
      actionTaken: 'Captured DOM archive and logged seller business registration identifier.',
      status: 'Flagged' as const,
    },
    {
      stage: 'Evidence Analysis',
      timeEstimate: 'Day 1 — 14:30 ICT',
      title: 'Trademark Dossier Alignment',
      summary: 'Cross-referenced detected mark against registered trademark filings.',
      evidenceDetails: [
        { label: 'Registered Mark Ref', value: 'VN-TM-REG-4-XXXXX (Class 18)' },
        { label: 'Infringement Vector', value: 'Unauthorized commercial reproduction' },
      ],
      actionTaken: 'Prepared side-by-side comparative PDF exhibit.',
      status: 'Documented' as const,
    },
    {
      stage: 'Notice Submission',
      timeEstimate: 'Day 2 — 10:00 ICT',
      title: 'Formal Platform Infringement Notice',
      summary: 'Compiled and transmitted formal takedown request.',
      evidenceDetails: [
        { label: 'Platform Portal', value: 'Verified Brand Protection Gateway' },
        { label: 'Submission Ref ID', value: 'TKT-SAMPLE-88402-IP' },
      ],
      actionTaken: 'Submitted evidence bundle including registration certificate copy.',
      status: 'Transmitted' as const,
    },
    {
      stage: 'Status Tracking & Verification',
      timeEstimate: 'Day 3 — 16:45 ICT',
      title: 'Resolution Logging & Recurrence Watch',
      summary: 'Platform review confirmed listing removal.',
      evidenceDetails: [
        { label: 'Platform Disposition', value: 'Listing removed / Seller warned' },
        { label: 'HTTP Status Check', value: '404 Item Not Found' },
      ],
      actionTaken: 'Compiled case summary report and archived confirmation notice.',
      status: 'Resolved' as const,
    },
  ],
}

export const FAQS: FaqItem[] = [
  {
    id: 'info-required',
    category: 'General',
    question: 'What information should I provide to request a review?',
    answer: 'Provide your brand name, registered trademark certificates, and any known suspect URLs or seller handles.',
  },
  {
    id: 'platforms-supported',
    category: 'Enforcement Scope',
    question: 'Which platforms can you assist with?',
    answer: 'Shopee VN, Lazada, TikTok Shop, Tiki, Facebook, Zalo, Telegram, Google Ads, and global domain registrars.',
  },
  {
    id: 'monitoring-process',
    category: 'Evidence & Process',
    question: 'How does the monitoring process work?',
    answer: 'AI scanning combined with AI.ClusterX™ network correlation and human investigator review at our TP.HCM hub.',
  },
  {
    id: 'guarantee-removal',
    category: 'Enforcement Scope',
    question: 'Can you guarantee content removal?',
    answer: 'No. Removal decisions rest with platform administrators and competent legal authorities. We provide evidentiary dossiers that maximize prompt platform review.',
  },
  {
    id: 'evidence-handling',
    category: 'Evidence & Process',
    question: 'How is evidence handled and archived?',
    answer: 'Cryptographic SHA-256 DOM hashing, synchronized UTC timestamps, and tamper-evident audit logs.',
  },
  {
    id: 'legal-advice',
    category: 'Legal Status',
    question: 'Do you provide legal advice?',
    answer: 'BrandShield Vietnam Co., Ltd. provides operational brand protection and digital evidence services, not formal legal counsel. We collaborate with client legal teams and appointed attorneys.',
  },
]

