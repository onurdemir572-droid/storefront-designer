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
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">Mağaza Vitrinim</h2>
        <button className="text-muted-foreground text-sm hover:text-foreground transition-colors">
          Tüm İlanlarım →
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {listings.map((listing) => (
          <div
            key={listing.title}
            className="flex items-center gap-4 bg-secondary rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
          >
            <img
              src={listing.image}
              alt={listing.title}
              loading="lazy"
              width={80}
              height={80}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold text-foreground truncate">{listing.title}</h3>
                <span className="flex-shrink-0 bg-badge-active/20 text-badge-active text-xs font-bold px-2 py-0.5 rounded border border-badge-active/40">
                  {listing.status}
                </span>
              </div>
              <p className="text-muted-foreground text-xs mt-1">{listing.location}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{listing.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreListings;
