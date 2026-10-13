/**
 * AquaTherma - Dynamic Detail Page Loader
 * Powers service-detail.html, project-detail.html, and blog-detail.html
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof AQUA_DATA === 'undefined') return;

  const pageType = document.body.dataset.page;
  const path = window.location.pathname.toLowerCase();
  if (pageType === 'service-detail' || path.includes('service-detail')) {
    renderServiceDetail();
  } else if (pageType === 'project-detail' || path.includes('project-detail')) {
    renderProjectDetail();
  } else if (pageType === 'blog-detail' || path.includes('blog-detail')) {
    renderBlogDetail();
  }
});

/**
 * Helper to get URL query parameter
 */
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

/**
 * 1. Render Service Detail Page (Strictly 7 major sections)
 */
function renderServiceDetail() {
  const idParam = getQueryParam('id') || 'tankless-water-heater-installation';
  
  // Clean alias mapping for friendly links & fallback (allows legacy or shorthand query strings)
  const aliasMap = {
    'water-heater-flushing-descaling': 'water-heater-flushing-maintenance',
    'water-heater-maintenance-flushing': 'water-heater-flushing-maintenance',
    'no-hot-water-diagnostics': 'no-hot-water-troubleshooting',
    'gas-water-heater-services': 'gas-water-heater-installation',
    'electric-water-heater-services': 'electric-water-heater-installation',
    'thermostat-repair': 'thermostat-heating-element-repair',
    'heating-element-repair': 'thermostat-heating-element-repair',
    'pilot-ignition-repair': 'pilot-light-ignition-repair',
    'preventative-water-heater-maintenance': 'preventive-water-heater-maintenance'
  };
  const lookupId = aliasMap[idParam] || idParam;
  const service = AQUA_DATA.services.find(s => s.id === lookupId || s.slug === lookupId) || 
                  AQUA_DATA.services.find(s => s.id === idParam || s.slug === idParam) || 
                  AQUA_DATA.services[0];

  document.title = `${service.title} | AquaTherma Heating Specialists`;

  // ==========================================
  // SECTION 01: HERO
  // ==========================================
  const titleEl = document.getElementById('srv-title');
  if (titleEl) titleEl.textContent = service.title;
  const badgeEl = document.getElementById('srv-badge');
  if (badgeEl) badgeEl.textContent = service.badge || service.category;
  const shortDescEl = document.getElementById('srv-short-desc');
  if (shortDescEl) shortDescEl.textContent = service.shortDesc;
  const heroImgEl = document.getElementById('srv-hero-img');
  if (heroImgEl) {
    heroImgEl.src = service.coverImage;
    heroImgEl.alt = `${service.title} - Professional Installation`;
  }
  const heroWarrantyEl = document.getElementById('srv-hero-warranty');
  if (heroWarrantyEl) heroWarrantyEl.textContent = service.warranty || "Comprehensive Warranty";
  const heroEfficiencyEl = document.getElementById('srv-hero-efficiency');
  if (heroEfficiencyEl) heroEfficiencyEl.textContent = service.efficiency || "High-Efficiency Certified";

  // ==========================================
  // SECTION 02: OVERVIEW & SPECS (Second unique image)
  // ==========================================
  const fullDescEl = document.getElementById('srv-full-desc');
  if (fullDescEl) fullDescEl.textContent = service.fullDesc;
  
  const detailImgEl = document.getElementById('srv-detail-img');
  if (detailImgEl) {
    detailImgEl.src = service.detailImage;
    detailImgEl.alt = `${service.title} - Precision Technical View`;
  }

  const efficiencyEl = document.getElementById('srv-efficiency');
  if (efficiencyEl) efficiencyEl.textContent = service.efficiency || "Up to 0.96 UEF";
  const lifespanEl = document.getElementById('srv-lifespan');
  if (lifespanEl) lifespanEl.textContent = service.lifespan || "15–20 Years";
  const fuelEl = document.getElementById('srv-fuel');
  if (fuelEl) fuelEl.textContent = service.fuelRequirements || "Natural Gas, LP or 240V Electric";
  const warrantyEl = document.getElementById('srv-warranty');
  if (warrantyEl) warrantyEl.textContent = service.warranty || "10-Yr Tank / 1-Yr Workmanship";

  const howItWorksEl = document.getElementById('srv-how-it-works');
  if (howItWorksEl && service.howItWorks) howItWorksEl.textContent = service.howItWorks;
  const assessmentEl = document.getElementById('srv-assessment');
  if (assessmentEl && service.assessmentDetails) assessmentEl.textContent = service.assessmentDetails;
  const considerationsEl = document.getElementById('srv-considerations');
  if (considerationsEl && service.homeownerConsiderations) considerationsEl.textContent = service.homeownerConsiderations;

  // When Needed list
  const whenNeededList = document.getElementById('srv-when-needed-list');
  if (whenNeededList && service.whenNeeded) {
    whenNeededList.innerHTML = service.whenNeeded.map(item => `
      <li class="flex items-start gap-3 text-sm text-secondary-text dark:text-slate-300">
        <i data-lucide="check-circle" class="w-4 h-4 text-deep-teal dark:text-fresh-aqua flex-shrink-0 mt-0.5"></i>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // What's Included list
  const whatIncludedList = document.getElementById('srv-what-included-list');
  if (whatIncludedList && service.whatIncluded) {
    whatIncludedList.innerHTML = service.whatIncluded.map(item => `
      <li class="flex items-start gap-3 text-sm text-secondary-text dark:text-slate-300">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"></i>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // ==========================================
  // SECTION 03: KEY BENEFITS / PROBLEMS SOLVED (4 Panels)
  // ==========================================
  const benefitsContainer = document.getElementById('srv-benefits-container') || document.getElementById('srv-problems-container');
  const benefitsData = service.benefitsOrIssues || service.problemsSolved || [];
  if (benefitsContainer && benefitsData.length > 0) {
    benefitsContainer.innerHTML = benefitsData.map(b => `
      <div class="card-theme service-benefit-card p-6 sm:p-7 group hover:border-deep-teal dark:hover:border-fresh-aqua transition-all">
        <div class="w-12 h-12 rounded-xl bg-deep-teal/10 dark:bg-deep-teal/20 text-deep-teal dark:text-fresh-aqua flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
          <i data-lucide="${b.icon || 'shield-check'}" class="w-6 h-6"></i>
        </div>
        <h4 class="text-lg font-bold text-charcoal-text dark:text-white mb-2">${b.title}</h4>
        <p class="text-sm text-secondary-text dark:text-slate-300 mb-0 leading-relaxed">${b.desc}</p>
      </div>
    `).join('');
  }

  // ==========================================
  // SECTION 04: 4-STEP PRECISION PROCESS
  // ==========================================
  const processContainer = document.getElementById('srv-process-container');
  if (processContainer && service.processSteps) {
    processContainer.innerHTML = service.processSteps.map((st, i) => `
      <div class="relative flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl bg-white dark:bg-[#102B3F] border border-theme-border dark:border-[#1C3E57] shadow-sm hover:shadow-md transition-shadow">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-deep-teal to-fresh-aqua text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-md">
          0${st.step || (i + 1)}
        </div>
        <div class="flex-1">
          <span class="text-[11px] uppercase tracking-wider font-bold text-deep-teal dark:text-fresh-aqua block mb-1">Phase 0${st.step || (i + 1)}</span>
          <h4 class="text-lg font-bold text-charcoal-text dark:text-white mb-2">${st.title}</h4>
          <p class="text-sm text-secondary-text dark:text-slate-300 leading-relaxed mb-0">${st.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // SECTION 05: PRICING GUIDANCE & COST FACTORS
  // ==========================================
  const priceRangeEl = document.getElementById('srv-price-range');
  if (priceRangeEl && service.pricingGuidance) priceRangeEl.textContent = service.pricingGuidance.estimateRange;
  const timeframeEl = document.getElementById('srv-timeframe');
  if (timeframeEl && service.pricingGuidance) timeframeEl.textContent = service.pricingGuidance.timeframe;

  const costFactorsList = document.getElementById('srv-cost-factors-list');
  if (costFactorsList && service.pricingGuidance && service.pricingGuidance.costFactors) {
    costFactorsList.innerHTML = service.pricingGuidance.costFactors.map(factor => `
      <li class="flex items-start gap-3 text-sm text-secondary-text dark:text-slate-300">
        <i data-lucide="info" class="w-4 h-4 text-deep-teal dark:text-fresh-aqua flex-shrink-0 mt-0.5"></i>
        <span>${factor}</span>
      </li>
    `).join('');
  }

  const inclusionsList = document.getElementById('srv-inclusions-list');
  if (inclusionsList && service.pricingGuidance && service.pricingGuidance.inclusions) {
    inclusionsList.innerHTML = service.pricingGuidance.inclusions.map(inc => `
      <li class="flex items-start gap-3 text-sm text-secondary-text dark:text-slate-300">
        <i data-lucide="check" class="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"></i>
        <span>${inc}</span>
      </li>
    `).join('');
  }

  // ==========================================
  // SECTION 06: FAQS (5 Items with accordion toggle)
  // ==========================================
  const faqContainer = document.getElementById('srv-faq-container');
  if (faqContainer && service.faqs) {
    faqContainer.innerHTML = service.faqs.map((faq, i) => `
      <div class="accordion-item ${i === 0 ? 'active' : ''}">
        <button class="accordion-header" type="button" aria-expanded="${i === 0 ? 'true' : 'false'}">
          <span>${faq.q}</span>
          <i data-lucide="chevron-down" class="accordion-icon w-5 h-5"></i>
        </button>
        <div class="accordion-content">
          <p class="text-sm text-secondary-text dark:text-slate-300 leading-relaxed mb-0">${faq.a}</p>
        </div>
      </div>
    `).join('');

    // Wire up accordion click events directly for instant reactivity
    faqContainer.querySelectorAll('.accordion-header').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.accordion-item');
        const isActive = item.classList.contains('active');
        faqContainer.querySelectorAll('.accordion-item').forEach(other => other.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
  }

  // ==========================================
  // SECTION 07: RELATED SERVICES & BOOKING FORM
  // ==========================================
  const relatedContainer = document.getElementById('srv-related-container');
  if (relatedContainer) {
    let relatedList = [];
    if (service.relatedServiceIds && service.relatedServiceIds.length > 0) {
      relatedList = service.relatedServiceIds
        .map(relId => AQUA_DATA.services.find(s => s.id === relId))
        .filter(Boolean);
    }
    if (relatedList.length < 3) {
      const fallbacks = AQUA_DATA.services
        .filter(s => s.id !== service.id && !relatedList.some(r => r.id === s.id));
      relatedList = [...relatedList, ...fallbacks].slice(0, 3);
    }
    relatedContainer.innerHTML = relatedList.map(rel => `
      <div class="card-theme group flex flex-col justify-between">
        <div class="h-48 overflow-hidden relative">
          <img src="${rel.coverImage}" alt="${rel.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <span class="absolute top-3 left-3 badge-tag badge-blue bg-white/90 dark:bg-slate-900/90 text-xs">${rel.badge || rel.category}</span>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h4 class="font-bold text-base text-charcoal-text dark:text-white mb-2 group-hover:text-deep-teal dark:group-hover:text-fresh-aqua transition-colors">${rel.title}</h4>
            <p class="text-xs text-secondary-text dark:text-slate-300 mb-4 line-clamp-2 leading-relaxed">${rel.shortDesc}</p>
          </div>
          <a href="service-detail.html?id=${rel.id}" class="text-xs font-bold text-deep-teal dark:text-fresh-aqua hover:underline inline-flex items-center gap-1.5">
            View Service Details <i data-lucide="arrow-right" class="w-3.5 h-3.5 rtl-mirror"></i>
          </a>
        </div>
      </div>
    `).join('');
  }

  // Pre-fill booking form service type if present
  const serviceInput = document.querySelector('[name="serviceType"]');
  if (serviceInput) serviceInput.value = service.id;
  const bookingServiceName = document.getElementById('srv-booking-service-title');
  if (bookingServiceName) bookingServiceName.textContent = service.title;

  if (window.lucide) window.lucide.createIcons();
}

/**
 * 2. Render Project Detail Page (Strictly 7 major sections)
 */
function renderProjectDetail() {
  const rawId = getQueryParam('id') || 'whole-home-tankless-upgrade';
  const aliasMap = {
    'residential-tankless-conversion': 'whole-home-tankless-upgrade',
    'commercial-cascading-tankless-array': 'compact-tankless-townhome-installation',
    'severe-leak-emergency-remediation': 'emergency-leak-repair-shutoff',
    'emergency-sunday-tank-replacement': 'no-hot-water-emergency-restoration',
    'hybrid-heat-pump-retrofit': 'high-efficiency-water-heater-upgrade',
    'smart-recirculation-pump-retrofit': 'recirculation-performance-upgrade',
    'power-vent-gas-installation': '50-gallon-gas-water-heater-installation',
    'electric-replacement-expansion-tank': 'electric-storage-water-heater-replacement',
    'comprehensive-descaling-restoration': 'annual-water-heater-maintenance-descaling'
  };

  const id = aliasMap[rawId] || rawId;
  const project = AQUA_DATA.projects.find(p => p.id === id || p.slug === id || p.aliases?.includes(rawId) || p.aliases?.includes(id)) || AQUA_DATA.projects[0];

  document.title = `${project.title} | AquaTherma Case Study`;

  // Section 1: Hero
  const titleEl = document.getElementById('proj-title');
  if (titleEl) titleEl.textContent = project.title;

  const categoryEl = document.getElementById('proj-category');
  if (categoryEl) categoryEl.textContent = project.categoryLabel || project.category;

  const heroDescEl = document.getElementById('proj-hero-desc');
  if (heroDescEl) heroDescEl.textContent = project.summary || project.challenge;

  const locationEl = document.getElementById('proj-location');
  if (locationEl) locationEl.innerHTML = `<i data-lucide="map-pin" class="w-3.5 h-3.5 text-deep-teal dark:text-fresh-aqua"></i> ${project.location}`;

  const durationEl = document.getElementById('proj-duration');
  if (durationEl) durationEl.innerHTML = `<i data-lucide="clock" class="w-3.5 h-3.5 text-deep-teal dark:text-fresh-aqua"></i> ${project.duration}`;

  const clientEl = document.getElementById('proj-client');
  if (clientEl) clientEl.innerHTML = `<i data-lucide="check-circle" class="w-3.5 h-3.5"></i> ${project.clientName || 'Verified Homeowner'}`;

  // Matching hero cover image (1:1 match with card image)
  const heroImageEl = document.getElementById('proj-hero-image');
  if (heroImageEl) {
    heroImageEl.src = project.coverImage || project.detailHeroImage;
    heroImageEl.alt = `${project.title} - Primary Installation View`;
  }

  // Section 2: Overview & Specs Matrix
  const overviewTextEl = document.getElementById('proj-overview-text');
  if (overviewTextEl) overviewTextEl.textContent = project.overview || project.summary;

  // Second unique detail image in Section 2
  const detailImageEl = document.getElementById('proj-detail-image');
  if (detailImageEl) {
    detailImageEl.src = project.detailImage || project.detailImages?.[1] || project.coverImage;
    detailImageEl.alt = `${project.title} - Technical Inspection Detail`;
  }

  const specsGrid = document.getElementById('proj-specs-grid');
  if (specsGrid && project.specs) {
    specsGrid.innerHTML = Object.entries(project.specs).map(([key, val]) => `
      <div class="min-w-0 p-6 rounded-2xl bg-warm-offwhite dark:bg-[#102B3F] border border-theme-border dark:border-[#1C3E57]">
        <dt class="text-xs uppercase tracking-wider text-secondary-text dark:text-slate-300 font-bold mb-3">${formatCamelCase(key)}</dt>
        <dd class="text-base font-semibold text-charcoal-text dark:text-white leading-relaxed break-words">${val}</dd>
      </div>
    `).join('');
  }

  // Section 3: Initial Problem & Diagnostic Findings
  const challengeEl = document.getElementById('proj-challenge');
  if (challengeEl) challengeEl.textContent = project.problemAssessment || project.challenge;

  const diagPointsContainer = document.getElementById('proj-diagnostic-points');
  if (diagPointsContainer) {
    const findings = [
      `Diagnostic assessment confirmed critical performance degradation requiring professional intervention.`,
      `Existing equipment failed to meet household hot water demand and energy efficiency baselines.`,
      `Safety hazard inspection identified physical wear and potential failure points.`,
      `Complete engineering upgrade recommended to protect home value and prevent water damage.`
    ];
    diagPointsContainer.innerHTML = findings.map(f => `
      <div class="flex items-start gap-2.5 p-3 rounded-lg bg-white dark:bg-[#102B3F] border border-theme-border dark:border-[#1C3E57] text-secondary-text dark:text-slate-300">
        <i data-lucide="check-circle-2" class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5"></i>
        <span class="leading-relaxed">${f}</span>
      </div>
    `).join('');
  }

  // Section 4: Solution & Work Performed
  const solutionEl = document.getElementById('proj-solution');
  if (solutionEl) solutionEl.textContent = project.solution;

  const workStepsContainer = document.getElementById('proj-work-steps');
  if (workStepsContainer) {
    const steps = project.workPerformed
      ? project.workPerformed.split(';').map(s => s.trim()).filter(Boolean)
      : [
          'Decommissioning of legacy equipment and eco-safe transport',
          'Mechanical pipe headers and code-compliant valve install',
          'Pressure testing, gas/electrical line verification',
          'Dynamic multi-fixture temperature balance and commissioning'
        ];
    workStepsContainer.innerHTML = steps.map((s, idx) => `
      <div class="flex items-start gap-2.5 p-3 rounded-lg bg-warm-offwhite dark:bg-[#102B3F] border border-theme-border dark:border-[#1C3E57] text-secondary-text dark:text-slate-300">
        <span class="w-5 h-5 rounded-full bg-deep-teal/10 dark:bg-deep-teal/30 text-deep-teal dark:text-fresh-aqua font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">0${idx + 1}</span>
        <span class="leading-relaxed">${s}</span>
      </div>
    `).join('');
  }

  // Section 5: Outcome & Verified Quote
  const outcomeEl = document.getElementById('proj-outcome');
  if (outcomeEl) outcomeEl.textContent = project.outcome;

  const quoteEl = document.getElementById('proj-quote');
  if (quoteEl) quoteEl.textContent = `"${project.homeownerQuote}"`;

  const clientNameEl = document.getElementById('proj-client-name');
  if (clientNameEl) {
    clientNameEl.innerHTML = `<i data-lucide="user-check" class="w-4 h-4 text-fresh-aqua"></i> ${project.clientName || 'Verified Homeowner'}`;
  }

  // Section 6: Related Projects
  const relatedGrid = document.getElementById('proj-related-grid');
  if (relatedGrid) {
    let related = [];
    if (project.relatedProjectIds && project.relatedProjectIds.length > 0) {
      related = project.relatedProjectIds
        .map(relId => AQUA_DATA.projects.find(p => p.id === relId || p.slug === relId))
        .filter(Boolean);
    }
    if (related.length < 2) {
      const fallback = AQUA_DATA.projects.filter(p => p.id !== project.id && !related.includes(p));
      related = [...related, ...fallback].slice(0, 2);
    }
    relatedGrid.innerHTML = related.slice(0, 2).map(rp => `
      <div class="card-theme group flex flex-col justify-between">
        <div>
          <div class="h-48 overflow-hidden relative">
            <img src="${rp.coverImage}" alt="${rp.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute top-3 inset-x-3 flex">
              <span class="badge-tag project-image-badge">${rp.categoryLabel || rp.category}</span>
            </div>
          </div>
          <div class="p-6">
            <span class="text-xs text-secondary-text dark:text-slate-400 font-medium flex items-center gap-1 mb-2">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-deep-teal dark:text-fresh-aqua"></i> ${rp.location}
            </span>
            <h4 class="font-bold text-base text-charcoal-text dark:text-white mb-2 leading-snug">${rp.title}</h4>
            <p class="text-xs text-secondary-text dark:text-slate-300 mb-0 line-clamp-2 leading-relaxed">${rp.summary || rp.challenge}</p>
          </div>
        </div>
        <div class="px-6 pb-6 pt-3 border-t border-theme-border dark:border-[#213A5C] flex items-center justify-between">
          <a href="project-detail.html?id=${rp.id}" class="text-xs font-bold text-deep-teal dark:text-fresh-aqua hover:underline inline-flex items-center gap-1">
            View Case Study <i data-lucide="arrow-right" class="w-3.5 h-3.5 rtl-mirror"></i>
          </a>
          <span class="text-[11px] text-secondary-text dark:text-slate-400 font-medium">${rp.duration}</span>
        </div>
      </div>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

/**
 * 3. Render Blog Detail Page (Strictly 7 major sections)
 */
function renderBlogDetail() {
  const id = getQueryParam('id') || 'tank-vs-tankless-water-heaters';
  const article = AQUA_DATA.blogs.find(b => b.id === id) || AQUA_DATA.blogs[0];

  document.title = `${article.title} | AquaTherma Knowledge Hub`;

  // Section 1: Article Hero
  const titleEl = document.getElementById('blog-title');
  if (titleEl) titleEl.textContent = article.title;
  const categoryEl = document.getElementById('blog-category');
  if (categoryEl) categoryEl.textContent = article.category;
  const authorEl = document.getElementById('blog-author');
  if (authorEl) authorEl.textContent = article.author;
  const authorRoleEl = document.getElementById('blog-author-role');
  if (authorRoleEl) authorRoleEl.textContent = article.authorRole || 'Certified Technician';
  const dateEl = document.getElementById('blog-date');
  if (dateEl) dateEl.textContent = article.date;
  const readTimeEl = document.getElementById('blog-readtime');
  if (readTimeEl) readTimeEl.textContent = article.readTime;

  // Hero Cover Image (1:1 identical match to card cover)
  const imageEl = document.getElementById('blog-featured-image');
  if (imageEl) {
    imageEl.src = article.coverImage;
    imageEl.alt = article.title;
  }

  // Section 2: Executive Summary & Overview
  const excerptEl = document.getElementById('blog-excerpt');
  if (excerptEl) excerptEl.textContent = article.summary || article.excerpt;

  // Section 3: Main Article Content & Second Inline Photographic Asset
  const contentEl = document.getElementById('blog-content-body');
  if (contentEl) contentEl.innerHTML = article.content;

  const inlineImgEl = document.getElementById('blog-inline-image');
  if (inlineImgEl) {
    inlineImgEl.src = article.inlineImage;
    inlineImgEl.alt = article.inlineCaption || article.title;
  }
  const inlineCaptionEl = document.getElementById('blog-inline-caption-text');
  if (inlineCaptionEl) {
    inlineCaptionEl.textContent = article.inlineCaption || 'Detailed technician field documentation.';
  }

  // Section 4: Key Takeaways Checklist
  const takeawaysList = document.getElementById('blog-takeaways-list');
  if (takeawaysList && article.keyTakeaways) {
    takeawaysList.innerHTML = article.keyTakeaways.map(t => `
      <li class="flex items-start gap-3 text-sm text-secondary-text dark:text-slate-300">
        <i data-lucide="check-circle" class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"></i>
        <span>${t}</span>
      </li>
    `).join('');
  }

  // Section 5: Troubleshooting FAQ & Safety Guidance
  const faqsContainer = document.getElementById('blog-faqs-container');
  if (faqsContainer && article.faqs) {
    faqsContainer.innerHTML = article.faqs.map(faq => `
      <div class="border border-theme-border dark:border-[#213A5C] rounded-xl p-4 sm:p-5 bg-white dark:bg-[#112338]">
        <h4 class="font-bold text-sm sm:text-base text-main-text dark:text-white mb-2 flex items-start gap-2">
          <span class="text-deep-teal dark:text-fresh-aqua font-extrabold">Q:</span>
          <span>${faq.question}</span>
        </h4>
        <p class="text-xs sm:text-sm text-secondary-text dark:text-slate-300 leading-relaxed ps-5 border-l-2 border-deep-teal/30 dark:border-fresh-aqua/30">
          ${faq.answer}
        </p>
      </div>
    `).join('');
  }

  // Sidebar Widget 3: Popular Guides / Quick Reads
  const sidebarRecent = document.getElementById('blog-sidebar-recent');
  if (sidebarRecent) {
    const recent = AQUA_DATA.blogs.filter(b => b.id !== article.id).slice(0, 3);
    sidebarRecent.innerHTML = recent.map(rb => `
      <a href="blog-detail.html?id=${rb.id}" class="flex items-center gap-3 group p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#16364E] transition-colors">
        <img src="${rb.coverImage}" alt="${rb.title}" class="w-14 h-14 object-cover rounded-lg flex-shrink-0 border border-theme-border dark:border-slate-700" loading="lazy" />
        <div class="min-w-0">
          <h5 class="text-xs font-bold text-main-text dark:text-white group-hover:text-deep-teal dark:group-hover:text-fresh-aqua line-clamp-2 leading-snug">${rb.title}</h5>
          <span class="text-[11px] text-secondary-text dark:text-slate-400 mt-0.5 block">${rb.readTime} • ${rb.category}</span>
        </div>
      </a>
    `).join('');
  }

  // Section 6: Related Educational Guides Grid (3 curated cards)
  const relatedGrid = document.getElementById('blog-related-grid');
  if (relatedGrid) {
    let related = [];
    if (article.relatedBlogIds && article.relatedBlogIds.length) {
      related = article.relatedBlogIds
        .map(rId => AQUA_DATA.blogs.find(b => b.id === rId))
        .filter(Boolean);
    }
    if (related.length < 3) {
      const others = AQUA_DATA.blogs.filter(b => b.id !== article.id && !related.some(r => r.id === b.id));
      related = related.concat(others).slice(0, 3);
    }

    relatedGrid.innerHTML = related.map(rb => `
      <article class="card-theme group flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <div>
          <div class="aspect-video w-full overflow-hidden relative bg-slate-200 dark:bg-slate-800">
            <img src="${rb.coverImage}" alt="${rb.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute top-3 inset-x-3 flex justify-between items-start pointer-events-none">
              <span class="badge-tag article-image-badge shadow-sm">${rb.category}</span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-2 text-[11px] text-secondary-text dark:text-slate-400 mb-2">
              <span>${rb.date}</span>
              <span>•</span>
              <span>${rb.readTime}</span>
            </div>
            <h4 class="font-bold text-base mb-2 line-clamp-2 group-hover:text-deep-teal dark:group-hover:text-fresh-aqua transition-colors">
              <a href="blog-detail.html?id=${rb.id}">${rb.title}</a>
            </h4>
            <p class="text-xs text-secondary-text dark:text-slate-300 line-clamp-2 leading-relaxed">${rb.excerpt}</p>
          </div>
        </div>
        <div class="px-6 pb-6 pt-3 border-t border-theme-border dark:border-[#213A5C] flex items-center justify-between">
          <a href="blog-detail.html?id=${rb.id}" class="text-xs font-bold text-deep-teal dark:text-fresh-aqua hover:underline inline-flex items-center gap-1">
            Read Guide <i data-lucide="arrow-right" class="w-3.5 h-3.5 rtl-mirror"></i>
          </a>
          <span class="text-[11px] text-secondary-text dark:text-slate-400 font-medium">${rb.author.split(',')[0]}</span>
        </div>
      </article>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

function formatCamelCase(str) {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
}
