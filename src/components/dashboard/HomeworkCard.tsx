import { motion } from "framer-motion";
import { ClipboardCheck, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Homework {
  id: string;
  subject: string;
  title: string;
  dueDate: string;
  status: "pending" | "submitted" | "overdue";
}

const homeworks: Homework[] = [
  {
    id: "1",
    subject: "Mathematics",
    title: "Calculus - Integration Problems Ch. 5",
    dueDate: "Today",
    status: "pending",
  },
  {
    id: "2",
    subject: "Physics",
    title: "Lab Report - Wave Mechanics",
    dueDate: "Tomorrow",
    status: "pending",
  },
  {
    id: "3",
    subject: "English",
    title: "Essay on Shakespeare's Hamlet",
    dueDate: "Jan 24",
    status: "submitted",
  },
  {
    id: "4",
    subject: "Chemistry",
    title: "Organic Chemistry Worksheet",
    dueDate: "Overdue",
    status: "overdue",
  },
];

const statusConfig = {
  pending: {
    icon: Clock,
    color: "text-warning",
    bg: "bg-warning/10",
    label: "Pending",
  },
  submitted: {
    icon: CheckCircle2,
    color: "text-success",
    bg: "bg-success/10",
    label: "Submitted",
  },
  overdue: {
    icon: AlertCircle,
    color: "text-destructive",
    bg: "bg-destructive/10",
    label: "Overdue",
  },
};

export function HomeworkCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-card rounded-xl shadow-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <ClipboardCheck className="h-4 w-4 text-accent" />
          </div>
          <h3 className="font-semibold text-lg">Homework & Assignments</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-primary">
          View All
        </Button>
      </div>

      <div className="space-y-3">
        {homeworks.map((hw, index) => {
          const status = statusConfig[hw.status];
          const StatusIcon = status.icon;

          return (
            <motion.div
              key={hw.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-all group"
            >
              <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center", status.bg)}>
                <StatusIcon className={cn("h-5 w-5", status.color)} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-0.5 bg-secondary rounded-full">
                    {hw.subject}
                  </span>
                </div>
                <p className="font-medium mt-1 truncate">{hw.title}</p>
              </div>
              <div className="text-right shrink-0">
                <p className={cn("text-sm font-medium", status.color)}>{hw.dueDate}</p>
                <p className={cn("text-xs", status.color)}>{status.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}