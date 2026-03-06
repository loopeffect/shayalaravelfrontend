import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InstantQuote() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    location: '',
    company_size: '',
    job_titles: '',
    leads_per_month: '',
    calls_per_month: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [quoteResult, setQuoteResult] = useState(null);
  const [accepting, setAccepting] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/exact-quote-results', { state: { form } });
  };

  const handleAcceptQuote = async () => {
    if (!quoteResult?.id || accepted) return true;

    setError('');
    setAccepting(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/quotes/${quoteResult.id}/accept`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data?.message || 'Something went wrong while accepting your quote.'
        );
        setAccepting(false);
        return false;
      }

      setAccepted(true);
    } catch (err) {
      setError('Unable to reach the server while accepting your quote.');
    } finally {
      setAccepting(false);
    }

    return true;
  };

  const handleScheduleActivation = () => {
    // Directly open the phone dialer on supported devices
    window.location.href = 'tel:+15555550123';
  };

  const formatCurrency = (amount, currency = 'USD') => {
    if (typeof amount !== 'number') return '';
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        maximumFractionDigits: 0,
      }).format(amount);
    } catch {
      return `${currency} ${amount.toFixed(0)}`;
    }
  };

  const displayPlanName = () => {
    if (quoteResult?.plan_name) return quoteResult.plan_name;
    const leads = parseInt(form.leads_per_month, 10);
    if (!Number.isFinite(leads) || leads <= 0) return 'Custom Plan';
    if (leads <= 50) return 'Starter Plan';
    if (leads <= 150) return 'Growth Plan';
    if (leads <= 300) return 'Scale Plan';
    return 'Enterprise Plan';
  };

  const displayCostPerLead = () => {
    if (quoteResult?.cost_per_lead != null && Number.isFinite(Number(quoteResult.cost_per_lead))) {
      return Number(quoteResult.cost_per_lead);
    }
    if (!quoteResult) return null;
    const total = Number(quoteResult.total_price);
    const leads = parseInt(form.leads_per_month, 10);
    if (!Number.isFinite(total) || !Number.isFinite(leads) || leads <= 0) return null;
    return total / leads;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-29 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-teal-500 font-semibold text-sm tracking-wide mb-3">
            GET STARTED
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Instant Quote
          </h1>
          <p className="text-gray-700 text-lg mb-2">
            No contracts. No sales call required.
          </p>
          <p className="text-gray-600 text-base">
            See your tailored cost in seconds.
          </p>
        </div>

        {/* What you'll do Section */}
        <div className="bg-[#e6f7f9] border-l-4 border-teal-500 rounded-lg p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What you'll do
          </h2>
          <p className="text-gray-700 text-base mb-6">
            Answer a few quick questions about your business so we can recommend the right plan.
          </p>
          <div className="mb-4">
            <p className="text-gray-900 font-semibold mb-3">You'll tell us:</p>
            <ul className="space-y-2">
              <li className="text-gray-700 text-sm">
                • Who you want to reach (your ICP – Ideal Customer Profile)
              </li>
              <li className="text-gray-700 text-sm">
                • How many leads you want per month
              </li>
              <li className="text-gray-700 text-sm">
                • How many inbound phone calls you expect us to handle each month
              </li>
            </ul>
          </div>
        </div>

        {/* Structured Implementation Program */}
{/* <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-6 space-y-3">
  <h3 className="text-lg font-bold text-gray-900">
    Structured Implementation Program
  </h3>

  <p className="text-gray-700 text-sm">
    Your quoted plan reflects full standard pricing.
  </p>

  <p className="text-gray-700 text-sm">
    All new MSP partners enter through a structured 90-day implementation phase
    to ensure precision targeting, automation calibration, and call routing
    optimization.
  </p>

  <p className="text-gray-900 font-semibold text-sm">
    Implementation Rate: 35% reduction from the quoted monthly total for the selected plan
  </p>

  <p className="text-gray-600 text-xs italic">
    (Valid for the first 3 months from activation)
  </p>

  <p className="text-gray-700 text-sm">
    After the 90-day implementation phase, standard plan pricing applies.
  </p>

  <button
    type="button"
    onClick={handleScheduleActivation}
    disabled={accepting}
    className="mt-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-200"
  >
    {accepting ? "Scheduling..." : "Schedule Your Activation Call"}
  </button>

  {accepted && (
    <p className="text-xs text-emerald-700">
      Your quote has been marked as accepted and synced to our CRM.
    </p>
  )}
</div> */}

        {/* Form Section - 1. About You */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            1. About You
          </h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First Name and Last Name Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={form.first_name}
                  onChange={handleChange('first_name')}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={form.last_name}
                  onChange={handleChange('last_name')}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                value={form.company}
                onChange={handleChange('company')}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={handleChange('phone')}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
              />
            </div>
          </form>
        </div>

        {/* Form Section - 2. Ideal Customer Profile (ICP) */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            2. Ideal Customer Profile (ICP)
          </h2>
          
          <form className="space-y-6">
            {/* Industry */}
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Industry
              </label>
              <input
                type="text"
                placeholder="e.g., SaaS, Healthcare, Real Estate"
                value={form.industry}
                onChange={handleChange('industry')}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g., United States, California, San Francisco"
                value={form.location}
                onChange={handleChange('location')}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Company Size */}
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Company Size
              </label>
              <select
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
                value={form.company_size}
                onChange={handleChange('company_size')}
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501-1000">501-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>

            {/* Job Titles */}
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Job Titles
              </label>
              <input
                type="text"
                placeholder="e.g., CEO, Marketing Director, VP of Sales"
                value={form.job_titles}
                onChange={handleChange('job_titles')}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>
          </form>
        </div>

        {/* Form Section - 3. Lead Volume */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            3. Lead Volume
          </h2>
          
          <form className="space-y-6">
            {/* Leads per month */}
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                How many leads do you want per month?
              </label>
              <input
                type="number"
                placeholder="e.g., 50, 100, 200"
                value={form.leads_per_month}
                onChange={handleChange('leads_per_month')}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>
          </form>
        </div>

        {/* Form Section - 4. Call Volume */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            4. Call Volume
          </h2>
          
          <form className="space-y-6">
            {/* Inbound calls per month */}
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                How many inbound calls do you expect per month?
              </label>
              <input
                type="number"
                placeholder="e.g., 20, 50, 100"
                value={form.calls_per_month}
                onChange={handleChange('calls_per_month')}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>
          </form>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="bg-teal-500 hover:bg-teal-600 disabled:bg-teal-400 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>{submitting ? 'Calculating...' : 'Get My Instant Quote'}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
        </div>

        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {quoteResult && (
          <div className="mt-8 bg-white border border-teal-500 rounded-xl p-8 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Your Instant Quote
            </h2>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Recommended Plan
              </h3>
              <p className="text-xl font-bold text-gray-900">
                {displayPlanName()}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Estimated Monthly Total
              </h3>
              <p className="text-3xl font-extrabold text-teal-600">
                {formatCurrency(
                  Number(quoteResult.total_price),
                  quoteResult.currency || 'USD'
                )}{' '}
                <span className="text-lg font-semibold text-gray-700">
                  / month
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Estimated Cost Per Lead ⓘ
              </h3>
              <p className="text-xl font-semibold text-gray-900">
                {(() => {
                  const cpl = displayCostPerLead();
                  return cpl
                    ? formatCurrency(cpl, quoteResult.currency || 'USD')
                    : 'N/A';
                })()}
              </p>
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <h3 className="text-lg font-bold text-gray-900">
                How Your Instant Quote Is Calculated
              </h3>
              <p className="text-gray-700 text-sm">
                Every business is different. Your Instant Quote is based on practical factors
                like buyer location, industry requirements, compliance region, and call
                complexity.
              </p>
              <p className="text-gray-700 text-sm">
                Some regions and industries require additional validation steps, data checks,
                and routing configuration, which affect the total operational effort.
              </p>
              <p className="text-gray-700 text-sm">
                We also apply built-in price floors to maintain lead quality and sustainable
                delivery standards.
              </p>
              <p className="text-gray-700 text-sm">
                The result is a transparent quote based on real implementation effort — not a
                one-size-fits-all estimate.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InstantQuote;