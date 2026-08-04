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

// const Send = (p) => (
//   <Icon {...p}>
//     <path d="m22 2-7 20-4-9-9-4Z" />
//     <path d="M22 2 11 13" />
//     );
//   </Icon>
// );

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

// export default function Footer() {
//   return (
//     <footer className="w-full text-white" style={{ background: "#121212" }}>
//       <div className="max-w-[1276px] mx-auto px-6 pt-20 pb-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           <ul className="flex flex-col gap-6">
//             {footerCols[0].map((l) => (
//               <li key={l}>
//                 <a
//                   href="#"
//                   className="font-sora text-[16px] tracking-[3px] uppercase text-[#DDDDDD]"
//                 >
//                   {l}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <div className="flex flex-col items-center gap-8 text-center">
//             <div className="flex items-center gap-2">
//               <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#8B68CE] to-[#9AD2ED]" />
//               <span className="font-hero uppercase tracking-widest text-sm">
//                 Maheen Accessories Ltd.
//               </span>
//             </div>
//             <p className="font-sora uppercase text-[18px] tracking-[2px] text-[#DDDDDD]">
//               Express your thought via Email
//             </p>
//             <form className="w-full max-w-[420px] flex border border-[#3C3C3C]">
//               <input
//                 placeholder="Enter your email"
//                 className="flex-1 bg-transparent px-5 py-4 font-sora font-light text-[15px] text-[#6C757D] outline-none"
//               />
//               <button className="px-6 flex items-center gap-2 font-sora text-[12px] uppercase tracking-[2px] text-[#DDDDDD]">
//                 Send <Send size={14} />
//               </button>
//             </form>
//           </div>

//           <ul className="flex flex-col gap-6 items-start md:items-end text-left md:text-right">
//             {footerCols[1].map((l) => (
//               <li key={l}>
//                 <a
//                   href="#"
//                   className="font-sora text-[16px] tracking-[3px] uppercase text-[#DDDDDD]"
//                 >
//                   {l}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
//           <span className="font-sora font-light text-[16px] text-white">
//             Goinnovior
//           </span>
//           <span className="font-sora font-light text-[16px] text-[#DDDDDD]">
//             Maheen Accessories Limited, All Rights Reserved
//           </span>
//           <div className="flex items-center gap-3">
//             {[Facebook, Instagram, Linkedin].map((Icon, i) => (
//               <span
//                 key={i}
//                 className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
//               >
//                 <Icon size={13} />
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// Version 2 Responsive
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

const Send = (p) => (
  <Icon {...p}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </Icon>
);

const footerCols = [
  ["About Us", "Our Management", "Products", "Gallery", "Policies"],
  [
    "Sustainability",
    "Product Facilities",
    "Our Partners",
    "Latest News",
    "Contact Us",
  ],
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] text-white">
      <div className="mx-auto max-w-[1276px] px-5 sm:px-8 lg:px-10 pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
        {/* Top */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Left */}
          <ul className="flex flex-col gap-4 sm:gap-5 lg:gap-6 text-center lg:text-left">
            {footerCols[0].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-sora text-sm sm:text-[15px] lg:text-base tracking-[2px] lg:tracking-[3px] uppercase text-[#DDDDDD] transition hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Center */}
          <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              {/* <div className="h-9 w-9 rounded-full bg-gradient-to-b from-[#8B68CE] to-[#9AD2ED]" />

              <span className="font-hero text-xs sm:text-sm uppercase tracking-[3px]">
                Maheen Accessories Ltd.
              </span> */}
              <img src="/Logo.png" alt="Maheen Accessories Logo" />
            </div>

            <p className="font-sora text-base sm:text-lg uppercase tracking-[2px] text-[#DDDDDD]">
              Express your thought via Email
            </p>

            <form className="flex w-full max-w-[460px] flex-col overflow-hidden border border-[#3C3C3C] sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-5 py-4 text-sm sm:text-[15px] font-light text-white placeholder:text-[#6C757D] outline-none"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 border-t border-[#3C3C3C] px-6 py-4 text-xs uppercase tracking-[2px] text-[#DDDDDD] transition hover:bg-white hover:text-black sm:border-l sm:border-t-0"
              >
                Send
                <Send size={14} />
              </button>
            </form>
          </div>

          {/* Right */}
          <ul className="flex flex-col gap-4 sm:gap-5 lg:gap-6 text-center lg:items-end lg:text-right">
            {footerCols[1].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-sora text-sm sm:text-[15px] lg:text-base tracking-[2px] lg:tracking-[3px] uppercase text-[#DDDDDD] transition hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 sm:pt-8 lg:flex-row">
          <span className="font-sora text-sm sm:text-base font-light">
            Goinnovior
          </span>

          <span className="text-center font-sora text-sm sm:text-base font-light text-[#DDDDDD]">
            © Maheen Accessories Limited. All Rights Reserved.
          </span>

          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin].map((SocialIcon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white transition hover:bg-white hover:text-black"
              >
                <SocialIcon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
