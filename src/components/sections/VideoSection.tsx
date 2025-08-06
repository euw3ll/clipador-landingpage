import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como o Sistema <span className="text-primary">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como o Clipador monitora streamers continuamente e entrega automaticamente 
            os clipes mais virais direto no seu Telegram.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative bg-gradient-card rounded-2xl p-1 shadow-card">
            <div className="relative bg-card rounded-xl overflow-hidden aspect-video group cursor-pointer">
              {/* Video Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-primary">
                    <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Demo: Bot em Funcionamento
                  </p>
                  <p className="text-muted-foreground">
                    3:25 minutos
                  </p>
                </div>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/80 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Volume2 className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground">0:00 / 3:25</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    HD
                  </div>
                </div>
                <div className="mt-2 bg-border rounded-full h-1 overflow-hidden">
                  <div className="w-1/4 h-full bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Monitoramento Contínuo</h3>
              <p className="text-muted-foreground text-sm">
                Sistema verifica lives a cada minuto para capturar momentos virais em tempo real.
              </p>
            </div>
            
            <div className="text-center p-6 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Entrega Automática</h3>
              <p className="text-muted-foreground text-sm">
                Clipes virais chegam direto no seu Telegram, prontos para download e uso.
              </p>
            </div>
            
            <div className="text-center p-6 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Canal Privado</h3>
              <p className="text-muted-foreground text-sm">
                Cada usuário tem seu canal exclusivo com clipes dos streamers que escolher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;