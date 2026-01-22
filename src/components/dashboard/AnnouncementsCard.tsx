import { motion } from "framer-motion";
import { Megaphone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "general" | "exam" | "event" | "holiday";
}

const announcements: Announcement[] = [
  {
    id: "1",
    title: "Annual Sports Day 2026",
    description: "Annual sports day will be held on February 15th. All students are required to participate.",
    date: "2 hours ago",
    category: "event",
  },
  {
    id: "2",
    title: "Mid-Term Examination Schedule",
    description: "Mid-term exams will commence from February 1st. Detailed schedule available in Downloads.",
    date: "1 day ago",
    category: "exam",
  },
  {
    id: "3",
    title: "Republic Day Holiday",
    description: "School will remain closed on January 26th on account of Republic Day.",
    date: "2 days ago",
    category: "holiday",
  },
];

const categoryColors = {
  general: "bg-primary/10 text-primary",
  exam: "bg-destructive/10 text-destructive",
  event: "bg-accent/10 text-accent",
  holiday: "bg-success/10 text-success",
};

export function AnnouncementsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="bg-card rounded-xl shadow-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-destructive/10 flex items-center justify-center">
            <Megaphone className="h-4 w-4 text-destructive" />
          </div>
          <h3 className="font-semibold text-lg">Announcements</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-primary">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            className="group cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <span className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${categoryColors[announcement.category]}`}>
                {announcement.category.charAt(0).toUpperCase() + announcement.category.slice(1)}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium group-hover:text-primary transition-colors truncate">
                    {announcement.title}
                  </h4>
                  <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {announcement.description}
                </p>
                <p className="text-xs text-muted-foreground mt-2">{announcement.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}