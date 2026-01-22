import { motion } from "framer-motion";
import { Bus, Clock, Phone, MapPin, User, CreditCard, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const transportInfo = {
  busNumber: "Bus 12",
  route: "Route A - North Zone",
  stops: [
    { name: "City Center", time: "7:00 AM", distance: "0 km" },
    { name: "Park Avenue", time: "7:10 AM", distance: "3 km" },
    { name: "Green Valley", time: "7:20 AM", distance: "6 km", isStudentStop: true },
    { name: "Lake View", time: "7:30 AM", distance: "9 km" },
    { name: "School Campus", time: "7:45 AM", distance: "12 km" },
  ],
  driver: {
    name: "Ramesh Kumar",
    phone: "+91 98765 43210",
    experience: "8 years",
  },
  conductor: {
    name: "Suresh Yadav",
    phone: "+91 98765 43211",
  },
  fees: {
    monthly: 1500,
    paid: true,
    validTill: "Mar 2026",
  },
};

const Transport = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Transport</h1>
        <p className="text-muted-foreground mt-1">
          View bus routes, timings, and driver information
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Route Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bus className="h-5 w-5 text-primary" />
                  {transportInfo.busNumber} - {transportInfo.route}
                </CardTitle>
                <Badge className="bg-success/10 text-success">Active</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {transportInfo.stops.map((stop, index) => (
                  <motion.div
                    key={stop.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="flex gap-4 pb-6 last:pb-0"
                  >
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className={`h-4 w-4 rounded-full border-2 ${
                        stop.isStudentStop 
                          ? "bg-primary border-primary" 
                          : index === transportInfo.stops.length - 1 
                            ? "bg-success border-success"
                            : "bg-background border-muted-foreground"
                      }`} />
                      {index < transportInfo.stops.length - 1 && (
                        <div className="w-0.5 flex-1 bg-muted-foreground/30 mt-1" />
                      )}
                    </div>

                    {/* Stop Info */}
                    <div className={`flex-1 p-3 rounded-lg ${stop.isStudentStop ? "bg-primary/10 border border-primary/20" : ""}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium flex items-center gap-2">
                            {stop.name}
                            {stop.isStudentStop && (
                              <Badge className="bg-primary text-primary-foreground text-xs">Your Stop</Badge>
                            )}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {stop.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {stop.distance}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Driver & Fee Info */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Driver Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Driver</p>
                  <p className="font-medium">{transportInfo.driver.name}</p>
                  <p className="text-sm text-muted-foreground">{transportInfo.driver.experience} experience</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`tel:${transportInfo.driver.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {transportInfo.driver.phone}
                  </a>
                </Button>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground">Conductor</p>
                  <p className="font-medium">{transportInfo.conductor.name}</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`tel:${transportInfo.conductor.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {transportInfo.conductor.phone}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="shadow-card border-l-4 border-l-success">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Transport Fee Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Monthly Fee</span>
                  <span className="font-semibold">₹{transportInfo.fees.monthly}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge className="bg-success/10 text-success gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Paid
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Valid Till</span>
                  <span className="font-medium">{transportInfo.fees.validTill}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Transport;