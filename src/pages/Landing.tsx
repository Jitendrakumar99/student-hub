import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Users,
  BookOpen,
  Trophy,
  Calendar,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { icon: BookOpen, title: "Academic Tracking", description: "Monitor grades, assignments & progress" },
    { icon: Calendar, title: "Attendance", description: "Real-time attendance updates" },
    { icon: Trophy, title: "Achievements", description: "Celebrate academic milestones" },
    { icon: MessageCircle, title: "Communication", description: "Direct teacher-parent messaging" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <h1 className="font-bold text-xl">EduPortal</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EduPortal
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            A comprehensive school management platform connecting students, parents, and teachers
            for a seamless educational experience.
          </motion.p>
        </div>

        {/* Role Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20"
        >
          {/* Student Card */}
          <Card
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden"
            onClick={() => navigate("/login?role=student")}
          >
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-20 w-20 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">I'm a Student</h2>
                <p className="text-muted-foreground mb-6">
                  Access your dashboard, view timetable, submit homework, and track your progress.
                </p>
                <Button className="w-full group-hover:bg-primary transition-colors">
                  Student Login
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Parent Card */}
          <Card
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-500/50 overflow-hidden"
            onClick={() => navigate("/login?role=parent")}
          >
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">I'm a Parent</h2>
                <p className="text-muted-foreground mb-6">
                  Monitor your child's academics, attendance, fees, and communicate with teachers.
                </p>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                  Parent Login
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-center text-2xl font-bold mb-8">Why Choose EduPortal?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2026 EduPortal. All rights reserved.</p>
          <p className="mt-1">Empowering education through technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
