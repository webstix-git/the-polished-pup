/**
 * Photo slots. Drop matching files into /public/images/photos/ — any slot whose
 * file is missing renders a labelled placeholder instead of a broken image.
 */
export const photos = {
  heroWash: "/images/photos/hero-wash.png",
  dalmatianTub: "/images/photos/dalmatian-tub.jpg",
  goldenRinse: "/images/photos/golden-rinse.jpg",
  seniorTub: "/images/photos/senior-dog-tub.jpg",
  dalmatianGroomer: "/images/photos/dalmatian-groomer.jpg",
  shopDog: "/images/photos/shop-dog-relaxing.jpg",
  decorTray: "/images/photos/shop-decor-tray.jpg",
  shihTzuGroom: "/images/photos/shih-tzu-groom.jpg",
  spaCucumber: "/images/photos/spa-cucumber.webp",
  towelDuck: "/images/photos/dog-towel-duck.jpg",
  comb: "/images/photos/dog-with-comb.jpg",
  tealTowel: "/images/photos/dog-teal-towel.webp",
  selfServiceSuds: "/images/photos/self-service-suds.png",
  selfServiceHappy: "/images/photos/self-service-happy.png",
  selfServiceRinse: "/images/photos/self-service-rinse.jpg",
  selfServiceCorgi: "/images/photos/self-service-corgi.jpg",
  fullGroomingYorkie: "/images/photos/full-grooming-yorkie.jpg",
  aboutTub: "/images/photos/about-tub.jpg",
  bookWash: "/images/photos/book-wash.jpg",
  ctaCorgi: "/images/photos/cta-corgi.png",
  pageHeroBg: "/images/photos/page-hero-bg.png",
  galleryShepherd: "/images/photos/gallery-01-shepherd.jpg",
  galleryGoldenRinse: "/images/photos/gallery-02-golden.png",
  galleryDalmatian: "/images/photos/gallery-03-dalmatian.jpg",
  galleryBlackLab: "/images/photos/gallery-04-black-lab.jpg",
  galleryShepherdSign: "/images/photos/gallery-05-shepherd-sign.jpg",
  galleryPawTrim: "/images/photos/gallery-06-paw-trim.jpg",
  galleryCorgi: "/images/photos/gallery-corgi.jpg",
  galleryGoldenClose: "/images/photos/gallery-golden-close.jpg",
} as const;

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export const selfServiceFeatures = [
  "Raised, back-friendly tubs sized for every breed",
  "Quality shampoos and conditioners on tap",
  "Professional high-velocity dryers",
  "Brushes, combs, towels and aprons provided",
  "Up to two dogs per visit",
  "We clean the station — you head home dry",
];

export const fullServiceItems: ServiceItem[] = [
  {
    title: "Full-Service Grooming",
    description:
      "A complete groom shaped around your dog's coat, breed and comfort — bath, cut, style and finish.",
    icon: "Scissors",
  },
  {
    title: "Bath & Brush",
    description:
      "A thorough wash, blow-out and brush-through that leaves the coat soft, clean and tangle-free.",
    icon: "Brush",
  },
  {
    title: "Nail Trimming",
    description:
      "Careful, unhurried trims and filing to keep paws comfortable and posture healthy.",
    icon: "PawPrint",
  },
  {
    title: "Ear Cleaning",
    description:
      "Gentle cleaning and inspection to keep ears fresh and help head off irritation.",
    icon: "Stethoscope",
  },
  {
    title: "Teeth Brushing",
    description:
      "A pet-safe brushing that freshens breath and supports a healthy daily routine at home.",
    icon: "Toothbrush",
  },
  {
    title: "De-Shedding Treatments",
    description:
      "Undercoat work that lifts loose hair before it reaches your couch, car and clothes.",
    icon: "Wind",
  },
  {
    title: "Puppy Grooming",
    description:
      "A patient first experience built on short sessions, gentle handling and lots of reassurance.",
    icon: "Dog",
  },
  {
    title: "Senior Dog Grooming",
    description:
      "Slower, low-stress sessions with extra breaks and support for older joints and sensitive skin.",
    icon: "ShieldCheck",
  },
  {
    title: "Spa Treatments",
    description:
      "Conditioning soaks, skin-soothing add-ons and finishing touches for a truly polished pup.",
    icon: "Spa",
  },
];

export const usps = [
  {
    title: "The Area's Only Self-Service Wash",
    description:
      "Skip the mess at home. Professional-grade tubs, tools and dryers, ready when you are.",
    icon: "UspSelfService",
  },
  {
    title: "Calm, Compassionate Care",
    description:
      "Personalized attention for every dog, tailored to their temperament and needs.",
    icon: "UspCare",
  },
  {
    title: "Clean & Welcoming",
    description:
      "A bright, safe space designed to keep pets relaxed and owners at ease.",
    icon: "UspClean",
  },
  {
    title: "Rooted in South Haven",
    description:
      "Built for neighbours and lake-town visitors alike, right on Blue Star Highway.",
    icon: "UspSouthHaven",
  },
];

export const values = [
  {
    title: "Community First",
    description:
      "We opened because South Haven needed this. Every decision still starts with what our neighbours actually need.",
    icon: "AboutCommunity",
  },
  {
    title: "Everyone Welcome",
    description:
      "Year-round locals, weekend visitors, first-time puppies and grey-muzzled regulars — all of them belong here.",
    icon: "AboutWelcome",
  },
  {
    title: "Compassionate Care",
    description:
      "We work at each animal's pace. No rushing, no wrestling, no shortcuts around a dog's comfort.",
    icon: "AboutCare",
  },
];

export type GalleryItem = {
  src?: string;
  alt: string;
  label: string;
  /** Wide tiles span two columns on large screens for a masonry-like rhythm. */
  wide?: boolean;
  tall?: boolean;
  /** CSS object-position so faces stay in frame when cropped. */
  objectPosition?: string;
};

/** Home page gallery preview — 2×3 asymmetric rows like the reference layout. */
export const homeGalleryItems: GalleryItem[] = [
  {
    src: photos.galleryShepherd,
    alt: "A wet German Shepherd smiling in a stainless steel wash tub",
    label: "Wash day",
    objectPosition: "center 18%",
  },
  {
    src: photos.galleryGoldenRinse,
    alt: "A happy senior dog standing in a stainless steel wash tub with a blue non-slip mat",
    label: "Tub time",
    objectPosition: "center 22%",
  },
  {
    src: photos.galleryDalmatian,
    alt: "A liver-spotted Dalmatian leaning happily against a groomer's arm",
    label: "In good hands",
    objectPosition: "68% 22%",
  },
  {
    src: photos.galleryBlackLab,
    alt: "A black dog with its tongue out in a stainless steel wash tub",
    label: "Tub time",
    objectPosition: "62% 20%",
  },
  {
    src: photos.galleryShepherdSign,
    alt: "A German Shepherd in the wash tub beside a Wash Room Etiquette sign",
    label: "Wash room",
    objectPosition: "center 12%",
  },
  {
    src: photos.galleryCorgi,
    alt: "A Pembroke Welsh Corgi being rinsed in a wash tub",
    label: "Fresh rinse",
    objectPosition: "38% 30%",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    src: photos.dalmatianTub,
    alt: "A grinning Dalmatian standing in a stainless steel wash tub against the shop's green wall",
    label: "Wash room",
    tall: true,
  },
  {
    src: photos.towelDuck,
    alt: "A freshly washed West Highland terrier wrapped in a yellow towel with a rubber duck on its head",
    label: "After the bath",
    wide: true,
  },
  {
    src: photos.goldenRinse,
    alt: "A golden retriever with its tongue out being rinsed with a handheld sprayer in the wash room",
    label: "Rinse cycle",
    tall: true,
  },
  {
    src: photos.decorTray,
    alt: "A brass mirrored tray of dog treats on a wooden counter beside a vintage radio",
    label: "Treat counter",
  },
  {
    src: photos.seniorTub,
    alt: "A senior tan and white dog standing on the blue non-slip mats of a raised wash tub",
    label: "Raised tubs",
    wide: true,
  },
  {
    src: photos.shopDog,
    alt: "A German shepherd resting on a knitted blanket inside the shop lounge",
    label: "Shop life",
  },
  {
    src: photos.dalmatianGroomer,
    alt: "A liver-spotted Dalmatian leaning happily against a groomer's arm in the wash tub",
    label: "In good hands",
  },
  {
    src: photos.shihTzuGroom,
    alt: "A Shih Tzu with a pink top knot being groomed with a comb and scissors",
    label: "Full-service groom",
  },
  {
    src: photos.tealTowel,
    alt: "A wet Australian shepherd wrapped in a teal towel, smiling at the camera",
    label: "Towel time",
  },
  {
    src: photos.comb,
    alt: "A Jack Russell terrier holding a wooden grooming comb in its mouth",
    label: "Brush out",
    wide: true,
  },
  {
    src: photos.spaCucumber,
    alt: "A Labrador in a towel turban relaxing with cucumber slices over its eyes",
    label: "Spa day",
  },
];

/** Local links from thepolishedpupboutique.com — Pet Friendly Places and Beach Cam. */
export const petFriendlyPlaces = [
  {
    title: "Discounted Gift Cards",
    href: "https://bentonharbor.bigdealsmedia.net/item/74399/$25-certificates-for-$12.50",
    icon: "Gift",
  },
  {
    title: "Pet Friendly Stays",
    href: "https://www.southhaven.org/resources/pet-friendly/#jllodging",
    icon: "Hotel",
  },
  {
    title: "Pet Friendly Parks / Beaches",
    href: "https://www.southhaven.org/resources/pet-friendly/#jlparks",
    icon: "Trees",
  },
  {
    title: "Pet Friendly Dining",
    href: "https://www.southhaven.org/resources/pet-friendly/#jlfood",
    icon: "UtensilsCrossed",
  },
  {
    title: "Beach Cam",
    href: "https://www.southhaven.org/south-haven-beach-cams/",
    icon: "Camera",
  },
  {
    title: "Local Pet Store",
    href: "https://decadentdogs.com/",
    icon: "Store",
  },
  {
    title: "Local Pet Rescue",
    href: "https://www.al-van.org/",
    icon: "Heart",
  },
] as const;

export const faqs = [
  {
    question: "Do I need an appointment for the self-service wash?",
    answer:
      "Walk in whenever it suits you. Stations are first come, first served, and weekday mornings are usually the quietest.",
  },
  {
    question: "What does the $25 self-service wash include?",
    answer:
      "Up to two dogs, a raised tub, shampoo and conditioner, a professional dryer, brushes, towels and an apron. We handle the cleanup afterwards.",
  },
  {
    question: "Do you groom cats?",
    answer: "We do. Our groomers work with both dogs and cats — call ahead so we can plan a calm slot.",
  },
  {
    question: "Is my nervous or senior dog a good fit?",
    answer:
      "Absolutely. Tell us what your dog finds difficult and we will slow the session down, add breaks and adapt the handling.",
  },
];
