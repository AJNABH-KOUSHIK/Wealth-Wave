
import { useState } from 'react';
import { 
  Menu, X, ChevronDown, Search, Home, CreditCard, Briefcase, 
  Clipboard, ShieldCheck, Headphones, HelpCircle, User, Globe, 
  TrendingUp, LineChart, Landmark, DollarSign, Building, Car, 
  GraduationCap, Award, Gem, FileText, Heart, Activity, Truck, 
  Umbrella, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <header className="w-full">
      {/* Top navigation bar */}
      <div className="bg-gray-900 py-1 border-b border-yellow-500">
        <div className="container flex justify-between items-center">
          <div className="hidden sm:flex space-x-1">
            <Link to="/personal" className="top-nav-link flex items-center text-white hover:text-yellow-400"><User size={14} className="mr-1" /> Personal Banking</Link>
            <Link to="/corporate" className="top-nav-link flex items-center text-white hover:text-yellow-400"><Briefcase size={14} className="mr-1" /> Corporate Banking</Link>
            <Link to="/public" className="top-nav-link flex items-center text-white hover:text-yellow-400"><Landmark size={14} className="mr-1" /> Public Banking</Link>
            <Link to="/investment" className="top-nav-link flex items-center text-white hover:text-yellow-400"><TrendingUp size={14} className="mr-1" /> Investment</Link>
            <Link to="/international" className="top-nav-link flex items-center text-white hover:text-yellow-400"><Globe size={14} className="mr-1" /> International</Link>
            <Link to="/quantitative" className="top-nav-link flex items-center text-white hover:text-yellow-400"><LineChart size={14} className="mr-1" /> Quantitative</Link>
          </div>
          <div className="hidden sm:flex space-x-1">
            <Link to="/contact" className="top-nav-link flex items-center text-white hover:text-yellow-400">Contact</Link>
            <Link to="/help" className="top-nav-link flex items-center text-white hover:text-yellow-400"><HelpCircle size={14} className="mr-1" /> Help</Link>
            <Link to="/sitemap" className="top-nav-link flex items-center text-white hover:text-yellow-400">Sitemap</Link>
          </div>
          {/* Only shown on mobile */}
          <button 
            className="sm:hidden text-white p-1"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Logo and search bar */}
      <div className="bg-black py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
  <img 
    src="/wealth-wave-logo.png" 
  alt="Wealth Wave" 
  className="h-14 w-auto" 
    onError={(e) => {
      console.log("Logo failed to load");
      e.currentTarget.style.display = "none";
    }}
  />
</Link>
          </div>
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md ml-auto">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full border border-yellow-500 bg-gray-900 text-white rounded py-1 px-3 pr-10"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-500">
                <Search size={16} />
              </button>
            </div>
            <select className="border border-yellow-500 rounded py-1 px-3 bg-gray-900 text-white">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-gray-800">
        <div className="container">
          {!isMobile ? (
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex justify-start w-full gap-0 h-auto">
                <NavigationMenuItem>
                  <Link to="/">
                    <div className="main-nav-link flex items-center">
                      <Home size={16} className="mr-2" />
                      <span>Home</span>
                    </div>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="main-nav-link px-0 bg-transparent hover:bg-transparent hover:bg-yellow-700 data-[state=open]:bg-yellow-600 data-[state=open]:text-white h-auto">
                    <div className="flex items-center">
                      <Clipboard size={16} className="mr-2" />
                      <span>Accounts</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md">
                    <ul className="grid w-[300px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/accounts/savings" className="block px-3 py-2 hover:bg-gray-100 rounded">Savings Accounts</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/accounts/current" className="block px-3 py-2 hover:bg-gray-100 rounded">Current Accounts</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/accounts/salary" className="block px-3 py-2 hover:bg-gray-100 rounded">Salary Accounts</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/accounts/wealth-management" className="block px-3 py-2 hover:bg-gray-100 rounded">Wealth Management</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="main-nav-link px-0 bg-transparent hover:bg-transparent hover:bg-yellow-700 data-[state=open]:bg-yellow-600 data-[state=open]:text-white h-auto">
                    <div className="flex items-center">
                      <CreditCard size={16} className="mr-2" />
                      <span>Cards</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md">
                    <ul className="grid w-[300px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/cards/credit-cards" className="block px-3 py-2 hover:bg-gray-100 rounded">Credit Cards</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/cards/debit-cards" className="block px-3 py-2 hover:bg-gray-100 rounded">Debit Cards</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/cards/prepaid-cards" className="block px-3 py-2 hover:bg-gray-100 rounded">Prepaid Cards</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/cards/business-cards" className="block px-3 py-2 hover:bg-gray-100 rounded">Business Cards</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/cards/forex-cards" className="block px-3 py-2 hover:bg-gray-100 rounded">Forex Cards</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/cards/virtual-cards" className="block px-3 py-2 hover:bg-gray-100 rounded">Virtual Cards</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="main-nav-link px-0 bg-transparent hover:bg-transparent hover:bg-yellow-700 data-[state=open]:bg-yellow-600 data-[state=open]:text-white h-auto">
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-2" />
                      <span>Loans</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md">
                    <ul className="grid w-[300px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/loans/home-loans" className="block px-3 py-2 hover:bg-gray-100 rounded">Home Loans</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/loans/personal-loans" className="block px-3 py-2 hover:bg-gray-100 rounded">Personal Loans</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/loans/car-loans" className="block px-3 py-2 hover:bg-gray-100 rounded">Car Loans</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/loans/education-loans" className="block px-3 py-2 hover:bg-gray-100 rounded">Education Loans</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/loans/business-loans" className="block px-3 py-2 hover:bg-gray-100 rounded">Business Loans</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/loans/gold-loans" className="block px-3 py-2 hover:bg-gray-100 rounded">Gold Loans</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="main-nav-link px-0 bg-transparent hover:bg-transparent hover:bg-yellow-700 data-[state=open]:bg-yellow-600 data-[state=open]:text-white h-auto">
                    <div className="flex items-center">
                      <TrendingUp size={16} className="mr-2" />
                      <span>Investments</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md">
                    <ul className="grid w-[300px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/investment/mutual-funds" className="block px-3 py-2 hover:bg-gray-100 rounded">Mutual Funds</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/investment/fixed-deposits" className="block px-3 py-2 hover:bg-gray-100 rounded">Fixed Deposits</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/investment/sip" className="block px-3 py-2 hover:bg-gray-100 rounded">SIP Investments</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/investment/stocks" className="block px-3 py-2 hover:bg-gray-100 rounded">Stocks & ETFs</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/investment/bonds" className="block px-3 py-2 hover:bg-gray-100 rounded">Bonds</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/investment/commodity-trading" className="block px-3 py-2 hover:bg-gray-100 rounded">Commodity Trading</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="main-nav-link px-0 bg-transparent hover:bg-transparent hover:bg-yellow-700 data-[state=open]:bg-yellow-600 data-[state=open]:text-white h-auto">
                    <div className="flex items-center">
                      <ShieldCheck size={16} className="mr-2" />
                      <span>Insurance</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md">
                    <ul className="grid w-[300px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/insurance/life" className="block px-3 py-2 hover:bg-gray-100 rounded">Life Insurance</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/insurance/health" className="block px-3 py-2 hover:bg-gray-100 rounded">Health Insurance</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/insurance/vehicle" className="block px-3 py-2 hover:bg-gray-100 rounded">Vehicle Insurance</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/insurance/home" className="block px-3 py-2 hover:bg-gray-100 rounded">Home Insurance</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/insurance/travel" className="block px-3 py-2 hover:bg-gray-100 rounded">Travel Insurance</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/insurance/cyber" className="block px-3 py-2 hover:bg-gray-100 rounded">Cyber Insurance</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/support">
                    <div className="main-nav-link flex items-center">
                      <Headphones size={16} className="mr-2" />
                      <span>Support</span>
                    </div>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <nav className="flex">
              <Link to="/" className="main-nav-link flex items-center flex-1 justify-center">
                <Home size={16} className="mr-2" />
                <span>Home</span>
              </Link>
              <Link to="/accounts" className="main-nav-link flex items-center flex-1 justify-center">
                <Clipboard size={16} className="mr-2" />
                <span>Accounts</span>
              </Link>
              <Link to="/cards" className="main-nav-link flex items-center flex-1 justify-center">
                <CreditCard size={16} className="mr-2" />
                <span>Cards</span>
              </Link>
              <Link to="/support" className="main-nav-link flex items-center flex-1 justify-center">
                <Headphones size={16} className="mr-2" />
                <span>Support</span>
              </Link>
            </nav>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg absolute w-full z-50">
          <div className="py-2 px-4 flex items-center border-b border-gray-700">
            <input 
              type="text" 
              placeholder="Search..." 
              className="flex-1 border border-yellow-500 bg-gray-800 text-white rounded py-1 px-3"
            />
            <button className="ml-2 text-yellow-500">
              <Search size={16} />
            </button>
          </div>
          <nav className="py-2">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <Home size={16} className="mr-2 text-yellow-500" /> Home
            </Link>
            <Link to="/personal" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <User size={16} className="mr-2 text-yellow-500" /> Personal Banking
            </Link>
            <Link to="/corporate" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <Briefcase size={16} className="mr-2 text-yellow-500" /> Corporate Banking
            </Link>
            <Link to="/public" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <Landmark size={16} className="mr-2 text-yellow-500" /> Public Banking
            </Link>
            <Link to="/investment" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <TrendingUp size={16} className="mr-2 text-yellow-500" /> Investment
            </Link>
            <Link to="/international" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <Globe size={16} className="mr-2 text-yellow-500" /> International
            </Link>
            <Link to="/quantitative" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <LineChart size={16} className="mr-2 text-yellow-500" /> Quantitative
            </Link>
            <Link to="/accounts" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <Clipboard size={16} className="mr-2 text-yellow-500" /> Accounts
            </Link>
            <Link to="/cards" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <CreditCard size={16} className="mr-2 text-yellow-500" /> Cards
            </Link>
            <Link to="/loans" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <Home size={16} className="mr-2 text-yellow-500" /> Loans
            </Link>
            <Link to="/investments" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <TrendingUp size={16} className="mr-2 text-yellow-500" /> Investments
            </Link>
            <Link to="/insurance" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <ShieldCheck size={16} className="mr-2 text-yellow-500" /> Insurance
            </Link>
            <Link to="/services" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <Headphones size={16} className="mr-2 text-yellow-500" /> Services
            </Link>
            <Link to="/about" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">About Us</Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">Contact</Link>
            <Link to="/help" className="block px-4 py-2 hover:bg-gray-800 flex items-center text-white">
              <HelpCircle size={16} className="mr-2 text-yellow-500" /> Help
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
