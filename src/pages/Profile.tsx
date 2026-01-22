import { motion } from "framer-motion";
import { Camera, Mail, Phone, MapPin, User, Users, Edit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  const studentInfo = {
    name: "John Smith",
    rollNo: "24",
    class: "10",
    section: "A",
    admissionNo: "2023/1024",
    dob: "March 15, 2010",
    gender: "Male",
    bloodGroup: "O+",
    email: "john.smith@student.edu",
    phone: "+91 98765 43210",
    address: "123 Education Street, Knowledge City, State - 400001",
  };

  const parentInfo = {
    fatherName: "Robert Smith",
    fatherPhone: "+91 98765 43211",
    fatherOccupation: "Engineer",
    motherName: "Sarah Smith",
    motherPhone: "+91 98765 43212",
    motherOccupation: "Doctor",
    guardianEmail: "smith.family@email.com",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground mt-1">
            View and manage your personal information
          </p>
        </div>
        <Button className="gradient-primary">
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="shadow-card overflow-hidden">
            <div className="h-24 gradient-primary" />
            <CardContent className="pt-0 -mt-12 text-center">
              <div className="relative inline-block">
                <Avatar className="h-24 w-24 border-4 border-card">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:bg-primary/90 transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <h2 className="text-xl font-bold mt-4">{studentInfo.name}</h2>
              <p className="text-muted-foreground">
                Class {studentInfo.class}-{studentInfo.section} | Roll No. {studentInfo.rollNo}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">85%</p>
                  <p className="text-xs text-muted-foreground">Attendance</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-success">A+</p>
                  <p className="text-xs text-muted-foreground">Grade</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">12</p>
                  <p className="text-xs text-muted-foreground">Awards</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">{studentInfo.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Admission No.</p>
                    <p className="font-medium">{studentInfo.admissionNo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-medium">{studentInfo.dob}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gender</p>
                    <p className="font-medium">{studentInfo.gender}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Blood Group</p>
                    <p className="font-medium">{studentInfo.bloodGroup}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" /> Email
                    </p>
                    <p className="font-medium">{studentInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5" /> Phone
                    </p>
                    <p className="font-medium">{studentInfo.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> Address
                    </p>
                    <p className="font-medium">{studentInfo.address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Parent Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3"
        >
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Parent/Guardian Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-semibold mb-3">Father's Details</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Name</p>
                      <p className="font-medium">{parentInfo.fatherName}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Phone</p>
                      <p className="font-medium">{parentInfo.fatherPhone}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Occupation</p>
                      <p className="font-medium">{parentInfo.fatherOccupation}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-semibold mb-3">Mother's Details</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Name</p>
                      <p className="font-medium">{parentInfo.motherName}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Phone</p>
                      <p className="font-medium">{parentInfo.motherPhone}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Occupation</p>
                      <p className="font-medium">{parentInfo.motherOccupation}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-semibold mb-3">Contact Email</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Family Email</p>
                      <p className="font-medium">{parentInfo.guardianEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;