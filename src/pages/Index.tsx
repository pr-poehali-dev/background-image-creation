import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/d2159297-eadd-4019-bd69-6b02e0e6fe6b/files/0593c070-5148-4db7-9b68-3daf9bd08a77.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/60 via-warm-dark/40 to-warm-dark/70" />
        
        <div className="container relative z-10 px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-warm-cream mb-6 leading-tight">
                Привет!
              </h1>
              <p className="text-2xl md:text-3xl text-warm-cream/90 font-light mb-8">
                Я создаю красивые digital проекты
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-warm-orange hover:bg-warm-orange/90 text-white font-sans text-lg px-8">
                  Мои работы
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-warm-dark font-sans text-lg px-8">
                  Связаться
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-warm-orange to-warm-saddle rounded-2xl blur-2xl opacity-30" />
                <img 
                  src="https://cdn.poehali.dev/files/f25e72e1-ba61-4374-91b5-de63a9e0af8a.jpg"
                  alt="Portfolio"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 text-center animate-fade-in">
              Обо мне
            </h2>
            <div className="w-24 h-1 bg-warm-orange mx-auto mb-12" />
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-warm-cream/20 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-warm-orange/10 rounded-lg">
                    <Icon name="Palette" className="w-8 h-8 text-warm-orange" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                      Дизайн
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      Создаю уникальные визуальные решения, которые отражают индивидуальность каждого проекта. От концепции до финального дизайна.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-warm-cream/20 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-warm-orange/10 rounded-lg">
                    <Icon name="Code" className="w-8 h-8 text-warm-orange" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                      Разработка
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      Воплощаю дизайн в жизнь с помощью современных технологий. Чистый код, быстрая загрузка, адаптивность.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-warm-cream/20 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-warm-orange/10 rounded-lg">
                    <Icon name="Sparkles" className="w-8 h-8 text-warm-orange" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                      UX/UI
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      Проектирую интуитивные интерфейсы, которые делают взаимодействие с продуктом приятным и эффективным.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-warm-cream/20 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-warm-orange/10 rounded-lg">
                    <Icon name="Rocket" className="w-8 h-8 text-warm-orange" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                      Запуск
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      Помогаю с запуском проектов от идеи до релиза. Консультирую на всех этапах разработки.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-3xl mx-auto">
                Я занимаюсь веб-дизайном и разработкой уже более 5 лет. Мой подход — это сочетание креативности, 
                внимания к деталям и глубокого понимания потребностей клиента. Каждый проект для меня — это возможность 
                создать что-то особенное и запоминающееся.
              </p>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-3xl mx-auto">
                Работаю с современным стеком технологий: React, TypeScript, Tailwind CSS, Node.js. 
                Люблю экспериментировать с анимациями и микровзаимодействиями, которые оживляют интерфейсы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-warm-dark text-warm-cream">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-warm-cream/80">
              © 2024 Портфолио. Создано с любовью
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
