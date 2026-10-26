export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  category: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  type: 'journal' | 'blog';
}

export const journalArticles: Article[] = [
  {
    id: 'journal-01',
    title: 'Cómo elegir un perfume árabe: familias olfativas, notas y consejos para encontrar tu fragancia',
    slug: 'como-elegir-perfume-arabe',
    excerpt: 'Una guía completa para entender las familias olfativas de la perfumería árabe y encontrar la fragancia que mejor exprese tu personalidad.',
    author: 'VI-ELIXIR',
    date: '2026-10-15',
    readTime: '8 min',
    image: '/images/editorial/journal-guia-eleccion.webp',
    imageAlt: 'Pirámide olfativa con materias primas nobles y frasco de cristal sobre losa de travertino',
    category: 'Guías',
    tags: ['guía', 'familias olfativas', 'perfumería árabe'],
    metaTitle: 'Cómo elegir un perfume árabe | Guía completa de familias olfativas — VI-ELIXIR',
    metaDescription: 'Descubrí cómo elegir un perfume árabe según tu personalidad. Guía sobre familias olfativas, notas de salida, corazón y fondo, y consejos para encontrar tu fragancia ideal.',
    type: 'journal',
    content: `
## ¿Qué hace especial a la perfumería árabe?

La perfumería árabe tiene una tradición que se remonta a siglos de historia. A diferencia de muchas fragancias occidentales que priorizan la ligereza y la frescura, la tradición olfativa del mundo árabe tiende a explorar ingredientes más profundos, concentrados y envolventes. Materias primas como el oud (madera de agar), el almizcle, el ámbar, el azafrán y la rosa de Taif son pilares de esta tradición.

Sin embargo, la perfumería árabe contemporánea no se limita a repetir fórmulas clásicas. Muchas marcas actuales reinterpretan estos ingredientes con un enfoque moderno, combinando la riqueza de las materias primas orientales con estructuras más ligeras o frescas. El resultado son fragancias que pueden adaptarse a distintos contextos, estilos y preferencias.

En VI-ELIXIR, exploramos este equilibrio entre tradición y contemporaneidad, buscando fragancias que inviten a descubrir nuevas facetas de la perfumería oriental.

## Las familias olfativas: una brújula para tu elección

Las familias olfativas son categorías que agrupan fragancias según sus ingredientes predominantes y su carácter general. Conocerlas es el primer paso para orientar tu búsqueda sin necesidad de probar decenas de opciones al azar.

### Amaderadas

Las fragancias amaderadas se construyen alrededor de maderas como el sándalo, el cedro, el vetiver y, en la perfumería árabe, el oud. Suelen transmitir calidez, profundidad y una sensación envolvente.

Si te atraen los ambientes cálidos, las texturas naturales y los aromas que evocan paisajes boscosos o chimeneas encendidas, las fragancias amaderadas pueden ser un buen punto de partida. Dentro del [catálogo de VI-ELIXIR](/perfumes), **NOCTURNE** y **OUD BLANC** exploran distintas facetas de esta familia.

### Ámbar y especiadas

El ámbar (a menudo una combinación de resinas, bálsamos y vainilla) y las especias como la canela, el cardamomo y el azafrán crean fragancias cálidas, envolventes y a menudo sensuales. Son aromas que tienden a proyectarse con presencia y que suelen asociarse a las estaciones más frías.

En esta familia, **AMBRE** ofrece una interpretación que combina ámbar, especias doradas y un fondo de vainilla y tonka.

### Florales orientales

Las fragancias florales orientales toman notas clásicas como la rosa, el jazmín o la peonía y las combinan con ingredientes más profundos como el oud, el pachulí o el almizcle. El resultado suele ser una fragancia más compleja y duradera que un floral tradicional.

**VELVET ROSE** es un ejemplo de esta categoría dentro de nuestra colección: rosa de Taif envuelta en capas de oud y especias suaves.

### Almizcladas

El almizcle es uno de los ingredientes más versátiles de la perfumería. En su versión moderna (almizcle blanco sintético, ya que el almizcle natural de origen animal prácticamente no se utiliza en perfumería contemporánea), aporta suavidad, limpieza y una sensación reconfortante.

Las fragancias almizcladas suelen ser las más accesibles y versátiles, ideales para quienes buscan un aroma sutil que acompañe sin imponerse. **MUSK VEIL** representa esta familia con una composición suave y envolvente.

### Especiadas orientales

Las fragancias donde las especias son protagonistas absolutas, como el azafrán y la pimienta, combinadas con cuero y resinas orientales, crean composiciones magnéticas e intensas que suelen destacar por su proyección y su carácter distintivo. **SAFFRON** explora esta categoría.

## Entender las notas: salida, corazón y fondo

Cada fragancia está construida como una pirámide con tres niveles de notas que se perciben en distintos momentos:

### Notas de salida

Son las primeras impresiones, los aromas que percibís inmediatamente después de aplicar el perfume. Suelen ser frescos, ligeros y volátiles: cítricos, especias frescas, hierbas aromáticas. Duran entre 15 y 30 minutos aproximadamente.

### Notas de corazón

Aparecen cuando las notas de salida se desvanecen y constituyen el carácter principal de la fragancia. Suelen incluir flores, especias cálidas, maderas ligeras. Pueden percibirse durante varias horas.

### Notas de fondo

Son la base de la fragancia, los aromas más profundos y duraderos. Maderas, resinas, almizcle, ámbar, vainilla. Pueden permanecer en la piel durante muchas horas y son las que determinan la estela final del perfume.

Al elegir un perfume, es útil prestar atención no solo a la primera impresión sino también a cómo evoluciona sobre tu piel con el paso del tiempo.

## Consejos para encontrar tu fragancia

### 1. Explorá sin presión

No intentes decidir en los primeros minutos. Si tenés la posibilidad de probar una fragancia, dejala evolucionar al menos una o dos horas antes de formarte una opinión definitiva.

### 2. Probá sobre la piel

El aroma de un perfume cambia significativamente entre el papel secante y la piel. La química de cada persona interactúa de manera distinta con los ingredientes, por lo que la misma fragancia puede oler diferente en dos personas.

### 3. No pruebes demasiadas a la vez

Nuestro olfato se satura rápidamente. Si estás comparando fragancias, limitá a tres o cuatro por sesión para poder apreciar las diferencias.

### 4. Considerá el contexto

No existe una regla universal, pero las fragancias más intensas y cálidas suelen funcionar mejor en climas fríos o de noche, mientras que las más frescas y ligeras pueden resultar más cómodas en climas cálidos o durante el día. Dicho esto, la elección es personal.

### 5. Dejá que la fragancia te elija

Más allá de las clasificaciones y las notas, la conexión con un perfume es algo intuitivo. Si un aroma te genera una emoción, una imagen o una sensación particular, probablemente sea una buena señal.

## Empezá tu exploración

La perfumería árabe ofrece un universo de posibilidades que va mucho más allá de los aromas convencionales. Si estás buscando una fragancia que exprese algo más personal, te invitamos a [explorar el catálogo de VI-ELIXIR](/perfumes) y descubrir qué familia olfativa conecta con tu estilo.

Si necesitás orientación, también podés usar nuestro [selector de fragancias](/perfumes#descubrimiento) para explorar opciones según tus preferencias.
    `,
  },
  {
    id: 'journal-02',
    title: 'El secreto del Oud: historia, extracción y el «oro líquido» de Oriente',
    slug: 'el-secreto-del-oud',
    excerpt: 'Descubrí el origen milenario de la madera de agar, el proceso natural de resinación que la convierte en el ingrediente más cotizado del mundo y cómo evoluciona en la perfumería contemporánea.',
    author: 'VI-ELIXIR',
    date: '2026-10-18',
    readTime: '7 min',
    image: '/images/editorial/journal-secreto-oud.webp',
    imageAlt: 'Madera de agar Aquilaria pura y vial con gota de aceite esencial de Oud sobre piedra',
    category: 'Materias Primas',
    tags: ['oud', 'materias primas', 'historia', 'perfumería árabe'],
    metaTitle: 'El secreto del Oud: historia y extracción del oro líquido | VI-ELIXIR',
    metaDescription: 'Conocé la historia del oud o madera de agar, su proceso de destilación y cómo VI-ELIXIR lo reinterpreta en fragancias contemporáneas como NOCTURNE y OUD BLANC.',
    type: 'journal',
    content: `
## ¿Qué es exactamente el Oud?

Pocos ingredientes en la historia de la perfumería universal despiertan tanta fascinación, misterio y reverencia como el **oud** (también conocido como madera de agar, *aloeswood* o *gaharu*). Considerado el «oro líquido» de Oriente, su valor por kilogramo en los mercados internacionales supera a menudo al de los metales preciosos más codiciados.

Sin embargo, a diferencia de otras materias primas botánicas como la rosa, el jazmín o la lavanda, el oud no nace de una floración ni de una hoja aromática. Es el resultado de un prodigioso fenómeno defensivo de la naturaleza: una alquimia botánica entre la herida de un árbol y el paso paciente del tiempo.

## El milagro botánico del árbol de Aquilaria

El oud se origina en el corazón de ciertas especies arbóreas del género *Aquilaria*, árboles perennes nativos de las densas selvas tropicales del Sudeste Asiático e India. En su estado natural y sano, la madera de Aquilaria es pálida, ligera, inodora y carente de valor aromático.

La transformación comienza cuando el árbol sufre una agresión exterior: la perforación de un insecto, una hendidura provocada por el viento monzónico o la colonización de un hongo silvestre (*Phialophora parasitica*). En respuesta a esta infección, el árbol activa un mecanismo inmunitario asombroso: secreta una resina oscura, densa y sumamente aromática para saturar las fibras leñosas y aislar la herida.

A lo largo de décadas, esta resina penetra la madera, volviéndola pesada, compacta y de una coloración pardo-negruzca. De un árbol herido que lucha por sanar nace una de las sustancias más complejas y ricas que el olfato humano puede experimentar.

## De la resina al destilado: paciencia y maestría

La extracción del aceite esencial puro de oud (*Dahn Al Oud*) es un arte que no admite atajos industriales. El proceso tradicional comprende varias etapas fundamentales:

1. **Selección minuciosa:** Los recolectores experimentados identifican y limpian a mano los fragmentos leñosos saturados de resina, separando la madera blanca inerte de las vetas oscuras cargadas de esencia.
2. **Molienda y maceración:** La madera resinosa se pulveriza y se deja macerar en agua de manantial durante semanas. Esta fermentación controlada despierta facetas balsámicas, terrosas y ligeramente dulces que definen el carácter del extracto.
3. **Hidrodestilación en alambiques de cobre:** Mediante una cocción lenta a fuego moderado que puede extenderse por varios días, el vapor arrastra las moléculas aromáticas pesadas. El aceite resultante sobrenada en la superficie del hidrolato y es recolectado gota a gota.
4. **Maduración:** Al igual que un vino de guarda, el oud recién destilado necesita reposar durante meses —o incluso años— en recipientes protegidos de la luz para que sus aristas más punzantes se redondeen y alcancen una plenitud sedosa.

## El perfil sensorial: un universo en una sola nota

Definir el aroma del oud es un desafío para cualquier perfumista. No es una nota lineal; es un caleidoscopio olfativo que evoluciona constantemente en contacto con el calor de la piel.

En un oud de alta calidad conviven matices amaderados profundos, humo de incienso, toques balsámicos y coriáceos, y una calidez animal que aporta una fijación inigualable. Mientras que los acordes sintéticos occidentales a menudo reducen el oud a una nota amaderada plana, el verdadero extracto oriental respira con vitalidad propia, ofreciendo una experiencia inmersiva y conmovedora.

## Las dos almas del Oud en la colección VI-ELIXIR

En VI-ELIXIR concebimos la perfumería árabe como un diálogo vivo entre el legado clásico y la vanguardia contemporánea. Por eso, en lugar de tratar al oud como un recurso estático, exploramos sus facetas opuestas a través de dos creaciones de nuestro [catálogo de fragancias](/perfumes):

### 1. La profundidad nocturna: NOCTURNE

En [NOCTURNE](/perfumes/nocturne), el oud se presenta en su máxima expresión de misterio y sofisticación. Combinado con bergamota en la salida, rosa damascena y azafrán en el corazón, y un fondo imponente de cuero y madera de agar camboyana, esta fragancia encarna la solemnidad de las noches orientales: densa, magnética y con una permanencia memorable.

### 2. La pureza contemporánea: OUD BLANC

En contraposición, [OUD BLANC](/perfumes/oud-blanc) desafía la gravedad del ingrediente al situarlo en un marco de luz y transparencia. Acá, el oud se despoja de sus facetas más ahumadas y se viste de neroli mediterráneo, pomelo fresco, cedro blanco y almizcle algodonoso. Es la demostración de que una madera milenaria puede convertirse en un aroma diáfano, sutil y perfecto para el uso diario.

## Cómo experimentar el Oud en tu piel

Si es tu primera aproximación al oud, tené en cuenta estos principios:

- **Paciencia:** Nunca juzgues una fragancia con oud en los primeros 30 segundos. Las notas de salida frescas o especiadas deben disiparse para que la madera revele su verdadera riqueza.
- **Microdosis:** Debido a su extraordinaria concentración molecular, una pequeña pulverización en los puntos de pulso es suficiente para acompañarte durante más de doce horas.
- **Evolución personal:** El oud interactúa de manera muy singular con el pH y la temperatura de cada persona. En algunas pieles acentúa matices dulces y ambarinos; en otras, revela maderas secas y acordes minerales.

El oud no es simplemente un aroma: es un viaje histórico a través de las rutas caravaneras de Oriente y un homenaje a la belleza que nace de la transformación natural. Te invitamos a descubrir cómo habita en tu piel a través de [nuestras fragancias de autor](/perfumes).
    `,
  },
  {
    id: 'journal-03',
    title: 'El arte del Layering: cómo superponer fragancias para crear tu aroma firma',
    slug: 'el-arte-del-layering',
    excerpt: 'Una guía técnica e intuitiva para dominar la milenaria costumbre árabe de combinar dos o más perfumes en la piel, logrando una estela personal e irrepetible.',
    author: 'VI-ELIXIR',
    date: '2026-10-22',
    readTime: '6 min',
    image: '/images/editorial/journal-arte-layering.webp',
    imageAlt: 'Dos frascos en cristal ahumado y ámbar con sombras de color superpuestas que ilustran el layering',
    category: 'Técnicas',
    tags: ['layering', 'técnicas', 'guía', 'acordes', 'perfumería árabe'],
    metaTitle: 'El arte del Layering: superposición de perfumes | Guía VI-ELIXIR',
    metaDescription: 'Aprendé a hacer layering con perfumes árabes. Reglas de peso molecular, combinaciones recomendadas y cómo personalizar tu fragancia con acordes de VI-ELIXIR.',
    type: 'journal',
    content: `
## La tradición de vestir capas de aroma

En el mundo occidental solemos concebir el perfume como una obra terminada e intocable: una fórmula embotellada que se aplica de manera aislada. Sin embargo, en la cultura de Oriente Medio, el acto de perfumarse nunca ha sido un gesto único, sino un ritual ceremonial conocido como *layering* (superposición por capas).

Durante siglos, antes de salir a un encuentro social o a una celebración, hombres y mujeres en los países del Golfo preparaban su piel con aceites esenciales puros (*attars*), perfumaban sus ropas con el humo de astillas de madera de agar sobre brasas (*bakhoor*), y culminaban con destilados florales sobre el cabello y las muñecas. El resultado no era el perfume de una marca comercial, sino un aura irrepetible que pertenecía exclusivamente a esa persona.

En la actualidad, el layering se ha convertido en el secreto mejor guardado de los entusiastas de la perfumería nicho. Superponer fragancias no significa enmascarar o saturar: es una forma de expresión personal para modular la intensidad, prolongar la fijación y crear un **aroma firma** que nadie más en el mundo pueda copiar.

## La regla de oro: la física de las moléculas aromáticas

Para combinar dos fragancias con éxito no hace falta ser químico profesional, pero sí comprender una regla física elemental: **el peso de las moléculas**.

Las fragancias están compuestas por ingredientes con diferentes densidades y tasas de evaporación:

- **Notas pesadas (Bases):** Maderas densas, resinas, oud, cuero, ámbar, vainilla y almizcle. Sus moléculas son voluminosas y se fijan con tenacidad a los lípidos de la piel.
- **Notas ligeras (Cúpulas):** Cítricos (bergamota, limón, pomelo), hierbas aromáticas, notas ozónicas y aldehídos. Se evaporan con rapidez aportando frescura inicial.

Si aplicás una fragancia ligera y volátil y luego rociás encima un perfume amaderado y pesado, este último sofocará por completo a la primera. Por lo tanto, el principio rector del layering es invariable: **primero la fragancia más densa, profunda o amaderada; luego la fragancia más ligera, fresca o floral.**

## Paso a paso: cómo construir tu superposición

Para lograr una armonía impecable en tu piel, seguí este método en cuatro pasos:

### 1. Prepará la piel
Una piel bien hidratada retiene las partículas de perfume hasta tres veces más tiempo que una piel seca. Aplicá una crema o loción corporal neutra sin perfume después de la ducha antes de comenzar el ritual.

### 2. Establecé la base profunda
Seleccioná tu fragancia con mayor presencia de notas de fondo (maderas, resinas o ámbar) y aplicala en los puntos clave de pulso: cuello y muñecas. Dejala asentarse durante uno o dos minutos para que los acordes interactúen con el calor corporal.

### 3. Incorporá la capa superior
Rociá la segunda fragancia —más ligera, floral o especiada— justo encima o en zonas complementarias (por ejemplo, la base de las clavículas, los antebrazos o el cabello).

### 4. No frotes la piel
Frotar las muñecas entre sí es el error más extendido en perfumería: la fricción genera calor excesivo que rompe las moléculas más delicadas de salida y acelera artificialmente la evaporación. Dejá que las capas se fundan por evaporación natural.

## Tres combinaciones exclusivas con la colección VI-ELIXIR

Cada una de las fragancias de nuestro [catálogo](/perfumes) fue concebida con una arquitectura de notas noble y equilibrada, lo que las hace extraordinariamente aptas para dialogar entre sí. Acá te proponemos tres recetas de autor probadas por nuestro equipo:

### Combinación 1: «Sombra & Rosa Imperial»
- **Base:** [NOCTURNE](/perfumes/nocturne) (Oud, cuero, incienso).
- **Capa superior:** [VELVET ROSE](/perfumes/velvet-rose) (Rosa de Taif, frambuesa, peonía).
- **El resultado:** El clásico maridaje oriental entre la rosa y la madera de agar. La oscuridad profunda del oud en NOCTURNE sostiene la dulzura aterciopelada de la rosa, otorgándole un aire misterioso, regio y sofisticado. Ideal para eventos nocturnos de gran distinción.

### Combinación 2: «Calidez & Seda Blanca»
- **Base:** [AMBRE](/perfumes/ambre) (Ámbar dorado, canela, benjuí).
- **Capa superior:** [MUSK VEIL](/perfumes/musk-veil) (Almizcle blanco, lirio, flor de algodón).
- **El resultado:** El ámbar puede resultar sumamente envolvente y licoroso; al coronarlo con la pureza etérea de MUSK VEIL, la composición se transforma en un velo suave y cremoso que recuerda a una bufanda de cachemira en una tarde fría. Perfecto para días otoñales y momentos de intimidad.

### Combinación 3: «Luz Solar & Fuego Especiado»
- **Base:** [OUD BLANC](/perfumes/oud-blanc) (Oud blanco, neroli, cedro).
- **Capa superior:** [SAFFRON](/perfumes/saffron) (Azafrán, cuero, cardamomo).
- **El resultado:** Una explosión de contrastes contemporáneos. La frescura solar del neroli y el pomelo de OUD BLANC aporta un halo vibrante que ilumina el corazón especiado y magnético del azafrán, logrando una estela moderna, elegante y sumamente energizante.

## Explorá tu propia firma olfativa

El objetivo del layering no es seguir mandatos rígidos, sino reconectar con el placer del descubrimiento. Te sugerimos experimentar con distintas proporciones (dos pulverizaciones de la base por una de la fragancia superior, o aplicar una en el pecho y otra en la nuca) hasta encontrar la proporción exacta que dialogue con tu personalidad.

En un mundo saturado de fragancias estandarizadas, crear tu propia mezcla es el gesto de distinción definitivo. Te invitamos a [explorar nuestras fragancias](/perfumes) y comenzar a escribir tu propia historia sensorial.
    `,
  },
];

export const blogArticles: Article[] = [
  {
    id: 'blog-01',
    title: 'NOCTURNE y SAFFRON: dos interpretaciones de la intensidad en la perfumería oriental',
    slug: 'nocturne-saffron-intensidad-oriental',
    excerpt: 'Exploramos las diferencias entre dos fragancias intensas de nuestra colección: la profundidad amaderada de NOCTURNE y el magnetismo especiado de SAFFRON.',
    author: 'VI-ELIXIR',
    date: '2026-10-10',
    readTime: '5 min',
    image: '/images/blog/nocturne-saffron.webp',
    imageAlt: 'Frascos de vidrio ahumado y ámbar con hilos de azafrán sobre travertino y madera oscura',
    category: 'Exploración',
    tags: ['nocturne', 'saffron', 'intensidad', 'comparación'],
    metaTitle: 'NOCTURNE vs SAFFRON: dos caminos hacia la intensidad — VI-ELIXIR',
    metaDescription: 'Comparamos NOCTURNE y SAFFRON de VI-ELIXIR: dos fragancias intensas con enfoques diferentes. Descubrí cuál conecta mejor con tu estilo.',
    type: 'blog',
    content: `
## Dos caminos hacia la intensidad

Cuando hablamos de fragancias intensas, solemos imaginar un único tipo de experiencia: algo potente, envolvente y quizás abrumador. Sin embargo, la intensidad en la perfumería puede manifestarse de formas muy diferentes.

En la colección de VI-ELIXIR, **NOCTURNE** y **SAFFRON** representan dos interpretaciones distintas de esa misma idea.

## NOCTURNE: la profundidad de las maderas oscuras

[NOCTURNE](/perfumes/nocturne) se construye alrededor de la madera. Su apertura con bergamota, pimienta negra y cardamomo da paso rápidamente a un corazón donde el oud se encuentra con la rosa damascena y el iris. Es una fragancia que evoluciona lentamente, revelando capas de sándalo, ámbar y vetiver en sus notas de fondo.

La intensidad de NOCTURNE es una intensidad que crece desde adentro: no se impone desde el primer momento sino que se desarrolla gradualmente, como una conversación que va ganando profundidad.

Su carácter amaderado oriental la convierte en una opción natural para las noches de otoño e invierno, para eventos donde uno busca dejar una impresión duradera sin necesidad de levantar la voz.

## SAFFRON: el magnetismo de las especias

[SAFFRON](/perfumes/saffron), por su parte, abre con un golpe directo de azafrán, pimienta negra y bergamota. Acá la intensidad es inmediata y frontal: el azafrán aporta una calidez dorada y ligeramente medicinal que se mezcla con el cuero y la canela en el corazón.

Es una fragancia que llama la atención desde el primer instante. Su base de oud, ámbar, sándalo y almizcle le da la estructura necesaria para sostener esa presencia inicial durante horas.

SAFFRON es para momentos donde querés que tu fragancia sea parte activa de tu presencia, no solo un complemento silencioso.

## ¿Cuál elegir?

No se trata de decidir cuál es mejor, sino de entender qué tipo de intensidad buscás:

- Si preferís una presencia que se construya gradualmente y que revele distintas facetas con el tiempo, **NOCTURNE** puede ser tu opción.
- Si buscás un impacto inmediato, una fragancia que se haga notar desde el primer momento, **SAFFRON** puede conectar mejor con tu estilo.

Ambas son fragancias que demandan atención. La diferencia está en cómo lo hacen.

Podés explorar ambas en detalle en nuestro [catálogo](/perfumes).
    `,
  },
  {
    id: 'blog-02',
    title: 'OUD BLANC: cuando el oud se encuentra con la frescura',
    slug: 'oud-blanc-frescura-contemporanea',
    excerpt: 'El oud no siempre tiene que ser oscuro e intenso. Descubrí cómo OUD BLANC propone una lectura luminosa y fresca de este ingrediente emblemático.',
    author: 'VI-ELIXIR',
    date: '2026-10-05',
    readTime: '4 min',
    image: '/images/blog/oud-blanc.webp',
    imageAlt: 'Frasco de cristal transparente con esencia dorada sobre losa de piedra clara bajo luz natural',
    category: 'Ingredientes',
    tags: ['oud blanc', 'oud', 'frescura', 'ingredientes'],
    metaTitle: 'OUD BLANC: el oud puede ser fresco — VI-ELIXIR',
    metaDescription: 'Descubrí OUD BLANC de VI-ELIXIR, una interpretación fresca y contemporánea del oud. Ideal para quienes buscan un perfume amaderado sin la pesadez típica.',
    type: 'blog',
    content: `
## El oud: más allá del estereotipo

Cuando la mayoría de las personas escucha "oud" en el contexto de la perfumería, suele imaginar algo denso, oscuro y abrumadoramente cálido. Y tiene sentido: la madera de agar (el nombre real del ingrediente) se ha utilizado tradicionalmente en composiciones profundas y ceremoniales en la perfumería del Medio Oriente y del sudeste asiático.

Sin embargo, el oud es un ingrediente mucho más versátil de lo que ese estereotipo sugiere. Dependiendo de su origen, su procesamiento y los ingredientes con los que se combine, el oud puede aportar facetas ahumadas, dulces, medicinales, cremosas o incluso frescas.

## La propuesta de OUD BLANC

[OUD BLANC](/perfumes/oud-blanc) nace precisamente de esa idea: ¿qué pasa cuando tomamos uno de los ingredientes más densos de la perfumería y lo colocamos en un contexto luminoso?

La fragancia abre con pomelo, neroli y lavanda, tres ingredientes que inmediatamente establecen un tono fresco y limpio. Es una apertura que podría pertenecer a una fragancia mediterránea, ligera y solar.

Pero cuando las notas de corazón empiezan a desarrollarse, aparece el oud junto al cedro y la flor de naranjo. Acá es donde OUD BLANC encuentra su identidad: la madera de agar no domina la composición sino que la ancla, aportando profundidad y complejidad a una estructura que sigue siendo luminosa.

Las notas de fondo —almizcle blanco, ámbar gris y madera de cachemira— refuerzan esa sensación de calidez sutil sin romper la frescura general.

## ¿Para quién es OUD BLANC?

OUD BLANC fue pensado para contextos donde las fragancias más intensas de la colección podrían resultar excesivas: una mañana de trabajo, una tarde de primavera, una reunión informal.

Es una fragancia que permite acercarse al universo del oud sin comprometerse con su versión más radical. Si nunca probaste una fragancia con oud, OUD BLANC puede ser un punto de entrada interesante. Y si ya conocés el ingrediente, te va a mostrar una faceta diferente.

Su intensidad moderada la convierte en una de las fragancias más versátiles de la [colección de VI-ELIXIR](/perfumes), capaz de adaptarse a distintas estaciones y momentos del día.
    `,
  },
  {
    id: 'blog-03',
    title: 'VELVET ROSE y MUSK VEIL: contrastes de presencia y sutileza',
    slug: 'velvet-rose-musk-veil-contrastes',
    excerpt: 'Dos fragancias, dos formas de habitar un espacio. Exploramos el contraste entre la presencia floral de VELVET ROSE y la sutileza almizclada de MUSK VEIL.',
    author: 'VI-ELIXIR',
    date: '2026-09-28',
    readTime: '5 min',
    image: '/images/blog/velvet-rose-musk-veil.webp',
    imageAlt: 'Contraste entre frasco borgoña traslúcido con pétalos secos y frasco esmerilado blanco sobre piedra marfil',
    category: 'Exploración',
    tags: ['velvet rose', 'musk veil', 'contrastes', 'floral', 'almizcle'],
    metaTitle: 'VELVET ROSE vs MUSK VEIL: presencia y sutileza — VI-ELIXIR',
    metaDescription: 'Comparamos VELVET ROSE y MUSK VEIL de VI-ELIXIR: una fragancia floral intensa y una almizclada sutil. Dos formas muy distintas de expresarse.',
    type: 'blog',
    content: `
## Dos formas de expresarse

La perfumería ofrece un espectro enorme entre la presencia y la sutileza. Hay fragancias diseñadas para hacerse notar, para ser parte visible de tu identidad, y hay otras que funcionan como una segunda piel, casi imperceptibles para los demás pero constantemente presentes para quien las lleva.

En la colección de VI-ELIXIR, **VELVET ROSE** y **MUSK VEIL** representan estos dos extremos del espectro.

## VELVET ROSE: la presencia floral

[VELVET ROSE](/perfumes/velvet-rose) no es una fragancia tímida. Su apertura con rosa de Taif, frambuesa y pimienta rosa establece desde el primer momento un carácter decidido, con la luminosidad afrutada de la frambuesa complementando la riqueza de la rosa.

El corazón de jazmín, peonía y geranio amplifica la dimensión floral, pero es en las notas de fondo donde VELVET ROSE revela su verdadera naturaleza: el oud y el pachulí le dan una profundidad que la diferencia de cualquier floral convencional. La vainilla y el almizcle suavizan los bordes y le aportan una calidez que invita a acercarse.

Es una fragancia para momentos donde querés que tu aroma sea parte de tu presencia, una extensión de tu personalidad que los demás van a notar y recordar.

## MUSK VEIL: la sutileza como declaración

[MUSK VEIL](/perfumes/musk-veil) opera desde una lógica completamente diferente. Su apertura con pera, bergamota y aldehídos es limpia y transparente, casi etérea. No busca llamar la atención sino crear una atmósfera.

El corazón de almizcle blanco, lirio y flor de algodón es suave, reconfortante, con una textura que recuerda a la ropa recién lavada o a las sábanas limpias. No hay drama ni contrastes abruptos: todo fluye con naturalidad.

Las notas de fondo —cedro, ámbar blanco y cachemira— le dan estructura sin agregar peso. MUSK VEIL se queda cerca de la piel, creando una burbuja personal de aroma que solo se percibe en la cercanía.

Es una fragancia para quienes entienden que la sutileza puede ser una forma de distinción. No se trata de que los demás no la perciban, sino de que la descubran solo cuando se acercan.

## El contraste como herramienta

Estos contrastes no son casuales. La colección de VI-ELIXIR fue pensada para ofrecer un rango de experiencias olfativas, desde lo más intenso hasta lo más sutil, para que cada persona pueda encontrar la fragancia que mejor se adapte a su forma de expresarse.

No es necesario elegir un único punto en ese espectro. Muchas personas alternan entre fragancias diferentes según el momento, el estado de ánimo o la estación del año. Tener una opción intensa como VELVET ROSE y una sutil como MUSK VEIL permite esa versatilidad.

Podés explorar ambas y el resto de la colección en nuestro [catálogo completo](/perfumes).
    `,
  },
  {
    id: 'blog-04',
    title: 'El Armario Olfativo: Las 3 fragancias que todo coleccionista debe tener',
    slug: 'el-armario-olfativo-fragancias-esenciales',
    excerpt: 'Superá el concepto del perfume único para toda la vida. Te enseñamos a estructurar una cápsula olfativa versátil con tres fragancias clave para cada momento y estado de ánimo.',
    author: 'Club del Perfume · VI-ELIXIR',
    date: '2026-10-24',
    readTime: '6 min',
    image: '/images/blog/armario-olfativo.webp',
    imageAlt: 'Trilogía de frascos en cristal ahumado, ámbar y transparente alineados sobre pedestal de travertino',
    category: 'Club del Perfume',
    tags: ['armario olfativo', 'colección', 'consejos', 'club del perfume'],
    metaTitle: 'El Armario Olfativo: 3 fragancias esenciales de colección | VI-ELIXIR',
    metaDescription: 'Aprendé a armar tu guardarropa de fragancias con la regla de las 3 esencias: uso diario, noche de impacto y ceremonia íntima. Guía curada por VI-ELIXIR.',
    type: 'blog',
    content: `
## Más allá del «perfume para siempre»

Durante décadas, la cultura occidental nos inculcó la noción del «aroma insignia»: encontrar un único perfume en la juventud y mantenerse fiel a él durante toda la existencia como una marca registrada inmutable.

Sin embargo, en los círculos de perfumería contemporánea y en las tradiciones de Oriente Medio, esta idea resulta tan restrictiva como vestirse con el mismo traje los 365 días del año. ¿Acaso nos sentimos iguales en una mañana luminosa de primavera que en una cena nocturna de invierno? ¿Buscamos proyectar la misma energía en una reunión ejecutiva que en un encuentro íntimo?

Construir un **armario olfativo** (*fragrance wardrobe*) no significa acumular decenas de frascos en una repisa por mero coleccionismo. Se trata de seleccionar con inteligencia tres o cuatro piezas clave que dialoguen con nuestras facetas, climas y estados de ánimo.

Acá te compartimos la estructura en tres pilares que recomendamos desde el **Club del Perfume de VI-ELIXIR**:

---

## 1. El pilar diurno: la fragancia «segunda piel»

Es la fragancia de cabecera para el día a día: oficina, reuniones de trabajo, mañanas activas y climas templados o cálidos. Debe cumplir una condición fundamental: **acompañar con distinción sin saturar el espacio ajeno**.

En este rol buscamos notas limpias, acordes almizclados, maderas ligeras o toques cítricos y solares que aporten una sensación de pulcritud, bienestar y claridad mental.

- **Nuestra recomendación en el catálogo:**
  - [MUSK VEIL](/perfumes/musk-veil): Un velo etéreo de almizcle blanco, flor de algodón y pera que se funde con la piel como una camisa de lino recién planchada.
  - [OUD BLANC](/perfumes/oud-blanc): Para quienes desean el misterio noble del oud pero en una versión solar y transparente, coronada por neroli mediterráneo y pomelo.

---

## 2. El pilar de impacto: la fragancia de declaración

Toda persona necesita una creación imponente reservada para cuando se busca dejar una huella imborrable: eventos nocturnos, galas, negociaciones trascendentes o momentos donde la fragancia debe hablar antes que las palabras.

En este pilar reinan las resinas oscuras, las maderas densas, el cuero y las especias orientales. Son fórmulas con una estela generosa y una fijación que supera las 10 horas.

- **Nuestra recomendación en el catálogo:**
  - [NOCTURNE](/perfumes/nocturne): La quintaesencia de la noche oriental. Madera de agar camboyana, acordes de cuero añejo, incienso y rosa damascena. Solemne, regio e inolvidable.
  - [SAFFRON](/perfumes/saffron): Un golpe magnético de azafrán dorado («el oro rojo»), cuero y cardamomo que proyecta calidez, seguridad y un carisma electrizante.

---

## 3. El pilar íntimo: la fragancia de emoción y ceremonia

Es la fragancia que se viste para uno mismo o para compartir en la cercanía más absoluta. Se reserva para tardes frías de lectura, veladas distendidas, celebraciones personales o escapadas de fin de semana.

En este terreno triunfan los acordes licorosos, las resinas ambarinas, la vainilla bourbon y las flores opulentas. Son aromas que invitan a acercarse, transmiten confort afectivo y despiertan la memoria sensorial.

- **Nuestra recomendación en el catálogo:**
  - [AMBRE](/perfumes/ambre): Un cálido abrazo de ámbar balcánico, canela y haba tonka con fondo de benjuí. Envuelve como una manta de lana merino en una tarde lluviosa.
  - [VELVET ROSE](/perfumes/velvet-rose): La floración de la mítica rosa de Taif entrelazada con frambuesa madura y un corazón noble de oud aterciopelado. Sensual, profunda y cautivadora.

---

## Cómo rotar tu armario según la temperatura

Un error común entre los entusiastas es no considerar cómo la temperatura ambiente altera el comportamiento de las moléculas aromáticas:

1. **En días cálidos (> 24 °C):** El calor acelera la evaporación del alcohol y proyecta las notas de fondo de forma agresiva. Es el momento ideal para fragancias como OUD BLANC o MUSK VEIL.
2. **En días fríos (< 15 °C):** El aire frío contrae la proyección. Fragancias con densidad molecular como AMBRE, NOCTURNE o SAFFRON encuentran aquí su escenario perfecto para brillar sin abrumar.

Estructurar tu propia cápsula no requiere presupuestos desmedidos; requiere curiosidad y criterio. Te invitamos a [descubrir nuestro catálogo](/perfumes) o probar nuestro [Set de Regalo](/contacto) para comenzar a diseñar tu propio guardarropa de esencias.
    `,
  },
  {
    id: 'blog-05',
    title: 'El Ritual de la Cata a Ciegas: Cómo entrenar tu nariz y memoria sensorial en casa',
    slug: 'el-ritual-cata-a-ciegas-perfume',
    excerpt: 'Una guía paso a paso del Club para degustar fragancias orientales sin sesgos visuales ni etiquetas. Aprendé a identificar familias, texturas y evoluciones sobre papel secante.',
    author: 'Club del Perfume · VI-ELIXIR',
    date: '2026-10-25',
    readTime: '7 min',
    image: '/images/blog/cata-a-ciegas.webp',
    imageAlt: 'Mesa de cata olfativa con tiras secantes de papel, viales neutros y libreta de notas de lino',
    category: 'Cata Olfativa',
    tags: ['cata a ciegas', 'entrenamiento olfativo', 'club del perfume', 'notas'],
    metaTitle: 'El Ritual de la Cata a Ciegas: Cómo entrenar tu olfato | VI-ELIXIR',
    metaDescription: 'Descubrí cómo realizar una cata a ciegas de perfumes en tu hogar. Herramientas, tiempos de respiración y el método para evaluar notas sin prejuicios.',
    type: 'blog',
    content: `
## El poder de juzgar sin ver la etiqueta

¿Alguna vez te enamoraste de un perfume únicamente porque su frasco era exquisito o porque la campaña publicitaria apelaba a tu aspiración personal? En la industria de la perfumería masiva, el diseño del packaging y el marketing audiovisual representan hasta el 70% de la decisión de compra.

La **cata a ciegas** (*blind tasting*) es el ejercicio que practican los maestros perfumistas para despojarse de todos los prejuicios comerciales. Al eliminar la marca, el frasco y el precio de la ecuación, nos quedamos a solas con el líquido puro, forzando a nuestro sistema límbico a interpretar la verdadera calidad de las materias primas.

En esta entrega del **Club del Perfume**, te enseñamos a montar tu propio taller de degustación en casa en sencillos pasos.

---

## Lo que necesitás en tu mesa de cata

Para realizar una sesión de evaluación profesional no necesitás un laboratorio químico. Basta con reunir estos elementos en un espacio silencioso, ventilado y libre de olores de cocina o velas aromatizadas:

1. **Tiras secantes (*mouillettes*):** Si no contás con tiras de perfumería profesional, podés cortar tiras de 15 cm x 1 cm de papel de acuarela o cartulina sin blanqueadores ópticos (alrededor de 200 a 300 g/m²). El papel estándar de impresora no sirve porque contiene almidones y cloro que alteran la evaporación.
2. **Lápiz de grafito:** Para numerar las tiras en el extremo superior (evitá bolígrafos de tinta, cuyo solvente huele fuertemente a alcohol).
3. **Agua fresca a temperatura ambiente:** Fundamental para hidratar las mucosas nasales entre una muestra y otra.

---

## El gran mito de los granos de café

En muchas perfumerías comerciales se ofrece un recipiente con granos de café para «limpiar el olfato» entre fragancias. **Desde el Club te aconsejamos rechazarlo de inmediato**.

El café no es un neutralizador: es una molécula aromática sumamente compleja, pesada y cargada de pirazinas y aceites tostados. Al oler café, lo único que lográs es someter a tus receptores olfativos a una sobreestimulación adicional.

**El verdadero método de reseteo:**
El mejor neutralizador olfativo del mundo es **el aroma de tu propia piel limpia**. Doblá el codo y respirá profundamente sobre la piel limpia de tu propio antebrazo (libre de perfume o crema perfumada) dos o tres veces. Tu cerebro reconoce tu propio olor corporal como «nivel cero» y desactiva instantáneamente la saturación sensorial.

---

## La regla de los tres tiempos de respiración

Al catar una muestra, no acerques la tira a tu nariz de inmediato. Las moléculas aromáticas se desprenden en tres fases cronológicas rigurosas:

### Minuto 0 a 1: La salida y la disipación del alcohol
Aplicá una única pulverización a unos 10 cm de la punta de la tira. Agitá la tira suavemente durante 30 segundos en el aire para que el alcohol transportador se evapore. Si la olés antes, anestesiarás tus receptores con vapor etílico. La primera inspiración debe ser ligera y a unos 5 cm de distancia: notarás los cítricos, las especias frescas y las notas aldehídicas.

### Minuto 15 a 30: El corazón o la identidad real
Acá es donde el perfume revela su alma botánica o especiada. En creaciones como [VELVET ROSE](/perfumes/velvet-rose), los matices de frambuesa iniciales dan paso a la majestuosidad de la rosa de Taif y el jazmín. Anotá si la sensación es floral, dulce, amarga, empolvada o cremosa.

### Hora 2 a 4: El fondo y la nobleza de las resinas
Las moléculas pesadas quedan fijadas a las fibras de celulosa del papel. En fragancias orientales como [NOCTURNE](/perfumes/nocturne) o [AMBRE](/perfumes/ambre), aquí emergen el oud ahumado, las maderas de sándalo, el benjuí y el ámbar gris. Un fondo de alta calidad conserva nitidez y elegancia, sin tornarse rancio ni químico.

---

## La libreta de notas: traducir sensaciones a palabras

Para describir lo que sentís, recurrí a la **sinestesia** (vincular el olfato con el tacto, la vista o la temperatura):

- **Textura:** ¿Se siente aterciopelado (como la rosa), áspero como la lija (como el cuero o el vetiver) o suave como la seda (como el almizcle de [MUSK VEIL](/perfumes/musk-veil))?
- **Temperatura:** ¿Es una fragancia fría y mineral o cálida y licorosa?
- **Color y Luz:** ¿Evoca tonos marfil, ámbar dorado o negro azabache?

Entrenar el olfato es una práctica placentera que expande tu sensibilidad estética. Te invitamos a poner a prueba tu nariz con nuestro [catálogo de fragancias](/perfumes) y descubrir matices que jamás habías percibido.
    `,
  },
  {
    id: 'blog-06',
    title: '¿Por qué en vos dura horas y en otros desaparece? Mitos, química de la piel y fijación real',
    slug: 'mitos-quimica-fijacion-duracion-perfume',
    excerpt: 'Desmitificamos la fatiga olfativa, el pH y la evaporación molecular. Descubrí qué determina realmente la longevidad de un perfume árabe y cómo potenciar su estela.',
    author: 'Club del Perfume · VI-ELIXIR',
    date: '2026-10-26',
    readTime: '6 min',
    image: '/images/blog/fijacion-perfume.webp',
    imageAlt: 'Frasco de perfume con tapón plata satinada sobre piedra porosa y luz rasante sugerente',
    category: 'Ciencia Olfativa',
    tags: ['fijación', 'longevidad', 'química de la piel', 'mitos', 'club del perfume'],
    metaTitle: 'Mitos de la fijación y longevidad en perfumes | VI-ELIXIR',
    metaDescription: '¿Tu perfume no dura? Aprendé qué es la fatiga olfativa, cómo influye el manto lipídico de la piel y 4 técnicas profesionales para prolongar su duración.',
    type: 'blog',
    content: `
## La gran paradoja de la longevidad

«Me apliqué el perfume hace dos horas y ya no huelo a nada; este lote vino rebajado». Esta frase es, por amplio margen, la queja más recurrente en los mostradores de perfumería de todo el mundo.

Sin embargo, en más del 85% de los casos, cuando esa misma persona entra a una sala o saluda a un conocido, recibe de inmediato un cumplido por su aroma. ¿Por qué ocurre esto? ¿Es un problema de calidad del perfume, una incompatibilidad química de la piel o un truco biológico de nuestro propio cerebro?

Desde el **Club del Perfume de VI-ELIXIR** analizamos la ciencia detrás de la fijación y te revelamos cómo maximizar el rendimiento de las esencias orientales nobles.

---

## 1. El gran culpable: la fatiga olfativa (anosmia por adaptación)

El sentido del olfato humano evolucionó con un único propósito primario: **la supervivencia**. Su función biológica es alertar al organismo ante peligros inminentes (humo de incendio, alimentos descompuestos, gases venenosos o predadores).

Cuando tu cerebro detecta un estímulo olfativo constante y comprueba que no representa una amenaza para tu vida, procede a **desactivar los receptores** para no saturar el canal de procesamiento. Si no lo hiciera, serías incapaz de oler nada más a tu alrededor durante todo el día.

A este fenómeno se lo conoce médicamente como **anosmia por adaptación** o fatiga olfativa. Por eso vos dejás de percibir tu propio perfume a los 45 minutos, mientras que cualquier persona que se acerque a vos lo sentirá con total claridad. La prueba definitiva es simple: consultale a un tercero de confianza antes de volver a pulverizarte compulsivamente.

---

## 2. La química de la piel: lípidos vs. deshidratación

A menudo se culpa erróneamente al «pH de la piel» por la falta de fijación. En realidad, el pH de una piel humana sana oscila en un rango muy estrecho (entre 4.7 y 5.5) y rara vez altera de forma drástica la durabilidad de una fórmula.

El factor verdaderamente determinante es el **manto lipídico (la presencia de aceites naturales en la epidermis)**:

- **Pieles grasas o mixtas:** Cuentan con una película lipídica natural que retiene las moléculas hidrofóbicas del perfume. Las esencias se adhieren a los aceites de la piel y su evaporación se ralentiza, ofreciendo una longevidad excepcional.
- **Pieles secas o deshidratadas:** Carecen de lípidos suficientes. El alcohol de la fórmula se evapora en minutos y absorbe la humedad superficial, haciendo que las moléculas aromáticas se desprendan prematuramente hacia el ambiente.

---

## 3. El peso molecular de las notas

No todas las familias aromáticas tienen la misma capacidad de permanencia física:

- **Notas volátiles (Bajo peso molecular):** Limón, bergamota, mandarina, menta. Su estructura microscópica es pequeña y ligera; su evaporación completa ocurre entre 15 y 45 minutos, sin importar la marca o el precio.
- **Notas densas (Alto peso molecular):** Oud, madera de agar, ámbar gris, cuero, mirra y almizcle. Sus cadenas de carbono son complejas y pesadas; pueden anclarse a la piel o a las fibras de la ropa durante más de 12 a 24 horas.

Por esta razón, creaciones de nuestra colección como [NOCTURNE](/perfumes/nocturne) (con base de oud y cuero) o [AMBRE](/perfumes/ambre) (con resinas orientales) tienen una fijación natural muy superior a fragancias puramente cítricas o florales ligeras.

---

## 4 técnicas de experto para prolongar la fijación

Si sentís que tu piel consume las fragancias rápidamente, aplicá estas cuatro pautas recomendadas por el Club:

### 1. La hidratación lipídica previa
Nunca apliques perfume sobre la piel reseca después de salir de la ducha. Utilizá primero una crema emoliente o loción hidratante **completamente neutra y sin perfume**. La base grasa actuará como un imán fijador para las notas aromáticas.

### 2. Elegí textiles naturales
La piel humana transpira y produce calor continuo, lo que acelera el consumo del perfume. Las fibras textiles naturales —como la lana, el lino, la seda o el algodón— no transpiran ni tienen enzimas que degraden la fórmula. Una pulverización sutil sobre una bufanda, solapa de abrigo o cuello de camisa puede durar intacta durante días.

### 3. Olvidate de frotar
Frotar las muñecas entre sí rompe los enlaces más frágiles de la pirámide y calienta la superficie cutánea por fricción, acelerando la fuga de las notas de corazón. Rociá y dejá secar al aire.

### 4. La técnica del «layering» con aceites
En Oriente Medio, la base de fijación ancestral es el aceite puro (*attar*). Si aplicás una capa sutil de una fragancia con alta concentración de almizcle como [MUSK VEIL](/perfumes/musk-veil) antes de rociar un perfume especiado como [SAFFRON](/perfumes/saffron), crearás una película adherente que multiplicará las horas de estela.

En VI-ELIXIR formulamos cada creación con concentraciones elevadas de aceites esenciales para asegurar una permanencia digna de la alta perfumería oriental. Te invitamos a explorar las notas de fondo de [nuestras fragancias](/perfumes) y comprobar su evolución en tu propia piel.
    `,
  },
];

export function getArticleBySlug(slug: string, type?: 'journal' | 'blog'): Article | undefined {
  if (type === 'journal') return journalArticles.find(a => a.slug === slug);
  if (type === 'blog') return blogArticles.find(a => a.slug === slug);
  return [...journalArticles, ...blogArticles].find(a => a.slug === slug);
}

export function getAllArticles(): Article[] {
  return [...journalArticles, ...blogArticles].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
