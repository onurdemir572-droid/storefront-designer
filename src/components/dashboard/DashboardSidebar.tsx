import { Home, User, FileText, MessageCircle, Users, Settings, CheckCircle, Bell, Shield } from "lucide-react";
import recyclingLogo from "@/assets/recycling-logo.png";

const navItems = [
  { icon: Home, label: "Genel Bakış", active: true },
  { icon: User, label: "Profil" },
  { icon: Bell, label: "Bildirimlerim" },
  { icon: FileText, label: "İlanlarım" },
  { icon: MessageCircle, label: "Mesaj Kutusu" },
  { icon: Users, label: "Topluluk Projeleri" },
  { icon: Settings, label: "Ayarlar" },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-64 min-h-screen sidebar-glass border-r border-sidebar-border flex flex-col">
      {/* Logo & User */}
      <div className="p-6 flex flex-col items-center border-b border-sidebar-border">
        <div className="w-20 h-20 rounded-full border-2 border-primary/50 bg-secondary flex items-center justify-center overflow-hidden mb-3 glow-primary animate-fade-in">
          <img src={recyclingLogo} alt="Logo" width={64} height={64} className="object-contain" />
        </div>
        <h2 className="text-foreground font-bold text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>Test Kullanıcı</h2>
        <p className="text-muted-foreground text-sm animate-fade-in" style={{ animationDelay: "0.15s" }}>Mağazam</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3">
        {navItems.map((item, i) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 mb-1 animate-slide-in-left ${
              item.active
                ? "nav-active text-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-foreground hover:translate-x-1"
            }`}
            style={{ animationDelay: `${0.05 * i}s` }}
          >
            <item.icon className={`w-5 h-5 ${item.active ? "text-primary" : ""}`} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Membership Card */}
      <div className="p-4 m-3 rounded-xl card-glass border border-primary/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm font-bold text-foreground">MAĞAZA ÜYELİĞİ</span>
        </div>
        <p className="text-muted-foreground text-xs mb-1">Bitiş: 13.03.2026</p>
        <p className="text-accent text-sm font-semibold">Aboneliğinizin bitmesine 347 gün kaldı</p>
        {/* Progress bar */}
        <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
