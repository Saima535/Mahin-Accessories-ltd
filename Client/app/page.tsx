"use client";
import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Inline SVG icons (no external icon package required)               */
/* ------------------------------------------------------------------ */
// const Icon = ({ children, size = 20, className = "", strokeWidth = 1.8 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={strokeWidth}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     {children}
//   </svg>
// );

// const Mail = (p) => (
//   <Icon {...p}>
//     <rect x="2" y="4" width="20" height="16" rx="2" />
//     <path d="m22 6-10 7L2 6" />
//   </Icon>
// );
// const Phone = (p) => (
//   <Icon {...p}>
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//   </Icon>
// );
// const MapPin = (p) => (
//   <Icon {...p}>
//     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//     <circle cx="12" cy="10" r="3" />
//   </Icon>
// );
// const ArrowUpRight = (p) => (
//   <Icon {...p}>
//     <path d="M7 17 17 7M7 7h10v10" />
//   </Icon>
// );
// const ArrowRight = (p) => (
//   <Icon {...p}>
//     <path d="M5 12h14M13 6l6 6-6 6" />
//   </Icon>
// );
// const Menu = (p) => (
//   <Icon {...p}>
//     <path d="M3 6h18M3 12h18M3 18h18" />
//   </Icon>
// );
// const Search = (p) => (
//   <Icon {...p}>
//     <circle cx="11" cy="11" r="7" />
//     <path d="m21 21-4.3-4.3" />
//   </Icon>
// );
// const Instagram = (p) => (
//   <Icon {...p}>
//     <rect x="2" y="2" width="20" height="20" rx="5" />
//     <circle cx="12" cy="12" r="4" />
//     <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
//   </Icon>
// );
// const Facebook = (p) => (
//   <Icon {...p}>
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//   </Icon>
// );
// const Linkedin = (p) => (
//   <Icon {...p}>
//     <rect x="2" y="2" width="20" height="20" rx="2" />
//     <path d="M6 9v8M6 6v.01M10 17v-5a2 2 0 0 1 4 0v5M14 12v5" />
//   </Icon>
// );
// const ChevronLeft = (p) => (
//   <Icon {...p}>
//     <path d="m15 18-6-6 6-6" />
//   </Icon>
// );
// const ChevronRight = (p) => (
//   <Icon {...p}>
//     <path d="m9 18 6-6-6-6" />
//   </Icon>
// );
// const Send = (p) => (
//   <Icon {...p}>
//     <path d="m22 2-7 20-4-9-9-4Z" />
//     <path d="M22 2 11 13" />
//     );
//   </Icon>
// );
// const ShieldCheck = (p) => (
//   <Icon {...p}>
//     <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5Z" />
//     <path d="m9 12 2 2 4-4" />
//   </Icon>
// );
// const Leaf = (p) => (
//   <Icon {...p}>
//     <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 11-11 1 6-1 10-4 12" />
//     <path d="M6.53 15.47C9 13 12 12 16 10" />
//   </Icon>
// );
// const HeartHandshake = (p) => (
//   <Icon {...p}>
//     <path d="M12 6c-1.5-2-4-3-6-1.5C3.5 6 3 9 5 11l7 7 7-7c2-2 1.5-5-1-6.5C16 3 13.5 4 12 6Z" />
//   </Icon>
// );
// const FlaskConical = (p) => (
//   <Icon {...p}>
//     <path d="M9 2h6M10 2v6l-6 10a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-10V2" />
//   </Icon>
// );
// const FileCheck2 = (p) => (
//   <Icon {...p}>
//     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
//     <path d="M14 2v6h6M9 15l2 2 4-4" />
//   </Icon>
// );
// const Users2 = (p) => (
//   <Icon {...p}>
//     <circle cx="9" cy="7" r="4" />
//     <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75M22 21v-2a4 4 0 0 0-3-3.87" />
//   </Icon>
// );

/* ------------------------------------------------------------------ */
/*  Fonts: Sora (body), Playfair Display (italic accent), Arsenal (hero) */
/* ------------------------------------------------------------------ */
const FontImport = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;1,400;1,600&family=Arsenal:wght@700&display=swap');
    .font-sora { font-family: 'Sora', sans-serif; }
    .font-display { font-family: 'Playfair Display', serif; }
    .font-hero { font-family: 'Arsenal', serif; }
  `}</style>
);

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */

// const Eyebrow = ({ children }) => (
//   <p
//     className="font-sora font-bold uppercase tracking-wide text-[18px] leading-[32px]"
//     style={{
//       backgroundImage: "linear-gradient(0deg,#8B68CE 15.91%,#9AD2ED 90.91%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       backgroundClip: "text",
//     }}
//   >
//     {children}
//   </p>
// );

// const CornerBorderButton = ({ children, dark = false }) => (
//   <button
//     className={`relative font-sora text-[14px] tracking-[0.8px] capitalize px-8 py-4 flex items-center gap-3 ${
//       dark ? "text-white" : "text-black"
//     }`}
//     style={{ background: "rgba(0,0,0,0.08)" }}
//   >
//     <span
//       className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${
//         dark ? "border-white" : "border-black"
//       }`}
//     />
//     <span
//       className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${
//         dark ? "border-white" : "border-black"
//       }`}
//     />
//     {children}
//     <ArrowUpRight size={16} />
//   </button>
// );

// const SectionHeading = ({ eyebrow, line1, italic, line2, right, center }) => (
//   <div
//     className={`flex flex-col md:flex-row ${
//       center
//         ? "items-center text-center"
//         : "items-start md:items-end justify-between"
//     } gap-8`}
//   >
//     <div>
//       <Eyebrow>{eyebrow}</Eyebrow>
//       <h2 className="font-sora font-normal text-[36px] md:text-[50px] leading-[1.15] tracking-[-1.06px] text-black mt-2">
//         {line1} <span className="font-display italic">{italic}</span>
//         {line2 ? (
//           <>
//             <br />
//             {line2}
//           </>
//         ) : null}
//       </h2>
//     </div>
//     {right}
//   </div>
// );

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */
// const Header = () => {
//   const links = [
//     "Home",
//     "About Us",
//     "Sustainability",
//     "Products",
//     "Policies",
//     "Production Facilities",
//     "Contact",
//   ];
//   return (
//     <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50">
//       <div className="max-w-[1900px] mx-auto flex items-center justify-between gap-10 px-6 py-5">
//         <div className="flex items-center gap-5">
//           <div className="flex items-center gap-2">
//             <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#8B68CE] to-[#9AD2ED] flex items-center justify-center text-white font-bold text-xs">
//               MA
//             </div>
//             <span className="font-hero font-semibold tracking-widest text-sm uppercase">
//               Maheen Accessories
//             </span>
//           </div>
//           <span className="hidden lg:block w-px h-5 bg-black/20" />
//           <div className="hidden lg:flex items-center gap-2 text-[#5F5E5D] text-[11px]">
//             <Mail size={12} />
//             <span className="lowercase">info@maheenaccessories.com</span>
//           </div>
//         </div>

//         <nav className="hidden xl:flex items-center gap-7">
//           {links.map((l, i) => (
//             <a
//               key={l}
//               href="#"
//               className={`font-sora text-[12px] tracking-[1px] uppercase pb-1 ${
//                 i === 0
//                   ? "font-semibold text-black border-b-2 border-[#8B68CE]"
//                   : "text-black/70 hover:text-black"
//               }`}
//             >
//               {l}
//             </a>
//           ))}
//         </nav>

//         <div className="flex items-center gap-4">
//           <Search size={18} className="text-black/60" />
//           <Menu size={22} className="xl:hidden text-black/80" />
//         </div>
//       </div>
//     </header>
//   );
// };

// /* ------------------------------------------------------------------ */
// /*  Hero                                                                */
// /* ------------------------------------------------------------------ */
// const Hero = () => (
//   <section
//     className="relative w-full min-h-[720px] flex items-center overflow-hidden"
//     style={{
//       backgroundImage:
//         "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.82) 100%), url(https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1600&auto=format&fit=crop)",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}
//   >
//     <div className="max-w-[1466px] w-full mx-auto px-6 py-24 flex flex-col gap-6">
//       <p className="font-sora text-white uppercase text-[16px] tracking-[3px]">
//         Photography Agency
//       </p>
//       <h1 className="font-hero font-bold text-white text-[44px] md:text-[70px] leading-[1.05] tracking-[-1.2px] max-w-[820px]">
//         Innovative Solutions for Every Need
//       </h1>
//       <p className="font-sora font-light text-[#DDDDDD] text-[18px] md:text-[22px] leading-[1.55] max-w-[830px]">
//         At Maheen Accessories Ltd, we provide top-notch products that meet
//         world-class standards. Our advanced infrastructure and expert team cater
//         to diverse customer needs. Discover our high-quality buttons, ribbons,
//         and bows designed to elevate your creations.
//       </p>

//       <div className="flex items-center gap-8 mt-4">
//         <button className="bg-[#9AD2ED] text-[#151515] font-sora text-[15px] tracking-[0.9px] capitalize px-8 py-4 flex items-center gap-3">
//           Book Kimono <ArrowUpRight size={18} />
//         </button>
//         <CornerBorderButton dark>Explore Now</CornerBorderButton>
//       </div>
//     </div>

//     {/* slide indicator */}
//     <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-9">
//       <span className="font-sora text-white text-[12px] tracking-widest uppercase">
//         Prev
//       </span>
//       <div className="flex items-center gap-7">
//         <span className="w-24 h-px bg-white/30" />
//         <div className="flex items-center gap-5">
//           <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
//             <span className="w-1.5 h-1.5 rounded-full bg-white" />
//           </span>
//           <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
//           <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
//           <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
//         </div>
//         <span className="w-24 h-px bg-white/30" />
//       </div>
//       <span className="font-sora text-white text-[12px] tracking-widest uppercase">
//         Next
//       </span>
//     </div>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Services                                                           */
// /* ------------------------------------------------------------------ */
// const services = [
//   {
//     n: "01",
//     title: "Button Manufacturing",
//     img: "https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     n: "02",
//     title: "Ribbon Fabrication",
//     img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     n: "03",
//     title: "Bow Manufacturing",
//     img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800&auto=format&fit=crop",
//   },
// ];

// const Services = () => (
//   <section className="max-w-[1466px] mx-auto px-6 py-28">
//     <SectionHeading
//       eyebrow="01 // Services"
//       line1="Our Core"
//       italic="Services"
//       right={
//         <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px]">
//           We specialize in developing products that meet world-class standards,
//           ensuring every detail is perfect to bring your vision to life.
//         </p>
//       }
//     />

//     <div className="flex flex-col md:flex-row gap-3 mt-16">
//       {services.map((s) => (
//         <div
//           key={s.n}
//           className="relative flex-1 rounded-[20px] overflow-hidden min-h-[360px] flex items-end p-8"
//           style={{
//             backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(154,210,237,0.45) 100%), url(${s.img})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="flex flex-col gap-3">
//             <span className="font-hero text-[40px] leading-none text-[#4A4A4A]">
//               {s.n}
//             </span>
//             <h3 className="font-sora font-semibold text-[24px] text-black">
//               {s.title}
//             </h3>
//             <p className="font-sora text-[13px] text-[#4A4A4A] max-w-[220px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//               tellus.
//             </p>
//             <a
//               href="#"
//               className="font-sora text-[13px] font-semibold uppercase tracking-wide mt-2 flex items-center gap-2"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(90deg,#8B68CE 0%,#9AD2ED 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Discover Work{" "}
//               <ArrowUpRight size={14} className="text-[#8B68CE]" />
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Photo Albums / Portfolio carousel                                  */
// /* ------------------------------------------------------------------ */
// const albumImages = [
//   "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=800&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139834-6b1851ce9a55?q=80&w=800&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=900&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139962-020c76b18d18?q=80&w=800&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800&auto=format&fit=crop",
// ];

// const PhotoAlbums = () => (
//   <section className="text-center w-full bg-white py-28 overflow-hidden">
//     <SectionHeading
//       eyebrow="02 // Photo Albums"
//       line1="Collection of photos"
//       italic="All of Our"
//       line2="Best Works"
//       center
//     />

//     <div className="relative mt-16 flex items-center justify-center gap-4 px-6">
//       <button className="hidden md:flex w-16 h-16 rounded-full bg-white shadow items-center justify-center shrink-0">
//         <ChevronLeft />
//       </button>

//       <div className="flex items-center gap-4 overflow-x-auto max-w-[1400px] scrollbar-hide">
//         {albumImages.map((img, i) => (
//           <div
//             key={i}
//             className={`relative shrink-0 rounded-[22px] overflow-hidden shadow-xl ${
//               i === 2 ? "w-[420px] h-[472px]" : "w-[280px] h-[380px]"
//             }`}
//           >
//             <img
//               src={img}
//               alt="portfolio"
//               className="w-full h-full object-cover"
//             />
//             {i === 2 && (
//               <>
//                 <div className="absolute left-8 bottom-8 text-white">
//                   <p className="font-sora text-[24px]">Customize Button</p>
//                   <p className="font-sora text-[12px] tracking-[1.1px] uppercase">
//                     By Maheen Accessories Limited.
//                   </p>
//                 </div>
//                 <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white flex items-center justify-center">
//                   <ArrowUpRight className="text-[#9747FF]" />
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>

//       <button className="hidden md:flex w-16 h-16 rounded-full bg-white shadow items-center justify-center shrink-0">
//         <ChevronRight />
//       </button>
//     </div>

//     <p className="font-display italic text-center text-[10vw] md:text-[130px] leading-none text-black/10 mt-10 select-none uppercase">
//       Portfolio
//     </p>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  About                                                              */
// /* ------------------------------------------------------------------ */
// const About = () => (
//   <section className="max-w-[1466px] mx-auto px-6 py-28">
//     <SectionHeading
//       eyebrow="03 // About Company"
//       line1="Maheen Creates"
//       italic="What You need"
//       right={<CornerBorderButton>Explore Now</CornerBorderButton>}
//     />
//     <p className="font-sora text-black text-[24px] md:text-[32px] leading-[1.6] tracking-[-1px] mt-10 max-w-[730px]">
//       precision, passion, and a touch of creativity.
//     </p>

//     <div className="flex flex-col lg:flex-row gap-16 mt-16 items-center">
//       <div className="relative flex-1 rounded-[16px] overflow-hidden min-h-[420px]">
//         <img
//           src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=900&auto=format&fit=crop"
//           alt="workshop"
//           className="w-full h-full object-cover"
//         />
//         <button
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[170px] h-[170px] rounded-full flex items-center justify-center text-white font-sora text-[14px] tracking-[0.8px] capitalize"
//           style={{
//             background:
//               "linear-gradient(122.37deg,#9AD2ED 16.6%,#8B68CE 93.82%)",
//           }}
//         >
//           Explore Us <ArrowUpRight size={16} className="ml-2" />
//         </button>
//       </div>

//       <div className="flex-1 flex flex-col gap-8">
//         <div className="flex items-center gap-6">
//           <h3 className="font-sora uppercase text-[28px] font-medium">
//             About Maheen
//           </h3>
//           <span className="flex-1 h-px bg-black" />
//         </div>
//         <p className="font-sora font-light text-[20px] leading-[1.55] text-black/70">
//           Crafting Excellence | Elevating Creations | Defining Style
//         </p>
//         <p className="font-sora font-light text-[15px] leading-[1.9] text-black/70 text-justify">
//           At Maheen Accessories Ltd, we are committed to providing top-notch
//           products that meet world-class standards. With state-of-the-art
//           infrastructure and an expert management team, we cater to the growing
//           and diversified demands of our customers. Discover our range of
//           high-quality buttons, ribbons, and bows designed to elevate your
//           creations.
//         </p>
//       </div>
//     </div>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Why Choose Us / Features                                           */
// /* ------------------------------------------------------------------ */
// const features = [
//   "Creative Custom Design",
//   "20+ Years Experience",
//   "Globally Awarded",
//   "Best Quality With Price",
// ];

// const WhyChooseUs = () => (
//   <section className="max-w-[1466px] mx-auto px-6 py-28">
//     <Eyebrow>04 // Our Features</Eyebrow>
//     <h2 className="font-sora text-[36px] md:text-[50px] tracking-[-1.06px] text-black mt-2">
//       Why choose Us
//     </h2>

//     <div className="flex flex-col lg:flex-row gap-16 mt-14 items-center">
//       <div className="flex-1 flex flex-col">
//         {features.map((f, i) => (
//           <div
//             key={f}
//             className="flex items-center gap-6 py-6 border-t border-black/15"
//           >
//             <ArrowUpRight
//               size={26}
//               className={i === 0 ? "text-[#8B68CE]" : "text-black"}
//             />
//             <span
//               className={`font-sora text-[22px] ${i === 0 ? "" : "text-black"}`}
//               style={
//                 i === 0
//                   ? {
//                       backgroundImage:
//                         "linear-gradient(90deg,#8B68CE 0%,#9AD2ED 100%)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }
//                   : {}
//               }
//             >
//               {f}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div className="flex-1 relative rounded-[10px] overflow-hidden min-h-[420px] w-full">
//         <img
//           src="https://images.unsplash.com/photo-1581093458791-9d8ea0e1af62?q=80&w=900&auto=format&fit=crop"
//           alt="factory"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute left-6 bottom-6 bg-[#151515] text-white p-6 max-w-[300px] rounded-sm">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#8B68CE] to-[#9AD2ED]" />
//             <span className="font-hero uppercase tracking-widest text-sm">
//               Maheen Accessories Ltd.
//             </span>
//           </div>
//           <p className="font-sora font-light text-[14px] leading-[1.5] text-[#DDDDDD]">
//             Maheen Accessories Ltd has been serving for 20 years, since its
//             establishment in 2005, building a reputation for quality accessories
//             and exceptional service.
//           </p>
//           <a
//             href="#"
//             className="font-sora text-[13px] mt-4 inline-flex items-center gap-2"
//           >
//             Read More <ArrowUpRight size={14} />
//           </a>
//         </div>
//         <div className="absolute right-0 bottom-0 flex">
//           <div className="bg-white px-8 py-6 flex flex-col items-center">
//             <span className="font-sora text-[36px]">500+</span>
//             <span className="font-sora text-[16px]">Designs</span>
//           </div>
//           <div className="bg-[#9AD2ED] px-8 py-6 flex flex-col items-center">
//             <span className="font-sora text-[36px]">3000k</span>
//             <span className="font-sora text-[16px]">Order Covered</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Policies                                                           */
// /* ------------------------------------------------------------------ */
// const policies = [
//   {
//     n: "01",
//     title: "Occupational Health and Safety Policy",
//     icon: ShieldCheck,
//   },
//   { n: "02", title: "Product Quality Policy", icon: FileCheck2 },
//   { n: "03", title: "Environmental Policy", icon: Leaf },
//   { n: "04", title: "Social Compliance Policy", icon: Users2 },
//   { n: "05", title: "Workplace Harassment Policy", icon: HeartHandshake },
//   { n: "06", title: "Chemical Use Policy", icon: FlaskConical },
// ];

// const Policies = () => (
//   <section className="max-w-[1466px] mx-auto px-6 py-28">
//     <SectionHeading
//       eyebrow="05 // Policies"
//       line1="Our Smart"
//       italic="Policies"
//       right={
//         <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px] text-right">
//           We're deeply passionate about keeping every promise, conveying our
//           commitment to quality in everything we deliver.
//         </p>
//       }
//     />

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//       {policies.map((p) => (
//         <div
//           key={p.n}
//           className="bg-black/5 aspect-[313/361] flex flex-col justify-center gap-4 px-8 relative"
//         >
//           <p.icon size={44} strokeWidth={1} className="text-black" />
//           <div className="flex flex-col gap-3">
//             <span className="font-sora text-[20px] font-light">{p.n}</span>
//             <h4 className="font-sora font-bold text-[19px] leading-[1.5] text-black">
//               {p.title}
//             </h4>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Management                                                         */
// /* ------------------------------------------------------------------ */
// const team = [
//   {
//     name: "Jahangir Saiful Islam",
//     role: "Managing Director",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Zahidul Islam",
//     role: "Director",
//     img: "https://randomuser.me/api/portraits/men/45.jpg",
//   },
//   {
//     name: "Nomayer Islam Taru",
//     role: "Director",
//     img: "https://randomuser.me/api/portraits/men/50.jpg",
//   },
// ];

// const Management = () => (
//   <section
//     className="w-full py-28"
//     style={{ background: "rgba(154,210,237,0.1)" }}
//   >
//     <div className="max-w-[1466px] mx-auto px-6">
//       <SectionHeading
//         eyebrow="05 // Our Management"
//         line1="Our Core Members"
//         italic="Of The Board"
//         right={
//           <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px] text-right">
//             Introducing our team of talented and skilled professionals ready to
//             increase productivity and bring your business to new levels of
//             efficiency and sustainability.
//           </p>
//         }
//       />

//       <div className="flex flex-col md:flex-row gap-10 mt-16">
//         {team.map((m) => (
//           <div key={m.name} className="flex-1">
//             <div className="w-full h-[384px] overflow-hidden">
//               <img
//                 src={m.img}
//                 alt={m.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h4 className="font-sora text-[26px] mt-4 text-black">{m.name}</h4>
//             <p className="font-sora font-light text-[18px] text-black/70">
//               {m.role}
//             </p>
//             <div className="flex items-center gap-3 mt-3">
//               {[Facebook, Instagram, Linkedin].map((Icon, i) => (
//                 <span
//                   key={i}
//                   className="w-8 h-8 rounded-full border border-black flex items-center justify-center"
//                 >
//                   <Icon size={13} />
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Product Portfolio grid                                             */
// /* ------------------------------------------------------------------ */
// const products = [
//   "https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139834-6b1851ce9a55?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1622037022824-0c71d511ee4d?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139962-020c76b18d18?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139929-0f0bdf9d5d0e?q=80&w=700&auto=format&fit=crop",
// ];

// const ProductPortfolio = () => (
//   <section className="max-w-[1276px] mx-auto px-6 py-28">
//     <SectionHeading
//       eyebrow="06 // Our Portfolio"
//       line1="Maheen Creates"
//       italic="All of Your"
//       line2="beautiful Products"
//       center
//     />

//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
//       {products.map((img, i) => (
//         <div key={i} className="flex flex-col gap-3">
//           <div className="w-full aspect-[610/620] overflow-hidden bg-black/5">
//             <img
//               src={img}
//               alt="product"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <span className="font-sora text-[24px] text-black">XYZ</span>
//         </div>
//       ))}
//     </div>

//     <div className="flex justify-center mt-16">
//       <CornerBorderButton>Explore Now</CornerBorderButton>
//     </div>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Testimonial                                                        */
// /* ------------------------------------------------------------------ */
// const Testimonial = () => (
//   <section
//     className="relative w-full py-24 overflow-hidden"
//     style={{
//       backgroundImage:
//         "linear-gradient(270deg, rgba(0,0,0,0) 0%, #000 100%), url(https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=1600&auto=format&fit=crop)",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}
//   >
//     <div className="max-w-[1300px] mx-auto px-6">
//       <div className="bg-[#1E1E1E]/80 rounded-md p-12 max-w-[720px]">
//         <div className="flex gap-1 text-[#9AD2ED] mb-6">
//           {"★★★★★".split("").map((s, i) => (
//             <span key={i}>{s}</span>
//           ))}
//         </div>
//         <p className="font-sora font-light text-[20px] leading-[1.7] text-[#DDDDDD] mb-10">
//           "Superior buttons and exceptional service. Thank you, Maheen
//           Accessories!"
//         </p>
//         <div className="flex items-center gap-4 pt-6 border-t border-[#3C3C3C]">
//           <div className="w-[70px] h-[70px] rounded-full border-4 border-white/25 overflow-hidden">
//             <img
//               src="https://randomuser.me/api/portraits/men/61.jpg"
//               alt="Mir Mahatuduh Hasan"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div>
//             <h4 className="font-sora text-white text-[24px]">
//               Mir Mahatuduh Hasan
//             </h4>
//             <p className="font-sora font-light text-[16px] text-[#DDDDDD]">
//               Chicago
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-3 mt-8">
//         <button className="w-[54px] h-[54px] rounded-full border border-dashed border-white flex items-center justify-center text-white">
//           <ChevronLeft size={17} />
//         </button>
//         <button className="w-[54px] h-[54px] rounded-full border border-dashed border-white bg-white/10 flex items-center justify-center text-white">
//           <ChevronRight size={17} />
//         </button>
//       </div>
//     </div>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Partners                                                           */
// /* ------------------------------------------------------------------ */
// const Partners = () => (
//   <section className="max-w-[1276px] mx-auto px-6 py-28">
//     <SectionHeading
//       eyebrow="06 // Our Partners"
//       line1="Meet Our"
//       italic="Working"
//       line2="Partners"
//       center
//     />
//     <div className="flex flex-col md:flex-row gap-10 mt-16">
//       {["H&M", "PRIMARK", "M&S"].map((brand) => (
//         <div
//           key={brand}
//           className="flex-1 border border-black/30 h-[260px] flex items-center justify-center"
//         >
//           <span className="font-hero text-[42px] tracking-wide text-black/80">
//             {brand}
//           </span>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Blog / News                                                        */
// /* ------------------------------------------------------------------ */
// const posts = [
//   {
//     date: "25 Sep 2023",
//     title: "Maheen Accessories participation at GAPEXPO, ICCB Dhaka.",
//     img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=700&auto=format&fit=crop",
//   },
//   {
//     date: "22 Sep 2023",
//     title: "New year 2024 celebration at Maheen Accessories",
//     img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=700&auto=format&fit=crop",
//   },
//   {
//     date: "22 Sep 2023",
//     title: "New year 2024 celebration at Maheen Accessories",
//     img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=700&auto=format&fit=crop",
//   },
// ];

// const Blog = () => (
//   <section className="max-w-[1466px] mx-auto px-6 py-28">
//     <SectionHeading
//       eyebrow="07 // Latest News"
//       line1="Our Activity"
//       italic="Related Blog"
//       right={
//         <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px] text-right">
//           We're deeply passionate about catching your lovely memories and
//           conveying your love for every moment of life as a whole.
//         </p>
//       }
//     />

//     <div className="flex flex-col md:flex-row gap-6 mt-16">
//       {posts.map((p, i) => (
//         <div key={i} className="flex-1 border border-black/80 p-5">
//           <div className="w-full h-[270px] overflow-hidden">
//             <img
//               src={p.img}
//               alt={p.title}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <span className="inline-block bg-[#8B68CE] text-white text-[13px] tracking-[0.4px] uppercase px-3 py-1 rounded mt-6">
//             {p.date}
//           </span>
//           <h4 className="font-sora font-bold text-[19px] leading-[1.6] text-black mt-4">
//             {p.title}
//           </h4>
//           <a
//             href="#"
//             className="font-sora font-bold text-[16px] mt-6 inline-flex items-center gap-2 text-black"
//           >
//             Read More <ArrowRight size={18} />
//           </a>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Contact                                                             */
// /* ------------------------------------------------------------------ */
// const contactInfo = [
//   {
//     icon: Mail,
//     label: "Our Mail",
//     value: "info@maheenaccessories.com",
//     cta: "Mail Now",
//   },
//   {
//     icon: Phone,
//     label: "Call Us",
//     value: "+8801713856882",
//     cta: "Call Now",
//   },
//   {
//     icon: MapPin,
//     label: "Our Address",
//     value: "House # 43/A, Road # 24, Gulshan-1, Dhaka 1212, Bangladesh.",
//     cta: "View Map",
//   },
// ];

// const Contact = () => (
//   <section className="max-w-[1300px] mx-auto px-6 py-28">
//     <div className="relative border border-black rounded-[10px] px-8 md:px-24 pt-20 pb-32">
//       <div className="text-center max-w-[700px] mx-auto">
//         <h2 className="font-sora text-[36px] md:text-[50px] tracking-[-1.06px] text-black">
//           Get In Touch
//         </h2>
//         <p className="font-sora font-light text-[18px] text-black leading-[1.55] mt-4">
//           Contact us for a great photography session &amp; beautiful captured
//           moments
//         </p>
//       </div>

//       <form className="max-w-[860px] mx-auto mt-16 flex flex-col gap-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input
//             placeholder="Name*"
//             className="font-sora font-light text-[17px] border-b border-black/30 pb-4 bg-transparent outline-none placeholder-black"
//           />
//           <input
//             placeholder="E-mail*"
//             className="font-sora font-light text-[17px] border-b border-black/30 pb-4 bg-transparent outline-none placeholder-black"
//           />
//         </div>
//         <input
//           placeholder="Subject"
//           className="font-sora font-light text-[17px] border-b border-black/30 pb-4 bg-transparent outline-none placeholder-black"
//         />
//         <textarea
//           placeholder="Text"
//           rows={4}
//           className="font-sora font-light text-[17px] border-b border-black/30 pb-4 bg-transparent outline-none placeholder-black resize-none"
//         />
//         <div className="flex justify-center mt-8">
//           <CornerBorderButton>Explore Now</CornerBorderButton>
//         </div>
//       </form>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
//         {contactInfo.map((c) => (
//           <div key={c.label} className="flex items-start gap-5">
//             <div className="w-14 h-14 rounded-full bg-gradient-to-t from-[#8B68CE] to-[#9AD2ED] flex items-center justify-center shrink-0">
//               <c.icon size={22} className="text-white" />
//             </div>
//             <div>
//               <h4 className="font-sora text-[24px] text-black">{c.label}</h4>
//               <p className="font-sora font-light text-[16px] text-black mt-1 underline">
//                 {c.value}
//               </p>
//               <a
//                 href="#"
//                 className="font-sora font-semibold text-[15px] uppercase underline mt-3 inline-block"
//               >
//                 {c.cta}
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Instagram strip                                                    */
// /* ------------------------------------------------------------------ */
// const igImages = [
//   "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=500&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=500&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=500&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139834-6b1851ce9a55?q=80&w=500&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139962-020c76b18d18?q=80&w=500&auto=format&fit=crop",
// ];

// const InstagramStrip = () => (
//   <section className="relative w-full">
//     <div className="grid grid-cols-2 sm:grid-cols-5">
//       {igImages.map((img, i) => (
//         <div key={i} className="aspect-square overflow-hidden">
//           <img
//             src={img}
//             alt="instagram"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       ))}
//     </div>
//     <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/60 backdrop-blur px-10 py-7 flex flex-col items-center gap-2">
//       <Instagram size={26} />
//       <span className="font-sora text-[13px] uppercase tracking-wide">
//         Follow Us on Instagram
//       </span>
//     </button>
//   </section>
// );

// /* ------------------------------------------------------------------ */
// /*  Footer                                                              */
// /* ------------------------------------------------------------------ */
// const footerCols = [
//   ["About Us", "Our Management", "Products", "Gallery", "Policies"],
//   [
//     "Sustainability",
//     "Product Facilities",
//     "Our Partners",
//     "Latest News",
//     "Contact Us",
//   ],
// ];

// const Footer = () => (
//   <footer className="w-full text-white" style={{ background: "#121212" }}>
//     <div className="max-w-[1276px] mx-auto px-6 pt-20 pb-10">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//         <ul className="flex flex-col gap-6">
//           {footerCols[0].map((l) => (
//             <li key={l}>
//               <a
//                 href="#"
//                 className="font-sora text-[16px] tracking-[3px] uppercase text-[#DDDDDD]"
//               >
//                 {l}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="flex flex-col items-center gap-8 text-center">
//           <div className="flex items-center gap-2">
//             <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#8B68CE] to-[#9AD2ED]" />
//             <span className="font-hero uppercase tracking-widest text-sm">
//               Maheen Accessories Ltd.
//             </span>
//           </div>
//           <p className="font-sora uppercase text-[18px] tracking-[2px] text-[#DDDDDD]">
//             Express your thought via Email
//           </p>
//           <form className="w-full max-w-[420px] flex border border-[#3C3C3C]">
//             <input
//               placeholder="Enter your email"
//               className="flex-1 bg-transparent px-5 py-4 font-sora font-light text-[15px] text-[#6C757D] outline-none"
//             />
//             <button className="px-6 flex items-center gap-2 font-sora text-[12px] uppercase tracking-[2px] text-[#DDDDDD]">
//               Send <Send size={14} />
//             </button>
//           </form>
//         </div>

//         <ul className="flex flex-col gap-6 items-start md:items-end text-left md:text-right">
//           {footerCols[1].map((l) => (
//             <li key={l}>
//               <a
//                 href="#"
//                 className="font-sora text-[16px] tracking-[3px] uppercase text-[#DDDDDD]"
//               >
//                 {l}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
//         <span className="font-sora font-light text-[16px] text-white">
//           Goinnovior
//         </span>
//         <span className="font-sora font-light text-[16px] text-[#DDDDDD]">
//           Maheen Accessories Limited, All Rights Reserved
//         </span>
//         <div className="flex items-center gap-3">
//           {[Facebook, Instagram, Linkedin].map((Icon, i) => (
//             <span
//               key={i}
//               className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
//             >
//               <Icon size={13} />
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   </footer>
// );

/* ------------------------------------------------------------------ */
/*  Home                                                               */
/* ------------------------------------------------------------------ */
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PhotoAlbums from "@/components/PhotoAlbums";
import About from "@/components/About";
import Features from "@/components/Features";
import Policies from "@/components/Policies";
import Management from "@/components/Management";
import ProductPortfolio from "@/components/ProductPortfolio";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import InstagramStrip from "@/components/InstagramStrip";
export default function Home() {
  return (
    <div className="w-full bg-white font-sora overflow-x-hidden">
      <FontImport />
      {/* <Header /> */}
      <Hero />
      <Services />
      <PhotoAlbums />
      <About />
      <Features />
      <Policies />
      <Management />
      <ProductPortfolio />
      <Testimonial />
      <Partners />
      <Blog />
      <Contact />
      <InstagramStrip />
      {/* <Footer /> */}
    </div>
  );
}
