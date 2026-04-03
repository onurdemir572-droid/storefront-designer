import { useState } from "react";
import { Eye } from "lucide-react";
import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";

const listings = [
  {
    image: listing1,
    title: "Kırım Molozu (Beton, Tuğla Kiriği)",
    location: "İstanbul Anadolu Yakası • 1 kamyon ve Üzeri",
    views: "1.250 görüntüleme",
    status: "Aktif",
  },
  {
    image: listing2,
    title: "İnşaat Temizliği Molozu Alınır",
    location: "İstanbul geneli • Günlük sevkiyat",
    views: "980 görüntüleme",
    status: "Aktif",
  },
  {
    image: listing3,
    title: "Geri Dönüşüm Hurdaşı Çeşitleri",
    location: "Denizli, İstanbul, Kocaeli • Yerinde alım",
    views: "860 görüntüleme",
    status: "Aktif",
  },
];

const StoreListings = () => {
  const [activeTab, setActiveTab] = useState<"vitrin" | "yayinda">("vitrin");

  return (
    <div className="card-glass rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.25s" }}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1 border border-border/30">
          <button
            onClick={() => setActiveTab("vitrin")}
            className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
              activeTab === "vitrin"
                ? "bg-primary text-primary-foreground glow-primary shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Referanslarım
          </button>
          <button
            onClick={() => setActiveTab("yayinda")}
            className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
              activeTab === "yayinda"
                ? "bg-primary text-primary-foreground glow-primary shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Yayındaki İlanlarım
          </button>
        </div>
        <button className="text-muted-foreground text-sm hover:text-accent transition-colors duration-200 font-medium">
          Tüm İlanlarım →
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {listings.map((listing, i) => (
          <div
            key={listing.title}
            className="flex items-center gap-4 bg-secondary/50 rounded-xl p-4 border border-border/30 card-glass-hover animate-scale-in group"
            style={{ animationDelay: `${0.08 * i + 0.3}s` }}
          >
            <div className="relative overflow-hidden rounded-lg flex-shrink-0">
              <img
                src={listing.image}
                alt={listing.title}
                loading="lazy"
                width={80}
                height={80}
                className="w-20 h-20 rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold text-foreground truncate">{listing.title}</h3>
                <span className="flex-shrink-0 bg-badge-active/15 text-badge-active text-xs font-bold px-2.5 py-1 rounded-md border border-badge-active/30">
                  {listing.status}
                </span>
              </div>
              <p className="text-muted-foreground text-xs mt-1.5">{listing.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreListings;
