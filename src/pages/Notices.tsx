import { motion } from "framer-motion";
import { Megaphone, ChevronRight, Calendar, Pin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Notice {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "general" | "exam" | "event" | "holiday" | "urgent";
  isPinned?: boolean;
}

const notices: Notice[] = [
  {
    id: "1",
    title: "Annual Sports Day 2026",
    description: "Annual sports day will be held on February 15th. All students are required to participate in at least one event. Registration forms are available at the sports office. Last date for registration is February 5th.",
    date: "2 hours ago",
    category: "event",
    isPinned: true,
  },
  {
    id: "2",
    title: "Mid-Term Examination Schedule",
    description: "Mid-term exams will commence from February 1st. Detailed schedule has been uploaded in the Downloads section. Students are advised to prepare accordingly.",
    date: "1 day ago",
    category: "exam",
    isPinned: true,
  },
  {
    id: "3",
    title: "Republic Day Holiday",
    description: "School will remain closed on January 26th on account of Republic Day. Regular classes will resume on January 27th.",
    date: "2 days ago",
    category: "holiday",
  },
  {
    id: "4",
    title: "Science Exhibition Participants",
    description: "Selected students for the inter-school science exhibition are requested to meet in the science lab on January 25th at 3 PM for briefing.",
    date: "3 days ago",
    category: "event",
  },
  {
    id: "5",
    title: "Library Books Return Notice",
    description: "All students are requested to return their library books before January 31st. Late returns will incur a fine of ₹5 per day.",
    date: "4 days ago",
    category: "general",
  },
  {
    id: "6",
    title: "Parent-Teacher Meeting",
    description: "PTM for Class 10 will be held on February 8th from 10 AM to 1 PM. Parents are requested to attend without fail.",
    date: "5 days ago",
    category: "general",
  },
];

const categoryConfig = {
  general: { color: "bg-primary/10 text-primary", label: "General" },
  exam: { color: "bg-destructive/10 text-destructive", label: "Exam" },
  event: { color: "bg-accent/10 text-accent", label: "Event" },
  holiday: { color: "bg-success/10 text-success", label: "Holiday" },
  urgent: { color: "bg-destructive text-destructive-foreground", label: "Urgent" },
};

const Notices = () => {
  const pinnedNotices = notices.filter((n) => n.isPinned);
  const otherNotices = notices.filter((n) => !n.isPinned);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Notice Board</h1>
        <p className="text-muted-foreground mt-1">
          Stay updated with school announcements and notices
        </p>
      </motion.div>

      {/* Pinned Notices */}
      {pinnedNotices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Pin className="h-5 w-5 text-primary" />
            Pinned Notices
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {pinnedNotices.map((notice, index) => {
              const category = categoryConfig[notice.category];
              return (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Card className="shadow-card hover:shadow-card-hover transition-all cursor-pointer group border-l-4 border-l-primary">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <Badge className={category.color}>{category.label}</Badge>
                        <Pin className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {notice.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {notice.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {notice.date}
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* All Notices */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-primary" />
          All Notices
        </h2>
        <div className="space-y-4">
          {otherNotices.map((notice, index) => {
            const category = categoryConfig[notice.category];
            return (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <Card className="shadow-card hover:shadow-card-hover transition-all cursor-pointer group">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center shrink-0", category.color.replace("text-", "bg-").split(" ")[0])}>
                        <Megaphone className={cn("h-6 w-6", category.color.split(" ")[1])} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={category.color}>{category.label}</Badge>
                        </div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {notice.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {notice.description}
                        </p>
                        <span className="text-xs text-muted-foreground mt-2 inline-block">
                          {notice.date}
                        </span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Notices;