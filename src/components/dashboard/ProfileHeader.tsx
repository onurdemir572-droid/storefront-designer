import { useState } from "react";
import { MapPin, Calendar, Edit, Phone, Mail, Home, CreditCard } from "lucide-react";
import coverBanner from "@/assets/cover-banner.jpg";
import recyclingLogo from "@/assets/recycling-logo.png";
import { MasterDetailModal } from "./MasterDetailModal";
import type { Master } from "@/types/master";

const currentMaster: Master = {
  id: "1",
  name: "Test Kullanıcı",
  listingTitle: "Usta Profili",
  title: "Usta / Hizmet Sağlayıcı",
  avatar: recyclingLogo,
  coverImage: coverBanner,
  services: ["Tadilat", "Boya Badana", "Elektrik Tesisatı", "Su Tesisatı", "Alçı & Sıva"],
  city: "Kocaeli",
  district: "Gebze",
  phone: "+90 532 000 00 00",
  email: "kullanici@gmail.com",
  rating: 4.8,
  reviewCount: 24,
  experience: "12 yıl",
  bio: "İstanbul, Kocaeli ve Tekirdağ bölgelerinde tadilat, boya badana, elektrik ve su tesisatı alanlarında hizmet vermekteyim. Müşteri memnuniyeti odaklı, kaliteli işçilik anlayışıyla çalışıyorum.",
  references: [],
  documents: [],
};

const ProfileHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="rounded-xl overflow-hidden card-glass animate-fade-in">
        {/* Cover as full background behind profile info */}
        <div className="relative">
          <img src={coverBanner} alt="Kapak" width={1920} height={512} className="w-full h-56 object-cover" />
          <button
            onClick={() => setModalOpen(true)}
            className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-card/70 backdrop-blur-md border border-border/50 text-sm font-semibold text-foreground hover:bg-card/90 transition-all duration-300 z-10"
          >
            <CreditCard className="w-4 h-4 text-primary" /> Usta Kartı Ön İzleme
          </button>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />

          {/* Profile Info overlaid on cover */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-2">
            <div className="flex items-end justify-between">
              <div className="flex items-end gap-4">
                <div className="w-24 h-24 rounded-full border-4 border-card bg-secondary flex items-center justify-center overflow-hidden relative z-10 glow-primary ring-2 ring-primary/30">
                  <img src={recyclingLogo} alt="Profil" width={72} height={72} className="object-contain" />
                </div>
                <div className="pb-1">
                  <h1 className="text-xl font-bold text-foreground">Test Kullanıcı</h1>
                  <p className="text-primary text-sm font-medium">Usta / Hizmet Sağlayıcı</p>
                  <div className="flex items-center gap-4 mt-1.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-accent" /> İstanbul, Kocaeli, Tekirdağ</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-accent" /> Üye: 18 Mart 2026 • Usta Üyesi</span>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-accent" /> +90 532 000 00 00</span>
                    <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-accent" /> kullanici@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Home className="w-3 h-3 text-accent" /> Organize Sanayi Bölgesi, 1. Cadde No:42, Gebze / Kocaeli</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pb-1">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm text-foreground hover:bg-secondary hover:border-muted-foreground/30 transition-all duration-300 backdrop-blur-sm">
                  <Edit className="w-4 h-4" /> Profil Düzenle
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Stats as cards */}
        <div className="grid grid-cols-3 gap-4 px-6 py-5">
          {[
            { value: "12", label: "Aktif İlan" },
            { value: "37", label: "Gelen Talep" },
            { value: "5", label: "Hizmet Verilen Şehir" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center py-5 px-3 rounded-xl bg-secondary/60 border border-border/40 card-glass-hover animate-scale-in"
              style={{ animationDelay: `${0.1 * i + 0.2}s` }}
            >
              <p className="text-3xl font-extrabold text-stat-number stat-glow">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <MasterDetailModal
        master={currentMaster}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
};

export default ProfileHeader;
