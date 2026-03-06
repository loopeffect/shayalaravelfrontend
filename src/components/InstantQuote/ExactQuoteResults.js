import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DUMMY_QUOTE = {
  planName: 'Growth Plan',
  monthlyTotal: 1250,
  costPerLead: 25,
};

function ExactQuoteResults() {
  const location = useLocation();
  const form = location.state?.form || {};

  const summaryRows = [
    { label: 'First name', value: form.first_name },
    { label: 'Last name', value: form.last_name },
    { label: 'Email', value: form.email },
    { label: 'Company', value: form.company },
    { label: 'Phone', value: form.phone },
    { label: 'Industry', value: form.industry },
    { label: 'Location', value: form.location },
    { label: 'Company size', value: form.company_size },
    { label: 'Job titles', value: form.job_titles },
    { label: 'Leads per month', value: form.leads_per_month },
    { label: 'Calls per month', value: form.calls_per_month },
  ];

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* 1. Form summary first */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Summary of your request
          </h2>
          <dl className="space-y-3">
            {summaryRows.map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-4 text-sm">
                <dt className="text-gray-500 font-medium">{label}</dt>
                <dd className="text-gray-900 text-right">{value || '—'}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 2. Your Instant Quote */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Your Instant Quote
        </h1>

        {/* Recommended Plan */}
        <section className="bg-white rounded-xl border border-teal-500 shadow-sm p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Recommended Plan
          </h2>
          <p className="text-xl font-bold text-gray-900">{DUMMY_QUOTE.planName}</p>
        </section>

        {/* Estimated Monthly Total */}
        <section className="bg-white rounded-xl border border-teal-500 shadow-sm p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Estimated Monthly Total
          </h2>
          <p className="text-3xl font-extrabold text-teal-600">
            {formatCurrency(DUMMY_QUOTE.monthlyTotal)} <span className="text-lg font-semibold text-gray-700">/ month</span>
          </p>
        </section>

        {/* Estimated Cost Per Lead */}
        <section className="bg-white rounded-xl border border-teal-500 shadow-sm p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Estimated Cost Per Lead ⓘ
          </h2>
          <p className="text-xl font-semibold text-gray-900">{formatCurrency(DUMMY_QUOTE.costPerLead)}</p>
        </section>

        {/* How Your Instant Quote Is Calculated */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            How Your Instant Quote Is Calculated
          </h2>
          <p className="text-gray-700 text-base mb-4">
            Every business is different. Your Instant Quote is based on practical factors like buyer
            location, industry requirements, compliance region, and call complexity.
          </p>
          <p className="text-gray-700 text-base mb-4">
            Some regions and industries require additional validation steps, data checks, and routing
            configuration, which affect the total operational effort.
          </p>
          <p className="text-gray-700 text-base mb-4">
            We also apply built-in price floors to maintain lead quality and sustainable delivery
            standards.
          </p>
          <p className="text-gray-700 text-base">
            The result is a transparent quote based on real implementation effort — not a
            one-size-fits-all estimate.
          </p>
        </section>

        {/* Structured Implementation Program */}
        <section className="bg-[#e6f7f9] border-l-4 border-teal-500 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Structured Implementation Program
          </h2>
          <p className="text-gray-700 text-base mb-4">
            Your quoted plan reflects full standard pricing.
          </p>
          <p className="text-gray-700 text-base mb-4">
            All new MSP partners enter through a structured 90-day implementation phase to ensure
            precision targeting, automation calibration, and call routing optimization.
          </p>
          <p className="text-gray-700 text-base mb-4 font-medium">
            Implementation Rate: 35% reduction from the quoted monthly total for the selected plan
            <br />
            <span className="text-sm font-normal">(Valid for the first 3 months from activation)</span>
          </p>
          <p className="text-gray-700 text-base">
            After the 90-day implementation phase, standard plan pricing applies.
          </p>
        </section>

        {/* Primary CTA – link to in-app scheduling calendar */}
        <div className="text-center">
          <Link
            to="/schedule-activation"
            className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors duration-200"
          >
            <span>Schedule Your Activation Call</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <p className="text-center mt-6">
          <Link to="/instant-quote" className="text-teal-600 hover:text-teal-700 font-medium">
            ← Back to Instant Quote
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ExactQuoteResults;
