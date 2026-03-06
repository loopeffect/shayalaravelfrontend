import React, { useEffect, useState } from 'react'
import polygonbg from '../../images/polygon_bg.png';
import ring from '../../images/ring.png';


function WhyScivoWorks() {
  const [is844x390Landscape, setIs844x390Landscape] = useState(false);
  const [is915x412Landscape, setIs915x412Landscape] = useState(false);
  const [is932x430Landscape, setIs932x430Landscape] = useState(false);
  const [is740x360Landscape, setIs740x360Landscape] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(width: 844px) and (height: 390px) and (orientation: landscape)');
    const mediaQuery915 = window.matchMedia('(width: 915px) and (height: 412px) and (orientation: landscape)');
    const mediaQuery932 = window.matchMedia('(width: 932px) and (height: 430px) and (orientation: landscape)');
    const mediaQuery740 = window.matchMedia('(width: 740px) and (height: 360px) and (orientation: landscape)');

    const updateIs844x390Landscape = (event) => {
      setIs844x390Landscape(event.matches);
    };

    const updateIs932x430Landscape = (event) => {
      setIs932x430Landscape(event.matches);
    };

    const updateIs915x412Landscape = (event) => {
      setIs915x412Landscape(event.matches);
    };

    const updateIs740x360Landscape = (event) => {
      setIs740x360Landscape(event.matches);
    };

    setIs844x390Landscape(mediaQuery.matches);
    setIs915x412Landscape(mediaQuery915.matches);
    setIs932x430Landscape(mediaQuery932.matches);
    setIs740x360Landscape(mediaQuery740.matches);
    mediaQuery.addEventListener('change', updateIs844x390Landscape);
    mediaQuery915.addEventListener('change', updateIs915x412Landscape);
    mediaQuery932.addEventListener('change', updateIs932x430Landscape);
    mediaQuery740.addEventListener('change', updateIs740x360Landscape);

    return () => {
      mediaQuery.removeEventListener('change', updateIs844x390Landscape);
      mediaQuery915.removeEventListener('change', updateIs915x412Landscape);
      mediaQuery932.removeEventListener('change', updateIs932x430Landscape);
      mediaQuery740.removeEventListener('change', updateIs740x360Landscape);
    };
  }, []);

  return (
   <><section
  className={`relative bg-cover bg-center ${is740x360Landscape ? 'py-6' : is844x390Landscape ? 'py-8' : is915x412Landscape ? 'py-9' : is932x430Landscape ? 'py-10' : 'py-24'}`}
  style={{ backgroundImage: `url(${polygonbg})` }}
>
        <div className={`flex items-center justify-center ${is740x360Landscape ? 'mb-6' : is844x390Landscape ? 'mb-8' : is915x412Landscape ? 'mb-9' : is932x430Landscape ? 'mb-10' : 'mb-20'}`}>

  {/* LEFT LINE */}
  <div className={`flex-1 h-[3px] bg-emerald-500 ${is740x360Landscape ? 'mr-3' : is844x390Landscape ? 'mr-4' : is915x412Landscape ? 'mr-5' : is932x430Landscape ? 'mr-5' : 'mr-8'}`} />

  {/* TITLE */}
  <h2 className={`whitespace-nowrap font-extrabold tracking-wide text-slate-900 text-center ${is740x360Landscape ? 'text-[1.25rem]' : is844x390Landscape ? 'text-[1.5rem]' : is915x412Landscape ? 'text-[1.6rem]' : is932x430Landscape ? 'text-[1.65rem]' : 'text-[clamp(1.8rem,5vw,3.75rem)]'}`}>
    WHY SCIVO WORKS
  </h2>

  {/* RIGHT LINE */}
  <div className={`flex-1 h-[3px] bg-emerald-500 ${is740x360Landscape ? 'ml-3' : is844x390Landscape ? 'ml-4' : is915x412Landscape ? 'ml-5' : is932x430Landscape ? 'ml-5' : 'ml-8'}`} />

</div>


  <div className={`max-w-7xl mx-auto ${is740x360Landscape ? 'px-2' : is844x390Landscape ? 'px-3' : is915x412Landscape ? 'px-4' : is932x430Landscape ? 'px-4' : 'px-0'}`}>

    {/* Title With Side Lines */}


    {/* Content Grid */}
  <div className={`grid grid-cols-1 items-center ${is740x360Landscape ? 'md:grid-cols-[1fr_180px_1fr] gap-3' : is844x390Landscape ? 'md:grid-cols-[1fr_220px_1fr] gap-4' : is915x412Landscape ? 'md:grid-cols-[1fr_240px_1fr] gap-5' : is932x430Landscape ? 'md:grid-cols-[1fr_250px_1fr] gap-6' : 'md:grid-cols-[1fr_auto_1fr] gap-16'}`}>

      {/* LEFT CARD */}
      <div className={`bg-gray-100/90 backdrop-blur-sm rounded-3xl shadow-xl border border-emerald-200 ${is740x360Landscape ? 'p-3' : is844x390Landscape ? 'p-4' : is915x412Landscape ? 'p-5' : is932x430Landscape ? 'p-5' : 'p-10'}`}>
        <h3 className={`font-semibold text-emerald-600 ${is740x360Landscape ? 'text-base mb-2' : is844x390Landscape ? 'text-lg mb-2' : is915x412Landscape ? 'text-xl mb-3' : is932x430Landscape ? 'text-xl mb-3' : 'text-2xl mb-6'}`}>
          Benefits
        </h3>

        <ul className={`text-gray-900 ${is740x360Landscape ? 'space-y-1' : is844x390Landscape ? 'space-y-1' : is915x412Landscape ? 'space-y-2' : is932x430Landscape ? 'space-y-2' : 'space-y-4'}`} style={{ fontSize: is740x360Landscape ? '9pt' : is844x390Landscape ? '10pt' : is915x412Landscape ? '10.75pt' : is932x430Landscape ? '11pt' : '16pt' }}>
          <li className="flex items-start gap-3">
            <span className="text-emerald-500">✔</span>
            Virtual AI Receptionist
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-500">✔</span>
            Weekly validated leads
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-500">✔</span>
            No long-term contracts
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-500">✔</span>
            Bad leads replaced 1:1
          </li>
        </ul>
      </div>

     {/* CENTER IMAGE */}
<div className={`relative mx-auto flex items-center justify-center ${is740x360Landscape ? 'w-[180px] h-[180px]' : is844x390Landscape ? 'w-[220px] h-[220px]' : is915x412Landscape ? 'w-[240px] h-[240px]' : is932x430Landscape ? 'w-[250px] h-[250px]' : 'w-[320px] h-[320px] md:w-[460px] md:h-[460px]'}`}>

  {/* Decorative outer arc ring */}
  <div className="
    absolute inset-0 rounded-full
    border-[2px] border-emerald-400/50
    scale-100
    [mask:radial-gradient(circle_at_center,transparent_60%,black_61%)]
  " />

  {/* Image circle */}
  <div className="
    relative
    w-[92%] h-[92%]
    rounded-full
    overflow-hidden
    shadow-2xl
  ">
    <img
      src={ring}
      alt="AI"
      className="w-full h-full object-cover"
    />
  </div>

</div>



      {/* RIGHT CARD */}
      <div className={`bg-gray-100/90 backdrop-blur-sm rounded-3xl shadow-xl border border-emerald-200 ${is740x360Landscape ? 'p-3' : is844x390Landscape ? 'p-4' : is915x412Landscape ? 'p-5' : is932x430Landscape ? 'p-5' : 'p-10'}`}>
        <h3 className={`font-semibold text-emerald-600 ${is740x360Landscape ? 'text-base mb-2' : is844x390Landscape ? 'text-lg mb-2' : is915x412Landscape ? 'text-xl mb-3' : is932x430Landscape ? 'text-xl mb-3' : 'text-2xl mb-6'}`}>
          Proof
        </h3>

        <ul className={`text-gray-900 ${is740x360Landscape ? 'space-y-1' : is844x390Landscape ? 'space-y-1' : is915x412Landscape ? 'space-y-2' : is932x430Landscape ? 'space-y-2' : 'space-y-4'}`} style={{ fontSize: is740x360Landscape ? '9pt' : is844x390Landscape ? '10pt' : is915x412Landscape ? '10.75pt' : is932x430Landscape ? '11pt' : '16pt' }}>
          <li className="flex items-start gap-3">
            <span className="text-emerald-500">✔</span>
            ≥98% deliverability
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-500">✔</span>
            ≥90% role match
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-500">✔</span>
            Zero duplicates
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-500">✔</span>
            Simple onboarding
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-500">✔</span>
            Transparent pricing
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

   </>
  )
}

export default WhyScivoWorks