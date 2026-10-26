/**
 * Catálogo de productos y sets de regalo para VI-ELIXIR
 * Perfumería Árabe de Autor — Proyecto Académico Ficticio
 */

export type IntensityLevel = 'Suave' | 'Moderada' | 'Moderada-Intensa' | 'Intensa';

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  family: string;
  notesTop: string[];
  notesHeart: string[];
  notesBase: string[];
  intensity: IntensityLevel;
  occasion: string;
  presentation: string;
  price: number;
  image: string;
  images: string[];
  character: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface GiftSet {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: string[];
  price: number;
  savings: number;
  presentation: string;
  image: string;
}

export interface ProductFilterOptions {
  family?: string;
  intensity?: string;
  occasion?: string;
  query?: string;
}

export const categories: Category[] = [
  {
    id: 'amaderadas',
    name: 'Amaderadas',
    description: 'Composiciones nobles y profundas con notas de oud, sándalo y cedro.',
  },
  {
    id: 'ambar-especiadas',
    name: 'Ámbar y Especiadas',
    description: 'Acordes cálidos, resinas místicas, azafrán y canela dorada.',
  },
  {
    id: 'florales',
    name: 'Florales',
    description: 'Rosas orientales y flores blancas enlazadas con maderas y especias.',
  },
  {
    id: 'almizcladas',
    name: 'Almizcladas',
    description: 'Fragancias íntimas de segunda piel con almizcles blancos y maderas sutiles.',
  },
  {
    id: 'frescas',
    name: 'Frescas y Cítricas',
    description: 'Interpretaciones luminosas que equilibran cítricos con la nobleza del oud.',
  },
];

export const products: Product[] = [
  {
    id: 'vi-01',
    name: 'VI-ELIXIR N.º 01 — NOCTURNE',
    slug: 'nocturne',
    shortDescription: 'Una composición nocturna de maderas oscuras y resinas profundas.',
    longDescription:
      'Inspirada en el misterio envolvente de las noches desérticas, Nocturne conjuga la intensidad del oud ahumado con la delicadeza aterciopelada de la rosa damascena. Las notas iniciales de bergamota y cardamomo abren paso a un corazón resinoso y denso, que descansa sobre un lecho persistente de ámbar y sándalo cremoso. Diseñada para quienes buscan dejar una presencia inconfundible y enigmática en veladas de gala. Proyecto académico conceptual de perfumería de autor.',
    family: 'Amaderada Oriental',
    notesTop: ['Bergamota', 'Pimienta negra', 'Cardamomo'],
    notesHeart: ['Oud', 'Rosa damascena', 'Iris'],
    notesBase: ['Sándalo', 'Ámbar', 'Vetiver', 'Almizcle'],
    intensity: 'Intensa',
    occasion: 'Noche, eventos especiales',
    presentation: 'Eau de Parfum · 50 ml',
    price: 45900,
    image: '/images/products/nocturne.svg',
    images: [
      '/images/products/nocturne.svg',
      '/images/products/nocturne-detail.svg',
      '/images/products/nocturne-box.svg',
    ],
    character: 'Misteriosa, envolvente, sofisticada. Una presencia nocturna de maderas nobles y resinas magnéticas.',
    tags: ['amaderada', 'oriental', 'intensa', 'noche', 'eventos', 'oud', 'resinas'],
  },
  {
    id: 'vi-02',
    name: 'VI-ELIXIR N.º 02 — AMBRE',
    slug: 'ambre',
    shortDescription: 'Calidez envolvente de ámbar, vainilla y especias doradas.',
    longDescription:
      'Ambre rinde tributo a las antiguas rutas caravaneras con una sinfonía de especias doradas y resinas balsámicas. La calidez del azafrán y la canela acaricia los sentidos antes de fundirse en un corazón voluptuoso de ámbar, benjuí y labdanum. Su secado dulce y ahumado revela vainilla de Madagascar y haba tonka con fijación impecable. Creada para arropar los días frescos y veladas íntimas en un aura de lujo atemporal.',
    family: 'Ámbar Especiada',
    notesTop: ['Azafrán', 'Canela', 'Jengibre'],
    notesHeart: ['Ámbar', 'Benjuí', 'Labdanum'],
    notesBase: ['Vainilla', 'Tonka', 'Musgo de roble'],
    intensity: 'Moderada-Intensa',
    occasion: 'Otoño-invierno, salidas nocturnas',
    presentation: 'Eau de Parfum · 50 ml',
    price: 42500,
    image: '/images/products/ambre.svg',
    images: [
      '/images/products/ambre.svg',
      '/images/products/ambre-detail.svg',
      '/images/products/ambre-box.svg',
    ],
    character: 'Cálida, especiada, embriagadora. Una invitación al confort y a la sensualidad de las notas doradas.',
    tags: ['ambar', 'especiada', 'moderada-intensa', 'otono-invierno', 'noche', 'vainilla'],
  },
  {
    id: 'vi-03',
    name: 'VI-ELIXIR N.º 03 — OUD BLANC',
    slug: 'oud-blanc',
    shortDescription: 'La luminosidad del oud en una interpretación fresca y contemporánea.',
    longDescription:
      'Oud Blanc redefine la madera sagrada de Oriente mediante una faceta cristalina, vibrante y arquitectónica. La salida chispeante de pomelo y neroli aporta una luminosidad inmediata que matiza la profundidad leñosa del oud y el cedro. En su evolución sobre la piel, el ámbar gris y la madera de cachemira aportan un aura limpia, elegante y diáfana. Un perfume versátil pensado para el día a día contemporáneo sin resignar distinción ni carácter.',
    family: 'Amaderada Fresca',
    notesTop: ['Pomelo', 'Neroli', 'Lavanda'],
    notesHeart: ['Oud', 'Cedro', 'Flor de naranjo'],
    notesBase: ['Almizcle blanco', 'Ámbar gris', 'Madera de cachemira'],
    intensity: 'Moderada',
    occasion: 'Día, oficina, primavera',
    presentation: 'Eau de Parfum · 50 ml',
    price: 39900,
    image: '/images/products/oud-blanc.svg',
    images: [
      '/images/products/oud-blanc.svg',
      '/images/products/oud-blanc-detail.svg',
      '/images/products/oud-blanc-box.svg',
    ],
    character: 'Luminosa, limpia, contemporánea. El equilibrio perfecto entre frescura cítrica y maderas nobles.',
    tags: ['amaderada', 'fresca', 'moderada', 'dia', 'oficina', 'primavera', 'oud'],
  },
  {
    id: 'vi-04',
    name: 'VI-ELIXIR N.º 04 — VELVET ROSE',
    slug: 'velvet-rose',
    shortDescription: 'Rosa de Taif envuelta en terciopelo de oud y especias suaves.',
    longDescription:
      'Inspirada en los jardines de altura de Taif en Arabia, Velvet Rose captura los pétalos más codiciados de Oriente en plena floración matutina. La frescura jugosa de la frambuesa y la pimienta rosa dan la bienvenida a un corazón floral sublime donde la rosa es reina indiscutida. La base de oud suave, pachulí y vainilla abraza la composición con una sensualidad táctil y duradera. Una fragancia romántica de porte aristocrático y estela inolvidable.',
    family: 'Floral Oriental',
    notesTop: ['Rosa de Taif', 'Frambuesa', 'Pimienta rosa'],
    notesHeart: ['Jazmín', 'Peonía', 'Geranio'],
    notesBase: ['Oud', 'Pachulí', 'Almizcle', 'Vainilla'],
    intensity: 'Moderada-Intensa',
    occasion: 'Romántica, ocasiones especiales',
    presentation: 'Eau de Parfum · 50 ml',
    price: 47500,
    image: '/images/products/velvet-rose.svg',
    images: [
      '/images/products/velvet-rose.svg',
      '/images/products/velvet-rose-detail.svg',
      '/images/products/velvet-rose-box.svg',
    ],
    character: 'Romántica, aterciopelada, seductora. La nobleza floral de Oriente en su máxima expresión de elegancia.',
    tags: ['floral', 'oriental', 'moderada-intensa', 'romantica', 'eventos', 'rosa'],
  },
  {
    id: 'vi-05',
    name: 'VI-ELIXIR N.º 05 — SAFFRON',
    slug: 'saffron',
    shortDescription: 'La nobleza del azafrán en una composición magnética y cálida.',
    longDescription:
      'Saffron rinde homenaje al oro rojo de Oriente con una apertura especiada, vibrante y cortante de pimienta negra y bergamota fresca. En el corazón, acordes de cuero curtido y rosa noble potencian el exotismo del azafrán puro. La base amaderada de oud resinoso y sándalo otorga una fijación señorial de gran potencia y presencia. Un elixir audaz y opulento creado para veladas memorables y personalidades que pisan fuerte.',
    family: 'Especiada Oriental',
    notesTop: ['Azafrán', 'Pimienta negra', 'Bergamota'],
    notesHeart: ['Cuero', 'Rosa', 'Canela'],
    notesBase: ['Oud', 'Ámbar', 'Sándalo', 'Almizcle'],
    intensity: 'Intensa',
    occasion: 'Noche, invierno, eventos',
    presentation: 'Eau de Parfum · 50 ml',
    price: 49900,
    image: '/images/products/saffron.svg',
    images: [
      '/images/products/saffron.svg',
      '/images/products/saffron-detail.svg',
      '/images/products/saffron-box.svg',
    ],
    character: 'Opulenta, magnética, audaz. Una declaración olfativa de carácter especiado y maderas aristocráticas.',
    tags: ['especiada', 'oriental', 'intensa', 'noche', 'invierno', 'azafran', 'cuero'],
  },
  {
    id: 'vi-06',
    name: 'VI-ELIXIR N.º 06 — MUSK VEIL',
    slug: 'musk-veil',
    shortDescription: 'Una caricia sutil de almizcles blancos y notas limpias.',
    longDescription:
      'Musk Veil es un estudio sobre la intimidad y la pureza sensorial que evoca una segunda piel sedosa y luminosa. La ligereza crujiente de la pera y los aldehídos transparentes se combinan con un delicado corazón de lirio y flor de algodón. En su fondo, el almizcle blanco y la madera de cachemira crean una calidez discreta que susurra en lugar de gritar. Ideal para quienes aprecian el lujo silencioso y la frescura impecable en cualquier momento del año.',
    family: 'Almizclada Suave',
    notesTop: ['Pera', 'Bergamota', 'Aldehídos'],
    notesHeart: ['Almizcle blanco', 'Lirio', 'Flor de algodón'],
    notesBase: ['Cedro', 'Ámbar blanco', 'Cachemira'],
    intensity: 'Suave',
    occasion: 'Día, uso diario, todas las estaciones',
    presentation: 'Eau de Parfum · 50 ml',
    price: 36900,
    image: '/images/products/musk-veil.svg',
    images: [
      '/images/products/musk-veil.svg',
      '/images/products/musk-veil-detail.svg',
      '/images/products/musk-veil-box.svg',
    ],
    character: 'Íntima, sutil, etérea. Un velo de almizcle blanco y pureza que acaricia la piel con delicadeza.',
    tags: ['almizclada', 'suave', 'dia', 'uso-diario', 'todas-las-estaciones', 'almizcle'],
  },
];

export const giftSets: GiftSet[] = [
  {
    id: 'set-descubrimiento',
    name: 'Set Descubrimiento',
    slug: 'set-descubrimiento',
    description:
      'Una cuidada selección de tres miniaturas de 10 ml para explorar los contrastes del catálogo VI-ELIXIR: Nocturne, Oud Blanc y Ambre.',
    products: ['vi-01', 'vi-03', 'vi-02'],
    price: 29900,
    savings: 8500,
    presentation: '3 frascos vaporizadores de 10 ml en estuche rígido',
    image: '/images/products/set-descubrimiento.svg',
  },
  {
    id: 'duo-signature',
    name: 'Dúo Signature',
    slug: 'duo-signature',
    description:
      'El diálogo perfecto entre día y noche: la luminosidad diurna de Oud Blanc y la profundidad enigmática de Nocturne en presentación completa de 50 ml.',
    products: ['vi-01', 'vi-03'],
    price: 79900,
    savings: 5900,
    presentation: '2 frascos de 50 ml en cofre de lujo',
    image: '/images/products/duo-signature.svg',
  },
  {
    id: 'coleccion-completa',
    name: 'Colección Completa',
    slug: 'coleccion-completa',
    description:
      'El universo sensorial íntegro de VI-ELIXIR. Seis miniaturas de 10 ml que recorren desde la caricia suave de Musk Veil hasta la opulencia de Saffron.',
    products: ['vi-01', 'vi-02', 'vi-03', 'vi-04', 'vi-05', 'vi-06'],
    price: 54900,
    savings: 15000,
    presentation: '6 frascos vaporizadores de 10 ml en estuche editorial',
    image: '/images/products/coleccion-completa.svg',
  },
];

/**
 * Obtiene un producto por su slug único
 */
export function getProductBySlug(slug: string): Product | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.trim().toLowerCase();
  return products.find((product) => product.slug.toLowerCase() === cleanSlug);
}

/**
 * Obtiene un set de regalo por su slug único
 */
export function getGiftSetBySlug(slug: string): GiftSet | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.trim().toLowerCase();
  return giftSets.find((set) => set.slug.toLowerCase() === cleanSlug);
}

/**
 * Helper para normalizar cadenas para búsquedas y filtros (sin acentos, minúsculas)
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Obtiene fragancias relacionadas excluyendo la actual, ordenadas por afinidad olfativa
 */
export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) {
    return products.slice(0, limit);
  }

  const otherProducts = products.filter((p) => p.slug !== current.slug);

  const scored = otherProducts.map((p) => {
    let score = 0;

    // Misma familia exacta
    if (normalizeText(p.family) === normalizeText(current.family)) {
      score += 4;
    } else {
      // Coincidencia parcial de familia (e.g. "Oriental")
      const currentWords = normalizeText(current.family).split(/\s+/);
      for (const word of currentWords) {
        if (word.length > 3 && normalizeText(p.family).includes(word)) {
          score += 2;
        }
      }
    }

    // Misma intensidad
    if (normalizeText(p.intensity) === normalizeText(current.intensity)) {
      score += 1;
    }

    // Etiquetas compartidas
    const sharedTags = p.tags.filter((tag) => current.tags.includes(tag));
    score += sharedTags.length;

    return { product: p, score };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((item) => item.product);
}

/**
 * Filtra fragancias según familia olfativa, intensidad, ocasión o búsqueda de texto
 */
export function filterProducts(options: ProductFilterOptions = {}): Product[] {
  const { family, intensity, occasion, query } = options;

  return products.filter((product) => {
    // Filtro por familia
    if (family && family !== 'all' && family !== 'todas') {
      const normFamily = normalizeText(family);
      const normProdFamily = normalizeText(product.family);
      const matchesFamily =
        normProdFamily.includes(normFamily) ||
        product.tags.some((tag) => normalizeText(tag).includes(normFamily)) ||
        (normFamily === 'amaderadas' && normProdFamily.includes('amaderada')) ||
        (normFamily === 'ambar-especiadas' &&
          (normProdFamily.includes('ambar') || normProdFamily.includes('especiada'))) ||
        (normFamily === 'florales' && normProdFamily.includes('floral')) ||
        (normFamily === 'almizcladas' && normProdFamily.includes('almizclada')) ||
        (normFamily === 'frescas' && normProdFamily.includes('fresca'));

      if (!matchesFamily) return false;
    }

    // Filtro por intensidad
    if (intensity && intensity !== 'all' && intensity !== 'todas') {
      const normIntensity = normalizeText(intensity);
      const normProdIntensity = normalizeText(product.intensity);
      if (!normProdIntensity.includes(normIntensity)) return false;
    }

    // Filtro por ocasión
    if (occasion && occasion !== 'all' && occasion !== 'todas') {
      const normOccasion = normalizeText(occasion);
      const normProdOccasion = normalizeText(product.occasion);
      const matchesOccasion =
        normProdOccasion.includes(normOccasion) ||
        product.tags.some((tag) => normalizeText(tag).includes(normOccasion));
      if (!matchesOccasion) return false;
    }

    // Búsqueda libre
    if (query && query.trim() !== '') {
      const normQuery = normalizeText(query);
      const searchable = [
        product.name,
        product.family,
        product.character,
        product.shortDescription,
        product.longDescription,
        ...product.notesTop,
        ...product.notesHeart,
        ...product.notesBase,
        ...product.tags,
      ]
        .map(normalizeText)
        .join(' ');

      if (!searchable.includes(normQuery)) return false;
    }

    return true;
  });
}

/**
 * Formatea un número en formato monetario de pesos argentinos (ARS)
 * Ejemplo: 45900 -> "$ 45.900"
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(price);
}
