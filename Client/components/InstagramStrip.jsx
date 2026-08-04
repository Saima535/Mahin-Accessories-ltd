"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

const Instagram = (props) => (
  <Icon {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </Icon>
);

export default function InstagramStrip() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramImages = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/instagram-strip`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Instagram images");
        }

        const data = await res.json();

        // Maximum 5 images
        setImages(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching Instagram images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramImages();
  }, []);

  if (loading) {
    return (
      <section className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="aspect-square animate-pulse bg-gray-200" />
          ))}
        </div>
      </section>
    );
  }

  if (!images.length) return null;

  return (
    <section className="relative w-full">
      <div
        className={`grid ${
          images.length === 1
            ? "grid-cols-1"
            : images.length === 2
              ? "grid-cols-2"
              : images.length === 3
                ? "grid-cols-3"
                : images.length === 4
                  ? "grid-cols-2 md:grid-cols-4"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        }`}
      >
        {images.map((item) => (
          <div
            key={item._id}
            className="relative aspect-square overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width:640px) 50vw,
                     (max-width:1024px) 33vw,
                     20vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <button
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          bg-white/70
          backdrop-blur-md
          px-5 py-4
          sm:px-7 sm:py-5
          md:px-8 md:py-6
          lg:px-10 lg:py-7
          flex
          flex-col
          items-center
          gap-2
          shadow-lg
          whitespace-nowrap
        "
      >
        <Instagram size={26} />

        <span className="font-sora text-[10px] sm:text-xs md:text-[13px] uppercase tracking-wide text-center">
          Follow Us on Instagram
        </span>
      </button>
    </section>
  );
}
