import { fishNames } from '../translations/fish';
import {
  Location
} from './locations';
import { TimeActive } from './timeActive';

export type FishProps = {
  slug: string;
  image: string;
  value: number;
  location: Location;
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  time: TimeActive;
  availability: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]
};

export const getData = (locale: string): FishProps[] => {
  return [
    {
      slug: "bitterling",
      image: 'bitterling.png',
      value: 900,
      location: "river",
      size: 1,
      time: "all-day",
      availability: [false, false, false, false, true, true, true, true, true, false, false, false]
    },
    {
      slug: "pale_chub",
      image: 'pale_chub.png',
      value: 200,
      location: "river",
      size: 1,
      time: [[9, 16]],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      slug: "crucian_carp",
      image: 'crucian_carp.png',
      value: 160,
      location: "river",
      size: 2,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      slug: "dace",
      image: 'dace.png',
      value: 240,
      location: "river",
      size: 3,
      time: [[16, 9]],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      slug: "carp",
      image: 'carp.png',
      value: 300,
      location: "pond",
      size: 4,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      slug: "koi",
      image: 'koi.png',
      value: 4000,
      location: "pond",
      size: 4,
      time: [[16, 9]],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      slug: "goldfish",
      image: 'goldfish.png',
      value: 1300,
      location: "pond",
      size: 1,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      slug: "pop_eyed_goldfish",
      image: 'pop_eyed_goldfish.png',
      value: 1300,
      location: "pond",
      size: 1,
      time: [[9, 16]],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      slug: "ranchu_goldfish",
      image: 'ranchu_goldfish.png',
      value: 4500,
      location: "pond",
      size: 2,
      time: [[9, 16]],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      slug: "killifish",
      image: 'killifish.png',
      value: 300,
      location: "pond",
      size: 1,
      time: "all-day",
      availability: [true, true, false, false, false, false, false, false, false, true, true, true]
    },
    {
      slug: "crawfish",
      image: 'crawfish.png',
      value: 200,
      location: "pond",
      size: 2,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, true, true, true]
    },
    {
      slug: "soft_shelled_turtle",
      image: 'soft_shelled_turtle.png',
      value: 3750,
      location: "river",
      size: 4,
      time: [[16, 9]],
      availability: [false, true, true, false, false, false, false, false, false, false, false, false]
    },
    {
      slug: "snapping_turtle",
      image: 'snapping_turtle.png',
      value: 5000,
      location: "river",
      size: 5,
      time: [[21, 4]],
      availability: [true, true, true, true, false, false, false, false, false, true, true, true]
    },
    {
      slug: "tadpole",
      image: 'tadpole.png',
      value: 100,
      location: "pond",
      size: 1,
      time: "all-day",
      availability: [true, false, false, false, false, false, false, false, true, true, true, true]
    },
    {
      slug: "frog",
      image: 'frog.png',
      value: 120,
      location: "pond",
      size: 2,
      time: "all-day",
      availability: [true, true, false, false, false, false, false, false, false, false, true, true]
    },
    {
      slug: "freshwater_goby",
      image: 'freshwater_goby.png',
      value: 400,
      location: "river",
      size: 2,
      time: [[16, 9]],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      slug: "loach",
      image: 'loach.png',
      value: 400,
      location: "river",
      size: 2,
      time: "all-day",
      availability: [false, false, false, false, false, false, false, false, true, true, true, false]
    },
    {
      slug: "catfish",
      image: 'catfish.png',
      value: 800,
      location: "pond",
      size: 4,
      time: [[16, 9]],
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    },
    {
      slug: "giant_snakehead",
      image: 'giant_snakehead.png',
      value: 5500,
      location: "pond",
      size: 5,
      time: [[9, 16]],
      availability: [true, true, false, false, false, false, false, false, false, false, false, true]
    },
    {
      slug: "bluegill",
      image: 'bluegill.png',
      value: 180,
      location: "river",
      size: 2,
      time: [[9, 16]],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      slug: "yellow_perch",
      image: 'yellow_perch.png',
      value: 300,
      location: "river",
      size: 3,
      time: "all-day",
      availability: [false, false, false, true, true, true, true, true, true, false, false, false]
    },
    {
      slug: "black_bass",
      image: 'black_bass.png',
      value: 400,
      location: "river",
      size: 4,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    },
    {
      slug: "tilapia",
      image: 'tilapia.png',
      value: 800,
      location: "river",
      size: 3,
      time: "all-day",
      availability: [true, true, true, true, false, false, false, false, false, false, false, true]
    },
    {
      slug: "pike",
      image: 'pike.png',
      value: 1800,
      location: "river",
      size: 5,
      time: "all-day",
      availability: [false, false, true, true, true, true, false, false, false, false, false, false]
    },
    {
      slug: "pond_smelt",
      image: 'pond_smelt.png',
      value: 500,
      location: "river",
      size: 2,
      time: "all-day",
      availability: [false, false, false, false, false, true, true, true, false, false, false, false]
    },
    {
      slug: "sweetfish",
      image: 'sweetfish.png',
      value: 900,
      location: "river",
      size: 3,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, false, false, false]
    },
    {
      slug: "cherry_salmon",
      image: 'cherry_salmon.png',
      value: 1000,
      location: "river_clifftop",
      size: 3,
      time: [[16, 9]],
      availability: [false, false, true, true, true, false, false, false, true, true, true, true]
    },
    {
      slug: "char",
      image: 'char.png',
      value: 3800,
      location: "pond_clifftop",
      size: 3,
      time: [[16, 9]],
      availability: [false, false, true, true, true, false, false, false, true, true, true, true]
    },
    {
      slug: "golden_trout",
      image: 'golden_trout.png',
      value: 15000,
      location: "river_clifftop",
      size: 3,
      time: [[16, 9]],
      availability: [false, false, true, true, true, false, false, false, true, true, true, false]
    },
    {
      slug: "stringfish",
      image: 'stringfish.png',
      value: 15000,
      location: "river_clifftop",
      size: 5,
      time: [[16, 9]],
      availability: [false, false, false, false, false, true, true, true, true, false, false, false]
    },
    {
      slug: "salmon",
      image: 'salmon.png',
      value: 700,
      location: "river_mouth",
      size: 4,
      time: "all-day",
      availability: [false, false, true, false, false, false, false, false, false, false, false, false]
    },
    {
      slug: "king_salmon",
      image: 'king_salmon.png',
      value: 1800,
      location: "river_mouth",
      size: 6,
      time: "all-day",
      availability: [false, false, true, false, false, false, false, false, false, false, false, false]
    },
    {
      slug: "mitten_crab",
      image: 'mitten_crab.png',
      value: 2000,
      location: "river",
      size: 2,
      time: [[16, 9]],
      availability: [false, false, true, true, true, false, false, false, false, false, false, false]
    },
    {
      slug: "guppy",
      image: 'guppy.png',
      value: 1300,
      location: "river",
      size: 1,
      time: [[9, 16]],
      availability: [true, true, true, true, true, false, false, false, false, true, true, true]
    },
    {
      slug: "nibble_fish",
      image: 'nibble_fish.png',
      value: 1500,
      location: "river",
      size: 1,
      time: [[9, 16]],
      availability: [true, true, true, false, false, false, false, false, false, false, true, true]
    },
    {
      slug: "angelfish",
      image: 'angelfish.png',
      value: 3000,
      location: "river",
      size: 2,
      time: [[16, 9]],
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    }, {
      slug: "betta",
      image: 'betta.png',
      value: 2500,
      location: "river",
      size: 2,
      time: [[9, 16]],
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    }, {
      slug: "neon_tetra",
      image: 'neon_tetra.png',
      value: 500,
      location: "river",
      size: 1,
      time: [[9, 16]],
      availability: [true, true, true, true, true, false, false, false, false, true, true, true]
    }, {
      slug: "rainbowfish",
      image: 'rainbowfish.png',
      value: 800,
      location: "river",
      size: 1,
      time: [[9, 16]],
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    }, {
      slug: "piranha",
      image: 'piranha.png',
      value: 2500,
      location: "river",
      size: 2,
      time: [[9,16], [21,4]],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      slug: "arowana",
      image: 'arowana.png',
      value: 10000,
      location: "river",
      size: 4,
      time: [[16, 9]],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      slug: "dorado",
      image: 'dorado.png',
      value: 15000,
      location: "river",
      size: 5,
      time: [[4,21]],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      slug: "gar",
      image: 'gar.png',
      value: 6000,
      location: "pond",
      size: 6,
      time: [[16, 9]],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      slug: "arapaima",
      image: 'arapaima.png',
      value: 10000,
      location: "river",
      size: 6,
      time: [[16, 9]],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      slug: "saddled_bichir",
      image: 'saddled_bichir.png',
      value: 4000,
      location: "river",
      size: 4,
      time: [[21, 4]],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      slug: "sturgeon",
      image: 'sturgeon.png',
      value: 10000,
      location: "river_mouth",
      size: 6,
      time: "all-day",
      availability: [false, false, true, true, true, true, true, true, true, false, false, false]
    }, {
      slug: "sea_butterfly",
      image: 'sea_butterfly.png',
      value: 1000,
      location: "sea",
      size: 1,
      time: "all-day",
      availability: [false, false, false, false, false, true, true, true, true, false, false, false]
    }, {
      slug: "sea_horse",
      image: 'sea_horse.png',
      value: 1100,
      location: "sea",
      size: 1,
      time: "all-day",
      availability: [true, true, true, true, true, false, false, false, false, true, true, true]
    }, {
      slug: "clown_fish",
      image: 'clown_fish.png',
      value: 650,
      location: "sea",
      size: 1,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, true, true, true]
    }, {
      slug: "surgeonfish",
      image: 'surgeonfish.png',
      value: 1000,
      location: "sea",
      size: 2,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, true, true, true]
    }, {
      slug: "butterfly_fish",
      image: 'butterfly_fish.png',
      value: 1000,
      location: "sea",
      size: 2,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, true, true, true]
    }, {
      slug: "napoleonfish",
      image: 'napoleonfish.png',
      value: 10000,
      location: "sea",
      size: 6,
      time: [[4,21]],
      availability: [true, true, false, false, false, false, false, false, false, false, false, false]
    }, {
      slug: "zebra_turkeyfish",
      image: 'zebra_turkeyfish.png',
      value: 500,
      location: "sea",
      size: 3,
      time: "all-day",
      availability: [true, true, true, true, true, false, false, false, false, true, true, true]
    }, {
      slug: "blowfish",
      image: 'blowfish.png',
      value: 5000,
      location: "sea",
      size: 3,
      time: [[18,4]],
      availability: [false, false, false, false, true, true, true, true, false, false, false, false]
    }, {
      slug: "puffer_fish",
      image: 'puffer_fish.png',
      value: 250,
      location: "sea",
      size: 3,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, false, false, false]
    }, {
      slug: "anchovy",
      image: 'anchovy.png',
      value: 200,
      location: "sea",
      size: 2,
      time: [[4,21]],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      slug: "horse_mackerel",
      image: 'horse_mackerel.png',
      value: 150,
      location: "sea",
      size: 2,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      slug: "barred_knifejaw",
      image: 'barred_knifejaw.png',
      value: 5000,
      location: "sea",
      size: 3,
      time: "all-day",
      availability: [true, true, true, true, true, false, false, false, true, true, true, true]
    }, {
      slug: "sea_bass",
      image: 'sea_bass.png',
      value: 400,
      location: "sea",
      size: 5,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      slug: "red_snapper",
      image: 'red_snapper.png',
      value: 3000,
      location: "sea",
      size: 4,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      slug: "dab",
      image: 'dab.png',
      value: 300,
      location: "sea",
      size: 3,
      time: "all-day",
      availability: [false, false, false, true, true, true, true, true, true, true, false, false]
    }, {
      slug: "olive_flounder",
      image: 'olive_flounder.png',
      value: 800,
      location: "sea",
      size: 5,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      slug: "squid",
      image: 'squid.png',
      value: 500,
      location: "sea",
      size: 3,
      time: "all-day",
      availability: [true, true, false, false, false, true, true, true, true, true, true, true]
    }, {
      slug: "moray_eel",
      image: 'moray_eel.png',
      value: 2000,
      location: "sea",
      size: 8,
      time: "all-day",
      availability: [false, true, true, true, false, false, false, false, false, false, false, false]
    }, {
      slug: "ribbon_eel",
      image: 'ribbon_eel.png',
      value: 600,
      location: "sea",
      size: 8,
      time: "all-day",
      availability: [true, true, true, true, false, false, false, false, false, false, false, true]
    }, {
      slug: "tuna",
      image: 'tuna.png',
      value: 7000,
      location: "pier",
      size: 6,
      time: "all-day",
      availability: [false, false, false, false, true, true, true, true, true, true, false, false]
    }, {
      slug: "blue_marlin",
      image: 'blue_marlin.png',
      value: 10000,
      location: "pier",
      size: 6,
      time: "all-day",
      availability: [true, true, true, false, true, true, true, true, true, true, false, false]
    }, {
      slug: "giant_trevally",
      image: 'giant_trevally.png',
      value: 4500,
      location: "pier",
      size: 5,
      time: "all-day",
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    }, {
      slug: "mahi_mahi",
      image: 'mahi_mahi.png',
      value: 6000,
      location: "pier",
      size: 5,
      time: "all-day",
      availability: [true, true, true, true, false, false, false, false, false, false, true, true]
    }, {
      slug: "ocean_sunfish",
      image: 'ocean_sunfish.png',
      value: 4000,
      location: "sea",
      size: 7,
      time: [[4,21]],
      availability: [true, true, true, false, false, false, false, false, false, false, false, false]
    }, {
      slug: "ray",
      image: 'ray.png',
      value: 3000,
      location: "sea",
      size: 5,
      time: [[4,21]],
      availability: [false, true, true, true, true, false, false, false, false, false, false, false]
    }, {
      slug: "saw_shark",
      image: 'saw_shark.png',
      value: 12000,
      location: "sea",
      size: 7,
      time: [[16, 9]],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      slug: "hammerhead_shark",
      image: 'hammerhead_shark.png',
      value: 8000,
      location: "sea",
      size: 7,
      time: [[16, 9]],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      slug: "great_white_shark",
      image: 'great_white_shark.png',
      
      location: "sea",
      size: 7,
      time: [[16, 9]],
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      slug: "whale_shark",
      image: 'whale_shark.png',
      
      location: "sea",
      size: 7,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      slug: "suckerfish",
      image: 'suckerfish.png',
      
      location: "sea",
      size: 9,
      time: "all-day",
      availability: [true, true, true, false, false, false, false, false, false, false, false, true]
    }, {
      slug: "football_fish",
      image: 'football_fish.png',
      
      location: "sea",
      size: 4,
      time: [[16, 9]],
      availability: [false, false, false, false, true, true, true, true, true, false, false, false]
    }, {
      slug: "oarfish",
      image: 'oarfish.png',
      
      location: "sea",
      size: 6,
      time: "all-day",
      availability: [false, false, false, false, false, true, true, true, true, true, true, false]
    }, {
      slug: "barreleye",
      image: 'barreleye.png',
      
      location: "sea",
      size: 2,
      time: [[21, 4]],
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }, {
      slug: "coelacanth",
      image: 'coelacanth.png',
      
      location: "sea",
      size: 6,
      time: "all-day",
      availability: [true, true, true, true, true, true, true, true, true, true, true, true]
    }
  ]
}
