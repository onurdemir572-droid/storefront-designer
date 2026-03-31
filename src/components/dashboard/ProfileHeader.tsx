import { MapPin, Calendar, MessageCircle, Edit, Phone, Mail } from "lucide-react";
import coverBanner from "@/assets/cover-banner.jpg";
import recyclingLogo from "@/assets/recycling-logo.png";

const ProfileHeader = () => {
  return (
    <div className="rounded-xl overflow-hidden bg-card border border-border">
      {/* Cover */}
      <div className="h-36 relative overflow-hidden">
        <img src={coverBanner} alt="Kapak" width={1920} height={512} className="w-full h-full object-cover" />
      </div>

      {/* Profile Info */}
      <div className="px-6 pb-6 relative">
        <div className="flex items-end justify-between -mt-10">
          <div className="flex items-end gap-4">
            <div className="w-20 h-20 rounded-full border-4 border-card bg-secondary flex items-center justify-center overflow-hidden relative z-10">
              <img src={recyclingLogo} alt="Profil" width={64} height={64} className="object-contain" />
            </div>
            <div className="pb-1">
              <h1 className="text-xl font-bold text-foreground">Test Kullanıcı</h1>
              <p className="text-muted-foreground text-sm">Toptancı / Geri Dönüşüm</p>
              <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> İstanbul, Kocaeli, Tekirdağ</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Üye: 18 Mart 2026 • Mağaza Üyesi</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 pb-1">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-foreground hover:bg-secondary transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp ile İletişime Geç
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-foreground hover:bg-secondary transition-colors">
              <Edit className="w-4 h-4" /> Profil Düzenle
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
          {[
            { value: "12", label: "Aktif İlan" },
            { value: "37", label: "Gelen Talep" },
            { value: "5", label: "Hizmet Verilen Şehir" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-stat-number">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
