import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "exam" | "event" | "holiday";
}

const events: Event[] = [
  {
    id: "1",
    title: "Republic Day Celebration",
    date: "Jan 26",
    time: "9:00 AM",
    location: "School Ground",
    type: "event",
  },
  {
    id: "2",
    title: "Physics Unit Test",
    date: "Jan 28",
    time: "10:00 AM",
    location: "Hall A",
    type: "exam",
  },
  {
    id: "3",
    title: "Science Exhibition",
    date: "Feb 5",
    time: "8:30 AM",
    location: "Exhibition Hall",
    type: "event",
  },
];

const typeColors = {
  exam: "border-l-destructive bg-destructive/5",
  event: "border-l-primary bg-primary/5",
  holiday: "border-l-success bg-success/5",
};

export function UpcomingEventsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.45 }}
      className="bg-card rounded-xl shadow-card p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-lg bg-info/10 flex items-center justify-center">
          <Calendar className="h-4 w-4 text-info" />
        </div>
        <h3 className="font-semibold text-lg">Upcoming Events</h3>
      </div>

      <div className="space-y-3">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            className={`p-4 rounded-lg border-l-4 ${typeColors[event.type]} hover:shadow-sm transition-all cursor-pointer`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">{event.title}</h4>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-primary">
                  {event.date.split(" ")[1]}
                </span>
                <p className="text-xs text-muted-foreground uppercase">
                  {event.date.split(" ")[0]}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}