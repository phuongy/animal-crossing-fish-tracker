import {
  Location
} from './locations';
import { TimeActive } from './timeActive';

export type FishProps = {
  name: string;
  image: string;
  value: number;
  location: Location;
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  time: TimeActive;
  availability: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]
};

export const fishNames: {
  [key: string]: {
    [locale: string]: string
  }
} = {
  bitterling: {
    en: "Bitterling",
    zh: "Bitterling",
  },
  pale_chub: {
    en: "Pale chub",
    zh: "Pale chub",
  },
  crucian_carp: {
    en: "Crucian carp",
    zh: "Crucian carp",
  },
  dace: {
    en: "Dace",
    zh: "Dace",
  },
  carp: {
    en: "Carp",
    zh: "Carp",
  },
  koi: {
    en: "Koi",
    zh: "Koi",
  },
  goldfish: {
    en: "Goldfish",
    zh: "Goldfish",
  },
  pop_eyed_goldfish: {
    en: "Pop-eyed goldfish",
    zh: "Pop-eyed goldfish",
  },
  ranchu_goldfish: {
    en: "Ranchu goldfish",
    zh: "Ranchu goldfish",
  },
  killifish: {
    en: "Killifish",
    zh: "Killifish",
  },
  crawfish: {
    en: "Crawfish",
    zh: "Crawfish",
  },
  soft_shelled_turtle: {
    en: "Soft-shelled turtle",
    zh: "Soft-shelled turtle",
  },
  snapping_turtle: {
    en: "Snapping turtle",
    zh: "Snapping turtle",
  },
  tadpole: {
    en: "Tadpole",
    zh: "Tadpole",
  },
  frog: {
    en: "Frog",
    zh: "Frog",
  },
  freshwater_goby: {
    en: "Freshwater goby",
    zh: "Freshwater goby",
  },
  loach: {
    en: "Loach",
    zh: "Loach",
  },
  catfish: {
    en: "Catfish",
    zh: "Catfish",
  },
  giant_snakehead: {
    en: "Giant snakehead",
    zh: "Giant snakehead",
  },
  bluegill: {
    en: "Bluegill",
    zh: "Bluegill",
  },
  yellow_perch: {
    en: "Yellow perch",
    zh: "Yellow perch",
  },
  black_bass: {
    en: "Black bass",
    zh: "Black bass",
  },
  tilapia: {
    en: "Tilapia",
    zh: "Tilapia",
  },
  pike: {
    en: "Pike",
    zh: "Pike",
  },
  pond_smelt: {
    en: "Pond smelt",
    zh: "Pond smelt",
  },
  sweetfish: {
    en: "Sweetfish",
    zh: "Sweetfish",
  },
  cherry_salmon: {
    en: "Cherry salmon",
    zh: "Cherry salmon",
  },
  char: {
    en: "Char",
    zh: "Char",
  },
  golden_trout: {
    en: "Golden trout",
    zh: "Golden trout",
  },
  stringfish: {
    en: "Stringfish",
    zh: "Stringfish",
  },
  salmon: {
    en: "Salmon",
    zh: "Salmon",
  },
  king_salmon: {
    en: "King salmon",
    zh: "King salmon",
  },
  mitten_crab: {
    en: "Mitten crab",
    zh: "Mitten crab",
  },
  guppy: {
    en: "Guppy",
    zh: "Guppy",
  },
  nibble_fish: {
    en: "Nibble fish",
    zh: "Nibble fish",
  },
  angelfish: {
    en: "Angelfish",
    zh: "Angelfish",
  },
  betta: {
    en: "Betta",
    zh: "Betta",
  },
  neon_tetra: {
    en: "Neon tetra",
    zh: "Neon tetra",
  },
  rainbowfish: {
    en: "Rainbowfish",
    zh: "Rainbowfish",
  },
  piranha: {
    en: "Piranha",
    zh: "Piranha",
  },
  arowana: {
    en: "Arowana",
    zh: "Arowana",
  },
  dorado: {
    en: "Dorado",
    zh: "Dorado",
  },
  gar: {
    en: "Gar",
    zh: "Gar",
  },
  arapaima: {
    en: "Arapaima",
    zh: "Arapaima",
  },
  saddled_bichir: {
    en: "Saddled bichir",
    zh: "Saddled bichir",
  },
  sturgeon: {
    en: "Sturgeon",
    zh: "Sturgeon",
  },
  sea_butterfly: {
    en: "Sea butterfly",
    zh: "Sea butterfly",
  },
  sea_horse: {
    en: "Sea horse",
    zh: "Sea horse",
  },
  clown_fish: {
    en: "Clown fish",
    zh: "Clown fish",
  },
  surgeonfish: {
    en: "Surgeonfish",
    zh: "Surgeonfish",
  },
  butterfly_fish: {
    en: "Butterfly fish",
    zh: "Butterfly fish",
  },
  napoleonfish: {
    en: "Napoleonfish",
    zh: "Napoleonfish",
  },
  zebra_turkeyfish: {
    en: "Zebra turkeyfish",
    zh: "Zebra turkeyfish",
  },
  blowfish: {
    en: "Blowfish",
    zh: "Blowfish",
  },
  puffer_fish: {
    en: "Puffer fish",
    zh: "Puffer fish",
  },
  anchovy: {
    en: "Anchovy",
    zh: "Anchovy",
  },
  horse_mackerel: {
    en: "Horse mackerel",
    zh: "Horse mackerel",
  },
  barred_knifejaw: {
    en: "Barred knifejaw",
    zh: "Barred knifejaw",
  },
  sea_bass: {
    en: "Sea bass",
    zh: "Sea bass",
  },
  red_snapper: {
    en: "Red snapper",
    zh: "Red snapper",
  },
  dab: {
    en: "Dab",
    zh: "Dab",
  },
  olive_flounder: {
    en: "Olive flounder",
    zh: "Olive flounder",
  },
  squid: {
    en: "Squid",
    zh: "Squid",
  },
  moray_eel: {
    en: "Moray eel",
    zh: "Moray eel",
  },
  ribbon_eel: {
    en: "Ribbon eel",
    zh: "Ribbon eel",
  },
  tuna: {
    en: "Tuna",
    zh: "Tuna",
  },
  blue_marlin: {
    en: "Blue marlin",
    zh: "Blue marlin",
  },
  giant_trevally: {
    en: "Giant trevally",
    zh: "Giant trevally",
  },
  mahi_mahi: {
    en: "Mahi-mahi",
    zh: "Mahi-mahi",
  },
  ocean_sunfish: {
    en: "Ocean sunfish",
    zh: "Ocean sunfish",
  },
  ray: {
    en: "Ray",
    zh: "Ray",
  },
  saw_shark: {
    en: "Saw shark",
    zh: "Saw shark",
  },
  hammerhead_shark: {
    en: "Hammerhead shark",
    zh: "Hammerhead shark",
  },
  great_white_shark: {
    en: "Great white shark",
    zh: "Great white shark",
  },
  whale_shark: {
    en: "Whale shark",
    zh: "Whale shark",
  },
  suckerfish: {
    en: "Suckerfish",
    zh: "Suckerfish",
  },
  football_fish: {
    en: "Football fish",
    zh: "Football fish",
  },
  oarfish: {
    en: "Oarfish",
    zh: "Oarfish",
  },
  barreleye: {
    en: "Barreleye",
    zh: "Barreleye",
  },
  coelacanth: {
    en: "Coelacanth",
    zh: "Coelacanth"
  },
}

export const getData = (locale: string): FishProps[] => {
  const getFishName = (key: string) => fishNames[key][locale];

  return [
    {
      name: getFishName("bitterling"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ea/NH-Icon-bitterling.png/revision/latest/scale-to-width-down/64?cb=20200401003128",
      value: 900,
      location: "river",
      size: 1,
      time: "all-day",
      availability: [false, false, false, false, true, true, true, true, true, false, false, false]
    },
    {
      name: getFishName("pale_chub"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-palechub.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 200,
      location: "river",
      size: 1,
      time: ["9-16"],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: getFishName("crucian_carp"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/0/03/NH-Icon-cruciancarp.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 160,
      location: "river",
      size: 2,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: getFishName("dace"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Icon-dace.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 240,
      location: "river",
      size: 3,
      time: ["16-9"],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: getFishName("carp"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-carp.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 300,
      location: "pond",
      size: 4,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: getFishName("koi"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/74/NH-Icon-koi.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 4000,
      location: "pond",
      size: 4,
      time: ["16-9"],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: getFishName("goldfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/NH-Icon-goldfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 1300,
      location: "pond",
      size: 1,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: getFishName("pop_eyed_goldfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c9/NH-Icon-popeyedgoldfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 1300,
      location: "pond",
      size: 1,
      time: ["9-16"],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: getFishName("ranchu_goldfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/f/f9/NH-Icon-ranchugoldfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 4500,
      location: "pond",
      size: 2,
      time: ["9-16"],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: getFishName("killifish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c3/NH-Icon-killifish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 300,
      location: "pond",
      size: 1,
      time: "all-day",
      availability: [true, true, false, false, false, false, false, false, false, true, true, true]
    },
    {
      name: getFishName("crawfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/cd/NH-Icon-crawfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 200,
      location: "pond",
      size: 2,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, true, true, true]
    },
    {
      name: getFishName("soft_shelled_turtle"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c3/NH-Icon-softshelledturtle.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 3750,
      location: "river",
      size: 4,
      time: ["16-9"],
      availability: [false, true, true, false, false, false, false, false, false, false, false, false]
    },
    {
      name: getFishName("snapping_turtle"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/24/NH-Icon-snappingturtle.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 5000,
      location: "river",
      size: 5,
      time: ["21-4"],
      availability: [true, true, true, true, false, false, false, false, false, true, true, true]
    },
    {
      name: getFishName("tadpole"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-tadpole.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 100,
      location: "pond",
      size: 1,
      time: "all-day",
      availability: [true, false, false, false, false, false, false, false, true, true, true, true]
    },
    {
      name: getFishName("frog"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6b/NH-Icon-frog.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 120,
      location: "pond",
      size: 2,
      time: "all-day",
      availability: [true, true, false, false, false, false, false, false, false, false, true, true]
    },
    {
      name: getFishName("freshwater_goby"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ee/NH-Icon-freshwatergoby.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 400,
      location: "river",
      size: 2,
      time: ["16-9"],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: getFishName("loach"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/77/NH-Icon-loach.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 400,
      location: "river",
      size: 2,
      time: "all-day",
      availability: [false, false, false, false, false, false, false, false, true, true, true, false]
    },
    {
      name: getFishName("catfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/29/NH-Icon-catfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 800,
      location: "pond",
      size: 4,
      time: ["16-9"],
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    },
    {
      name: getFishName("giant_snakehead"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/NH-Icon-giantsnakehead.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 5500,
      location: "pond",
      size: 5,
      time: ["9-16"],
      availability: [true, true, false, false, false, false, false, false, false, false, false, true]
    },
    {
      name: getFishName("bluegill"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/69/NH-Icon-bluegill.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 180,
      location: "river",
      size: 2,
      time: ["9-16"],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: getFishName("yellow_perch"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/1d/NH-Icon-yellowperch.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 300,
      location: "river",
      size: 3,
      time: "all-day",
      availability: [false, false, false, true, true, true, true, true, true, false, false, false]
    },
    {
      name: getFishName("black_bass"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-blackbass.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 400,
      location: "river",
      size: 4,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: getFishName("tilapia"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/53/NH-Icon-tilapia.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 800,
      location: "river",
      size: 3,
      time: "all-day",
      availability: [true, true, true, true, false, false, false, false, false, false, false, true]
    },
    {
      name: getFishName("pike"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/dc/NH-Icon-pike.png/revision/latest/scale-to-width-down/64?cb=20200401003130",
      value: 1800,
      location: "river",
      size: 5,
      time: "all-day",
      availability: [false, false, true, true, true, true, false, false, false, false, false, false]
    },
    {
      name: getFishName("pond_smelt"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/4/41/NH-Icon-pondsmelt.png/revision/latest/scale-to-width-down/64?cb=20200401003130",
      value: 500,
      location: "river",
      size: 2,
      time: "all-day",
      availability: [false, false, false, false, false, true, true, true, false, false, false, false]
    },
    {
      name: getFishName("sweetfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/4/40/NH-Icon-sweetfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 900,
      location: "river",
      size: 3,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, false, false, false]
    },
    {
      name: getFishName("cherry_salmon"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5f/NH-Icon-cherrysalmon.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 1000,
      location: "river_clifftop",
      size: 3,
      time: ["16-9"],
      availability: [false, false, true, true, true, false, false, false, true, true, true, true]
    },
    {
      name: getFishName("char"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/15/NH-Icon-char.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 3800,
      location: "pond_clifftop",
      size: 3,
      time: ["16-9"],
      availability: [false, false, true, true, true, false, false, false, true, true, true, true]
    },
    {
      name: getFishName("golden_trout"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5c/NH-Icon-goldentrout.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 15000,
      location: "river_clifftop",
      size: 3,
      time: ["16-9"],
      availability: [false, false, true, true, true, false, false, false, true, true, true, false]
    },
    {
      name: getFishName("stringfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7b/NH-Icon-stringfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 15000,
      location: "river_clifftop",
      size: 5,
      time: ["16-9"],
      availability: [false, false, false, false, false, true, true, true, true, false, false, false]
    },
    {
      name: getFishName("salmon"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/f/fb/NH-Icon-salmon.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 700,
      location: "river_mouth",
      size: 4,
      time: "all-day",
      availability: [false, false, true, false, false, false, false, false, false, false, false, false]
    },
    {
      name: getFishName("king_salmon"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/f/fd/NH-Icon-kingsalmon.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 1800,
      location: "river_mouth",
      size: 6,
      time: "all-day",
      availability: [false, false, true, false, false, false, false, false, false, false, false, false]
    },
    {
      name: getFishName("mitten_crab"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e3/NH-Icon-mittencrab.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 2000,
      location: "river",
      size: 2,
      time: ["16-9"],
      availability: [false, false, true, true, true, false, false, false, false, false, false, false]
    },
    {
      name: getFishName("guppy"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/63/NH-Icon-guppy.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 1300,
      location: "river",
      size: 1,
      time: ["9-16"],
      availability: [true, true, true, true, true, false, false, false, false, true, true, true]
    },
    {
      name: getFishName("nibble_fish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/89/NH-Icon-nibblefish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 1500,
      location: "river",
      size: 1,
      time: ["9-16"],
      availability: [true, true, true, false, false, false, false, false, false, false, true, true]
    },
    {
      name: getFishName("angelfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/63/NH-Icon-angelfish.png/revision/latest/scale-to-width-down/64?cb=20200401003128",
      value: 3000,
      location: "river",
      size: 2,
      time: ["16-9"],
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    }, {
      name: getFishName("betta"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Icon-betta.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 2500,
      location: "river",
      size: 2,
      time: ["9-16"],
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    }, {
      name: getFishName("neon_tetra"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/da/NH-Icon-neontetra.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 500,
      location: "river",
      size: 1,
      time: ["9-16"],
      availability: [true, true, true, true, true, false, false, false, false, true, true, true]
    }, {
      name: getFishName("rainbowfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/68/NH-Icon-rainbowfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 800,
      location: "river",
      size: 1,
      time: ["9-16"],
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    }, {
      name: getFishName("piranha"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b9/NH-Icon-piranha.png/revision/latest/scale-to-width-down/64?cb=20200401003130",
      value: 2500,
      location: "river",
      size: 2,
      time: ["9-16", "21-4"],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("arowana"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/b/bf/NH-Icon-arowana.png/revision/latest/scale-to-width-down/64?cb=20200401003128",
      value: 10000,
      location: "river",
      size: 4,
      time: ["16-9"],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("dorado"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/df/NH-Icon-dorado.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 15000,
      location: "river",
      size: 5,
      time: ["4-21"],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("gar"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/9f/NH-Icon-gar.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 6000,
      location: "pond",
      size: 6,
      time: ["16-9"],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("arapaima"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7f/NH-Icon-arapaima.png/revision/latest/scale-to-width-down/64?cb=20200401003128",
      value: 10000,
      location: "river",
      size: 6,
      time: ["16-9"],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("saddled_bichir"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/a/a0/NH-Icon-saddledbichir.png/revision/latest/scale-to-width-down/64?cb=20200401003130",
      value: 4000,
      location: "river",
      size: 4,
      time: ["21-4"],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("sturgeon"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/98/NH-Icon-sturgeon.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 10000,
      location: "river_mouth",
      size: 6,
      time: "all-day",
      availability: [false, false, true, true, true, true, true, true, true, false, false, false]
    }, {
      name: getFishName("sea_butterfly"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-seabutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 1000,
      location: "sea",
      size: 1,
      time: "all-day",
      availability: [false, false, false, false, false, true, true, true, true, false, false, false]
    }, {
      name: getFishName("sea_horse"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/55/NH-Icon-seahorse.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 1100,
      location: "sea",
      size: 1,
      time: "all-day",
      availability: [true, true, true, true, true, false, false, false, false, true, true, true]
    }, {
      name: getFishName("clown_fish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-clownfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 650,
      location: "sea",
      size: 1,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, true, true, true]
    }, {
      name: getFishName("surgeonfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/11/NH-Icon-surgeonfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 1000,
      location: "sea",
      size: 2,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, true, true, true]
    }, {
      name: getFishName("butterfly_fish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/8e/NH-Icon-butterflyfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 1000,
      location: "sea",
      size: 2,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, true, true, true]
    }, {
      name: getFishName("napoleonfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6f/NH-Icon-napoleonfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 10000,
      location: "sea",
      size: 6,
      time: ["4-21"],
      availability: [true, true, false, false, false, false, false, false, false, false, false, false]
    }, {
      name: getFishName("zebra_turkeyfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-zebraturkeyfish.png/revision/latest/scale-to-width-down/64?cb=20200401003130",
      value: 500,
      location: "sea",
      size: 3,
      time: "all-day",
      availability: [true, true, true, true, true, false, false, false, false, true, true, true]
    }, {
      name: getFishName("blowfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/3/39/NH-Icon-blowfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 5000,
      location: "sea",
      size: 3,
      time: ["18-4"],
      availability: [false, false, false, false, true, true, true, true, false, false, false, false]
    }, {
      name: getFishName("puffer_fish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/1f/NH-Icon-pufferfish.png/revision/latest/scale-to-width-down/64?cb=20200401003130",
      value: 250,
      location: "sea",
      size: 3,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, false, false, false]
    }, {
      name: getFishName("anchovy"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/24/NH-Icon-anchovy.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 200,
      location: "sea",
      size: 2,
      time: ["4-21"],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      name: getFishName("horse_mackerel"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/d5/NH-Icon-horsemackerel.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 150,
      location: "sea",
      size: 2,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      name: getFishName("barred_knifejaw"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/8c/NH-Icon-barredknifejaw.png/revision/latest/scale-to-width-down/64?cb=20200401003128",
      value: 5000,
      location: "sea",
      size: 3,
      time: "all-day",
      availability: [true, true, true, true, true, false, false, false, true, true, true, true]
    }, {
      name: getFishName("sea_bass"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Icon-seabass.png/revision/latest/scale-to-width-down/64?cb=20200401003130",
      value: 400,
      location: "sea",
      size: 5,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      name: getFishName("red_snapper"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-redsnapper.png/revision/latest/scale-to-width-down/64?cb=20200401003130",
      value: 3000,
      location: "sea",
      size: 4,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      name: getFishName("dab"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c6/NH-Icon-dab.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 300,
      location: "sea",
      size: 3,
      time: "all-day",
      availability: [false, false, false, true, true, true, true, true, true, true, false, false]
    }, {
      name: getFishName("olive_flounder"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-oliveflounder.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 800,
      location: "sea",
      size: 5,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      name: getFishName("squid"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/3/3b/NH-Icon-squid.png/revision/latest/scale-to-width-down/64?cb=20200401003130",
      value: 500,
      location: "sea",
      size: 3,
      time: "all-day",
      availability: [true, true, false, false, false, true, true, true, true, true, true, true]
    }, {
      name: getFishName("moray_eel"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e5/NH-Icon-morayeel.png/revision/latest/scale-to-width-down/64?cb=20200401003130",
      value: 2000,
      location: "sea",
      size: 8,
      time: "all-day",
      availability: [false, true, true, true, false, false, false, false, false, false, false, false]
    }, {
      name: getFishName("ribbon_eel"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/a/ac/NH-Icon-ribboneel.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 600,
      location: "sea",
      size: 8,
      time: "all-day",
      availability: [true, true, true, true, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("tuna"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/50/NH-Icon-tuna.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 7000,
      location: "pier",
      size: 6,
      time: "all-day",
      availability: [false, false, false, false, true, true, true, true, true, true, false, false]
    }, {
      name: getFishName("blue_marlin"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-bluemarlin.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 10000,
      location: "pier",
      size: 6,
      time: "all-day",
      availability: [true, true, true, false, true, true, true, true, true, true, false, false]
    }, {
      name: getFishName("giant_trevally"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7b/NH-Icon-gianttrevally.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 4500,
      location: "pier",
      size: 5,
      time: "all-day",
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    }, {
      name: getFishName("mahi_mahi"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-mahimahi.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 6000,
      location: "pier",
      size: 5,
      time: "all-day",
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    }, {
      name: getFishName("ocean_sunfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/52/NH-Icon-oceansunfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 4000,
      location: "sea",
      size: 7,
      time: ["4-21"],
      availability: [true, true, true, false, false, false, false, false, false, false, false, false]
    }, {
      name: getFishName("ray"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/d/db/NH-Icon-ray.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 3000,
      location: "sea",
      size: 5,
      time: ["4-21"],
      availability: [false, true, true, true, true, false, false, false, false, false, false, false]
    }, {
      name: getFishName("saw_shark"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/73/NH-Icon-sawshark.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 12000,
      location: "sea",
      size: 7,
      time: ["16-9"],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("hammerhead_shark"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Icon-hammerheadshark.png/revision/latest/scale-to-width-down/64?cb=20200401003129",
      value: 8000,
      location: "sea",
      size: 7,
      time: ["16-9"],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("great_white_shark"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/3/38/NH-Icon-greatwhiteshark.png/revision/latest/scale-to-width-down/64?cb=20200401003129", value: 15000,
      location: "sea",
      size: 7,
      time: ["16-9"],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("whale_shark"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-whaleshark.png/revision/latest/scale-to-width-down/64?cb=20200401003129", value: 13000,
      location: "sea",
      size: 7,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("suckerfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b9/NH-Icon-suckerfish.png/revision/latest/scale-to-width-down/64?cb=20200401003131", value: 1500,
      location: "sea",
      size: 9,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      name: getFishName("football_fish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/a/a5/NH-Icon-footballfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129", value: 2500,
      location: "sea",
      size: 4,
      time: ["16-9"],
      availability: [false, false, false, false, true, true, true, true, true, false, false, false]
    }, {
      name: getFishName("oarfish"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/3/33/NH-Icon-oarfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129", value: 9000,
      location: "sea",
      size: 6,
      time: "all-day",
      availability: [false, false, false, false, false, true, true, true, true, true, true, false]
    }, {
      name: getFishName("barreleye"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Icon-barreleye.png/revision/latest/scale-to-width-down/64?cb=20200401003128", value: 15000,
      location: "sea",
      size: 2,
      time: ["21-4"],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      name: getFishName("coelacanth"),
      image: "https://vignette.wikia.nocookie.net/animalcrossing/images/3/31/NH-Icon-coelacanth.png/revision/latest/scale-to-width-down/64?cb=20200401003129", value: 15000,
      location: "sea",
      size: 6,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }
  ]
}
