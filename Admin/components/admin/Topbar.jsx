"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, Bell, ChevronDown, User, Settings, LogOut } from "lucide-react";

const PAGE_TITLES = {
  "/admin": "Dashboard",
  "/admin/analytics": "Analytics",
  "/admin/hero": "Hero",
  "/admin/service": "Services",
  "/admin/album": "Album",
  "/admin/about": "About",
  "/admin/feature": "Features",
  "/admin/policy": "Policies",
  "/admin/member": "Members",
  "/admin/portfolio": "Portfolio",
  "/admin/feedback": "Feedback",
  "/admin/partner": "Partners",
  "/admin/blog": "Blogs",
};

export default function Topbar({ setMobileOpen }) {
  const router = useRouter();
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setEmail(localStorage.getItem("adminEmail") || "admin@example.com");
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminEmail");
    router.push("/");
  };

  const initials = email ? email.split("@")[0].slice(0, 2).toUpperCase() : "AD";

  const title = PAGE_TITLES[pathname] || "Dashboard";

  return (
    <header className="sticky top-0 z-20 h-16 flex items-center justify-between gap-4 px-5 lg:px-8 bg-[#F7F5F2]/90 backdrop-blur border-b border-[#E5E3DE]">
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-[#374151] hover:bg-[#EFEDE7] transition-colors shrink-0"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-[#0E1116] text-[15px] font-medium truncate">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative flex items-center justify-center w-9 h-9 rounded-lg text-[#6B7280] hover:bg-[#EFEDE7] hover:text-[#0E1116] transition-colors">
          <Bell className="w-[18px] h-[18px]" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#E8A33D]" />
        </button>

        <div className="w-px h-6 bg-[#E5E3DE] mx-1" />

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2.5 pl-1.5 pr-3 py-1.5 rounded-full hover:bg-[#EFEDE7] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#0E1116] flex items-center justify-center shrink-0">
              <span className="text-[#E8A33D] text-[11px] font-semibold">
                {initials}
              </span>
            </div>
            <span className="hidden sm:block text-[13px] text-[#374151] max-w-[160px] truncate">
              {email}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF]" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-52 rounded-xl border border-[#E5E3DE] bg-white shadow-lg shadow-black/[0.06] py-1.5 overflow-hidden">
              <div className="px-3.5 py-2.5 border-b border-[#F0EEE9]">
                <p className="text-[13px] font-medium text-[#0E1116] truncate">
                  {email}
                </p>
                <p className="text-[11px] text-[#9CA3AF]">Administrator</p>
              </div>
              <button className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] text-[#374151] hover:bg-[#F7F5F2] transition-colors">
                <User className="w-4 h-4 text-[#9CA3AF]" />
                Profile
              </button>
              <button className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] text-[#374151] hover:bg-[#F7F5F2] transition-colors">
                <Settings className="w-4 h-4 text-[#9CA3AF]" />
                Settings
              </button>
              <div className="h-px bg-[#F0EEE9] my-1" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] text-[#DC2626] hover:bg-[#FEF2F2] transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
