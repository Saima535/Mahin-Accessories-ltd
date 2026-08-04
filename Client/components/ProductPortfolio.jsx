"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/portfolio`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch portfolio");
        }

        const data = await res.json();
        setPortfolioItems(data);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-[1280px] px-5 py-24">
        <div className="text-center">
          <p className="bg-gradient-to-r from-[#8B68CE] to-[#9AD2ED] bg-clip-text text-[18px] font-bold uppercase text-transparent">
            06// Our Portfolio
          </p>

          <h2 className="mt-3 text-[42px] font-light leading-tight lg:text-[58px]">
            Maheen Creates{" "}
            <span className="font-serif italic">All of Your</span>
            <br />
            beautiful Products
          </h2>
        </div>

        <div className="mt-20 flex justify-center">
          <p className="text-gray-500">Loading portfolio...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24">
      {/* Heading */}
      <div className="text-center">
        <p className="bg-gradient-to-r from-[#8B68CE] to-[#9AD2ED] bg-clip-text text-[18px] font-bold uppercase text-transparent">
          06// Our Portfolio
        </p>

        <h2 className="mt-3 text-[42px] font-light leading-tight lg:text-[58px]">
          Maheen Creates <span className="font-serif italic">All of Your</span>
          <br />
          beautiful Products
        </h2>
      </div>

      {/* Masonry Layout */}
      <div className="mt-20 columns-1 gap-10 md:columns-2">
        {portfolioItems.map((item, index) => {
          // Match the previous static layout
          const isLarge = ![1, 6, 7].includes(index);

          return (
            <div key={item._id} className="mb-10 break-inside-avoid">
              <div
                className={`relative overflow-hidden ${
                  isLarge ? "h-[720px]" : "h-[360px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                  unoptimized
                />
              </div>

              <h3 className="mt-6 text-[26px] font-medium">{item.title}</h3>

              <p className="mt-2 text-sm text-gray-500">By {item.author}</p>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="mt-20 flex justify-center">
        <button className="group relative flex h-[56px] items-center gap-3 px-10 text-[15px] tracking-wide transition ">
          <span>Explore Now</span>

          <svg
            className="h-4 w-4 transition group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M5 12H19" />
            <path d="M12 5L19 12L12 19" />
          </svg>

          {/* Corners */}
          <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-black group-hover:border-white"></span>
          <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-black group-hover:border-white"></span>
          <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-black group-hover:border-white"></span>
          <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-black group-hover:border-white"></span>
        </button>
      </div>
    </section>
  );
}
