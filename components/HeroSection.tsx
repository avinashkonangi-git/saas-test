"use client";

import Image from "next/image";
import { useState } from "react";
type HeroProps = {
  banner_heading: string;
  banner_sub_title: string;
  banner_image: string;
};
const HeHeroSectionro = ({ banner_heading, banner_sub_title, banner_image }: HeroProps) => {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full bg-[#FFFDE6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center min-h-[640px] py-12 lg:py-0">

        {/* ── LEFT COLUMN ── */}
        <div className="flex-1 lg:max-w-[480px] z-10 lg:py-16">
          <h1 className="text-[2.4rem] lg:text-[2.8rem] font-black text-gray-900 leading-[1.1] tracking-tight mb-5">
            {banner_heading}
          </h1>

          <p className="text-gray-700 text-[14px] leading-[1.7] mb-8 max-w-[360px]">
            {banner_heading}
          </p>

          {/* CTA row — joined input + button */}
          <div className="flex items-center mb-4 max-w-[400px]">
            <input
              type="email"
              placeholder="Start Free Trial"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[44px] flex-1 min-w-0 border border-gray-300 border-r-0 rounded-l-md px-4 text-sm text-gray-500 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
            />
            <button className="h-[44px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white text-sm font-semibold px-6 rounded-r-md whitespace-nowrap flex-shrink-0">
              Start Free Trial
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-6 text-[12px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1a.5.5 0 0 1 .374.168l4.5 5A.5.5 0 0 1 13 6.5v3a4.5 4.5 0 0 1-9 0v-3a.5.5 0 0 1 .126-.332l4.5-5A.5.5 0 0 1 8 1z"/>
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
              </svg>
              14 days of JustCall AI on us
            </span>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="relative flex-1 flex justify-center items-center h-[340px] lg:h-[400px] mt-10 lg:mt-0">
          <Image
                                                          src={banner_image}
                                                          alt="hero-banner"
                                                          width={520}
                                                          height={520}
                                                          className="object-cover object-top"
                                                          priority
                                                        />
        </div>

      </div>
    </section>
  );
}

export default HeHeroSectionro;
