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
    image: '/images/editorial/journal-elegir-perfume.svg',
    imageAlt: 'Frascos de perfume árabe sobre superficie de piedra clara',
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
