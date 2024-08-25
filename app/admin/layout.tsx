// layout.tsx
"use client";
import { useState, useEffect } from "react";
import { AdminLogin } from "@/components/admin-login";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  useEffect(() => {
    // Check authentication status (replace with your actual logic)
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken"); // Or however you store auth info

      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        setShowLoginDialog(true);
      }
    };

    checkAuth();
  }, []); // Re-check on route change

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLoginDialog(false);
  };

  return (
    <>
      {isAuthenticated ? (
        children // Render the main content if authenticated
      ) : (
        <AdminLogin setModel={handleLoginSuccess} /> // Show login dialog if not authenticated
      )}
    </>
  );
};

export default Layout;
