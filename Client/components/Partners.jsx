"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Eyebrow = ({ children }) => (
  <p
    className="font-sora text-[18px] font-bold uppercase tracking-wide leading-[32px]"
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

const SectionHeading = ({ eyebrow, line1, italic, line2, right, center }) => (
  <div
    className={`flex flex-col gap-8 ${
      center
        ? "items-center text-center"
        : "justify-between md:flex-row md:items-end"
    }`}
  >
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="mt-2 font-sora text-[36px] font-normal leading-[1.15] tracking-[-1.06px] text-black md:text-[50px]">
        {line1} <span className="font-display italic">{italic}</span>
        {line2 && (
          <>
            <br />
            {line2}
          </>
        )}
      </h2>
    </div>

    {right}
  </div>
);

export default function Partners() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/partner`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch partners");
        }

        const data = await res.json();
        setPartners(data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <section className="mx-auto max-w-[1276px] px-6 py-28">
      <SectionHeading
        eyebrow="06 // Our Partners"
        line1="Meet Our"
        italic="Working"
        line2="Partners"
        center
      />

      {loading ? (
        <div className="mt-16 text-center text-gray-500">
          Loading partners...
        </div>
      ) : (
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner._id}
              className="flex h-[260px] items-center justify-center border border-black/30 p-8 transition duration-300 hover:border-black/60"
            >
              <div className="relative h-[120px] w-full">
                <Image
                  src={partner.image}
                  alt={partner.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
