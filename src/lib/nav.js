import {
  LayoutDashboard,
  BarChart3,
  Database,
  ShieldCheck,
  Settings,
} from "lucide-react";

export const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard }, // mage:dashboard-fill
  { name: "Market Monitor", path: "/market-monitor", icon: BarChart3 }, // Group 7 (18px)
  { name: "Signal History", path: "/signal-history", icon: Database }, // Icon (18x20px)
  { name: "Audit Logs", path: "/audit-logs", icon: ShieldCheck },
  { name: "Settings", path: "/settings", icon: Settings }, // Icon (20.1x20px)
];
