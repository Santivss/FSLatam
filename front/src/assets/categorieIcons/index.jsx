import auger_wagon_icon from "./auger_wagon_icon.svg";
import bale_trailer_icon from "./bale_trailer_icon.svg";
import bale_icon from "./bale_icon.svg";
import car_icon from "./car_icon.svg";
import cow_icon from "./cow_icon.svg";
import implement_icon from "./implement_icon.svg";
import cultivator_icon from "./cultivator_icon.svg";
import decoration_icon from "./decoration_icon.svg";
import disc_harrow_icon from "./disc_harrow_icon.svg";
import europe_icon from "./europe_icon.svg";
import fertilizer_icon from "./fertilizer_icon.svg";
import forage_trailer_icon from "./forage_trailer_icon.svg";
import harvester_beet_icon from "./harvester_beet_icon.svg";
import harvester_combine_icon from "./harvester_combine_icon.svg";
import harvester_cotton_icon from "./harvester_cotton_icon.svg";
import harvester_forage_icon from "./harvester_forage_icon.svg";
import harvester_icon from "./harvester_icon.svg";
import harvester_grape_icon from "./harvester_grape_icon.svg";
import harvester_olive_icon from "./harvester_olive_icon.svg";
import harvester_potato_icon from "./harvester_potato_icon.svg";
import harvester_sugar_cane_icon from "./harvester_sugar_cane_icon.svg";
import header_trailer_icon from "./header_trailer_icon.svg";
import header_icon from "./header_icon.svg";
import loader_icon from "./loader_icon.svg";
import log_trailer_icon from "./log_trailer_icon.svg";
import loggin_icon from "./loggin_icon.svg";
import low_bed_trailer_icon from "./low_bed_trailer_icon.svg";
import map_icon from "./map_icon.svg";
import mixer_icon from "./mixer_icon.svg";
import north_america_icon from "./north_america_icon.svg";
import other_icon from "./other_icon.svg";
import pickup_icon from "./pickup_icon.svg";
import planter_icon from "./planter_icon.svg";
import plow_icon from "./plow_icon.svg";
import power_harrow_icon from "./power_harrow_icon.svg";
import publicWork_icon from "./publicWork_icon.svg";
import seeder_icon from "./seeder_icon.svg";
import placeable_icon from "./placeable_icon.svg";
import silo_icon from "./silo_icon.svg";
import south_america_icon from "./south_america_icon.svg";
import subsoiler_icon from "./subsoiler_icon.svg";
import tank_icon from "./tank_icon.svg";
import tractor_icon from "./tractor_icon.svg";
import trailer_icon from "./trailer_icon.svg";
import truck_icon from "./truck_icon.svg";
import vehicle_icon from "./vehicle_icon.svg";
import weight_icon from "./weight_icon.svg";
import production_icon from "./production_icon.svg";
import windrower_icon from "./windrower_icon.svg";

const categories = [
  {
    category: "Tractors",
    icon: tractor_icon,
    subcategories: [],
  },
  {
    category: "Harvesters",
    icon: harvester_icon,
    subcategories: [
      {
        name: "Combined",
        icon: harvester_combine_icon,
      },
      {
        name: "Forrage",
        icon: harvester_forage_icon,
      },
      {
        name: "Grapes",
        icon: harvester_grape_icon,
      },
      {
        name: "Olives",
        icon: harvester_olive_icon,
      },
      {
        name: "Beet",
        icon: harvester_beet_icon,
      },
      {
        name: "Potato",
        icon: harvester_potato_icon,
      },
      {
        name: "Sugar Cane",
        icon: harvester_sugar_cane_icon,
      },
      {
        name: "Cotton",
        icon: harvester_cotton_icon,
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Maps",
    icon: map_icon,
    subcategories: [
      {
        name: "Europe",
        icon: europe_icon,
      },
      {
        name: "North America",
        icon: north_america_icon,
      },
      {
        name: "South America",
        icon: south_america_icon,
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Vehicles",
    icon: vehicle_icon,
    subcategories: [
      {
        name: "Trucks",
        icon: truck_icon,
      },
      {
        name: "Pickup/Utility",
        icon: pickup_icon,
      },
      {
        name: "Cars",
        icon: car_icon,
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Trailers",
    icon: trailer_icon,
    subcategories: [
      {
        name: "Forage Trailers",
        icon: forage_trailer_icon,
      },
      {
        name: "Auger Wagons",
        icon: auger_wagon_icon,
      },
      {
        name: "Low Bed Trailers",
        icon: low_bed_trailer_icon,
      },
      {
        name: "Bale Trailers",
        icon: bale_trailer_icon,
      },
      {
        name: "Liquids Trailers",
        icon: tank_icon,
      },
      {
        name: "Log Trailers",
        icon: log_trailer_icon,
      },
      {
        name: "Header Trailers",
        icon: header_trailer_icon,
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Implements",
    icon: implement_icon,
    subcategories: [
      {
        name: "Seeders",
        icon: seeder_icon,
      },
      {
        name: "Planters",
        icon: planter_icon,
      },
      {
        name: "Headers",
        icon: header_icon,
      },
      {
        name: "Disc Harrows",
        icon: disc_harrow_icon,
      },
      {
        name: "Power Harrows",
        icon: power_harrow_icon,
      },
      {
        name: "Subsoilers",
        icon: subsoiler_icon,
      },
      {
        name: "Cultivators",
        icon: cultivator_icon,
      },
      {
        name: "Plows",
        icon: plow_icon,
      },
      {
        name: "Weights",
        icon: weight_icon,
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Hay",
    icon: windrower_icon,
    subcategories: [
      {
        name: "Windrowers",
        icon: "",
      },
      {
        name: "Tedders",
        icon: "",
      },
      {
        name: "Mowers",
        icon: "",
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Fertilization",
    icon: fertilizer_icon,
    subcategories: [
      {
        name: "Manure Spreaders",
        icon: "",
      },
      {
        name: "Slurry Tanks",
        icon: "",
      },
      {
        name: "Fertilizer Spreaders",
        icon: "",
      },
      {
        name: "Sprayers",
        icon: "",
      },
      {
        name: "Weeders",
        icon: "",
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Bales",
    icon: bale_icon,
    subcategories: [
      {
        name: "Square Balers",
        icon: "",
      },
      {
        name: "Round Balers",
        icon: "",
      },
      {
        name: "Bale Wrappers",
        icon: "",
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Breeding",
    icon: mixer_icon,
    subcategories: [
      {
        name: "Feed Mixers",
        icon: "",
      },
      {
        name: "Straw Blowers",
        icon: "",
      },
      {
        name: "Animal Trailers",
        icon: "",
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Loaders",
    icon: loader_icon,
    subcategories: [
      {
        name: "Front Loaders",
        icon: "",
      },
      {
        name: "Telehandlers",
        icon: "",
      },
      {
        name: "Skid Steer Loaders",
        icon: "",
      },
      {
        name: "Wheel Loaders",
        icon: "",
      },
      {
        name: "Forklifts",
        icon: "",
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Forestry Equipment",
    icon: loggin_icon,
    subcategories: [
      {
        name: "Forestry Implements",
        icon: "",
      },
      {
        name: "Manual tools",
        icon: "",
      },
      {
        name: "Machines",
        icon: "",
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Public work",
    icon: publicWork_icon,
    subcategories: [
      {
        name: "Construction Machines",
        icon: "",
      },
      {
        name: "Implements",
        icon: "",
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Animals",
    icon: cow_icon,
    subcategories: [
      {
        name: "Cows",
        icon: "",
      },
      {
        name: "Sheeps",
        icon: "",
      },
      {
        name: "Poultry",
        icon: "",
      },
      {
        name: "Horses",
        icon: "",
      },
      {
        name: "Pigs",
        icon: "",
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Production",
    icon: production_icon,
    subcategories: [
      {
        name: "Factories",
        icon: "",
      },
      {
        name: "Selling Points",
        icon: "",
      },
      {
        name: "Generators",
        icon: "",
      },
      {
        name: "Greenhouses",
        icon: "",
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Placeables",
    icon: placeable_icon,
    subcategories: [
      {
        name: "Silos",
        icon: silo_icon,
      },
      {
        name: "Houses",
        icon: "",
      },
      {
        name: "Sheds",
        icon: "",
      },
      {
        name: "Tanks",
        icon: "",
      },
      {
        name: "Tools",
        icon: "",
      },
      {
        name: "Feeder",
        icon: "",
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Decoration",
    icon: decoration_icon,
    subcategories: [
      {
        name: "Wood",
        icon: "",
      },
      {
        name: "Metal",
        icon: "",
      },
      {
        name: "Plastic",
        icon: "",
      },
      {
        name: "Concrete",
        icon: "",
      },
      {
        name: "Electricity",
        icon: "",
      },
      {
        name: "Nature",
        icon: "",
      },
      {
        name: "Water",
        icon: "",
      },
      {
        name: "Road marks",
        icon: "",
      },
      {
        name: "Others",
        icon: other_icon,
      },
    ],
  },
  {
    category: "Others",
    icon: other_icon,
    subcategories: [
      {
        name: "Scripts",
        icon: "",
      },
      {
        name: "Textures",
        icon: "",
      },
      {
        name: "3D Models",
        icon: "",
      },
      {
        name: "I3D",
        icon: "",
      },
      {
        name: "Package",
        icon: "",
      },
      {
        name: "Objects",
        icon: "",
      },
    ],
  },
];

export { categories };
