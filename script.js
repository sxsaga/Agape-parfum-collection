// Variables globales
let carrito = [];
let carritoAbierto = false;
const numeroWhatsApp = "+584127050149";
let todosProductos = [];

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar
    inicializarAñoActual();
    cargarProductosDesdeLista();
    inicializarEventListeners();
    mostrarBannerCookies();
    
    // Ocultar loading screen después de 2 segundos
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 2000);
});

// Inicializar el año actual en el footer
function inicializarAñoActual() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Cargar productos desde la lista proporcionada
function cargarProductosDesdeLista() {
    // Lista completa de productos
    const listaProductos = [
        // CABALLEROS
        { nombre: "JEANNE ARTHES COLONIAL CLUB SIGNATURE EDT 100ML CABALLERO", categoria: "caballeros", precio: 45.99 },
        { nombre: "JEANNE ARTHES BOUM URBAN EDP 100ML CABALLERO", categoria: "caballeros", precio: 49.99 },
        { nombre: "LATTAFA QIMMAH FOR MEN EDP 100ML CABALLERO", categoria: "caballeros", precio: 42.50 },
        { nombre: "MAISON ALHAMBRA SO SCANDID EDP 100ML CABALLERO", categoria: "caballeros", precio: 38.75 },
        { nombre: "SET PERRY ELLIS 360 CLASICO EDT 100ML 4 PZAS CABALLERO", categoria: "estuches", precio: 89.99 },
        { nombre: "DIOR SAUVAGE EDP 200ML CABALLERO", categoria: "caballeros", precio: 120.00 },
        { nombre: "ARMANI EMPORIO STRONGER WITH YOU EDT 100ML CABALLERO", categoria: "caballeros", precio: 85.99 },
        { nombre: "ADIDAS CHAMPIONS LEAGUE ARENA EDIT EDT 100ML CABALLERO", categoria: "caballeros", precio: 25.50 },
        { nombre: "ADIDAS VICTORY LEAGUE EDT 100ML CABALLERO", categoria: "caballeros", precio: 24.99 },
        { nombre: "ADIDAS ICE DIVE EDT 100ML CABALLERO", categoria: "caballeros", precio: 23.75 },
        { nombre: "ARMAF CLUB DE NUIT BLING EDP 75ML CABALLERO", categoria: "caballeros", precio: 35.99 },
        { nombre: "LATTAFA ASAD ELIXIR EDP 100ML CABALLERO", categoria: "caballeros", precio: 44.50 },
        { nombre: "RASAI HAWAS MALIBU EDP 100ML CABALLERO", categoria: "caballeros", precio: 46.75 },
        { nombre: "DUMONT NITRO ELIXIR EDP 100ML CABALLERO", categoria: "caballeros", precio: 42.99 },
        { nombre: "AZZARO FOREVER WANTED ELIXIR PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 68.50 },
        { nombre: "LIZ CLAIBORNE CURVE CONNECT EDT 100ML CABALLERO", categoria: "caballeros", precio: 28.99 },
        { nombre: "LIZ CLAIBORNE CURVE CHILL EDT 125ML CABALLERO", categoria: "caballeros", precio: 29.50 },
        { nombre: "LIZ CLAIBORNE CURVE WAVE EDT 125ML CABALLERO", categoria: "caballeros", precio: 29.75 },
        { nombre: "VICTORINOX QUARTZ EDT 100ML CABALLERO", categoria: "caballeros", precio: 32.99 },
        { nombre: "VALENTINO UOMO BORN IN ROMA EXTRADOSE PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 78.50 },
        { nombre: "VIKTOR & ROLF SPICEBOMB DARK LEATHER EDP 90ML CABALLERO", categoria: "caballeros", precio: 85.99 },
        { nombre: "PACO RABANNE PHANTOM INTENSE EDP 150ML CABALLERO", categoria: "caballeros", precio: 79.50 },
        { nombre: "RASASI DAAREJ EDP 100ML CABALLERO", categoria: "caballeros", precio: 45.75 },
        { nombre: "MAISON ALHAMBRA GLACIER BOLD EDP 100ML CABALLERO", categoria: "caballeros", precio: 39.99 },
        { nombre: "BHARARA MAST ABSOLU EDP 100ML CABALLERO", categoria: "caballeros", precio: 52.50 },
        { nombre: "NARCISO RODRIGUEZ FOR HIM BLEU NOIR EDT 100ML CABALLERO", categoria: "caballeros", precio: 65.99 },
        { nombre: "BHARARA MAST ELIXIR EDP 100ML CABALLERO", categoria: "caballeros", precio: 54.75 },
        { nombre: "CAROLINA HERRERA 212 VIP BLACK ELIXIR EDP 100ML CABALLERO", categoria: "caballeros", precio: 82.99 },
        { nombre: "ARMAF SHK II BY SAOUD ALKAABI EDP 100ML DAMA", categoria: "mujer", precio: 42.50 },
        { nombre: "ARMAF SHK I BY SAOUD ALKAABI EDP 100ML CABALLERO", categoria: "caballeros", precio: 43.99 },
        { nombre: "JEAN PAUL GAULTIER LE MALE ELIXIR ABSOLU PARFUM INTENSE125ML CABALLERO", categoria: "caballeros", precio: 92.50 },
        { nombre: "CAROLINA HERREHA CH WILD LOVE EDP 100ML CABALLERO", categoria: "caballeros", precio: 68.99 },
        { nombre: "BHARARA MAST ROME IMAGINE EDP 100ML CABALLERO", categoria: "caballeros", precio: 56.75 },
        { nombre: "PACO RABANNE INVICTUS ACQUA EDT 100ML CABALLERO", categoria: "caballeros", precio: 58.99 },
        { nombre: "PACO RABANNE PHANTOM ELIXIR PARFUM INTENSE 100ML CABALLERO", categoria: "caballeros", precio: 85.50 },
        { nombre: "DAVIDOFF COOL WATER OCEANIC EDITION EDT 125ML CABALLERO", categoria: "caballeros", precio: 48.99 },
        { nombre: "CAROLINA HERRERA BAD BOY ELIXIR EDP 100ML CABALLERO", categoria: "caballeros", precio: 79.75 },
        { nombre: "CALVIN KLEIN OBSESSION NIGHT FOR MEN EDT 125ML CABALLERO", categoria: "caballeros", precio: 55.99 },
        { nombre: "ARMAF BEAU ACUTE EDP 100ML CABALLERO", categoria: "caballeros", precio: 41.50 },
        { nombre: "HUGO BOSS BOTTLED ELIXIR PARFUM INTENSE 100ML CABALLERO", categoria: "caballeros", precio: 88.99 },
        { nombre: "BURBERRY HERO PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 74.75 },
        { nombre: "ARMANI EMPORIO STRONGER WITH YOU PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 92.99 },
        { nombre: "CAROLINA HERRERA BAD BOY SPARKLING ICE EDT 100ML CABALLERO", categoria: "caballeros", precio: 65.50 },
        { nombre: "LATTAFA FAKHAR PLATIN EDP 100ML CABALLERO", categoria: "caballeros", precio: 43.99 },
        { nombre: "JEAN PAUL GAULTIER SCANDAL POUR HOMME EDP INTENSE 100ML CABALLERO", categoria: "caballeros", precio: 78.75 },
        { nombre: "DIOR DUNE POUR HOMME EDT 100ML CABALLERO", categoria: "caballeros", precio: 72.99 },
        { nombre: "ARMAF SIGNATURE NIGHT EDP 100ML CABALLERO", categoria: "caballeros", precio: 45.50 },
        { nombre: "EMPER GENIUS HAYAATI EDP 100ML CABALLERO", categoria: "caballeros", precio: 48.99 },
        { nombre: "ARMAF ODYSSEY REVOLUTION EDP 100ML CABALLERO", categoria: "caballeros", precio: 47.75 },
        { nombre: "LATTAFA LIAM BLUE SHINE EDP 100ML UNISEX", categoria: "unisex", precio: 49.99 },
        { nombre: "ARMAF CLUB DE NUIT LIONHEART EDP 100ML CABALLERO", categoria: "caballeros", precio: 52.50 },
        { nombre: "ISSEY MIYAKE L'EAU D'ISSEY BLEUE EDT 75ML CABALLERO", categoria: "caballeros", precio: 58.99 },
        { nombre: "BENETTON UNITED DREAMS GREEN CACTUS EDT 80ML CABALLERO", categoria: "caballeros", precio: 29.75 },
        { nombre: "FRENCH AVENUE LIQUID BRUN EDP 100ML CABALLERO", categoria: "caballeros", precio: 44.99 },
        { nombre: "JIMMY CHOO AQUA EDT 200ML CABALLERO", categoria: "caballeros", precio: 62.50 },
        { nombre: "THIERRY MUGLER A MEN FANTASM EDP SENSUELLE 100ML CABALLERO", categoria: "caballeros", precio: 78.99 },
        { nombre: "THIERRY MUGLER A MEN EDT 100ML CABALLERO", categoria: "caballeros", precio: 65.75 },
        { nombre: "PARFUMS DE MARLY PERCIVAL EDP 125ML CABALLERO", categoria: "caballeros", precio: 125.99 },
        { nombre: "ARABIYAT LA DI DA EDP 100ML CABALLERO", categoria: "caballeros", precio: 46.50 },
        { nombre: "PACO RABANNE PHANTON LEGION EDT 100ML CABALLERO", categoria: "caballeros", precio: 54.99 },
        { nombre: "MACARENA SYMPHONY 33 EDP 100ML CABALLERO", categoria: "caballeros", precio: 42.75 },
        { nombre: "BHARARA CHOCOLATE EDP 100ML CABALLERO", categoria: "caballeros", precio: 51.99 },
        { nombre: "BHARARA KING SOLEIL EDP 100ML CABALLERO", categoria: "caballeros", precio: 53.50 },
        { nombre: "ISSEY MIYAKE NUIT PARFUM 125ML CABALLERO", categoria: "caballeros", precio: 68.99 },
        { nombre: "ARMAF VOYAGE TITAN EDP 100ML CABALLERO", categoria: "caballeros", precio: 47.75 },
        { nombre: "LATTAFA NAJDIA INTENSE EDP 100ML CABALLERO", categoria: "caballeros", precio: 49.99 },
        { nombre: "LOEWE SOLO CEDRO EDT 100ML CABALLERO", categoria: "caballeros", precio: 72.50 },
        { nombre: "PARFUMS DE MARLY KALAN EDP 125ML CABALLERO", categoria: "caballeros", precio: 128.99 },
        { nombre: "PARFUMS DE MARLY PERSEUS EDP 125ML CABALLERO", categoria: "caballeros", precio: 129.75 },
        { nombre: "DOLCE & GABBANA DEVOTION EDP 100ML CABALLERO", categoria: "caballeros", precio: 88.99 },
        { nombre: "ADIDAS PURE GAME EDT 100ML", categoria: "caballeros", precio: 26.50 },
        { nombre: "ISSEY MIYAKE EDP 125ML CABALLERO", categoria: "caballeros", precio: 67.99 },
        { nombre: "LATTAFA SEHR EDP 100ML CABALLERO", categoria: "caballeros", precio: 44.75 },
        { nombre: "NAUTICA PURE BLUE EDT 100ML CABALLERO", categoria: "caballeros", precio: 34.99 },
        { nombre: "ARMAF ODYSSEY MANDARIN SKY ELIXIR LIMITED EDITION EDP 100ML CABALLERO", categoria: "caballeros", precio: 52.50 },
        { nombre: "TOUS BOY EDT 100ML NIÑO", categoria: "caballeros", precio: 32.99 },
        { nombre: "ARMAF THE FALCON EDP 100ML CABALLERO", categoria: "caballeros", precio: 48.75 },
        { nombre: "BHARARA MAST ROME EDP 100ML CABALLERO", categoria: "caballeros", precio: 55.99 },
        { nombre: "JEAN PAUL GAULTIER PARADISE GARDEN EDP 125ML CABALLERO", categoria: "caballeros", precio: 79.50 },
        { nombre: "BENETTON SPORT EDT 100ML CABALLERO", categoria: "caballeros", precio: 31.99 },
        { nombre: "MAISON ALHAMBRA JEAN LOWE INMORTAL EDP 100ML CABALLERO", categoria: "caballeros", precio: 46.75 },
        { nombre: "HUGO BOSS BOTTLED TONIC EDT 100ML CABALLERO", categoria: "caballeros", precio: 62.99 },
        { nombre: "ARMANI ACQUA DI GIO EDP 100ML CABALLERO", categoria: "caballeros", precio: 85.50 },
        { nombre: "HUGO BOSS BOTTLED TRIUMPH ELIXIR PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 89.99 },
        { nombre: "VERSACE EROS ENERGY EDP 100ML CABALLERO", categoria: "caballeros", precio: 72.75 },
        { nombre: "MAISON ALHAMBRA VICTORIOSO EDP 100ML CABALLERO", categoria: "caballeros", precio: 41.99 },
        { nombre: "DUMONT NITRO POUR HOMME EDP 100ML CABALLERO", categoria: "caballeros", precio: 44.50 },
        { nombre: "TOMMY HILFIGER FOREVER EDT 100ML CABALLERO", categoria: "caballeros", precio: 48.99 },
        { nombre: "PACO RABANNE MILLION GOLD EDP INTENSE 100ML CABALLERO", categoria: "caballeros", precio: 82.75 },
        { nombre: "TOMMY HILFIGER IMPACT TOGETHER EDT 100ML CABALLERO", categoria: "caballeros", precio: 46.99 },
        { nombre: "PACO RABANNE PHANTOM INTENSE EDP 100ML CABALLERO", categoria: "caballeros", precio: 68.50 },
        { nombre: "ARMAF ODYSSEY MANDARIN SKY EDP 200ML CABALLERO", categoria: "caballeros", precio: 64.99 },
        { nombre: "AZZARO WANTED EDP 100ML CABALLERO", categoria: "caballeros", precio: 62.75 },
        { nombre: "DUMONT NITRO BLUE EDP 100ML CABALLERO", categoria: "caballeros", precio: 43.99 },
        { nombre: "DUMONT NITRO WHITE EDP 100ML CABALLERO", categoria: "caballeros", precio: 43.50 },
        { nombre: "LATTAFA WINNERS TROPHY SILVER EDP 100ML CABALLERO", categoria: "caballeros", precio: 47.99 },
        { nombre: "LATTAFA ATLAS EDP 55ML CABALLERO", categoria: "caballeros", precio: 39.75 },
        { nombre: "RASASI HAWAS ELIXIR EDP 100ML CABALLERO", categoria: "caballeros", precio: 52.99 },
        { nombre: "LATTAFA JASOOR EDP 100ML CABALLERO", categoria: "caballeros", precio: 45.50 },
        { nombre: "CUBA FIERCE EDT 100ML CABALLERO", categoria: "caballeros", precio: 27.99 },
        { nombre: "PERRY ELLIS RESERVE EDT 100ML CABALLERO", categoria: "caballeros", precio: 42.75 },
        { nombre: "ARMAF ODYSSEY MEGA LIMITED EDITION EDP 100ML CABALLERO", categoria: "caballeros", precio: 53.99 },
        { nombre: "DOLCE & GABBANA THE ONE EDP 100ML CABALLERO", categoria: "caballeros", precio: 74.50 },
        { nombre: "PACO RABANNE PURE XS 100ML CABALLERO", categoria: "caballeros", precio: 58.99 },
        { nombre: "RASASI HAWAS BLACK EDP 100ML CABALLERO", categoria: "caballeros", precio: 49.75 },
        { nombre: "ARMAF ETER DESERT STAR EDP 100ML CABALLERO", categoria: "caballeros", precio: 46.99 },
        { nombre: "ARMAF ETER DESERT BREEZE EDP 100ML CABALLERO", categoria: "caballeros", precio: 46.50 },
        { nombre: "AL HARAMAIN L'AVENTURE KNIGHT EDP 100 ML CABALLEROS", categoria: "caballeros", precio: 44.99 },
        { nombre: "LATTAFA HIS CONFESSION EDP 100ML CABALLERO", categoria: "caballeros", precio: 48.75 },
        { nombre: "LATTAFA THE KINGDOM EDP 100ML CABALLERO", categoria: "caballeros", precio: 51.99 },
        { nombre: "JEAN PAUL GAULTIER LE MALE ELIXIR PARFUM 125ML CABALLERO", categoria: "caballeros", precio: 86.50 },
        { nombre: "PACO RABANNE PHANTOM PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 75.99 },
        { nombre: "JEAN PAUL GAULTIER SCANDAL ABSOLU EDP 100ML CABALLERO", categoria: "caballeros", precio: 78.75 },
        { nombre: "VIKTOR & ROLF SPICEBOMB INFRARED EDP 90ML", categoria: "caballeros", precio: 82.99 },
        { nombre: "DOLCE & GABBANA \"K\" EDP 200ML CABALLERO", categoria: "caballeros", precio: 95.50 },
        { nombre: "MONT BLANC LEGEND BLUE EDP 100ML CABALLERO", categoria: "caballeros", precio: 62.99 },
        { nombre: "ARMAF ODYSSEY SPECTRA EDP 100ML UNISEX", categoria: "unisex", precio: 54.75 },
        { nombre: "MAISON ALHAMBRA GLACIER POUR HOMME EDP 100ML CABALLERO", categoria: "caballeros", precio: 43.99 },
        { nombre: "MAISON ALHAMBRA GLACIER LE NOIR EDP 100ML CABALLERO", categoria: "caballeros", precio: 44.50 },
        { nombre: "PACO RABANNE INVICTUS PARFUM 200ML CABALLERO", categoria: "caballeros", precio: 88.99 },
        { nombre: "PACO RABANNE INVICTUS PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 72.75 },
        { nombre: "DOLCE & GABBANA \"K\" EDP INTENSE EDP 100ML CABALLERO", categoria: "caballeros", precio: 82.99 },
        { nombre: "ARMAF FADE DENIM EDP 80ML CABALLERO", categoria: "caballeros", precio: 41.50 },
        { nombre: "DUMONT NITRO RED EDP 100ML CABALLERO", categoria: "caballeros", precio: 44.99 },
        { nombre: "JEAN PAUL GAULTIER SCANDAL EDT 150ML CABALLERO", categoria: "caballeros", precio: 68.75 },
        { nombre: "HUGO BOSS HUGO INTENSE EDP 125ML CABALLERO", categoria: "caballeros", precio: 72.99 },
        { nombre: "MAISON ALHAMBRA JEAN LOWE MAITRE EDP 100ML", categoria: "caballeros", precio: 47.50 },
        { nombre: "DOLCE & GABBANA THE ONE GOLD EDP INTENSE 100ML CABALLERO", categoria: "caballeros", precio: 85.99 },
        { nombre: "DIESEL SPIRIT OF THE BRAVE EDT 200ML CABALLERO", categoria: "caballeros", precio: 52.75 },
        { nombre: "BENETTON WE ARE TRIBE COOL EDT 90ML CABALLERO", categoria: "caballeros", precio: 33.99 },
        { nombre: "ARMANI EMPORIO STRONGER TOBBACCO EDP 100ML CABALLERO", categoria: "caballeros", precio: 87.50 },
        { nombre: "ARMANI EMPORIO STRONGER ABSOLUTELY PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 92.99 },
        { nombre: "AFNAN HIGHNESS VI BLUE EDP 100ML", categoria: "caballeros", precio: 56.75 },
        { nombre: "CAROLINA HERRERA BAD BOY COBALT ELIXIR 100ML MEN", categoria: "caballeros", precio: 79.99 },
        { nombre: "DOLCE & GABBANA LIGHT BLUE SUMMER VIBES EDT 125ML MEN", categoria: "caballeros", precio: 68.50 },
        { nombre: "PRADA L'HOMME INTENSE EDP 100ML CABALLERO", categoria: "caballeros", precio: 88.99 },
        { nombre: "JEAN PAUL GAULTIER LE BEAU EDT 75ML CABALLERO", categoria: "caballeros", precio: 62.75 },
        { nombre: "VALENTINO UOMO BORN IN ROMA YELLOW DREAM EDT 100ML CABALLERO", categoria: "caballeros", precio: 74.99 },
        { nombre: "JEAN PAUL GAULTIER LE BEAU LE PARFUM 75ML CABALLERO", categoria: "caballeros", precio: 69.50 },
        { nombre: "ARMAF VENTANA MARINE EDP 100ML CABALLERO", categoria: "caballeros", precio: 46.99 },
        { nombre: "ABERCROMBIE & FITCH FIERCE COLOGNE EDC 200ML COLOGNE", categoria: "caballeros", precio: 58.75 },
        { nombre: "ISSEY MIYAKE FUSION EXTREME EDT 100ML CABALLERO", categoria: "caballeros", precio: 64.99 },
        { nombre: "LATTAFA HAYAATIM EDP 100ML CABALLERO", categoria: "caballeros", precio: 47.50 },
        { nombre: "ARMANI ACQUA DI GIO PARFUM 100ML", categoria: "caballeros", precio: 89.99 },
        { nombre: "MACARENA KING OF KINGS ROYAL BLUE PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 54.75 },
        { nombre: "MACARENA KING OF KINGS ROYAL GOLD PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 55.99 },
        { nombre: "MACARENA KING OF KINGS ROYAL NOIR PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 56.50 },
        { nombre: "BVLGARI MAN TERRAE ESSENCE EDP 100ML CABALLERO", categoria: "caballeros", precio: 82.99 },
        { nombre: "MAISON ALHAMBRA SALVO INTENSE 100ML", categoria: "caballeros", precio: 44.75 },
        { nombre: "HALLOWEEN MAN MYSTERY EDP 125ML MEN", categoria: "caballeros", precio: 52.99 },
        { nombre: "ABERCROMBIE & FITCH AUTHENTIC MOMENT EDT 100ML MEN", categoria: "caballeros", precio: 46.50 },
        { nombre: "TOMMY HILFIGER EDT 200ML CABALLERO", categoria: "caballeros", precio: 58.99 },
        { nombre: "LATTAFA ASAD ZANZIBAR EDP 100ML", categoria: "caballeros", precio: 48.75 },
        { nombre: "HUGO BOSS JEANS EDT 125ML CABALLERO", categoria: "caballeros", precio: 54.99 },
        { nombre: "BENETTON COLD SILVER EDT 100ML MEN", categoria: "caballeros", precio: 32.50 },
        { nombre: "ARMAF TAG HIM UOMO NERO EDP 100ML CABALLERO", categoria: "caballeros", precio: 47.99 },
        { nombre: "LATTAFA AL QIAM SILVER EDP 100ML", categoria: "caballeros", precio: 45.75 },
        { nombre: "NAUTICA VOYAGE HERITAGE EDT 100ML", categoria: "caballeros", precio: 36.99 },
        { nombre: "MAISON ALHAMBRA BRIGHT PEACH EDP 80ML DAMA", categoria: "mujer", precio: 41.50 },
        { nombre: "MONT BLANC EXPLORER PLATINUM EDP 100ML", categoria: "caballeros", precio: 68.99 },
        { nombre: "ARMAF TAG HIM EDT 100ML CABALLERO", categoria: "caballeros", precio: 42.75 },
        { nombre: "ARMAF ETERNIA MAN LIMITED EDITION EDP 80ML CABALLERO", categoria: "caballeros", precio: 46.99 },
        { nombre: "ARMAF EGO TIGER EDP 100ML CABALLERO", categoria: "caballeros", precio: 49.50 },
        { nombre: "PACO RABANNE 1 MILLION ELIXIR INTENSE EDP 100ML", categoria: "caballeros", precio: 82.99 },
        { nombre: "CAROLINA HERRERA BAD BOY EXTREME EDP 100ML MEN", categoria: "caballeros", precio: 77.75 },
        { nombre: "DKNY EDT 100ML MEN", categoria: "caballeros", precio: 52.99 },
        { nombre: "PACO RABANNE 1 MILLION ROYAL PARFUM 100ML CABALLERO", categoria: "caballeros", precio: 86.50 },
        { nombre: "PINO SILVESTRE EDT 125ML CABALLERO", categoria: "caballeros", precio: 38.99 },
        { nombre: "JIMMY CHOO MAN ICE EDT 100ML CABALLERO", categoria: "caballeros", precio: 62.75 },
        { nombre: "HOLLISTER FESTIVAL NITE EDT 100ML CABALLERO", categoria: "caballeros", precio: 44.99 },
        { nombre: "DIOR HOMME COLOGNE EDC 75ML", categoria: "caballeros", precio: 72.50 },
        { nombre: "YVES SAINT LAURENT Y EDP INTENSE 100ML", categoria: "caballeros", precio: 88.99 },
        { nombre: "ISSEY MIYAKE CEDRE EDT 100ML CABALLERO", categoria: "caballeros", precio: 66.75 },
        { nombre: "DIESEL ZERO PLUS EDT 75ML MEN", categoria: "caballeros", precio: 42.99 },
        { nombre: "MOSCHINO TOY BOY EDP 100ML CABALLERO", categoria: "caballeros", precio: 65.50 },
        { nombre: "CUBA SIGNATURE EDT 100ML CABALLERO", categoria: "caballeros", precio: 28.99 },
        { nombre: "DOLCE & GABBANA INTENSO EDP 200ML", categoria: "caballeros", precio: 92.75 },
        { nombre: "AFNAN TURATHI EDP 90ML", categoria: "caballeros", precio: 56.99 },
        { nombre: "AFNAN 9AM EDP 100ML DAMA", categoria: "mujer", precio: 48.50 },
        { nombre: "ORIENTICA AMBER NOIR EDP 80ML", categoria: "unisex", precio: 58.99 },
        { nombre: "LATTAFA FAKHAR EDT 100ML CABALLERO", categoria: "caballeros", precio: 41.75 },
        { nombre: "LOMANI SPIRIT MILLONARIO OUD COLLECTION PARFUM 200ML", categoria: "caballeros", precio: 54.99 },
        { nombre: "DIOR FARENHIT EDT 200ML MEN", categoria: "caballeros", precio: 78.50 },
        { nombre: "ARMAF ODYSSEY HOMME EDP 200ML CABALLERO", categoria: "caballeros", precio: 62.99 },
        { nombre: "LATTAFA HAYAATI AL MALEKY EDP 100ML", categoria: "caballeros", precio: 49.75 },
        { nombre: "LATTAFA MAAHIR LEGACY EDP 100ML CABALLERO", categoria: "caballeros", precio: 52.99 },
        { nombre: "BENETTON FOREVER GREEN EDT 100ML CABALLERO", categoria: "caballeros", precio: 33.50 },
        { nombre: "VALENTINO UOMO EDT 100ML", categoria: "caballeros", precio: 68.99 },
        { nombre: "TOMMY IMPACT INTENSE EDP 100ML + 4ML", categoria: "caballeros", precio: 52.75 },
        { nombre: "PRADA LUNA ROSSA SPORT EDT 100ML", categoria: "caballeros", precio: 72.99 },
        { nombre: "PACO RABANNE 1 MILLION PARFUM 200ML CABALLERO", categoria: "caballeros", precio: 94.50 },
        { nombre: "CAROLINA HERRERA 212 HEROES EDT 150ML MEN", categoria: "caballeros", precio: 65.99 },
        { nombre: "AB THE ICON EDT 200ML CABALLERO", categoria: "caballeros", precio: 56.75 },
        { nombre: "DAVIDOFF COOL WATER INTENSE EDT 125ML CABALLERO", categoria: "caballeros", precio: 52.99 },
        { nombre: "AFNAN 9 AM DIVE EDP 100ML", categoria: "caballeros", precio: 54.50 },
        { nombre: "MACARENA ATTITUDE OUD VAINILLE EDP 100ML", categoria: "caballeros", precio: 46.99 },
        { nombre: "MONT BLANC LEGEND SPIRIT EDT 100ML CABALLERO", categoria: "caballeros", precio: 58.75 },
        { nombre: "HOLLISTER FESTIVAL VIBES FOR HIM EDT 100ML CABALLERO", categoria: "caballeros", precio: 45.99 },
        { nombre: "HOLLISTER WAVE FOR HIM EDT 100ML CABALLERO", categoria: "caballeros", precio: 44.50 },
        { nombre: "BOUCHERON JAIPUR HOMME EDP 100ML CABALLERO", categoria: "caballeros", precio: 78.99 },
        { nombre: "LATTAFA ASAD EDP 100ML", categoria: "caballeros", precio: 43.75 },
        { nombre: "LATTAFA HAYAATI EDP 100ML CABALLERO", categoria: "caballeros", precio: 46.99 },
        { nombre: "LATTAFA QAED AL FURSAN EDP 100ML", categoria: "caballeros", precio: 44.50 },
        { nombre: "LATTAFA EJAAZI SILVER EDP 100ML", categoria: "caballeros", precio: 47.99 },
        { nombre: "SALVATORE FERRAGAMO UOMO EDT 100ML", categoria: "caballeros", precio: 62.75 },
        { nombre: "CAROLINA HERRERA EDT 200ML CABALLERO", categoria: "caballeros", precio: 72.99 },
        { nombre: "VERSACE EROS PARFUM 100ML", categoria: "caballeros", precio: 82.50 },
        { nombre: "HUGO BOSS BOTTLED PARFUM 100ML MEN", categoria: "caballeros", precio: 78.99 },
        { nombre: "GUESS SEDUCTIVE RED HOMME EDT 100ML CABALLERO", categoria: "caballeros", precio: 52.75 },
        { nombre: "VIKTOR & ROLF NIGHT VISION EDP 90ML", categoria: "caballeros", precio: 84.99 },
        { nombre: "NAUTICA BLUE EDT 100ML", categoria: "caballeros", precio: 34.50 },
        { nombre: "CHANEL BLEU EDT 100ML CABALLERO", categoria: "caballeros", precio: 95.99 },
        { nombre: "ARMANI EMPORIO STRONGER WIHT YOU ONLY EDT 100ML CABALLERO", categoria: "caballeros", precio: 79.75 },
        { nombre: "LATTAFA AMEER INTENSE AL OUD EDP 100ML", categoria: "caballeros", precio: 53.99 },
        { nombre: "VALENTINO UOMO BORN IN ROMA CORAL FANTASY EDT 100ML CABALLERO", categoria: "caballeros", precio: 76.50 },
        { nombre: "ANTONIO PUIG AGUA BRAVA EDC 100ML CABALLERO", categoria: "caballeros", precio: 38.99 },
        { nombre: "PRADA LUNA ROSSA EDT 150ML", categoria: "caballeros", precio: 74.75 },
        { nombre: "RALPH LAUREN POLO SPORT FRESH EDT 125ML", categoria: "caballeros", precio: 58.99 },
        { nombre: "PRADA LUNA ROSSA BLACK EDP 100ML CABALLERO", categoria: "caballeros", precio: 86.50 },
        { nombre: "HALSTON Z-14 EDT 75ML", categoria: "caballeros", precio: 42.99 },
        { nombre: "DIOR SAUVAGE EDT 100ML CABALLERO", categoria: "caballeros", precio: 88.75 },
        { nombre: "LACOSTE BOOSTER EDT 125ml", categoria: "caballeros", precio: 54.99 },
        { nombre: "LAPIDUS POUR HOMME EDT 100ML", categoria: "caballeros", precio: 39.50 },
        { nombre: "VIKTOR ROLF SPICEBOMB EXTREME EDP 90ML CABALLERO", categoria: "caballeros", precio: 87.99 },
        { nombre: "TOUS MAN SPORT EDT 100ML", categoria: "caballeros", precio: 52.75 },
        { nombre: "JIMMY CHOO EDT 200ML", categoria: "caballeros", precio: 68.99 },
        { nombre: "BURBERRY MR BURBERRY EDT 100ML MEN", categoria: "caballeros", precio: 72.50 },
        { nombre: "BENETTON COLOR BLACK INTENSE EDP 80ML CABALLERO", categoria: "caballeros", precio: 36.99 },
        { nombre: "PERRY ELLIS PORTOFOLI EDT 100ML CABALLERO", categoria: "caballeros", precio: 44.75 },
        { nombre: "PERRY ELLIS 360 BLACK EDT 100ML", categoria: "caballeros", precio: 42.99 },
        { nombre: "PACO RABANNE POUR HOMME EDT 100ML", categoria: "caballeros", precio: 58.50 },
        { nombre: "MONT BLANC LEGEND NIGHT EDP 100ML", categoria: "caballeros", precio: 64.99 },
        { nombre: "LATTAFA RAMZ SILVER EDP 100ML", categoria: "caballeros", precio: 48.75 },
        { nombre: "RALPH LAUREN POLO BLACK EDT 125ML", categoria: "caballeros", precio: 62.99 },
        { nombre: "LATTAFA RAMZ GOLD EDP 100ML", categoria: "caballeros", precio: 49.50 },
        { nombre: "LATTAFA EJAAZI EDP 100ML", categoria: "caballeros", precio: 46.99 },
        { nombre: "CARTIER DECLARATION EDT 100ML", categoria: "caballeros", precio: 78.75 },
        { nombre: "ARMAF ODYSSEY HOMME WHITE EDIT EDP 200ML CABALLERO", categoria: "caballeros", precio: 65.99 },
        { nombre: "AFNAN 9PM EDP 100ML (Arabe) CABALLERO", categoria: "caballeros", precio: 56.50 },
        { nombre: "TEQUILA GOLD EDP 100ML", categoria: "caballeros", precio: 38.99 },
        { nombre: "PERRY ELLIS 360 COLLECTION NOIR EDT 100ML", categoria: "caballeros", precio: 44.75 },
        { nombre: "FERRARI BLACK SCUDERIA EDT 125ML CABALLERO", categoria: "caballeros", precio: 52.99 },
        { nombre: "HALLOWEEN MAN ROCK ON EDT 125ML", categoria: "caballeros", precio: 48.50 },
        { nombre: "AL HARAMAIN L'AVENTURE BLANCHE EDP 100ML", categoria: "caballeros", precio: 46.99 },
        { nombre: "VICTORINOX SWISS ARMY STEEL EDT 100ML", categoria: "caballeros", precio: 42.75 },
        { nombre: "PRADA LUNA ROSSA CARBON EDT 100ML", categoria: "caballeros", precio: 78.99 },
        { nombre: "HALLOWEEN MAN HERO EDT 125ML CABALLERO", categoria: "caballeros", precio: 49.50 },
        { nombre: "AZZARO CHROME EDT 200ML CABALLERO", categoria: "caballeros", precio: 58.99 },
        { nombre: "PACO RABANNE INVICTUS VICTORY ELIXIR EDP 100ML", categoria: "caballeros", precio: 82.75 },
        { nombre: "CAROLINA HERRERA CH PASION EDP 100ML", categoria: "caballeros", precio: 68.99 },
        { nombre: "CAROLINA HERRERA BAD BOY POWER EDT 100ML MEN", categoria: "caballeros", precio: 72.50 },
        { nombre: "AZZARO CHROME EDT 100ML CABALLERO", categoria: "caballeros", precio: 48.99 },
        { nombre: "AZZARO FOR MEN EDT 100ML", categoria: "caballeros", precio: 46.75 },
        { nombre: "ARMAF ODYSSEY TYRANT EDP 100ML CABALLERO", categoria: "caballeros", precio: 54.99 },
        { nombre: "ARMAF ODYSSEY AQUA EDP 100ML CABALLERO", categoria: "caballeros", precio: 52.50 },
        { nombre: "ARMAF ODYSSEY AOUD EDP 100ML CABALLERO", categoria: "caballeros", precio: 56.99 },
        { nombre: "AB THE ICON EDP 100ML CABALLERO", categoria: "caballeros", precio: 58.75 },
        { nombre: "ARMAF PRIDE WHITE EDP 100ML DAMA", categoria: "mujer", precio: 49.99 },
        { nombre: "ARMAF ODYSSEY HOMME WHITE EDIT EDP 100ML CABALLERO", categoria: "caballeros", precio: 52.50 },
        { nombre: "ARMAF ODYSSEY MEGA LIMITED EDP 200ML CABALLERO", categoria: "caballeros", precio: 68.99 },
        { nombre: "ARMAF ODYSSEY MANDARIN SKY EDP 100ML MEN", categoria: "caballeros", precio: 54.75 },
        { nombre: "ARMAF ODYSSEY HOMME EDP 100ML CABALLERO", categoria: "caballeros", precio: 49.99 },
        { nombre: "ARMAF EL CIELO EDP 100ML CABALLERO", categoria: "caballeros", precio: 52.50 },
        { nombre: "ARMAF CLUB DE NUIT URBAN ELIXIR EDP 105ML MEN", categoria: "caballeros", precio: 56.99 },
        { nombre: "ARMAF CLUB DE NUIT URBAN EDP 105ML CABALLERO", categoria: "caballeros", precio: 54.75 },
        { nombre: "ARMAF CLUB DE NUIT UNTOLD EDP 105ML", categoria: "caballeros", precio: 58.99 },
        { nombre: "ARMAF CLUB DE NUIT ICONIC EDP 105ML MEN (Arabe)", categoria: "caballeros", precio: 56.50 },
        { nombre: "ARMAF CLUB DE NUIT MAN EDT 105ML (Arabe)", categoria: "caballeros", precio: 52.99 },
        { nombre: "ARMAF AURA FRESH EDP UNISEX 100ML", categoria: "unisex", precio: 54.75 },
        { nombre: "LACOSTE BLANC EDT 175ML CABALLERO", categoria: "caballeros", precio: 62.99 },
        { nombre: "PACO RABANNE PHANTOM EDT 150ML", categoria: "caballeros", precio: 68.50 },
        { nombre: "PHILLIP PLEIN NO LIMITS EDP 90ML", categoria: "caballeros", precio: 72.99 },
        { nombre: "YVES SAINT LAURENT L' HOMME EDT 100ML", categoria: "caballeros", precio: 78.75 },
        { nombre: "VERSACE THE DREAMER EDT 100ML", categoria: "caballeros", precio: 65.99 },
        { nombre: "VERSACE OUD NOIR EDP 100ML", categoria: "caballeros", precio: 82.50 },
        { nombre: "VERSACE EROS EDT 100ML", categoria: "caballeros", precio: 72.99 },
        { nombre: "VERSACE EROS EDP 100ML CABALLERO", categoria: "caballeros", precio: 76.75 },
        { nombre: "TOUS MAN INTENSE EDT 100ML", categoria: "caballeros", precio: 58.99 },
        { nombre: "NAUTICA VOYAGE SPORT EDT 100ML", categoria: "caballeros", precio: 42.50 },
        { nombre: "JOOP HOMME EDT 125ML", categoria: "caballeros", precio: 48.99 },
        { nombre: "ANTONIO PUIG QUORUM EDT 100ML CABALLERO", categoria: "caballeros", precio: 39.75 },
        { nombre: "MACARENA ATTITUDE NOIR EDP 100ML", categoria: "caballeros", precio: 46.99 },
        { nombre: "MACARENA ATTITUDE INTENSE EDP 100ML", categoria: "caballeros", precio: 48.50 },
        { nombre: "LIZ CLAIBORNE CURVE EDT 125ML CABALLERO", categoria: "caballeros", precio: 32.99 },
        { nombre: "LAGERFELD CLASSIC EDT 100ML", categoria: "caballeros", precio: 44.75 },
        { nombre: "LACOSTE EAU L.12.12 NOIR EDT 100ML CABALLERO", categoria: "caballeros", precio: 62.99 },
        { nombre: "GIVENCHY GENTLEMAN EDT 100ML", categoria: "caballeros", precio: 68.50 },
        { nombre: "HOLLISTER CANYON ESCAPE EDT 100ML CABALLERO", categoria: "caballeros", precio: 46.99 },
        { nombre: "CUBA BLACK EDT 100ML CABALLERO", categoria: "caballeros", precio: 28.75 },
        { nombre: "ABERCROMBIE & FITCH AUTHENTIC NIGHT EDP 100ML CABALLERO", categoria: "caballeros", precio: 52.99 },
        { nombre: "AB LOMANI MILLIONAIRE EDT 100ML CABALLERO", categoria: "caballeros", precio: 44.50 },
        { nombre: "LALIQUE ENCRE NOIRE SPORT EDT 100ML", categoria: "caballeros", precio: 58.99 },
        { nombre: "HUGO BOSS MAN EDT 125ML MEN", categoria: "caballeros", precio: 64.75 },
        { nombre: "GUESS GOLD EDT 75ML CABALLERO", categoria: "caballeros", precio: 52.99 },
        { nombre: "DRAKKAR NOIR EDT 100ML CABALLERO", categoria: "caballeros", precio: 48.50 },
        { nombre: "DOLCE & GABBANA POUR HOMME EDT 125ML CABALLERO", categoria: "caballeros", precio: 72.99 },
        { nombre: "PACO RABANNE INVICTUS VICTORY EDP EXTREME 200ML", categoria: "caballeros", precio: 88.75 },
        { nombre: "VERSACE EROS FLAME EDP 200ML", categoria: "caballeros", precio: 82.99 },
        { nombre: "CALVIN KLEIN OBSESSION EDT 125ML CABALLERO", categoria: "caballeros", precio: 56.50 },
        { nombre: "CALVIN KLEIN CONTRADICTION EDT 100ML CABALLERO", categoria: "caballeros", precio: 58.99 },
        { nombre: "HUGO BOSS BOTTLED NIGHT EDT 100ML CABALLERO", categoria: "caballeros", precio: 68.75 },
        { nombre: "BENTLEY INTENSE EDP 100ML CABALLERO", categoria: "caballeros", precio: 72.99 },
        { nombre: "ARMANI CODE EDT 125ML CABALLERO", categoria: "caballeros", precio: 76.50 },
        { nombre: "ARMANI ACQUA DI GIO EDT 200ML CABALLERO", categoria: "caballeros", precio: 88.99 },
        { nombre: "YVES SAINT LAURENT Y EDT 100ML CABALLERO", categoria: "caballeros", precio: 82.75 },
        { nombre: "RASASI LA YUQAWAM EDP 75ML", categoria: "caballeros", precio: 65.99 },
        { nombre: "NAUTICA VOYAGE N-83 EDT 100ML", categoria: "caballeros", precio: 38.50 },
        { nombre: "FERRARI RED EDT 125ML CABALLERO", categoria: "caballeros", precio: 52.99 },
        { nombre: "BVLGARI MAN IN BLACK EDP 100ML CABALLERO", categoria: "caballeros", precio: 78.75 },
        { nombre: "AZZARO THE MOST WANTED INTENSE EDT 100ML CABALLERO", categoria: "caballeros", precio: 68.99 },
        { nombre: "BOUCHERON EDP 100ML CABALLERO", categoria: "caballeros", precio: 82.50 },
        { nombre: "PACO RABANNE 1 MILLION PARFUM 100ML", categoria: "caballeros", precio: 78.99 },
        { nombre: "ISSEY MIYAKE INTENSE EDT 125ML CABALLERO", categoria: "caballeros", precio: 72.75 },
        { nombre: "ISSEY MIYAKE FUSION EDT 100ML MEN", categoria: "caballeros", precio: 68.99 },
        { nombre: "LATTAFA BADEE AL OUD FOR GLORY EDP 100ML", categoria: "caballeros", precio: 56.50 },
        { nombre: "RASASI HAWAS EDP 100ML CABALLERO", categoria: "caballeros", precio: 62.99 },
        { nombre: "PACO RABANNE 1 MILLION EDT 200ML CABALLERO", categoria: "caballeros", precio: 84.75 },
        { nombre: "MONT BLANC LEGEND RED EDP 100ML", categoria: "caballeros", precio: 66.99 },
        { nombre: "ISSEY MIYAKE SPORT EDT 100ML CABALLERO", categoria: "caballeros", precio: 58.50 },
        { nombre: "AL HARAMAIN L'AVENTURE EDP 200ML", categoria: "caballeros", precio: 54.99 },
        { nombre: "PACO RABANNE PHANTOM EDT 100ML", categoria: "caballeros", precio: 62.75 },
        { nombre: "MONT BLANC STARWALKER EDT 75ML", categoria: "caballeros", precio: 52.99 },
        { nombre: "RALPH LAUREN POLO BLUE EDT 125ML CABALLERO", categoria: "caballeros", precio: 64.50 },
        { nombre: "PACO RABANNE XS EDT 100ML CABALLERO", categoria: "caballeros", precio: 58.99 },
        { nombre: "PACO RABANNE 1 MILLION EDT 100ML CABALLERO", categoria: "caballeros", precio: 72.75 },
        { nombre: "NAUTICA CLASSIC EDT 100ML", categoria: "caballeros", precio: 34.99 },
        { nombre: "LALIQUE ENCRE NOIRE EDT 100ML", categoria: "caballeros", precio: 56.50 },
        { nombre: "JIMMY CHOO BLUE EDT 200ML CABALLERO", categoria: "caballeros", precio: 68.99 },
        { nombre: "GUESS NIGHT EDT 100ML CABALLERO", categoria: "caballeros", precio: 52.75 },
        { nombre: "NAUTICA BLUE SAIL EDT 100ML", categoria: "caballeros", precio: 36.99 },
        { nombre: "JEAN PAUL GAULTIER LE MALE EDT 125ML", categoria: "caballeros", precio: 74.50 },
        { nombre: "DIESEL ONLY THE BRAVE EDT 125ML", categoria: "caballeros", precio: 58.99 },
        { nombre: "PACO RABANNE INVICTUS EDT 200ML CABALLERO", categoria: "caballeros", precio: 78.75 },
        { nombre: "CAROLINA HERRERA BAD BOY LE PARFUM 100ML MEN", categoria: "caballeros", precio: 82.99 },
        { nombre: "LACOSTE RED EDT 125ML", categoria: "caballeros", precio: 56.50 },
        { nombre: "HUGO BOSS DARK BLUE EDT 75ML MEN", categoria: "caballeros", precio: 62.99 },
        { nombre: "PALOMA PICASSO MINOTAURE EDT 75ML", categoria: "caballeros", precio: 48.75 },
        { nombre: "JEANNE ARTHES COTTON CLUB EDT 100ML", categoria: "caballeros", precio: 42.99 },
        { nombre: "JEANNE ARTHES COLONIAL CLUB YPSOS EDT 100ML", categoria: "caballeros", precio: 44.50 },
        { nombre: "JEANNE ARTHES COLONIAL CLUB EDT 100ML CABALLERO", categoria: "caballeros", precio: 43.99 },
        { nombre: "JEANNE ARTHES CALIBER 12 EDT 100ML", categoria: "caballeros", precio: 41.75 },
        { nombre: "LAGERFELD CLASSIC EDT 150ML CABALLERO", categoria: "caballeros", precio: 52.99 },
        { nombre: "PERRY ELLIS 360 WHITE EDT 100ML CABALLERO", categoria: "caballeros", precio: 42.50 },
        { nombre: "FRAGLUXE OBSCURE EDT 100ML", categoria: "caballeros", precio: 56.99 },
        { nombre: "FRAGLUXE CAPTIVE MIND EDT 100ML", categoria: "caballeros", precio: 58.75 },
        { nombre: "ESTEE LAUDER PLEASURES EDT 100ML CABALLERO", categoria: "caballeros", precio: 68.99 },
        { nombre: "CUBA WILD HEART EDT 100ML CABALLERO", categoria: "caballeros", precio: 29.50 },
        { nombre: "CUBA SILVER EDT 100ML CABALLERO", categoria: "caballeros", precio: 28.99 },
        { nombre: "CUBA SHADOW EDT 100ML CABALLERO", categoria: "caballeros", precio: 29.75 },
        { nombre: "CUBA GREY EDT 100ML CABALLERO", categoria: "caballeros", precio: 29.99 },
        { nombre: "CUBA BLUE EDT 100ML CABALLERO", categoria: "caballeros", precio: 29.50 },
        { nombre: "CUBA AUTHENTIC DARK EDT 100ML CABALLERO", categoria: "caballeros", precio: 30.99 },
        { nombre: "CREED AVENTUS EDP 100ML CABALLERO", categoria: "caballeros", precio: 185.99 },
        { nombre: "BHARARA DON EDP 100ML CABALLERO", categoria: "caballeros", precio: 62.50 },
        { nombre: "BHARARA KING EDP 200ML", categoria: "caballeros", precio: 72.99 },
        { nombre: "ARMAF AURA EDP 100ML CABALLERO", categoria: "caballeros", precio: 54.75 },
        { nombre: "VERSACE EROS FLAME EDP 100ML", categoria: "caballeros", precio: 78.99 },
        { nombre: "VERSACE BLUE JEANS EDT 75ML", categoria: "caballeros", precio: 48.50 },
        { nombre: "VERSACE EROS EDT 200ML CABALLERO", categoria: "caballeros", precio: 88.99 },
        { nombre: "VIKTOR & ROLF SPICEBOMB INFRARED EDT 90ML", categoria: "caballeros", precio: 82.75 },
        { nombre: "VIKTOR & ROLF SPICEBOMB EDT 90ML", categoria: "caballeros", precio: 79.99 },
        { nombre: "TOUS MAN EDT 100ML", categoria: "caballeros", precio: 52.50 },
        { nombre: "TOMMY NOW MEN EDT 100ML", categoria: "caballeros", precio: 48.99 },
        { nombre: "TOMMY HILFIGER EDT 100ML CABALLERO", categoria: "caballeros", precio: 54.75 },
        { nombre: "VICTORINOX SWISS ARMY ALTITUDE EDT 100ML", categoria: "caballeros", precio: 46.99 },
        { nombre: "RALPH LAUREN POLO SPORT EDT 125ML", categoria: "caballeros", precio: 62.50 },
        { nombre: "PERRY ELLIS 360 EDT 200ML CABALLERO", categoria: "caballeros", precio: 58.99 },
        { nombre: "PERRY ELLIS 360 EDT 100ML CABALLERO", categoria: "caballeros", precio: 42.75 },
        { nombre: "PERRY ELLIS 18 INTENSE EDT 100ML", categoria: "caballeros", precio: 46.99 },
        { nombre: "PERRY ELLIS 18 EDT 100ML CABALLERO", categoria: "caballeros", precio: 44.50 },
        { nombre: "PARIS HILTON JUST ME EDT 100ML", categoria: "caballeros", precio: 38.99 },
        { nombre: "PARIS HILTON GOLD RUSH EDT 100ML", categoria: "caballeros", precio: 39.75 },
        { nombre: "PARIS HILTON EDT 100ML CABALLERO", categoria: "caballeros", precio: 37.99 },
        { nombre: "PACO RABANNE BLACK XS EDT 100ML CABALLERO", categoria: "caballeros", precio: 58.50 },
        { nombre: "PACO RABANNE ULTRARED EDT 100ML", categoria: "caballeros", precio: 56.99 },
        { nombre: "PACO RABANNE ULTRAVIOLET EDT 100ML CABALLERO", categoria: "caballeros", precio: 54.75 },
        { nombre: "PACO RABANNE INVICTUS VICTORY EDP EXTREME 100ML", categoria: "caballeros", precio: 76.99 },
        { nombre: "NAUTICA VOYAGE EDT 100ML", categoria: "caballeros", precio: 36.50 },
        { nombre: "MONT BLANC LEGEND SPIRIT EDT 200ML", categoria: "caballeros", precio: 72.99 },
        { nombre: "MONT BLANC LEGEND EDT 200ML CABALLERO", categoria: "caballeros", precio: 68.75 },
        { nombre: "MONT BLANC INDIVIDUEL EDT 75ML CABALLERO", categoria: "caballeros", precio: 52.99 },
        { nombre: "MONT BLANC EXPLORER ULTRA BLUE EDP 100ML CABALLERO", categoria: "caballeros", precio: 74.50 },
        { nombre: "MONT BLANC EXPLORER EDP 100ML CABALLERO", categoria: "caballeros", precio: 72.99 },
        { nombre: "MONT BLANC EMBLEM EDT 100ML", categoria: "caballeros", precio: 62.75 },
        { nombre: "MONT BLANC PRESENCE EDT 75ML CABALLERO", categoria: "caballeros", precio: 54.99 },
        { nombre: "LACOSTE ESSENTIAL EDT 125ML", categoria: "caballeros", precio: 56.50 },
        { nombre: "JOOP HOMME EDT 200ML", categoria: "caballeros", precio: 58.99 },
        { nombre: "JEAN PAUL GAULTIER LE MALE LE PARFUM EDP INTENSE 125ML CABALLERO", categoria: "caballeros", precio: 88.75 },
        { nombre: "JEAN PAUL GAULTIER LE BEAU EDT 125ML", categoria: "caballeros", precio: 72.99 },
        { nombre: "ISSEY MIYAKE NUIT EDT 125ML", categoria: "caballeros", precio: 68.50 },
        { nombre: "ISSEY MIYAKE EDT 200ML CABALLERO", categoria: "caballeros", precio: 82.99 },
        { nombre: "ISSEY MIYAKE EDT 125ML CABALLERO", categoria: "caballeros", precio: 74.75 },
        { nombre: "HUGO BOSS XY EDT 100ML CABALLERO", categoria: "caballeros", precio: 66.99 },
        { nombre: "HUGO BOSS MAN EDT 200ML CABALLERO", categoria: "caballeros", precio: 78.50 },
        { nombre: "HUGO BOSS ENERGISE EDT 75ML CABALLERO", categoria: "caballeros", precio: 58.99 },
        { nombre: "HERMES TERRE D'HERMES EDT 100ML MEN", categoria: "caballeros", precio: 92.75 },
        { nombre: "CLINIQUE HAPPY EDT 100ML CABALLERO", categoria: "caballeros", precio: 62.99 },
        { nombre: "HALLOWEEN EDT 125ML CABALLERO", categoria: "caballeros", precio: 48.50 },
        { nombre: "GUESS By MARCIANO EDT 100ML", categoria: "caballeros", precio: 54.99 },
        { nombre: "GIVENCHY PI EDT 100ML CABALLERO", categoria: "caballeros", precio: 72.75 },
        { nombre: "GIVENCHY POUR HOMME EDT 100ML CABALLERO", categoria: "caballeros", precio: 68.99 },
        { nombre: "GIVENCHY BLUE EDT 100ML CABALLERO", categoria: "caballeros", precio: 66.50 },
        { nombre: "SALVATORE FERRAGAMO FREE TIME EDT 100ML", categoria: "caballeros", precio: 58.99 },
        { nombre: "SALVATORE FERRAGAMO UOMO SIGNATURE EDP 100ML", categoria: "caballeros", precio: 72.75 },
        { nombre: "SALVATORE FERRAGAMO F BLACK EDT 100ML CABALLERO", categoria: "caballeros", precio: 62.99 },
        { nombre: "SALVATORE FERRAGAMO ACQUA ESSENZIALE EDT 100ML", categoria: "caballeros", precio: 64.50 },
        { nombre: "DOLCE & GABBANA THE ONE EDT 100ML MEN", categoria: "caballeros", precio: 74.99 },
        { nombre: "DOLCE & GABBANA LIGHT BLUE EDT 200ML CABALLERO", categoria: "caballeros", precio: 82.75 },
        { nombre: "DOLCE & GABBANA POUR HOMMME EDT 200ML", categoria: "caballeros", precio: 78.99 },
        { nombre: "DKNY LIMITED EDITION EDT 100ML CABALLERO", categoria: "caballeros", precio: 56.50 },
        { nombre: "DIOR FAHRENHEIT EDT 100ML", categoria: "caballeros", precio: 76.99 },
        { nombre: "DIESEL PLUS PLUS MASCULINE EDT 75ML", categoria: "caballeros", precio: 48.75 },
        { nombre: "DAVIDOFF COOL WATER EDT 125ML CABALLERO", categoria: "caballeros", precio: 52.99 },
        { nombre: "DAVIDOFF COOL WATER EDT 200ML CABALLERO", categoria: "caballeros", precio: 68.50 },
        { nombre: "CUBA WINNER EDT 100ML CABALLERO", categoria: "caballeros", precio: 29.99 },
        { nombre: "CUBA VIP EDT 100ML CABALLERO", categoria: "caballeros", precio: 30.75 },
        { nombre: "CUBA ROYAL FORTUNE EDT 100ML CABALLERO", categoria: "caballeros", precio: 31.99 },
        { nombre: "CUBA ROYAL EDT 100ML CABALLERO", categoria: "caballeros", precio: 30.50 },
        { nombre: "CUBA MILESTONE EDT 100ML CABALLERO", categoria: "caballeros", precio: 29.99 },
        { nombre: "CUBA GOLD EDT 100ML CABALLERO", categoria: "caballeros", precio: 28.75 },
        { nombre: "CALVIN KLEIN TRUTH EDT 100ML CABALLERO", categoria: "caballeros", precio: 54.99 },
        { nombre: "CALVIN KLEIN CK ONE SHOCK EDT 200ML CABALLERO", categoria: "caballeros", precio: 62.50 },
        { nombre: "HUGO BOSS THE SCENT EDT 100ML CABALLERO", categoria: "caballeros", precio: 72.99 },
        { nombre: "CALVIN KLEIN EUPHORIA EDT 100ML MEN", categoria: "caballeros", precio: 58.75 },
        { nombre: "CALVIN KLEIN CK IN2U EDT 150ML CABALLERO", categoria: "caballeros", precio: 56.99 },
        { nombre: "CALVIN KLEIN ESCAPE EDT 100ML CABALLERO", categoria: "caballeros", precio: 52.50 },
        { nombre: "CALVIN KLEIN ETERNITY EDT 100ML MEN", categoria: "caballeros", precio: 54.99 },
        { nombre: "CHANEL ALLURE SPORT EDT 100ML CABALLERO", categoria: "caballeros", precio: 88.75 },
        { nombre: "CAROLINA HERRERA CH EDT 200ML CABALLERO", categoria: "caballeros", precio: 78.99 },
        { nombre: "CAROLINA HERRERA CH EDT 100ML CABALLERO", categoria: "caballeros", precio: 68.50 },
        { nombre: "CAROLINA HERRERA BAD BOY EDT 100ML MEN", categoria: "caballeros", precio: 72.99 },
        { nombre: "CAROLINA HERRERA BAD BOY EDT 150ML MEN", categoria: "caballeros", precio: 84.75 },
        { nombre: "CAROLINA HERRERA 212 VIP EDT 100ML MEN", categoria: "caballeros", precio: 76.99 },
        { nombre: "CAROLINA HERRERA 212 VIP BLACK EDT 200ML", categoria: "caballeros", precio: 88.50 },
        { nombre: "CAROLINA HERRERA 212 SEXY EDT 100ML CABALLERO", categoria: "caballeros", precio: 72.99 },
        { nombre: "CAROLINA HERRERA 212 EDT 200ML CABALLERO", categoria: "caballeros", precio: 82.75 },
        { nombre: "CAROLINA HERRERA 212 EDT 100ML CABALLERO", categoria: "caballeros", precio: 68.99 },
        { nombre: "CARTIER PASHA EDP 100ML MEN", categoria: "caballeros", precio: 92.50 },
        { nombre: "CACHAREL POUR HOMME EDT 100ML CABALLERO", categoria: "caballeros", precio: 58.99 },
        { nombre: "BVLGARI BLV POUR HOMME EDT 100ML CABALLERO", categoria: "caballeros", precio: 72.75 },
        { nombre: "BVLGARI AQUA MARINE EDT 100ML CABALLERO", categoria: "caballeros", precio: 68.99 },
        { nombre: "BURBERRY WEKEEND EDT 100ML MEN", categoria: "caballeros", precio: 62.50 },
        { nombre: "HUGO BOSS BOTTLED UNLIMITED EDT 100ML MEN", categoria: "caballeros", precio: 74.99 },
        { nombre: "HUGO BOSS SELECTION EDT 100ML", categoria: "caballeros", precio: 66.75 },
        { nombre: "HUGO BOSS ORANGE EDT 100ML", categoria: "caballeros", precio: 64.99 },
        { nombre: "HUGO BOSS BOTTLED NIGHT EDT 200ML MEN", categoria: "caballeros", precio: 88.50 },
        { nombre: "HUGO BOSS BOTTLED INFINITE EDP 100ML CABALLERO", categoria: "caballeros", precio: 82.99 },
        { nombre: "HUGO BOSS IN MOTION EDT 100ML MEN", categoria: "caballeros", precio: 68.75 },
        { nombre: "HUGO BOSS BOTTLED EDT 100ML CABALLERO", categoria: "caballeros", precio: 72.99 },
        { nombre: "BENTLEY MOMENTUM 100ML CABALLERO", categoria: "caballeros", precio: 76.50 },
        { nombre: "BENETTON COLD 100ML CABALLERO", categoria: "caballeros", precio: 34.99 },
        { nombre: "BENETTON COLOR BLUE EDT 100ML", categoria: "caballeros", precio: 33.75 },
        { nombre: "BENETTON COLOR GREEN EDT 100ML CABALLERO", categoria: "caballeros", precio: 34.99 },
        { nombre: "ARMAF VENTANA EDP 100ML CABALLERO", categoria: "caballeros", precio: 52.50 },
        { nombre: "BHARARA KING EDP 100ML CABALLERO", categoria: "caballeros", precio: 66.99 },
        { nombre: "AZZARO POUR HOMME 200ML CABALLERO", categoria: "caballeros", precio: 58.75 },
        { nombre: "ARMANI EMPORIO EDT 100ML CABALLERO", categoria: "caballeros", precio: 72.99 },
        { nombre: "ARMANI ACQUA DI GIO PROFONDO EDP 100ML CABALLERO", categoria: "caballeros", precio: 84.50 },
        { nombre: "ARMANI ACQUA DI GIO PROFONDO PARFUM 100ML", categoria: "caballeros", precio: 92.99 },
        { nombre: "ARMANI ACQUA DI GIO EDT 100ML CABALLERO", categoria: "caballeros", precio: 78.75 },
        { nombre: "ARMAF HUNTER 100ML", categoria: "caballeros", precio: 46.99 },
        { nombre: "ARMAF CLUB DE NUIT INTENSE 105ML MEN", categoria: "caballeros", precio: 56.50 },
        { nombre: "ARMAF CLUB DE NUIT INTENSE EDP 200ML (Arabe) CABALLERO", categoria: "caballeros", precio: 68.99 },
        { nombre: "ARMAF BLUE HOMME EDT 100ML CABALLERO", categoria: "caballeros", precio: 44.75 },
        { nombre: "ARAMIS EDT 110ML CABALLERO", categoria: "caballeros", precio: 52.99 },
        { nombre: "ANIMALE EDT 100ML CABALLERO", categoria: "caballeros", precio: 48.50 },
        { nombre: "AL HARAMAIN L'AVENTURE BLANCHE 200ML", categoria: "caballeros", precio: 54.99 },
        { nombre: "ADIDAS CHAMPIONS GOAL EDT 100ML CABALLERO", categoria: "caballeros", precio: 26.75 },
        { nombre: "ABERCROMBIE & FITCH AUTHENTIC EDT 100ML", categoria: "caballeros", precio: 52.99 },
        { nombre: "AB THE SECRET 100ML CABALLERO", categoria: "caballeros", precio: 46.50 },
        { nombre: "AB GOLDEN SECRET EDT 100ML CABALLERO", categoria: "caballeros", precio: 48.99 },
        { nombre: "AB KING SEDUCTION EDT 200ML CABALLERO", categoria: "caballeros", precio: 58.75 },
        { nombre: "AB BLACK SEDUCTION EDT 200ML CABALLERO", categoria: "caballeros", precio: 56.99 },
        
        // MUJER
        { nombre: "DKNY BE DELICIOUS EDP 100ML DAMA", categoria: "mujer", precio: 55.99 },
        { nombre: "MONT BLANC EMBLEM EDP 75ML DAMA", categoria: "mujer", precio: 65.50 },
        { nombre: "PERRY ELLIS 360 RED EDP 100ML DAMA", categoria: "mujer", precio: 42.99 },
        { nombre: "UDV CIEL EDP 100ML", categoria: "mujer", precio: 38.75 },
        { nombre: "PACO RABANNE OLYMPEA EDP 75ML", categoria: "mujer", precio: 75.50 },
        { nombre: "CAROLINA HERRERA GOOD GIRL EDP 80ML DAMA", categoria: "mujer", precio: 89.99 },
        { nombre: "BENETTON UNITED COLORS SISTERLAND RED ROSE EDT 80ML DAMA", categoria: "mujer", precio: 32.50 },
        { nombre: "ARIANA GRANDE ARI EDP 100ML DAMA", categoria: "mujer", precio: 45.99 },
        { nombre: "ARIANA GRANDE SWEET LIKE CANDY EDP 100ML DAMA", categoria: "mujer", precio: 44.50 },
        { nombre: "ABERCROMBIE & FITCH AUTHENTIC NIGHT EDP 100ML LADY", categoria: "mujer", precio: 52.99 },
        { nombre: "BENETTON COLORS ROSE EDT 80ML", categoria: "mujer", precio: 31.99 },
        { nombre: "CAROLINA HERRERA 212 SEXY EDP 100ML DAMA", categoria: "mujer", precio: 72.50 },
        { nombre: "AFNAN 9PM EDP 100ML DAMA", categoria: "mujer", precio: 48.99 },
        { nombre: "LATTAFA BADEE AL OUD NOBLE BLUSH EDP 100ML DAMA", categoria: "mujer", precio: 54.75 },
        { nombre: "ARIANA GRANDE CLOUD INTENSE 2.0 EDP 100ML DAMA", categoria: "mujer", precio: 52.99 },
        { nombre: "ARMAF DELIGHTS YUM YUM EDP 100ML DAMA", categoria: "mujer", precio: 46.50 },
        { nombre: "HUGO BOSS DEEP RED EDT 90ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "CALVIN KLEIN EUPHORIA EDP 100ML DAMA", categoria: "mujer", precio: 58.75 },
        { nombre: "CUBA VIP EDP 100ML DAMA", categoria: "mujer", precio: 32.99 },
        { nombre: "CUBA VICTORY EDP 100ML DAMA", categoria: "mujer", precio: 33.50 },
        { nombre: "ELIZABETH ARDEN RED DOOR EDT 100ML DAMA", categoria: "mujer", precio: 48.99 },
        { nombre: "GUESS GIRL EDT 100ML", categoria: "mujer", precio: 44.75 },
        { nombre: "CAROLINA HERRERA 212 VIP ROSE EDP 80ML", categoria: "mujer", precio: 76.99 },
        { nombre: "CUBA TATTO EDP 100ML DAMA", categoria: "mujer", precio: 34.50 },
        { nombre: "LATTAFA YARA EDP 100ML DAMA", categoria: "mujer", precio: 49.99 },
        { nombre: "ARMAF CLUB DE NUIT EDP 105ML (Arabe)DAMA", categoria: "mujer", precio: 54.75 },
        { nombre: "LATTAFA BADEE AL OUD SUBLIME EDP 100ML", categoria: "mujer", precio: 56.99 },
        { nombre: "LATTAFA BADEE AL OUD AMETHYST EDP 100ML", categoria: "mujer", precio: 57.50 },
        { nombre: "LATTAFA YARA MOI EDP 100ML", categoria: "mujer", precio: 51.99 },
        { nombre: "GUESS GOLD EDP 75ML DAMA", categoria: "mujer", precio: 52.75 },
        { nombre: "LATTAFA MAYAR EDP 100ML DAMA", categoria: "mujer", precio: 48.99 },
        { nombre: "CACHAREL AMOR AMOR EDT 100ML DAMA", categoria: "mujer", precio: 46.50 },
        { nombre: "BRITNEY SPEARS FANTASY EDT 100ML DAMA", categoria: "mujer", precio: 42.99 },
        { nombre: "ARIANA GRANDE CLOUD EDP 100ML DAMA", categoria: "mujer", precio: 47.75 },
        { nombre: "LATTAFA FAKHAR EDP 100ML DAMA", categoria: "mujer", precio: 44.99 },
        { nombre: "MAISON ALHAMBRA DELILAH EDP 100ML", categoria: "mujer", precio: 46.50 },
        { nombre: "LATTAFA HAYA EDP 100ML DAMA", categoria: "mujer", precio: 49.99 },
        { nombre: "GUESS EDP 75ML DAMA", categoria: "mujer", precio: 52.75 },
        { nombre: "ARMAF CLUB DE NUIT INTENSE EDP 105ML DAMA", categoria: "mujer", precio: 56.99 },
        { nombre: "AB BLUE SEDUCTION EDT 200ML DAMA", categoria: "mujer", precio: 44.50 },
        { nombre: "LATTAFA YARA TOUS EDP 100ML DAMA", categoria: "mujer", precio: 53.99 },
        { nombre: "TOMMY HILFIGER GIRL EDT 100ML", categoria: "mujer", precio: 48.75 },
        { nombre: "PARIS HILTON CAN CAN EDP 100ML", categoria: "mujer", precio: 42.99 },
        { nombre: "LATTAFA YARA CANDY EDP 100ML DAMA", categoria: "mujer", precio: 51.50 },
        { nombre: "ARMAF ODYSSEY CANDEE EDP 100ML DAMA", categoria: "mujer", precio: 49.99 },
        { nombre: "BENETTON HOT EDT 100ML UNISEX", categoria: "unisex", precio: 36.75 },
        { nombre: "VERSACE RED JEAN EDT 75ML DAMA", categoria: "mujer", precio: 58.99 },
        { nombre: "ARIANA GRANDE THANK U NEXT EDP 100ML", categoria: "mujer", precio: 48.50 },
        { nombre: "ARMAF CLUB DE NUIT IMPERIALE EDP 105ML DAMA", categoria: "mujer", precio: 57.99 },
        { nombre: "CLINIQUE HAPPY EDP 100ML DAMA", categoria: "mujer", precio: 62.75 },
        { nombre: "CALVIN KLEIN CK ONE SHOCK EDT 200ML DAMA", categoria: "mujer", precio: 56.99 },
        { nombre: "CLINIQUE HAPPY HEART EDP 100ML DAMA", categoria: "mujer", precio: 64.50 },
        { nombre: "GUESS By MARCIANO EDP 100ML DAMA", categoria: "mujer", precio: 58.99 },
        { nombre: "DAVIDOFF COOL WATER EDT 100ML DAMA", categoria: "mujer", precio: 52.75 },
        { nombre: "MAISON ALHAMBRA BAROQUE ROUGE 540 EDP 100ML", categoria: "mujer", precio: 49.99 },
        { nombre: "DOLCE & GABBANA LIGHT BLUE EDT 100ML DAMA", categoria: "mujer", precio: 78.50 },
        { nombre: "MOSCHINO TOY 2 BUBBLE GUM EDP 100ML", categoria: "mujer", precio: 65.99 },
        { nombre: "ARIANA GRANDE MOONLIGHT EDP 100ML DAMA", categoria: "mujer", precio: 49.75 },
        { nombre: "BENETTON INFERNO PARADISO EDT 100ML DAMA", categoria: "mujer", precio: 38.99 },
        { nombre: "HALLOWEEN EDT 100ML DAMA", categoria: "mujer", precio: 42.50 },
        { nombre: "PARIS HILTON EDP 100ML DAMA", categoria: "mujer", precio: 41.99 },
        { nombre: "MOSCHINO TOY 2 EDP 100ML", categoria: "mujer", precio: 62.75 },
        { nombre: "PARIS HILTON HEIRES EDP 100ML DAMA", categoria: "mujer", precio: 43.99 },
        { nombre: "ARMAF TAG DONNA COLORATA EDP 100ML DAMA", categoria: "mujer", precio: 47.50 },
        { nombre: "AFNAN 9AM CORAL EDP 100ML DAMA", categoria: "mujer", precio: 51.99 },
        { nombre: "CAROLINA HERRERA 212 EDT 100ML DAMA", categoria: "mujer", precio: 68.75 },
        { nombre: "ISSEY MIYAKE EDT 100ML DAMA", categoria: "mujer", precio: 72.99 },
        { nombre: "TOMMY NOW GIRL EDT 100ML", categoria: "mujer", precio: 46.50 },
        { nombre: "KATY PERRY PURR EDP 100ML", categoria: "mujer", precio: 42.99 },
        { nombre: "PERRY ELLIS 360 EDT 100ML DAMA", categoria: "mujer", precio: 41.75 },
        { nombre: "LATTAFA ECLAIRE EDP 100ML DAMA", categoria: "mujer", precio: 49.99 },
        { nombre: "VERSACE YELLOW DIAMOND EDT 90ML DAMA", categoria: "mujer", precio: 66.50 },
        { nombre: "HALLOWEEN KISS SEXY EDT 100ML DAMA", categoria: "mujer", precio: 43.99 },
        { nombre: "PARIS HILTON RUBY RUSH EDP 100ML", categoria: "mujer", precio: 44.75 },
        { nombre: "PARIS HILTON JUST ME EDP 100ML", categoria: "mujer", precio: 42.99 },
        { nombre: "AB HER SECRET TEMPATION EDT 80ML LADY", categoria: "mujer", precio: 38.50 },
        { nombre: "VALENTINO VOCE VIVA INTENSA EDP 100ML DAMA", categoria: "mujer", precio: 82.99 },
        { nombre: "AB QUEEN OF SEDUCTION EDT 80ML DAMA", categoria: "mujer", precio: 39.75 },
        { nombre: "VALENTINO DONNA BORN IN ROMA EDP 100ML DAMA", categoria: "mujer", precio: 86.99 },
        { nombre: "PARIS HILTON PINK RUSH EDP 100ML", categoria: "mujer", precio: 43.50 },
        { nombre: "SALVATORE FERRAGAMO SIGNIORINA MISTERIOSA EDP 100ML", categoria: "mujer", precio: 68.99 },
        { nombre: "CACHAREL ANAIS ANAIS EDT 100ML DAMA", categoria: "mujer", precio: 46.75 },
        { nombre: "BHARARA MAST ROME EDP 100ML DAMA", categoria: "mujer", precio: 56.99 },
        { nombre: "CUBA TROUBLE EDP 100ML DAMA", categoria: "mujer", precio: 34.50 },
        { nombre: "CALVIN KLEIN ETERNITY EDP 100ML DAMA", categoria: "mujer", precio: 58.99 },
        { nombre: "AL HARAMAIN L'AVENTURE FEMME EDP 100ML", categoria: "mujer", precio: 52.75 },
        { nombre: "KENZO AMOUR EDP 100ML DAMA", categoria: "mujer", precio: 72.99 },
        { nombre: "LATTAFA MAYAR NATURAL INTENSE EDP 100ML DAMA", categoria: "mujer", precio: 51.50 },
        { nombre: "VERSACE EROS POUR FEMME EDP 100ML", categoria: "mujer", precio: 74.99 },
        { nombre: "PARIS HILTON LOVE RUSH EDP 100ML", categoria: "mujer", precio: 44.75 },
        { nombre: "MOSCHINO TOY 2 PEARL EDP 100ML", categoria: "mujer", precio: 64.99 },
        { nombre: "ABERCROMBIE & FITCH AUTHENTIC EDP 100ML DAMA", categoria: "mujer", precio: 53.50 },
        { nombre: "JUICY COUTURE VIVA LA JUICY ROSE EDP 100ML", categoria: "mujer", precio: 62.99 },
        { nombre: "ARMAF TAG DONNA DI TERRA EDP 100ML DAMA", categoria: "mujer", precio: 48.75 },
        { nombre: "MONT BLANC PRESENCE EDT 75ML DAMA", categoria: "mujer", precio: 56.99 },
        { nombre: "PARIS HILTON ROSE RUSH EDP 100ML", categoria: "mujer", precio: 45.50 },
        { nombre: "PERRY ELLIS 18 EDP 100ML DAMA", categoria: "mujer", precio: 44.99 },
        { nombre: "DIESEL PLUS PLUS FEMININE EDT 75ML", categoria: "mujer", precio: 52.75 },
        { nombre: "ELIZABETH ARDEN 5TA AVENUE EDP 125ML DAMA", categoria: "mujer", precio: 68.99 },
        { nombre: "PARIS HILTON CAN CAN BURLESQUE EDP 100ML", categoria: "mujer", precio: 46.50 },
        { nombre: "VICTORINOX FIRST SNOW EDT 100ML", categoria: "mujer", precio: 42.99 },
        { nombre: "ARIANA GRANDE R.E.M EDT 100ML DAMA", categoria: "mujer", precio: 49.75 },
        { nombre: "HOLLISTER CANYON ESCAPE EDP 100ML DAMA", categoria: "mujer", precio: 46.99 },
        { nombre: "JLO MIAMI GLOW EDP 100ML", categoria: "mujer", precio: 44.50 },
        { nombre: "GUCCI RUSH EDT 75ML DAMA", categoria: "mujer", precio: 72.99 },
        { nombre: "AL HARAMAIN L'AVENTURE FEMME EDP 200ML", categoria: "mujer", precio: 64.75 },
        { nombre: "VIKTOR & ROLF FLOWERBOMB EDP 100ML DAMA", categoria: "mujer", precio: 92.99 },
        { nombre: "AB THE ICON EDP 100ML DAMA", categoria: "mujer", precio: 56.50 },
        { nombre: "PARIS HILTON GOLD RUSH EDP 100ML", categoria: "mujer", precio: 47.99 },
        { nombre: "ESCADA MAGNETISM EDP 75ML DAMA", categoria: "mujer", precio: 68.75 },
        { nombre: "GUESS DARE EDT 100ML", categoria: "mujer", precio: 48.99 },
        { nombre: "MOSCHINO FRESH COUTURE PINK EDT 100ML", categoria: "mujer", precio: 62.50 },
        { nombre: "VALENTINO DONNA VALENTINO EDP 100ML", categoria: "mujer", precio: 84.99 },
        { nombre: "PARIS HILTON DAZZLE EDP 125ML", categoria: "mujer", precio: 52.75 },
        { nombre: "CALVIN KLEIN ETERNITY FLAME EDP 100ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "MONT BLANC INDIVIDUEL EDT 75ML DAMA", categoria: "mujer", precio: 58.50 },
        { nombre: "LATTAFA HAYAATI FLORENCE EDP 100ML DAMA", categoria: "mujer", precio: 53.99 },
        { nombre: "BRITNEY SPEARS FANTASY CURIUS EDP 100ML DAMA", categoria: "mujer", precio: 45.75 },
        { nombre: "CUBA LA VIDA EDP 100ML DAMA", categoria: "mujer", precio: 35.99 },
        { nombre: "CUBA BEAUTY EDP 100ML DAMA", categoria: "mujer", precio: 36.50 },
        { nombre: "VERSACE BRIGHT CRYSTAL EDP 90ML", categoria: "mujer", precio: 76.99 },
        { nombre: "LANCOME MIRACLE EDP 100ML", categoria: "mujer", precio: 82.75 },
        { nombre: "RASASI HAWAS EDP 100ML DAMA", categoria: "mujer", precio: 54.99 },
        { nombre: "ARMAF VOYAGE HAWAII EDP 100ML DAMA", categoria: "mujer", precio: 49.50 },
        { nombre: "PARIS HILTON PLATINUM RUSH EDP 100ML", categoria: "mujer", precio: 48.99 },
        { nombre: "SHAKIRA DANCE DIAMOND EDT 100ML", categoria: "mujer", precio: 42.75 },
        { nombre: "ELIZABETH ARDEN SUNFLOWERS EDT 100ML DAMA", categoria: "mujer", precio: 44.99 },
        { nombre: "LATTAFA AJWAD PINK TO PINK EDP 67ML DAMA", categoria: "mujer", precio: 52.50 },
        { nombre: "VERSACE DYLAN PURPLE EDP 100ML", categoria: "mujer", precio: 78.99 },
        { nombre: "BOUCHERON EDP 100ML DAMA", categoria: "mujer", precio: 84.75 },
        { nombre: "PRADA PARADOXE EDP 90ML DAMA", categoria: "mujer", precio: 88.99 },
        { nombre: "HUGO BOSS EDP 90ML DAMA", categoria: "mujer", precio: 72.50 },
        { nombre: "CUBA MY LOVE EDP 100ML DAMA", categoria: "mujer", precio: 37.99 },
        { nombre: "BVLGARI OMNIA CRYSTALLINE EDT 100ML DAMA", categoria: "mujer", precio: 76.75 },
        { nombre: "DOLCE & GABBANA POUR FEMME EDP 100ML", categoria: "mujer", precio: 82.99 },
        { nombre: "PACO RABANNE FAME EDP 80ML", categoria: "mujer", precio: 68.50 },
        { nombre: "ARIANA GRANDE MOD VANILLA EDP 100ML DAMA", categoria: "mujer", precio: 51.99 },
        { nombre: "DKNY FRESH BLOSSOM EDP 100ML DAMA", categoria: "mujer", precio: 58.75 },
        { nombre: "LATTAFA TERIAQ EDP 100ML DAMA", categoria: "mujer", precio: 49.99 },
        { nombre: "PACO RABANNE LADY MILLION EDP 80ML DAMA", categoria: "mujer", precio: 74.50 },
        { nombre: "MOSCHINO FUNNY EDT 100ML", categoria: "mujer", precio: 62.99 },
        { nombre: "BILLIE EILISH EDP 100ML DAMA", categoria: "mujer", precio: 66.75 },
        { nombre: "AB BLUE SEDUCTION EDT 80ML DAMA", categoria: "mujer", precio: 42.99 },
        { nombre: "VALENTINO DONNA BORN IN ROMA CORAL FANTASY EDP 100ML DAMA", categoria: "mujer", precio: 84.50 },
        { nombre: "REVLON CIARA EDT 68ML", categoria: "mujer", precio: 38.99 },
        { nombre: "BURBERRY BRIT EDP 100ML DAMA", categoria: "mujer", precio: 78.75 },
        { nombre: "BENETTON HOT GOLD 100ML DAMA", categoria: "mujer", precio: 39.99 },
        { nombre: "DOLCE & GABBANA L'IMPERATRICE EDT 100ML DAMA", categoria: "mujer", precio: 76.50 },
        { nombre: "BENETTON UNITED COLORS SISTERLAND GREEN JASMINE EDT 80ML DAMA", categoria: "mujer", precio: 34.99 },
        { nombre: "MACARENA BITCOIN EDP 100ML DAMA", categoria: "mujer", precio: 52.75 },
        { nombre: "CAROLINA HERRERA 212 HEROES EDP 80ML DAMA", categoria: "mujer", precio: 72.99 },
        { nombre: "BRITNEY SPEARS FANTASY SHEER EDT 100ML DAMA", categoria: "mujer", precio: 44.50 },
        { nombre: "DKNY GOLDEN DELICIOUS EDP 100ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "XOXO EDP 100ML DAMA", categoria: "mujer", precio: 46.75 },
        { nombre: "AL HARAMAIN AMBER OUD ULTRA VIOLET EDP 120ML LADY", categoria: "mujer", precio: 68.99 },
        { nombre: "LATTAFA AFEEF EDP 100ML DAMA", categoria: "mujer", precio: 48.50 },
        { nombre: "ARIANA GRANDE CLOUD PINK EDP 100ML DAMA", categoria: "mujer", precio: 53.99 },
        { nombre: "HUGO BOSS XX EDT 100ML DAMA", categoria: "mujer", precio: 66.75 },
        { nombre: "LANCOME HYPNOSE EDP 75ML DAMA", categoria: "mujer", precio: 78.99 },
        { nombre: "RALPH By RALPH LAUREN EDP 100ML DAMA", categoria: "mujer", precio: 72.50 },
        { nombre: "CAROLINA HERRERA 212 VIP EDP 80ML DAMA", categoria: "mujer", precio: 76.99 },
        { nombre: "GIVENCHY AMARIGE EDP 100ML DAMA", categoria: "mujer", precio: 74.75 },
        { nombre: "HUGO BOSS ORANGE EDT 75ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "GIVENCHY ANGE OU DEMON EDP 100ML DAMA", categoria: "mujer", precio: 82.50 },
        { nombre: "REYANE TRADITION ACQUA DI PARISIS VENEZIA EDP 100ML", categoria: "mujer", precio: 46.99 },
        { nombre: "AGATHA RUIZ DE LA PRADA GOTAS DE COLOR EDT 100ML", categoria: "mujer", precio: 44.75 },
        { nombre: "DOLCE & GABANNA DEVOTION EDP 100ML", categoria: "mujer", precio: 84.99 },
        { nombre: "CREED AVENTUS EDP 75ML DAMA", categoria: "mujer", precio: 168.50 },
        { nombre: "EMPER ARABIA HAYA CRUSH EDP 100ML DAMA", categoria: "mujer", precio: 54.99 },
        { nombre: "ELIZABETH ARDEN GREEN TEA EDT 100ML DAMA", categoria: "mujer", precio: 42.75 },
        { nombre: "LATTAFA VICTORIA EDP 100ML DAMA", categoria: "mujer", precio: 51.99 },
        { nombre: "ARMAF BEACH PARTY EDP 100ML DAMA", categoria: "mujer", precio: 48.50 },
        { nombre: "GUESS SEDUCTIVE EDT 125ML DAMA", categoria: "mujer", precio: 56.99 },
        { nombre: "KENZO FLOWER EDP 100ML", categoria: "mujer", precio: 74.75 },
        { nombre: "HALLOWEEN LILY WATER EDT 100ML DAMA", categoria: "mujer", precio: 43.99 },
        { nombre: "AL HARAMAIN L'AVENTURE ROSE EDP 200ML", categoria: "mujer", precio: 58.50 },
        { nombre: "MAISON ALHAMBRA ROSE PETALS EDP 80ML DAMA", categoria: "mujer", precio: 46.99 },
        { nombre: "PACO RABANNE BLACK XS EDP 80ML DAMA", categoria: "mujer", precio: 62.75 },
        { nombre: "HUGO BOSS THE SCENT EDT 90ML DAMA", categoria: "mujer", precio: 68.99 },
        { nombre: "RALPH LAUREN ROMANCE EDP 100ML", categoria: "mujer", precio: 72.50 },
        { nombre: "JLO STILL EDP 100ML", categoria: "mujer", precio: 46.99 },
        { nombre: "MAST PERFUME SWEET VELVET EDP 100ML DAMA", categoria: "mujer", precio: 52.75 },
        { nombre: "DKNY BE DELICIOUS ORCHAD ST EDP 100ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "HUGO BOSS MA VIE EDT 75ML", categoria: "mujer", precio: 66.50 },
        { nombre: "LATTAFA RAVE NOW FOR HER EDP 100ML DAMA", categoria: "mujer", precio: 49.99 },
        { nombre: "VIKTOR & ROLF BONBON EDP 90ML", categoria: "mujer", precio: 84.75 },
        { nombre: "LATTAFA MAYAR CHERRY INTENSE EDP 100ML DAMA", categoria: "mujer", precio: 53.99 },
        { nombre: "SHAKIRA ROCK EDT 80ML", categoria: "mujer", precio: 44.50 },
        { nombre: "LATTAFA SHAD EDP 100ML DAMA", categoria: "mujer", precio: 51.99 },
        { nombre: "BRITNEY SPEARS FANTASY INTIMATE EDP 100ML DAMA", categoria: "mujer", precio: 46.75 },
        { nombre: "CALVIN KLEIN ETERNITY MOMENT EDP 100ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "ARMANI CODE EDP 75ML DAMA", categoria: "mujer", precio: 76.50 },
        { nombre: "DIESEL LOVERDOSE EDP 75ML DAMA", categoria: "mujer", precio: 68.99 },
        { nombre: "PERRY ELLIS 360 PINK EDT 100ML", categoria: "mujer", precio: 43.75 },
        { nombre: "VERSACE DYLAN TURQUOISE EDT 100ML DAMA", categoria: "mujer", precio: 78.99 },
        { nombre: "PACO RABANNE FAME EDP INTENSE 80ML LADY", categoria: "mujer", precio: 72.50 },
        { nombre: "CUBA CHIC EDP 100ML DAMA", categoria: "mujer", precio: 36.99 },
        { nombre: "ARIANA GRANDE MOD BLUSH EDP 100ML DAMA", categoria: "mujer", precio: 52.75 },
        { nombre: "MONTALE ARABIANS EDP 100ML", categoria: "mujer", precio: 88.99 },
        { nombre: "LATTAFA ATHEERI EDP 100ML DAMA", categoria: "mujer", precio: 49.50 },
        { nombre: "VALENTINO DONNA BORN IN ROMA EXTRADOSE PARFUM 100ML DAMA", categoria: "mujer", precio: 92.99 },
        { nombre: "BENETTON UNITED COLORS SISTERLAND BLUE NEROLI EDT 80ML DAMA", categoria: "mujer", precio: 35.75 },
        { nombre: "CHANEL CHANCE EDP 100ML DAMA", categoria: "mujer", precio: 98.99 },
        { nombre: "ABERCROMBIE & FITCH AUTHENTIC MOMENT EDP 100ML LADY", categoria: "mujer", precio: 56.50 },
        { nombre: "CACHAREL NOA EDT 100ML DAMA", categoria: "mujer", precio: 46.99 },
        { nombre: "CUBA NIGHT EDP 100ML DAMA", categoria: "mujer", precio: 37.75 },
        { nombre: "BRITNEY SPEARS BELIEVE EDT 100ML DAMA", categoria: "mujer", precio: 44.99 },
        { nombre: "VALENTINO DONNA BORN IN ROMA YELLOW DREAM EDP 100ML", categoria: "mujer", precio: 86.50 },
        { nombre: "CAROLINA HERRERA VERY GOOD GIRL EDP 80ML DAMA", categoria: "mujer", precio: 88.99 },
        { nombre: "DOLCE & GABBANA THE ONE EDP 75ML DAMA", categoria: "mujer", precio: 78.75 },
        { nombre: "DKNY BE DELICIUS 100% EDP 100ML DAMA", categoria: "mujer", precio: 66.99 },
        { nombre: "VERSACE WOMAN EDP 100ML", categoria: "mujer", precio: 82.50 },
        { nombre: "ARMAF DELIGHTS ISLAND BLISSED EDP 100ML DAMA", categoria: "mujer", precio: 52.99 },
        { nombre: "CAROLINA By CAROLINA HERRERA EDP 100ML DAMA", categoria: "mujer", precio: 74.75 },
        { nombre: "TOM FORD VELVET ORCHID EDP 100ML DAMA", categoria: "mujer", precio: 128.99 },
        { nombre: "ARMANI ACQUA DI GIO EDT 100ML DAMA", categoria: "mujer", precio: 84.50 },
        { nombre: "AB HER SECRET DESIRE EDT 80ML LADY", categoria: "mujer", precio: 41.99 },
        { nombre: "HOLLISTER FREE WAVE EDP 100ML", categoria: "mujer", precio: 48.75 },
        { nombre: "BOND NRO 9 NOLITA EDP 100ML", categoria: "mujer", precio: 92.99 },
        { nombre: "AB HER GOLDEN SECRET EDT 80ML DAMA", categoria: "mujer", precio: 43.50 },
        { nombre: "SHAKIRA DANCE MIDNIGHT EDT 80ML DAMA", categoria: "mujer", precio: 45.99 },
        { nombre: "CAROLINA HERRERA GOOD GIRL SUPREME EDP 80ML DAMA", categoria: "mujer", precio: 92.75 },
        { nombre: "VALENTINO DONNA BORN IN ROMA INTENSE EDP 100ML DAMA", categoria: "mujer", precio: 89.99 },
        { nombre: "ROSE NOIRE EDT 100ML DAMA", categoria: "mujer", precio: 56.50 },
        { nombre: "CALVIN KLEIN OBSESSION EDP 100ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "LIZ CLAIBORNE CURVE EDT 100ML DAMA", categoria: "mujer", precio: 38.75 },
        { nombre: "DIOR HYPNOTIC POISON EDP 100ML", categoria: "mujer", precio: 88.99 },
        { nombre: "EMPER ARABIA HAYA LE CHEMEAU EDP 100ML DAMA", categoria: "mujer", precio: 57.50 },
        { nombre: "BILLIE EILISH NO. 2 EDP 100ML DAMA", categoria: "mujer", precio: 69.99 },
        { nombre: "DIOR J'ADORE EDP 100ML DAMA", categoria: "mujer", precio: 94.75 },
        { nombre: "BEVERLY HILLS GIORGIO AMARILLO EDT 100ML", categoria: "mujer", precio: 58.99 },
        { nombre: "YVES SAINT LAURENT LIBRE FLOWERS & FLAMES EDP FLORALE 90ML DAMA", categoria: "mujer", precio: 96.50 },
        { nombre: "DOLCE & GABBANA THE ONE GOLD INTENSE EDP 75ML", categoria: "mujer", precio: 84.99 },
        { nombre: "JEAN PAUL GAULTIER SCANDAL LE PARFUM 80ML", categoria: "mujer", precio: 78.75 },
        { nombre: "PERRY ELLIS 360 COLLECTION EDP 100ML", categoria: "mujer", precio: 46.99 },
        { nombre: "CUBA TOO SEXY EDP 100ML DAMA", categoria: "mujer", precio: 39.50 },
        { nombre: "DAVIDOFF COOL WATER REBORN EDT 100ML DAMA", categoria: "mujer", precio: 56.99 },
        { nombre: "ORIENTICA BELLISSIMA EXOTIC EDP 75ML", categoria: "mujer", precio: 62.75 },
        { nombre: "DKNY BE DELICIOUS ICE POP VERY CHERRY EDP 50ML DAMA", categoria: "mujer", precio: 52.99 },
        { nombre: "TOUS SORBET GARDEN EDT 90ML DAMA", categoria: "mujer", precio: 58.50 },
        { nombre: "MOSCHINO PINK BOUQUET EDT 100ML DAMA", categoria: "mujer", precio: 64.99 },
        { nombre: "PACO RABANNE ULTRARED EDP 80ML DAMA", categoria: "mujer", precio: 68.75 },
        { nombre: "ARIANA GRANDE THANK U NEXT 2.0 EDP 100ML DAMA", categoria: "mujer", precio: 54.99 },
        { nombre: "LATTAFA ECLAIRE BANOFFI EDP 100ML UNISEX", categoria: "unisex", precio: 52.50 },
        { nombre: "THIERRY MUGLER ANGEL EDP 50ML", categoria: "mujer", precio: 76.99 },
        { nombre: "GUCCI BAMBOO EDP 75ML DAMA", categoria: "mujer", precio: 84.75 },
        { nombre: "JLO LIVE EDT 100ML", categoria: "mujer", precio: 48.99 },
        { nombre: "GUCCI GUILTY EDP 90ML DAMA", categoria: "mujer", precio: 88.50 },
        { nombre: "VERSACE DYLAN BLUE EDP 100ML DAMA", categoria: "mujer", precio: 78.99 },
        { nombre: "GUESS BELLA VITA EDP 100ML DAMA", categoria: "mujer", precio: 56.75 },
        { nombre: "HOLLISTER FESTIVAL VIBES EDP 100ML DAMA", categoria: "mujer", precio: 49.99 },
        { nombre: "JESSICA SIMPSON FANCY EDP 100ML", categoria: "mujer", precio: 44.50 },
        { nombre: "REYANE TRADITION ACQUA DI PARISIS MAGIC RED EDP 100ML", categoria: "mujer", precio: 52.99 },
        { nombre: "PACO RABANNE ULTRAVIOLET EDP 80ML DAMA", categoria: "mujer", precio: 66.75 },
        { nombre: "CALVIN KLEIN ETERNITY AIR EDP 100ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "DAVIDOFF COOL WATER SEA ROSE EDT 100ML DAMA", categoria: "mujer", precio: 58.50 },
        { nombre: "LATTAFA TERIAQ INTENSE EDP 100ML DAMA", categoria: "mujer", precio: 54.99 },
        { nombre: "DAVIDOFF COOL WATER EDT 200ML DAMA", categoria: "mujer", precio: 72.75 },
        { nombre: "LIZ CLAIBORNE CURVE CRUSH EDT 100ML DAMA", categoria: "mujer", precio: 41.99 },
        { nombre: "OSCAR DE LA RENTA VOLUPTE EDT 100ML DAMAS", categoria: "mujer", precio: 68.50 },
        { nombre: "TOUS LOVEME EMERALD ELIXIR PARFUM 90ML DAMA", categoria: "mujer", precio: 76.99 },
        { nombre: "DOLCE & GABANNA DEVOTION EDP INTENSE 100ML DAMA", categoria: "mujer", precio: 92.75 },
        { nombre: "CUBA HEARTBREAKER EDP 100ML DAMA", categoria: "mujer", precio: 38.99 },
        { nombre: "BURBERRY HER EDP 100ML DAMA", categoria: "mujer", precio: 86.50 },
        { nombre: "DOLCE & GABBANA \"Q\" EDP 100ML DAMA", categoria: "mujer", precio: 82.99 },
        { nombre: "HALLOWEEN BLUE DROP EDT 100ML DAMA", categoria: "mujer", precio: 45.75 },
        { nombre: "ARMAF PRIDE ROSE OUD EDP 100ML DAMA", categoria: "mujer", precio: 58.99 },
        { nombre: "PARFUMS DE MARLY DELINA EXCLUSIFF 75ML DAMA", categoria: "mujer", precio: 128.50 },
        { nombre: "PARIS HILTON LUXE RUSH EDP 100ML", categoria: "mujer", precio: 52.99 },
        { nombre: "JLO LIVE LUXE EDP 100ML", categoria: "mujer", precio: 54.75 },
        { nombre: "BENETTON UNITED COLORS SISTERLAND YELLOW PEONY EDP 80ML DAMA", categoria: "mujer", precio: 37.99 },
        { nombre: "BVLGARI OMNIA CORAL EDT 100ML DAMA", categoria: "mujer", precio: 78.50 },
        { nombre: "SALVATORE FERRAGAMO SIGNIORINA EDP 100ML DAMA", categoria: "mujer", precio: 72.99 },
        { nombre: "BVLGARI OMNIA AMETHYSTE EDT 100ML DAMA", categoria: "mujer", precio: 76.75 },
        { nombre: "ARMAF CLUB DE NUIT LIONHEART DAMA EDP 100ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "MAISON ALHAMBRA GLACIER BELLA EDO 100ML DAMA", categoria: "mujer", precio: 49.50 },
        { nombre: "LANCOME POEME EDP 100ML", categoria: "mujer", precio: 84.99 },
        { nombre: "ARMAF ODYSSEY CANDEE EDP 200ML DAMA", categoria: "mujer", precio: 68.75 },
        { nombre: "DKNY BE DELICIOUS ICE POP BERRY BLISS EDP 50ML DAMA", categoria: "mujer", precio: 54.99 },
        { nombre: "MONTALE PINK EXTASY EDP 100ML", categoria: "mujer", precio: 92.50 },
        { nombre: "HOLLISTER WAVE EDP 100ML DAMA", categoria: "mujer", precio: 48.99 },
        { nombre: "YVES SAINT LAURENT LIBRE EDP 90ML", categoria: "mujer", precio: 94.75 },
        { nombre: "ARMAF CLUB DE NUIT PRECIEUX IV EDP 55ML DAMA", categoria: "mujer", precio: 58.99 },
        { nombre: "CALVIN KLEIN OBSESSION NIGHT EDT 100ML DAMA", categoria: "mujer", precio: 66.50 },
        { nombre: "ISSEY MIYAKE ROSE AND ROSE EDT 90ML DAMA", categoria: "mujer", precio: 72.99 },
        { nombre: "CAROLINA HERRERA GOOD GIRL BLUSH ELIXIR EDP 80ML DAMA", categoria: "mujer", precio: 94.75 },
        { nombre: "GIVENCHY VERY IRRESISTIBLE EDT 75ML DAMA", categoria: "mujer", precio: 78.99 },
        { nombre: "LANCOME LA VIE EST BELLE IN ROSE EDP 100ML", categoria: "mujer", precio: 96.50 },
        { nombre: "LANCOME IDOLE EDT 100ML DAMA", categoria: "mujer", precio: 88.99 },
        { nombre: "MONT BLANC EMBLEM ELIXIR EDP 75ML", categoria: "mujer", precio: 74.75 },
        { nombre: "ARMAF TRES NUIT VALENTINA EDP 100ML DAMA", categoria: "mujer", precio: 56.99 },
        { nombre: "PERRY ELLIS 360 EDT 200ML DAMA", categoria: "mujer", precio: 58.50 },
        { nombre: "SALVATORE FERRAGAMO INCANTO SHINE EDT 100ML", categoria: "mujer", precio: 64.99 },
        { nombre: "ARMAF CLUB DE NUIT MALEKA EDP 105ML DAMA", categoria: "mujer", precio: 62.75 },
        { nombre: "LANCOME LA VIE EST BELLE SOLEIL CRISTAL L'EAU DE PARFUM 100ML", categoria: "mujer", precio: 98.99 },
        { nombre: "ARABIYAT LA DI DA EDP 100ML DAMA", categoria: "mujer", precio: 54.50 },
        { nombre: "LAPIDUS RUMBA EDT 100ML", categoria: "mujer", precio: 46.99 },
        { nombre: "JIMMY CHOO FEVER EDP 100ML DAMA", categoria: "mujer", precio: 78.75 },
        { nombre: "JEAN PAUL GAULTIER SCANDAL GOLD EDP 80ML DAMA", categoria: "mujer", precio: 82.99 },
        { nombre: "CREED CARMINA EDP 75ML DAMA", categoria: "mujer", precio: 168.50 },
        { nombre: "LATTAFA QIMMAH EDP 100ML DAMA", categoria: "mujer", precio: 52.99 },
        { nombre: "DKNY BE DELICIOUS ICE POP CITRUS SPLASH EDP 50ML DAMA", categoria: "mujer", precio: 53.75 },
        { nombre: "GUESS GIRL BELLE EDT 100ML", categoria: "mujer", precio: 48.99 },
        { nombre: "GIVENCHY ORGANZA EDP 100ML DAMA", categoria: "mujer", precio: 82.50 },
        { nombre: "RASASI HAWAS ECLAT EDP 100ML DAMA", categoria: "mujer", precio: 58.99 },
        { nombre: "CAROLINA HERRERA LUCKY CHARM EDP 100ML DAMA", categoria: "mujer", precio: 76.75 },
        { nombre: "JIMMY CHOO ROSE ROSE PASION EDP 100ML DAMA", categoria: "mujer", precio: 84.99 },
        { nombre: "MOSCHINO SO REAL CHEAP AND CHIC EDT 100ML", categoria: "mujer", precio: 62.50 },
        { nombre: "LATTAFA VELVET ROSE EDP 100ML DAMA", categoria: "mujer", precio: 56.99 },
        { nombre: "ARMAF ODYSSEY FEMME EDP 80ML DAMA", categoria: "mujer", precio: 52.75 },
        { nombre: "ABERCROMBIE & FITCH FIRST INSTINTIC BLUE EDP 100ML DAMA", categoria: "mujer", precio: 58.99 },
        { nombre: "LANCOME LA VIE EST BELLE INTENSAMENTE EDP 100ML", categoria: "mujer", precio: 94.50 },
        { nombre: "DOLCE & GABBANA POUR FEMME EDT 100ML DAMA", categoria: "mujer", precio: 78.99 },
        { nombre: "HOLLISTER WAVE 2 EDP 100ML", categoria: "mujer", precio: 49.75 },
        { nombre: "ARMANI EMPORIO BECAUSE IT'S YOU EDP 100ML DAMA", categoria: "mujer", precio: 86.99 },
        { nombre: "SALVATORE FERRAGAMO SIGNORINA LIBERA EDP 100ML", categoria: "mujer", precio: 74.50 },
        { nombre: "LATTAFA THE KINGDOM EDP 100ML DAMA", categoria: "mujer", precio: 59.99 },
        { nombre: "KATE SPADE NEW YORK SPARKLE EDP INTENSE 100ML DAMA", categoria: "mujer", precio: 72.75 },
        { nombre: "LATTAFA PRIDE THARWAH GOLD EDP 100ML DAMA", categoria: "mujer", precio: 64.99 },
        { nombre: "DKNY BE TEMPTED EDP 100ML DAMA", categoria: "mujer", precio: 66.50 },
        { nombre: "LATTAFA PETRA EDP 100ML DAMA", categoria: "mujer", precio: 57.99 },
        { nombre: "HALLOWEEN BLISS EDT 100ML DAMA", categoria: "mujer", precio: 44.75 },
        { nombre: "AB THE ICON SPLENDID EDP 100ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "KENZO WORLD POWER EDP 75ML", categoria: "mujer", precio: 78.50 },
        { nombre: "DKNY 24/7 EDP 100ML DAMA", categoria: "mujer", precio: 68.99 },
        { nombre: "CAROLINA HERREHA CH WILD LOVE EDP 100ML DAMA", categoria: "mujer", precio: 76.75 },
        { nombre: "LATTAFA ANSAAM GOLD EDP 100ML DAMA", categoria: "mujer", precio: 66.99 },
        { nombre: "DIOR ADDICT EDP 100ML", categoria: "mujer", precio: 92.50 },
        { nombre: "ESCADA CHIFFON SORBET EDT 100ML DAMA", categoria: "mujer", precio: 64.99 },
        { nombre: "THIERRY MUGLER ANGEL FANTASM EDP SENSUELLE 50ML DAMA", categoria: "mujer", precio: 82.75 },
        { nombre: "PRADA PARADOXE VIRTUAL FLOWER EDP 90ML DAMA", categoria: "mujer", precio: 94.99 },
        { nombre: "LAPIDUS EDT 100ML DAMA", categoria: "mujer", precio: 48.50 },
        { nombre: "BENETTON SPORT EDT 100ML DAMA", categoria: "mujer", precio: 36.99 },
        { nombre: "CHLOE EDP 50ML DAMA", categoria: "mujer", precio: 78.75 },
        { nombre: "DIOR DUNE EDT 100ML DAMA", categoria: "mujer", precio: 84.99 },
        { nombre: "HUGO BOSS ALIVE INTENSE EDP 80ML DAMA", categoria: "mujer", precio: 72.50 },
        { nombre: "GIVENCHY IRRESISTIBLE EDT FRAICHE 100ML DAMA", categoria: "mujer", precio: 76.99 },
        { nombre: "LANCOME LA VIE EST BELLE IRIS ABSOLU EDP 100ML DAMA", categoria: "mujer", precio: 96.75 },
        { nombre: "BRITNEY SPEARS FANTASY FESTIVE FANTASY EDT 100ML DAMA", categoria: "mujer", precio: 47.99 },
        { nombre: "AL HARAMAIN L'AVENTURE GOLD EDP 100ML DAMA", categoria: "mujer", precio: 62.50 },
        { nombre: "SHAKIRA AMARILLO EDP 80ML DAMA", categoria: "mujer", precio: 46.99 },
        { nombre: "THIERRY MUGLER ANGEL EDP REFILL 100ML DAMA", categoria: "mujer", precio: 88.75 },
        { nombre: "PARIS HILTON ELECTRIFY EDT 100ML", categoria: "mujer", precio: 45.99 },
        { nombre: "JIMMI CHOO I WANT CHOO EDIT", categoria: "mujer", precio: 82.50 },
        { nombre: "JEANNE ARTHES BOUM DO BRASIL EDP 100ML DAMA", categoria: "mujer", precio: 54.99 },
        { nombre: "BHARARA GEORGEUS BLUSH EDP 100ML DAMA", categoria: "mujer", precio: 68.75 },
        { nombre: "MOSCHINO FRESH COUTURE EDP 100ML DAMA", categoria: "mujer", precio: 66.99 },
        { nombre: "ARMAF DELIGHTS ISLAND BREEZE EDP 100ML DAMA", categoria: "mujer", precio: 52.50 },
        { nombre: "CAROLINA HERRERA ME FIRST EDP 100ML DAMA", categoria: "mujer", precio: 78.99 },
        { nombre: "PRADA CANDY SUGAR POP EDP 80ML DAMA", categoria: "mujer", precio: 74.75 },
        { nombre: "ELIZABETH TAYLOR WHITE DIAMONDS EDT 100ML DAMA", categoria: "mujer", precio: 68.99 },
        { nombre: "THIERRY MUGLER ANGEL NOVA EDP 50ML DAMA", categoria: "mujer", precio: 84.50 },
        { nombre: "CHLOE LOVE EDP 50ML DAMA", categoria: "mujer", precio: 76.99 },
        { nombre: "BRITNEY SPEARS FANTASY CIRCUS EDP 100ML DAMA", categoria: "mujer", precio: 48.75 },
        { nombre: "VIKTOR & ROLF FLOWERBOMB MIDNIGHT EDP 100ML", categoria: "mujer", precio: 94.99 },
        { nombre: "LATTAFA ECLAIRE PISTACHE EDP 100ML DAMA", categoria: "mujer", precio: 56.50 },
        { nombre: "SALVATORE FERRAGAMO SIGNORINARIBELLE EDP 100ML", categoria: "mujer", precio: 78.99 },
        { nombre: "MARC JACOBS DOT EDP 100ML DAMA", categoria: "mujer", precio: 82.75 },
        { nombre: "BHARARA GEORGEUS EDP 100ML DAMA", categoria: "mujer", precio: 72.99 },
        { nombre: "LIZ CLAIBORNE CURVE CHILL EDT 100ML DAMA", categoria: "mujer", precio: 41.50 },
        { nombre: "GUCCI BLOOM INTENSE EDP 100ML DAMA", categoria: "mujer", precio: 88.99 },
        { nombre: "BENETTON UNITED COLORS SISTERLAND BLUSH CHERRY EDP 80ML DAMA", categoria: "mujer", precio: 38.75 },
        { nombre: "ADIDAS HAPPY FEELS EDP 100ML DAMA", categoria: "mujer", precio: 32.99 },
        { nombre: "JEANNE ARTHES BOUM RAINBOW EDP 100ML DAMA", categoria: "mujer", precio: 53.50 },
        { nombre: "RALPH LAUREN POLO BIG PONY N°2 FOR WOMEN EDT 100ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "MARC JACOBS PERFECT EDP 100ML DAMA", categoria: "mujer", precio: 86.75 },
        { nombre: "SHAKIRA KISS EDT 80ML DAMA", categoria: "mujer", precio: 44.99 },
        { nombre: "LATTAFA YARA ELIXIR EDP 100ML DAMA", categoria: "mujer", precio: 58.50 },
        { nombre: "BENETTON UNITED DREAMS GREEN CACTUS EDT 80ML DAMA", categoria: "mujer", precio: 36.99 },
        { nombre: "PRADA PARADOXE INTENSE EDP 90ML DAMA", categoria: "mujer", precio: 92.75 },
        { nombre: "CAROLINA HERRERA CALL ME DARLING EDP 100ML DAMA", categoria: "mujer", precio: 84.99 },
        { nombre: "ABERCROMBIE & FITCH FIRST INSTINTIC EDP 100ML DAMA", categoria: "mujer", precio: 56.50 },
        { nombre: "MARC JACOBS HONEY EDP 100ML DAMA", categoria: "mujer", precio: 78.99 },
        { nombre: "JIMMY CHOO BLOSSOM EDP 100ML DAMA", categoria: "mujer", precio: 82.75 },
        { nombre: "DOLCE & GABBANA LIGHT BLUE CAPRI IN LOVE EDT 100ML DAMA", categoria: "mujer", precio: 76.99 },
        { nombre: "PRADA CANDY FLORALE EDT 80ML DAMA", categoria: "mujer", precio: 74.50 },
        { nombre: "ARMAF UNIQ EFFECTS OF UNIQ EDP 100ML UNISEX", categoria: "unisex", precio: 62.99 },
        { nombre: "LATTAFA MUSAMAM WHITE INTENSE EDP 100ML DAMA", categoria: "mujer", precio: 58.75 },
        { nombre: "GUCCI BLOOM EDP 100ML DAMA", categoria: "mujer", precio: 86.99 },
        { nombre: "ARMANI MY WAY PARFUM 90ML DAMA", categoria: "mujer", precio: 94.50 },
        { nombre: "CAROLINA HERRERA MAD WORLD EDP 100ML DAMA", categoria: "mujer", precio: 78.99 },
        { nombre: "DKNY EXTRA BE DELICIOUS EDP 100ML DAMA", categoria: "mujer", precio: 68.75 },
        { nombre: "YVES SAINT LAURENT BLACK OPIUM EDP OVER RED 90ML DAMA", categoria: "mujer", precio: 96.99 },
        { nombre: "PACO RABANNE OLYMPEA FLORA EDP 80ML", categoria: "mujer", precio: 76.50 },
        { nombre: "LA MARTINA QUIMERA EDP 100ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "GIVENCHY ANGE OU DEMON LE SECRET EDP 100ML DAMA", categoria: "mujer", precio: 88.75 },
        { nombre: "ISSEY MIYAKE A DROP EDP 90ML DAMA", categoria: "mujer", precio: 72.99 },
        { nombre: "HUGO BOSS ALIVE EDP 80ML", categoria: "mujer", precio: 68.50 },
        { nombre: "PACO RABANNE OLYMOEA PARFUM 80ML DAMA", categoria: "mujer", precio: 84.99 },
        { nombre: "MAISON ALHAMBRA COCO MOISELLE EDP 100ML DAMA", categoria: "mujer", precio: 56.75 },
        { nombre: "MACARENA YAIRA EDP 100ML DAMA", categoria: "mujer", precio: 54.99 },
        { nombre: "LIZ CLAIBORNE CURVE WAVE EDT 125ML DAMA", categoria: "mujer", precio: 42.50 },
        { nombre: "AL HARAMAIN L'AVENTURE GRAPEFRUIT EXTRAIT DE PARFUM 100ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "DOLCE & GABBANA ROSE EDT 75ML", categoria: "mujer", precio: 78.75 },
        { nombre: "CAROLINA HERRERA 212 VIP EDP 125ML DAMA", categoria: "mujer", precio: 88.99 },
        { nombre: "ARMANI SI PASSIONE EDP 100ML DAMA", categoria: "mujer", precio: 86.50 },
        { nombre: "TOUS GEMS POWER EDT 90ML DAMA", categoria: "mujer", precio: 62.99 },
        { nombre: "JEAN PAUL GAULTIER SCANDAL ABSOLU PARFUM CONCENTRE 80ML DAMA", categoria: "mujer", precio: 92.75 },
        { nombre: "TOUS ELECTRO TOUCH EDP 100ML DAMA", categoria: "mujer", precio: 66.99 },
        { nombre: "JIMMY CHOO FLASH EDP 100ML DAMA", categoria: "mujer", precio: 78.50 },
        { nombre: "CALVIN KLEIN MY EUPHORIA EDP 100ML DAMA", categoria: "mujer", precio: 72.99 },
        { nombre: "VALENTINO DONNA BORN IN ROMA GREEN STRAVAGANZA EDP 100ML DAMA", categoria: "mujer", precio: 89.75 },
        { nombre: "CAROLINA HERRERA VERY GOOD GIRL ELIXIR EDP 80ML DAMA", categoria: "mujer", precio: 96.99 },
        { nombre: "TOUS MORE PINK EDT 100ML DAMA", categoria: "mujer", precio: 64.50 },
        { nombre: "AFNAN ZIMAYA FATIMA PINK EDP 100ML DAMA", categoria: "mujer", precio: 58.99 },
        { nombre: "GUESS SEDUCTIVE BLUE EDT 75ML DAMA", categoria: "mujer", precio: 56.75 },
        { nombre: "LATTAFA YARA EDP 50ML DAMA", categoria: "mujer", precio: 42.99 },
        { nombre: "TOUS BONJOUR SEÑORITA EDT 90ML DAMA", categoria: "mujer", precio: 62.50 },
        { nombre: "JEAN PAUL GAULTIER LA BELLE EDP 100ML", categoria: "mujer", precio: 88.99 },
        { nombre: "AB THE ICON SUPREME EDP INTENSE 100ML DAMA", categoria: "mujer", precio: 72.75 },
        { nombre: "BHARARA GODDESS EDP 100ML DAMA", categoria: "mujer", precio: 68.99 },
        { nombre: "DOLCE & GABBANA \"Q\" PARFUM 100ML DAMA", categoria: "mujer", precio: 94.50 },
        { nombre: "VERSACE YELLOW DIAMOND INTENSE EDP 90ML DAMA", categoria: "mujer", precio: 82.99 },
        { nombre: "TOUS Oh! THE ORIGIN EDT 100ML DAMA", categoria: "mujer", precio: 66.75 },
        { nombre: "BRITNEY SPEARS FANTASY JUNGLE EDT 100ML DAMA", categoria: "mujer", precio: 47.99 },
        { nombre: "BHARARA ENCHANTED EDP 100ML DAMA", categoria: "mujer", precio: 72.50 },
        { nombre: "DOLCE & GABBANA \"Q\" INTENSE EDP 100ML DAMA", categoria: "mujer", precio: 88.99 },
        { nombre: "TOUS GEMS PARTY EDT 90ML DAMA", categoria: "mujer", precio: 68.75 },
        { nombre: "BRITNEY SPEARS FANTASY NAKED EDT 100ML DAMA", categoria: "mujer", precio: 46.99 },
        { nombre: "JUICY COUTURE PETALS PLEASE EDP 100ML", categoria: "mujer", precio: 64.50 },
        { nombre: "LANCOME LA VIE EST BELLE L'ELIXIR EDP (REFILLABLE) 100ML DAMA", categoria: "mujer", precio: 102.99 },
        { nombre: "ARMANI SI EDP 150ML DAMA", categoria: "mujer", precio: 98.75 },
        { nombre: "CAROLINA HERRERA 212 VIP ROSE ELIXIR EDP 80ML DAMA", categoria: "mujer", precio: 84.99 },
        { nombre: "TOMMY HILFIGER FOREVER EDT 100ML DAMA", categoria: "mujer", precio: 58.50 },
        { nombre: "CAROLINA HERRERA FEARLESS & FABULOUS EDP 100ML DAMA", categoria: "mujer", precio: 82.99 },
        { nombre: "GRES CABOTINE EDT 100ML DAMA", categoria: "mujer", precio: 54.75 },
        { nombre: "NINA RICCI FLEUR EDT 80ML DAMA", categoria: "mujer", precio: 72.99 },
        { nombre: "GIVENCHY L'INTERDIT ABSOLU EDP INTENSE 80ML DAMA", categoria: "mujer", precio: 92.50 },
        { nombre: "VICTORINOX MORNING DEW EDT 100ML DAMA", categoria: "mujer", precio: 46.99 },
        { nombre: "SHAKIRA ROJO EDP 80ML DAMA", categoria: "mujer", precio: 44.75 },
        { nombre: "ADIDAS SPARK UP EDP 100ML DAMA", categoria: "mujer", precio: 34.99 },
        { nombre: "AB HER SECRET ABSOLU EDP 80ML DAMA", categoria: "mujer", precio: 48.50 },
        { nombre: "CAROLINA HERRERA ALEGRIA DE VIVIR EDP 100ML DAMA", categoria: "mujer", precio: 78.99 },
        { nombre: "CAROLINA HERRERA GOOD GIRL MIDNIGHT EDP 80ML DAMA", categoria: "mujer", precio: 94.75 },
        { nombre: "BRITNEY SPEARS FANTASY BLISSFUL EDT 100ML DAMA", categoria: "mujer", precio: 49.99 },
        { nombre: "JEANNE ARTHES BOUM SAVON EDP 100ML DAMA", categoria: "mujer", precio: 52.50 },
        { nombre: "LIZ CLAIBIORNE CURVE CONNECT EDT 100ML DAMA", categoria: "mujer", precio: 41.99 },
        { nombre: "LOLITA LEMPICKA EDP 100ML DAMA", categoria: "mujer", precio: 68.75 },
        { nombre: "PACO RABANNE MILLION GOLD RECARGABLE EDP 90ML DAMA", categoria: "mujer", precio: 86.99 },
        { nombre: "DKNY EDP 100ML WOMAN", categoria: "mujer", precio: 62.50 },
        { nombre: "MARC JACOBS DAISY DREAM EDT 100ML", categoria: "mujer", precio: 78.99 },
        { nombre: "PRADA LA FEMME INTENSE EDP 100ML DAMA", categoria: "mujer", precio: 92.75 },
        { nombre: "JOVAN MUSK EDP 96ML DAMA", categoria: "mujer", precio: 42.99 },
        { nombre: "SALVATORE FERRAGAMO INCANTO CHARMS EDT 100ML DAMA", categoria: "mujer", precio: 66.50 },
        { nombre: "COACH DREAMS MOONLIGHT EDP 90ML DAMA", categoria: "mujer", precio: 72.99 },
        { nombre: "MARC JACOBS DAISY EVER SO FRESH EDT", categoria: "mujer", precio: 82.75 },
        
        // UNISEX
        { nombre: "LATTAFA KHAMRAH QAHWA EDP 100ML UNISEX", categoria: "unisex", precio: 58.99 },
        { nombre: "LATTAFA BADEE AL OUD HONOR GLORY EDP 100ML", categoria: "unisex", precio: 62.50 },
        { nombre: "AL HARAMAIN AMBER OUD GOLD EDIT 120ML", categoria: "unisex", precio: 78.99 },
        { nombre: "ARMAF CLUB DE NUIT SILLAGE 105ML MEN", categoria: "unisex", precio: 56.75 },
        { nombre: "ARMAF CLUB DE NUIT MILESTONE EDP 105ML UNISEX", categoria: "unisex", precio: 58.99 },
        { nombre: "MACARENA BOULEVARD ROUGE EXTRAIT EDP 100ML", categoria: "unisex", precio: 52.50 },
        { nombre: "LATTAFA QAED AL FURSAN UNLIMITED EDP 100ML", categoria: "unisex", precio: 54.99 },
        { nombre: "AFNAN 9PM REBEL EDP 100ML CABALLERO", categoria: "unisex", precio: 56.75 },
        { nombre: "EMPER STALLION 53 EDP 100ML UNISEX", categoria: "unisex", precio: 58.99 },
        { nombre: "AL HARAMAIN AMBER OUD AQUA DUBAI EXTRAIT DE PARFUM 100ML UNISEX", categoria: "unisex", precio: 82.50 },
        { nombre: "AL HARAMAIN AMBER OUD DUBAI NIGHT EXTRAIT DE PARFUM 100ML UNISEX", categoria: "unisex", precio: 84.99 },
        { nombre: "LATTAFA AJWAD EDP 60ML", categoria: "unisex", precio: 46.75 },
        { nombre: "CALVIN KLEIN CK ONE EDT 200ML UNISEX", categoria: "unisex", precio: 62.99 },
        { nombre: "LATTAFA EMEER EDP 100ML", categoria: "unisex", precio: 52.50 },
        { nombre: "MANCERA CEDRAT BOISE EDP 120ML", categoria: "unisex", precio: 88.99 },
        { nombre: "CALVIN KLEIN CK EVERYONE EDT 100ML CABALLERO", categoria: "unisex", precio: 56.75 },
        { nombre: "AL HARAMAIN AMBER OUD GOLD EDP 200ML", categoria: "unisex", precio: 94.99 },
        { nombre: "LATTAFA SHAHEEN SILVER EDP 100ML", categoria: "unisex", precio: 58.50 },
        { nombre: "MANCERA CEDRAT BOISE INTENSE EDP 120ML", categoria: "unisex", precio: 92.99 },
        { nombre: "CALVIN KLEIN CK BE EDT 200ML UNISEX", categoria: "unisex", precio: 64.75 },
        { nombre: "ORIENTICA AMBER ROUGE EDP 80ML", categoria: "unisex", precio: 68.99 },
        { nombre: "ARMAF CLUB DE NUIT OUD PARFUM EDT 105ML UNISEX", categoria: "unisex", precio: 62.50 },
        { nombre: "LATTAFA FAKHAR GOLD EDP EXTRAIT 100ML CABALLERO", categoria: "unisex", precio: 66.99 },
        { nombre: "MANCERA INSTANT CRUSH EDP 120ML", categoria: "unisex", precio: 86.75 },
        { nombre: "ORIENTICA ROYAL BLUE EDP 60ML", categoria: "unisex", precio: 72.99 },
        { nombre: "LATTAFA PRIDE ART OF UNIVERSE EDP 100ML UNISEX", categoria: "unisex", precio: 78.50 },
        { nombre: "LATTAFA HAYAATI GOLD ELIXIR EDP 100ML", categoria: "unisex", precio: 68.99 },
        { nombre: "ARMAF ODYSSEY LIMONI FRESH EDP 100ML UNISEX", categoria: "unisex", precio: 62.75 },
        { nombre: "ORIENTICA ROYAL AMBER EDP 80ML", categoria: "unisex", precio: 74.99 },
        { nombre: "ARMAF ODYSSEY ARTISTO THE RED EDITION EDP 100ML UNISEX", categoria: "unisex", precio: 66.50 },
        { nombre: "MAISON ALHAMBRA BAROQUE ROUGE EXTRAIT EDP 100ML", categoria: "unisex", precio: 58.99 },
        { nombre: "XERJOFF NAXOS EDP 100ML UNISEX", categoria: "unisex", precio: 128.75 },
        { nombre: "BHARARA VIKING KASHMIR PARFUM 100ML CABALLERO", categoria: "unisex", precio: 84.99 },
        { nombre: "MANCERA CEDRAT RED TOBACCO EDP 120ML", categoria: "unisex", precio: 92.50 },
        { nombre: "MANCERA AMBER FEVER EDP 120ML", categoria: "unisex", precio: 88.99 },
        { nombre: "ORIENTICA OUD SAFFRON EDP 80ML", categoria: "unisex", precio: 76.75 },
        { nombre: "CALVIN KLEIN CK ONE EDT 100ML UNISEX", categoria: "unisex", precio: 52.99 },
        { nombre: "BHARARA NICHE PARFUM 100ML UNISEX", categoria: "unisex", precio: 82.50 },
        { nombre: "ARMAF ODYSSEY DUBAI CHOCOLAT EDP 100ML UNISEX", categoria: "unisex", precio: 64.99 },
        { nombre: "JO MILANO GAME SPADES FULL HOUSE EDP 100ML", categoria: "unisex", precio: 58.75 },
        { nombre: "MONTALE MUKHALLAT EDP 100ML", categoria: "unisex", precio: 72.99 },
        { nombre: "ORIENTICA AZZURE FANTASY EDP 80ML UNISEX", categoria: "unisex", precio: 68.50 },
        { nombre: "MAISON ALHAMBRA JEAN LOWE NOIR EDP 100ML UNISEX", categoria: "unisex", precio: 62.99 },
        { nombre: "TOM FORD BLACK ORCHID PARFUM 100ML UNISEX", categoria: "unisex", precio: 138.75 },
        { nombre: "LATTAFA PRIDE ARABIA I EDP 100ML UNISEX", categoria: "unisex", precio: 72.99 },
        { nombre: "Maison Francis Kurkdjian Baccarat Rouge 540 Extrait de Parfum 200ml", categoria: "unisex", precio: 248.99 },
        { nombre: "ORIENTICA VELVET GOLD EDP 80ML", categoria: "unisex", precio: 76.50 },
        { nombre: "XERJOFF ERBA PURA EDP 100ML UNISEX", categoria: "unisex", precio: 132.99 },
        { nombre: "MONTALE ARABIANS TONKA EDP 100ML UNISEX", categoria: "unisex", precio: 84.75 },
        { nombre: "LATTAFA PRIDE ISHQ AL SHUYUKH SILVER EDP 100ML", categoria: "unisex", precio: 78.99 },
        { nombre: "AL HARAMAIN AMBER OUD RUBY EDIT EDP 120ML", categoria: "unisex", precio: 88.50 },
        { nombre: "LATTAFA KHAMRAH DUKHAN EDP 100ML", categoria: "unisex", precio: 62.99 },
        { nombre: "CALVIN KLEIN CK BE EDT 100ML UNISEX", categoria: "unisex", precio: 54.75 },
        { nombre: "ARMAF ODYSSEY BA HA MAS TROPICAL COLLECTION EDP 100ML UNISEX", categoria: "unisex", precio: 66.99 },
        { nombre: "MONTALE BLUE AMBER EDP 100ML", categoria: "unisex", precio: 82.50 },
        { nombre: "LATTAFA ANA ABIYEDH ROUGE EDP 60ML", categoria: "unisex", precio: 48.99 },
        { nombre: "LATTAFA QAED FURSAN UNTAMED EDP 90ML UNISEX", categoria: "unisex", precio: 56.75 },
        { nombre: "LATTAFA EMAAN EDP 100ML UNISEX", categoria: "unisex", precio: 58.99 },
        { nombre: "AL HARAMAIN AMBER OUD RUBY EDP 200ML UNISEX", categoria: "unisex", precio: 96.50 },
        { nombre: "PARFUMS DE MARLY LAYTON EDP 125ML UNISEX", categoria: "unisex", precio: 128.99 },
        { nombre: "LATTAFA MASHRABYA EDP 100ML UNISEX", categoria: "unisex", precio: 64.75 },
        { nombre: "EMPER ARUBA GOLD EDP 100ML UNISEX", categoria: "unisex", precio: 68.99 },
        { nombre: "AFNAN 9PM ELIXIR PARFUM INTENSE 100ML UNISEX", categoria: "unisex", precio: 72.50 },
        { nombre: "ORIENTICA LUXURY COLLECTION EXCLUSIVE ROYAL AMBER EXTRAIT DE PARFUM 80ML UNISEX", categoria: "unisex", precio: 84.99 },
        { nombre: "LATTAFA SAKEENA EDP 100ML UNISEX", categoria: "unisex", precio: 62.75 },
        { nombre: "AL HARAMAIN AMBER OUD GOLD 999.9 DUBAI EDP 75ML UNISEX", categoria: "unisex", precio: 88.99 },
        { nombre: "ORIENTICA LUXURY COLLECTION EXCLUSIVE DANIA EXTRAIT DE PARFUM 80ML UNISEX", categoria: "unisex", precio: 82.50 },
        { nombre: "JO MILANO GAME SPADES BID EDP 100ML", categoria: "unisex", precio: 56.99 },
        { nombre: "LATTAFA PRIDE AFFECTION EDP 100ML UNISEX", categoria: "unisex", precio: 68.75 },
        { nombre: "ARMAF ODYSSEY MARSHMALLOW EDP 100ML UNISEX", categoria: "unisex", precio: 62.99 },
        { nombre: "ANFAR 1950 PISTACHIO KUNAFA DUBAI CHOCOLATE EXTRAIT DE PARFUM 80ML UNISEX", categoria: "unisex", precio: 74.50 },
        { nombre: "LATTAFA PRIDE ARABIA III EDP 100ML UNISEX", categoria: "unisex", precio: 72.99 },
        { nombre: "LATTAFA RAVE NOW WHITE EDP 100ML UNISEX", categoria: "unisex", precio: 58.75 },
        { nombre: "ARMANI EMPORIO STRONGER WITH YOU AMBAR EDP 100ML UNISEX", categoria: "unisex", precio: 86.99 },
        { nombre: "LATTAFA ANA ABIYEDH LEATHER EDP 60 ML UNISEX", categoria: "unisex", precio: 52.50 },
        { nombre: "MANCERA ROSES VANILLE EDP 120ML", categoria: "unisex", precio: 92.99 },
        { nombre: "AL HARAMAIN AMBER OUD WHITE EDITION EDP 100ML UNISEX", categoria: "unisex", precio: 78.75 },
        { nombre: "LATTAFA MASA EDP 100ML UNISEX", categoria: "unisex", precio: 64.99 },
        { nombre: "ORIENTICA NAYAAT XLNC COLLECTION INFINITY EDP 200ML UNISEX", categoria: "unisex", precio: 94.50 },
        { nombre: "ADIDAS VIBES GET COMFY EDP 100ML UNISEX", categoria: "unisex", precio: 36.99 },
        { nombre: "ORIENTICA NAYAAT COLLECTION NAUGHTY BREW EDP 100ML UNISEX", categoria: "unisex", precio: 72.75 },
        { nombre: "LATTAFA GIVE ME GOURMAND MALLOW MADNESS EDP 75ML", categoria: "unisex", precio: 56.99 },
        { nombre: "LATTAFA ANGHAM EDP 100ML UNISEX", categoria: "unisex", precio: 68.50 },
        { nombre: "AL HARAMAIN DUBAI MIRACLE EDP 100ML UNISEX", categoria: "unisex", precio: 74.99 },
        { nombre: "LATTAFA RAED LUXE (GOLD) EDP 100ML UNISEX", categoria: "unisex", precio: 76.75 },
        { nombre: "JO MILANO GAME SPADES ROYAL EDP 100ML", categoria: "unisex", precio: 62.99 },
        { nombre: "CALVIN KLEIN CK ONE GOLD EDT 200ML UNISEX", categoria: "unisex", precio: 68.50 },
        { nombre: "ARMAF ODYSSEY BLACK FOREST DESERT EDITION EDP 100ML UNISEX", categoria: "unisex", precio: 72.99 },
        { nombre: "ORIENTICA NAYAAT EAU D'ELAN COLLECTION QAHWA EDP 100ML UNISEX", categoria: "unisex", precio: 78.75 },
        { nombre: "ARMAF ODYSSEY GO MANGO TROPICAL COLLECTION EDP 100ML UNISEX", categoria: "unisex", precio: 64.99 },
        { nombre: "ARMAF ODYSSEY SPECTRA EDP 200ML UNISEX", categoria: "unisex", precio: 82.50 },
        { nombre: "ARMAF ODYSSEY EAU DE MONTAGNE EDP 100ML UNISEX", categoria: "unisex", precio: 68.99 },
        { nombre: "LATTAFA PRIDE NEBRAS ELIXIR EDP 100ML UNISEX", categoria: "unisex", precio: 74.75 },
        { nombre: "BOND no. 9 WALL STREET EDP 100ML UNISEX", categoria: "unisex", precio: 142.99 },
        { nombre: "ASSALA PRIME ROYAL JASMINE EDP 100ML UNISEX", categoria: "unisex", precio: 88.50 },
        { nombre: "LATTAFA BAYAAN EDP 100ML UNISEX", categoria: "unisex", precio: 72.99 },
        { nombre: "ORIENTICA DESERT DUSK EDP 80ML UNISEX", categoria: "unisex", precio: 76.75 },
        { nombre: "CREED CENTAURUS EDP 100ML UNISEX", categoria: "unisex", precio: 188.99 },
        { nombre: "LATTAFA GIVE ME GOURMAND CHOCO OVERDOSE EDP 75ML", categoria: "unisex", precio: 58.50 },
        { nombre: "LATTAFA LAIL MALEKI MOROCCAN BLUE EDP 100ML UNISEX", categoria: "unisex", precio: 74.99 },
        { nombre: "ORIENTICA NAYAAT COLLECTION SULTRY VANILLA EDP 100ML UNISEX", categoria: "unisex", precio: 82.75 },
        { nombre: "LATTAFA EKHTIARI EDP 100ML UNISEX", categoria: "unisex", precio: 68.99 },
        { nombre: "ORIENTICA NAYAAT COLLECTION SOHO AURA EDP 100ML UNISEX", categoria: "unisex", precio: 78.50 },
        { nombre: "ARMAF ETER DESERT FLOWER EDP 100ML UNISEX", categoria: "unisex", precio: 72.99 },
        { nombre: "ORIENTICA NAYAAT COLLECTION RED SUGAR KISS EDP 100ML UNISEX", categoria: "unisex", precio: 76.75 },
        { nombre: "ORIENTICA ROYAL COLLECTION NOBLE EDP 80ML UNISEX", categoria: "unisex", precio: 84.99 },
        { nombre: "LATTAFA MUSK SUGAR PLUM EDP 100ML UNISEX", categoria: "unisex", precio: 62.50 },
        { nombre: "LATTAFA BLUE OUD EDP 100ML UNISEX", categoria: "unisex", precio: 68.99 },
        { nombre: "LATTAFA PRIDE LEEN EDP 100ML UNISEX", categoria: "unisex", precio: 74.75 },
        { nombre: "BOND No 9 FIDI EDP 100ML UNISEX", categoria: "unisex", precio: 136.99 },
        { nombre: "LATTAFA PRIDE ART OF NATURE I EDP 100ML UNISEX", categoria: "unisex", precio: 78.50 },
        { nombre: "LATTAFA MOHRA EDP 100ML UNISEX", categoria: "unisex", precio: 72.99 },
        { nombre: "PARFUMS DE MARLY LAYTON EXCLUSIF PARFUM 125ML", categoria: "unisex", precio: 138.75 },
        { nombre: "BOND No. 9 LAFAYETTE STREET EDP 100ML UNISEX", categoria: "unisex", precio: 144.99 },
        { nombre: "ORIENTICA NAYAAT XLNC COLLECTION TITAN EDP 200ML UNISEX", categoria: "unisex", precio: 98.50 },
        { nombre: "AL HARAMAIN DUBAI PALM EDP 100ML UNISEX", categoria: "unisex", precio: 76.99 },
        { nombre: "ASSALA PRIME ROYAL FAME EDP 100ML UNISEX", categoria: "unisex", precio: 92.75 },
        { nombre: "ORIENTICA COLLECTON EXCLUSIVE IMPERIAL JADE EXTRAIT DE PARFUM 80ML UNISEX", categoria: "unisex", precio: 88.99 },
        { nombre: "ORIENTICA NAYAAT EAU D'ELAN COLLECTION CAN´T GET EDP 100ML UNISEX", categoria: "unisex", precio: 82.50 },
        { nombre: "ORIENTICA NAYAAT EAU D'ELAN COLLECTION FORBIDDEN BOOM EDP 100ML UNISEX", categoria: "unisex", precio: 84.99 },
        { nombre: "LATTAFA GIVE ME GOURMAND BERRY ON TOP EDP 75ML", categoria: "unisex", precio: 56.75 },
        { nombre: "ORIENTICA ROYAL COLLECTION DINASTY EDP 80ML UNISEX", categoria: "unisex", precio: 86.99 },
        { nombre: "ORIENTICA COLLECTON EXCLUSIVE NARDO OUD EXTRAIT DE PARFUM 80ML UNISEX", categoria: "unisex", precio: 92.50 },
        { nombre: "PARFUMS DE MARLY PEGASUS EXCLUSIF EDP 125ML UNISEX", categoria: "unisex", precio: 134.99 },
        { nombre: "BHARARA ESSENCE EDP 100ML UNISEX", categoria: "unisex", precio: 78.75 },
        { nombre: "ASSALA PRIME ROYAL ROSE EDP 100ML UNISEX", categoria: "unisex", precio: 94.99 },
        { nombre: "LATTAFA VELVET OUD EDP 100ML UNISEX", categoria: "unisex", precio: 72.50 },
        { nombre: "ADIDAS VIBES FULL RECHARGE EDP 100ML", categoria: "unisex", precio: 38.99 },
        { nombre: "ARMAF ODYSSEY TOFFEE COFFEE CAFE EDITION EDP 100ML UNISEX", categoria: "unisex", precio: 68.75 },
        { nombre: "ORIENTICA NAYAAT XLNC COLLECTION GRANDEUR EDP 200ML UNISEX", categoria: "unisex", precio: 96.99 },
        { nombre: "ORIENTICA ROYAL COLLECTION VICTORY EDP 80ML UNISEX", categoria: "unisex", precio: 88.50 },
        { nombre: "LATTAFA GIVE ME GOURMAND VANILLA FREAK EDP 75ML", categoria: "unisex", precio: 58.99 },
        { nombre: "LATTAFA VINTAGE RADIO EDP 100ML UNISEX", categoria: "unisex", precio: 74.75 },
        { nombre: "LATTAFA SHEIKH SHUYUKH SUPREME EDP 100ML UNISEX", categoria: "unisex", precio: 82.99 },
        { nombre: "ORIENTICA NAYAAT EAU D'ELAN COLLECTION LIQUID DESIRE EDP 100ML UNISEX", categoria: "unisex", precio: 86.50 },
        { nombre: "ORIENTICA NAYAAT XLNC COLLECTION IMPERIUM EDP 200ML UNISEX", categoria: "unisex", precio: 94.99 },
        { nombre: "LATTAFA GIVE ME GOURMAND WHIPPED PLEASURE EDP 75ML", categoria: "unisex", precio: 62.75 },
        { nombre: "JO MILANO GAME SPADES QUEEN EDP 100ML", categoria: "unisex", precio: 66.99 },
        { nombre: "LATTAFA NAJDIA EDP 100 ML + DEO 50 ML (2PZAS) UNISEX", categoria: "unisex", precio: 72.50 },
        
        // DECANTS
        { nombre: "LATTAFA DECANT 2 5ml - 10ml Dama y Caballero", categoria: "decants", precio: 8.99 },
        { nombre: "ARMAF DECANT 5ml - 10ml Dama y Caballero", categoria: "decants", precio: 9.50 },
        { nombre: "PERRY ELLIS DECANT 2 5ml - 10ml Dama y Caballero", categoria: "decants", precio: 7.99 },
        { nombre: "LATTAFA DECANT 1 Dama y Caballero", categoria: "decants", precio: 8.25 },
        { nombre: "CACHAREL DECANT 5ml - 10ml Dama y Caballero", categoria: "decants", precio: 9.75 },
        { nombre: "AFNAN DECANT Dama y Caballero", categoria: "decants", precio: 8.50 },
        { nombre: "XOXO DECANT 2 5ml - 10ml Dama y Caballero", categoria: "decants", precio: 7.99 },
        
        // BODY SPRAY
        { nombre: "BODY SPRAY PERRY ELLIS 360 CLASICA 236ML DAMA", categoria: "body-spray", precio: 15.99 },
        { nombre: "BODY SPRAY LATTAFA FAKHAR 200ML CABALLERO", categoria: "body-spray", precio: 18.50 },
        { nombre: "BODY SPRAY LATTAFA MAYAR 200ML DAMA", categoria: "body-spray", precio: 17.99 },
        { nombre: "BODY SPRAY DKNY FRESH BLOSSOM 250ML DAMA", categoria: "body-spray", precio: 22.75 },
        { nombre: "BODY SPRAY LATTAFA HAYAATI 200ML", categoria: "body-spray", precio: 16.99 },
        { nombre: "BODY SPRAY LATTAFA BADE'E AL OUD AMETHYST 200ML UNISEX", categoria: "body-spray", precio: 19.50 },
        { nombre: "BODY SPRAY PERRY ELLIS 360 PURPLE 236ML DAMA", categoria: "body-spray", precio: 16.75 },
        { nombre: "BODY SPRAY LATTAFA ANA ABIYEDH 200ML", categoria: "body-spray", precio: 15.99 },
        { nombre: "BODY SPRAY DKNY GOODEN DELICIOUS 250ML DAMA", categoria: "body-spray", precio: 23.50 },
        { nombre: "BODY SPRAY PERRY ELLIS 360 RED 236ML DAMA", categoria: "body-spray", precio: 17.99 },
        { nombre: "BODY SPRAY LATTAFA BADE'E AL OUD FOR GLORY 200ML UNISEX", categoria: "body-spray", precio: 20.75 },
        
        // ESTUCHES CABALLERO
        { nombre: "SET PERRY ELLIS 360 RED EDT 100ML 4 PIEZAS", categoria: "estuches", precio: 89.99 },
        { nombre: "SET MOSCHINO TOY BOY EDP 100ML 4PZAS", categoria: "estuches", precio: 95.50 },
        { nombre: "SET SALVATORE FERRAGAMO UOMO SIGNATURE EDP 100ML 3 PIEZAS CABALLERO", categoria: "estuches", precio: 120.00 },
        { nombre: "SET JEAN PAUL GAULTIER SCANDAL EDT 100ML 3 PZAS", categoria: "estuches", precio: 110.75 },
        { nombre: "SET AFNAN 9 P.M EDP 3 PIEZAS CABALLERO", categoria: "estuches", precio: 85.99 },
        { nombre: "SET PACO RABANNE ONE MILLION EDT 100ML 3 PZAS CABALLERO", categoria: "estuches", precio: 125.50 },
        { nombre: "SET MONTBLANC EXPLORER EDP 100ML 3 PZAS", categoria: "estuches", precio: 115.75 },
        { nombre: "SET PACO RABANNE PHANTOM EDT 100ML 2 PZAS CABALLERO", categoria: "estuches", precio: 88.99 },
        { nombre: "SET ARMAF CLUB DE NUIT INTENSE EDT 105ML 4PZAS CABALLERO", categoria: "estuches", precio: 92.50 },
        { nombre: "SET PERRY ELLIS AQUA EDT 100ML 4 PZAS CABALLERO", categoria: "estuches", precio: 84.99 },
        { nombre: "SET LATTAFA KHAMRAH EDP 100ML 3 PZAS UNISEX", categoria: "estuches", precio: 98.75 },
        { nombre: "SET JEAN PAUL GAULTIER LE MALE ELIXIR 2 PIEZAS EDP 125ML CABALLERO", categoria: "estuches", precio: 112.99 },
        { nombre: "SET MONTBLANC LEGEND RED EDT 100ML 3 PZAS CABALLERO", categoria: "estuches", precio: 102.50 },
        { nombre: "SET PACO RABANNE PHANTOM INTENSE EDP 100ML 3PZAS CABALLERO", categoria: "estuches", precio: 118.99 },
        { nombre: "SET PARIS HILTON EDT 100ML 4PZAS CABALLERO", categoria: "estuches", precio: 74.75 },
        { nombre: "SET MONTBLANC EXPLORER ULTRABLUE EDP 100ML 3PZAS", categoria: "estuches", precio: 124.99 },
        { nombre: "SET HUGO BOSS BOTTLED EDP 100ML 3 PZAS CABALLERO", categoria: "estuches", precio: 108.50 },
        { nombre: "SET CAROLINA HERRERA 212 VIP BLACK ELIXIR 100ML 2 PZAS CABALLERO", categoria: "estuches", precio: 132.99 },
        { nombre: "SET PACO RABANNE INVICTUS EDP EXTREME 100ML 3PZAS CABALLERO", categoria: "estuches", precio: 122.75 },
        { nombre: "SET LATTAFA MAAHIR LEGACY EDP 100ML 3 PZAS CABALLERO", categoria: "estuches", precio: 94.99 },
        
        // ESTUCHES DAMA
        { nombre: "SET LATTAFA YARA (CLASICA Y CANDY) EDP 100ML 2 PIEZAS DAMA", categoria: "estuches", precio: 65.99 },
        { nombre: "SET PACO RABANNE LADY MILLION EDP 80ML 3 PIEZAS", categoria: "estuches", precio: 135.50 },
        { nombre: "SET SALVATORE FERRAGAMO SIGNIORINA RIBELLE EDP 3 PIEZAS DAMA", categoria: "estuches", precio: 125.75 },
        { nombre: "SET MOSCHINO TOY 2 BUBBLE GUMP EDP 3 PIEZAS", categoria: "estuches", precio: 95.99 },
        { nombre: "SET WOMENS SECRET GOLD SEDUCTION 2PZAS", categoria: "estuches", precio: 55.50 },
        { nombre: "SET GUESS SEDUCTIVE BLUE EDT 75ML 3PZAS DAMA", categoria: "estuches", precio: 85.75 },
        { nombre: "SET ARIANA GRANDE CLOUD EDP 100ML 3 PZAS DAMA", categoria: "estuches", precio: 105.99 },
        { nombre: "SET TOUS TOUCH EDT 100ML 3 PZAS DAMA", categoria: "estuches", precio: 92.50 },
        { nombre: "SET PACO RABANNE LADY MILLION FABULOUS EDP 80ML 2 PIEZAS", categoria: "estuches", precio: 118.99 },
        { nombre: "SET MOSCHINO TOY 2 EDP 100ML 3 PZAS DAMA", categoria: "estuches", precio: 108.75 },
        { nombre: "SET PERRY ELLIS 18 EDP 100ML 4 PZAS DAMA", categoria: "estuches", precio: 82.99 },
        { nombre: "SET DAVIDOFF COOL WATER EDT 100ML 3PZAS DAMA", categoria: "estuches", precio: 94.50 },
        { nombre: "SET PERRY ELLIS 360 RED EDP 100ML 4 PZAS DAMA", categoria: "estuches", precio: 88.99 },
        { nombre: "SET EMPER HAYA EDP 100ML 2 PZAS DAMA", categoria: "estuches", precio: 72.75 },
        { nombre: "SET PERRY ELLIS 360 CORAL EDP 100ML 4 PZAS DAMA", categoria: "estuches", precio: 86.99 },
        { nombre: "SET PACO RABANNE LADY MILLION EDP 80ML 3 PZAS DAMA", categoria: "estuches", precio: 128.50 },
        { nombre: "SET CAROLINA HERRERA GOOD GILR EDP 80ML 2 PZAS DAMA", categoria: "estuches", precio: 134.99 },
        { nombre: "SET KENZO FLOWER EDP 100ML 3 PZAS DAMA", categoria: "estuches", precio: 118.75 },
        { nombre: "SET LATTAFA HONOR Y GLORIA EDP 100ML 3 PZAS UNISEX", categoria: "estuches", precio: 102.99 },
        { nombre: "SET AFNAN 9PM PURPLE EDP 100ML 4 PIEZAS DAMA", categoria: "estuches", precio: 92.50 }
    ];

    // Asignar IDs y generar descripciones e imágenes
    todosProductos = listaProductos.map((producto, index) => {
        return {
            id: index + 1,
            nombre: producto.nombre,
            categoria: producto.categoria,
            precio: producto.precio,
            descripcion: generarDescripcion(producto.nombre, producto.categoria),
            imagen: generarImagen(producto.categoria)
        };
    });

    // Inicializar productos
    inicializarProductos();
}

// Generar descripción automática basada en el nombre y categoría
function generarDescripcion(nombre, categoria) {
    const categorias = {
        'caballeros': '',
        'mujer': '',
        'unisex': '',
        'decants': '',
        'body-spray': '',
        'estuches': ''
    };
    
    const descBase = categorias[categoria] || 'Perfume de alta calidad';
    
    if (nombre.toLowerCase().includes('edt')) {
        return descBase + ' en presentación Eau de Toilette';
    } else if (nombre.toLowerCase().includes('edp')) {
        return descBase + ' en presentación Eau de Parfum';
    } else if (nombre.toLowerCase().includes('parfum')) {
        return descBase + ' en concentración Parfum';
    }
    
    return descBase;
}

// Generar imagen basada en la categoría
function generarImagen(categoria) {
    const colores = {
        'caballeros': 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'mujer': 'https://images.unsplash.com/photo-1590736969954-6fb5a2e90e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'unisex': 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'decants': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'body-spray': 'https://images.unsplash.com/photo-1590736969954-6fb5a2e90e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'estuches': 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    };
    
    return colores[categoria] || 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
}

// Inicializar productos en las secciones
function inicializarProductos() {
    // Mostrar todos los productos en la sección principal
    mostrarProductos(todosProductos, '.products-grid');
    
    // Mostrar productos por categoría en sus respectivas secciones
    mostrarProductosPorCategoria('caballeros', '#caballeros-products');
    mostrarProductosPorCategoria('mujer', '#mujer-products');
    mostrarProductosPorCategoria('unisex', '#unisex-products');
    mostrarProductosPorCategoria('decants', '#decants-products');
    mostrarProductosPorCategoria('body-spray', '#body-spray-products');
    mostrarProductosPorCategoria('estuches', '#estuches-products');
    
    // Actualizar contador del carrito
    actualizarContadorCarrito();
}

// Mostrar productos en un contenedor
function mostrarProductos(productosArray, selectorContenedor) {
    const contenedor = document.querySelector(selectorContenedor);
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    productosArray.forEach(producto => {
        const productoHTML = `
            <div class="product-card" data-id="${producto.id}" data-category="${producto.categoria}">
                <div class="product-info">
                    <span class="product-category">${obtenerNombreCategoria(producto.categoria)}</span>
                    <h3>${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    <div class="product-price">$${producto.precio.toFixed(2)}</div>
                    <div class="product-actions">
                        <button class="add-to-cart" data-id="${producto.id}">
                            <i class="fas fa-cart-plus"></i> Agregar
                        </button>
                        <button class="whatsapp-buy" data-id="${producto.id}">
                            <i class="fab fa-whatsapp"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        contenedor.innerHTML += productoHTML;
    });
}

// Mostrar productos por categoría
function mostrarProductosPorCategoria(categoria, selectorContenedor) {
    const productosCategoria = todosProductos.filter(p => p.categoria === categoria);
    mostrarProductos(productosCategoria, selectorContenedor);
}

// Obtener nombre de categoría para mostrar
function obtenerNombreCategoria(categoria) {
    const categorias = {
        'caballeros': 'Caballeros',
        'mujer': 'Mujer',
        'unisex': 'Unisex',
        'decants': 'Decants',
        'body-spray': 'Body Spray',
        'estuches': 'Estuches'
    };
    
    return categorias[categoria] || categoria;
}

// Inicializar event listeners
function inicializarEventListeners() {
    // Botón del carrito
    document.getElementById('cart-btn').addEventListener('click', toggleCarrito);
    document.getElementById('close-cart').addEventListener('click', toggleCarrito);
    
    // Botón de búsqueda
    document.getElementById('search-btn').addEventListener('click', buscarProductos);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') buscarProductos();
    });
    
    // Filtros de categoría
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const categoria = this.getAttribute('data-category');
            filtrarProductos(categoria);
        });
    });
    
    // WhatsApp order button
    document.getElementById('whatsapp-order').addEventListener('click', enviarPedidoWhatsApp);
    
    // WhatsApp contact button
    document.getElementById('whatsapp-contact').addEventListener('click', () => {
        enviarMensajeWhatsApp("Hola, me gustaría obtener más información sobre sus productos.");
    });
    
    // Clear cart button
    document.getElementById('clear-cart').addEventListener('click', vaciarCarrito);
    
    // Accept cookies button
    document.getElementById('accept-cookies').addEventListener('click', aceptarCookies);
    
    // Enlaces de políticas
    document.querySelectorAll('.privacy-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarModal('Política de Privacidad', `
                <h4>Política de Privacidad de Agape Parfum Collection</h4>
                <p>En Agape Parfum Collection respetamos y protegemos tu privacidad.</p>
                
                <h5>Información que recopilamos</h5>
                <p>Solo recopilamos información que nos proporcionas directamente cuando realizas una consulta o pedido a través de WhatsApp.</p>
                
                <h5>Contacto</h5>
                <p>Si tienes preguntas sobre esta política, contáctanos por WhatsApp al +58 412-7050149.</p>
            `);
        });
    });
    
    document.querySelectorAll('.terms-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarModal('Términos de Servicio', `
                <h4>Términos de Servicio de Agape Parfum Collection</h4>
                <p>Al utilizar nuestros servicios, aceptas los siguientes términos:</p>
                
                <h5>Pedidos y Pagos</h5>
                <p>Los pedidos se realizan exclusivamente a través de WhatsApp.</p>
                
                <h5>Contacto</h5>
                <p>Para cualquier consulta, contáctanos por WhatsApp al +58 412-7050149.</p>
            `);
        });
    });
    
    document.querySelectorAll('.cookies-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarModal('Política de Cookies', `
                <h4>Política de Cookies de Agape Parfum Collection</h4>
                <p>Utilizamos cookies únicamente para el funcionamiento básico del sitio web.</p>
            `);
        });
    });
    
    // Cerrar modal
    document.querySelector('.close-modal').addEventListener('click', cerrarModal);
    document.querySelector('.overlay').addEventListener('click', cerrarModal);
    
    // Delegación de eventos para botones dinámicos
    document.addEventListener('click', function(e) {
        // Botón agregar al carrito
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
            const id = parseInt(button.getAttribute('data-id'));
            agregarAlCarrito(id);
        }
        
        // Botón comprar por WhatsApp
        if (e.target.classList.contains('whatsapp-buy') || e.target.closest('.whatsapp-buy')) {
            const button = e.target.classList.contains('whatsapp-buy') ? e.target : e.target.closest('.whatsapp-buy');
            const id = parseInt(button.getAttribute('data-id'));
            comprarPorWhatsApp(id);
        }
        
        // Eliminar item del carrito
        if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
            const button = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
            const id = parseInt(button.getAttribute('data-id'));
            eliminarDelCarrito(id);
        }
        
        // Aumentar cantidad en carrito
        if (e.target.classList.contains('increase-quantity') || e.target.closest('.increase-quantity')) {
            const button = e.target.classList.contains('increase-quantity') ? e.target : e.target.closest('.increase-quantity');
            const id = parseInt(button.getAttribute('data-id'));
            cambiarCantidadCarrito(id, 1);
        }
        
        // Disminuir cantidad en carrito
        if (e.target.classList.contains('decrease-quantity') || e.target.closest('.decrease-quantity')) {
            const button = e.target.classList.contains('decrease-quantity') ? e.target : e.target.closest('.decrease-quantity');
            const id = parseInt(button.getAttribute('data-id'));
            cambiarCantidadCarrito(id, -1);
        }
    });
    
    // Cargar carrito guardado
    cargarCarritoGuardado();
}

// Funciones del carrito
function agregarAlCarrito(id) {
    const producto = todosProductos.find(p => p.id === id);
    if (!producto) return;
    
    const itemExistente = carrito.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }
    
    actualizarCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

function cambiarCantidadCarrito(id, cambio) {
    const item = carrito.find(item => item.id === id);
    if (!item) return;
    
    item.cantidad += cambio;
    
    if (item.cantidad < 1) {
        eliminarDelCarrito(id);
    } else {
        actualizarCarrito();
    }
}

function vaciarCarrito() {
    if (carrito.length === 0) return;
    
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        carrito = [];
        actualizarCarrito();
        mostrarNotificacion('Carrito vaciado');
    }
}

function actualizarCarrito() {
    // Actualizar contador
    actualizarContadorCarrito();
    
    // Actualizar items en el sidebar
    const contenedorItems = document.querySelector('.cart-items');
    const totalItems = document.getElementById('cart-items-total');
    
    if (carrito.length === 0) {
        contenedorItems.innerHTML = '<p class="empty-cart" style="text-align: center; color: #8D6E63; padding: 20px;">Tu carrito está vacío</p>';
        totalItems.textContent = '0';
        return;
    }
    
    let html = '';
    let totalProductos = 0;
    
    carrito.forEach(item => {
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.nombre}</h4>
                    <p>$${item.precio.toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="decrease-quantity" data-id="${item.id}">-</button>
                    <span class="cart-item-quantity">${item.cantidad}</span>
                    <button class="increase-quantity" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
        
        totalProductos += item.cantidad;
    });
    
    contenedorItems.innerHTML = html;
    totalItems.textContent = totalProductos;
    
    // Guardar carrito en localStorage
    localStorage.setItem('agape_carrito', JSON.stringify(carrito));
}

function actualizarContadorCarrito() {
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.getElementById('cart-count').textContent = total;
}

function toggleCarrito() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.querySelector('.overlay');
    
    carritoAbierto = !carritoAbierto;
    
    if (carritoAbierto) {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
    } else {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
    }
}

// Funciones de búsqueda y filtrado
function buscarProductos() {
    const termino = document.getElementById('search-input').value.toLowerCase().trim();
    
    if (!termino) {
        mostrarProductos(todosProductos, '.products-grid');
        return;
    }
    
    const resultados = todosProductos.filter(producto => 
        producto.nombre.toLowerCase().includes(termino) ||
        producto.descripcion.toLowerCase().includes(termino) ||
        producto.categoria.toLowerCase().includes(termino)
    );
    
    mostrarProductos(resultados, '.products-grid');
    
    // Mostrar mensaje si no hay resultados
    if (resultados.length === 0) {
        document.querySelector('.products-grid').innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <p style="color: #8D6E63; font-size: 1.2rem; margin-bottom: 20px;">No se encontraron productos para "${termino}"</p>
                <button class="btn" id="clear-search" style="background-color: #8D6E63;">Mostrar todos los productos</button>
            </div>
        `;
        
        document.getElementById('clear-search').addEventListener('click', () => {
            document.getElementById('search-input').value = '';
            mostrarProductos(todosProductos, '.products-grid');
        });
    }
}

function filtrarProductos(categoria) {
    if (categoria === 'all') {
        mostrarProductos(todosProductos, '.products-grid');
        return;
    }
    
    const productosFiltrados = todosProductos.filter(p => p.categoria === categoria);
    mostrarProductos(productosFiltrados, '.products-grid');
}

// Funciones de WhatsApp
function comprarPorWhatsApp(id) {
    const producto = todosProductos.find(p => p.id === id);
    if (!producto) return;
    
    const mensaje = `Hola, estoy interesado en comprar: *${producto.nombre}*%0A%0A*Detalles:*%0A- Categoría: ${obtenerNombreCategoria(producto.categoria)}%0A- Precio: $${producto.precio.toFixed(2)}%0A- Descripción: ${producto.descripcion}%0A%0A¿Podrían darme más información?`;
    
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
}

function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de enviar un pedido.');
        return;
    }
    
    let mensaje = `*PEDIDO AGAPE PARFUM COLLECTION*%0A%0A`;
    mensaje += `*Detalles del pedido:*%0A`;
    
    let total = 0;
    
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        
        mensaje += `%0A*${index + 1}. ${item.nombre}*%0A`;
        mensaje += `  Cantidad: ${item.cantidad}%0A`;
        mensaje += `  Precio unitario: $${item.precio.toFixed(2)}%0A`;
        mensaje += `  Subtotal: $${subtotal.toFixed(2)}%0A`;
    });
    
    mensaje += `%0A*TOTAL DEL PEDIDO: $${total.toFixed(2)}*%0A%0A`;
    mensaje += `Por favor, confirmen disponibilidad y formas de pago. Gracias.`;
    
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
    
    // Vaciar carrito después de enviar
    carrito = [];
    actualizarCarrito();
    toggleCarrito();
}

function enviarMensajeWhatsApp(texto) {
    const mensaje = encodeURIComponent(texto);
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
}

// Funciones de cookies
function mostrarBannerCookies() {
    const cookiesAceptadas = localStorage.getItem('agape_cookies');
    
    if (!cookiesAceptadas) {
        setTimeout(() => {
            document.getElementById('cookies-banner').style.display = 'block';
        }, 3000);
    }
}

function aceptarCookies() {
    localStorage.setItem('agape_cookies', 'true');
    document.getElementById('cookies-banner').style.display = 'none';
}

// Funciones del modal
function mostrarModal(titulo, contenido) {
    document.getElementById('modal-title').textContent = titulo;
    document.getElementById('modal-body').innerHTML = contenido;
    document.getElementById('policy-modal').classList.add('active');
    document.querySelector('.overlay').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('policy-modal').classList.remove('active');
    document.querySelector('.overlay').style.display = 'none';
}

// Función de notificación
function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = 'notification';
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #8D6E63;
        color: #FFF8E1;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
        border: 1px solid #D7CCC8;
        font-weight: 500;
    `;
    
    // Estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notificacion);
    
    // Remover notificación después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Cargar carrito desde localStorage al iniciar
function cargarCarritoGuardado() {
    const carritoGuardado = localStorage.getItem('agape_carrito');
    if (carritoGuardado) {
        // Convertir IDs a productos actuales
        const ids = JSON.parse(carritoGuardado);
        carrito = ids.map(item => {
            const producto = todosProductos.find(p => p.id === item.id);
            return producto ? { ...producto, cantidad: item.cantidad } : null;
        }).filter(item => item !== null);
        
        actualizarCarrito();
    }
}
