"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  LayoutDashboard,
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  FileText,
  UserCog,
  Settings,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const NAV_GROUPS = [
  {
    label: "Main",
    items: [
      { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
      // { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    ],
  },
  {
    label: "Section Management",
    items: [
      { name: "Hero", href: "/admin/hero", icon: Package },
      { name: "Services", href: "/admin/service", icon: ShoppingCart },
      { name: "Album", href: "/admin/album", icon: Users },
      { name: "About", href: "/admin/about", icon: FileText },
      { name: "Features", href: "/admin/feature", icon: FileText },
      { name: "Policies", href: "/admin/policy", icon: FileText },
      { name: "Members", href: "/admin/member", icon: FileText },
      { name: "Portfolio", href: "/admin/portfolio", icon: FileText },
      { name: "Feedback", href: "/admin/feedback", icon: FileText },
      { name: "Partners", href: "/admin/partner", icon: FileText },
      { name: "Blogs", href: "/admin/blog", icon: FileText },
      {
        name: "Instagram Strip",
        href: "/admin/instagram-strip",
        icon: FileText,
      },
    ],
  },
  //   {
  //     label: "System",
  //     items: [
  //       //   { name: "Team", href: "/admin/team", icon: UserCog },
  //       //   { name: "Settings", href: "/admin/settings", icon: Settings },
  //       { name: "Logout", href: "/", icon: Settings },
  //     ],
  //   },
];

const DISPLAY_FONT =
  "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const pathname = usePathname();

  return (
    <>
      {/* mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen z-40 bg-[#0E1116] flex flex-col shrink-0 transition-all duration-200 ${
          collapsed ? "lg:w-[76px]" : "lg:w-[248px]"
        } w-[248px] ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* brand */}
        <div className="flex items-center gap-3 h-16 px-5 border-b border-white/[0.06] shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#E8A33D] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#0E1116]" strokeWidth={2.5} />
          </div>
          {!collapsed && (
            <span
              className="text-[#F7F5F2] text-[15px] tracking-tight whitespace-nowrap"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              Admin Panel
            </span>
          )}
        </div>

        {/* nav */}
        <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-6">
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              {!collapsed && (
                <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5B616E]">
                  {group.label}
                </p>
              )}
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/admin" && pathname?.startsWith(item.href));
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      title={collapsed ? item.name : undefined}
                      className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] transition-colors relative ${
                        active
                          ? "bg-[#E8A33D]/10 text-[#E8A33D]"
                          : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
                      }`}
                    >
                      {active && (
                        <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-[#E8A33D]" />
                      )}
                      <Icon
                        className="w-[18px] h-[18px] shrink-0"
                        strokeWidth={2}
                      />
                      {!collapsed && (
                        <span className="truncate">{item.name}</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* collapse toggle */}
        <div className="hidden lg:flex items-center justify-center border-t border-white/[0.06] py-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center justify-center w-8 h-8 rounded-lg text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.06] transition-colors"
          >
            {collapsed ? (
              <ChevronsRight className="w-4 h-4" />
            ) : (
              <ChevronsLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
