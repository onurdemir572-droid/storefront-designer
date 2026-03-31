import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import ProfileHeader from "@/components/dashboard/ProfileHeader";
import QuickActions from "@/components/dashboard/QuickActions";
import StoreListings from "@/components/dashboard/StoreListings";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        <ProfileHeader />
        <QuickActions />
        <StoreListings />
      </main>
    </div>
  );
};

export default Index;
