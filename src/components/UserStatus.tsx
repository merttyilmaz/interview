"use client";

import { useEffect, useState } from "react";
import { User, LogOut } from "lucide-react";
import { useUserStore } from "@/store/user";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function UserStatus() {
  const [hasHydrated, setHasHydrated] = useState(false);
  const { isAuthenticated, logout } = useUserStore();

  const router = useRouter();

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!hasHydrated) {
    return <div className="w-20 h-9 bg-gray-200 animate-pulse rounded" />;
  }

  if (!isAuthenticated) {
    return (
      <Button
        variant="ghost"
        onClick={() => router.push("/login")}
        className="flex items-center space-x-2"
      >
        <User className="h-4 w-4" />
        <span className="hidden sm:block">Login</span>
      </Button>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="user" />
          <AvatarFallback className="bg-blue-100 text-blue-600">
            Demo
          </AvatarFallback>
        </Avatar>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleLogout}
        className="flex items-center space-x-1"
      >
        <LogOut className="h-4 w-4" />
        <span className="hidden sm:block text-sm">Logout</span>
      </Button>
    </div>
  );
}
