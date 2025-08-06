import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Trophy, Crown } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Mensal Solo",
      price: "R$19,90",
      period: "/mês",
      icon: <Check className="w-5 h-5" />,
      features: [
        "1 streamer monitorado",
        "Clipes entregues no Telegram",
        "IA detecta momentos virais"
      ],
      popular: false,
      buttonText: "Começar Solo",
      buttonVariant: "outline" as const
    },
    {
      name: "Mensal Plus",
      price: "R$39,90",
      period: "/mês",
      icon: <Trophy className="w-5 h-5 text-yellow-500" />,
      features: [
        "Até 3 canais monitorados",
        "Ideal pra clippers/agências",
        "Monitoramento inteligente"
      ],
      popular: true,
      buttonText: "Escolher Plus",
      buttonVariant: "default" as const
    },
    {
      name: "Anual Pro",
      price: "R$199,00",
      period: "/ano",
      icon: <Crown className="w-5 h-5 text-purple-500" />,
      features: [
        "5 canais monitorados",
        "Economia de 2 meses",
        "Prioridade no suporte"
      ],
      popular: false,
      buttonText: "Escolher Pro",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-6 text-sm text-muted-foreground">
            <Star className="w-4 h-4 text-primary" />
            Planos do Clipador
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Escolha Seu Plano
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitore seus streamers favoritos e receba apenas os clipes mais virais automaticamente
          </p>
        </div>

        {/* Free Trial Banner */}
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold">Teste Gratuito (3 dias)</span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative p-6 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-xl animate-fade-in ${
                plan.popular 
                  ? 'border-primary bg-gradient-to-b from-primary/10 to-primary/5' 
                  : 'border-border/50 bg-card/50 hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground animate-pulse">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {plan.icon}
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                </div>
                
                <div className="flex items-center justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant}
                  className="w-full group"
                  onClick={() => window.open('https://t.me/ClipadorBot', '_blank')}
                >
                  {plan.buttonText}
                  <Check className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;