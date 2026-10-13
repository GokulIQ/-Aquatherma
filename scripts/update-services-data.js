const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', 'assets', 'js', 'data.js');
let content = fs.readFileSync(dataFile, 'utf8');

const services = [
  {
    id: "tankless-water-heater-installation",
    slug: "tankless-water-heater-installation",
    title: "Tankless Water Heater Installation",
    category: "Installation & Upgrades",
    badge: "Flagship High-Efficiency",
    icon: "flame",
    coverImage: "assets/images/services/tankless-installation-cover.jpg",
    cardImage: "assets/images/services/tankless-installation-cover.jpg",
    detailImage: "assets/images/services/tankless-installation-detail.jpg",
    detailImages: [
      "assets/images/services/tankless-installation-cover.jpg",
      "assets/images/services/tankless-installation-detail.jpg"
    ],
    shortDesc: "Endless on-demand hot water with commercial-grade condensing systems engineered for your household's peak flow requirements and maximum energy savings.",
    fullDesc: "Our master plumbers calculate your household's peak simultaneous Gallons Per Minute (GPM), properly size dedicated gas or electrical services, and configure direct concentric venting for whisper-quiet, continuous hot water.",
    efficiency: "Up to 0.96 UEF (Energy Factor)",
    lifespan: "20+ Years with annual descaling",
    fuelRequirements: "Dedicated 3/4\" Gas Supply or 120A Subpanel",
    warranty: "15-Year Heat Exchanger / 5-Year Parts",
    whatIncluded: [
      "Comprehensive household peak GPM and incoming water temperature calculation",
      "Removal, draining, and environmentally compliant haul-away of old equipment",
      "Heavy-duty vibration-isolated wall mounting and direct PVC/polypropylene venting",
      "Commercial isolation service valves with dedicated descaling ports",
      "Gas supply line calibration, digital manometer test, and combustion analysis",
      "Homeowner walkthrough, digital thermostat calibration, and permit processing"
    ],
    whenNeeded: [
      "Your household frequently runs out of hot water during consecutive showers or laundry",
      "You want to reclaim up to 90% of floor space in your basement or utility closet",
      "Your current storage tank is over 10 years old and nearing risk of tank breach",
      "You want to slash standby thermal energy waste and lower monthly utility bills"
    ],
    howItWorks: "Unlike traditional storage tanks that reheat 40–80 gallons around the clock, condensing tankless heaters remain idle until a hot water faucet opens. Incoming cold water passes through flow sensors that instantly trigger high-output modulating burners. Water rapidly circulates through dual commercial-grade stainless steel heat exchangers, reaching your set temperature in seconds and maintaining it indefinitely.",
    assessmentDetails: "During our on-site consultation, certified technicians measure static water pressure, evaluate winter groundwater temperature drops, audit household fixture flow rates, and verify your gas meter capacity (BTU rating) or electrical panel load. We provide a transparent, fixed-price estimate with no hidden change orders.",
    homeownerConsiderations: "Tankless units require adequate fuel input (typically 150,000–199,000 BTU for whole-home systems) and proper exterior venting clearance. In areas with hard water, pairing your system with a scale filter or scheduling annual citric acid descaling preserves the factory warranty and ensures peak thermal efficiency.",
    benefitsOrIssues: [
      {
        title: "Endless On-Demand Delivery",
        icon: "droplets",
        desc: "Heats water continuously in real time. Multiple showers, dishwashers, and washing machines can run without the water ever turning cold."
      },
      {
        title: "Ultra-High 0.96 UEF Efficiency",
        icon: "zap",
        desc: "Eliminates 100% of standby heat loss. Condensing dual heat exchangers capture exhaust heat, reducing water heating energy costs by up to 30%."
      },
      {
        title: "Zero Basement Floor Clutter",
        icon: "maximize",
        desc: "Compact suitcase-sized design mounts neatly to utility walls, liberating valuable square footage for storage or finished basement living space."
      },
      {
        title: "Double the Equipment Lifespan",
        icon: "shield-check",
        desc: "Engineered with durable modular components and stainless steel heat exchangers designed to last 20+ years, double standard storage tanks."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Hot Water Demand & Infrastructure Audit",
        desc: "We test incoming groundwater temperature, calculate peak GPM across all fixtures, and verify gas meter pressure or electrical service headroom."
      },
      {
        step: 2,
        title: "Decommissioning & Safe Haul-Away",
        desc: "Complete drainage, electrical/gas disconnect, and environmentally compliant recycling and removal of your decommissioned water heater."
      },
      {
        step: 3,
        title: "Precision Wall Mount & Dual-Pipe Venting",
        desc: "Structural wall anchoring, concentric zero-clearance exterior venting, rigid copper water piping, and isolation service valves."
      },
      {
        step: 4,
        title: "Combustion Analysis & Homeowner Briefing",
        desc: "Full-load digital manometer test, carbon monoxide flue check, digital controller programming, and homeowner operational briefing."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹2,850 – ₹4,600 (Illustrative Range)",
      timeframe: "4 – 6 Hours",
      costFactors: [
        "Gas supply line distance and diameter requirements (1/2\" to 3/4\" upsize)",
        "Direct venting route complexity and exterior wall penetrations",
        "Household capacity needs (single unit 6.5–11 GPM vs. cascaded multi-unit systems)",
        "Local municipal plumbing permit and inspection requirements"
      ],
      inclusions: [
        "Commercial-grade condensing tankless unit with dual stainless heat exchangers",
        "Full isolation ball valve kit with hose-thread service flushing ports",
        "Exterior concentric PVC/polypropylene direct exhaust and intake piping",
        "Complete removal and certified scrap disposal of your existing water heater",
        "Permit filing assistance and 100% code-compliance inspection guarantee"
      ]
    },
    faqs: [
      {
        q: "Is a tankless water heater suitable for my household size and climate?",
        a: "Yes. In colder northern climates where groundwater is 40°F–45°F, proper sizing is essential. We select units with sufficient BTU burner power (up to 199,000 BTU) to deliver 7.0–11.0 GPM continuous hot water even in freezing winter conditions."
      },
      {
        q: "What determines the correct system size and GPM flow rate?",
        a: "Sizing is based on simultaneous fixture demand. For example, two 2.0 GPM showers running alongside a 1.5 GPM sink equal 5.5 GPM peak demand. We calculate your home's worst-case temperature rise to guarantee you never experience flow throttling."
      },
      {
        q: "Can an existing traditional tank system be converted to tankless?",
        a: "Absolutely. Over 65% of our installations are conversions. We verify that your gas line can supply the required volume, route code-compliant direct PVC venting outside, and cleanly reroute your existing hot and cold copper lines."
      },
      {
        q: "Does a tankless water heater require periodic maintenance or descaling?",
        a: "Yes. We recommend an annual 45-minute descaling flush using a food-grade citric acid solution. Our installations include dedicated isolation service valves that make annual flushing fast, clean, and effortless."
      },
      {
        q: "What affects the installation complexity and total investment?",
        a: "The main variables are the venting run length to an exterior wall, gas line capacity from the meter, electrical outlet proximity, and any local permit requirements. We outline all factors in writing prior to commencing work."
      }
    ],
    relatedServiceIds: [
      "tank-water-heater-installation",
      "water-heater-flushing-maintenance",
      "water-heater-replacement"
    ]
  },
  {
    id: "tank-water-heater-installation",
    slug: "tank-water-heater-installation",
    title: "Traditional Tank Water Heater Installation",
    category: "Installation & Upgrades",
    badge: "Reliable Standard",
    icon: "cylinder",
    coverImage: "assets/images/services/tank-installation-cover.jpg",
    cardImage: "assets/images/services/tank-installation-cover.jpg",
    detailImage: "assets/images/services/tank-installation-detail.jpg",
    detailImages: [
      "assets/images/services/tank-installation-cover.jpg",
      "assets/images/services/tank-installation-detail.jpg"
    ],
    shortDesc: "Dependable, high-recovery gas and electric storage tank heaters with premium commercial-grade glass lining and expansion tanks.",
    fullDesc: "Engineered for maximum reliability and quick hot water recovery. We install commercial-grade residential storage tanks with brass drain valves, heavy-duty anode rods, and seismic strapping.",
    efficiency: "0.64 – 0.70 UEF",
    lifespan: "10 – 14 Years",
    fuelRequirements: "Standard 1/2\" Gas Line or 240V/30A Circuit",
    warranty: "6 to 10-Year Tank / 2-Year Labor",
    whatIncluded: [
      "First-hour rating calculation matched to family size and morning routines",
      "Safe draining, disconnection, and haul-away of existing water heater",
      "Pre-pressurized thermal expansion tank to prevent excessive system stress",
      "Full-port solid brass shutoff ball valves and dielectric unions",
      "Draft hood chimney alignment or power-vent blower testing",
      "Pilot ignition calibration, thermal cutoff testing, and leak inspection"
    ],
    whenNeeded: [
      "Your existing tank is 8–12 years old and showing signs of base rust or minor weeping",
      "You prefer lower upfront equipment costs with proven, conventional technology",
      "Your home's gas line or electrical panel does not support a high-BTU tankless conversion",
      "You require an immediate, same-day drop-in replacement without remodeling utility walls"
    ],
    howItWorks: "Cold municipal water enters through a top dip tube and fills the insulated steel reservoir. Gas burners at the base or dual electric immersion elements heat the entire volume to 120°F–125°F. Heated water naturally rises to the top outlet, ready for instant high-volume distribution to showers and faucets whenever needed.",
    assessmentDetails: "We evaluate your basement mechanical clearance, examine chimney draft ventilation for backdraft risks, test municipal incoming water pressure, and check for a closed plumbing loop requiring an expansion tank.",
    homeownerConsiderations: "Traditional tanks store a fixed reservoir of hot water. Choosing the right first-hour rating ensures everyone in the home gets hot water during peak morning hours. Annual flushing prevents sediment accumulation that degrades recovery speed.",
    benefitsOrIssues: [
      {
        title: "Immediate High-Volume Delivery",
        icon: "droplet",
        desc: "Stores 40 to 80 gallons of pre-heated water ready to supply multiple fixtures simultaneously with zero startup latency."
      },
      {
        title: "Lower Upfront Investment",
        icon: "indian-rupee",
        desc: "Utilizes existing 1/2-inch gas lines, atmospheric chimney flues, or 30A wiring without requiring costly utility service upgrades."
      },
      {
        title: "Fast 35-Minute Recovery",
        icon: "clock",
        desc: "Modern high-output commercial burners reheat depleted reservoirs in approximately 35 minutes following heavy household usage."
      },
      {
        title: "Built-In Expansion Protection",
        icon: "shield-check",
        desc: "Every installation includes a calibrated thermal expansion vessel to protect domestic plumbing from closed-loop pressure spikes."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Sizing & Fuel Capacity Assessment",
        desc: "We calculate peak morning consumption, audit gas/electrical connections, and select optimal tank capacity (40, 50, or 75 gallons)."
      },
      {
        step: 2,
        title: "Safe Decommissioning & Site Cleaning",
        desc: "Full tank drainage, fuel isolation, safe disconnect, and clean site preparation including new drain pan placement."
      },
      {
        step: 3,
        title: "Tank Positioning & Expansion Piping",
        desc: "Setting the new tank on vibration pads, sweating copper lines, and mounting a dedicated thermal expansion vessel."
      },
      {
        step: 4,
        title: "Venting Draft Test & Burner Calibration",
        desc: "Chimney flue draft testing, gas leak sniffer sweep, burner flame calibration, and water temperature dial setting."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹1,650 – ₹2,550 (Illustrative Range)",
      timeframe: "3 – 4 Hours",
      costFactors: [
        "Tank capacity (40-gal vs. 50-gal vs. 75-gal heavy residential)",
        "Venting type (Standard atmospheric chimney draft vs. power-vent with fan motor)",
        "Thermal expansion tank and local code requirements (drain pan, seismic straps)",
        "Gas shutoff valve or dielectric connection upgrades"
      ],
      inclusions: [
        "Premium glass-lined commercial-grade residential storage tank",
        "Pre-pressurized thermal expansion tank and brass relief valve piping",
        "Dielectric unions to stop galvanic electrolysis and pipe corrosion",
        "Solid brass quarter-turn shutoff ball valve",
        "Permit processing and complete haul-away of old equipment"
      ]
    },
    faqs: [
      {
        q: "What size tank water heater does a 4-person family need?",
        a: "For a family of four, a 50-gallon natural gas tank or a 55-gallon electric tank is standard. If you have a deep soaking tub or multiple back-to-back morning showers, a high-recovery 50-gallon or 75-gallon model is recommended."
      },
      {
        q: "Why do I need a thermal expansion tank?",
        a: "When water heats up, it expands in volume. Modern plumbing systems with backflow check valves or pressure reducers trap this expanding water, causing pressure spikes that crack tank linings and void warranties. An expansion tank safely absorbs this pressure."
      },
      {
        q: "How long does a traditional storage tank water heater typically last?",
        a: "With routine annual maintenance and sacrificial anode rod inspections, quality residential storage tanks last between 10 and 14 years."
      },
      {
        q: "What is the difference between atmospheric and power-vent tank units?",
        a: "Atmospheric units vent exhaust naturally up through a vertical chimney flue. Power-vent units have a motorized fan that forces exhaust horizontally through PVC pipes out the side wall, ideal for homes without a chimney."
      },
      {
        q: "How soon after installation will I have hot water?",
        a: "Gas water heaters typically heat a 50-gallon tank in about 35–45 minutes after lighting the burner. Electric units take approximately 60–75 minutes to reach full 120°F temperature."
      }
    ],
    relatedServiceIds: [
      "tankless-water-heater-installation",
      "water-heater-replacement",
      "water-heater-flushing-maintenance"
    ]
  },
  {
    id: "emergency-water-heater-repair",
    slug: "emergency-water-heater-repair",
    title: "Emergency Water Heater Repair",
    category: "Emergency & Diagnostic",
    badge: "24/7 Rapid Response",
    icon: "alert-triangle",
    coverImage: "assets/images/services/emergency-repair-cover.jpg",
    cardImage: "assets/images/services/emergency-repair-cover.jpg",
    detailImage: "assets/images/services/emergency-repair-detail.jpg",
    detailImages: [
      "assets/images/services/emergency-repair-cover.jpg",
      "assets/images/services/emergency-repair-detail.jpg"
    ],
    shortDesc: "Urgent 24/7 emergency dispatch for active basement floods, failed pilot lights, tripping breakers, or sudden loss of household hot water.",
    fullDesc: "Water heater emergencies cause rapid property damage and family disruption. Our master plumbers arrive in fully stocked mobile units with replacement valves, thermocouples, elements, and diagnostics to resolve emergencies on the spot.",
    efficiency: "Rapid Damage Mitigation",
    lifespan: "Immediate Relief & Safe Operation",
    fuelRequirements: "Gas, Electric & Tankless Diagnostics",
    warranty: "1-Year Workmanship on All Repairs",
    whatIncluded: [
      "Immediate over-the-phone shutoff guidance to protect finished living areas",
      "Rapid priority dispatch with mobile vans carrying OEM replacement components",
      "Digital leak pinpointing, pressure testing, and combustion safety analysis",
      "Clear written diagnostic assessment before performing any approved repairs",
      "Component replacement (T&P valves, gas valves, elements, thermocouples)",
      "System re-certification, pressure calibration, and post-repair warranty"
    ],
    whenNeeded: [
      "Water is visibly pouring or weeping from the base or top fittings of the water heater",
      "You detect a faint or strong natural gas odor near the mechanical room",
      "Your household has completely lost all hot water right before work or over the weekend",
      "Your electrical breaker trips immediately every time the water heater attempts to fire",
      "The water heater is emitting loud popping, shrieking, or metallic clanking sounds"
    ],
    howItWorks: "Our emergency protocol begins the second you call. An on-call technician walks you through isolating the cold water supply valve and electrical breaker or gas cock. Once on site, we perform targeted diagnostics using digital multimeters, gas sniffers, and pressure gauges to separate repairable component failures from irreparable tank ruptures.",
    assessmentDetails: "We perform a systematic multi-point safety diagnostic: checking internal vessel pressure, testing temperature/pressure relief valve operation, measuring electrical resistance on upper/lower elements, and testing gas pilot millivoltage.",
    homeownerConsiderations: "If the steel tank body itself has split or rusted through, safety codes prohibit welding or patching. In those cases, our emergency trucks carry replacement units for same-day emergency changeout so you aren't left without hot water.",
    benefitsOrIssues: [
      {
        title: "Priority 60–90 Minute Arrival",
        icon: "clock",
        desc: "Dedicated emergency response teams ready 24/7, including nights, weekends, and holidays to stop leaks before they flood basements."
      },
      {
        title: "Stocked Mobile Warehouse",
        icon: "truck",
        desc: "Our vans carry genuine factory OEM parts for Rheem, A.O. Smith, Bradford White, Rinnai, and Navien for immediate first-visit repairs."
      },
      {
        title: "Transparent Upfront Pricing",
        icon: "file-text",
        desc: "No surprise hourly rates. We diagnose the root cause and provide a clear, written, flat-rate quote before beginning any repair work."
      },
      {
        title: "Comprehensive Safety Testing",
        icon: "shield-alert",
        desc: "Every emergency visit concludes with a combustion safety analysis, carbon monoxide check, and hydrostatic leak verification."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Immediate Phone Triage & Isolation Guidance",
        desc: "We instruct you on safely shutting off the cold inlet valve and gas/breaker switches to halt flooding or electrical hazards."
      },
      {
        step: 2,
        title: "Priority On-Site Arrival & Inspection",
        desc: "Technician arrives equipped with commercial pump gear, leak detection tools, and replacement components."
      },
      {
        step: 3,
        title: "Root-Cause Diagnostics & Written Quote",
        desc: "We isolate the exact malfunction (valve, thermocouple, heating element, control valve) and explain your options."
      },
      {
        step: 4,
        title: "Precision Repair & System Re-Certification",
        desc: "We install factory-certified parts, re-pressurize the system, calibrate water temperature, and verify safe operation."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹220 – ₹520 + parts (Illustrative Range)",
      timeframe: "Priority 60–90 Min Arrival • 1–2 Hr Fix",
      costFactors: [
        "Nature of the failure (standard valve/sensor replacement vs. electronic gas control board)",
        "Equipment type (conventional storage tank vs. high-output condensing tankless)",
        "Time of dispatch (standard business hours vs. 24/7 overnight emergency response)",
        "Need for emergency water extraction or emergency temporary bypass valves"
      ],
      inclusions: [
        "Comprehensive multi-point diagnostic safety inspection",
        "Immediate hazard containment and emergency system depressurization",
        "Precision repair using certified OEM replacement components",
        "Post-repair hydrostatic pressure check and gas sniffer verification",
        "1-Year warranty on all installed replacement parts and workmanship"
      ]
    },
    faqs: [
      {
        q: "What should I do immediately if my water heater is leaking heavily?",
        a: "First, turn off the cold water shutoff valve located directly on the pipe above the heater. Second, turn off the power at the main electrical breaker or turn the gas valve knob to 'OFF'. Third, call our 24/7 hotline at (800) 555-4689 for immediate dispatch."
      },
      {
        q: "Can a leaking water heater tank be repaired or welded?",
        a: "If the leak is coming from a pipe fitting, drain valve, or temperature & pressure (T&P) valve, it can easily be repaired. However, if the inner steel tank vessel itself has rusted through, it cannot be safely patched and must be replaced."
      },
      {
        q: "Why did my water heater suddenly stop heating water?",
        a: "For electric heaters, the most common issue is a tripped high-limit safety cutoff switch or a burned-out lower heating element. For gas units, a dirty thermocouple, extinguished pilot light, or failed electronic gas control valve is typically responsible."
      },
      {
        q: "What causes loud rumbling or popping sounds inside my water heater?",
        a: "Heavy mineral and sediment deposits accumulate at the base of the tank over time. Water trapped beneath this sediment boils and creates popping steam pockets (kettling). An emergency flush or descaling is needed to prevent tank overheating."
      },
      {
        q: "Do you offer emergency service on weekends and holidays?",
        a: "Yes. AquaTherma maintains fully staffed on-call emergency vans 24 hours a day, 365 days a year, with transparent pricing and guaranteed response times."
      }
    ],
    relatedServiceIds: [
      "gas-water-heater-services",
      "water-heater-flushing-maintenance",
      "water-heater-replacement"
    ]
  },
  {
    id: "water-heater-replacement",
    slug: "water-heater-replacement",
    title: "Water Heater Replacement & Upgrades",
    category: "Replacement & Upgrades",
    badge: "Turnkey Solution",
    icon: "refresh-cw",
    coverImage: "assets/images/services/replacement-cover.jpg",
    cardImage: "assets/images/services/replacement-cover.jpg",
    detailImage: "assets/images/services/replacement-detail.jpg",
    detailImages: [
      "assets/images/services/replacement-cover.jpg",
      "assets/images/services/replacement-detail.jpg"
    ],
    shortDesc: "Complete changeout of aging, inefficient, or rusted water heaters with modern high-performance equipment.",
    fullDesc: "Replacing an outdated 10+ year water heater lowers your monthly utility bills, eliminates the constant worry of catastrophic leaks, and gives your household dependable hot water with full warranty protection.",
    efficiency: "Modern Energy Star Compliant (Up to 0.96 UEF)",
    lifespan: "12 – 20 Years Depending on Model",
    fuelRequirements: "Natural Gas, LP Propane, or 240V Electric",
    warranty: "10-Year Tank / 2-Year Installation Guarantee",
    whatIncluded: [
      "In-home assessment comparing storage tank versus tankless options",
      "Careful extraction and eco-friendly recycling of old water heater",
      "Code-mandated upgrades (expansion vessel, drain pan, seismic strapping)",
      "New solid brass full-port ball valves and copper dielectric unions",
      "Gas sediment trap and stainless flexible fuel line installation",
      "Permit filing, city inspection support, and manufacturer warranty registration"
    ],
    whenNeeded: [
      "Your water heater is 10 years old or older and repairs exceed 50% of the replacement value",
      "You observe rusty reddish-brown hot water coming from household faucets",
      "The tank takes noticeably longer to recover hot water after normal morning use",
      "You want to upgrade from an old atmospheric tank to a high-efficiency tankless system"
    ],
    howItWorks: "We treat replacement as an engineering upgrade, not just a hardware swap. Our certified technicians evaluate your existing piping, gas line capacity, and ventilation routes. We decommission and extract the obsolete heater cleanly without scuffing walls, prepare the site with vibration-isolated pads or wall mountings, install new copper connections, and commission the equipment to factory specifications.",
    assessmentDetails: "We inspect the age tag, examine venting condition, test static water pressure, and check for code violations like missing expansion tanks or plastic drain valves that could cause future failures.",
    homeownerConsiderations: "Modern replacements offer significantly higher efficiency. While replacing an atmospheric tank with an identical model is the quickest route, upgrading to a power-vent or tankless system delivers higher energy savings and rebate eligibility.",
    benefitsOrIssues: [
      {
        title: "Lower Monthly Energy Bills",
        icon: "trending-down",
        desc: "Modern replacement units feature thick non-CFC foam insulation and efficient modulating burners that slash fuel consumption."
      },
      {
        title: "Zero Flood Anxiety",
        icon: "shield-check",
        desc: "Replace aging tanks before the steel shell rusts through, preventing catastrophic basement floods and ruined drywall."
      },
      {
        title: "Code-Compliant Safety Upgrades",
        icon: "check-circle",
        desc: "We bring your plumbing up to current municipal safety codes with expansion vessels, proper relief piping, and brass ball valves."
      },
      {
        title: "Full Factory Warranty Protection",
        icon: "award",
        desc: "Enjoy peace of mind with 6-to-15 year equipment warranties backed by AquaTherma's certified master plumber installation guarantee."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Equipment & Efficiency Consultation",
        desc: "We evaluate your current heater's age, family hot water habits, and present clear good/better/best replacement options."
      },
      {
        step: 2,
        title: "Clean Extraction & Safe Disposal",
        desc: "Careful drain down, fuel isolation, and haul-away on heavy-duty dollies without damaging finished doorways or flooring."
      },
      {
        step: 3,
        title: "Precision Re-Installation & Code Updates",
        desc: "Setting the new system, installing thermal expansion vessel, full-port brass valves, and verified venting."
      },
      {
        step: 4,
        title: "System Commissioning & Warranty Filing",
        desc: "Pressure testing, digital thermostat calibration, combustion analysis, and completing official warranty documentation."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹1,750 – ₹3,900 (Illustrative Range)",
      timeframe: "3 – 5 Hours",
      costFactors: [
        "Replacement type (conventional storage tank vs. high-efficiency tankless conversion)",
        "Equipment capacity and recovery rating (40-gal vs. 50-gal vs. 75-gal)",
        "Venting modifications needed (metal chimney flue vs. direct PVC side-wall venting)",
        "Gas line upsizing or electrical circuit capacity requirements"
      ],
      inclusions: [
        "Brand new high-efficiency water heater unit (tank or tankless)",
        "Complete removal, recycling, and disposal of your old water heater",
        "Pre-pressurized thermal expansion tank and brass relief valve piping",
        "All new copper fittings, brass ball valves, and dielectric unions",
        "Local permit filing and comprehensive 1-year labor warranty"
      ]
    },
    faqs: [
      {
        q: "How do I know whether to repair or replace my aging water heater?",
        a: "The industry standard is the '50% Rule': If your water heater is over 8–10 years old and the required repair exceeds 50% of the replacement cost, replacement is far more economical. Units older than 10 years are also prone to cascading part failures and tank shell breaches."
      },
      {
        q: "What are the early warning signs that a water heater is about to fail?",
        a: "Key warning signs include: reddish or brown-tinted hot water, moisture or weeping around the base, loud popping or rumbling sounds during heating cycles, and metallic odors or lukewarm water."
      },
      {
        q: "Is haul-away and disposal of the old water heater included?",
        a: "Yes. Every AquaTherma replacement includes complete draining, safe extraction, and environmentally compliant recycling and disposal of your old equipment at no additional cost."
      },
      {
        q: "How long does a complete water heater replacement take?",
        a: "A standard like-for-like storage tank replacement takes approximately 3 to 4 hours. A tank-to-tankless conversion requiring new venting and gas lines takes roughly 4 to 6 hours."
      },
      {
        q: "Will a new water heater qualify for federal tax credits or local utility rebates?",
        a: "Yes! High-efficiency condensing tankless units and hybrid heat pump water heaters qualify for up to ₹2,000 in federal clean energy tax credits (Inflation Reduction Act) plus local utility cash-back rebates. We provide all qualifying documentation."
      }
    ],
    relatedServiceIds: [
      "tankless-water-heater-installation",
      "tank-water-heater-installation",
      "water-heater-flushing-maintenance"
    ]
  },
  {
    id: "water-heater-flushing-maintenance",
    slug: "water-heater-flushing-maintenance",
    title: "Water Heater Maintenance & Flushing",
    category: "Preventative Maintenance",
    badge: "Preventative Care",
    icon: "droplet",
    coverImage: "assets/images/services/maintenance-cover.jpg",
    cardImage: "assets/images/services/maintenance-cover.jpg",
    detailImage: "assets/images/services/maintenance-detail.jpg",
    detailImages: [
      "assets/images/services/maintenance-cover.jpg",
      "assets/images/services/maintenance-detail.jpg"
    ],
    shortDesc: "Annual mineral descaling, sediment flushing, anode rod inspection, and safety valve checks to double your equipment lifespan.",
    fullDesc: "Sediment buildup acts as an insulating blanket between your burner and the water, overheating the bottom steel and causing rumbling noises. Our annual precision tune-up restores factory thermal transfer.",
    efficiency: "Restores Factory 100% Thermal Transfer",
    lifespan: "Can Double Operating Lifespan",
    fuelRequirements: "Gas, Electric & Tankless Models",
    warranty: "Full Multi-Point Safety Certificate",
    whatIncluded: [
      "Complete tank bottom sediment slurry flush with commercial high-flow pump",
      "Chemical descaling flush for tankless heat exchangers using food-grade citric solution",
      "Physical inspection of the sacrificial magnesium/aluminum anode rod",
      "Temperature and Pressure (T&P) safety relief valve manual trip test",
      "Burner orifice cleanout, pilot flame calibration, and draft inspection",
      "Electrical heating element resistance testing and thermostat calibration"
    ],
    whenNeeded: [
      "Your water heater makes popping, kettling, or rumbling noises when heating",
      "It has been more than 12 months since the last professional maintenance flush",
      "You notice a decline in water temperature or slower hot water recovery times",
      "You have moderate to hard municipal or well water (>7 grains per gallon)"
    ],
    howItWorks: "Hard water contains dissolved calcium and magnesium minerals that precipitate out of solution when heated. In tank units, this mineral scale accumulates as a dense layer on the bottom floor, muffling heat and overheating the tank metal. In tankless units, scale coats the microscopic heat exchanger waterways. We connect high-volume hoses and descaling pump kits to dissolve and purge this mineral buildup completely.",
    assessmentDetails: "We test incoming water hardness, inspect the sacrificial anode rod for depletion (recommending replacement once 75% eroded), test relief valve seating, and inspect burner flame color.",
    homeownerConsiderations: "Annual maintenance is the single most cost-effective way to protect your water heater. It preserves the manufacturer warranty, restores heating speed, prevents premature tank breaches, and lowers monthly energy bills.",
    benefitsOrIssues: [
      {
        title: "Restores Quick Recovery",
        icon: "zap",
        desc: "Removing insulating sediment allows heat from the burner to transfer directly into the water, cutting recovery reheating time by up to 25%."
      },
      {
        title: "Eliminates Kettle Popping Noises",
        icon: "volume-x",
        desc: "Purging trapped mineral rocks stops boiling steam pockets, restoring whisper-quiet heating cycle operation."
      },
      {
        title: "Prevents Premature Tank Rust",
        icon: "shield-check",
        desc: "Replacing depleted sacrificial anode rods ensures the rod corrodes instead of your expensive steel water heater vessel."
      },
      {
        title: "Maintains Manufacturer Warranty",
        icon: "file-check",
        desc: "Major tankless and tank manufacturers require documented annual maintenance to validate heat exchanger and tank warranties."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Operational Pre-Test & Water Hardness Check",
        desc: "We verify operating temperature, check static water pressure, and test relief valve mechanical action."
      },
      {
        step: 2,
        title: "High-Volume Sediment Purge or Descaling",
        desc: "We connect commercial flush pumps to agitate and extract sediment slurry or circulate non-toxic citric descaler through tankless loops."
      },
      {
        step: 3,
        title: "Sacrificial Anode Rod Physical Inspection",
        desc: "We extract the anode rod to measure core wire exposure and provide honest replacement advice if depleted."
      },
      {
        step: 4,
        title: "Re-Pressurization & Safety Certification",
        desc: "We refill the system, purge trapped air, inspect flame combustion, and provide a completed multi-point safety report."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹149 – ₹249 (Illustrative Range)",
      timeframe: "1 – 1.5 Hours",
      costFactors: [
        "Water heater type (standard storage tank sediment flush vs. chemical tankless descaling)",
        "Anode rod replacement if depleted (powered titanium vs. standard magnesium rod)",
        "Severity of mineral calcification and age of existing drain valve",
        "Bundled annual preventative maintenance membership plans"
      ],
      inclusions: [
        "Complete sediment slurry purge or tankless chemical descaling flush",
        "Physical inspection of the sacrificial anode rod",
        "T&P safety relief valve mechanical operation test",
        "Gas burner cleanout or electric element resistance measurement",
        "Comprehensive written water heating health checklist"
      ]
    },
    faqs: [
      {
        q: "How often should a residential water heater be flushed?",
        a: "Manufacturers recommend flushing your water heater once every 12 months. In areas with hard water (>7 grains per gallon), flushing every 6 to 9 months prevents mineral buildup from bonding permanently to the tank lining."
      },
      {
        q: "What is a sacrificial anode rod and why is it so important?",
        a: "The anode rod is a magnesium or aluminum rod inside the tank that attracts corrosive elements in water. It intentionally corrodes so the steel tank doesn't. When the anode rod is completely depleted, water starts rusting the tank itself, leading to leaks."
      },
      {
        q: "What causes rumbling or popping kettle noises inside a water heater?",
        a: "As mineral sediment collects at the bottom of the tank, water gets trapped underneath the sediment layer. The intense heat from the burner turns this trapped water into steam bubbles that pop violently against the sediment crust."
      },
      {
        q: "Does failing to flush a water heater void the manufacturer warranty?",
        a: "Yes. Many premium tankless manufacturers (such as Rinnai and Navien) specifically state in their warranty terms that heat exchanger failures caused by scale buildup without documented annual descaling are not covered."
      },
      {
        q: "Can maintenance restore water temperature and recovery speed?",
        a: "Absolutely. Flushing removes the thick insulating barrier of scale between the burner flame and the water, allowing heat to transfer cleanly and restoring full factory recovery performance."
      }
    ],
    relatedServiceIds: [
      "tankless-water-heater-installation",
      "tank-water-heater-installation",
      "water-heater-replacement"
    ]
  },
  {
    id: "gas-water-heater-services",
    slug: "gas-water-heater-services",
    title: "Gas & Electric Water Heater Services",
    category: "Diagnostics & Service",
    badge: "Dual-Fuel Diagnostics",
    icon: "flame",
    coverImage: "assets/images/services/gas-electric-cover.jpg",
    cardImage: "assets/images/services/gas-electric-cover.jpg",
    detailImage: "assets/images/services/gas-electric-detail.jpg",
    detailImages: [
      "assets/images/services/gas-electric-cover.jpg",
      "assets/images/services/gas-electric-detail.jpg"
    ],
    shortDesc: "Precision diagnostic service for gas burner valves, thermocouples, draft hoods, and 240V dual heating elements and digital thermostats.",
    fullDesc: "Expert diagnostic and repair services for both natural gas/propane and electric water heaters. We verify combustion air ventilation, test thermocouple millivoltage, replace electric elements, and calibrate thermostats to exact safety standards.",
    efficiency: "Ensures Peak Combustion & Electrical Safety",
    lifespan: "Extends System Operational Life",
    fuelRequirements: "Natural Gas, LP Propane & 240V Electric",
    warranty: "1-Year Workmanship on All Diagnostics & Parts",
    whatIncluded: [
      "Digital manometer fuel pressure check (gas) or 240V voltage load test (electric)",
      "Thermocouple, thermopile, and flame rectification sensor cleaning and microvolt testing",
      "Upper and lower electric heating element resistance ohm measurements",
      "Thermostat differential calibration and anti-scald temperature adjustment (120°F)",
      "Gas control valve combination solenoid inspection and pilot orifice cleanout",
      "Electronic draft hood and carbon monoxide exhaust flue testing"
    ],
    whenNeeded: [
      "Your gas pilot light flickers out repeatedly or refuses to stay lit when releasing the knob",
      "Your electric water heater trips the household electrical breaker repeatedly",
      "Water is lukewarm or hot water runs out much faster than usual",
      "You notice soot, yellow flames, or metallic gas odors around the heater"
    ],
    howItWorks: "Gas and electric water heaters operate on distinct heating principles. Gas units rely on gas pressure regulation, pilot ignition, thermocouple millivoltage, and clean draft venting. Electric units rely on 240V circuits, dual immersion elements, and high-limit cutoffs. Our certified technicians carry specialized diagnostic instruments for both systems to pinpoint issues quickly.",
    assessmentDetails: "We test gas supply pressure under static and full burner load, measure thermocouple millivolts, inspect the flame sensor, check electrical element resistance (normal range 12.5–13.0 ohms), and test the high-limit ECO cutoff.",
    homeownerConsiderations: "Both gas and electric water heaters carry unique safety considerations. Gas heaters require proper ventilation to prevent carbon monoxide accumulation. Electric heaters require dry-fire prevention to ensure elements are never energized in an empty tank.",
    benefitsOrIssues: [
      {
        title: "Clean, Safe Combustion",
        icon: "flame",
        desc: "Properly calibrated gas burners burn a crisp blue flame, eliminating toxic carbon monoxide risks and unburned fuel waste."
      },
      {
        title: "Balanced Electrical Heating",
        icon: "zap",
        desc: "Replacing failed upper or lower elements restores full-tank heating capacity so showers remain comfortably warm."
      },
      {
        title: "Accurate Anti-Scald Temperatures",
        icon: "thermometer",
        desc: "Calibrating thermostats to the recommended 120°F prevents dangerous scalding while ensuring optimal hot water capacity."
      },
      {
        title: "Certified OEM Components",
        icon: "shield-check",
        desc: "We use factory-certified thermostats, thermocouples, and Incoloy elements with tight manufacturing tolerances."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Fuel & Power Safety Diagnostic",
        desc: "We test electrical circuit continuity or check gas pressure with digital manometers and gas leak sniffers."
      },
      {
        step: 2,
        title: "Component-Level Isolation & Testing",
        desc: "Testing individual thermostats, thermocouple millivolts, igniters, and element resistance."
      },
      {
        step: 3,
        title: "Precision Replacement of Faulty Parts",
        desc: "Replacing failed components with certified OEM factory parts and clean new gaskets."
      },
      {
        step: 4,
        title: "Full Cycle Re-Testing & Safety Sign-Off",
        desc: "Monitoring full heating cycle from ignition to thermostat satisfaction, verifying zero gas leaks or electrical shorts."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹185 – ₹380 + parts (Illustrative Range)",
      timeframe: "1 – 2 Hours",
      costFactors: [
        "Fuel type and component needed (thermocouple/igniter vs. smart electronic gas control valve)",
        "Element replacement requirements (single element vs. dual Incoloy elements with thermostats)",
        "Accessibility of burner assembly and sealed combustion chamber gaskets",
        "Venting or electrical disconnect switch code requirements"
      ],
      inclusions: [
        "Comprehensive combustion or electrical safety diagnostic",
        "Cleanout of pilot orifice and burner tray or element port cleanout",
        "Installation of certified replacement components",
        "Flame sensor polish, carbon monoxide check, and water temperature calibration",
        "1-Year warranty on all replacement parts and labor"
      ]
    },
    faqs: [
      {
        q: "What is the difference between electric and gas water heater maintenance?",
        a: "Gas water heaters require combustion safety checks, flue draft testing, and thermocouple cleaning to ensure safe fuel burning. Electric water heaters require testing electrical wiring, checking 240V heating elements for scale coating, and testing thermostats."
      },
      {
        q: "Why does my electric water heater keep tripping the electrical breaker?",
        a: "A breaker trip typically indicates that a heating element sheath has cracked, causing water to touch the internal electric wire and creating a direct ground fault short. Replacing the shorted element resolves the issue."
      },
      {
        q: "Why won't the gas pilot light stay lit when I release the knob?",
        a: "The thermocouple must generate 20–30 millivolts of electricity from the pilot flame heat to hold the gas valve magnet open. A weak, dirty, or burned-out thermocouple causes the valve to shut off immediately."
      },
      {
        q: "What temperature should my water heater thermostat be set to?",
        a: "The Consumer Product Safety Commission (CPSC) recommends setting your thermostat to 120°F (49°C). This temperature prevents household scalding burns while providing plenty of hot water for domestic use."
      },
      {
        q: "How do I know if a heating element is burned out?",
        a: "If your water is only lukewarm or hot water runs out in just a few minutes, the lower heating element is usually dead. We test element continuity with a digital multimeter to confirm whether the circuit is open."
      }
    ],
    relatedServiceIds: [
      "emergency-water-heater-repair",
      "water-heater-flushing-maintenance",
      "tank-water-heater-installation"
    ]
  }
];

// Read existing other services from content to keep all 12 services intact in catalog
const servicesStart = content.indexOf('services: [');
const projectsStart = content.indexOf('// 9 FEATURED PROJECTS');

if (servicesStart === -1 || projectsStart === -1) {
  console.error('Could not find boundaries in data.js');
  process.exit(1);
}

// Convert services to formatted code
const servicesCode = 'services: ' + JSON.stringify(services, null, 2) + ',\n\n  ';

const newContent = content.slice(0, servicesStart) + servicesCode + content.slice(projectsStart);
fs.writeFileSync(dataFile, newContent, 'utf8');
console.log('Successfully updated AQUA_DATA.services in assets/js/data.js!');
