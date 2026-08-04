// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Eyebrow = ({ children }) => (
//   <p
//     className="font-sora font-bold uppercase text-[18px] leading-[32px]"
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

// const Icon = ({ children, size = 18, className = "", strokeWidth = 1.8 }) => (
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

// const ArrowUpRight = (props) => (
//   <Icon {...props}>
//     <path d="M7 17L17 7" />
//     <path d="M9 7H17V15" />
//   </Icon>
// );

// const CornerBorderButton = ({ children }) => {
//   return (
//     <button
//       className="
//         relative
//         w-[194px]
//         h-[50px]
//         flex
//         items-center
//         justify-center
//         gap-3
//         bg-black/[0.05]
//         font-sora
//         text-[14px]
//         tracking-[0.8px]
//         capitalize
//         transition-all
//         duration-300
//         hover:bg-black/[0.08]
//       "
//     >
//       <span className="absolute top-0 left-0 w-3 h-3 border-l border-t border-black" />

//       <span className="absolute top-0 right-0 w-3 h-3 border-r border-t border-black" />

//       <span className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-black" />

//       <span className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-black" />

//       <span>{children}</span>

//       <ArrowUpRight size={15} />
//     </button>
//   );
// };

// const SectionHeading = ({ right }) => (
//   <div className="flex justify-between items-start gap-20">
//     <div className="max-w-[734px]">
//       <Eyebrow>03 // ABOUT COMPANY</Eyebrow>

//       <h2 className="mt-3 font-sora font-normal text-[50px] leading-[60px] tracking-[-1.06px] text-black">
//         Maheen Creates{" "}
//         <span
//           className="font-playfair italic text-[48.4px]"
//           style={{
//             fontFamily: "Playfair Display",
//           }}
//         >
//           What You need
//         </span>
//         <br />
//         <span className="text-[35.4px] leading-[71px] tracking-[-1.25px]">
//           precision, passion, and a touch of creativity.
//         </span>
//       </h2>
//     </div>

//     {right}
//   </div>
// );

// export default function About() {
//   const [about, setAbout] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAbout = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about`,
//         );

//         const data = await res.json();

//         setAbout(data[0] || null);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAbout();
//   }, []);

//   if (loading) {
//     return <section className="py-40 text-center">Loading...</section>;
//   }

//   if (!about) {
//     return (
//       <section className="py-40 text-center">
//         No about information found.
//       </section>
//     );
//   }

//   return (
//     <section className="relative max-w-[1466px] mx-auto pt-[80px] pb-[80px]">
//       <SectionHeading
//         right={<CornerBorderButton>Explore Now</CornerBorderButton>}
//       />

//       <div className="flex justify-between items-start mt-[110px] gap-[80px]">
//         {/* Left Image */}
//         <div className="relative w-[673px] h-[433px] flex-shrink-0">
//           {/* Blur Background */}
//           <div
//             className="absolute w-[373px] h-[373px] rounded-full z-0"
//             style={{
//               right: "-110px",
//               bottom: "-70px",
//               background: "rgba(154,210,237,0.25)",
//               filter: "blur(48.85px)",
//             }}
//           />

//           {/* Main Image */}
//           <div className="relative w-full h-full overflow-hidden z-10">
//             <Image
//               src={about.image}
//               alt={about.title}
//               fill
//               priority
//               className="object-cover"
//             />
//           </div>

//           {/* Circle CTA */}
//           <a
//             href={about.cta?.href || "#"}
//             className="
//               absolute
//               z-20
//               w-[170px]
//               h-[170px]
//               rounded-full
//               flex
//               items-center
//               justify-center
//               gap-2
//               text-white
//               font-sora
//               text-[14px]
//               tracking-[0.8px]
//               capitalize
//               transition-all
//               duration-300
//               hover:scale-105
//             "
//             style={{
//               right: "-72px",
//               bottom: "-42px",
//               background:
//                 "linear-gradient(122.37deg,#9AD2ED 16.6%,#8B68CE 93.82%)",
//             }}
//           >
//             <span>Explore Us</span>

//             <ArrowUpRight size={15} className="text-white" />
//           </a>
//         </div>

//         {/* Right Content */}
//         <div className="w-[714px] flex flex-col gap-[34px]">
//           {/* Heading */}
//           <div className="flex items-center gap-[25px]">
//             <h3 className="font-sora font-normal uppercase text-[30px] leading-[40px] text-black whitespace-nowrap">
//               {about.title}
//             </h3>

//             <div className="flex-1 h-px bg-black max-w-[150px]" />
//           </div>

//           {/* Subtitle */}
//           <p
//             className="
//               font-sora
//               font-light
//               text-[22px]
//               leading-[34px]
//               text-black/70
//             "
//           >
//             {about.subtitle}
//           </p>

//           {/* Description */}
//           <p
//             className="
//               font-sora
//               font-light
//               text-[15px]
//               leading-[28px]
//               text-black/70
//               text-justify
//               whitespace-pre-line
//             "
//           >
//             {about.description}
//           </p>
//         </div>
//       </div>
//       {/* </div> */}
//     </section>
//   );
// }

// Version 2 Responsive
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Eyebrow = ({ children }) => (
  <p
    className="font-sora font-bold uppercase text-xs sm:text-sm lg:text-base leading-6 sm:leading-8"
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

const Icon = ({ children, size = 18, className = "", strokeWidth = 1.8 }) => (
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

const ArrowUpRight = (props) => (
  <Icon {...props}>
    <path d="M7 17L17 7" />
    <path d="M9 7H17V15" />
  </Icon>
);

const CornerBorderButton = ({ children }) => (
  <button
    className="
      relative
      w-full
      sm:w-[190px]
      h-12
      flex
      items-center
      justify-center
      gap-3
      bg-black/5
      hover:bg-black/10
      transition
      font-sora
      text-sm
      tracking-wide
    "
  >
    <span className="absolute top-0 left-0 w-3 h-3 border-l border-t border-black" />
    <span className="absolute top-0 right-0 w-3 h-3 border-r border-t border-black" />
    <span className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-black" />
    <span className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-black" />

    {children}

    <ArrowUpRight size={15} />
  </button>
);

const SectionHeading = ({ right }) => (
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-16">
    <div className="max-w-4xl">
      <Eyebrow>03 // ABOUT COMPANY</Eyebrow>

      <h2
        className="
          mt-4
          font-sora
          font-normal
          text-black
          leading-tight
          tracking-tight
          text-[32px]
          sm:text-[40px]
          md:text-[48px]
          lg:text-[56px]
        "
      >
        Maheen Creates{" "}
        <span
          className="italic font-normal"
          style={{
            fontFamily: "Playfair Display",
          }}
        >
          What You Need
        </span>
        <br />
        <span
          className="
            text-[22px]
            sm:text-[28px]
            md:text-[32px]
            lg:text-[36px]
          "
        >
          precision, passion, and a touch of creativity.
        </span>
      </h2>
    </div>

    <div className="w-full sm:w-auto">{right}</div>
  </div>
);

export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about`,
        );

        const data = await res.json();

        setAbout(data[0] || null);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  if (loading) {
    return <section className="py-24 text-center">Loading...</section>;
  }

  if (!about) {
    return (
      <section className="py-24 text-center">
        No about information found.
      </section>
    );
  }

  return (
    <section className="max-w-[1466px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-0 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        right={<CornerBorderButton>Explore Now</CornerBorderButton>}
      />

      <div className="mt-14 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative w-full">
          {/* Blur */}
          <div
            className="
              absolute
              right-[-40px]
              bottom-[-30px]
              sm:right-[-70px]
              sm:bottom-[-50px]
              w-52
              h-52
              sm:w-72
              sm:h-72
              lg:w-[370px]
              lg:h-[370px]
              rounded-full
              z-0
            "
            style={{
              background: "rgba(154,210,237,.25)",
              filter: "blur(50px)",
            }}
          />

          {/* Main Image */}
          <div
            className="
              relative
              overflow-hidden
              z-10
              w-full
              h-[260px]
              sm:h-[380px]
              md:h-[450px]
              lg:h-[500px]
              xl:h-[520px]
            "
          >
            <Image
              src={about.image}
              alt={about.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Circle Button */}
          <a
            href={about.cta?.href || "#"}
            className="
              absolute
              z-20
              flex
              items-center
              justify-center
              gap-2
              rounded-full
              text-white
              font-sora
              text-xs
              sm:text-sm
              hover:scale-105
              transition
            "
            style={{
              width: "clamp(90px,18vw,170px)",
              height: "clamp(90px,18vw,170px)",
              right: "clamp(-15px,-4vw,-70px)",
              bottom: "clamp(-15px,-3vw,-40px)",
              background:
                "linear-gradient(122.37deg,#9AD2ED 16.6%,#8B68CE 93.82%)",
            }}
          >
            <span>Explore Us</span>

            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-5">
            <h3
              className="
                uppercase
                whitespace-nowrap
                font-sora
                text-xl
                sm:text-2xl
                lg:text-3xl
              "
            >
              {about.title}
            </h3>

            <div className="flex-1 h-px bg-black" />
          </div>

          <p
            className="
              font-sora
              font-light
              text-lg
              sm:text-xl
              lg:text-[22px]
              leading-relaxed
              text-black/70
            "
          >
            {about.subtitle}
          </p>

          <p
            className="
              whitespace-pre-line
              text-justify
              font-sora
              font-light
              text-sm
              sm:text-[15px]
              lg:text-base
              leading-7
              sm:leading-8
              text-black/70
            "
          >
            {about.description}
          </p>
        </div>
      </div>
    </section>
  );
}
