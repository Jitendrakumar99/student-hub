import { motion } from "framer-motion";
import {
  Bus,
  MapPin,
  Clock,
  Phone,
  User,
  CreditCard,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ParentTransport = () => {
  const busDetails = {
    routeNo: "Route 5",
    busNo: "KA-01-AB-1234",
    capacity: 45,
    currentStudents: 38,
  };

  const timings = {
    pickup: "7:15 AM",
    pickupLocation: "Green Valley Main Gate",
    drop: "2:30 PM",
    dropLocation: "Green Valley Main Gate",
  };

  const driver = {
    name: "Mr. Raju Kumar",
    phone: "+91 98765 43213",
    experience: "8 years",
    avatar: "driver",
  };

  const conductor = {
    name: "Mr. Suresh",
    phone: "+91 98765 43214",
    avatar: "conductor",
  };

  const routeStops = [
    { stop: "School Campus", time: "6:45 AM", type: "start" },
    { stop: "MG Road Junction", time: "7:00 AM", type: "stop" },
    { stop: "Green Valley Main Gate", time: "7:15 AM", type: "pickup" },
    { stop: "Lake View Apartments", time: "7:25 AM", type: "stop" },
    { stop: "Central Mall", time: "7:35 AM", type: "stop" },
    { stop: "Railway Station", time: "7:45 AM", type: "stop" },
    { stop: "Back to School", time: "8:00 AM", type: "end" },
  ];

  const transportFee = {
    total: 18000,
    paid: 9000,
    pending: 9000,
    nextDue: "Feb 15, 2026",
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Transport</h1>
        <p className="text-muted-foreground">Bus route, timings, and contact information</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bus Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bus className="h-5 w-5 text-primary" />
                Bus Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <p className="text-3xl font-bold text-primary">{busDetails.routeNo}</p>
                  <p className="text-sm text-muted-foreground">{busDetails.busNo}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <p className="text-2xl font-bold">{busDetails.currentStudents}</p>
                    <p className="text-xs text-muted-foreground">Students</p>
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <p className="text-2xl font-bold">{busDetails.capacity}</p>
                    <p className="text-xs text-muted-foreground">Capacity</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Pickup & Drop Timings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-emerald-500">Pickup</Badge>
                    <span className="font-bold">{timings.pickup}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {timings.pickupLocation}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-500">Drop</Badge>
                    <span className="font-bold">{timings.drop}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {timings.dropLocation}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Transport Fee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Transport Fee Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Fee</span>
                  <span className="font-semibold">₹{transportFee.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Paid</span>
                  <span className="font-semibold text-emerald-600">₹{transportFee.paid.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Pending</span>
                  <span className="font-semibold text-amber-600">₹{transportFee.pending.toLocaleString()}</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">Next Due: {transportFee.nextDue}</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600">
                  Pay Transport Fee
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Driver */}
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${driver.avatar}`} />
                        <AvatarFallback>RK</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{driver.name}</p>
                        <p className="text-sm text-muted-foreground">Driver • {driver.experience}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                  </div>
                </div>
                {/* Conductor */}
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${conductor.avatar}`} />
                        <AvatarFallback>S</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{conductor.name}</p>
                        <p className="text-sm text-muted-foreground">Conductor</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Route */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Navigation className="h-5 w-5 text-primary" />
                Route Stops
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {routeStops.map((stop, index) => (
                  <div key={index} className="flex gap-4 pb-4 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className={`h-4 w-4 rounded-full ${
                        stop.type === "pickup" 
                          ? "bg-emerald-500" 
                          : stop.type === "start" || stop.type === "end"
                          ? "bg-primary"
                          : "bg-muted-foreground/30"
                      }`} />
                      {index < routeStops.length - 1 && (
                        <div className="w-0.5 flex-1 bg-muted-foreground/20 my-1" />
                      )}
                    </div>
                    <div className={`flex-1 pb-4 ${stop.type === "pickup" ? "font-medium" : ""}`}>
                      <div className="flex items-center justify-between">
                        <span className={stop.type === "pickup" ? "text-emerald-600" : ""}>
                          {stop.stop}
                        </span>
                        <span className="text-sm text-muted-foreground">{stop.time}</span>
                      </div>
                      {stop.type === "pickup" && (
                        <Badge className="mt-1 bg-emerald-100 text-emerald-700">Your Stop</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ParentTransport;
