const fs = require('fs');

const projectsData = [
  {
    id: "whole-home-tankless-upgrade",
    slug: "whole-home-tankless-upgrade",
    aliases: ["residential-tankless-conversion"],
    title: "Whole-Home Tankless System Upgrade",
    category: "tankless",
    categoryLabel: "Tankless",
    location: "Westfield Estates, Metro Area",
    duration: "5 Hours Turnaround",
    coverImage: "assets/images/projects/project-1.jpg",
    detailHeroImage: "assets/images/projects/project-1.jpg",
    detailImage: "assets/images/project-details/project-1-b.jpg",
    detailImages: [
      "assets/images/projects/project-1.jpg",
      "assets/images/project-details/project-1-b.jpg"
    ],
    summary: "Replaced an aging, inefficient 50-gallon atmospheric storage tank with an endless 199,000 BTU condensing tankless system, freeing up 14 sq ft of basement space and achieving 28% gas savings.",
    specs: {
      oldSystem: "50-Gal Atmospheric 40,000 BTU Gas Tank (14 Years Old)",
      newSystem: "199,000 BTU Condensing Tankless System",
      fuelType: "Natural Gas (3/4-inch Upgraded Dedicated Branch)",
      flowRate: "9.8 GPM Peak Flow Rate (3 Showers Simultaneously)",
      efficiency: "0.96 UEF Energy Star Certified",
      warranty: "15-Year Heat Exchanger / 5-Year Parts / 2-Year Labor"
    },
    overview: "The homeowners in Westfield Estates were frustrated by cold showers every morning as their family grew. Their 14-year-old atmospheric gas tank required nearly an hour to recover and had begun showing mineral weeping at the base fittings. AquaTherma engineered a complete conversion to an ultra-efficient wall-hung condensing tankless unit.",
    challenge: "A family of five suffered from severe hot water exhaustion during morning peak hours. The existing tank suffered from heavy lime buildup, inadequate combustion air, and occupied valuable floor space in their finished basement utility room.",
    problemAssessment: "Our diagnostic inspection revealed severe calcium scale accumulation within the tank base, limiting actual usable capacity to under 32 gallons. The flue draft was sluggish, and the 1/2-inch gas branch was undersized for modern heating equipment. Complete replacement with high-capacity tankless technology was recommended.",
    solution: "Our technicians removed the obsolete 50-gallon tank, upgraded the gas supply line to 3/4-inch black iron from the primary manifold, and mounted an Energy Star condensing tankless unit. We installed dual concentric PVC venting through the rim joist, built copper supply headers with lead-free brass ball valves, and integrated a webstone isolation valve flush kit for effortless maintenance.",
    workPerformed: "Demolition and eco-safe tank disposal; 3/4-inch gas line branch expansion; wall-mounting with vibration isolators; direct concentric PVC intake/exhaust penetration; electrical connection with surge protector; high-flow isolation valves and condensate neutralizer installation.",
    outcome: "The family now enjoys continuous, limitless hot water across three simultaneous showers. The wall-mounted footprint reclaimed 14 square feet of floor space, while the 0.96 UEF condensing unit delivered an estimated 28% reduction in monthly water-heating gas usage.",
    homeownerQuote: "We can run the dishwasher, laundry, and two showers simultaneously without the slightest temperature drop. Reclaiming our basement floor space was the icing on the cake.",
    clientName: "The Henderson Family",
    verifiedReview: "5-Star Verified Homeowner Review",
    relatedProjectIds: ["compact-tankless-townhome-installation", "high-efficiency-water-heater-upgrade"]
  },
  {
    id: "compact-tankless-townhome-installation",
    slug: "compact-tankless-townhome-installation",
    aliases: ["commercial-cascading-tankless-array"],
    title: "Compact Tankless Installation for Townhome Utility Room",
    category: "tankless",
    categoryLabel: "Tankless",
    location: "Highland Park Townhomes",
    duration: "4 Hours Turnaround",
    coverImage: "assets/images/projects/project-2.jpg",
    detailHeroImage: "assets/images/projects/project-2.jpg",
    detailImage: "assets/images/project-details/project-2-b.jpg",
    detailImages: [
      "assets/images/projects/project-2.jpg",
      "assets/images/project-details/project-2-b.jpg"
    ],
    summary: "Engineered a tight-clearance wall-mounted tankless installation inside a compact 4x6 ft townhome utility closet, eliminating space restrictions and providing on-demand continuous hot water.",
    specs: {
      oldSystem: "40-Gal Lowboy Electric Tank (11 Years Old)",
      newSystem: "160,000 BTU Compact Wall-Mounted Tankless",
      fuelType: "Natural Gas / Dedicated Side-Wall Venting",
      flowRate: "7.5 GPM Continuous Output (2 Bathrooms)",
      efficiency: "0.95 UEF Energy Star Certified",
      warranty: "12-Year Heat Exchanger / 5-Year Parts / 2-Year Labor"
    },
    overview: "A multi-level townhome in Highland Park featured a tiny interior closet housing both the washer-dryer and an old water heater tank. The bulky tank made accessing laundry shutoffs nearly impossible and struggled to satisfy consecutive evening baths. AquaTherma designed a zero-clearance wall-hung tankless solution tailored for compact living spaces.",
    challenge: "Extreme spatial constraints in a 4x6 utility closet prevented installing any standard modern replacement tank without violating mechanical code clearances. Furthermore, the homeowner required reliable hot water for dual bathrooms without waiting for slow tank reheat cycles.",
    problemAssessment: "The existing 40-gallon tank blocked emergency shutoff valves and showed signs of upper element failure. Thermal imaging confirmed significant standby heat loss into the unconditioned closet. Venting path was restricted to a single 18-foot horizontal run through an exterior cantilever floor cavity.",
    solution: "We selected an ultra-compact condensing tankless heater engineered specifically for tight utility closets. We routed zero-clearance polypropylene venting horizontally through the exterior sidewall, installed commercial-grade copper connections with quick-access ball valves, and mounted the unit with seismic safety brackets.",
    workPerformed: "Old lowboy tank removal; structural wall reinforcement backing board install; sidewall core penetration for intake/exhaust termination; gas flex pipe connection with high-capacity shutoff; pressure relief piping to exterior discharge.",
    outcome: "The compact footprint completely opened up the utility closet, providing effortless access to plumbing shutoffs and storage shelves. The unit delivers instant, uninterrupted hot water at 7.5 GPM with zero standby energy waste.",
    homeownerQuote: "I couldn't believe how much room we got back in our laundry closet. It looks super sleek, runs dead silent, and we never run out of hot water.",
    clientName: "Marcus Vance",
    verifiedReview: "Verified Townhome Resident",
    relatedProjectIds: ["whole-home-tankless-upgrade", "electric-storage-water-heater-replacement"]
  },
  {
    id: "emergency-leak-repair-shutoff",
    slug: "emergency-leak-repair-shutoff",
    aliases: ["severe-leak-emergency-remediation"],
    title: "Emergency Leak Repair & Shutoff Response",
    category: "emergency",
    categoryLabel: "Emergency",
    location: "Oakridge Subdivisions, Metro East",
    duration: "90 Minutes Dispatch & Repair",
    coverImage: "assets/images/projects/project-3.jpg",
    detailHeroImage: "assets/images/projects/project-3.jpg",
    detailImage: "assets/images/project-details/project-3-b.jpg",
    detailImages: [
      "assets/images/projects/project-3.jpg",
      "assets/images/project-details/project-3-b.jpg"
    ],
    summary: "Rapid 42-minute on-site response to a severely fractured inlet brass nipple and leaking drain valve, isolating flooding risks and rebuilding plumbing connections before water damage occurred.",
    specs: {
      systemType: "50-Gal Atmospheric Gas Water Heater (6 Years Old)",
      failurePoint: "Dielectric Union Fracture & Brass Nipple Seam",
      responseSpeed: "42 Minutes From Dispatch Call",
      repairScope: "Full Inlet Rebuild, Thermal Valve Replacement",
      pressureCheck: "Regulated to 62 PSI Dynamic",
      warranty: "2-Year AquaTherma Emergency Workmanship"
    },
    overview: "At 6:30 AM on a weekday, a homeowner discovered water cascading from the top plumbing connections of their 50-gallon gas water heater into the basement floor drain. With water rapidly spreading toward finished basement carpet, AquaTherma's emergency rapid response unit arrived within 42 minutes to execute emergency isolation and immediate rebuild.",
    challenge: "Active high-pressure water stream spraying from corroded dielectric unions above the tank, posing imminent flood hazards to nearby finished drywall, carpet, and furnace electrical boards.",
    problemAssessment: "Galvanic corrosion between dissimilar metals had eaten away the male threads on the cold-water inlet nipple, causing sudden thread blow-out under 78 PSI municipal pressure surges. The tank vessel itself was sound, but inlet piping and expansion fittings required complete surgical replacement.",
    solution: "Our technician immediately executed main shutoff, drained top tank head pressure, cut back deteriorated galvanized junctions, and sweat-fitted commercial lead-free dielectric brass transitions. We installed a new Watts thermal expansion tank properly pre-charged to 62 PSI and replaced the leaking plastic drain valve with heavy-duty full-port brass.",
    workPerformed: "Immediate line isolation & pressure relief; extraction of sheared nipple threads from tank spud; rebuild of hot/cold copper stubs with dielectric brass unions; installation of new pre-charged thermal expansion vessel; high-pressure bubble test and burner safety verification.",
    outcome: "The emergency was completely stabilized and rebuilt within 90 minutes of arrival. Zero property damage reached the finished basement, and water heating was restored safely the same morning.",
    homeownerQuote: "Water was shooting across my utility room when I called. The technician arrived in under 45 minutes, had the exact parts in his truck, and saved my finished basement from tens of thousands in damage.",
    clientName: "David & Karen Sterling",
    verifiedReview: "Emergency Hotline Caller",
    relatedProjectIds: ["no-hot-water-emergency-restoration", "50-gallon-gas-water-heater-installation"]
  },
  {
    id: "no-hot-water-emergency-restoration",
    slug: "no-hot-water-emergency-restoration",
    aliases: ["emergency-sunday-tank-replacement"],
    title: "No Hot Water Emergency Restoration",
    category: "emergency",
    categoryLabel: "Emergency",
    location: "Crestview Hills Estate",
    duration: "2.5 Hours Turnaround",
    coverImage: "assets/images/projects/project-4.jpg",
    detailHeroImage: "assets/images/projects/project-4.jpg",
    detailImage: "assets/images/project-details/project-4-b.jpg",
    detailImages: [
      "assets/images/projects/project-4.jpg",
      "assets/images/project-details/project-4-b.jpg"
    ],
    summary: "Emergency diagnostic and restoration on a dead gas control valve and fouled pilot assembly, safely reviving hot water production for a multi-generational household in sub-freezing weather.",
    specs: {
      systemType: "40-Gal Power-Vent Gas Water Heater",
      malfunction: "Gas Control Thermostat Board Failure & Thermopile",
      weatherCondition: "18°F Winter Ambient Outside",
      diagnosisTime: "25 Minutes Diagnostic Run",
      safetyTest: "Zero PPM Carbon Monoxide, Clean Draft",
      warranty: "1-Year Direct Component & Labor Warranty"
    },
    overview: "During an extreme winter freeze with outside temperatures at 18°F, a home with newborn twins lost all hot water. The power-vent gas water heater locked out with a repeated error flash code. Previous companies quoted a 3-day wait time for parts. AquaTherma dispatched a fully stocked mobile diagnostic vehicle within two hours.",
    challenge: "Complete loss of domestic hot water during severe winter weather with vulnerable family members in the home. The electronic gas control valve was completely unresponsive, preventing burner ignition.",
    problemAssessment: "Our multimeter diagnostic confirmed the internal thermopile had degraded to under 180 millivolts (well below the 450mV threshold needed to hold the gas solenoid open). Furthermore, the electronic control board suffered a surge fault from a recent power grid blip.",
    solution: "Using our fully stocked OEM inventory, our certified technician swapped in a genuine Honeywell electronic gas control thermostat, installed a clean pilot/thermopile assembly with sealed burner door gaskets, and vacuumed the combustion intake screen to ensure peak combustion airflow.",
    workPerformed: "Combustion chamber seal inspection; replacement of Honeywell gas control valve; new high-output pilot assembly install; gas line leak bubble testing; exhaust blower pressure switch testing; full ignition cycle commissioning.",
    outcome: "Burner ignited cleanly on the first cycle, bringing water temperatures up to 125°F within 35 minutes. Carbon monoxide testing confirmed 0 PPM in ambient air and a clean 4.2% flue draft, leaving the home fully safe and warm.",
    homeownerQuote: "With a newborn baby and sub-freezing temperatures outside, having no hot water was terrifying. AquaTherma had the parts right in their van and got hot water running before noon. Lifesavers!",
    clientName: "Elena Rostova",
    verifiedReview: "Verified Emergency Customer",
    relatedProjectIds: ["emergency-leak-repair-shutoff", "50-gallon-gas-water-heater-installation"]
  },
  {
    id: "high-efficiency-water-heater-upgrade",
    slug: "high-efficiency-water-heater-upgrade",
    aliases: ["hybrid-heat-pump-retrofit"],
    title: "High-Efficiency Water Heater Upgrade",
    category: "energy-upgrades",
    categoryLabel: "Energy Upgrades",
    location: "Greenbriar Heights Eco-Community",
    duration: "6 Hours Turnaround",
    coverImage: "assets/images/projects/project-5.jpg",
    detailHeroImage: "assets/images/projects/project-5.jpg",
    detailImage: "assets/images/project-details/project-5-b.jpg",
    detailImages: [
      "assets/images/projects/project-5.jpg",
      "assets/images/project-details/project-5-b.jpg"
    ],
    summary: "Replaced an inefficient 50-gallon standard electric tank with an advanced 65-gallon Hybrid Heat Pump water heater with 3.75 UEF rating, cutting electrical water heating costs by 73%.",
    specs: {
      oldSystem: "50-Gal Standard Electric Resistance Tank (0.90 UEF)",
      newSystem: "65-Gal Smart Hybrid Heat Pump Water Heater",
      efficiencyRating: "3.75 UEF (Tier 4 Energy Star)",
      projectedSavings: "~₹380 Annual Electricity Reduction",
      soundLevel: "45 dBA Whisper-Quiet Operation",
      utilityRebate: "₹1,200 State & Utility Rebate Qualified"
    },
    overview: "Homeowners in Greenbriar Heights were seeking to slash escalating electric utility bills and reduce their carbon footprint. Their 12-year-old resistance electric heater consumed nearly 30% of their total home electrical usage. AquaTherma designed a turnkey Hybrid Heat Pump retrofit utilizing ambient basement heat to produce domestic hot water.",
    challenge: "High electrical energy consumption, tight 240V breaker capacity, and the need for a dedicated condensation drainage path in a basement with no floor drain nearby.",
    problemAssessment: "The existing electric tank drew 4,500W constantly while cycling, driving monthly utility bills higher. The installation space had ample air volume (over 700 cubic feet required for heat pumps) but lacked gravity drainage for heat pump condensate.",
    solution: "We installed a 65-gallon Smart Hybrid Heat Pump water heater with integrated compressor management. We built an automatic condensate removal pump piped through the exterior sill plate, integrated vibration dampeners, and connected the unit to the homeowner's smartphone app for schedule-based energy optimization.",
    workPerformed: "Safe removal and recycling of old electric heater; structural floor isolation pad placement; dedicated condensate pump and check valve piping; electrical 240V 30-amp disconnect upgrade; Wi-Fi energy monitoring configuration; utility rebate documentation processing.",
    outcome: "The homeowners reduced water heating electricity draw from 4,500W down to an average of just 420W in heat pump mode, generating over ₹380 in direct annual savings and qualifying for a ₹1,200 local clean energy rebate.",
    homeownerQuote: "Our electric bill dropped visibly in the very first billing cycle! It runs super quietly in our basement and the mobile app lets us put it into vacation mode when we travel. Best upgrade we've done.",
    clientName: "Jonathan & Sarah Miller",
    verifiedReview: "Clean Energy Certified Project",
    relatedProjectIds: ["recirculation-performance-upgrade", "electric-storage-water-heater-replacement"]
  },
  {
    id: "recirculation-performance-upgrade",
    slug: "recirculation-performance-upgrade",
    aliases: ["smart-recirculation-pump-retrofit"],
    title: "Recirculation & Performance Upgrade Project",
    category: "energy-upgrades",
    categoryLabel: "Energy Upgrades",
    location: "Belmont Ridge Manor, Hilltop Estates",
    duration: "3.5 Hours Turnaround",
    coverImage: "assets/images/projects/project-6.jpg",
    detailHeroImage: "assets/images/projects/project-6.jpg",
    detailImage: "assets/images/project-details/project-6-b.jpg",
    detailImages: [
      "assets/images/projects/project-6.jpg",
      "assets/images/project-details/project-6-b.jpg"
    ],
    summary: "Installed a smart on-demand hot water recirculation loop system with digital thermal bypass valves, reducing wait times at second-floor master fixtures from 110 seconds to under 3 seconds.",
    specs: {
      systemType: "Dedicated Smart Recirculation Pump Retrofit",
      waitTimeToFixture: "Reduced from 110s down to 3s",
      waterConserved: "~11,000 Gallons Saved Annually",
      pumpControl: "Smart Flow Sensor & Weekly Scheduling",
      pipeInsulation: "Commercial Closed-Cell Foam Throughout",
      warranty: "3-Year Complete System Warranty"
    },
    overview: "In a sprawling 4,200 sq ft two-story home, the second-floor master bathroom was located over 75 linear feet from the water heater. The homeowners waited nearly two minutes every morning with the faucet running before receiving warm water, wasting thousands of gallons of treated water. AquaTherma engineered a high-performance recirculation system.",
    challenge: "Extensive plumbing distance created unacceptable hot water wait times, significant municipal water waste, and homeowner frustration with morning delays.",
    problemAssessment: "Testing revealed 75+ feet of uninsulated 3/4-inch copper piping running through unconditioned exterior joist cavities. Over 2.5 gallons of cold water was discharged down the drain every time hot water was initiated at the master bath sink and soaking tub.",
    solution: "We installed an ultra-efficient stainless steel smart circulator pump directly above the water heater discharge line, added a high-accuracy thermal bypass manifold beneath the furthest sink vanity, and insulated 60 feet of accessible piping with closed-cell thermal sleeves.",
    workPerformed: "Circulator pump mounting with integral check valve; bypass manifold installation under master vanity; pipe thermal insulation wrap; digital timer and wireless motion sensor integration; water flow calibration and thermal balancing.",
    outcome: "Hot water now arrives at every tap in the home in under three seconds. The smart controller activates the pump only during peak household hours and upon movement, preventing line standby heat loss and saving approximately 11,000 gallons of municipal water every year.",
    homeownerQuote: "No more standing by the shower for two minutes waiting for warm water. The instant hot water feels like a 5-star luxury hotel, and we're saving water every single day.",
    clientName: "Arthur & Chloe Kensington",
    verifiedReview: "Verified Luxury Home Retrofit",
    relatedProjectIds: ["high-efficiency-water-heater-upgrade", "whole-home-tankless-upgrade"]
  },
  {
    id: "50-gallon-gas-water-heater-installation",
    slug: "50-gallon-gas-water-heater-installation",
    aliases: ["power-vent-gas-installation"],
    title: "50-Gallon Gas Water Heater Installation",
    category: "tank-installation",
    categoryLabel: "Tank Installation",
    location: "Sunset Valley Residential Suburb",
    duration: "4 Hours Turnaround",
    coverImage: "assets/images/projects/project-7.jpg",
    detailHeroImage: "assets/images/projects/project-7.jpg",
    detailImage: "assets/images/project-details/project-7-b.jpg",
    detailImages: [
      "assets/images/projects/project-7.jpg",
      "assets/images/project-details/project-7-b.jpg"
    ],
    summary: "Complete installation of a commercial-grade 50-gallon natural gas water heater featuring an atmospheric draft hood, dual magnesium anode rods, and brass drain valve for long-term family reliability.",
    specs: {
      tankCapacity: "50-Gallon Tall Gas Storage Heater",
      burnerInput: "40,000 BTU/hr Natural Gas",
      firstHourRating: "84 Gallons First-Hour Delivery",
      tankProtection: "Dual Heavy-Duty Magnesium Anode Rods",
      safetyValves: "Watts 150 PSI / 210°F T&P Valve + Discharge Line",
      warranty: "10-Year Tank & 2-Year Full Workmanship"
    },
    overview: "A family in Sunset Valley needed a dependable, budget-friendly replacement for an aging 15-year-old gas water heater that had begun rumbling from sediment buildup. They wanted proven traditional gas technology that would support their active 4-person family without requiring complex wall venting modifications. AquaTherma delivered a code-compliant turnkey installation.",
    challenge: "Sediment accumulation caused popping and burner inefficiency in the existing tank, which was past its design lifespan. The chimney flue connection required modernization to comply with revised combustion safety standards.",
    problemAssessment: "Diagnostic inspection revealed 4 inches of calcified sediment at the bottom of the old tank, reducing thermal transfer by 35%. The chimney vent connector lacked proper slope and had corrosion at the draft hood collar. Complete tank replacement and vent rebuild were required.",
    solution: "We installed a premium 50-gallon Bradford White commercial-grade gas tank heater featuring a Defender Safety System. We rebuilt the B-vent chimney connector with rigid 26-gauge galvanized pipe, installed a thermal expansion tank on a dedicated brass bracket, and added full-port brass isolation ball valves.",
    workPerformed: "Safe draining and removal of obsolete tank; B-vent flue connection rebuild with code-compliant slope; copper piping sweat-soldered with lead-free dielectric fittings; seismic earthquake strapping installed; carbon monoxide combustion analysis verified.",
    outcome: "The new 50-gallon system delivers 84 gallons of hot water in the first hour—plenty for morning rush hour with teenagers. The whisper-quiet burner and dual anode rods ensure an expected lifespan of 12-15+ years of reliable hot water.",
    homeownerQuote: "The team was on time, super neat, and left our basement cleaner than they found it. The water heats up fast and we haven't run out once even with all the kids showering!",
    clientName: "Robert & Emily Campbell",
    verifiedReview: "Verified Homeowner Review",
    relatedProjectIds: ["electric-storage-water-heater-replacement", "whole-home-tankless-upgrade"]
  },
  {
    id: "electric-storage-water-heater-replacement",
    slug: "electric-storage-water-heater-replacement",
    aliases: ["electric-replacement-expansion-tank"],
    title: "Electric Storage Water Heater Replacement Installation",
    category: "tank-installation",
    categoryLabel: "Tank Installation",
    location: "Pinecrest Wooded Estates",
    duration: "3.5 Hours Turnaround",
    coverImage: "assets/images/projects/project-8.jpg",
    detailHeroImage: "assets/images/projects/project-8.jpg",
    detailImage: "assets/images/project-details/project-8-b.jpg",
    detailImages: [
      "assets/images/projects/project-8.jpg",
      "assets/images/project-details/project-8-b.jpg"
    ],
    summary: "Installed a 50-gallon high-recovery electric tank heater with upgraded low-watt density titanium heating elements, emergency overflow drain pan, and dedicated electrical disconnect switch.",
    specs: {
      tankCapacity: "50-Gallon Standard Electric Storage",
      electricalSpecs: "240V AC / 4500W Dual Titanium Elements",
      safetyPan: "24-inch Heavy Gauge Aluminum Pan w/ PVC Drain",
      expansionTank: "Thermal Expansion Tank Calibrated to 60 PSI",
      standbyLoss: "R-16 Environmentally Friendly Foam Insulation",
      warranty: "10-Year Tank / 6-Year Elements & Parts"
    },
    overview: "In an all-electric rural home in Pinecrest Estates with hard well water, the lower heating element on the 13-year-old electric water heater had burnt out, leaving the homeowners with lukewarm water. AquaTherma carried out a comprehensive replacement engineered specifically for well-water mineral resistance.",
    challenge: "Burned-out lower element, aggressive well-water mineral scale, and an uncontained installation location directly above a finished subfloor without an emergency drain pan.",
    problemAssessment: "Heavy lime buildup on standard copper heating elements caused dry-fire failure of the lower thermostat circuit. Furthermore, the tank sat directly on wood flooring with no secondary catch pan or overflow drain route, representing a hidden flooding hazard.",
    solution: "We replaced the unit with a heavy-duty 50-gallon electric heater equipped with premium resistored titanium elements that resist scale adhesion. We installed a seamless aluminum safety drain pan routed to the exterior, added a pre-pressurized expansion tank, and wired in a wall-mounted 30A electrical disconnect switch for instant safety isolation.",
    workPerformed: "Electrical circuit lock-out tag-out; water line drainage and old tank removal; aluminum safety pan and drain pipe install; 240V wiring connection with flexible metallic conduit; copper flex water connections with dielectric insulators; water testing and element continuity verification.",
    outcome: "The homeowners regained steaming, consistent hot water within 45 minutes of element energization. The titanium elements and safety drain pan provide peace of mind against hard water failures and leak damage for over a decade.",
    homeownerQuote: "We had lukewarm showers for weeks before calling AquaTherma. They explained how hard well water affects electric elements and installed a system built to handle it. Exceptional work!",
    clientName: "Gordon & Nancy Hayes",
    verifiedReview: "Verified Rural Homeowner",
    relatedProjectIds: ["50-gallon-gas-water-heater-installation", "annual-water-heater-maintenance-descaling"]
  },
  {
    id: "annual-water-heater-maintenance-descaling",
    slug: "annual-water-heater-maintenance-descaling",
    aliases: ["comprehensive-descaling-restoration"],
    title: "Annual Water Heater Maintenance & Descaling Service",
    category: "maintenance",
    categoryLabel: "Maintenance",
    location: "Rolling Oaks Community",
    duration: "2 Hours Turnaround",
    coverImage: "assets/images/projects/project-9.jpg",
    detailHeroImage: "assets/images/projects/project-9.jpg",
    detailImage: "assets/images/project-details/project-9-b.jpg",
    detailImages: [
      "assets/images/projects/project-9.jpg",
      "assets/images/project-details/project-9-b.jpg"
    ],
    summary: "Comprehensive chemical descaling flush, sacrificial anode inspection, and safety valve testing on a 4-year-old water heating system, restoring 100% heat transfer efficiency.",
    specs: {
      serviceType: "Annual Preventative Maintenance & Descaling",
      scaleExtracted: "3.8 lbs of Calcium & Carbonate Mineral Scale",
      anodeRodStatus: "Replaced Sacrificial Anode (65% Depleted)",
      pressureCheck: "T&P Relief Valve Tested & Flushed",
      combustionCheck: "Burner Cleaned & Gas Pressure Calibrated",
      warranty: "1-Year AquaTherma Service Guarantee"
    },
    overview: "Homeowners in Rolling Oaks noticed their water heater had begun making loud kettle popping noises and taking noticeably longer to deliver hot water. Having lived in a moderate hard water district for 4 years without service, their system was suffering from mineral sedimentation that strangled heat exchanger efficiency.",
    challenge: "Severe mineral scale choking burner heat transfer, creating popping noise, extending reheat times, and accelerating premature tank bottom corrosion.",
    problemAssessment: "Inspection through the drain port revealed heavy calcification blanketed across the heat exchanger surface. Water test showed 12 grains per gallon hardness. The sacrificial anode rod was over 65% consumed, leaving the tank steel exposed to cathodic attack if left unserviced.",
    solution: "Our technicians executed a closed-loop recirculation descaling treatment using food-grade virgin citric acid flush solution for 60 minutes. We extracted the deteriorated anode rod and replaced it with a fresh powered magnesium rod, flushed out 3.8 lbs of dissolved lime, and tested all emergency safety relief valves.",
    workPerformed: "System isolation and power cut; descaling pump loop connected to isolation valves; 60-minute circulation of eco-friendly descaling agent; clear water neutralizer flush; anode rod extraction and replacement; T&P relief valve dynamic pop-off test; burner chamber vacuuming.",
    outcome: "Kettle popping noises were 100% eliminated. Water heating recovery time improved by 22%, system operating efficiency was restored to factory specifications, and the fresh anode rod added 5+ years of anti-corrosion protection to the tank.",
    homeownerQuote: "The popping sounds stopped completely! Our water gets hot so much faster now, and knowing the anode was replaced gives us great confidence that our heater will last.",
    clientName: "Bradley Cooper & Diane White",
    verifiedReview: "Annual Maintenance Club Member",
    relatedProjectIds: ["50-gallon-gas-water-heater-installation", "whole-home-tankless-upgrade"]
  }
];

// Read assets/js/data.js
let content = fs.readFileSync('assets/js/data.js', 'utf8');

// Find projects: [ ... ]
const startIdx = content.indexOf('projects: [');
const endIdx = content.indexOf('blogs: [');

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find projects or blogs markers in data.js');
  process.exit(1);
}

// Find the closing bracket of projects before blogs: [
const sliceBeforeBlogs = content.substring(startIdx, endIdx);
const lastClosingBracket = sliceBeforeBlogs.lastIndexOf('],');

if (lastClosingBracket === -1) {
  console.error('Could not find closing bracket for projects array');
  process.exit(1);
}

const projectsReplacement = 'projects: ' + JSON.stringify(projectsData, null, 2) + ',\n\n  // ';
const newContent = content.substring(0, startIdx) + projectsReplacement + content.substring(startIdx + lastClosingBracket + 2).replace(/^\s*\/\/\s*/, '');

fs.writeFileSync('assets/js/data.js', newContent, 'utf8');
console.log('Successfully updated AQUA_DATA.projects in assets/js/data.js!');
