import { Plus, MessageCircle, Handshake } from "lucide-react";

const actions = [
  {
    icon: Plus,
    title: "Yeni İlan Ekle",
    description: "Vitrininizi güçlendirin",
    buttonText: "Yönet",
    badge: null,
  },
  {
    icon: MessageCircle,
    title: "Talepleri Görüntüle",
    description: "Gelen Talepleri inceleyin",
    buttonText: "Görüntüle",
    badge: "37 yeni",
  },
  {
    icon: Handshake,
    title: "Gerçekleştirilen Topluluk Projeleri Yardımları",
    description: "Topluluk projelerinizi gösterin",
    buttonText: "Projeler",
    badge: null,
  },
];

const QuickActions = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h2 className="text-lg font-bold text-foreground mb-4">Hızlı İşlemler</h2>
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action) => (
          <div
            key={action.title}
            className="bg-secondary rounded-xl p-5 flex flex-col justify-between border border-border hover:border-primary/30 transition-colors"
          >
            <div>
              <div className="flex items-start gap-2 mb-2">
                <action.icon className="w-6 h-6 text-accent mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-foreground">{action.title}</h3>
                    {action.badge && (
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                        {action.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs mt-1">{action.description}</p>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full py-2 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
              {action.buttonText} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
