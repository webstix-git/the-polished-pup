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
  "Raised tubs that are easier on your back",
  "Shampoo and conditioner ready to use",
  "High-velocity dryers",
  "Brushes, combs, towels, and aprons included",
  "Up to two dogs per visit",
  "We clean the station when you're done",
];

export const fullServiceItems: ServiceItem[] = [
  {
    title: "Full-Service Grooming",
    description:
      "Bath, cut, style, and finish — matched to your dog's coat, breed, and how they handle the table.",
    icon: "Scissors",
  },
  {
    title: "Bath & Brush",
    description:
      "A solid wash, blow-dry, and brush-out so the coat comes out clean and free of mats.",
    icon: "Brush",
  },
  {
    title: "Nail Trimming",
    description: "Steady trims and a light file so nails stay comfortable between visits.",
    icon: "PawPrint",
  },
  {
    title: "Ear Cleaning",
    description: "A careful clean and check to keep ears comfortable and free of buildup.",
    icon: "Stethoscope",
  },
  {
    title: "Teeth Brushing",
    description: "Pet-safe brushing to freshen breath and support the care you do at home.",
    icon: "Toothbrush",
  },
  {
    title: "De-Shedding Treatments",
    description:
      "Undercoat work that pulls loose hair before it ends up on your couch and car seats.",
    icon: "Wind",
  },
  {
    title: "Puppy Grooming",
    description:
      "Short, patient first visits so a young dog learns the shop is a safe place.",
    icon: "Dog",
  },
  {
    title: "Senior Dog Grooming",
    description:
      "Slower sessions with extra breaks for older joints, thinner skin, and lower stamina.",
    icon: "ShieldCheck",
  },
  {
    title: "Spa Treatments",
    description:
      "Conditioning soaks and skin-friendly add-ons when you want a little extra finish.",
    icon: "Spa",
  },
];

export const usps = [
  {
    title: "The Area's Only Self-Service Wash",
    description:
      "No bathtub cleanup at home. Use our tubs, shampoo, and dryers — then walk out with a clean dog.",
    icon: "UspSelfService",
  },
  {
    title: "Patient Grooming",
    description:
      "We take our time with each dog. If they need a slower pace, that's what they get.",
    icon: "UspCare",
  },
  {
    title: "Clean Shop, Clear Space",
    description:
      "Stations stay stocked and wiped down. You shouldn't have to hunt for what you need.",
    icon: "UspClean",
  },
  {
    title: "Right on Blue Star Highway",
    description:
      "Easy stop for South Haven neighbors and weekend visitors heading in from the lake.",
    icon: "UspSouthHaven",
  },
];

export const values = [
  {
    title: "Community First",
    description:
      "We opened because South Haven needed a self-service wash. That still guides how we run the shop.",
    icon: "AboutCommunity",
  },
  {
    title: "Everyone Welcome",
    description:
      "Year-round locals, weekend visitors, first-time puppies, and older dogs — if you're here, you belong.",
    icon: "AboutWelcome",
  },
  {
    title: "Care Without Rushing",
    description:
      "We work at your dog's pace. No forcing, no shortcuts that leave them stressed.",
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
      "No. Walk in when it works for you. Stations are first come, first served — weekday mornings are usually quieter.",
  },
  {
    question: "What does the $25 self-service wash include?",
    answer:
      "Up to two dogs, a raised tub, shampoo and conditioner, a dryer, brushes, towels, and an apron. We clean up after you're done.",
  },
  {
    question: "Do you groom cats?",
    answer:
      "Yes. Call ahead so we can set aside a quieter time for them.",
  },
  {
    question: "Is my nervous or senior dog a good fit?",
    answer:
      "Yes. Tell us what throws them off and we'll slow down, add breaks, and adjust how we work.",
  },
];
