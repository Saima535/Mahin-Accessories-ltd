"use client";

import { useEffect, useState } from "react";

const Icon = ({ children, size = 20, className = "", strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const Eyebrow = ({ children }) => (
  <p
    className="font-sora font-bold uppercase tracking-wide text-[18px] leading-[32px]"
    style={{
      backgroundImage: "linear-gradient(0deg,#8B68CE 15.91%,#9AD2ED 90.91%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    {children}
  </p>
);

const ArrowUpRight = (props) => (
  <Icon {...props}>
    <path d="M7 17 17 7M7 7h10v10" />
  </Icon>
);

export default function WhyChooseUs() {
  const [feature, setFeature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeature = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/feature`,
        );

        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setFeature(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch feature:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeature();
  }, []);

  if (loading) {
    return (
      <section className="max-w-[1466px] mx-auto px-6 py-28">
        <p className="text-center font-sora">Loading...</p>
      </section>
    );
  }

  if (!feature) return null;

  const features = [
    feature.featureOne,
    feature.featureTwo,
    feature.featureThree,
    feature.featureFour,
  ].filter(Boolean);

  return (
    <section className="max-w-[1466px] mx-auto px-6 py-28">
      <Eyebrow>04 // Our Features</Eyebrow>

      <h2 className="font-sora text-[36px] md:text-[50px] tracking-[-1.06px] text-black mt-2">
        Why choose Us
      </h2>

      <div className="flex flex-col lg:flex-row gap-16 mt-14 items-center">
        {/* Left Side */}
        <div className="flex-1 flex flex-col">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 py-6 border-t border-black/15"
            >
              <ArrowUpRight
                size={26}
                className={index === 0 ? "text-[#8B68CE]" : "text-black"}
              />

              <span
                className={`font-sora text-[22px] ${
                  index === 0 ? "" : "text-black"
                }`}
                style={
                  index === 0
                    ? {
                        backgroundImage:
                          "linear-gradient(90deg,#8B68CE 0%,#9AD2ED 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }
                    : {}
                }
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex-1 relative rounded-[10px] overflow-hidden min-h-[420px] w-full">
          <img
            src={feature.image}
            alt="Feature"
            className="w-full h-full object-cover"
          />

          {/* Overlay Card */}
          <div className="absolute left-6 bottom-6 bg-[#151515] text-white p-6 max-w-[300px] rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#8B68CE] to-[#9AD2ED]" />

              <span className="font-hero uppercase tracking-widest text-sm">
                Maheen Accessories Ltd.
              </span>
            </div>

            <p className="font-sora font-light text-[14px] leading-[1.5] text-[#DDDDDD]">
              {feature.description}
            </p>

            <a
              href={feature.cta?.href || "#"}
              className="font-sora text-[13px] mt-4 inline-flex items-center gap-2"
            >
              {feature.cta?.text || "Read More"}
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Static Stats */}
          <div className="absolute right-0 bottom-0 flex">
            <div className="bg-white px-8 py-6 flex flex-col items-center">
              <span className="font-sora text-[36px]">500+</span>
              <span className="font-sora text-[16px]">Designs</span>
            </div>

            <div className="bg-[#9AD2ED] px-8 py-6 flex flex-col items-center">
              <span className="font-sora text-[36px]">3000k</span>
              <span className="font-sora text-[16px]">Order Covered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
