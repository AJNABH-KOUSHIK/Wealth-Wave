import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Accounts from "./pages/Accounts";
import Cards from "./pages/Cards";
import Personal from "./pages/Personal";
import Corporate from "./pages/Corporate";
import Public from "./pages/Public";
import Investment from "./pages/Investment";
import International from "./pages/International";
import Quantitative from "./pages/Quantitative";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";

// Account subpages
import SavingsAccounts from "./pages/accounts/Savings";
import CurrentAccounts from "./pages/accounts/Current";
import SalaryAccounts from "./pages/accounts/Salary";
import WealthManagement from "./pages/accounts/WealthManagement";

// Cards subpages
import CreditCards from "./pages/cards/CreditCards";
import DebitCards from "./pages/cards/DebitCards";
import PrepaidCards from "./pages/cards/PrepaidCards";
import BusinessCards from "./pages/cards/BusinessCards";
import ForexCards from "./pages/cards/ForexCards";
import VirtualCards from "./pages/cards/VirtualCards";

// Loans subpages
import HomeLoans from "./pages/loans/HomeLoans";
import PersonalLoans from "./pages/loans/PersonalLoans";
import CarLoans from "./pages/loans/CarLoans";
import EducationLoans from "./pages/loans/EducationLoans";
import BusinessLoans from "./pages/loans/BusinessLoans";
import GoldLoans from "./pages/loans/GoldLoans";

// Investment subpages
import MutualFunds from "./pages/investment/MutualFunds";
import FixedDeposits from "./pages/investment/FixedDeposits";
import SIP from "./pages/investment/SIP";
import Stocks from "./pages/investment/Stocks";
import Bonds from "./pages/investment/Bonds";
import CommodityTrading from "./pages/investment/CommodityTrading";

// Insurance subpages
import LifeInsurance from "./pages/insurance/LifeInsurance";
import HealthInsurance from "./pages/insurance/HealthInsurance";
import VehicleInsurance from "./pages/insurance/VehicleInsurance";
import HomeInsurance from "./pages/insurance/HomeInsurance";
import TravelInsurance from "./pages/insurance/TravelInsurance";
import CyberInsurance from "./pages/insurance/CyberInsurance";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/register" element={<Register />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/accounts"
                element={
                  <ProtectedRoute>
                    <Accounts />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/cards"
                element={
                  <ProtectedRoute>
                    <Cards />
                  </ProtectedRoute>
                }
              />

              <Route path="/personal" element={<Personal />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/public" element={<Public />} />

              <Route
                path="/investment"
                element={
                  <ProtectedRoute>
                    <Investment />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/international"
                element={
                  <ProtectedRoute>
                    <International />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/quantitative"
                element={
                  <ProtectedRoute>
                    <Quantitative />
                  </ProtectedRoute>
                }
              />

              {/* Account */}
              <Route
                path="/accounts/savings"
                element={
                  <ProtectedRoute>
                    <SavingsAccounts />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/accounts/current"
                element={
                  <ProtectedRoute>
                    <CurrentAccounts />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/accounts/salary"
                element={
                  <ProtectedRoute>
                    <SalaryAccounts />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/accounts/wealth-management"
                element={
                  <ProtectedRoute>
                    <WealthManagement />
                  </ProtectedRoute>
                }
              />

              {/* Cards */}
              <Route
                path="/cards/credit-cards"
                element={
                  <ProtectedRoute>
                    <CreditCards />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/cards/debit-cards"
                element={
                  <ProtectedRoute>
                    <DebitCards />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/cards/prepaid-cards"
                element={
                  <ProtectedRoute>
                    <PrepaidCards />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/cards/business-cards"
                element={
                  <ProtectedRoute>
                    <BusinessCards />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/cards/forex-cards"
                element={
                  <ProtectedRoute>
                    <ForexCards />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/cards/virtual-cards"
                element={
                  <ProtectedRoute>
                    <VirtualCards />
                  </ProtectedRoute>
                }
              />

              {/* Loans */}
              <Route
                path="/loans/home-loans"
                element={
                  <ProtectedRoute>
                    <HomeLoans />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/loans/personal-loans"
                element={
                  <ProtectedRoute>
                    <PersonalLoans />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/loans/car-loans"
                element={
                  <ProtectedRoute>
                    <CarLoans />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/loans/education-loans"
                element={
                  <ProtectedRoute>
                    <EducationLoans />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/loans/business-loans"
                element={
                  <ProtectedRoute>
                    <BusinessLoans />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/loans/gold-loans"
                element={
                  <ProtectedRoute>
                    <GoldLoans />
                  </ProtectedRoute>
                }
              />

              {/* Investment */}
              <Route
                path="/investment/mutual-funds"
                element={
                  <ProtectedRoute>
                    <MutualFunds />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/investment/fixed-deposits"
                element={
                  <ProtectedRoute>
                    <FixedDeposits />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/investment/sip"
                element={
                  <ProtectedRoute>
                    <SIP />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/investment/stocks"
                element={
                  <ProtectedRoute>
                    <Stocks />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/investment/bonds"
                element={
                  <ProtectedRoute>
                    <Bonds />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/investment/commodity-trading"
                element={
                  <ProtectedRoute>
                    <CommodityTrading />
                  </ProtectedRoute>
                }
              />

              {/* Insurance */}
              <Route
                path="/insurance/life"
                element={
                  <ProtectedRoute>
                    <LifeInsurance />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/insurance/health"
                element={
                  <ProtectedRoute>
                    <HealthInsurance />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/insurance/vehicle"
                element={
                  <ProtectedRoute>
                    <VehicleInsurance />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/insurance/home"
                element={
                  <ProtectedRoute>
                    <HomeInsurance />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/insurance/travel"
                element={
                  <ProtectedRoute>
                    <TravelInsurance />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/insurance/cyber"
                element={
                  <ProtectedRoute>
                    <CyberInsurance />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;