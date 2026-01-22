import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Eye,
  EyeOff,
  ArrowLeft,
  Mail,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Dummy credentials
const DEMO_CREDENTIALS = {
  student: { email: "student@demo.com", password: "student123", name: "John Smith" },
  parent: { email: "parent@demo.com", password: "parent123", name: "Robert Smith" },
};

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const role = searchParams.get("role") as "student" | "parent" || "student";
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isStudent = role === "student";
  const credentials = DEMO_CREDENTIALS[role];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email === credentials.email && password === credentials.password) {
      toast({
        title: "Login Successful",
        description: `Welcome back, ${credentials.name}!`,
      });
      
      // Store auth state in localStorage for demo
      localStorage.setItem("eduportal_auth", JSON.stringify({ role, user: credentials }));
      
      navigate(isStudent ? "/" : "/parent");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Try the demo credentials below.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  const fillDemoCredentials = () => {
    setEmail(credentials.email);
    setPassword(credentials.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Link
          to="/welcome"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Card className="shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className={`h-16 w-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
              isStudent 
                ? "gradient-primary" 
                : "bg-gradient-to-br from-emerald-500 to-teal-600"
            }`}>
              {isStudent ? (
                <GraduationCap className="h-8 w-8 text-white" />
              ) : (
                <Users className="h-8 w-8 text-white" />
              )}
            </div>
            <CardTitle className="text-2xl">
              {isStudent ? "Student Login" : "Parent Login"}
            </CardTitle>
            <CardDescription>
              Enter your credentials to access the {isStudent ? "student" : "parent"} portal
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className={`w-full ${
                  isStudent 
                    ? "" 
                    : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="p-4 rounded-lg bg-muted/50 border border-dashed">
              <p className="text-sm font-medium text-center mb-3">Demo Credentials</p>
              <div className="text-xs text-muted-foreground space-y-1 text-center">
                <p>Email: <code className="bg-background px-1 py-0.5 rounded">{credentials.email}</code></p>
                <p>Password: <code className="bg-background px-1 py-0.5 rounded">{credentials.password}</code></p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-3"
                onClick={fillDemoCredentials}
              >
                Fill Demo Credentials
              </Button>
            </div>

            {/* Switch Role */}
            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                {isStudent ? "Are you a parent?" : "Are you a student?"}{" "}
              </span>
              <Link
                to={`/login?role=${isStudent ? "parent" : "student"}`}
                className={`font-medium hover:underline ${
                  isStudent ? "text-emerald-600" : "text-primary"
                }`}
              >
                {isStudent ? "Parent Login" : "Student Login"}
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
