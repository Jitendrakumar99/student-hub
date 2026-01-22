import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  User,
  GraduationCap,
  BookOpen,
  Calendar,
  FileText,
  ClipboardCheck,
  FlaskConical,
  BarChart3,
  CalendarCheck,
  Megaphone,
  MessageCircle,
  Bus,
  CreditCard,
  PartyPopper,
  Trophy,
  Download,
  Settings,
  ChevronDown,
  ChevronLeft,
  Menu,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  collapsed: boolean;
  children?: { label: string; to: string }[];
}

const NavItem = ({ icon: Icon, label, to, collapsed, children }: NavItemProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = location.pathname === to || children?.some(child => location.pathname === child.to);

  if (children) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
          )}
        >
          <Icon className="h-5 w-5 shrink-0" />
          {!collapsed && (
            <>
              <span className="flex-1 text-left">{label}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </>
          )}
        </button>
        <AnimatePresence>
          {isOpen && !collapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pl-8 space-y-1">
                {children.map((child) => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    className={({ isActive }) =>
                      cn(
                        "block px-3 py-2 rounded-lg text-sm transition-all duration-200",
                        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        isActive && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      )
                    }
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
        )
      }
    >
      <Icon className="h-5 w-5 shrink-0" />
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
};

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/" },
  { icon: User, label: "My Profile", to: "/profile" },
  {
    icon: GraduationCap,
    label: "Academics",
    to: "/academics",
    children: [
      { label: "Subjects", to: "/academics/subjects" },
      { label: "Timetable", to: "/academics/timetable" },
      { label: "Study Material", to: "/academics/study-material" },
    ],
  },
  { icon: ClipboardCheck, label: "Homework", to: "/homework" },
  { icon: FlaskConical, label: "Exams & Tests", to: "/exams" },
  { icon: BarChart3, label: "Results", to: "/results" },
  { icon: CalendarCheck, label: "Attendance", to: "/attendance" },
  { icon: Megaphone, label: "Notice Board", to: "/notices" },
  { icon: MessageCircle, label: "Communication", to: "/communication" },
  { icon: Bus, label: "Transport", to: "/transport" },
  { icon: CreditCard, label: "Fees & Payments", to: "/fees" },
  { icon: PartyPopper, label: "Events", to: "/events" },
  { icon: Trophy, label: "Achievements", to: "/achievements" },
  { icon: Download, label: "Downloads", to: "/downloads" },
  { icon: Settings, label: "Settings", to: "/settings" },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen bg-sidebar border-r border-sidebar-border flex flex-col sticky top-0"
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-sidebar-foreground">EduPortal</h1>
                <p className="text-xs text-sidebar-muted">Student Dashboard</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="shrink-0 h-9 w-9 hover:bg-sidebar-accent"
        >
          {collapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            collapsed={collapsed}
            children={item.children}
          />
        ))}
      </nav>

      {/* User Section */}
      <div className="p-3 border-t border-sidebar-border">
        <div
          className={cn(
            "flex items-center gap-3 p-2 rounded-lg bg-sidebar-accent/50",
            collapsed && "justify-center"
          )}
        >
          <Avatar className="h-10 w-10 border-2 border-primary/20">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">John Smith</p>
              <p className="text-xs text-sidebar-muted truncate">Class 10-A | Roll 24</p>
            </div>
          )}
          {!collapsed && (
            <Button variant="ghost" size="icon" className="shrink-0 h-8 w-8 hover:bg-destructive/10 hover:text-destructive">
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </motion.aside>
  );
}