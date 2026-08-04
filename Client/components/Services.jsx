// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Eyebrow = ({ children }) => (
//   <p className="font-sora font-bold uppercase tracking-wide text-[16px] leading-[24px] text-[#8B68CE]">
//     {children}
//   </p>
// );

// const SectionHeading = ({ eyebrow, line1, italic, right }) => (
//   <div className="flex flex-col lg:flex-row justify-between gap-10 items-start lg:items-end">
//     <div>
//       <Eyebrow>{eyebrow}</Eyebrow>

//       <h2 className="mt-3 font-sora text-[36px] md:text-[52px] font-normal leading-[1.1] text-black">
//         {line1} <span className="italic font-serif font-normal">{italic}</span>
//       </h2>
//     </div>

//     {right}
//   </div>
// );

// export default function Services() {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchServices() {
//       try {
//         // const res = await fetch("http://localhost:3000/api/service");
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_ADMIN_API}/api/service`,
//         );
//         const data = await res.json();
//         setServices(data || []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchServices();
//   }, []);

//   if (loading) {
//     return (
//       <section className="bg-white py-32">
//         <p className="text-center text-black">Loading...</p>
//       </section>
//     );
//   }

//   return (
//     <section className="relative overflow-hidden bg-white py-28">
//       {/* Decorative wavy lines background */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-70">
//         <svg
//           viewBox="0 0 1920 500"
//           className="w-full h-auto"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           {Array.from({ length: 25 }).map((_, i) => {
//             const offset = i * 6;
//             return (
//               <path
//                 key={i}
//                 d={`M -50 ${260 + offset} C 400 ${100 + offset}, 700 ${420 + offset}, 960 ${260 + offset} C 1220 ${100 + offset}, 1520 ${420 + offset}, 1970 ${260 + offset}`}
//                 stroke="#1a1a1a"
//                 strokeWidth="1"
//                 fill="none"
//               />
//             );
//           })}
//         </svg>
//       </div>

//       <div className="relative z-10 max-w-[1466px] mx-auto px-6">
//         <SectionHeading
//           eyebrow="01 // Services"
//           line1="Our Core"
//           italic="Services"
//           right={
//             <p className="font-sora font-normal text-black text-[16px] leading-[1.6] max-w-[500px]">
//               We specialize in developing products that meet{" "}
//               <span className="font-bold">world-class standards,</span> ensuring
//               every detail is perfect to bring your vision to life.
//             </p>
//           }
//         />

//         <div className="flex flex-col md:flex-row gap-4 mt-16">
//           {services.map((service, index) => (
//             <div key={service._id} className="flex-1">
//               {/* Card Image */}
//               <div className="relative h-[380px] rounded-[20px] overflow-hidden shadow-lg">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   sizes="(max-width:768px) 100vw, 33vw"
//                   className="object-cover"
//                 />
//               </div>

//               {/* Number + Title below the image */}
//               <div className="mt-6">
//                 <h3 className="font-bold text-[40px] leading-none text-[#3D3D3D]">
//                   {String(index + 1).padStart(2, "0")}
//                 </h3>

//                 <h4 className="mt-2 font-sora text-[20px] font-medium text-black">
//                   {service.title}
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Version 2 Responsive
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Eyebrow = ({ children }) => (
  <p className="font-sora font-bold uppercase tracking-[2px] text-xs sm:text-sm lg:text-base leading-6 text-[#8B68CE]">
    {children}
  </p>
);

const SectionHeading = ({ eyebrow, line1, italic, right }) => (
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-16">
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2
        className="
          mt-3
          font-sora
          font-normal
          leading-[1.1]
          text-black
          text-[30px]
          sm:text-[38px]
          md:text-[48px]
          lg:text-[56px]
        "
      >
        {line1} <span className="italic font-serif font-normal">{italic}</span>
      </h2>
    </div>

    <div className="max-w-xl">{right}</div>
  </div>
);

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/service`,
        );

        const data = await res.json();

        setServices(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <p className="text-center text-black text-base">Loading...</p>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-70">
        <svg
          viewBox="0 0 1920 500"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto scale-125 lg:scale-100"
        >
          {Array.from({ length: 25 }).map((_, i) => {
            const offset = i * 6;

            return (
              <path
                key={i}
                d={`M -50 ${260 + offset} C 400 ${100 + offset}, 700 ${
                  420 + offset
                }, 960 ${260 + offset} C 1220 ${100 + offset}, 1520 ${
                  420 + offset
                }, 1970 ${260 + offset}`}
                stroke="#1A1A1A"
                strokeWidth="1"
                fill="none"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-[1466px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-6">
        <SectionHeading
          eyebrow="01 // Services"
          line1="Our Core"
          italic="Services"
          right={
            <p
              className="
                font-sora
                text-[15px]
                sm:text-base
                lg:text-[16px]
                leading-relaxed
                text-black
              "
            >
              We specialize in developing products that meet{" "}
              <span className="font-bold">world-class standards,</span> ensuring
              every detail is perfect to bring your vision to life.
            </p>
          }
        />

        {/* Cards */}
        <div
          className="
            mt-12
            sm:mt-14
            lg:mt-16
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            lg:gap-8
          "
        >
          {services.map((service, index) => (
            <div key={service._id} className="group">
              {/* Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  shadow-lg
                  h-[260px]
                  sm:h-[320px]
                  md:h-[340px]
                  lg:h-[380px]
                "
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 100vw,
                         (max-width:1280px) 50vw,
                         33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-5 sm:mt-6">
                <h3
                  className="
                    font-bold
                    leading-none
                    text-[#3D3D3D]
                    text-[34px]
                    sm:text-[40px]
                    lg:text-[44px]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </h3>

                <h4
                  className="
                    mt-2
                    font-sora
                    font-medium
                    text-black
                    text-lg
                    sm:text-xl
                    lg:text-[22px]
                  "
                >
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
