/**
 * AquaTherma - Accessible Frontend Form Validation & Interactive Sizing
 * Transparent Demo Feedback Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  initStandardForm();
  initEmergencyForm();
  initNewsletterForm();
  initSizingCalculator();
});

/**
 * 1. Standard Service Booking Form Validation
 */
function initStandardForm() {
  const form = document.getElementById('standard-booking-form');
  if (!form) return;
  initContactValidation(form, 'demo-booking-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors(form);

    const name = form.querySelector('[name="fullName"]');
    const email = form.querySelector('[name="email"]');
    const phone = form.querySelector('[name="phone"]');
    const service = form.querySelector('[name="serviceType"]');
    const date = form.querySelector('[name="preferredDate"]');
    const consent = form.querySelector('[name="consent"]');

    let isValid = true;

    if (name.value.trim().length < 3) {
      showError(name, 'Please enter your full name (at least 3 characters).');
      isValid = false;
    }

    if (!validateEmail(email.value)) {
      showError(email, 'Please enter a valid email address (e.g. name@domain.com).');
      isValid = false;
    }

    if (!validatePhone(phone.value)) {
      showError(phone, 'Please enter a valid phone number (at least 10 digits).');
      isValid = false;
    }

    if (!service.value) {
      showError(service, 'Please select the required water heating service.');
      isValid = false;
    }

    if (!date.value) {
      showError(date, 'Please choose a preferred service date.');
      isValid = false;
    }

    if (!consent.checked) {
      showError(consent, 'You must agree to the privacy and communication terms to proceed.');
      isValid = false;
    }

    if (isValid) {
      simulateSubmission(form, 'demo-booking-status');
    } else {
      form.querySelector('[aria-invalid="true"]').focus();
    }
  });
}

/**
 * 2. Emergency Request Form Validation
 */
function initEmergencyForm() {
  const form = document.getElementById('emergency-request-form');
  if (!form) return;
  initContactValidation(form, 'emergency-booking-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors(form);

    const name = form.querySelector('[name="emergencyName"]');
    const phone = form.querySelector('[name="emergencyPhone"]');
    const type = form.querySelector('[name="emergencyType"]');
    const address = form.querySelector('[name="serviceAddress"]');
    const description = form.querySelector('[name="problemDescription"]');

    let isValid = true;

    if (name.value.trim().length < 3) {
      showError(name, 'Please enter your full name (at least 3 characters).');
      isValid = false;
    }

    if (!validatePhone(phone.value)) {
      showError(phone, 'Please enter a valid phone number (at least 10 digits).');
      isValid = false;
    }

    if (!type.value) {
      showError(type, 'Please specify the nature of the emergency.');
      isValid = false;
    }

    if (!address.value.trim() || address.value.trim().length < 5) {
      showError(address, 'Please enter a valid service address.');
      isValid = false;
    }

    if (!description.value.trim() || description.value.trim().length < 10) {
      showError(description, 'Please describe the emergency symptom (e.g. active water leak, no hot water).');
      isValid = false;
    }

    if (isValid) {
      simulateSubmission(form, 'emergency-booking-status');
    } else {
      form.querySelector('[aria-invalid="true"]').focus();
    }
  });
}

/**
 * 3. Newsletter Subscription Form
 */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const feedback = form.querySelector('.newsletter-feedback') || form.nextElementSibling;
      
      if (!input || !validateEmail(input.value)) {
        if (input) input.classList.add('border-red-500');
        if (feedback) {
          feedback.textContent = 'Please enter a valid email address.';
          feedback.className = 'text-xs text-red-500 mt-2 block';
        }
        return;
      }

      input.classList.remove('border-red-500');
      const submitBtn = form.querySelector('button');
      if (submitBtn) submitBtn.disabled = true;

      setTimeout(() => {
        form.reset();
        if (submitBtn) submitBtn.disabled = false;
        if (feedback) {
          feedback.textContent = 'Newsletter subscription simulated';
          feedback.className = 'text-xs text-emerald-600 dark:text-emerald-400 mt-2 block';
        }
      }, 700);
    });
  });
}

/**
 * 4. Interactive Water Heater System Selector (Home 02 & Services)
 */
function initSizingCalculator() {
  const calcForm = document.getElementById('water-heater-calculator-form');
  const resultCard = document.getElementById('calculator-result-card');
  if (!calcForm || !resultCard) return;

  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const occupants = parseInt(calcForm.querySelector('[name="calcOccupants"]').value, 10);
    const bathrooms = parseFloat(calcForm.querySelector('[name="calcBathrooms"]').value);
    const fuel = calcForm.querySelector('[name="calcFuel"]').value;
    const priority = calcForm.querySelector('[name="calcPriority"]').value;

    let recommendation = {
      type: "Tankless High-Efficiency Gas",
      modelSize: "199,000 BTU / 9.8 GPM",
      reason: "Ideal for endless continuous supply and maximum energy savings.",
      estSavings: "Up to 30% monthly energy reduction",
      link: "service-detail.html?id=tankless-water-heater-installation"
    };

    if (fuel === 'electric') {
      if (priority === 'efficiency') {
        recommendation.type = "Hybrid Heat Pump Water Heater (65 Gallon)";
        recommendation.modelSize = "ENERGY STAR 3.75 UEF";
        recommendation.reason = "Cuts electric water heating consumption by up to 75% and qualifies for federal tax credits.";
        recommendation.link = "service-detail.html?id=electric-water-heater-services";
      } else {
        recommendation.type = "50-Gallon Dual-Element Electric Storage Tank";
        recommendation.modelSize = "4500W Incoloy Elements / 0.93 UEF";
        recommendation.reason = "Reliable, high-recovery performance with lower upfront installation investment.";
        recommendation.link = "service-detail.html?id=tank-water-heater-installation";
      }
    } else {
      if (priority === 'budget' || occupants <= 2) {
        recommendation.type = "50-Gallon High-Recovery Atmospheric Gas Tank";
        recommendation.modelSize = "40,000 BTU / 0.68 UEF";
        recommendation.reason = "Dependable standard replacement using existing chimney draft flue.";
        recommendation.link = "service-detail.html?id=tank-water-heater-installation";
      } else {
        recommendation.type = "Condensing Tankless Natural Gas System";
        recommendation.modelSize = (occupants >= 4 || bathrooms >= 2.5) ? "199,000 BTU / 9.8 GPM" : "160,000 BTU / 7.5 GPM";
        recommendation.reason = "Delivers simultaneous hot water for multiple fixtures without standby energy waste.";
        recommendation.link = "service-detail.html?id=tankless-water-heater-installation";
      }
    }

    document.getElementById('calc-res-type').textContent = recommendation.type;
    document.getElementById('calc-res-size').textContent = recommendation.modelSize;
    document.getElementById('calc-res-reason').textContent = recommendation.reason;
    document.getElementById('calc-res-savings').textContent = recommendation.estSavings || "High durability and warranty coverage";
    document.getElementById('calc-res-link').setAttribute('href', recommendation.link);

    resultCard.classList.remove('hidden');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/**
 * Validation Helpers
 */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[0-9]{10,}$/.test(phone);
}

function initContactValidation(form, statusElemId) {
  // Use the inline validation messages consistently for all required fields.
  form.noValidate = true;
  const statusBox = document.getElementById(statusElemId);
  form.addEventListener('submit', () => {
    if (statusBox) statusBox.textContent = '';
  });
  form.querySelectorAll('input[type="tel"]').forEach(field => {
    field.addEventListener('input', () => {
      const cursor = field.selectionStart;
      const digitsBeforeCursor = field.value.slice(0, cursor).replace(/[^0-9]/g, '').length;
      field.value = field.value.replace(/[^0-9]/g, '');
      if (cursor !== null) field.setSelectionRange(digitsBeforeCursor, digitsBeforeCursor);
    });
  });
}

function showError(field, message) {
  field.setAttribute('aria-invalid', 'true');
  field.classList.add('border-red-500', 'bg-red-50/50', 'dark:bg-red-950/20');
  let errElem = field.nextElementSibling;
  if (!errElem || !errElem.classList.contains('form-error-msg')) {
    errElem = document.createElement('p');
    errElem.className = 'form-error-msg text-xs text-red-500 mt-1 font-medium';
    field.parentNode.insertBefore(errElem, field.nextSibling);
  }
  errElem.textContent = message;
}

function clearErrors(form) {
  form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
  form.querySelectorAll('.border-red-500').forEach(el => {
    el.classList.remove('border-red-500', 'bg-red-50/50', 'dark:bg-red-950/20');
  });
  form.querySelectorAll('.form-error-msg').forEach(el => el.remove());
}

/**
 * Simulated Demo Submission with Honest Disclaimers
 */
function simulateSubmission(form, statusElemId) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;
  
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg> Processing Request...
  `;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
    form.reset();
    clearErrors(form);

    let statusBox = document.getElementById(statusElemId);
    if (!statusBox) {
      statusBox = document.createElement('div');
      statusBox.id = statusElemId;
      form.parentNode.insertBefore(statusBox, form);
    }

    statusBox.setAttribute('role', 'status');
    statusBox.setAttribute('aria-live', 'polite');
    statusBox.innerHTML = `
      <div class="p-4 mb-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200">
        <p class="font-bold text-sm">Form submitted successfully.</p>
      </div>
    `;

    statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 900);
}
