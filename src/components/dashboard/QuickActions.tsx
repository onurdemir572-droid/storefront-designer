import { Plus, MessageCircle, Handshake } from "lucide-react";

const actions = [
  {
    icon: Plus,
    title: "Referans Ekle",
    description: "Usta Profilinizi Güçlendirin",
    buttonText: "Yönet",
    badge: null,
  },
  {
    icon: MessageCircle,
    title: "Talepleri Görüntüle",
    description: "Gelen Talepleri inceleyin",
    buttonText: "Görüntüle",
    badge: null,
  },
];

const QuickActions = () => {
  return (
    <div className="card-glass rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
      <h2 className="text-lg font-bold text-foreground mb-4">Hızlı İşlemler</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, i) => (
          <div
            key={action.title}
            className="bg-secondary/60 rounded-xl p-5 flex flex-col justify-between border border-border/40 card-glass-hover animate-scale-in"
            style={{ animationDelay: `${0.1 * i + 0.2}s` }}
          >
            <div>
              <div className="flex items-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <action.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm font-bold text-foreground">{action.title}</h3>
                    {action.badge && (
                      <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full glow-primary">
                        {action.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs mt-1">{action.description}</p>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full py-2.5 rounded-lg border border-accent/40 text-accent text-sm font-semibold hover:bg-accent hover:text-accent-foreground btn-outline-glow transition-all duration-300">
              {action.buttonText} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
