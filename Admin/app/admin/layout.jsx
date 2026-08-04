"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const isAuthed = localStorage.getItem("adminAuth") === "true";
    if (!isAuthed) {
      router.replace("/login");
    } else {
      setChecked(true);
    }
  }, [router]);

  // Avoid flashing the dashboard before the auth check resolves.
  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F5F2]">
        <div className="w-6 h-6 rounded-full border-2 border-[#E8A33D] border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#F7F5F2]">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar setMobileOpen={setMobileOpen} />
        <main className="flex-1 p-5 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
