const fs = require('fs');
const path = require('path');

const services12 = [
  // =========================================================================
  // CATEGORY 1: INSTALLATION (4 Services)
  // =========================================================================
  {
    id: "tank-water-heater-installation",
    slug: "tank-water-heater-installation",
    title: "Tank Water Heater Installation",
    category: "installation",
    categoryLabel: "Installation",
    badge: "Standard & Reliable",
    icon: "database",
    coverImage: "assets/images/services/tank-installation-cover.jpg",
    cardImage: "assets/images/services/tank-installation-cover.jpg",
    detailImage: "assets/images/services/tank-installation-detail.jpg",
    detailImages: [
      "assets/images/services/tank-installation-cover.jpg",
      "assets/images/services/tank-installation-detail.jpg"
    ],
    shortDesc: "Dependable 40 to 80-gallon storage water heaters engineered for high first-hour delivery, code-compliant expansion control, and lasting household comfort.",
    fullDesc: "Our licensed plumbers install commercial-grade glass-lined storage tank water heaters equipped with brass drain valves, thermal expansion tanks, and dielectric unions. Every unit is precisely calibrated for household volume and local water pressure.",
    efficiency: "0.64 – 0.72 UEF",
    lifespan: "10 – 14 Years",
    fuelRequirements: "Natural Gas, LP Propane or 240V Electric",
    warranty: "6 to 10-Year Tank / 1-Year Labor",
    whatIncluded: [
      "Complete household peak demand and recovery rate sizing evaluation",
      "Safe draining, disconnection, and certified recycling of old water heater",
      "Installation of code-compliant thermal expansion tank and brass ball shutoff",
      "Rigid copper supply connection with dielectric unions to prevent galvanic corrosion",
      "Temperature & Pressure (T&P) relief valve piping to within 6 inches of floor/drain",
      "Static water pressure test, initial heat-cycle timing, and homeowner orientation"
    ],
    whenNeeded: [
      "Your existing storage tank has reached 10+ years and shows exterior corrosion",
      "You require an economical, time-tested water heating replacement with low upfront cost",
      "Your household hot water demand exceeds the recovery capacity of an undersized tank",
      "You prefer standard atmospheric or power-vent venting through existing chimneys/chases"
    ],
    howItWorks: "Cold water enters through an internal dip tube, depositing directly at the bottom where gas burners or electric immersion heating elements bring it to target temperature. Hot water naturally rises to the top outlet, maintaining a pressurized reservoir ready for immediate delivery across all household fixtures simultaneously.",
    assessmentDetails: "During our pre-installation inspection, certified plumbers test municipal static water pressure, verify thermal expansion compliance, inspect electrical circuit amp ratings or gas manifold pressure, and ensure proper flue draft velocity to prevent backdrafting.",
    homeownerConsiderations: "Storage water heaters continuously maintain hot water in reserve, resulting in modest standby energy consumption compared to tankless units. Proper maintenance—including annual tank flushing and sacrificial anode rod inspection—substantially extends tank lifespan and maintains recovery performance.",
    benefitsOrIssues: [
      {
        title: "High First-Hour Rating",
        icon: "droplets",
        desc: "Delivers large volumes of hot water instantaneously, easily handling multiple morning showers without electronic lag."
      },
      {
        title: "Economical Investment",
        icon: "indian-rupee",
        desc: "Significantly lower upfront equipment and installation cost compared to whole-home tankless conversions."
      },
      {
        title: "Proven Reliability",
        icon: "shield-check",
        desc: "Simple, robust mechanical components with straightforward serviceability and widely available OEM parts."
      },
      {
        title: "Code-Certified Safety",
        icon: "check-circle",
        desc: "Fitted with calibrated thermal expansion tanks, ASME rated T&P relief valves, and earthquake strapping."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Demand Audit & Sizing",
        desc: "We calculate your household's peak first-hour hot water demand and match the ideal gallon capacity and recovery rate."
      },
      {
        step: 2,
        title: "Safe Decommissioning",
        desc: "Complete drainage, safe gas/electrical disconnection, and eco-friendly haul-away of your decommissioned water heater."
      },
      {
        step: 3,
        title: "Code-Compliant Assembly",
        desc: "Installation of the new tank, expansion tank, brass shutoffs, gas flex line, sediment trap, and full-port drain valve."
      },
      {
        step: 4,
        title: "Pressurization & Combustion Check",
        desc: "Tank filling, air bleeding, digital draft test, thermostat calibration to 120°F, and final customer sign-off."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹1,650 – ₹2,750 (Illustrative Range)",
      timeframe: "3 – 5 Hours",
      costFactors: [
        "Tank capacity (40, 50, or 75-gallon models)",
        "Venting method (standard atmospheric draft vs. power-vent exhaust fan)",
        "Gas supply line or electrical service upgrades required by local code",
        "Thermal expansion tank and local plumbing inspection permit fees"
      ],
      inclusions: [
        "Commercial-grade glass-lined water heater unit",
        "Thermal expansion tank and heavy-duty brass ball valve",
        "New gas flex line, sediment trap, or 240V electrical connection",
        "Complete removal and certified scrap recycling of the old unit",
        "100% plumbing code compliance guarantee and 1-year labor warranty"
      ]
    },
    faqs: [
      {
        q: "What size storage tank water heater does my family need?",
        a: "A typical family of 2 to 3 requires a 40-gallon tank; a family of 3 to 4 benefits from a 50-gallon tank; and households with 5 or more members or large soaking tubs typically require a 75-gallon tank or a high-recovery unit."
      },
      {
        q: "Why is a thermal expansion tank necessary with a new installation?",
        a: "When water heats up, it expands in volume. Modern municipal water meters have one-way check valves that create a closed plumbing system. Without an expansion tank, thermal expansion creates extreme pressure spikes that burst pipes and rupture water heaters."
      },
      {
        q: "How long does a standard storage tank water heater last?",
        a: "The average lifespan is 10 to 12 years. Regular annual maintenance—including flushing sediment and replacing the sacrificial anode rod every 4 to 6 years—can extend operational lifespan to 15 years."
      },
      {
        q: "What is the difference between atmospheric and power-vent water heaters?",
        a: "Atmospheric units rely on natural heat buoyancy to vent combustion exhaust up an existing metal chimney. Power-vent units use an electric fan to push exhaust horizontally through PVC or polypropylene pipe directly through an outside wall."
      },
      {
        q: "Can I replace an electric water heater with a gas unit?",
        a: "Yes, provided adequate natural gas supply lines and proper exterior exhaust venting routes exist in your utility area. Our technicians evaluate feasibility during the initial home assessment."
      }
    ],
    relatedServiceIds: [
      "tankless-water-heater-installation",
      "water-heater-replacement",
      "water-heater-flushing-maintenance"
    ]
  },
  {
    id: "tankless-water-heater-installation",
    slug: "tankless-water-heater-installation",
    title: "Tankless Water Heater Installation",
    category: "installation",
    categoryLabel: "Installation",
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
    efficiency: "Up to 0.96 UEF",
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
        title: "Demand & Infrastructure Audit",
        desc: "We test groundwater temperature, calculate peak GPM across all fixtures, and verify gas meter pressure or electrical service headroom."
      },
      {
        step: 2,
        title: "Decommissioning & Haul-Away",
        desc: "Complete drainage, electrical/gas disconnect, and environmentally compliant recycling and removal of your decommissioned water heater."
      },
      {
        step: 3,
        title: "Precision Wall Mount & Venting",
        desc: "Structural wall anchoring, concentric zero-clearance exterior venting, rigid copper water piping, and isolation service valves."
      },
      {
        step: 4,
        title: "Combustion Analysis & Sign-Off",
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
        q: "Can a tankless water heater handle multiple showers at once?",
        a: "Yes. When properly sized for your climate zone's winter groundwater temperature, a modern 199,000 BTU condensing tankless system produces up to 9.8–11 GPM, easily supporting two to three showers and an appliance simultaneously."
      },
      {
        q: "Do I need to upgrade my natural gas line for a tankless unit?",
        a: "Many newer condensing units (like Navien NPE-A2) can operate on a 1/2-inch gas line up to 24 feet, but larger homes or longer pipe runs typically require a dedicated 3/4-inch gas line to deliver full 199,000 BTU burner demand."
      },
      {
        q: "What maintenance does a tankless water heater require?",
        a: "Manufacturers require annual descaling with food-grade citric acid or vinegar to remove calcium and mineral deposits from the stainless steel heat exchanger. This 45-minute procedure preserves warranty coverage and efficiency."
      },
      {
        q: "How much energy will a tankless water heater save?",
        a: "According to the U.S. Department of Energy, homes using 41 gallons or less of hot water daily achieve 24%–34% higher energy efficiency with on-demand water heaters compared to conventional storage tanks."
      },
      {
        q: "Is there a delay before hot water reaches the faucet?",
        a: "A standard tankless unit begins heating instantly upon detecting water flow, but water still travels through household pipes. For instant hot water without delay, we install models with built-in internal recirculation pumps."
      }
    ],
    relatedServiceIds: [
      "tank-water-heater-installation",
      "gas-water-heater-installation",
      "water-heater-flushing-maintenance"
    ]
  },
  {
    id: "gas-water-heater-installation",
    slug: "gas-water-heater-installation",
    title: "Gas Water Heater Installation",
    category: "installation",
    categoryLabel: "Installation",
    badge: "Natural Gas & LP",
    icon: "flame",
    coverImage: "assets/images/services/gas-installation-cover.jpg",
    cardImage: "assets/images/services/gas-installation-cover.jpg",
    detailImage: "assets/images/services/gas-installation-detail.jpg",
    detailImages: [
      "assets/images/services/gas-installation-cover.jpg",
      "assets/images/services/gas-installation-detail.jpg"
    ],
    shortDesc: "Certified installation of natural gas and liquid propane water heaters with digital manometer pressure calibration, code venting, and sediment trap assembly.",
    fullDesc: "Specialized gas water heating installation performed by certified gas technicians. We calibrate gas manifold pressure, inspect flue drafts, install full-port shutoff valves, and guarantee 100% airtight, code-compliant fuel delivery.",
    efficiency: "Up to 0.82 UEF",
    lifespan: "10 – 14 Years",
    fuelRequirements: "Natural Gas (3.5\" W.C.) or LP Propane (10.0\" W.C.)",
    warranty: "6 to 10-Year Tank / 1-Year Workmanship",
    whatIncluded: [
      "Gas manifold static and dynamic pressure test with digital manometer",
      "New yellow-coated stainless gas flex connector and full-port gas cock",
      "Code-mandated sediment trap drip leg installation on gas feed",
      "Draft hood alignment, smoke pencil draft verification, and CO testing",
      "Thermal expansion tank, copper water connections, and brass drain valve",
      "Environmentally certified recycling of decommissioned equipment"
    ],
    whenNeeded: [
      "You have existing natural gas or propane service and desire high recovery rates",
      "Your current gas heater produces yellow soot, metallic odors, or weak hot water",
      "Your gas control valve is obsolete or leaking fuel at the thermopile connection",
      "You need an efficient replacement that operates even during power outages"
    ],
    howItWorks: "Gas water heaters utilize natural gas or propane burners positioned beneath a curved steel tank bottom. A central flue baffle slows rising hot gases, maximizing heat transfer into the surrounding water. Atmospheric gas heaters require zero electrical power, functioning continuously during storm-related power outages.",
    assessmentDetails: "We verify total household BTU load across all gas appliances, test gas meter regulator output, inspect metal flue pipes for corrosion or negative pressure backdrafts, and calculate required combustion air ventilation.",
    homeownerConsiderations: "Adequate combustion air is mandatory. If installed in a tight utility closet, louvered doors or dedicated fresh-air intake ducts must be provided. Carbon monoxide detectors must always be installed on every floor of the home.",
    benefitsOrIssues: [
      {
        title: "Fast Recovery Rate",
        icon: "zap",
        desc: "Gas heats water twice as fast as electric resistance, replenishing hot water in under 40 minutes after heavy use."
      },
      {
        title: "Storm & Blackout Resilient",
        icon: "shield-check",
        desc: "Atmospheric pilot systems generate their own millivoltage, providing piping-hot water even during citywide power outages."
      },
      {
        title: "Lower Operating Cost",
        icon: "indian-rupee",
        desc: "In most regions, natural gas delivers thermal energy at approximately one-third the utility cost of electricity."
      },
      {
        title: "Combustion Safety Guard",
        icon: "check-circle",
        desc: "Sealed burner chambers with flammable vapor ignition resistance (FVIR) protect finished basements from fire risks."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Gas Supply Line Inspection",
        desc: "We test gas supply pressure with a digital manometer and ensure pipe diameter matches appliance BTU rating."
      },
      {
        step: 2,
        title: "Decommissioning & Safe Vent Prep",
        desc: "Gas isolation, tank drainage, safe removal, and chimney or B-vent flue inspection for obstructions."
      },
      {
        step: 3,
        title: "Piping & Sediment Trap Install",
        desc: "Installation of the new gas heater, sediment trap drip leg, gas flex line, expansion tank, and shutoff valves."
      },
      {
        step: 4,
        title: "Electronic Leak Sniff & Draft Test",
        desc: "Combustible gas leak test at all fittings, draft velocity confirmation, and burner flame calibration."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹1,750 – ₹2,850 (Illustrative Range)",
      timeframe: "3 – 5 Hours",
      costFactors: [
        "Fuel type (natural gas conversion to liquid propane requires burner orifice swap)",
        "Exhaust venting configuration (atmospheric B-vent vs. powered horizontal exhaust)",
        "Gas supply pipe extension or shutoff valve replacement",
        "Combustion air ducting requirements in confined closets"
      ],
      inclusions: [
        "Heavy-duty glass-lined gas storage water heater",
        "New gas flex line connector, sediment trap, and shutoff valve",
        "Thermal expansion tank and copper plumbing fittings",
        "Certified recycling and disposal of the old heater",
        "Combustion analysis and carbon monoxide safety verification"
      ]
    },
    faqs: [
      {
        q: "Will a gas water heater work during a power outage?",
        a: "Standard atmospheric gas water heaters require no electricity and will operate normally during a power outage. Power-vent models that use an electric exhaust blower do require electrical power."
      },
      {
        q: "What is the purpose of the sediment trap drip leg on a gas line?",
        a: "A sediment trap is a code-required pipe tee that allows gravity to catch moisture and debris in the gas line before they can clog the sensitive gas control valve or burner orifice."
      },
      {
        q: "How can I tell if my gas water heater has a drafting issue?",
        a: "Signs of poor draft include melted plastic grommets atop the water heater, soot stains around the draft hood, or condensation rust on top of the tank. Our technicians test draft with smoke gauges."
      },
      {
        q: "Can this heater be converted from natural gas to propane?",
        a: "Most manufacturers offer certified LP conversion kits with smaller burner orifices and high-pressure regulator springs. Conversions must always be performed by a licensed gas technician."
      },
      {
        q: "How often should gas burner assemblies be cleaned?",
        a: "We recommend inspecting and vacuuming the burner tray, flame arrestor screen, and air intake louvers once every 12 to 24 months to ensure crisp blue combustion."
      }
    ],
    relatedServiceIds: [
      "tankless-water-heater-installation",
      "pilot-light-ignition-repair",
      "water-heater-replacement"
    ]
  },
  {
    id: "electric-water-heater-installation",
    slug: "electric-water-heater-installation",
    title: "Electric Water Heater Installation",
    category: "installation",
    categoryLabel: "Installation",
    badge: "Zero-Emission Electric",
    icon: "zap",
    coverImage: "assets/images/services/electric-installation-cover.jpg",
    cardImage: "assets/images/services/electric-installation-cover.jpg",
    detailImage: "assets/images/services/electric-installation-detail.jpg",
    detailImages: [
      "assets/images/services/electric-installation-cover.jpg",
      "assets/images/services/electric-installation-detail.jpg"
    ],
    shortDesc: "High-efficiency 240V electric water heater installation with dual Incoloy heating elements, dedicated electrical disconnects, and advanced dry-fire protection.",
    fullDesc: "Complete electric water heating solutions for modern homes. We verify 240V circuit breaker amperage, install dual high-watt-density elements, configure thermal expansion tanks, and eliminate all combustion exhaust and gas piping requirements.",
    efficiency: "Up to 0.93 UEF",
    lifespan: "10 – 14 Years",
    fuelRequirements: "Dedicated 240V / 30-Amp Electrical Circuit",
    warranty: "6 to 10-Year Tank / 1-Year Workmanship",
    whatIncluded: [
      "Dedicated 240V electrical circuit voltage and wire gauge inspection (10/2 with ground)",
      "Safe high-voltage electrical disconnect and lockout verification",
      "Installation of dual upper and lower premium Incoloy heating elements",
      "Thermal expansion tank and heavy-duty brass ball shutoff valve",
      "Dry-fire protection protocol ensuring 100% full water tank prior to energizing",
      "Disposal and eco-friendly scrap recycling of old water heater"
    ],
    whenNeeded: [
      "Your home lacks natural gas lines or you are pursuing an all-electric decarbonized home",
      "Your utility space lacks an exterior wall or chimney chase for combustion venting",
      "Your current electric unit suffers from burned-out heating elements or rusted tank base",
      "You want zero carbon monoxide risks and silent, whisper-quiet water heating operation"
    ],
    howItWorks: "Electric water heaters use two electric immersion elements (upper and lower) controlled by independent surface-mounted thermostats. The upper element heats first to ensure hot water at the top outlet, then shifts electrical power to the lower element to warm the remaining volume, optimizing energy usage without flue losses.",
    assessmentDetails: "Technicians measure incoming electrical panel voltage, inspect circuit breaker sizing (typically 30 amps for 4500W elements), check grounding electrode conductor integrity, and measure water hardness to recommend low-watt-density elements if necessary.",
    homeownerConsiderations: "Electric heaters produce zero combustion emissions and require no chimney or venting penetrations, making them flexible to install in interior closets or basements. However, electricity rates are generally higher than natural gas per BTU, making insulation blankets and timers beneficial.",
    benefitsOrIssues: [
      {
        title: "Zero Combustion Emissions",
        icon: "shield-check",
        desc: "Completely eliminates natural gas piping, carbon monoxide risks, and chimney draft requirements."
      },
      {
        title: "Flexible Installation Placement",
        icon: "maximize",
        desc: "Can be installed in interior closets, under stairs, or in finished basements where venting is impossible."
      },
      {
        title: "Silent Operation",
        icon: "volume-x",
        desc: "Immersion elements operate in complete silence with zero burner noise, draft blowers, or mechanical vibration."
      },
      {
        title: "Low Upfront Maintenance",
        icon: "check-circle",
        desc: "No gas valves, thermocouples, or exhaust vents to clean. Straightforward modular element replacement."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Electrical Load Verification",
        desc: "We verify breaker panel capacity, check voltage across 240V legs, and inspect wiring integrity."
      },
      {
        step: 2,
        title: "Safe Decommissioning",
        desc: "Lockout-tagout power disconnection, complete tank draining, and environmentally compliant haul-away."
      },
      {
        step: 3,
        title: "Plumbing & Electrical Wiring",
        desc: "Setting the new tank, expansion tank installation, flexible metal conduit wiring, and grounding bonding."
      },
      {
        step: 4,
        title: "Dry-Fire Prevention & Testing",
        desc: "Full tank pressurization and air purge before energizing, followed by multimeter amperage verification."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹1,550 – ₹2,500 (Illustrative Range)",
      timeframe: "3 – 4 Hours",
      costFactors: [
        "Tank capacity (40, 50, or 80-gallon models)",
        "Electrical service updates (breaker upgrade or new wiring run from main panel)",
        "Thermal expansion tank and elevated safety drain pan requirements",
        "Upgraded low-watt-density Incoloy heating elements for hard water regions"
      ],
      inclusions: [
        "Commercial-grade glass-lined electric water heater",
        "Dual high-grade immersion heating elements and dual thermostats",
        "Thermal expansion tank, brass drain valve, and dielectric fittings",
        "Old water heater removal and environmentally compliant recycling",
        "Dry-fire prevention verification and 1-year labor warranty"
      ]
    },
    faqs: [
      {
        q: "What is dry-fire damage on an electric water heater?",
        a: "Dry-fire occurs when electric power is turned on before the water heater tank is completely full of water. An exposed heating element in air will burn out in under 30 seconds. Our certified technicians strictly purge all air before energizing."
      },
      {
        q: "What electrical circuit is required for a standard electric water heater?",
        a: "Most residential 40 to 50-gallon electric water heaters require a dedicated 240-volt, 30-amp circuit wired with 10-gauge copper wire (10/2 with ground)."
      },
      {
        q: "Can I replace standard heating elements with low-watt-density elements?",
        a: "Yes. Low-watt-density elements spread heat over a greater surface area, reducing lime and mineral scale baking onto the element in hard water areas."
      },
      {
        q: "Why does my electric water heater only produce lukewarm water?",
        a: "Lukewarm water almost always indicates a burned-out upper or lower heating element, or a failed thermostat. Replacing the faulty element restores full heating performance."
      },
      {
        q: "Are electric water heaters eligible for energy rebates?",
        a: "Standard electric resistance tanks usually do not qualify, but hybrid electric heat pump water heaters qualify for up to ₹2,000 in federal tax credits and local utility rebates."
      }
    ],
    relatedServiceIds: [
      "thermostat-heating-element-repair",
      "tank-water-heater-installation",
      "water-heater-replacement"
    ]
  },

  // =========================================================================
  // CATEGORY 2: REPAIR & DIAGNOSTICS (5 Services)
  // =========================================================================
  {
    id: "emergency-water-heater-repair",
    slug: "emergency-water-heater-repair",
    title: "Emergency Water Heater Repair",
    category: "repair",
    categoryLabel: "Repair & Diagnostics",
    badge: "24/7 Rapid Dispatch",
    icon: "alert-triangle",
    coverImage: "assets/images/services/emergency-repair-cover.jpg",
    cardImage: "assets/images/services/emergency-repair-cover.jpg",
    detailImage: "assets/images/services/emergency-repair-detail.jpg",
    detailImages: [
      "assets/images/services/emergency-repair-cover.jpg",
      "assets/images/services/emergency-repair-detail.jpg"
    ],
    shortDesc: "Immediate 24/7 emergency dispatch for active basement floods, failed pilot assemblies, ruptured safety valves, or catastrophic heating loss.",
    fullDesc: "When your water heater fails unexpectedly, our rapid-response emergency team deploys within 60 minutes with fully stocked service trucks containing OEM gas valves, thermocouples, 240V elements, expansion tanks, and isolation hardware.",
    efficiency: "Restores Factory Safety & Efficiency",
    lifespan: "Extends Equipment Operational Life",
    fuelRequirements: "Gas, LP, Electric & Hybrid Systems",
    warranty: "1-Year Warranty on All Replaced Components",
    whatIncluded: [
      "Priority same-day dispatch with live tracking notification",
      "Emergency flood containment, water shutoff, and safety isolation",
      "Multi-point digital combustion or electrical diagnostic testing",
      "Upfront fixed-price quote with zero surprise after-hours surcharges",
      "On-the-spot component replacement using genuine OEM factory parts",
      "Complete system testing and safety clearance before departure"
    ],
    whenNeeded: [
      "Water is actively pooling or spraying around the water heater base or fittings",
      "Sudden, total loss of hot water during cold morning hours or family visits",
      "Your water heater is emitting burning electrical odors, metallic smoke, or gas smells",
      "The T&P relief valve is discharging scalding water or steam continuously"
    ],
    howItWorks: "Our emergency dispatcher gathers key equipment details (gas vs. electric, age, brand) and routes our closest master technician. On arrival, we isolate fuel and water supplies to halt property damage, execute comprehensive electrical resistance or gas manometer testing, present a clear fixed quote, and complete repairs immediately from our on-board inventory.",
    assessmentDetails: "We evaluate structural tank integrity to determine whether the issue is a repairable component (valve, element, thermocouple, expansion tank) or an unrepairable internal tank breach, giving you honest guidance so you never waste money repairing a ruptured tank.",
    homeownerConsiderations: "If you detect active pooling water, locate your cold water shutoff valve immediately (on the pipe entering the top of the heater) and close it clockwise. If you smell gas, shut off the gas valve and vacate the premises immediately.",
    benefitsOrIssues: [
      {
        title: "Fast 60-Minute Arrival",
        icon: "clock",
        desc: "Rapid emergency dispatch limits basement water damage and restores essential domestic hot water quickly."
      },
      {
        title: "Zero Hidden Surcharges",
        icon: "indian-rupee",
        desc: "Transparent, upfront pricing provided before work starts with no hidden weekend or holiday fees."
      },
      {
        title: "Stocked Mobile Warehouses",
        icon: "truck",
        desc: "Trucks stocked with universal gas valves, Incoloy elements, thermostats, and expansion tanks for 1-trip fixes."
      },
      {
        title: "1-Year Parts & Labor Guarantee",
        icon: "shield-check",
        desc: "All replacement components and emergency workmanship are backed by our full 1-year guarantee."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Rapid Dispatch & Containment",
        desc: "Technician arrives with emergency containment gear, halts active water leaks, and secures fuel supplies."
      },
      {
        step: 2,
        title: "Precision System Diagnostics",
        desc: "Digital multimeters, combustion analyzers, and pressure gauges pinpoint the exact failure point."
      },
      {
        step: 3,
        title: "Upfront Fixed-Price Quote",
        desc: "We present itemized repair options and exact pricing before turning a single wrench."
      },
      {
        step: 4,
        title: "Immediate OEM Repair & Verification",
        desc: "Component replacement, system refill, temperature calibration, and final safety inspection."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹185 – ₹480 + parts (Illustrative Range)",
      timeframe: "1 – 3 Hours",
      costFactors: [
        "Severity of failure (minor sensor/element replacement vs. major gas valve assembly)",
        "Accessibility of equipment and necessary emergency water extraction",
        "Part availability (standard universal components vs. specialized proprietary boards)",
        "Whether repair or same-day replacement is the safest economic option"
      ],
      inclusions: [
        "Comprehensive electrical and combustion diagnostic evaluation",
        "Emergency containment and water/fuel supply isolation",
        "Installation of genuine OEM replacement components",
        "Full system re-pressurization and safety sign-off",
        "Diagnostic fee applied directly toward authorized repairs"
      ]
    },
    faqs: [
      {
        q: "What should I do first if my water heater is leaking right now?",
        a: "First, turn off the cold water shutoff valve located above the heater on the right-hand pipe. Second, turn off the gas valve (turn knob perpendicular to pipe) or flip the 240V electric circuit breaker to OFF. Third, call our hotline for priority dispatch."
      },
      {
        q: "Can a leaking water heater tank be welded or patched?",
        a: "No. The inner tank is a glass-lined pressurized vessel operating under 50–80 PSI. Once corrosion breaches the steel shell beneath the outer insulation jacket, the tank cannot be safely patched and must be replaced."
      },
      {
        q: "Do you charge extra for emergency weekend or evening repairs?",
        a: "We believe in transparent, upfront flat-rate pricing. We provide exact written quotes before any work begins so you know the full cost up front."
      },
      {
        q: "How quickly can your technician arrive at my home?",
        a: "Our dispatchers route certified technicians geographically across the metro area. Average emergency arrival time is between 45 and 75 minutes."
      },
      {
        q: "What happens if my unit is too damaged to repair?",
        a: "Our trucks carry emergency replacement units. If a tank is completely ruptured, we can transition immediately to same-day installation so your home is never left without hot water."
      }
    ],
    relatedServiceIds: [
      "water-heater-leak-repair",
      "no-hot-water-troubleshooting",
      "water-heater-replacement"
    ]
  },
  {
    id: "water-heater-leak-repair",
    slug: "water-heater-leak-repair",
    title: "Water Heater Leak Repair",
    category: "repair",
    categoryLabel: "Repair & Diagnostics",
    badge: "Flood Prevention",
    icon: "droplet",
    coverImage: "assets/images/services/leak-repair-cover.jpg",
    cardImage: "assets/images/services/leak-repair-cover.jpg",
    detailImage: "assets/images/services/leak-repair-detail.jpg",
    detailImages: [
      "assets/images/services/leak-repair-cover.jpg",
      "assets/images/services/leak-repair-detail.jpg"
    ],
    shortDesc: "Specialized diagnostic repair for leaking dielectric unions, temperature and pressure valves, expansion tanks, and brass drain fittings.",
    fullDesc: "Don't let a small drip escalate into a devastating basement flood. Our plumbers pinpoint water leaks across all connection points—including top flex connectors, T&P discharge lines, thermal expansion bladders, and drain valves—restoring leak-free security.",
    efficiency: "Protects Household Infrastructure",
    lifespan: "Prevents Premature Tank Shell Rust",
    fuelRequirements: "All Residential Water Heaters",
    warranty: "1-Year Leak-Free Warranty on Replaced Fittings",
    whatIncluded: [
      "Electronic acoustic and visual moisture mapping around heater jacket",
      "Inspection and pressure testing of Temperature & Pressure (T&P) relief valve",
      "Thermal expansion tank internal diaphragm pressure test",
      "Replacement of weeping copper flex lines, dielectric unions, or ball valves",
      "Drain valve rebuild with heavy-duty full-port brass replacement valve",
      "Static water pressure regulator check to ensure municipal pressure is under 80 PSI"
    ],
    whenNeeded: [
      "You observe pooling water beneath the heater or inside the emergency drain pan",
      "Water is dripping steadily from the copper pipe pointing toward the floor",
      "White or greenish corrosion crust has formed around the top pipe nipples",
      "The plastic drain valve at the base of the tank is dripping or cracked"
    ],
    howItWorks: "Water heater leaks originate from two distinct categories: repairable external fittings or unrepairable internal tank breaches. Our plumbers use pressure testing and thermal cameras to trace the water trail. Leaks at nipples, expansion tanks, and valves are quickly re-piped with commercial-grade brass and copper.",
    assessmentDetails: "We test static water pressure with a liquid-filled pressure gauge. Municipal water pressure exceeding 80 PSI causes relief valves to weep and rapidly degrades water heater fittings, requiring a Pressure Reducing Valve (PRV) adjustment or replacement.",
    homeownerConsiderations: "If water is dripping from the top of the heater and running down the side, it often looks like a tank leak when it is actually an inexpensive bad flex line gasket or dielectric union. Have our certified plumbers inspect it before assuming the tank is ruined.",
    benefitsOrIssues: [
      {
        title: "Flood Damage Prevention",
        icon: "shield-alert",
        desc: "Halts slow, hidden water seepage that destroys subflooring, drywall, and finished basement carpeting."
      },
      {
        title: "Upgraded Brass Components",
        icon: "shield-check",
        desc: "We replace cheap factory plastic drain valves with durable, full-port solid brass ball valves."
      },
      {
        title: "T&P Safety Restoration",
        icon: "check-circle",
        desc: "Ensures your Temperature & Pressure valve reliably relieves dangerous over-pressure without dripping."
      },
      {
        title: "Municipal Pressure Protection",
        icon: "gauge",
        desc: "Verifies incoming water pressure is within safe limits (45–75 PSI) to protect all home plumbing."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Moisture Source Tracing",
        desc: "We inspect top nipples, T&P discharge pipe, expansion tank, element gaskets, and drain spigot."
      },
      {
        step: 2,
        title: "System Depressurization",
        desc: "Cold water shutoff, partial drainage to relieve head pressure, and safe component removal."
      },
      {
        step: 3,
        title: "Precision Fitting Replacement",
        desc: "Installation of lead-free brass ball valves, new dielectric nipples, or ASME-rated T&P valves."
      },
      {
        step: 4,
        title: "Full Re-Pressurization Test",
        desc: "System re-pressurized to operating pressure with 15-minute dwell test to confirm zero weeping."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹165 – ₹340 + parts (Illustrative Range)",
      timeframe: "1 – 2 Hours",
      costFactors: [
        "Location of leak (simple top flex line vs. corroded tank nipple requiring core extraction)",
        "T&P valve replacement with extension discharge piping",
        "Waterlogged thermal expansion tank replacement",
        "Whether a municipal pressure reducing valve (PRV) is needed on main water line"
      ],
      inclusions: [
        "Comprehensive leak source diagnostic and water pressure check",
        "Drainage of tank required to perform connection repairs",
        "Heavy-duty brass fittings, valves, or expansion tank components",
        "System re-fill, air purge, and leak-free verification",
        "1-Year warranty on all repaired joints and replaced fittings"
      ]
    },
    faqs: [
      {
        q: "Why is water dripping from the pipe on the side of my water heater?",
        a: "That pipe is connected to the Temperature and Pressure (T&P) safety relief valve. It drips if water temperature exceeds 210°F, water pressure exceeds 150 PSI, or if mineral scale has fouled the valve's rubber seat."
      },
      {
        q: "Can a leaking plastic drain valve be replaced?",
        a: "Yes! Factory plastic drain valves frequently weep or strip when turned. We drain the tank and replace the plastic valve with a durable, commercial full-port brass valve that will never crack."
      },
      {
        q: "How do I know if the leak is from the tank or a fitting?",
        a: "We wipe the tank completely dry and trace upward. If moisture originates above the tank jacket (at pipe nipples or the relief valve), it is an external fitting repair. If water seeps from inside the jacket seams, the inner tank is ruptured."
      },
      {
        q: "Why did my thermal expansion tank start leaking?",
        a: "Thermal expansion tanks contain a rubber bladder separating air from water. Over 5 to 7 years, the rubber bladder breaks down, causing water to fill the air chamber and leak from the Schrader air valve."
      },
      {
        q: "What causes top pipe nipples to develop green corrosion?",
        a: "Connecting copper pipes directly to steel tank nipples creates galvanic corrosion (electrochemical reaction between dissimilar metals). We install dielectric unions with insulated sleeves to stop galvanic rusting."
      }
    ],
    relatedServiceIds: [
      "emergency-water-heater-repair",
      "water-heater-flushing-maintenance",
      "water-heater-replacement"
    ]
  },
  {
    id: "no-hot-water-troubleshooting",
    slug: "no-hot-water-troubleshooting",
    title: "No Hot Water Diagnostics",
    category: "repair",
    categoryLabel: "Repair & Diagnostics",
    badge: "Fault Detection",
    icon: "thermometer-snowflake",
    coverImage: "assets/images/services/no-hot-water-cover.jpg",
    cardImage: "assets/images/services/no-hot-water-cover.jpg",
    detailImage: "assets/images/services/no-hot-water-detail.jpg",
    detailImages: [
      "assets/images/services/no-hot-water-cover.jpg",
      "assets/images/services/no-hot-water-detail.jpg"
    ],
    shortDesc: "Comprehensive systematic troubleshooting for gas, electric, and tankless units producing lukewarm, intermittent, or completely cold water.",
    fullDesc: "Step-by-step root-cause diagnostics to determine why your water heater failed to fire or heat. We inspect pilot assemblies, thermocouples, electronic gas valves, dual immersion elements, limit switches, and mixing valves to restore piping-hot water.",
    efficiency: "Restores Correct 120°F Delivery",
    lifespan: "Prevents Unnecessary Equipment Scrapping",
    fuelRequirements: "Gas, Electric & Tankless Water Heaters",
    warranty: "1-Year Workmanship on All Diagnostic Repairs",
    whatIncluded: [
      "Systematic electrical voltage, resistance, and continuity testing with digital multimeters",
      "Gas control valve combination solenoid and thermocouple millivolt output test",
      "Inspection of high-limit Emergency Cutoff (ECO) reset switch",
      "Dip tube internal inspection to verify cold water is not short-circuiting to the top",
      "Combustion air flow, flame sensor polish, and pilot orifice cleaning",
      "Clear explanation of findings and upfront repair quote before work proceeds"
    ],
    whenNeeded: [
      "Water from hot faucets is completely ice-cold despite normal water pressure",
      "Hot water is lukewarm or depletes after only two or three minutes of shower use",
      "You hear clicking noises from the gas heater but the main burner never ignites",
      "The red reset button on your electric water heater tripped and will not stay in"
    ],
    howItWorks: "Our technicians follow an engineering diagnostic tree. For gas units: pilot flame presence $\rightarrow$ thermocouple millivolt generation $\rightarrow$ gas valve solenoid coil resistance $\rightarrow$ burner manifold pressure. For electric units: 240V supply voltage $\rightarrow$ high-limit switch $\rightarrow$ upper thermostat $\rightarrow$ upper element $\rightarrow$ lower thermostat $\rightarrow$ lower element.",
    assessmentDetails: "We test broken dip tubes using temperature probes. A cracked dip tube dumps incoming cold water straight into the top hot water outlet, causing water to turn lukewarm in minutes even though heating elements or burners are working perfectly.",
    homeownerConsiderations: "Before calling, check your electrical panel for a tripped double-pole circuit breaker, or check whether other gas appliances (like your furnace or stove) are receiving fuel. If only your water heater is cold, our diagnostic technician will isolate the issue quickly.",
    benefitsOrIssues: [
      {
        title: "Systematic Root-Cause Fix",
        icon: "search",
        desc: "We test components scientifically rather than guessing or replacing parts you don't need."
      },
      {
        title: "Fast Hot Water Restoration",
        icon: "zap",
        desc: "Most no-hot-water issues are resolved within 60 to 90 minutes of technician arrival."
      },
      {
        title: "Avoid Premature Replacement",
        icon: "indian-rupee",
        desc: "Inexpensive sensor, element, or thermocouple replacements often save a unit with years of life remaining."
      },
      {
        title: "Anti-Scald Calibration",
        icon: "check-circle",
        desc: "We calibrate restored thermostats to a safe, comfortable 120°F compliant with safety standards."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Visual & Operational Inspection",
        desc: "We inspect burner windows, indicator LEDs, status error codes, and electrical access panels."
      },
      {
        step: 2,
        title: "Component Isolation Testing",
        desc: "Testing electrical continuity, thermocouple microvolts, element resistance, and thermostat differential."
      },
      {
        step: 3,
        title: "Targeted Part Replacement",
        desc: "Replacing failed thermostats, thermocouples, hot-surface igniters, or cracked dip tubes."
      },
      {
        step: 4,
        title: "Heating Cycle Verification",
        desc: "Monitoring full tank heating cycle until thermostat clicks off at the programmed setpoint."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹149 – ₹320 + parts (Illustrative Range)",
      timeframe: "1 – 2 Hours",
      costFactors: [
        "Fuel type and complexity (simple thermocouple vs. electronic smart gas valve)",
        "Whether both electric heating elements and thermostats require overhaul",
        "Replacement of cracked internal dip tube",
        "Diagnostic fee is credited directly toward completed repair work"
      ],
      inclusions: [
        "Full electrical, gas, and plumbing diagnostic evaluation",
        "Status code decoding and pilot orifice cleanout",
        "Installation of certified replacement components",
        "Thermostat temperature calibration and safety check",
        "1-Year warranty on all replaced parts and labor"
      ]
    },
    faqs: [
      {
        q: "Why do I only get 5 minutes of hot water before it turns cold?",
        a: "This classic symptom usually means the lower heating element on an electric water heater is burned out (leaving only the upper 1/3 of the tank heated), or the internal cold water dip tube has cracked and is short-circuiting cold water straight to the faucet."
      },
      {
        q: "Why did the red reset button trip on my electric water heater?",
        a: "The red button is a high-limit cutoff switch (ECO) that trips if water temperature exceeds 180°F. It indicates that a thermostat has stuck closed or an element has developed an electrical ground fault."
      },
      {
        q: "Can a pilot light be relit by the homeowner?",
        a: "Yes, following the instructions printed on the heater's door. However, if the pilot flame will not stay lit after you release the knob, the thermocouple or thermopile is dirty, weak, or defective and requires professional service."
      },
      {
        q: "What causes a gas water heater status light to flash an error code?",
        a: "Modern electronic gas valves (like Honeywell) have an LED that flashes diagnostic codes: e.g., weak pilot flame, thermal cutoff switch open, or sensor fault. Our technicians carry factory code charts and replacement sensors."
      },
      {
        q: "How long does it take for a water heater to recover full temperature after repair?",
        a: "A standard gas water heater recovers full temperature in 35 to 45 minutes. An electric water heater takes 60 to 90 minutes for a complete cold-to-hot recovery cycle."
      }
    ],
    relatedServiceIds: [
      "thermostat-heating-element-repair",
      "pilot-light-ignition-repair",
      "emergency-water-heater-repair"
    ]
  },
  {
    id: "thermostat-heating-element-repair",
    slug: "thermostat-heating-element-repair",
    title: "Thermostat & Heating Element Repair",
    category: "repair",
    categoryLabel: "Repair & Diagnostics",
    badge: "240V Electrical Service",
    icon: "sliders",
    coverImage: "assets/images/services/thermostat-repair-cover.jpg",
    cardImage: "assets/images/services/thermostat-repair-cover.jpg",
    detailImage: "assets/images/services/thermostat-repair-detail.jpg",
    detailImages: [
      "assets/images/services/thermostat-repair-cover.jpg",
      "assets/images/services/thermostat-repair-detail.jpg"
    ],
    shortDesc: "Precision replacement of dual 240V electric immersion heating elements, upper and lower thermostats, and high-limit safety cutoffs.",
    fullDesc: "Electric water heaters rely on a coordinated balance between upper and lower heating elements and surface-mounted thermostats. We test resistance ohms, replace scale-encrusted or shorted elements with premium Incoloy parts, and calibrate temperatures to code.",
    efficiency: "Restores 100% Heating Efficiency",
    lifespan: "Extends Electric Water Heater Life",
    fuelRequirements: "240V / 208V Electric Water Heaters",
    warranty: "1-Year Warranty on Elements & Thermostats",
    whatIncluded: [
      "Digital multimeter ohm resistance test across upper and lower heating elements (normal: 12.5–13.0 $\\Omega$)",
      "High-voltage electrical safety lockout and voltage supply verification",
      "Draining of tank down to element port level",
      "Extraction of failed elements and port flange thread cleaning",
      "Installation of premium low-watt-density Incoloy immersion elements with new O-rings",
      "Replacement of upper/lower bimetal thermostats and calibration to recommended 120°F"
    ],
    whenNeeded: [
      "Your electric water heater trips the household electrical breaker repeatedly",
      "Hot water runs out in just a few minutes during normal morning showers",
      "Water is scalding hot and boiling inside the tank due to a welded thermostat contact",
      "Water temperature fluctuates unpredictably between scorching and freezing"
    ],
    howItWorks: "The upper thermostat powers the upper 4500W element until the top third of the tank reaches 120°F. The thermostat then flips electrical contact to the lower thermostat, which energizes the lower element to heat the rest of the tank. When an element ruptures or scale insulates it, heat transfer stops or an electrical ground fault trips the breaker.",
    assessmentDetails: "We test continuity between element screw terminals and the outer metal sheath. Any continuity to ground confirms a split element sheath, requiring immediate replacement before the breaker will reset safely.",
    homeownerConsiderations: "Always ensure both upper and lower elements are replaced as a matched set, especially if the heater is older than 5 years. If one element has reached the end of its life, the other element is subjected to double the workload and typically fails shortly after.",
    benefitsOrIssues: [
      {
        title: "Balanced Tank Heating",
        icon: "zap",
        desc: "Replacing failed upper or lower elements restores the full 50-gallon heating capacity for back-to-back showers."
      },
      {
        title: "Scale-Resistant Incoloy Elements",
        icon: "shield-check",
        desc: "We install heavy-duty Incoloy elements that resist lime buildup and dry-fire burnout far better than standard copper."
      },
      {
        title: "Accurate Anti-Scald Temperatures",
        icon: "thermometer",
        desc: "New calibrated thermostats prevent scalding while ensuring optimal energy efficiency."
      },
      {
        title: "Ground Fault Elimination",
        icon: "check-circle",
        desc: "Eliminates dead shorts that trip your electrical breaker and leave your home without hot water."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Electrical Lockout & Ohm Test",
        desc: "Power is disconnected at the panel and element resistance is verified against factory ohm specs."
      },
      {
        step: 2,
        title: "Controlled Water Depressurization",
        desc: "Water is drained below the element sockets using full-port hoses to prevent basement spills."
      },
      {
        step: 3,
        title: "Socket Extraction & Incoloy Install",
        desc: "Heavy-duty element sockets extract old elements; new Incoloy elements are torqued with fresh gaskets."
      },
      {
        step: 4,
        title: "Thermostat Swap & Temperature Test",
        desc: "Thermostats are mounted tightly against tank steel and calibrated; unit is filled and tested under load."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹180 – ₹360 (Illustrative Range)",
      timeframe: "1 – 2 Hours",
      costFactors: [
        "Single element replacement vs. full dual element and dual thermostat overhaul",
        "Corroded or stuck element hex flanges requiring specialized torque tools",
        "Standard copper elements vs. premium low-watt-density Incoloy upgrades",
        "Rewiring burned high-temperature terminal wire leads"
      ],
      inclusions: [
        "Complete multimeter electrical diagnostic",
        "Tank drainage required to access element ports",
        "New premium Incoloy heating elements and factory gaskets",
        "New upper and lower thermostats with high-limit reset",
        "1-Year parts and labor warranty"
      ]
    },
    faqs: [
      {
        q: "What is an Incoloy heating element and why is it better than copper?",
        a: "Incoloy is a high-grade nickel-chromium alloy that resists mineral corrosion, chemical stress cracking, and dry-fire temperatures much better than standard copper-sheathed elements, lasting up to three times longer."
      },
      {
        q: "Why does my breaker trip every time the water heater turns on?",
        a: "When an element sheath cracks, 240V electricity comes into direct contact with water, creating an immediate ground fault short that triggers the breaker to prevent electrical fires."
      },
      {
        q: "Should I replace the thermostats when replacing heating elements?",
        a: "Yes. Thermostat bimetal contacts wear out and pit over years of cycling. Replacing thermostats alongside elements ensures balanced heating and prevents premature burnout of new elements."
      },
      {
        q: "What temperature should my water heater thermostat be set to?",
        a: "The Consumer Product Safety Commission (CPSC) recommends setting residential thermostats to 120°F (49°C), which prevents childhood scalding burns while providing plenty of hot water."
      },
      {
        q: "How can I tell which element is burned out?",
        a: "If water is lukewarm, the lower element is usually burned out. If water is completely cold from the start, the upper element, upper thermostat, or high-limit switch has failed."
      }
    ],
    relatedServiceIds: [
      "electric-water-heater-installation",
      "no-hot-water-troubleshooting",
      "water-heater-replacement"
    ]
  },
  {
    id: "pilot-light-ignition-repair",
    slug: "pilot-light-ignition-repair",
    title: "Pilot Light & Ignition Repair",
    category: "repair",
    categoryLabel: "Repair & Diagnostics",
    badge: "Combustion Safety",
    icon: "sparkles",
    coverImage: "assets/images/services/pilot-ignition-cover.jpg",
    cardImage: "assets/images/services/pilot-ignition-cover.jpg",
    detailImage: "assets/images/services/pilot-ignition-detail.jpg",
    detailImages: [
      "assets/images/services/pilot-ignition-cover.jpg",
      "assets/images/services/pilot-ignition-detail.jpg"
    ],
    shortDesc: "Certified repair and cleanout of gas pilot assemblies, thermocouples, thermopiles, spark igniters, and flame rectification sensors.",
    fullDesc: "If your gas water heater's pilot light won't light, refuses to stay lit when releasing the control knob, or frequently blows out, our certified gas technicians inspect and service the entire burner ignition train for safe, reliable combustion.",
    efficiency: "Ensures Clean Blue Combustion",
    lifespan: "Prevents Toxic Carbon Monoxide Buildup",
    fuelRequirements: "Natural Gas & LP Propane Water Heaters",
    warranty: "1-Year Warranty on Ignition Components",
    whatIncluded: [
      "Thermocouple / thermopile open and closed circuit millivolt testing (standard: 20–30 mV)",
      "Disassembly and ultrasonic cleanout of clogged pilot gas orifice and burner tube",
      "Piezoelectric spark igniter gap calibration and electrode ceramic inspection",
      "Thermal cutoff switch (resettable fuse) continuity verification",
      "Sealed combustion chamber gasket inspection to prevent flammable vapor infiltration",
      "Gas valve safety magnet hold-in test and digital carbon monoxide check"
    ],
    whenNeeded: [
      "The pilot flame will light while holding the knob down, but goes out instantly when released",
      "The pilot light goes out randomly several times a week, leaving you with cold morning water",
      "You hear gas hissing but the piezo push-button spark igniter produces no spark",
      "The pilot flame is weak, yellow, and sooty rather than a crisp, sharp blue cone"
    ],
    howItWorks: "The pilot flame engulfs the tip of the thermocouple, generating 20 to 30 millivolts of electricity via the thermoelectric effect. This tiny electric current powers an electromagnet inside the gas control valve, holding the gas safety valve open. If the thermocouple is weak, dirty, or misaligned, the magnet drops and shuts off gas flow to prevent deadly gas accumulation.",
    assessmentDetails: "We measure millivolts under actual burner load with a specialized gas adapter. A thermocouple reading below 12 millivolts cannot reliably hold the gas valve magnet open and must be replaced.",
    homeownerConsiderations: "Never attempt to bend or scrape a thermocouple with coarse sandpaper, as this damages the thin bimetal coating. Never bypass a tripped thermal cutoff switch, as it is a critical safety device preventing combustion flashouts.",
    benefitsOrIssues: [
      {
        title: "Reliable Daily Ignition",
        icon: "sparkles",
        desc: "Eliminates frustrating pilot outages so your water heater fires predictably every time you call for hot water."
      },
      {
        title: "Combustion Gas Safety",
        icon: "shield-check",
        desc: "Ensures the automatic gas safety shutoff functions 100% reliably if the pilot flame is ever extinguished."
      },
      {
        title: "Clean Efficient Burning",
        icon: "flame",
        desc: "Cleaning the pilot orifice restores a crisp blue flame that burns fuel completely without soot or carbon monoxide."
      },
      {
        title: "OEM Replacement Hardware",
        icon: "check-circle",
        desc: "We install factory-certified thermocouples, thermopiles, and sealed combustion chamber viewing window gaskets."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Fuel Shutoff & Chamber Access",
        desc: "Gas supply is isolated; burner door assembly is unbolted and extracted from the combustion chamber."
      },
      {
        step: 2,
        title: "Millivolt & Spark Diagnostics",
        desc: "Thermocouple millivolts, thermopile microvolts, and igniter spark continuity are tested."
      },
      {
        step: 3,
        title: "Orifice Cleaning & Component Swap",
        desc: "Cleaning pilot jet orifice with micro-reamers and installing new OEM thermocouple or thermopile."
      },
      {
        step: 4,
        title: "Chamber Resealing & Manometer Test",
        desc: "Burner reinstalled with new high-temp gasket, pilot lit, magnet tested, and gas joints sniffed for leaks."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹150 – ₹290 (Illustrative Range)",
      timeframe: "1 – 2 Hours",
      costFactors: [
        "Standard thermocouple vs. electronic thermopile assembly (Resideo/Honeywell status valve)",
        "Sealed combustion chamber gasket replacement requirements",
        "Burner tray rust cleanup and air intake screen cleaning",
        "Replacement of push-button piezoelectric igniter"
      ],
      inclusions: [
        "Full pilot assembly and combustion chamber diagnostic",
        "Cleaning of pilot orifice, pilot hood, and burner face",
        "Installation of new OEM thermocouple or thermopile",
        "New high-temperature burner door gasket",
        "1-Year warranty on all replaced ignition parts"
      ]
    },
    faqs: [
      {
        q: "Why won't my pilot light stay lit when I let go of the knob?",
        a: "The thermocouple must generate enough millivolts from the pilot heat to hold open the gas valve magnet. If the thermocouple is burned out, dirty, or positioned outside the flame cone, the valve snaps shut the moment you release the knob."
      },
      {
        q: "What is the difference between a thermocouple and a thermopile?",
        a: "A thermocouple contains one junction producing 20–30 millivolts for standard mechanical gas valves. A thermopile contains multiple thermocouples in series producing 500–750 millivolts, powering electronic status valves with flashing LED lights."
      },
      {
        q: "Why does my pilot flame look yellow and lazy?",
        a: "A yellow flame indicates incomplete combustion caused by dust, lint, or pet hair clogging the air intake screen or pilot orifice. A healthy pilot flame is a crisp, steady blue cone."
      },
      {
        q: "Can a draft in the basement blow out my pilot light?",
        a: "Yes. Negative basement pressure, backdrafting chimneys, or drafts from nearby exterior doors can extinguish pilot flames. We inspect flue draft velocity to identify venting problems."
      },
      {
        q: "Is it dangerous if the pilot light goes out?",
        a: "No, because modern water heaters have a spring-loaded safety valve that instantly cuts off gas flow if the thermocouple cools down. However, raw gas odors must always be taken seriously."
      }
    ],
    relatedServiceIds: [
      "gas-water-heater-installation",
      "no-hot-water-troubleshooting",
      "emergency-water-heater-repair"
    ]
  },

  // =========================================================================
  // CATEGORY 3: REPLACEMENT (1 Service)
  // =========================================================================
  {
    id: "water-heater-replacement",
    slug: "water-heater-replacement",
    title: "Water Heater Replacement & Upgrades",
    category: "replacement",
    categoryLabel: "Replacement",
    badge: "Turnkey Changeout",
    icon: "refresh-cw",
    coverImage: "assets/images/services/replacement-cover.jpg",
    cardImage: "assets/images/services/replacement-cover.jpg",
    detailImage: "assets/images/services/replacement-detail.jpg",
    detailImages: [
      "assets/images/services/replacement-cover.jpg",
      "assets/images/services/replacement-detail.jpg"
    ],
    shortDesc: "Complete turnkey replacement of aging 10+ year water heaters with code upgrades, thermal expansion control, permit filing, and certified haul-away.",
    fullDesc: "Replacing an aging, inefficient water heater before it ruptures is the smartest home investment. We handle the complete changeout process: safe draining, disconnection, permit filing, code-mandated safety upgrades, and disposal of your decommissioned unit.",
    efficiency: "Up to 0.96 UEF Upgrades Available",
    lifespan: "12 to 20+ Years depending on model",
    fuelRequirements: "Gas, LP, Electric & Hybrid Retrofits",
    warranty: "10-Year Tank / 1-Year Workmanship",
    whatIncluded: [
      "Complete home hot water demand audit and system selection consultation",
      "Drainage, disconnection, and environmentally certified recycling of old equipment",
      "Installation of code-mandated thermal expansion tank and brass isolation valves",
      "Rigid copper water connections, dielectric nipples, and sediment trap assembly",
      "Upgraded safety discharge tubing to within 6 inches of floor or exterior drain",
      "Permit filing assistance, municipal inspection coordination, and full warranty registration"
    ],
    whenNeeded: [
      "Your water heater is over 10 years old and nearing manufacturer design lifespan",
      "You notice rust-tinted hot water, mineral rumbling kettle noises, or exterior corrosion",
      "Frequent repair bills make continuing to fix the old heater economically unwise",
      "You want to upgrade to energy-efficient technology to qualify for tax credits and lower bills"
    ],
    howItWorks: "Our team arrives with your pre-selected new water heater, floor protection runners, and commercial pump gear. We drain and disconnect your obsolete heater, position and level the new system, install all code-mandated safety fittings (expansion tank, seismic straps, brass ball valves), pressurize the system, and perform full combustion or electrical load analysis.",
    assessmentDetails: "We evaluate space constraints, door clearances, fuel line capacity, venting routes, and floor drain accessibility. If upgrading from tank to tankless or hybrid heat pump, we detail the required electrical or gas manifold infrastructure upgrades upfront.",
    homeownerConsiderations: "Waiting for an old water heater to fail catastrophically often causes thousands of rupees in water damage to finished basements and subfloors. Proactive replacement on your schedule avoids emergency surcharges and gives you time to choose the ideal high-efficiency system.",
    benefitsOrIssues: [
      {
        title: "Prevent Catastrophic Flooding",
        icon: "shield-alert",
        desc: "Proactively replacing a 10+ year tank eliminates the sudden rupture risk of 50 gallons of water in your home."
      },
      {
        title: "Substantial Energy Savings",
        icon: "zap",
        desc: "Modern replacement units feature superior foam insulation and advanced burner technology, lowering utility costs."
      },
      {
        title: "100% Turnkey Execution",
        icon: "check-circle",
        desc: "We manage everything from draining and permit processing to clean cleanup and old equipment recycling."
      },
      {
        title: "Comprehensive Warranty",
        icon: "award",
        desc: "Backed by 6 to 10-year manufacturer tank warranties and our 1-year master plumbing labor guarantee."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "System Sizing & Selection",
        desc: "We evaluate household hot water demands, fuel availability, and energy goals to recommend the ideal replacement."
      },
      {
        step: 2,
        title: "Safe Removal & Cleanout",
        desc: "Draining the old tank, disconnecting gas/electric and plumbing lines, and hauling away the old unit for recycling."
      },
      {
        step: 3,
        title: "Precision Code Installation",
        desc: "Setting the new unit, installing expansion tank, brass ball valves, copper piping, and safety relief lines."
      },
      {
        step: 4,
        title: "Pressurization & Quality Check",
        desc: "Filling, purging air, static pressure testing, combustion analysis, and homeowner operation briefing."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹1,850 – ₹3,450 (Illustrative Range)",
      timeframe: "4 – 6 Hours",
      costFactors: [
        "Replacement type (like-for-like tank replacement vs. tankless or heat pump conversion)",
        "Equipment capacity (40, 50, or 75-gallon models)",
        "Plumbing code updates required (expansion tank, PRV, seismic strapping, venting)",
        "Local municipal plumbing permit and inspection fees"
      ],
      inclusions: [
        "Brand-new commercial-grade water heater unit",
        "Thermal expansion tank and full-port brass isolation valve",
        "Copper water piping connections and dielectric unions",
        "Complete removal, transport, and certified recycling of old equipment",
        "100% plumbing code compliance guarantee and 1-year labor warranty"
      ]
    },
    faqs: [
      {
        q: "How do I know when it is time to replace my water heater instead of repairing it?",
        a: "As a general rule, if your water heater is over 10 years old and the repair cost exceeds 50% of the replacement cost, or if the tank shell itself is corroded or leaking, replacement is the safest, most economical choice."
      },
      {
        q: "What plumbing code updates are required during a replacement?",
        a: "Most local municipal codes require adding a thermal expansion tank on closed systems, an elevated drain pan with drain piping, seismic safety strapping, and an ASME-rated Temperature & Pressure relief valve discharge pipe."
      },
      {
        q: "How long does a typical water heater replacement take?",
        a: "A standard like-for-like storage tank replacement takes 3 to 4 hours. A conversion from tank to tankless or hybrid heat pump typically requires 5 to 7 hours."
      },
      {
        q: "Do you dispose of our old water heater?",
        a: "Yes! Complete haul-away and environmentally certified scrap recycling of your decommissioned water heater is included in every replacement quote."
      },
      {
        q: "Can I upgrade to a larger tank capacity?",
        a: "In most cases, yes, provided your utility space has enough height and width clearance. We measure utility doorways and ceiling heights during our initial assessment."
      }
    ],
    relatedServiceIds: [
      "tankless-water-heater-installation",
      "tank-water-heater-installation",
      "water-heater-flushing-maintenance"
    ]
  },

  // =========================================================================
  // CATEGORY 4: MAINTENANCE (2 Services)
  // =========================================================================
  {
    id: "water-heater-flushing-maintenance",
    slug: "water-heater-flushing-maintenance",
    title: "Water Heater Flushing & Descaling",
    category: "maintenance",
    categoryLabel: "Maintenance",
    badge: "Annual Descaling Flush",
    icon: "droplet",
    coverImage: "assets/images/services/maintenance-cover.jpg",
    cardImage: "assets/images/services/maintenance-cover.jpg",
    detailImage: "assets/images/services/maintenance-detail.jpg",
    detailImages: [
      "assets/images/services/maintenance-cover.jpg",
      "assets/images/services/maintenance-detail.jpg"
    ],
    shortDesc: "Annual high-volume sediment flushing and chemical descaling to eliminate popping noises, restore recovery speeds, and protect warranties.",
    fullDesc: "Hard water minerals bake into a thick insulating crust at the bottom of storage tanks and inside tankless heat exchangers. Our specialized flushing service circulates food-grade descaling agents to dissolve lime, calcium, and mineral scale, restoring factory performance.",
    efficiency: "Restores Up to 15% Lost Efficiency",
    lifespan: "Extends System Operational Life by 3–5 Years",
    fuelRequirements: "All Tank & Tankless Water Heaters",
    warranty: "Full Operational Health Verification",
    whatIncluded: [
      "Commercial submersible transfer pump connection to bottom tank drain",
      "High-pressure agitation flush to break up compacted calcium carbonate crust",
      "Food-grade citric acid circulation flush for tankless heat exchangers (45-minute cycle)",
      "Inspection and cleaning of in-line cold water inlet mesh debris screen",
      "T&P safety relief valve mechanical test and seating check",
      "Written mineral accumulation and equipment health report for homeowner records"
    ],
    whenNeeded: [
      "Your water heater makes loud rumbling, popping, or kettle boiling noises when heating",
      "Hot water recovery takes noticeably longer than when the unit was new",
      "You have not flushed your tank or descaled your tankless unit in over 12 months",
      "Water from the hot faucets shows occasional rust particles or sandy sediment"
    ],
    howItWorks: "In storage tanks, mineral sediment forms an insulating barrier between the burner flame and water, trapping steam bubbles that pop noisily and overheat the steel tank bottom. In tankless units, scale narrows heat exchanger passages, triggering error codes. We connect high-flow pumps to flush out sediment and circulate descaling solutions to restore clean heat transfer.",
    assessmentDetails: "We test incoming water hardness with digital TDS meters. Water with more than 7 grains per gallon (GPG) of hardness requires annual descaling to prevent heat exchanger thermal failure and voided manufacturer warranties.",
    homeownerConsiderations: "Many leading tankless manufacturers (including Rinnai, Navien, and Noritz) explicitly require documented annual descaling to keep heat exchanger warranties valid. Regular flushing is the single most effective preventive maintenance task for water heaters.",
    benefitsOrIssues: [
      {
        title: "Eliminate Rumbling Noises",
        icon: "volume-x",
        desc: "Flushes out hardened calcium sediment, silencing loud kettle popping and banging noises during heating."
      },
      {
        title: "Restore Fast Recovery",
        icon: "zap",
        desc: "Removes the insulating scale layer, allowing heat to transfer into water rapidly as engineered."
      },
      {
        title: "Preserve Factory Warranty",
        icon: "shield-check",
        desc: "Fulfills manufacturer annual maintenance documentation requirements for tank and tankless systems."
      },
      {
        title: "Lower Monthly Gas & Electric Bills",
        icon: "indian-rupee",
        desc: "A clean heat exchanger requires up to 15% less energy to heat the same volume of domestic water."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "System Preparation & Isolation",
        desc: "Fuel supply is powered down, water pressure is isolated, and commercial discharge hoses are secured."
      },
      {
        step: 2,
        title: "High-Flow Agitation Flush",
        desc: "High-volume transfer pumps flush compacted sediment out of the bottom drain port to an exterior drain."
      },
      {
        step: 3,
        title: "Chemical Descaling Circulation",
        desc: "For tankless units, food-grade citric acid solution is circulated through heat exchangers for 45 minutes."
      },
      {
        step: 4,
        title: "Fresh Water Purge & Safety Check",
        desc: "Complete fresh water rinse, air bleeding, T&P valve operation test, and heating burner test."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹149 – ₹240 (Illustrative Range)",
      timeframe: "1 – 2 Hours",
      costFactors: [
        "System type (standard storage tank flush vs. commercial tankless chemical descaling)",
        "Accessibility of isolation service valves on tankless unit",
        "Severity of mineral compaction (severely neglected tanks requiring chemical soaking)",
        "Combined maintenance bundle savings with anode rod replacement"
      ],
      inclusions: [
        "Complete sediment pump flush or citric acid descaling circulation",
        "Cold water inlet filter screen removal and cleaning",
        "Temperature & Pressure relief valve mechanical test",
        "Burner flame inspection and thermostat differential check",
        "Written maintenance certificate for warranty compliance records"
      ]
    },
    faqs: [
      {
        q: "Why is my water heater making a loud popping or rumbling sound?",
        a: "As mineral scale builds up on the tank bottom, water gets trapped underneath the sediment layer. The intense heat turns trapped water into steam bubbles that pop violently against the sediment crust, sounding like boiling popcorn."
      },
      {
        q: "How often should a residential water heater be flushed?",
        a: "Manufacturers recommend flushing your water heater once every 12 months. In areas with hard water (>7 GPG), flushing every 6 to 9 months prevents mineral buildup from bonding permanently to the tank shell."
      },
      {
        q: "Does failing to flush a tankless water heater void the warranty?",
        a: "Yes. Major manufacturers (such as Navien and Rinnai) explicitly state in warranty terms that heat exchanger failures caused by scale buildup without documented annual descaling are not covered."
      },
      {
        q: "Can flushing damage an older water heater?",
        a: "On tanks over 12 years old that have never been flushed, heavy sediment may be the only thing plugging an existing corrosion leak. Our technicians inspect older tanks before flushing to ensure structural safety."
      },
      {
        q: "How long does a professional flush service take?",
        a: "A standard tank flush takes about 45 to 60 minutes. A tankless chemical descaling circulation cycle takes approximately 75 to 90 minutes."
      }
    ],
    relatedServiceIds: [
      "preventive-water-heater-maintenance",
      "tankless-water-heater-installation",
      "water-heater-replacement"
    ]
  },
  {
    id: "preventive-water-heater-maintenance",
    slug: "preventive-water-heater-maintenance",
    title: "Preventive Water Heater Maintenance",
    category: "maintenance",
    categoryLabel: "Maintenance",
    badge: "Multi-Point Safety Tuneup",
    icon: "clipboard-check",
    coverImage: "assets/images/services/preventive-maintenance-cover.jpg",
    cardImage: "assets/images/services/preventive-maintenance-cover.jpg",
    detailImage: "assets/images/services/preventive-maintenance-detail.jpg",
    detailImages: [
      "assets/images/services/preventive-maintenance-cover.jpg",
      "assets/images/services/preventive-maintenance-detail.jpg"
    ],
    shortDesc: "Comprehensive 18-point annual safety tuneup, sacrificial anode rod inspection, combustion analysis, and pressure relief testing.",
    fullDesc: "Extend your water heater's operational lifespan by up to 50% with our comprehensive preventive maintenance tuneup. We inspect sacrificial anode rods, test T&P safety valves, measure gas manifold pressure or electrical resistance, clean burners, and verify safety controls.",
    efficiency: "Maintains Peak Factory Efficiency",
    lifespan: "Can Add 4 to 6 Years to Equipment Life",
    fuelRequirements: "All Gas, Electric, Tank & Tankless Models",
    warranty: "Annual Service Assurance Guarantee",
    whatIncluded: [
      "Physical inspection of the sacrificial anode rod for core depletion",
      "Temperature & Pressure (T&P) safety relief valve mechanical test and discharge check",
      "Digital combustion analyzer test (gas) or heating element resistance test (electric)",
      "Thermal expansion tank pre-charge air pressure verification with digital gauge",
      "Gas burner flame sensor cleaning or electric thermostat differential calibration",
      "Comprehensive written 18-point water heating health audit and safety certificate"
    ],
    whenNeeded: [
      "Your water heater has been operating for 2+ years without a professional safety inspection",
      "You want to maximize equipment lifespan and avoid unexpected emergency breakdowns",
      "You notice small rust specks or a slight metallic taste in your household hot water",
      "You are preparing your home plumbing for winter or completing annual home maintenance"
    ],
    howItWorks: "Our certified technicians execute an 18-point checklist. We inspect the sacrificial anode rod—the magnesium/aluminum rod that sacrifices itself to protect the steel tank from rust. When depleted, water attacks the tank directly. Replacing the anode rod before it fully dissolves prevents tank leaks and doubles tank life.",
    assessmentDetails: "We use high-precision instruments: digital manometers for gas pressure, multimeters for element resistance, and liquid-filled gauges for water pressure. We verify that static household water pressure is below 80 PSI and that the expansion tank bladder is pressurized properly.",
    homeownerConsiderations: "An annual safety tuneup costs a fraction of an emergency repair or replacement. In addition to extending equipment lifespan, our safety checks verify carbon monoxide draft security and relief valve operation, protecting your family and home.",
    benefitsOrIssues: [
      {
        title: "Doubles Tank Lifespan",
        icon: "shield-check",
        desc: "Inspecting and replacing the sacrificial anode rod prevents corrosive water from rusting through the steel tank."
      },
      {
        title: "Guaranteed Safety Operation",
        icon: "alert-triangle",
        desc: "Verifies the emergency T&P relief valve and carbon monoxide draft function reliably to protect your home."
      },
      {
        title: "Lower Operating Energy Bills",
        icon: "indian-rupee",
        desc: "Burner cleaning, element testing, and thermostat calibration ensure your system runs at peak energy efficiency."
      },
      {
        title: "Prevent Emergency Breakdowns",
        icon: "check-circle",
        desc: "Catches worn thermocouples, weeping valves, and failing expansion tanks before they cause middle-of-the-night failures."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "18-Point Multi-Point Audit",
        desc: "Comprehensive visual and operational inspection of tank shell, valves, venting, and connections."
      },
      {
        step: 2,
        title: "Anode Rod & Valve Testing",
        desc: "Inspection of sacrificial anode rod depletion and mechanical testing of T&P relief valve."
      },
      {
        step: 3,
        title: "Combustion or Electrical Tuneup",
        desc: "Burner vacuuming and flame sensor polish (gas) or element resistance testing and thermostat calibration (electric)."
      },
      {
        step: 4,
        title: "Written Safety Sign-Off",
        desc: "System re-tested under operating load and customer provided with written health checklist and recommendations."
      }
    ],
    pricingGuidance: {
      estimateRange: "₹129 – ₹220 (Illustrative Range)",
      timeframe: "1 – 1.5 Hours",
      costFactors: [
        "Standard multi-point tuneup vs. comprehensive tuneup with anode rod extraction",
        "Anode rod material upgrade (magnesium vs. powered titanium anode rod)",
        "Equipment type (gas storage, electric storage, or high-efficiency condensing tankless)",
        "Discounted enrollment in annual AquaTherma Home Comfort Maintenance Plan"
      ],
      inclusions: [
        "18-point comprehensive safety and performance checklist",
        "T&P safety relief valve mechanical operation check",
        "Thermal expansion tank pressure gauge reading",
        "Combustion flame adjustment or electrical ohm check",
        "Written equipment health report and warranty documentation"
      ]
    },
    faqs: [
      {
        q: "What is a sacrificial anode rod and why is it so important?",
        a: "The sacrificial anode rod is a magnesium or aluminum rod inside the tank that attracts corrosive elements in water. It intentionally corrodes away so the steel tank doesn't rust. When the anode rod is depleted, water begins rusting the tank itself, causing leaks."
      },
      {
        q: "How often should the anode rod be inspected or replaced?",
        a: "We recommend inspecting the anode rod every 2 to 3 years. In homes with water softeners (which accelerate corrosion), inspection should be performed annually. A typical anode rod lasts 4 to 6 years."
      },
      {
        q: "What is included in the 18-point water heater safety tuneup?",
        a: "The tuneup includes inspecting the anode rod, testing the T&P relief valve, checking expansion tank pressure, testing water pressure, cleaning burner/igniter assemblies, checking draft velocity, testing electrical element resistance, and calibrating thermostats."
      },
      {
        q: "Can preventive maintenance lower my monthly energy bills?",
        a: "Yes! Cleaning burners, adjusting combustion air, and calibrating thermostats ensures fuel burns cleanly and heat transfers into water with zero wasted energy."
      },
      {
        q: "Can I perform this maintenance myself?",
        a: "While simple draining can be done by homeowners, removing anode rods requires high-torque impact tools, and testing gas pressure or 240V circuits requires specialized diagnostic instruments and licensed expertise."
      }
    ],
    relatedServiceIds: [
      "water-heater-flushing-maintenance",
      "tank-water-heater-installation",
      "water-heater-replacement"
    ]
  }
];

// Read existing data.js
const dataPath = path.join(__dirname, '..', 'assets', 'js', 'data.js');
let dataJs = fs.readFileSync(dataPath, 'utf8');

// Replace AQUA_DATA.services array
const startMarker = 'services: [';
const endMarker = 'projects: [';

const startIdx = dataJs.indexOf(startMarker);
if (startIdx === -1) {
  console.error('Could not find start of services array in data.js');
  process.exit(1);
}

let endIdx = dataJs.indexOf(endMarker, startIdx);
if (endIdx === -1) {
  console.error('Could not find end of services array in data.js');
  process.exit(1);
}

// Find the closing bracket and comma before projects: [
const closingBracketIdx = dataJs.lastIndexOf('],', endIdx);
if (closingBracketIdx === -1) {
  console.error('Could not find closing bracket of services array');
  process.exit(1);
}

const formattedServices = JSON.stringify(services12, null, 2);

dataJs = dataJs.substring(0, startIdx + 'services: '.length) + 
         formattedServices + 
         dataJs.substring(closingBracketIdx + 1);

fs.writeFileSync(dataPath, dataJs, 'utf8');
console.log('Successfully updated assets/js/data.js with all 12 services!');
