
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { PricingPage } from "@/pages/PricingPage";
import { GeographyPage } from "@/pages/GeographyPage";
import { FleetPage } from "@/pages/FleetPage";
import { ReviewsPage } from "@/pages/ReviewsPage";
import { ContactsPage } from "@/pages/ContactsPage";

// Новые страницы услуг
import { CargoServicesPage } from "@/pages/services/CargoServicesPage";
import { MovingServicesPage } from "@/pages/services/MovingServicesPage";
import { ExpressServicesPage } from "@/pages/services/ExpressServicesPage";
import { RefrigeratorServicesPage } from "@/pages/services/RefrigeratorServicesPage";
import { OversizedServicesPage } from "@/pages/services/OversizedServicesPage";
import { InternationalServicesPage } from "@/pages/services/InternationalServicesPage";
import { WarehouseServicesPage } from "@/pages/services/WarehouseServicesPage";
import { InsuranceServicesPage } from "@/pages/services/InsuranceServicesPage";

// Страницы географии
import { MoscowGeographyPage } from "@/pages/geography/MoscowGeographyPage";
import { RegionsGeographyPage } from "@/pages/geography/RegionsGeographyPage";
import { InternationalGeographyPage } from "@/pages/geography/InternationalGeographyPage";
import { RoutesGeographyPage } from "@/pages/geography/RoutesGeographyPage";

// Страницы о компании
import { AboutCompanyPage } from "@/pages/company/AboutCompanyPage";
import { HistoryCompanyPage } from "@/pages/company/HistoryCompanyPage";
import { TeamCompanyPage } from "@/pages/company/TeamCompanyPage";
import { CertificatesCompanyPage } from "@/pages/company/CertificatesCompanyPage";
import { PartnersCompanyPage } from "@/pages/company/PartnersCompanyPage";
import { VacanciesCompanyPage } from "@/pages/company/VacanciesCompanyPage";

// Страницы для клиентов
import { CalculatorPage } from "@/pages/clients/CalculatorPage";
import { TrackingPage } from "@/pages/clients/TrackingPage";
import { DocumentsPage } from "@/pages/clients/DocumentsPage";
import { PaymentPage } from "@/pages/clients/PaymentPage";
import { FAQPage } from "@/pages/clients/FAQPage";
import { SupportPage } from "@/pages/clients/SupportPage";

// Дополнительные функциональные страницы
import { NewsPage } from "@/pages/NewsPage";
import { BlogPage } from "@/pages/BlogPage";
import { CareersPage } from "@/pages/CareersPage";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/cargo" element={<CargoServicesPage />} />
          <Route path="/services/moving" element={<MovingServicesPage />} />
          <Route path="/services/express" element={<ExpressServicesPage />} />
          <Route path="/services/refrigerator" element={<RefrigeratorServicesPage />} />
          <Route path="/services/oversized" element={<OversizedServicesPage />} />
          <Route path="/services/international" element={<InternationalServicesPage />} />
          <Route path="/services/warehouse" element={<WarehouseServicesPage />} />
          <Route path="/services/insurance" element={<InsuranceServicesPage />} />
          
          <Route path="/pricing" element={<PricingPage />} />
          
          <Route path="/geography" element={<GeographyPage />} />
          <Route path="/geography/moscow" element={<MoscowGeographyPage />} />
          <Route path="/geography/regions" element={<RegionsGeographyPage />} />
          <Route path="/geography/international" element={<InternationalGeographyPage />} />
          <Route path="/geography/routes" element={<RoutesGeographyPage />} />
          
          <Route path="/fleet" element={<FleetPage />} />
          
          <Route path="/company/about" element={<AboutCompanyPage />} />
          <Route path="/company/history" element={<HistoryCompanyPage />} />
          <Route path="/company/team" element={<TeamCompanyPage />} />
          <Route path="/company/certificates" element={<CertificatesCompanyPage />} />
          <Route path="/company/partners" element={<PartnersCompanyPage />} />
          <Route path="/company/vacancies" element={<VacanciesCompanyPage />} />
          
          <Route path="/clients/calculator" element={<CalculatorPage />} />
          <Route path="/clients/tracking" element={<TrackingPage />} />
          <Route path="/clients/documents" element={<DocumentsPage />} />
          <Route path="/clients/payment" element={<PaymentPage />} />
          <Route path="/clients/faq" element={<FAQPage />} />
          <Route path="/clients/support" element={<SupportPage />} />
          
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;