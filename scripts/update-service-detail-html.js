const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'service-detail.html');
let html = fs.readFileSync(filePath, 'utf8');

const newMainContent = `  <main>
    <!-- =========================================================================
         SECTION 01: SERVICE DETAIL HERO (1/7)
         ========================================================================= -->
    <section class="relative bg-slate-50 dark:bg-[#091D2C] py-12 lg:py-16 border-b border-theme-border dark:border-[#1C3E57]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid lg:grid-cols-12 gap-10 items-center">
          <!-- Hero Content -->
          <div class="lg:col-span-7">
            <span id="srv-badge" class="badge-tag badge-blue mb-3 inline-block">Flagship High-Efficiency</span>
            <h1 id="srv-title" class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-text dark:text-white tracking-tight leading-tight mb-4">
              Tankless Water Heater Installation
            </h1>
            <p id="srv-short-desc" class="text-base sm:text-lg text-secondary-text dark:text-slate-300 leading-relaxed mb-6">
              Endless on-demand hot water with commercial-grade condensing systems engineered for your household's peak flow requirements and maximum energy savings.
            </p>

            <!-- Trust Highlights -->
            <div class="grid grid-cols-3 gap-3 py-4 border-y border-theme-border dark:border-[#1C3E57] mb-6">
              <div class="flex items-center gap-2">
                <i data-lucide="shield-check" class="w-5 h-5 text-deep-teal dark:text-fresh-aqua flex-shrink-0"></i>
                <span class="text-xs font-bold text-charcoal-text dark:text-white leading-tight">Master Plumber Certified</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="file-check" class="w-5 h-5 text-deep-teal dark:text-fresh-aqua flex-shrink-0"></i>
                <span class="text-xs font-bold text-charcoal-text dark:text-white leading-tight">100% Code Permitted</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="award" class="w-5 h-5 text-deep-teal dark:text-fresh-aqua flex-shrink-0"></i>
                <span class="text-xs font-bold text-charcoal-text dark:text-white leading-tight">Guaranteed Upfront Price</span>
              </div>
            </div>

            <!-- CTAs -->
            <div class="flex flex-wrap items-center gap-4">
              <a href="#consultation-form" class="btn-primary text-sm py-3 px-6 shadow-md">
                <i data-lucide="calendar" class="w-4 h-4"></i> Schedule Consultation
              </a>
              <a href="tel:18005554689" class="btn-copper text-sm py-3 px-6 shadow-md">
                <i data-lucide="phone-call" class="w-4 h-4"></i> (800) 555-HOT-WATER
              </a>
            </div>
          </div>

          <!-- Hero Image: Matches 1:1 with listing card on Home 01! -->
          <div class="lg:col-span-5">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-theme-border dark:border-[#1C3E57] group">
              <img id="srv-hero-img" 
                   src="assets/images/services/tankless-installation-cover.jpg" 
                   alt="Tankless Water Heater Installation - Equipment Showcase" 
                   class="w-full h-80 sm:h-96 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" 
                   loading="eager">
              <div class="absolute inset-0 bg-gradient-to-t from-midnight-navy/70 via-transparent to-transparent pointer-events-none"></div>
              <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span class="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5">
                  <i data-lucide="shield-check" class="w-3.5 h-3.5 text-fresh-aqua"></i>
                  <span id="srv-hero-warranty">15-Year Warranty Protection</span>
                </span>
                <span class="bg-deep-teal/90 backdrop-blur-md px-3 py-1.5 rounded-full font-bold">
                  Verified Field Install
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 02: SERVICE OVERVIEW & TECHNICAL SCOPE (2/7)
         ========================================================================= -->
    <section class="py-16 lg:py-24 bg-white dark:bg-[#0B1E2E]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Part A: Overview & Second Unique Image -->
        <div class="grid lg:grid-cols-12 gap-10 items-start mb-16">
          <div class="lg:col-span-7 space-y-6">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-deep-teal dark:text-fresh-aqua block mb-2">Technical Standards</span>
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-text dark:text-white">
                Engineering Scope &amp; Comprehensive Overview
              </h2>
            </div>
            
            <p id="srv-full-desc" class="text-base sm:text-lg text-secondary-text dark:text-slate-300 leading-relaxed">
              Our master plumbers calculate your household's peak simultaneous Gallons Per Minute (GPM), properly size dedicated gas or electrical services, and configure direct concentric venting for whisper-quiet, continuous hot water.
            </p>

            <!-- Specs Grid (4 key technical parameters) -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-[#102B3F] border border-theme-border dark:border-[#1C3E57]">
              <div>
                <span class="text-[11px] uppercase tracking-wider font-bold text-secondary-text dark:text-slate-400 block mb-1">Efficiency Rating</span>
                <span id="srv-efficiency" class="text-base font-extrabold text-deep-teal dark:text-fresh-aqua block">Up to 0.96 UEF</span>
              </div>
              <div>
                <span class="text-[11px] uppercase tracking-wider font-bold text-secondary-text dark:text-slate-400 block mb-1">System Lifespan</span>
                <span id="srv-lifespan" class="text-base font-extrabold text-charcoal-text dark:text-white block">20+ Years</span>
              </div>
              <div>
                <span class="text-[11px] uppercase tracking-wider font-bold text-secondary-text dark:text-slate-400 block mb-1">Fuel / Power</span>
                <span id="srv-fuel" class="text-base font-extrabold text-charcoal-text dark:text-white block">Dedicated Line</span>
              </div>
              <div>
                <span class="text-[11px] uppercase tracking-wider font-bold text-secondary-text dark:text-slate-400 block mb-1">Protection</span>
                <span id="srv-warranty" class="text-base font-extrabold text-warm-copper block">15-Yr Warranty</span>
              </div>
            </div>
          </div>

          <!-- Dedicated Second Unique Image (Distinct from Hero Image!) -->
          <div class="lg:col-span-5">
            <div class="relative rounded-2xl overflow-hidden shadow-xl border border-theme-border dark:border-[#1C3E57] group">
              <img id="srv-detail-img" 
                   src="assets/images/services/tankless-installation-detail.jpg" 
                   alt="Technical equipment close-up and code-compliant utility connections" 
                   class="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700" 
                   loading="lazy">
              <div class="absolute bottom-4 left-4 bg-midnight-navy/85 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white font-medium">
                Code-Compliant Connections &amp; Isolation Kit
              </div>
            </div>
          </div>
        </div>

        <!-- Part B: When Needed vs What's Included -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <!-- When Needed -->
          <div class="card-theme p-6 sm:p-8 rounded-2xl border border-theme-border dark:border-[#1C3E57]">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                <i data-lucide="help-circle" class="w-5 h-5"></i>
              </div>
              <h3 class="text-xl font-bold text-charcoal-text dark:text-white">When You Need This Service</h3>
            </div>
            <ul id="srv-when-needed-list" class="space-y-3">
              <!-- Dynamically populated -->
            </ul>
          </div>

          <!-- What's Included -->
          <div class="card-theme p-6 sm:p-8 rounded-2xl border border-theme-border dark:border-[#1C3E57]">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                <i data-lucide="check-circle-2" class="w-5 h-5"></i>
              </div>
              <h3 class="text-xl font-bold text-charcoal-text dark:text-white">What Is Included in Every Job</h3>
            </div>
            <ul id="srv-what-included-list" class="space-y-3">
              <!-- Dynamically populated -->
            </ul>
          </div>
        </div>

        <!-- Part C: Deep Technical Insights (How It Works, Assessment, Homeowner Considerations) -->
        <div class="grid lg:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl bg-slate-50 dark:bg-[#102B3F] border border-theme-border dark:border-[#1C3E57]">
            <div class="flex items-center gap-2 mb-3 text-deep-teal dark:text-fresh-aqua font-bold text-sm">
              <i data-lucide="cogs" class="w-4 h-4"></i>
              <span>How The System Works</span>
            </div>
            <p id="srv-how-it-works" class="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed mb-0">
              High-efficiency modulation burners ignite instantly when hot water is called for, warming continuous flow through dual stainless steel heat exchangers.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 dark:bg-[#102B3F] border border-theme-border dark:border-[#1C3E57]">
            <div class="flex items-center gap-2 mb-3 text-deep-teal dark:text-fresh-aqua font-bold text-sm">
              <i data-lucide="clipboard-check" class="w-4 h-4"></i>
              <span>Assessment &amp; Compliance</span>
            </div>
            <p id="srv-assessment" class="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed mb-0">
              We audit water pressure, winter groundwater temperatures, and household fixture demands to deliver a fixed-price estimate with zero change orders.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 dark:bg-[#102B3F] border border-theme-border dark:border-[#1C3E57]">
            <div class="flex items-center gap-2 mb-3 text-warm-copper font-bold text-sm">
              <i data-lucide="alert-circle" class="w-4 h-4"></i>
              <span>Homeowner Considerations</span>
            </div>
            <p id="srv-considerations" class="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed mb-0">
              Adequate fuel supply (BTU) and proper exterior venting clearances are vital. In hard water areas, an annual descaling flush protects the factory warranty.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- =========================================================================
         SECTION 03: KEY BENEFITS / SOLVED PROBLEMS (3/7)
         ========================================================================= -->
    <section class="py-16 lg:py-24 bg-slate-50 dark:bg-[#091D2C] border-t border-theme-border dark:border-[#1C3E57]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="text-xs font-bold uppercase tracking-wider text-deep-teal dark:text-fresh-aqua block mb-2">Performance Advantages</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-charcoal-text dark:text-white">
            Key Benefits &amp; Problems Solved
          </h2>
          <p class="text-base text-secondary-text dark:text-slate-300 mt-3 leading-relaxed">
            Engineered solutions designed to eliminate daily frustrations and deliver lasting hot water comfort.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" id="srv-benefits-container">
          <!-- Dynamically populated with 4 tailored feature panels -->
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 04: OUR 4-STEP PRECISION PROCESS (4/7)
         ========================================================================= -->
    <section class="py-16 lg:py-24 bg-white dark:bg-[#0B1E2E] border-t border-theme-border dark:border-[#1C3E57]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="text-xs font-bold uppercase tracking-wider text-deep-teal dark:text-fresh-aqua block mb-2">Execution Protocol</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-charcoal-text dark:text-white">
            Our 4-Step Precision Service Process
          </h2>
          <p class="text-base text-secondary-text dark:text-slate-300 mt-3 leading-relaxed">
            Every job follows strict engineering protocols to ensure code compliance, optimal efficiency, and long-term durability.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto" id="srv-process-container">
          <!-- Dynamically populated with 4 numbered workflow steps -->
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 05: TRANSPARENT PRICING & COST FACTORS (5/7)
         ========================================================================= -->
    <section class="py-16 lg:py-24 bg-slate-50 dark:bg-[#091D2C] border-t border-theme-border dark:border-[#1C3E57]">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-deep-teal dark:text-fresh-aqua block mb-2">Honest Upfront Estimates</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-charcoal-text dark:text-white">
            Transparent Pricing Guidance
          </h2>
          <p class="text-base text-secondary-text dark:text-slate-300 mt-2 leading-relaxed">
            We believe in 100% upfront pricing with zero surprises, hidden fees, or high-pressure upselling.
          </p>
        </div>

        <div class="card-theme p-8 lg:p-10 shadow-xl border-2 border-deep-teal/20 rounded-2xl bg-white dark:bg-[#102B3F]">
          <!-- Top Investment Summary -->
          <div class="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-theme-border dark:border-[#1C3E57] gap-6">
            <div>
              <span class="badge-tag badge-blue text-[11px] mb-2 inline-block">Estimated Investment Range</span>
              <h3 id="srv-price-range" class="text-2xl sm:text-3xl font-extrabold text-charcoal-text dark:text-white">
                ₹2,850 – ₹4,600 (Illustrative Range)
              </h3>
              <p class="text-xs text-secondary-text dark:text-slate-400 mt-1">
                Final pricing depends on gas supply line diameter, venting distance, and household peak GPM.
              </p>
            </div>
            <div class="text-left md:text-right">
              <span class="text-xs text-secondary-text dark:text-slate-400 uppercase tracking-wider font-bold block">Estimated Timeframe</span>
              <span id="srv-timeframe" class="text-xl font-extrabold text-deep-teal dark:text-fresh-aqua block mt-1">4 – 6 Hours</span>
            </div>
          </div>

          <!-- Two Lists: Cost Factors & What's Included -->
          <div class="grid md:grid-cols-2 gap-8 py-8 border-b border-theme-border dark:border-[#1C3E57]">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-charcoal-text dark:text-white mb-4 flex items-center gap-2">
                <i data-lucide="help-circle" class="w-4 h-4 text-deep-teal dark:text-fresh-aqua"></i>
                Key Pricing Variables:
              </h4>
              <ul class="space-y-3" id="srv-cost-factors-list">
                <!-- Dynamically populated -->
              </ul>
            </div>
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-charcoal-text dark:text-white mb-4 flex items-center gap-2">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-500"></i>
                Standard Inclusions:
              </h4>
              <ul class="space-y-3" id="srv-inclusions-list">
                <!-- Dynamically populated -->
              </ul>
            </div>
          </div>

          <!-- Guarantee Banner & CTA -->
          <div class="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p class="text-xs text-secondary-text dark:text-slate-400 mb-0 leading-relaxed max-w-lg">
              <strong class="text-charcoal-text dark:text-white">Firm Fixed-Price Quote Guarantee:</strong> Every AquaTherma technician provides a written, itemized quote in your home before turning a single wrench.
            </p>
            <a href="#consultation-form" class="btn-primary text-xs py-3 px-6 whitespace-nowrap self-start sm:self-auto shadow-md">
              Get Your Fixed Quote
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 06: SERVICE-SPECIFIC FAQS (6/7)
         ========================================================================= -->
    <section class="py-16 lg:py-24 bg-white dark:bg-[#0B1E2E] border-t border-theme-border dark:border-[#1C3E57]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-deep-teal dark:text-fresh-aqua block mb-2">Technical Guidance</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-charcoal-text dark:text-white">
            Frequently Asked Questions
          </h2>
          <p class="text-base text-secondary-text dark:text-slate-300 mt-2 leading-relaxed">
            Clear, authoritative answers to common questions about this service.
          </p>
        </div>

        <div class="space-y-4" id="srv-faq-container">
          <!-- Dynamically populated with 5 accessible accordion items -->
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 07: RELATED SERVICES & FAST APPOINTMENT BOOKING (7/7)
         ========================================================================= -->
    <section id="booking-section" class="py-16 lg:py-24 bg-slate-50 dark:bg-[#091D2C] border-t border-theme-border dark:border-[#1C3E57]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Part A: 3 Related Services -->
        <div class="mb-16">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-wider text-deep-teal dark:text-fresh-aqua block mb-2">Comprehensive Solutions</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-charcoal-text dark:text-white">
              Related Water Heating Services
            </h2>
            <p class="text-sm text-secondary-text dark:text-slate-300 mt-2">
              Discover complementary upgrades, emergency diagnostic services, and maintenance programs.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="srv-related-container">
            <!-- Dynamically populated with 3 related service cards -->
          </div>
        </div>

        <!-- Part B: Fast Appointment Booking Form Box -->
        <div id="consultation-form" class="scroll-mt-24 max-w-3xl mx-auto card-theme p-8 sm:p-12 shadow-2xl rounded-2xl border border-theme-border dark:border-[#1C3E57] bg-white dark:bg-[#102B3F]">
          <div class="text-center max-w-xl mx-auto mb-8">
            <span class="badge-tag badge-blue text-[11px] mb-2 inline-block">Direct Booking Dispatch</span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-charcoal-text dark:text-white">
              Request Service Consultation
            </h3>
            <p class="text-xs sm:text-sm text-secondary-text dark:text-slate-300 mt-2">
              Schedule an in-home assessment for <strong id="srv-booking-service-title" class="text-deep-teal dark:text-fresh-aqua">Tankless Installation</strong>. 
              Our service coordinators respond within 15 minutes during regular hours.
            </p>
          </div>

          <div id="demo-booking-status" class="mb-4"></div>

          <form id="standard-booking-form" class="space-y-4">
            <input type="hidden" name="serviceType" value="tankless-water-heater-installation">
            
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-charcoal-text dark:text-white uppercase tracking-wider mb-1">Full Name *</label>
                <input type="text" name="fullName" required placeholder="John Doe" class="input-theme">
              </div>
              <div>
                <label class="block text-xs font-bold text-charcoal-text dark:text-white uppercase tracking-wider mb-1">Email Address *</label>
                <input type="email" name="email" required placeholder="john@example.com" class="input-theme">
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-charcoal-text dark:text-white uppercase tracking-wider mb-1">Phone Number *</label>
                <input type="tel" name="phone" required placeholder="(555) 000-0000" class="input-theme">
              </div>
              <div>
                <label class="block text-xs font-bold text-charcoal-text dark:text-white uppercase tracking-wider mb-1">Preferred Date *</label>
                <input type="date" name="preferredDate" required class="input-theme">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-charcoal-text dark:text-white uppercase tracking-wider mb-1">Describe Your Current Water Heater / Need</label>
              <textarea name="message" rows="3" placeholder="E.g. Gas or electric, tank age, leak symptoms, or household flow requirements..." class="input-theme"></textarea>
            </div>

            <div class="flex items-start gap-2 pt-2">
              <input type="checkbox" name="consent" id="srv-consent" required class="mt-1 rounded text-deep-teal focus:ring-deep-teal">
              <label for="srv-consent" class="text-xs text-secondary-text dark:text-slate-400">
                I agree to be contacted by AquaTherma regarding this appointment request. (Demonstration frontend notice: no server data is transmitted).
              </label>
            </div>

            <div class="text-center pt-4">
              <button type="submit" class="btn-primary text-sm py-3.5 px-8 shadow-lg w-full sm:w-auto">
                Confirm Service Appointment Request
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  </main>`;

const mainStart = html.indexOf('<main>');
const mainEnd = html.indexOf('</main>') + '</main>'.length;

if (mainStart === -1 || mainEnd === -1) {
  console.error('Could not find <main> tags');
  process.exit(1);
}

html = html.substring(0, mainStart) + newMainContent + html.substring(mainEnd);
fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated service-detail.html with 7-section layout!');
