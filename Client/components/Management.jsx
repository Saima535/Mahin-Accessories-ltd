// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

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
//         {line2 && (
//           <>
//             <br />
//             {line2}
//           </>
//         )}
//       </h2>
//     </div>

//     {right}
//   </div>
// );

// export default function Management() {
//   const [team, setTeam] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         // const res = await fetch("http://localhost:3000/api/member", {
//         //   cache: "no-store",
//         // });

//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_ADMIN_API}/api/member`,
//         );

//         if (!res.ok) {
//           throw new Error("Failed to fetch members");
//         }

//         const data = await res.json();
//         setTeam(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   return (
//     <section
//       className="w-full py-28"
//       style={{ background: "rgba(154,210,237,0.1)" }}
//     >
//       <div className="max-w-[1466px] mx-auto px-6">
//         <SectionHeading
//           eyebrow="05 // Our Management"
//           line1="Our Core Members"
//           italic="Of The Board"
//           right={
//             <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px] text-right">
//               Introducing our team of talented and skilled professionals ready
//               to increase productivity and bring your business to new levels of
//               efficiency and sustainability.
//             </p>
//           }
//         />

//         {loading ? (
//           <div className="mt-16 text-center font-sora text-lg">Loading...</div>
//         ) : (
//           <div className="flex flex-col md:flex-row gap-10 mt-16">
//             {team.map((member) => (
//               <div key={member._id} className="flex-1">
//                 <div className="relative w-full h-[384px] overflow-hidden">
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width:768px) 100vw, 33vw"
//                   />
//                 </div>

//                 <h4 className="font-sora text-[26px] mt-4 text-black">
//                   {member.name}
//                 </h4>

//                 <p className="font-sora font-light text-[18px] text-black/70">
//                   {member.designation}
//                 </p>

//                 <div className="flex items-center gap-3 mt-3">
//                   <a
//                     href={member.facebook?.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-8 h-8 rounded-full border border-black flex items-center justify-center transition hover:bg-black hover:text-white"
//                     aria-label="Facebook"
//                   >
//                     <Facebook size={13} />
//                   </a>

//                   <a
//                     href={member.instagram?.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-8 h-8 rounded-full border border-black flex items-center justify-center transition hover:bg-black hover:text-white"
//                     aria-label="Instagram"
//                   >
//                     <Instagram size={13} />
//                   </a>

//                   <a
//                     href={member.linkedin?.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-8 h-8 rounded-full border border-black flex items-center justify-center transition hover:bg-black hover:text-white"
//                     aria-label="LinkedIn"
//                   >
//                     <Linkedin size={13} />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// Version 2 Responsive
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

const Instagram = (p) => (
  <Icon {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </Icon>
);

const Facebook = (p) => (
  <Icon {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Icon>
);

const Linkedin = (p) => (
  <Icon {...p}>
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path d="M6 9v8M6 6v.01M10 17v-5a2 2 0 0 1 4 0v5M14 12v5" />
  </Icon>
);

const Eyebrow = ({ children }) => (
  <p
    className="font-sora font-bold uppercase tracking-[2px] text-xs sm:text-sm lg:text-base leading-6 sm:leading-8"
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
    className={`flex flex-col lg:flex-row ${
      center
        ? "items-center text-center"
        : "items-start lg:items-end justify-between"
    } gap-8 lg:gap-14`}
  >
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2
        className="
          mt-3
          font-sora
          font-normal
          leading-tight
          tracking-tight
          text-black
          text-[30px]
          sm:text-[40px]
          md:text-[48px]
          lg:text-[56px]
        "
      >
        {line1} <span className="font-display italic">{italic}</span>
        {line2 && (
          <>
            <br />
            {line2}
          </>
        )}
      </h2>
    </div>

    <div className="w-full lg:w-auto">{right}</div>
  </div>
);

export default function Management() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/member`,
        );

        if (!res.ok) throw new Error("Failed to fetch members");

        const data = await res.json();
        setTeam(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <section
      className="w-full py-20 sm:py-24 lg:py-28"
      style={{ background: "rgba(154,210,237,.1)" }}
    >
      <div className="max-w-[1466px] mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="05 // Our Management"
          line1="Our Core Members"
          italic="Of The Board"
          right={
            <p
              className="
                font-sora
                font-light
                text-black/70
                text-[15px]
                sm:text-base
                lg:text-lg
                leading-relaxed
                max-w-[620px]
                text-left
                lg:text-right
              "
            >
              Introducing our team of talented and skilled professionals ready
              to increase productivity and bring your business to new levels of
              efficiency and sustainability.
            </p>
          }
        />

        {loading ? (
          <div className="mt-16 text-center font-sora text-lg">Loading...</div>
        ) : (
          <div
            className="
              mt-12
              sm:mt-14
              lg:mt-16
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              gap-8
              lg:gap-10
            "
          >
            {team.map((member) => (
              <div key={member._id} className="group">
                <div
                  className="
                    relative
                    overflow-hidden
                    w-full
                    h-[280px]
                    sm:h-[340px]
                    md:h-[380px]
                    lg:h-[420px]
                  "
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width:640px) 100vw,
                           (max-width:1280px) 50vw,
                           33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h4
                  className="
                    mt-5
                    font-sora
                    text-black
                    text-xl
                    sm:text-2xl
                    lg:text-[28px]
                  "
                >
                  {member.name}
                </h4>

                <p
                  className="
                    mt-1
                    font-sora
                    font-light
                    text-black/70
                    text-base
                    sm:text-lg
                  "
                >
                  {member.designation}
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <a
                    href={member.facebook?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      rounded-full
                      border
                      border-black
                      transition
                      hover:bg-black
                      hover:text-white
                    "
                  >
                    <Facebook size={15} />
                  </a>

                  <a
                    href={member.instagram?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      rounded-full
                      border
                      border-black
                      transition
                      hover:bg-black
                      hover:text-white
                    "
                  >
                    <Instagram size={15} />
                  </a>

                  <a
                    href={member.linkedin?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      rounded-full
                      border
                      border-black
                      transition
                      hover:bg-black
                      hover:text-white
                    "
                  >
                    <Linkedin size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
