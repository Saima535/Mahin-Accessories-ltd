// "use client";

// import { useEffect, useState } from "react";
// import { Package, ShoppingCart, Users, TrendingUp } from "lucide-react";

// const STATS = [
//   {
//     label: "Total Orders",
//     value: "1,284",
//     change: "+12.4%",
//     icon: ShoppingCart,
//   },
//   { label: "Products", value: "342", change: "+3.1%", icon: Package },
//   { label: "Customers", value: "8,921", change: "+8.7%", icon: Users },
//   { label: "Revenue", value: "৳4.2L", change: "+18.9%", icon: TrendingUp },
// ];

// const DISPLAY_FONT =
//   "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

// export default function AdminDashboardPage() {
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     setEmail(localStorage.getItem("adminEmail") || "");
//   }, []);

//   return (
//     <div>
//       <h2
//         className="text-[#0E1116] text-2xl tracking-tight mb-1"
//         style={{ fontFamily: DISPLAY_FONT }}
//       >
//         Welcome back{email ? `, ${email.split("@")[0]}` : ""}
//       </h2>
//       <p className="text-[#6B7280] text-sm mb-8">
//         Here&apos;s what&apos;s happening across your operations today.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
//         {STATS.map((stat) => {
//           const Icon = stat.icon;
//           return (
//             <div
//               key={stat.label}
//               className="bg-white rounded-2xl border border-[#E5E3DE] p-5"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <div className="w-9 h-9 rounded-lg bg-[#0E1116] flex items-center justify-center">
//                   <Icon className="w-4 h-4 text-[#E8A33D]" strokeWidth={2} />
//                 </div>
//                 <span className="text-[11px] font-medium text-[#16A34A] bg-[#F0FDF4] px-2 py-1 rounded-full">
//                   {stat.change}
//                 </span>
//               </div>
//               <p className="text-[#0E1116] text-2xl font-semibold tracking-tight">
//                 {stat.value}
//               </p>
//               <p className="text-[#9CA3AF] text-[13px] mt-1">{stat.label}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* <div className="bg-white rounded-2xl border border-[#E5E3DE] p-6">
//         <h3 className="text-[#0E1116] text-sm font-medium mb-1">
//           This is a placeholder content area
//         </h3>
//         <p className="text-[#9CA3AF] text-[13px]">
//           Replace this section with your real charts, tables, or activity feed.
//           The sidebar and topbar around it stay fixed on every route under{" "}
//           <code className="bg-[#F7F5F2] px-1.5 py-0.5 rounded">/admin</code>.
//         </p>
//       </div> */}
//     </div>
//   );
// }

//Version 2
"use client";

import { useEffect, useState } from "react";
import {
  ImageIcon,
  Package,
  ShieldCheck,
  ShoppingCart,
  Star,
  Users,
  Briefcase,
  FolderOpen,
} from "lucide-react";

const DISPLAY_FONT =
  "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

const API_BASE = "https://maheen-accessories-ltd-admin.vercel.app/api";

export default function AdminDashboardPage() {
  const [email, setEmail] = useState("");

  const [stats, setStats] = useState({
    hero: 0,
    service: 0,
    album: 0,
    about: 0,
    feature: 0,
    policy: 0,
    member: 0,
    portfolio: 0,
    feedback: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setEmail(localStorage.getItem("adminEmail") || "");
  }, []);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const endpoints = [
          "hero",
          "service",
          "album",
          "about",
          "feature",
          "policy",
          "member",
          "portfolio",
          "feedback",
        ];

        const responses = await Promise.all(
          endpoints.map((endpoint) =>
            fetch(`${API_BASE}/${endpoint}`).then((res) => res.json()),
          ),
        );

        setStats({
          hero: responses[0]?.length || 0,
          service: responses[1]?.length || 0,
          album: responses[2]?.length || 0,
          about: responses[3]?.length || 0,
          feature: responses[4]?.length || 0,
          policy: responses[5]?.length || 0,
          member: responses[6]?.length || 0,
          portfolio: responses[7]?.length || 0,
          feedback: responses[8]?.length || 0,
        });
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  const cards = [
    {
      label: "Hero Section",
      value: stats.hero,
      icon: ShoppingCart,
    },
    {
      label: "Services",
      value: stats.service,
      icon: Package,
    },
    {
      label: "Album",
      value: stats.album,
      icon: ImageIcon,
    },
    {
      label: "About",
      value: stats.about,
      icon: Briefcase,
    },
    {
      label: "Feature",
      value: stats.feature,
      icon: Star,
    },
    {
      label: "Policies",
      value: stats.policy,
      icon: ShieldCheck,
    },
    {
      label: "Members",
      value: stats.member,
      icon: Users,
    },
    {
      label: "Portfolio",
      value: stats.portfolio,
      icon: FolderOpen,
    },
    {
      label: "Feedback",
      value: stats.feedback,
      icon: Star,
    },
  ];

  return (
    <div>
      <h2
        className="text-[#0E1116] text-2xl tracking-tight mb-1"
        style={{ fontFamily: DISPLAY_FONT }}
      >
        Welcome back{email ? `, ${email.split("@")[0]}` : ""}
      </h2>

      <p className="text-[#6B7280] text-sm mb-8">
        Here's what's happening across your website today.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.label}
              className="bg-white rounded-2xl border border-[#E5E3DE] p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0E1116] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#E8A33D]" strokeWidth={2} />
                </div>

                <span className="text-[11px] font-medium text-[#16A34A] bg-[#F0FDF4] px-2 py-1 rounded-full">
                  Total
                </span>
              </div>

              <p className="text-[#0E1116] text-3xl font-semibold tracking-tight">
                {loading ? "..." : card.value}
              </p>

              <p className="text-[#9CA3AF] text-[13px] mt-1">{card.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
