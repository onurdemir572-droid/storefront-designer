import { Home, User, FileText, MessageCircle, Users, Settings, CheckCircle } from "lucide-react";
import recyclingLogo from "@/assets/recycling-logo.png";

const navItems = [
  { icon: Home, label: "Genel Bakış", active: true },
  { icon: User, label: "Profil" },
  { icon: Bell, label: "Bildirimlerim" },
  { icon: FileText, label: "İlanlarım" },
  { icon: MessageCircle, label: "Mesaj Kutusu", badge: 37 },
  { icon: Users, label: "Topluluk Projeleri" },
  { icon: Settings, label: "Ayarlar" },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo & User */}
      <div className="p-6 flex flex-col items-center border-b border-sidebar-border">
        <div className="w-20 h-20 rounded-full border-2 border-primary bg-secondary flex items-center justify-center overflow-hidden mb-3">
          <img src={recyclingLogo} alt="Logo" width={64} height={64} className="object-contain" />
        </div>
        <h2 className="text-foreground font-bold text-lg">Test Kullanıcı</h2>
        <p className="text-muted-foreground text-sm">Mağazam</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1 ${
              item.active
                ? "bg-sidebar-accent text-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Membership Card */}
      <div className="p-4 m-3 rounded-xl bg-secondary border border-border">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          <span className="text-sm font-bold text-foreground">MAĞAZA ÜYELİĞİ</span>
        </div>
        <p className="text-muted-foreground text-xs mb-1">Bitiş: 13.03.2026</p>
        <button className="text-accent text-sm font-semibold hover:underline flex items-center gap-1">
          Avantajları Gör →
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
