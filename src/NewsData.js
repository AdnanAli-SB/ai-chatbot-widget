const NewsData = [
  {
    id: "news_001",
    title: "AI Transition: From Chatbots to Enterprise Backbone",
    category: ["AI", "Enterprise", "Software"],
    date: "May 13, 2026",
    bannerImage: "/dga-2.jpg",
    brief:
      "AI has shifted from experimental tools to the core of enterprise architecture, driven by autonomous governance...",
    content:
      "In 2026, the tech industry has reached what experts call the 'Year of Truth' for Artificial Intelligence. We are moving beyond experimental chatbots and into a phase where AI is the actual backbone of enterprise architecture. Organizations are no longer asking if AI works, but how to govern its autonomous decision-making. Software development has shifted from 'writing code' to 'expressing intent.' Developers now articulate desired outcomes, and AI systems autonomously deliver, integrate, and maintain the underlying infrastructure. This paradigm shift means that as software becomes self-healing, the competitive edge for frontend developers lies in mastering orchestration and high-level UX strategy.",
    readTime: "2 min read",
    isOpen: false,
  },
  {
    id: "news_002",
    title: "NASA's Psyche Mission Reaches Mars Slingshot Point",
    category: ["Space", "AI", "Hardware"],
    date: "May 13, 2026",
    bannerImage: "/dga-2.jpg",
    brief:
      "NASA's Psyche spacecraft is utilizing a Mars gravity assist today to accelerate toward the main asteroid belt...",
    content:
      "NASA's Psyche spacecraft is making headlines today as it prepares for a daring close flyby of Mars. This maneuver is designed to use the Red Planet's gravity as a slingshot, accelerating the probe toward its final destination: a unique metal-rich asteroid orbiting the Sun between Mars and Jupiter. Simultaneously, the James Webb Space Telescope has unveiled its sharpest-ever map of the 'cosmic web'—the hidden scaffolding of the universe. These advancements in space technology are driven by a new generation of radiation-hardened semiconductors and AI-driven telemetry systems that allow for real-time adjustments millions of miles from Earth.",
    readTime: "3 min read",
    isOpen: false,
  },
  {
    id: "news_003",
    title: "Silicon Photonics: The New Era of AI Hardware",
    category: ["Hardware", "Semiconductors", "AI"],
    date: "May 13, 2026",
    bannerImage: "/dga-2.jpg",
    brief:
      "Industry leaders are pivoting to Silicon Photonics to overcome thermal limits in next-generation AI accelerators...",
    content:
      "Tower Semiconductor announced a massive surge in Silicon Photonics (SiPho) contracts today, signaling a major shift in how AI hardware is built. As traditional electronic chips hit thermal and speed limits, SiPho uses light instead of electricity to move data. This is critical for the massive 'Scale-up' architectures required for 2026-era AI training and inference. While AI demand is driving revenues to historic peaks, the concentration of value in specialized AI GPUs is creating shortages in downstream sectors. Developers working on mobile apps must be aware of these hardware constraints, as they directly impact the cost of the cloud-based services we rely on.",
    readTime: "3 min read",
    isOpen: false,
  },
  {
    id: "news_004",
    title: "Cybersecurity Shifts to Autonomous Defense Models",
    category: ["Cybersecurity", "Cloud", "AI"],
    date: "May 13, 2026",
    bannerImage: "/dga-2.jpg",
    brief:
      "AI-driven threats are now metamorphic, pushing cybersecurity toward self-defending, cloud-native ecosystems built for real-time response...",
    content:
      "Cybersecurity risk is accelerating at an unprecedented pace due to advances in AI and geopolitical fragmentation. Today's threats are metamorphic; AI agents can now target endpoints continuously, adapting their tactics in real-time as they attack. However, defense is evolving just as quickly. Cloud-native architectures have become the default, feeding real-time telemetry into 'self-healing' security systems that apply protective patches proactively before a vulnerability is even publicly known. For UI/UX designers, this means 'Security by Design' is no longer optional—it must be baked into every user flow, ensuring that continuous authentication feels seamless to the end user.",
    readTime: "2 min read",
    isOpen: false,
  },
  {
    id: "news_005",
    title: "Quantum Computing Hits 10,000-Qubit Milestone",
    category: ["Quantum", "Hardware", "Enterprise"],
    date: "May 14, 2026",
    bannerImage: "/dga-2.jpg",
    brief:
      "A landmark 10,000-qubit processor has been demonstrated, signaling that fault-tolerant quantum computing is no longer theoretical...",
    content:
      "A consortium of research labs has unveiled the first processor to cross the 10,000-qubit threshold with error rates low enough for practical computation. This milestone is widely considered the inflection point at which quantum computers can begin outperforming classical supercomputers on real-world problems such as drug discovery, logistics optimization, and cryptographic analysis. Enterprises in finance and pharmaceuticals are already piloting hybrid quantum-classical workflows, where quantum processors handle the combinatorially complex subproblems while classical systems manage orchestration. Governments worldwide are accelerating investment, treating quantum supremacy as a matter of national strategic interest.",
    readTime: "3 min read",
    isOpen: false,
  },
  {
    id: "news_006",
    title: "Solid-State Batteries Unlock 1,000 km EV Range",
    category: ["Energy", "Hardware", "Enterprise"],
    date: "May 14, 2026",
    bannerImage: "/dga-2.jpg",
    brief:
      "Next-generation solid-state battery cells are entering mass production, enabling electric vehicles with over 1,000 km of real-world range...",
    content:
      "Toyota and QuantumScape have jointly announced the start of commercial production for solid-state battery modules capable of delivering more than 1,000 km of range on a single charge. Unlike lithium-ion cells, solid-state batteries eliminate the liquid electrolyte, drastically reducing fire risk and enabling much higher energy density. Charging times have also dropped to under ten minutes for an 80% charge. Analysts project that by 2027, solid-state packs will reach cost parity with current lithium-ion technology, effectively removing the last major barrier to mass EV adoption globally.",
    readTime: "3 min read",
    isOpen: false,
  },
  {
    id: "news_007",
    title: "AI Diagnostics Outperform Radiologists in Clinical Trials",
    category: ["Healthcare", "AI", "Software"],
    date: "May 15, 2026",
    bannerImage: "/dga-2.jpg",
    brief:
      "A large-scale clinical trial confirms that AI diagnostic models now exceed specialist-level accuracy across twelve cancer types...",
    content:
      "Results from a multi-centre clinical trial spanning 40,000 patients have confirmed that AI diagnostic systems outperform board-certified radiologists in detecting twelve distinct cancer types at early stages. The models, trained on over 200 million anonymised scans, demonstrated a false-negative rate 34% lower than the human baseline. Regulatory bodies in the EU and US are fast-tracking approval pathways for AI-assisted diagnosis tools, while hospital networks are restructuring radiology workflows to position AI as the primary screener and physicians as final reviewers. The shift raises important questions around liability, consent, and the evolving role of medical professionals.",
    readTime: "4 min read",
    isOpen: false,
  },
  {
    id: "news_008",
    title: "Decentralised Identity Becomes the Web's New Login Standard",
    category: ["Web3", "Cybersecurity", "Software"],
    date: "May 15, 2026",
    bannerImage: "/dga-2.jpg",
    brief:
      "Major browsers are shipping native support for decentralised identifiers, making password-free, self-sovereign login a default experience...",
    content:
      "Chrome, Safari, and Firefox have simultaneously shipped support for W3C Decentralised Identifiers (DIDs), a protocol that allows users to authenticate across the web without passwords or centralised identity providers. Under this model, cryptographic keys stored on a user's device replace usernames and passwords entirely, with the user retaining full control over which attributes they disclose to each service. Early adoption metrics show a 60% reduction in account takeover incidents on platforms that have migrated. Privacy advocates are calling it the most significant shift in web authentication since the introduction of OAuth, while advertising platforms face fundamental challenges to their data collection models.",
    readTime: "3 min read",
    isOpen: false,
  },
  {
    id: "news_009",
    title: "Direct Air Capture Plants Scale to Megaton Capacity",
    category: ["Climate", "Energy", "Enterprise"],
    date: "May 16, 2026",
    bannerImage: "/dga-2.jpg",
    brief:
      "The first megaton-scale direct air capture facility has come online in Iceland, marking a turning point in industrial carbon removal...",
    content:
      "Climeworks has inaugurated its Mammoth 2 plant in Iceland, the world's first direct air capture facility capable of removing one million tonnes of CO₂ per year from the atmosphere. Powered entirely by geothermal energy, the plant achieves a net-negative carbon footprint and brings the cost of removal down to $180 per tonne — a 70% reduction from 2023 levels. Microsoft, Stripe, and a coalition of 200 enterprises have pre-purchased removal credits through 2035. Climate economists note that reaching 2050 targets will require scaling this capacity by a factor of 10,000, but describe today's milestone as proof that the technology is now on a credible industrial trajectory.",
    readTime: "3 min read",
    isOpen: false,
  },
  {
    id: "news_010",
    title: "Spatial Computing Replaces the Smartphone for Early Adopters",
    category: ["AR/VR", "Hardware", "Software"],
    date: "May 16, 2026",
    bannerImage: "/dga-2.jpg",
    brief:
      "A growing cohort of professionals is abandoning smartphones entirely in favour of lightweight spatial computing glasses...",
    content:
      "Sales data from Q1 2026 shows that over 3 million users have designated spatial computing glasses as their primary personal device, abandoning the smartphone form factor altogether. Devices from Apple, Meta, and a cluster of startups now weigh under 48 grams and offer all-day battery life, thanks to advances in micro-display efficiency and edge-AI processing. Enterprise adoption is accelerating in field service, surgery, and logistics, where hands-free overlaid information directly reduces error rates. Developers are rapidly shifting focus from mobile-first to spatial-first design paradigms, and app store revenues for spatial platforms have grown 420% year-over-year.",
    readTime: "4 min read",
    isOpen: false,
  },
];

export default NewsData;
