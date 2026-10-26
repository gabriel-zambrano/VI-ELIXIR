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
    image: '/images/editorial/esencias-arcos.jpg',
    imageAlt: 'Nuestras esencias: Vainilla, Naranja, Flores, Madera y Café — VI-ELIXIR',
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
    image: '/images/editorial/bodegon-ingredientes.jpg',
    imageAlt: 'Madera de agar, especias orientales y resinas aromáticas — VI-ELIXIR',
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
    image: '/images/editorial/universo-aromas-editorial.jpg',
    imageAlt: 'Texturas de mármol, maderas nobles y esencias superpuestas — VI-ELIXIR',
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
    image: '/images/editorial/blog-nocturne-saffron.svg',
    imageAlt: 'Dos frascos de perfume sobre superficie oscura',
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
    image: '/images/editorial/blog-oud-blanc.svg',
    imageAlt: 'Frasco de perfume claro con elementos frescos y luminosos',
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
    image: '/images/editorial/blog-velvet-musk.svg',
    imageAlt: 'Composición editorial con pétalos de rosa y tela suave',
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
