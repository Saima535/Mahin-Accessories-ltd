// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

// export default function PhotoAlbums() {
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const fetchAlbums = async () => {
//       try {
//         // const res = await fetch("http://localhost:3000/api/album", {
//         //   cache: "no-store",
//         // });
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_ADMIN_API}/api/album`,
//         );

//         const data = await res.json();
//         setAlbums(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlbums();
//   }, []);

//   if (loading) {
//     return <section className="py-24 text-center">Loading...</section>;
//   }

//   if (!albums.length) {
//     return <section className="py-24 text-center">No photos found.</section>;
//   }

//   const total = albums.length;

//   const prevIndex = (index - 1 + total) % total;
//   const nextIndex = (index + 1) % total;

//   const goPrev = () => setIndex(prevIndex);
//   const goNext = () => setIndex(nextIndex);

//   const current = albums[index];

//   return (
//     <section className="relative w-full overflow-hidden bg-white py-24">
//       {/* Background Watermark */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center select-none">
//         <span
//           className="font-serif font-normal text-gray-300/70 leading-none whitespace-nowrap"
//           style={{
//             fontSize: "13vw",
//             letterSpacing: "0.05em",
//           }}
//         >
//           PORTFOLIO
//         </span>
//       </div>

//       {/* Header */}
//       <div className="relative z-10 mx-auto mb-16 max-w-3xl px-6 text-center">
//         <p className="mb-4 text-sm font-semibold tracking-wide text-gray-800">
//           <span className="text-indigo-400">02 //</span> PHOTO ALBUMS
//         </p>

//         <h2 className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl">
//           Collection of photos <span className="italic">All of Our</span>
//           <br />
//           Best Works
//         </h2>
//       </div>

//       {/* Slider */}
//       <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-center px-4">
//         {/* Left Arrow */}
//         <button onClick={goPrev} className="mr-4 hidden sm:flex">
//           <ArrowLeft size={28} strokeWidth={1.5} />
//         </button>

//         <div className="flex w-full items-center justify-center overflow-hidden">
//           {/* Left Preview */}
//           <div className="relative hidden h-[300px] w-1/4 -mr-6 overflow-hidden rounded-2xl md:block">
//             <Image
//               src={albums[prevIndex].image}
//               alt={albums[prevIndex].title}
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Main Image */}
//           <div className="relative z-10 h-[460px] w-full max-w-2xl overflow-hidden rounded-2xl shadow-xl">
//             <Image
//               src={current.image}
//               alt={current.title}
//               fill
//               priority
//               className="object-cover"
//             />

//             {/* Top Right Button */}
//             <button
//               onClick={goNext}
//               className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
//             >
//               <ChevronRight size={20} />
//             </button>

//             {/* Caption */}
//             <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/40 via-black/10 to-transparent px-6 pb-6 pt-10">
//               <p className="text-xl font-semibold text-white">
//                 {current.title}
//               </p>
//             </div>
//           </div>

//           {/* Right Preview */}
//           <div className="relative hidden h-[300px] w-1/4 -ml-6 overflow-hidden rounded-2xl md:block">
//             <Image
//               src={albums[nextIndex].image}
//               alt={albums[nextIndex].title}
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button onClick={goNext} className="ml-4 hidden sm:flex">
//           <ArrowRight size={28} strokeWidth={1.5} />
//         </button>
//       </div>

//       {/* Dots */}
//       <div className="relative z-10 mt-8 flex justify-center gap-2">
//         {albums.map((album, i) => (
//           <button
//             key={album._id}
//             onClick={() => setIndex(i)}
//             className={`h-1.5 rounded-full transition-all ${
//               i === index ? "w-6 bg-gray-900" : "w-1.5 bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// Version 2 Responsive
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

export default function PhotoAlbums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/album`,
        );

        const data = await res.json();
        setAlbums(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return <section className="py-20 sm:py-24 text-center">Loading...</section>;
  }

  if (!albums.length) {
    return (
      <section className="py-20 sm:py-24 text-center">No photos found.</section>
    );
  }

  const total = albums.length;

  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  const goPrev = () => setIndex(prevIndex);
  const goNext = () => setIndex(nextIndex);

  const current = albums[index];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center select-none">
        <span
          className="font-serif leading-none whitespace-nowrap text-gray-300/60"
          style={{
            fontSize: "clamp(56px,13vw,220px)",
            letterSpacing: "0.05em",
          }}
        >
          PORTFOLIO
        </span>
      </div>

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center mb-12 sm:mb-16">
        <p className="mb-3 sm:mb-4 uppercase tracking-[2px] font-semibold text-xs sm:text-sm text-gray-800">
          <span className="text-indigo-500">02 //</span> PHOTO ALBUMS
        </p>

        <h2
          className="
            font-serif
            leading-tight
            text-gray-900
            text-[30px]
            sm:text-[40px]
            md:text-[50px]
            lg:text-[58px]
          "
        >
          Collection of photos <span className="italic">All of Our</span>
          <br className="hidden sm:block" />
          Best Works
        </h2>
      </div>

      {/* Slider */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="hidden lg:flex mr-5 rounded-full p-2 hover:bg-gray-100 transition"
          >
            <ArrowLeft size={28} strokeWidth={1.5} />
          </button>

          <div className="flex w-full items-center justify-center">
            {/* Left Preview */}
            <div
              className="
                relative
                hidden
                lg:block
                w-[22%]
                h-[260px]
                xl:h-[320px]
                overflow-hidden
                rounded-2xl
                -mr-8
                opacity-80
              "
            >
              <Image
                src={albums[prevIndex].image}
                alt={albums[prevIndex].title}
                fill
                className="object-cover"
              />
            </div>

            {/* Main Image */}
            <div
              className="
                relative
                z-10
                overflow-hidden
                rounded-2xl
                shadow-xl
                w-full
                max-w-4xl
                h-[260px]
                sm:h-[360px]
                md:h-[450px]
                lg:h-[520px]
                xl:h-[600px]
              "
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                className="object-cover"
              />

              {/* Next Button */}
              <button
                onClick={goNext}
                className="
                  absolute
                  right-3
                  top-3
                  sm:right-5
                  sm:top-5
                  z-20
                  flex
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-lg
                  hover:scale-105
                  transition
                "
              >
                <ChevronRight size={22} />
              </button>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 sm:px-7 pb-5 sm:pb-7 pt-16">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  {current.title}
                </p>
              </div>
            </div>

            {/* Right Preview */}
            <div
              className="
                relative
                hidden
                lg:block
                w-[22%]
                h-[260px]
                xl:h-[320px]
                overflow-hidden
                rounded-2xl
                -ml-8
                opacity-80
              "
            >
              <Image
                src={albums[nextIndex].image}
                alt={albums[nextIndex].title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="hidden lg:flex ml-5 rounded-full p-2 hover:bg-gray-100 transition"
          >
            <ArrowRight size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="mt-6 flex justify-center gap-5 lg:hidden">
          <button
            onClick={goPrev}
            className="rounded-full border p-3 hover:bg-gray-100 transition"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={goNext}
            className="rounded-full border p-3 hover:bg-gray-100 transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 sm:mt-10 flex justify-center gap-2">
          {albums.map((album, i) => (
            <button
              key={album._id}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 h-2 bg-gray-900"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
