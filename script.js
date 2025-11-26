import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
    Menu, X, MapPin, Phone, Mail, Instagram, Facebook, 
    IceCream2, Cake, Star, ArrowRight, Heart, ChefHat, 
    Leaf, Search, ShoppingBag, Info, ChevronRight
} from 'lucide-react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('gelati');
    const [scrolled, setScrolled] = useState(false);

    // Gestione scroll per la navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Dati del sito
    const products = {
        gelati: [
            { name: "Whisky e Caramello", desc: "Un abbinamento audace e avvolgente", image: "https://images.unsplash.com/photo-1.579954115563e+12-e72bf1381629?auto=format&fit=crop&w=800&q=80" },
            { name: "Fragola", desc: "Freschezza pura con frutta di stagione", image: "https://images.unsplash.com/photo-1.557142046e+09-c704a3adf364?auto=format&fit=crop&w=800&q=80" },
            { name: "Zabaione", desc: "Il classico intramontabile", image: "https://images.unsplash.com/photo-1.563805042e+09-7684c019e1cb?auto=format&fit=crop&w=800&q=80" },
            { name: "Gold Caramel", desc: "Dolcezza dorata e intensa", image: "https://images.unsplash.com/photo-1.497034825429e+12-c343d7c6a68f?auto=format&fit=crop&w=800&q=80" },
            { name: "Mirtilli", desc: "Il gusto del bosco", image: "https://images.unsplash.com/photo-1.488900128323e+12-21503983a07e?auto=format&fit=crop&w=800&q=80" },
            { name: "Cremino al Caramello", desc: "Strati di pura golosità", image: "https://images.unsplash.com/photo-1.553177595e+09-4de2bb0842b9?auto=format&fit=crop&w=800&q=80" },
            { name: "Cremino alla Gianduia", desc: "Per gli amanti del cioccolato e nocciole", image: "https://images.unsplash.com/photo-1.560008581e+09-09826d1de69e?auto=format&fit=crop&w=800&q=80" },
            { name: "Paradiso", desc: "Soffice e delicato", image: "https://images.unsplash.com/photo-1.505394033641e+12-40c6ad1178d7?auto=format&fit=crop&w=800&q=80" },
        ],
        granite: [
            { name: "Granita SPRITZ", desc: "L'aperitivo diventa granita", image: "https://images.unsplash.com/photo-1.556679343e+09-c7306c1976bc?auto=format&fit=crop&w=800&q=80" },
            { name: "Granita al Pistacchio", desc: "Oro verde di Sicilia", image: "https://images.unsplash.com/photo-1.554522723e+09-b2a47cb105e3?auto=format&fit=crop&w=800&q=80" },
            { name: "Granita alla Fragola", desc: "Fresca e dissetante", image: "https://images.unsplash.com/photo-1.623594639352e+12-78d125345638?auto=format&fit=crop&w=800&q=80" },
            { name: "Granita al Limone", desc: "Il classico dell'estate", image: "https://images.unsplash.com/photo-1.513558161293e+12-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80" },
        ],
        torte: [
            { name: "Semifreddo Kinder Bueno", desc: "Irresistibile", image: "https://images.unsplash.com/photo-1.578985545062e+12-69928b1d9587?auto=format&fit=crop&w=800&q=80" },
            { name: "Semifreddo Kinder", desc: "Il gusto che piace a tutti", image: "https://images.unsplash.com/photo-1.621303837174e+12-89787a7d4729?auto=format&fit=crop&w=800&q=80" },
            { name: "Tre Strati", desc: "Un trionfo di cioccolato", image: "https://images.unsplash.com/photo-1.571115177098e+12-24ec42ed204d?auto=format&fit=crop&w=800&q=80" },
            { name: "Pistacchio", desc: "Per veri intenditori", image: "https://www.lucake.it/wp-content/uploads/2023/03/torta-tiramisu-al-pistacchio.jpg" },
            { name: "Pan di Stelle", desc: "Stellare e croccante", image: "https://blog.giallozafferano.it/millegrammi/wp-content/uploads/2022/07/IMG_7282.jpeg" },
            { name: "Torte di Compleanno", desc: "Personalizzate per i tuoi eventi", image: "https://images.unsplash.com/photo-1.535141192574e+12-5d4897c12636?auto=format&fit=crop&w=800&q=80" },
        ],
        proteici: [
            { name: "Dark Power", desc: "High protein, zero zuccheri aggiunti", image: "https://images.unsplash.com/photo-1.580915411954e+12-282cb1b0d780?auto=format&fit=crop&w=800&q=80" },
            { name: "Peanut Pump", desc: "Cremoso, energetico e ricco di proteine", image: "https://images.unsplash.com/photo-1.563805042e+09-7684c019e1cb?auto=format&fit=crop&w=800&q=80" },
            { name: "Pistacchio Energy", desc: "Energia verde e proteine nobili", image: "https://images.unsplash.com/photo-1.554522723e+09-b2a47cb105e3?auto=format&fit=crop&w=800&q=80" },
            { name: "Vaniglia Whey", desc: "Pura essenza di vaniglia proteica", image: "https://images.unsplash.com/photo-1.570197788417e+12-0e82375c9371?auto=format&fit=crop&w=800&q=80" },
        ]
    };

    const values = [
        { title: "Ingredienti selezionati", icon: <Leaf className="w-8 h-8 text-green-500" />, text: "Utilizziamo solo materie prime di eccellenza, privilegiando prodotti freschi e naturali. Frutta di stagione, latte fresco e cioccolato puro." },
        { title: "Ricerca e innovazione", icon: <Search className="w-8 h-8 text-blue-500" />, text: "La tradizione incontra la creatività. Proponiamo varianti originali e accostamenti unici per sorprendere anche i palati più curiosi." },
        { title: "Genuinità", icon: <Heart className="w-8 h-8 text-red-500" />, text: "Privo di conservanti, coloranti artificiali e additivi. Puntiamo sulla purezza degli ingredienti e su metodi di lavorazione tradizionali." },
        { title: "Attenzione al cliente", icon: <ChefHat className="w-8 h-8 text-amber-500" />, text: "Offriamo opzioni per intolleranze alimentari, come gelati senza lattosio, vegani e senza glutine." }
    ];

    const testimonials = [
        { name: "Lisa", text: "Buona gelateria con ampia scelta di gusti. Comoda la posizione. Quello che è veramente speciale sono le granite che fanno in estate. Da provare in molti gusti diversi. Veramente squisite." },
        { name: "Paolo", text: "Fantastica gelateria. Il cremino è da urlo. Ottime anche le brioches con il gelato. La granita non è da meno. Consigliatissima." },
        { name: "Tiziano P.", text: "Gelato molto buono, tra i gusti più particolari ho apprezzato molto il croccante amarena ed il caramello salato. Qualità ottima e prezzi nella media." },
        { name: "Marco D.", text: "Gelato davvero buonissimo, consigliato il pistacchio, tra i più buoni che abbia mai mangiato!" }
    ];

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen selection:bg-pink-100">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full text-white shadow-lg">
                <IceCream2 size={24} />
                </div>
                <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">AI MASTER</span>
                <span className="text-xs font-semibold text-pink-500 tracking-widest uppercase">Gelateria</span>
                </div>
            </div>
            
            {/* Desktop Menu */}
            <div className={`hidden md:flex gap-8 items-center font-medium text-sm tracking-wide ${scrolled ? 'text-gray-700' : 'text-gray-900'}`}>
                <button onClick={() => scrollToSection('home')} className="hover:text-pink-600 transition underline-offset-4 hover:underline">HOME</button>
                <button onClick={() => scrollToSection('prodotti')} className="hover:text-pink-600 transition underline-offset-4 hover:underline">I NOSTRI PRODOTTI</button>
                <button onClick={() => scrollToSection('chi-siamo')} className="hover:text-pink-600 transition underline-offset-4 hover:underline">CHI SIAMO</button>
                <button onClick={() => scrollToSection('contatti')} className="hover:text-pink-600 transition underline-offset-4 hover:underline">CONTATTACI</button>
                <a href="https://deliveroo.it/it/menu/pavia/centro-storico/ai-master-gelateria" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-6 py-2.5 rounded-full hover:bg-pink-700 transition shadow-lg hover:shadow-pink-500/30 flex items-center gap-2 font-bold transform hover:-translate-y-0.5">
                <ShoppingBag size={18} /> ORDINA ORA
                </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-gray-800 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
            <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 text-xl font-medium md:hidden animate-fade-in">
            <button onClick={() => scrollToSection('home')} className="border-b border-gray-100 pb-4 text-left flex justify-between items-center text-gray-800">Home <ChevronRight size={20} className="text-gray-400"/></button>
            <button onClick={() => scrollToSection('prodotti')} className="border-b border-gray-100 pb-4 text-left flex justify-between items-center text-gray-800">I Nostri Prodotti <ChevronRight size={20} className="text-gray-400"/></button>
            <button onClick={() => scrollToSection('chi-siamo')} className="border-b border-gray-100 pb-4 text-left flex justify-between items-center text-gray-800">Chi Siamo <ChevronRight size={20} className="text-gray-400"/></button>
            <button onClick={() => scrollToSection('contatti')} className="border-b border-gray-100 pb-4 text-left flex justify-between items-center text-gray-800">Contattaci <ChevronRight size={20} className="text-gray-400"/></button>
            <a href="https://deliveroo.it/it/menu/pavia/centro-storico/ai-master-gelateria" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white py-4 rounded-xl text-center mt-4 shadow-lg font-bold block">
                ORDINA ORA
            </a>
            </div>
        )}

        {/* Hero Section */}
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1.516559828984e+12-fb3b99548b21?auto=format&fit=crop&w=1920&q=80" alt="Gelato background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/90"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center pt-20">
            <div className="inline-block py-1.5 px-4 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 text-pink-600 text-xs font-bold mb-6 tracking-widest uppercase shadow-sm animate-fade-in">
                Gelateria Artigianale a Pavia
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight">
                Il gusto autentico <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">della tradizione</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Dal desiderio di portare un'esperienza di dolcezza autentica nel cuore di Pavia. 
                Ingredienti naturali e processi rigorosamente artigianali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => scrollToSection('prodotti')} className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Scopri i Gusti <ArrowRight size={20} />
                </button>
                <button onClick={() => scrollToSection('contatti')} className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 border border-gray-200 rounded-full font-bold hover:border-pink-500 hover:text-pink-600 transition flex items-center justify-center gap-2 shadow-sm">
                Dove Siamo <MapPin size={20} />
                </button>
            </div>
            </div>
        </section>

        {/* Chi Siamo Section */}
        <section id="chi-siamo" className="py-24 bg-white relative">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-50"></div>
            <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative rotate-2 group-hover:rotate-0 transition-all duration-500">
                    <img src="https://aimastergelateria.it/wp-content/uploads/2024/11/467571410_1096060052521792_1277638495559248665_n-700x700.jpg" alt="Davide e Medea" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold text-lg">Davide & Medea</p>
                    <p className="text-sm opacity-90">Maestri Gelatieri</p>
                    </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white p-6 rounded-full shadow-xl border-4 border-pink-50 hidden md:flex flex-col items-center justify-center w-32 h-32 animate-bounce-slow">
                    <span className="text-3xl font-bold text-pink-600">100%</span>
                    <span className="text-xs text-gray-500 font-bold uppercase">Amore</span>
                </div>
                </div>
                
                <div>
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-1 w-10 bg-pink-500 rounded-full"></div>
                    <span className="text-pink-600 font-bold uppercase tracking-wider text-sm">La Nostra Storia</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Passione artigianale nel cuore di Pavia</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    La gelateria <strong className="text-pink-600">Ai Master</strong> nasce dal desiderio di portare un'esperienza di dolcezza autentica. 
                    L'attività ha radici in una lunga tradizione di gelateria artigianale che ha attraversato diverse mani appassionate fino ad arrivare a 
                    Davide e Medea, attuali custodi di questo dolce angolo della città.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                    <div className="border-l-4 border-pink-200 pl-6">
                    <span className="block text-4xl font-bold text-gray-900 mb-1">100%</span>
                    <span className="text-gray-500 font-medium">Artigianale</span>
                    </div>
                    <div className="border-l-4 border-pink-200 pl-6">
                    <span className="block text-4xl font-bold text-gray-900 mb-1">0%</span>
                    <span className="text-gray-500 font-medium">Conservanti</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Values Cards */}
        <section className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Cosa ci distingue?</h2>
                <p className="text-gray-500">I nostri 4 pilastri per un gelato perfetto.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((val, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group">
                    <div className="mb-6 bg-stone-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                    {val.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{val.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{val.text}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Products Section */}
        <section id="prodotti" className="py-24 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">I Nostri Prodotti</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Una scelta per tutti i gusti. Dal cono croccante alla coppetta cremosa, fino alle torte per le tue occasioni speciali.
                </p>
            </div>

            <div className="flex justify-center mb-16">
                <div className="inline-flex bg-stone-100 p-1.5 rounded-full shadow-inner flex-wrap justify-center">
                {['gelati', 'granite', 'torte', 'proteici'].map((tab) => (
                    <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 md:px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                        activeTab === tab 
                        ? 'bg-white text-pink-600 shadow-md transform scale-100' 
                        : 'text-gray-500 hover:text-gray-800 hover:bg-stone-200/50'
                    }`}
                    >
                    {tab}
                    </button>
                ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products[activeTab].map((item, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
                    <div className="aspect-[4/5] overflow-hidden relative">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.name}</h3>
                            <p className="text-gray-200 text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">{item.desc}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-pink-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
            <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <span className="text-pink-600 font-bold tracking-widest uppercase text-sm">Feedback</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-2">Dicono di noi</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-xl shadow-pink-100/50 flex flex-col">
                    <div className="text-yellow-400 flex gap-1 mb-6">
                    {[...Array(5)].map((_, stars) => <Star key={stars} size={18} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-600 italic mb-6 text-sm leading-relaxed flex-grow">"{t.text}"</p>
                    <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                        {t.name.charAt(0)}
                    </div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Contact */}
        <section id="contatti" className="py-24 bg-stone-900 text-white">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                <div className="inline-block px-3 py-1 bg-stone-800 rounded-lg text-pink-500 text-sm font-bold mb-6">CONTATTACI</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Vieni a trovarci</h2>
                <p className="text-stone-400 mb-10 text-lg">Siamo nel cuore di Pavia. Passa a trovarci per una merenda o un dopocena all'insegna del gusto.</p>
                
                <div className="space-y-8 text-lg">
                    <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-pink-600 transition-colors"><MapPin className="text-white" size={20} /></div>
                    <div><h4 className="font-bold mb-1">Indirizzo</h4><p className="text-stone-300">Via Giuseppe Scaramuzza, 34<br/>27100 Pavia (PV)</p></div>
                    </div>
                    <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-pink-600 transition-colors"><Phone className="text-white" size={20} /></div>
                    <div><h4 className="font-bold mb-1">Telefono</h4><a href="tel:0382576677" className="text-stone-300 hover:text-white transition">0382 576677</a></div>
                    </div>
                    <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-pink-600 transition-colors"><Mail className="text-white" size={20} /></div>
                    <div><h4 className="font-bold mb-1">Email</h4><a href="mailto:aimastergelateria@gmail.com" className="text-stone-300 hover:text-white transition">aimastergelateria@gmail.com</a></div>
                    </div>
                </div>
                
                <div className="mt-12 flex gap-4">
                    <a href="https://www.instagram.com/ai_master_gelateria/" className="w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition transform hover:-translate-y-1"><Instagram size={28} /></a>
                    <a href="https://www.facebook.com/AiMastergelateria/" className="w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition transform hover:-translate-y-1"><Facebook size={28} /></a>
                </div>
                </div>

                <div className="relative">
                    <div className="bg-stone-800 rounded-3xl p-3 h-[500px] overflow-hidden relative shadow-2xl border border-stone-700">
                    <div className="w-full h-full bg-stone-700 rounded-2xl relative overflow-hidden">
                        <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Ai%20Master%20Gelateria%20Pavia&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className="w-full h-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"></iframe>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <footer className="bg-black text-stone-500 py-12 text-sm border-t border-stone-800">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <span className="font-bold text-stone-300">AI MASTER</span>
            </div>
            <p>© 2024 Ai Master Gelateria. Tutti i diritti riservati.</p>
            </div>
        </footer>

        <div className="fixed bottom-6 right-6 md:hidden z-40">
            <a href="https://deliveroo.it/it/menu/pavia/centro-storico/ai-master-gelateria" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white p-4 rounded-full shadow-2xl hover:bg-pink-700 transition transform hover:scale-110 active:scale-95 flex items-center justify-center">
            <ShoppingBag size={24} />
            </a>
        </div>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
