const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const newSection2 = `    <!-- =========================================================================
         SECTION 02: IMMERSIVE SERVICES SHOWCASE (Asymmetric Bento Grid) (2/7)
         ========================================================================= -->
    <section class="py-20 lg:py-28 bg-white dark:bg-[#0B1E2E]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Editorial Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="max-w-2xl">
            <span class="inline-block text-xs font-bold uppercase tracking-widest text-deep-teal dark:text-fresh-aqua mb-2">
              Comprehensive Water Heating Capabilities
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-text dark:text-white tracking-tight leading-tight">
              Everything Your Hot Water System Needs.
            </h2>
            <p class="text-base text-secondary-text dark:text-slate-300 mt-3 leading-relaxed">
              Specialized residential water heating solutions engineered for lasting performance, code-certified safety, and maximum energy savings.
            </p>
          </div>
          <a href="services.html" class="btn-secondary services-view-all text-xs py-2.5 px-5 self-start md:self-auto font-bold whitespace-nowrap">
            View All 12 Services <i data-lucide="arrow-right" class="w-4 h-4 rtl-mirror"></i>
          </a>
        </div>

        <!-- Asymmetric Bento Grid: 1 Featured (7 cols, 2 rows), 2 Medium (5 cols each), 3 Supporting (4 cols each) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          <!-- Panel 1: FEATURED CARD (Spans 7 cols, 2 rows on lg) -->
          <div class="lg:col-span-7 lg:row-span-2 card-theme rounded-2xl overflow-hidden flex flex-col justify-between group border-2 border-deep-teal/20 hover:border-deep-teal transition-all shadow-md hover:shadow-xl">
            <div class="relative h-72 sm:h-84 overflow-hidden">
              <img src="assets/images/services/tankless-installation-cover.jpg" 
                   alt="Residential tankless water heater installation" 
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                   loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-midnight-navy/95 via-midnight-navy/40 to-transparent"></div>
              <div class="absolute top-4 left-4 flex items-center gap-2">
                <span class="px-3 py-1 rounded-full bg-deep-teal text-white text-[11px] font-bold tracking-wider shadow">
                  FLAGSHIP HIGH-EFFICIENCY
                </span>
                <span class="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-fresh-aqua text-[11px] font-bold">
                  0.96 UEF
                </span>
              </div>
              <div class="absolute bottom-4 left-6 right-6 text-white">
                <span class="text-xs text-fresh-aqua font-bold uppercase tracking-wider block">Endless On-Demand Delivery</span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Tankless Water Heater Installation
                </h3>
              </div>
            </div>
            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
              <p class="text-sm sm:text-base text-secondary-text dark:text-slate-300 leading-relaxed mb-0">
                Continuous, endless hot water engineered with commercial condensing technology. Wall-mounted systems reclaim up to 90% of basement floor area while eliminating standby thermal waste with whisper-quiet, modulating gas burners.
              </p>
              
              <div class="grid grid-cols-3 gap-3 py-3 border-y border-theme-border dark:border-[#1C3E57] text-center">
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-[#102B3F]">
                  <span class="block text-lg font-extrabold text-deep-teal dark:text-fresh-aqua">0.96 UEF</span>
                  <span class="text-[11px] text-secondary-text dark:text-slate-400">Energy Factor</span>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-[#102B3F]">
                  <span class="block text-lg font-extrabold text-deep-teal dark:text-fresh-aqua">11 GPM</span>
                  <span class="text-[11px] text-secondary-text dark:text-slate-400">Peak Flow Rate</span>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-[#102B3F]">
                  <span class="block text-lg font-extrabold text-deep-teal dark:text-fresh-aqua">20+ Yrs</span>
                  <span class="text-[11px] text-secondary-text dark:text-slate-400">Lifespan</span>
                </div>
              </div>

              <div class="flex items-center justify-between pt-1">
                <a href="service-detail.html?id=tankless-water-heater-installation" class="inline-flex items-center gap-2 text-sm font-bold text-deep-teal dark:text-fresh-aqua hover:underline">
                  Explore Tankless Engineering <i data-lucide="arrow-right" class="w-4 h-4 rtl-mirror"></i>
                </a>
                <span class="text-xs text-secondary-text dark:text-slate-400 font-semibold">15-Yr Warranty</span>
              </div>
            </div>
          </div>

          <!-- Panel 2: MEDIUM CARD (Spans 5 cols, Row 1 on lg) -->
          <div class="lg:col-span-5 card-theme rounded-2xl overflow-hidden group flex flex-col sm:flex-row justify-between border border-theme-border dark:border-[#1C3E57] hover:border-deep-teal transition-all shadow-sm hover:shadow-lg">
            <div class="sm:w-5/12 h-52 sm:h-auto overflow-hidden relative flex-shrink-0">
              <img src="assets/images/services/tank-installation-cover.jpg" 
                   alt="Traditional storage tank water heater installation" 
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                   loading="lazy">
              <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-midnight-navy/90 text-white text-[10px] font-bold">
                Proven Storage
              </span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-deep-teal dark:text-fresh-aqua block mb-1">Standard 40–80 Gallons</span>
                <h3 class="text-lg sm:text-xl font-bold text-charcoal-text dark:text-white mb-2 group-hover:text-deep-teal transition-colors">
                  Traditional Tank Installation
                </h3>
                <p class="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed mb-0">
                  Dependable glass-lined atmospheric and power-vent storage tanks fitted with expansion tanks, brass ball valves, and code-certified venting.
                </p>
              </div>
              <div class="pt-4 border-t border-theme-border dark:border-[#1C3E57] mt-4 flex flex-wrap items-center justify-between gap-3">
                <span class="text-xs text-secondary-text dark:text-slate-400 font-medium">Lower upfront investment</span>
                <a href="service-detail.html?id=tank-water-heater-installation" class="text-xs font-bold text-deep-teal dark:text-fresh-aqua hover:underline inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0 ms-auto">
                  Learn Details <i data-lucide="arrow-right" class="w-3.5 h-3.5 flex-shrink-0 rtl-mirror"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Panel 3: MEDIUM CARD (Spans 5 cols, Row 2 on lg) -->
          <div class="lg:col-span-5 card-theme rounded-2xl overflow-hidden group flex flex-col sm:flex-row justify-between border border-theme-border dark:border-[#1C3E57] hover:border-warm-copper transition-all shadow-sm hover:shadow-lg">
            <div class="sm:w-5/12 h-52 sm:h-auto overflow-hidden relative flex-shrink-0">
              <img src="assets/images/services/emergency-repair-cover.jpg" 
                   alt="Emergency water heater repair diagnostic inspection" 
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                   loading="lazy">
              <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-warm-copper text-white text-[10px] font-bold">
                24/7 Priority
              </span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-warm-copper block mb-1">Under 60 Min Dispatch</span>
                <h3 class="text-lg sm:text-xl font-bold text-charcoal-text dark:text-white mb-2 group-hover:text-warm-copper transition-colors">
                  Emergency Water Heater Repair
                </h3>
                <p class="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed mb-0">
                  Immediate technician arrival for active tank breaches, failed pilot lights, tripping breakers, or sudden loss of hot water.
                </p>
              </div>
              <div class="pt-4 border-t border-theme-border dark:border-[#1C3E57] mt-4 flex items-center justify-between">
                <span class="text-xs text-warm-copper font-semibold">Stocked OEM parts</span>
                <a href="service-detail.html?id=emergency-water-heater-repair" class="text-xs font-bold text-warm-copper hover:underline inline-flex items-center gap-1">
                  Urgent Repair <i data-lucide="arrow-right" class="w-3.5 h-3.5 rtl-mirror"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Panel 4: SUPPORTING CARD (Spans 4 cols on lg) -->
          <div class="lg:col-span-4 card-theme rounded-2xl p-6 group border border-theme-border dark:border-[#1C3E57] hover:border-deep-teal transition-all flex flex-col justify-between">
            <div>
              <div class="h-44 rounded-xl overflow-hidden mb-4 relative">
                <img src="assets/images/services/replacement-cover.jpg" alt="Water heater replacement and haul away" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-midnight-navy/90 text-white text-[10px] font-bold">Turnkey Changeout</span>
              </div>
              <h3 class="text-lg font-bold text-charcoal-text dark:text-white mb-2">Water Heater Replacement</h3>
              <p class="text-xs text-secondary-text dark:text-slate-300 leading-relaxed mb-0">
                Safe decommissioning of failing 10+ year units with complete draining, scrap haul-away, and updated code fittings.
              </p>
            </div>
            <div class="pt-4 mt-4 border-t border-theme-border dark:border-[#1C3E57] flex items-center justify-between">
              <span class="text-[11px] text-secondary-text dark:text-slate-400">Fixed-Price Quote</span>
              <a href="service-detail.html?id=water-heater-replacement" class="text-xs font-bold text-deep-teal dark:text-fresh-aqua hover:underline inline-flex items-center gap-1">
                Explore Replacement <i data-lucide="arrow-right" class="w-3.5 h-3.5 rtl-mirror"></i>
              </a>
            </div>
          </div>

          <!-- Panel 5: SUPPORTING CARD (Spans 4 cols on lg) -->
          <div class="lg:col-span-4 card-theme rounded-2xl p-6 group border border-theme-border dark:border-[#1C3E57] hover:border-deep-teal transition-all flex flex-col justify-between">
            <div>
              <div class="h-44 rounded-xl overflow-hidden mb-4 relative">
                <img src="assets/images/services/maintenance-cover.jpg" alt="Water heater maintenance and flushing" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-midnight-navy/90 text-white text-[10px] font-bold">Preventative Care</span>
              </div>
              <h3 class="text-lg font-bold text-charcoal-text dark:text-white mb-2">Maintenance &amp; Flushing</h3>
              <p class="text-xs text-secondary-text dark:text-slate-300 leading-relaxed mb-0">
                Annual descaling flush, sacrificial anode rod inspection, and safety relief valve testing to prolong unit lifespan.
              </p>
            </div>
            <div class="pt-4 mt-4 border-t border-theme-border dark:border-[#1C3E57] flex items-center justify-between">
              <span class="text-[11px] text-secondary-text dark:text-slate-400">Restores Efficiency</span>
              <a href="service-detail.html?id=water-heater-flushing-maintenance" class="text-xs font-bold text-deep-teal dark:text-fresh-aqua hover:underline inline-flex items-center gap-1">
                Explore Maintenance <i data-lucide="arrow-right" class="w-3.5 h-3.5 rtl-mirror"></i>
              </a>
            </div>
          </div>

          <!-- Panel 6: SUPPORTING CARD (Spans 4 cols on lg) -->
          <div class="lg:col-span-4 card-theme rounded-2xl p-6 group border border-theme-border dark:border-[#1C3E57] hover:border-deep-teal transition-all flex flex-col justify-between">
            <div>
              <div class="h-44 rounded-xl overflow-hidden mb-4 relative">
                <img src="assets/images/services/gas-electric-cover.jpg" alt="Gas and electric water heater troubleshooting" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-midnight-navy/90 text-white text-[10px] font-bold">Dual Fuel Care</span>
              </div>
              <h3 class="text-lg font-bold text-charcoal-text dark:text-white mb-2">Gas &amp; Electric Services</h3>
              <p class="text-xs text-secondary-text dark:text-slate-300 leading-relaxed mb-0">
                Digital manometer pressure test, thermocouple replacement, 240V dual element diagnostics, and digital thermostats.
              </p>
            </div>
            <div class="pt-4 mt-4 border-t border-theme-border dark:border-[#1C3E57] flex items-center justify-between">
              <span class="text-[11px] text-secondary-text dark:text-slate-400">OEM Parts In Stock</span>
              <a href="service-detail.html?id=gas-water-heater-services" class="text-xs font-bold text-deep-teal dark:text-fresh-aqua hover:underline inline-flex items-center gap-1">
                Explore Diagnostics <i data-lucide="arrow-right" class="w-3.5 h-3.5 rtl-mirror"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>`;

const secStart = html.indexOf('<!-- SECTION 02: IMMERSIVE SERVICES SHOWCASE');
// If comment has full text:
let startIdx = html.indexOf('SECTION 02: IMMERSIVE SERVICES SHOWCASE');
if (startIdx !== -1) {
  startIdx = html.lastIndexOf('<!--', startIdx);
}
let endIdx = html.indexOf('SECTION 03: INTERACTIVE WATER HEATER SYSTEM EXPLORER');
if (endIdx !== -1) {
  endIdx = html.lastIndexOf('<!--', endIdx);
}

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find Section 02 bounds', { startIdx, endIdx });
  process.exit(1);
}

html = html.substring(0, startIdx) + newSection2 + '\n\n    ' + html.substring(endIdx);
fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated Section 02 in index.html!');
