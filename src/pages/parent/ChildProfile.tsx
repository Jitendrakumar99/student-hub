import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  GraduationCap,
  Users,
  Download,
  ChevronDown,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ChildProfile = () => {
  const children = [
    { id: "1", name: "John Smith", class: "10-A", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=student" },
    { id: "2", name: "Emma Smith", class: "7-B", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma" },
  ];

  const studentDetails = {
    name: "John Smith",
    class: "10-A",
    section: "A",
    rollNo: "24",
    admissionNo: "2021/10/024",
    dateOfBirth: "March 15, 2010",
    bloodGroup: "B+",
    gender: "Male",
    academicYear: "2025-26",
    house: "Blue House",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=student",
  };

  const parentDetails = {
    father: {
      name: "Robert Smith",
      occupation: "Software Engineer",
      phone: "+91 98765 43210",
      email: "robert.smith@email.com",
    },
    mother: {
      name: "Sarah Smith",
      occupation: "Doctor",
      phone: "+91 98765 43211",
      email: "sarah.smith@email.com",
    },
    address: "123 Maple Street, Green Valley, Bangalore - 560001",
  };

  const emergencyContact = {
    name: "Michael Smith",
    relation: "Uncle",
    phone: "+91 98765 43212",
  };

  return (
    <div className="space-y-6">
      {/* Header with Child Switcher */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Child Profile</h1>
          <p className="text-muted-foreground">View and manage your child's information</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Switch Child:</span>
          <Select defaultValue="1">
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {children.map((child) => (
                <SelectItem key={child.id} value={child.id}>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={child.avatar} />
                      <AvatarFallback>{child.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{child.name}</span>
                    <Badge variant="outline" className="text-xs">{child.class}</Badge>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Photo & Basic Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="text-center">
            <CardContent className="pt-6">
              <Avatar className="h-32 w-32 mx-auto border-4 border-primary/20">
                <AvatarImage src={studentDetails.avatar} />
                <AvatarFallback className="text-3xl">JS</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold mt-4">{studentDetails.name}</h2>
              <p className="text-muted-foreground">
                Class {studentDetails.class} | Roll No. {studentDetails.rollNo}
              </p>
              <Badge className="mt-2 bg-gradient-to-r from-emerald-500 to-teal-600">
                {studentDetails.academicYear}
              </Badge>
              <Button className="w-full mt-6" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Student ID
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Student Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Student Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Full Name</p>
                      <p className="font-medium">{studentDetails.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Class & Section</p>
                      <p className="font-medium">{studentDetails.class}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Date of Birth</p>
                      <p className="font-medium">{studentDetails.dateOfBirth}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Gender</p>
                      <p className="font-medium">{studentDetails.gender}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Admission No.</p>
                      <p className="font-medium">{studentDetails.admissionNo}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Roll Number</p>
                      <p className="font-medium">{studentDetails.rollNo}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <AlertCircle className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Blood Group</p>
                      <p className="font-medium">{studentDetails.bloodGroup}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">House</p>
                      <p className="font-medium">{studentDetails.house}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Parent Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Parent Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Father */}
                <div className="p-4 rounded-lg border bg-muted/30">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-3">Father's Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{parentDetails.father.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{parentDetails.father.occupation}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{parentDetails.father.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{parentDetails.father.email}</span>
                    </div>
                  </div>
                </div>
                {/* Mother */}
                <div className="p-4 rounded-lg border bg-muted/30">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-3">Mother's Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{parentDetails.mother.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{parentDetails.mother.occupation}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{parentDetails.mother.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{parentDetails.mother.email}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Address */}
              <div className="mt-4 p-4 rounded-lg border bg-muted/30">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Residential Address</p>
                    <p className="text-sm">{parentDetails.address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <AlertCircle className="h-5 w-5" />
                Emergency Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{emergencyContact.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{emergencyContact.relation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{emergencyContact.phone}</span>
                </div>
                <Button variant="outline" className="w-full mt-2 border-red-300 hover:bg-red-100">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ChildProfile;
