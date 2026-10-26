/**
 * Catálogo de productos, taxonomía jerárquica y sets de regalo para VI-ELIXIR
 * Perfumería Árabe de Autor — Proyecto Académico Ficticio
 */

export type IntensityLevel = 'Suave' | 'Moderada' | 'Moderada-Intensa' | 'Intensa';
export type MainCategoryName = 'Perfumes Masculinos' | 'Perfumes Femeninos' | 'Perfumes Unisex';
export type MainCategoryId = 'masculinos' | 'femeninos' | 'unisex';

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: MainCategoryId;
}

export interface MainCategory {
  id: MainCategoryId;
  name: MainCategoryName;
  slug: string;
  shortName: string;
  description: string;
  subcategories: SubCategory[];
}

export interface OlfactoryFamily {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  nombre?: string;
  slug: string;
  categoriaPrincipal: MainCategoryName;
  categoriaPrincipalId: MainCategoryId;
  subcategoria: string;
  subcategoriaId: string;
  familiasOlfativas: string[];
  family: string;
  shortDescription: string;
  descripcion?: string;
  longDescription: string;
  notesTop: string[];
  notasSalida?: string[];
  notesHeart: string[];
  notasCorazon?: string[];
  notesBase: string[];
  notasFondo?: string[];
  intensity: IntensityLevel;
  intensidad?: IntensityLevel;
  occasion: string;
  ocasion?: string;
  presentation: string;
  presentacion?: string;
  price: number;
  precio?: number;
  image: string;
  imagen?: string;
  images: string[];
  character: string;
  tags: string[];
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
  category?: string;
  subcategory?: string;
  family?: string;
  intensity?: string;
  occasion?: string;
  query?: string;
}

/**
 * Taxonomía Jerárquica Académica:
 * CATEGORÍA PRINCIPAL -> SUBCATEGORÍA -> PRODUCTOS
 */
export const mainCategories: MainCategory[] = [
  {
    id: 'masculinos',
    name: 'Perfumes Masculinos',
    slug: 'masculinos',
    shortName: 'Masculinos',
    description: 'Composiciones con carácter, maderas profundas y acordes especiados magnéticos.',
    subcategories: [
      {
        id: 'amaderados-intensos',
        name: 'Amaderados intensos',
        slug: 'amaderados-intensos',
        description: 'Maderas oscuras, oud ahumado y resinas nobles de gran profundidad.',
        categoryId: 'masculinos',
      },
      {
        id: 'ambar-especiados',
        name: 'Ámbar y especiados',
        slug: 'ambar-especiados',
        description: 'La calidez vibrante del azafrán, cuero curtido y resinas orientales.',
        categoryId: 'masculinos',
      },
    ],
  },
  {
    id: 'femeninos',
    name: 'Perfumes Femeninos',
    slug: 'femeninos',
    shortName: 'Femeninos',
    description: 'Elegancia oriental envolvente, pétalos nobles de rosa y dulzuras balsámicas.',
    subcategories: [
      {
        id: 'florales-orientales',
        name: 'Florales orientales',
        slug: 'florales-orientales',
        description: 'Rosa de Taif y jazmín descansando sobre un lecho aterciopelado de oud.',
        categoryId: 'femeninos',
      },
      {
        id: 'ambar-envolventes',
        name: 'Ámbar y envolventes',
        slug: 'ambar-envolventes',
        description: 'Vainilla especiada, bálsamos dorados y confort táctil sensual.',
        categoryId: 'femeninos',
      },
    ],
  },
  {
    id: 'unisex',
    name: 'Perfumes Unisex',
    slug: 'unisex',
    shortName: 'Unisex',
    description: 'Creaciones sin género concebidas para fundirse con la identidad única de quien las lleva.',
    subcategories: [
      {
        id: 'amaderados-contemporaneos',
        name: 'Amaderados contemporáneos',
        slug: 'amaderados-contemporaneos',
        description: 'Oud blanco cristalino matizado con cítricos y maderas claras.',
        categoryId: 'unisex',
      },
      {
        id: 'almizclados-suaves',
        name: 'Almizclados y suaves',
        slug: 'almizclados-suaves',
        description: 'Una caricia sedosa de segunda piel, almizcle blanco y pureza discreta.',
        categoryId: 'unisex',
      },
    ],
  },
];

/**
 * Segunda forma de exploración: Familias Olfativas independientes
 */
export const olfactoryFamilies: OlfactoryFamily[] = [
  {
    id: 'amaderados',
    name: 'Amaderados',
    slug: 'amaderados',
    description: 'Oud milenario, sándalo cremoso, cedro noble y maderas ahumadas.',
  },
  {
    id: 'florales',
    name: 'Florales',
    slug: 'florales',
    description: 'Rosa de Taif, jazmín blanco y peonías enriquecidas con toques orientales.',
  },
  {
    id: 'ambar-especiados',
    name: 'Ámbar y especiados',
    slug: 'ambar-especiados',
    description: 'Azafrán dorado, canela, bálsamos de benjuí y vainilla envolvente.',
  },
  {
    id: 'almizclados',
    name: 'Almizclados',
    slug: 'almizclados',
    description: 'Acordes limpios, flor de algodón y almizcles blancos de estela íntima.',
  },
  {
    id: 'frescos',
    name: 'Frescos',
    slug: 'frescos',
    description: 'Salidas cítricas luminosas de bergamota y neroli con fijación elegante.',
  },
];

// Compatibilidad hacia atrás con la interfaz Category anterior
export const categories = olfactoryFamilies;

export const products: Product[] = [
  {
    id: 'vi-01',
    name: 'VI-ELIXIR N.º 01 — NOCTURNE',
    nombre: 'VI-ELIXIR N.º 01 — NOCTURNE',
    slug: 'nocturne',
    categoriaPrincipal: 'Perfumes Masculinos',
    categoriaPrincipalId: 'masculinos',
    subcategoria: 'Amaderados intensos',
    subcategoriaId: 'amaderados-intensos',
    familiasOlfativas: ['Amaderados', 'Ámbar y especiados'],
    family: 'Amaderada Oriental',
    shortDescription: 'Una composición nocturna de maderas oscuras y resinas profundas.',
    descripcion: 'Una composición nocturna de maderas oscuras y resinas profundas.',
    longDescription:
      'Inspirada en el misterio envolvente de las noches desérticas, Nocturne conjuga la intensidad del oud ahumado con la delicadeza aterciopelada de la rosa damascena. Las notas iniciales de bergamota y cardamomo abren paso a un corazón resinoso y denso, que descansa sobre un lecho persistente de ámbar y sándalo cremoso. Diseñada para quienes buscan dejar una presencia inconfundible y enigmática en veladas de gala. Proyecto académico conceptual de perfumería de autor.',
    notesTop: ['Bergamota', 'Pimienta negra', 'Cardamomo'],
    notasSalida: ['Bergamota', 'Pimienta negra', 'Cardamomo'],
    notesHeart: ['Oud', 'Rosa damascena', 'Iris'],
    notasCorazon: ['Oud', 'Rosa damascena', 'Iris'],
    notesBase: ['Sándalo', 'Ámbar', 'Vetiver', 'Almizcle'],
    notasFondo: ['Sándalo', 'Ámbar', 'Vetiver', 'Almizcle'],
    intensity: 'Intensa',
    intensidad: 'Intensa',
    occasion: 'Noche, eventos especiales',
    ocasion: 'Noche, eventos especiales',
    presentation: 'Eau de Parfum · 50 ml',
    presentacion: 'Eau de Parfum · 50 ml',
    price: 45900,
    precio: 45900,
    image: '/images/products/nocturne.jpg',
    imagen: '/images/products/nocturne.jpg',
    images: [
      '/images/products/nocturne.jpg',
      '/images/products/nocturne-detail.svg',
      '/images/products/nocturne-box.svg',
    ],
    character: 'Misteriosa, envolvente, sofisticada. Una presencia nocturna de maderas nobles y resinas magnéticas.',
    tags: ['amaderada', 'oriental', 'intensa', 'noche', 'eventos', 'oud', 'resinas', 'masculinos', 'amaderados-intensos', 'amaderados'],
  },
  {
    id: 'vi-02',
    name: 'VI-ELIXIR N.º 02 — AMBRE',
    nombre: 'VI-ELIXIR N.º 02 — AMBRE',
    slug: 'ambre',
    categoriaPrincipal: 'Perfumes Femeninos',
    categoriaPrincipalId: 'femeninos',
    subcategoria: 'Ámbar y envolventes',
    subcategoriaId: 'ambar-envolventes',
    familiasOlfativas: ['Ámbar y especiados', 'Amaderados'],
    family: 'Ámbar Especiada',
    shortDescription: 'Calidez envolvente de ámbar, vainilla y especias doradas.',
    descripcion: 'Calidez envolvente de ámbar, vainilla y especias doradas.',
    longDescription:
      'Ambre rinde tributo a las antiguas rutas caravaneras con una sinfonía de especias doradas y resinas balsámicas. La calidez del azafrán y la canela acaricia los sentidos antes de fundirse en un corazón voluptuoso de ámbar, benjuí y labdanum. Su secado dulce y ahumado revela vainilla de Madagascar y haba tonka con fijación impecable. Creada para arropar los días frescos y veladas íntimas en un aura de lujo atemporal.',
    notesTop: ['Azafrán', 'Canela', 'Jengibre'],
    notasSalida: ['Azafrán', 'Canela', 'Jengibre'],
    notesHeart: ['Ámbar', 'Benjuí', 'Labdanum'],
    notasCorazon: ['Ámbar', 'Benjuí', 'Labdanum'],
    notesBase: ['Vainilla', 'Tonka', 'Musgo de roble'],
    notasFondo: ['Vainilla', 'Tonka', 'Musgo de roble'],
    intensity: 'Moderada-Intensa',
    intensidad: 'Moderada-Intensa',
    occasion: 'Otoño-invierno, salidas nocturnas',
    ocasion: 'Otoño-invierno, salidas nocturnas',
    presentation: 'Eau de Parfum · 50 ml',
    presentacion: 'Eau de Parfum · 50 ml',
    price: 42500,
    precio: 42500,
    image: '/images/products/ambre.jpg',
    imagen: '/images/products/ambre.jpg',
    images: [
      '/images/products/ambre.jpg',
      '/images/products/ambre-detail.svg',
      '/images/products/ambre-box.svg',
    ],
    character: 'Cálida, especiada, embriagadora. Una invitación al confort y a la sensualidad de las notas doradas.',
    tags: ['ambar', 'especiada', 'moderada-intensa', 'otono-invierno', 'noche', 'vainilla', 'femeninos', 'ambar-envolventes', 'ambar-especiados'],
  },
  {
    id: 'vi-03',
    name: 'VI-ELIXIR N.º 03 — OUD BLANC',
    nombre: 'VI-ELIXIR N.º 03 — OUD BLANC',
    slug: 'oud-blanc',
    categoriaPrincipal: 'Perfumes Unisex',
    categoriaPrincipalId: 'unisex',
    subcategoria: 'Amaderados contemporáneos',
    subcategoriaId: 'amaderados-contemporaneos',
    familiasOlfativas: ['Amaderados', 'Frescos'],
    family: 'Amaderada Fresca',
    shortDescription: 'La luminosidad del oud en una interpretación fresca y contemporánea.',
    descripcion: 'La luminosidad del oud en una interpretación fresca y contemporánea.',
    longDescription:
      'Oud Blanc redefine la madera sagrada de Oriente mediante una faceta cristalina, vibrante y arquitectónica. La salida chispeante de pomelo y neroli aporta una luminosidad inmediata que matiza la profundidad leñosa del oud y el cedro. En su evolución sobre la piel, el ámbar gris y la madera de cachemira aportan un aura limpia, elegante y diáfana. Un perfume versátil pensado para el día a día contemporáneo sin resignar distinción ni carácter.',
    notesTop: ['Pomelo', 'Neroli', 'Lavanda'],
    notasSalida: ['Pomelo', 'Neroli', 'Lavanda'],
    notesHeart: ['Oud', 'Cedro', 'Flor de naranjo'],
    notasCorazon: ['Oud', 'Cedro', 'Flor de naranjo'],
    notesBase: ['Almizcle blanco', 'Ámbar gris', 'Madera de cachemira'],
    notasFondo: ['Almizcle blanco', 'Ámbar gris', 'Madera de cachemira'],
    intensity: 'Moderada',
    intensidad: 'Moderada',
    occasion: 'Día, oficina, primavera',
    ocasion: 'Día, oficina, primavera',
    presentation: 'Eau de Parfum · 50 ml',
    presentacion: 'Eau de Parfum · 50 ml',
    price: 39900,
    precio: 39900,
    image: '/images/products/oud-blanc.jpg',
    imagen: '/images/products/oud-blanc.jpg',
    images: [
      '/images/products/oud-blanc.jpg',
      '/images/products/oud-blanc-detail.svg',
      '/images/products/oud-blanc-box.svg',
    ],
    character: 'Luminosa, limpia, contemporánea. El equilibrio perfecto entre frescura cítrica y maderas nobles.',
    tags: ['amaderada', 'fresca', 'moderada', 'dia', 'oficina', 'primavera', 'oud', 'unisex', 'amaderados-contemporaneos', 'amaderados', 'frescos'],
  },
  {
    id: 'vi-04',
    name: 'VI-ELIXIR N.º 04 — VELVET ROSE',
    nombre: 'VI-ELIXIR N.º 04 — VELVET ROSE',
    slug: 'velvet-rose',
    categoriaPrincipal: 'Perfumes Femeninos',
    categoriaPrincipalId: 'femeninos',
    subcategoria: 'Florales orientales',
    subcategoriaId: 'florales-orientales',
    familiasOlfativas: ['Florales', 'Amaderados'],
    family: 'Floral Oriental',
    shortDescription: 'Rosa de Taif envuelta en terciopelo de oud y especias suaves.',
    descripcion: 'Rosa de Taif envuelta en terciopelo de oud y especias suaves.',
    longDescription:
      'Inspirada en los jardines de altura de Taif en Arabia, Velvet Rose captura los pétalos más codiciados de Oriente en plena floración matutina. La frescura jugosa de la frambuesa y la pimienta rosa dan la bienvenida a un corazón floral sublime donde la rosa es reina indiscutida. La base de oud suave, pachulí y vainilla abraza la composición con una sensualidad táctil y duradera. Una fragancia romántica de porte aristocrático y estela inolvidable.',
    notesTop: ['Rosa de Taif', 'Frambuesa', 'Pimienta rosa'],
    notasSalida: ['Rosa de Taif', 'Frambuesa', 'Pimienta rosa'],
    notesHeart: ['Jazmín', 'Peonía', 'Geranio'],
    notasCorazon: ['Jazmín', 'Peonía', 'Geranio'],
    notesBase: ['Oud', 'Pachulí', 'Almizcle', 'Vainilla'],
    notasFondo: ['Oud', 'Pachulí', 'Almizcle', 'Vainilla'],
    intensity: 'Moderada-Intensa',
    intensidad: 'Moderada-Intensa',
    occasion: 'Romántica, ocasiones especiales',
    ocasion: 'Romántica, ocasiones especiales',
    presentation: 'Eau de Parfum · 50 ml',
    presentacion: 'Eau de Parfum · 50 ml',
    price: 47500,
    precio: 47500,
    image: '/images/products/velvet-rose.jpg',
    imagen: '/images/products/velvet-rose.jpg',
    images: [
      '/images/products/velvet-rose.jpg',
      '/images/products/velvet-rose-detail.svg',
      '/images/products/velvet-rose-box.svg',
    ],
    character: 'Romántica, aterciopelada, seductora. La nobleza floral de Oriente en su máxima expresión de elegancia.',
    tags: ['floral', 'oriental', 'moderada-intensa', 'romantica', 'eventos', 'rosa', 'femeninos', 'florales-orientales', 'florales'],
  },
  {
    id: 'vi-05',
    name: 'VI-ELIXIR N.º 05 — SAFFRON',
    nombre: 'VI-ELIXIR N.º 05 — SAFFRON',
    slug: 'saffron',
    categoriaPrincipal: 'Perfumes Masculinos',
    categoriaPrincipalId: 'masculinos',
    subcategoria: 'Ámbar y especiados',
    subcategoriaId: 'ambar-especiados',
    familiasOlfativas: ['Ámbar y especiados', 'Amaderados'],
    family: 'Especiada Oriental',
    shortDescription: 'La nobleza del azafrán en una composición magnética y cálida.',
    descripcion: 'La nobleza del azafrán en una composición magnética y cálida.',
    longDescription:
      'Saffron rinde homenaje al oro rojo de Oriente con una apertura especiada, vibrante y cortante de pimienta negra y bergamota fresca. En el corazón, acordes de cuero curtido y rosa noble potencian el exotismo del azafrán puro. La base amaderada de oud resinoso y sándalo otorga una fijación señorial de gran potencia y presencia. Un elixir audaz y opulento creado para veladas memorables y personalidades que pisan fuerte.',
    notesTop: ['Azafrán', 'Pimienta negra', 'Bergamota'],
    notasSalida: ['Azafrán', 'Pimienta negra', 'Bergamota'],
    notesHeart: ['Cuero', 'Rosa', 'Canela'],
    notasCorazon: ['Cuero', 'Rosa', 'Canela'],
    notesBase: ['Oud', 'Ámbar', 'Sándalo', 'Almizcle'],
    notasFondo: ['Oud', 'Ámbar', 'Sándalo', 'Almizcle'],
    intensity: 'Intensa',
    intensidad: 'Intensa',
    occasion: 'Noche, invierno, eventos',
    ocasion: 'Noche, invierno, eventos',
    presentation: 'Eau de Parfum · 50 ml',
    presentacion: 'Eau de Parfum · 50 ml',
    price: 49900,
    precio: 49900,
    image: '/images/products/saffron.jpg',
    imagen: '/images/products/saffron.jpg',
    images: [
      '/images/products/saffron.jpg',
      '/images/products/saffron-detail.svg',
      '/images/products/saffron-box.svg',
    ],
    character: 'Opulenta, magnética, audaz. Una declaración olfativa de carácter especiado y maderas aristocráticas.',
    tags: ['especiada', 'oriental', 'intensa', 'noche', 'invierno', 'azafran', 'cuero', 'masculinos', 'ambar-especiados'],
  },
  {
    id: 'vi-06',
    name: 'VI-ELIXIR N.º 06 — MUSK VEIL',
    nombre: 'VI-ELIXIR N.º 06 — MUSK VEIL',
    slug: 'musk-veil',
    categoriaPrincipal: 'Perfumes Unisex',
    categoriaPrincipalId: 'unisex',
    subcategoria: 'Almizclados y suaves',
    subcategoriaId: 'almizclados-suaves',
    familiasOlfativas: ['Almizclados'],
    family: 'Almizclada Suave',
    shortDescription: 'Una caricia sutil de almizcles blancos y notas limpias.',
    descripcion: 'Una caricia sutil de almizcles blancos y notas limpias.',
    longDescription:
      'Musk Veil es un estudio sobre la intimidad y la pureza sensorial que evoca una segunda piel sedosa y luminosa. La ligereza crujiente de la pera y los aldehídos transparentes se combinan con un delicado corazón de lirio y flor de algodón. En su fondo, el almizcle blanco y la madera de cachemira crean una calidez discreta que susurra en lugar de gritar. Ideal para quienes aprecian el lujo silencioso y la frescura impecable en cualquier momento del año.',
    notesTop: ['Pera', 'Bergamota', 'Aldehídos'],
    notasSalida: ['Pera', 'Bergamota', 'Aldehídos'],
    notesHeart: ['Almizcle blanco', 'Lirio', 'Flor de algodón'],
    notasCorazon: ['Almizcle blanco', 'Lirio', 'Flor de algodón'],
    notesBase: ['Cedro', 'Ámbar blanco', 'Cachemira'],
    notasFondo: ['Cedro', 'Ámbar blanco', 'Cachemira'],
    intensity: 'Suave',
    intensidad: 'Suave',
    occasion: 'Día, uso diario, todas las estaciones',
    ocasion: 'Día, uso diario, todas las estaciones',
    presentation: 'Eau de Parfum · 50 ml',
    presentacion: 'Eau de Parfum · 50 ml',
    price: 36900,
    precio: 36900,
    image: '/images/products/musk-veil.jpg',
    imagen: '/images/products/musk-veil.jpg',
    images: [
      '/images/products/musk-veil.jpg',
      '/images/products/musk-veil-detail.svg',
      '/images/products/musk-veil-box.svg',
    ],
    character: 'Íntima, sutil, etérea. Un velo de almizcle blanco y pureza que acaricia la piel con delicadeza.',
    tags: ['almizclada', 'suave', 'dia', 'uso-diario', 'todas-las-estaciones', 'almizcle', 'unisex', 'almizclados-suaves', 'almizclados'],
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
 * Obtiene una categoría principal por id o slug
 */
export function getMainCategoryById(id: string): MainCategory | undefined {
  if (!id) return undefined;
  const clean = id.trim().toLowerCase();
  return mainCategories.find((cat) => cat.id === clean || cat.slug === clean);
}

/**
 * Obtiene una subcategoría por su id
 */
export function getSubCategoryById(id: string): SubCategory | undefined {
  if (!id) return undefined;
  const clean = id.trim().toLowerCase();
  for (const cat of mainCategories) {
    const sub = cat.subcategories.find((s) => s.id === clean || s.slug === clean);
    if (sub) return sub;
  }
  return undefined;
}

/**
 * Helper para normalizar cadenas para búsquedas y filtros (sin acentos, minúsculas)
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Obtiene fragancias relacionadas excluyendo la actual, ordenadas por afinidad olfativa y categoría
 */
export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) {
    return products.slice(0, limit);
  }

  const otherProducts = products.filter((p) => p.slug !== current.slug);

  const scored = otherProducts.map((p) => {
    let score = 0;

    // Misma categoría principal
    if (p.categoriaPrincipalId === current.categoriaPrincipalId) {
      score += 3;
    }

    // Misma familia exacta
    if (normalizeText(p.family) === normalizeText(current.family)) {
      score += 4;
    } else {
      // Coincidencia parcial de familia
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
 * Filtra fragancias según categoría principal, subcategoría, familia olfativa, intensidad u ocasión
 */
export function filterProducts(options: ProductFilterOptions = {}): Product[] {
  const { category, subcategory, family, intensity, occasion, query } = options;

  return products.filter((product) => {
    // Filtro por Categoría Principal
    if (category && category !== 'all' && category !== 'todas') {
      const normCat = normalizeText(category);
      if (
        product.categoriaPrincipalId !== normCat &&
        normalizeText(product.categoriaPrincipal) !== normCat
      ) {
        return false;
      }
    }

    // Filtro por Subcategoría
    if (subcategory && subcategory !== 'all' && subcategory !== 'todas') {
      const normSub = normalizeText(subcategory);
      if (
        product.subcategoriaId !== normSub &&
        normalizeText(product.subcategoria) !== normSub
      ) {
        return false;
      }
    }

    // Filtro por Familia olfativa
    if (family && family !== 'all' && family !== 'todas') {
      const normFamily = normalizeText(family);
      const normProdFamily = normalizeText(product.family);
      const matchesFamily =
        normProdFamily.includes(normFamily) ||
        product.familiasOlfativas.some((f) => normalizeText(f).includes(normFamily)) ||
        product.tags.some((tag) => normalizeText(tag).includes(normFamily)) ||
        (normFamily === 'amaderados' && normProdFamily.includes('amaderada')) ||
        (normFamily === 'ambar-especiados' &&
          (normProdFamily.includes('ambar') || normProdFamily.includes('especiada'))) ||
        (normFamily === 'florales' && normProdFamily.includes('floral')) ||
        (normFamily === 'almizclados' && normProdFamily.includes('almizclada')) ||
        (normFamily === 'frescos' && normProdFamily.includes('fresca'));

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
        product.categoriaPrincipal,
        product.subcategoria,
        product.family,
        ...product.familiasOlfativas,
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
