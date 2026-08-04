// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

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

// const ArrowRight = (p) => (
//   <Icon {...p}>
//     <path d="M5 12h14M13 6l6 6-6 6" />
//   </Icon>
// );

// const Eyebrow = ({ children }) => (
//   <p
//     className="font-sora text-[18px] font-bold uppercase leading-[32px] tracking-wide"
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
//     className={`flex flex-col gap-8 md:flex-row ${
//       center
//         ? "items-center text-center"
//         : "items-start justify-between md:items-end"
//     }`}
//   >
//     <div>
//       <Eyebrow>{eyebrow}</Eyebrow>

//       <h2 className="mt-2 font-sora text-[36px] leading-[1.15] tracking-[-1.06px] text-black md:text-[50px]">
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

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_ADMIN_API}/api/blog`,
//         );

//         if (!res.ok) {
//           throw new Error("Failed to fetch blogs");
//         }

//         const data = await res.json();
//         setPosts(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   return (
//     <section className="mx-auto max-w-[1466px] px-6 py-28">
//       <SectionHeading
//         eyebrow="07 // Latest News"
//         line1="Our Activity"
//         italic="Related Blog"
//         right={
//           <p className="max-w-[620px] text-right font-sora text-[18px] font-light leading-[1.55] text-black/70">
//             We&apos;re deeply passionate about catching your lovely memories and
//             conveying your love for every moment of life as a whole.
//           </p>
//         }
//       />

//       {loading ? (
//         <div className="mt-16 text-center text-gray-500">Loading blogs...</div>
//       ) : (
//         <div className="mt-16 flex flex-col gap-6 md:flex-row">
//           {posts.map((post) => (
//             <div key={post._id} className="flex-1 border border-black/80 p-5">
//               <div className="relative h-[270px] w-full overflow-hidden">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   sizes="(max-width:768px) 100vw, 33vw"
//                   className="object-cover transition duration-500 hover:scale-105"
//                 />
//               </div>

//               <span className="mt-6 inline-block rounded bg-[#8B68CE] px-3 py-1 text-[13px] uppercase tracking-[0.4px] text-white">
//                 {formatDate(post.createdAt)}
//               </span>

//               <h4 className="mt-4 font-sora text-[19px] font-bold leading-[1.6] text-black">
//                 {post.title}
//               </h4>

//               <Link
//                 href={post.cta?.href || "/"}
//                 className="mt-6 inline-flex items-center gap-2 font-sora text-[16px] font-bold text-black transition hover:text-[#8B68CE]"
//               >
//                 {post.cta?.text || "Read More"}
//                 <ArrowRight size={18} />
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

//  Version 2 Responsive
"use client";

import Image from "next/image";
import Link from "next/link";
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

const ArrowRight = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
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

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/blog`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();

        setPosts(data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <section className="max-w-[1466px] mx-auto px-5 sm:px-8 lg:px-10 py-20 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="07 // Latest News"
        line1="Our Activity"
        italic="Related Blog"
        right={
          <p
            className="
              font-sora
              font-light
              leading-relaxed
              text-black/70
              text-[15px]
              sm:text-base
              lg:text-lg
              max-w-[620px]
              text-left
              lg:text-right
            "
          >
            We&apos;re deeply passionate about catching your lovely memories and
            conveying your love for every moment of life as a whole.
          </p>
        }
      />

      {loading ? (
        <div className="mt-16 text-center text-gray-500">Loading blogs...</div>
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
            gap-6
            lg:gap-8
          "
        >
          {posts.map((post) => (
            <article
              key={post._id}
              className="
                border
                border-black/80
                p-5
                sm:p-6
                transition
                duration-300
                hover:shadow-lg
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  w-full
                  h-[220px]
                  sm:h-[260px]
                  lg:h-[300px]
                "
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width:640px) 100vw,
                         (max-width:1280px) 50vw,
                         33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <span
                className="
                  inline-block
                  mt-5
                  rounded
                  bg-[#8B68CE]
                  px-3
                  py-1
                  text-xs
                  sm:text-sm
                  uppercase
                  tracking-wide
                  text-white
                "
              >
                {formatDate(post.createdAt)}
              </span>

              <h4
                className="
                  mt-4
                  font-sora
                  font-bold
                  text-black
                  leading-snug
                  text-lg
                  sm:text-xl
                  lg:text-[22px]
                "
              >
                {post.title}
              </h4>

              <Link
                href={post.cta?.href || "/"}
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                  font-sora
                  font-semibold
                  text-sm
                  sm:text-base
                  text-black
                  transition-colors
                  hover:text-[#8B68CE]
                "
              >
                {post.cta?.text || "Read More"}

                <ArrowRight size={18} />
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
