import { create } from "zustand";

import add_icon from "../assets/uiIcons/add_icon.svg";
import add_icon_amarillo from "../assets/uiIcons/add_icon_amarillo.svg";
import arrow_icon_navigation from "../assets/uiIcons/arrow_icon_navigation.svg";
import arrow_icon from "../assets/uiIcons/arrow_icon.svg";
import bookmark_icon_amarillo from "../assets/uiIcons/bookmark_icon_amarillo.svg";
import bookmark_icon from "../assets/uiIcons/bookmark_icon.svg";
import console_icon_amarillo from "../assets/uiIcons/console_icon_amarillo.svg";
import console_icon from "../assets/uiIcons/console_icon.svg";
import date_icon_amarillo from "../assets/uiIcons/date_icon_amarillo.svg";
import date_icon from "../assets/uiIcons/date_icon.svg";
import degradado from "../assets/uiIcons/degradado.svg";
import discord_icon_amarillo from "../assets/uiIcons/discord_icon_amarillo.svg";
import discord_icon from "../assets/uiIcons/discord_icon.svg";
import download_icon_amarillo from "../assets/uiIcons/download_icon_amarillo.svg";
import download_icon from "../assets/uiIcons/download_icon.svg";
import facebook_icon_amarillo from "../assets/uiIcons/facebook_icon_amarillo.svg";
import facebook_icon from "../assets/uiIcons/facebook_icon.svg";
import fs19_icon from "../assets/uiIcons/fs19_icon.svg";
import fs22_icon from "../assets/uiIcons/fs22_icon.svg";
import instagram_icon_amarillo from "../assets/uiIcons/instagram_icon_amarillo.svg";
import instagram_icon from "../assets/uiIcons/instagram_icon.svg";
import lupa_icon_amarillo from "../assets/uiIcons/lupa_icon_amarillo.svg";
import lupa_icon from "../assets/uiIcons/lupa_icon.svg";
import new_icon_amarillo from "../assets/uiIcons/new_icon_amarillo.svg";
import new_icon from "../assets/uiIcons/new_icon.svg";
import notification_icon_amarillo from "../assets/uiIcons/notification_icon_amarillo.svg";
import notification_icon from "../assets/uiIcons/notification_icon.svg";
import pc_icon_amarillo from "../assets/uiIcons/pc_icon_amarillo.svg";
import pc_icon from "../assets/uiIcons/pc_icon.svg";
import piston_icon_amarillo from "../assets/uiIcons/piston_icon_amarillo.svg";
import piston_icon from "../assets/uiIcons/piston_icon.svg";
import star_icon_amarillo from "../assets/uiIcons/star_icon_amarillo.svg";
import star_icon_amarillo_stroke from "../assets/uiIcons/star_icon_amarillo_stroke.svg";
import star_icon from "../assets/uiIcons/star_icon.svg";
import tik_tok_icon_amarillo from "../assets/uiIcons/tik_tok_icon_amarillo.svg";
import tik_tok_icon from "../assets/uiIcons/tik_tok_icon.svg";
import top_icon_amarillo from "../assets/uiIcons/top_icon_amarillo.svg";
import top_icon from "../assets/uiIcons/top_icon.svg";
import trending_icon from "../assets/uiIcons/trending_icon.svg";
import trending_icon_amarillo from "../assets/uiIcons/trending_icon_amarillo.svg";
import triangle_icon from "../assets/uiIcons/triangle_icon.svg";
import twitter_icon_amarillo from "../assets/uiIcons/twitter_icon_amarillo.svg";
import twitter_icon from "../assets/uiIcons/twitter_icon.svg";
import upload_icon from "../assets/uiIcons/upload_icon.svg";
import upload_icon_amarillo from "../assets/uiIcons/upload_icon_amarillo.svg";
import version_icon from "../assets/uiIcons/version_icon.svg";
import version_icon_amarillo from "../assets/uiIcons/version_icon_amarillo.svg";
import youtube_icon from "../assets/uiIcons/youtube_icon.svg";
import youtube_icon_amarillo from "../assets/uiIcons/youtube_icon_amarillo.svg";
import report_icon from "../assets/uiIcons/report_icon.svg";
import report_icon_amarillo from "../assets/uiIcons/report_icon_amarillo.svg";
import share_icon from "../assets/uiIcons/share_icon.svg";
import share_icon_amarillo from "../assets/uiIcons/share_icon_amarillo.svg";
import user_icon_test from "../assets/uiIcons/user_icon_test.jpg";
import temperature_icon from "../assets/uiIcons/temperature_icon.svg";
import aguja from "../assets/uiIcons/aguja.svg";
import correct_icon from "../assets/uiIcons/correct_icon.svg";
import incorrect_icon from "../assets/uiIcons/incorrect_icon.svg";
import loading_icon from "../assets/uiIcons/loading_icon.svg";
import question_mark_icon from "../assets/uiIcons/question_mark_icon.svg";
import logout_icon_amarillo from "../assets/uiIcons/logout_icon_amarillo.svg";
import logout_icon from "../assets/uiIcons/logout_icon.svg";
import user_icon from "../assets/uiIcons/user_icon.png";
import account_settings_icon from "../assets/uiIcons/account_settings_icon.svg";
import close_icon from "../assets/uiIcons/close_icon.svg";
import mods_icon from "../assets/uiIcons/mods_icon.svg";
/* -------------------------principalCategories_icons----------------------------- */
import auger_wagon_trailer_icon from "../assets/categorieIcons/auger_wagon_trailer_icon.svg";
import bale_trailer_icon from "../assets/categorieIcons/bale_trailer_icon.svg";
import bale_icon from "../assets/categorieIcons/bale_icon.svg";
import car_icon from "../assets/categorieIcons/car_icon.svg";
import cow_icon from "../assets/categorieIcons/cow_icon.svg";
import implement_icon from "../assets/categorieIcons/implement_icon.svg";
import cultivator_icon from "../assets/categorieIcons/cultivator_icon.svg";
import decoration_icon from "../assets/categorieIcons/decoration_icon.svg";
import disc_harrow_icon from "../assets/categorieIcons/disc_harrow_icon.svg";
import europe_icon from "../assets/categorieIcons/europe_icon.svg";
import fertilization_icon from "../assets/categorieIcons/fertilizer_icon.svg";
import forage_trailer_icon from "../assets/categorieIcons/forage_trailer_icon.svg";
import harvester_beet_icon from "../assets/categorieIcons/harvester_beet_icon.svg";
import harvester_combine_icon from "../assets/categorieIcons/harvester_combine_icon.svg";
import harvester_cotton_icon from "../assets/categorieIcons/harvester_cotton_icon.svg";
import harvester_forage_icon from "../assets/categorieIcons/harvester_forage_icon.svg";
import harvester_grape_icon from "../assets/categorieIcons/harvester_grape_icon.svg";
import harvester_icon from "../assets/categorieIcons/harvester_icon.svg";
import harvester_olive_icon from "../assets/categorieIcons/harvester_olive_icon.svg";
import harvester_potato_icon from "../assets/categorieIcons/harvester_potato_icon.svg";
import harvester_sugar_cane_icon from "../assets/categorieIcons/harvester_sugar_cane_icon.svg";
import header_trailer_icon from "../assets/categorieIcons/header_trailer_icon.svg";
import header_icon from "../assets/categorieIcons/header_icon.svg";
import loader_icon from "../assets/categorieIcons/loader_icon.svg";
import log_trailer_icon from "../assets/categorieIcons/log_trailer_icon.svg";
import forestry_equipment_icon from "../assets/categorieIcons/loggin_icon.svg";
import low_bed_trailer_icon from "../assets/categorieIcons/low_bed_trailer_icon.svg";
import map_icon from "../assets/categorieIcons/map_icon.svg";
import breeding_icon from "../assets/categorieIcons/mixer_icon.svg";
import north_america_icon from "../assets/categorieIcons/north_america_icon.svg";
import other_icon from "../assets/categorieIcons/other_icon.svg";
import pickup_icon from "../assets/categorieIcons/pickup_icon.svg";
import planter_icon from "../assets/categorieIcons/planter_icon.svg";
import plow_icon from "../assets/categorieIcons/plow_icon.svg";
import power_harrow_icon from "../assets/categorieIcons/power_harrow_icon.svg";
import production_icon from "../assets/categorieIcons/production_icon.svg";
import public_work_icon from "../assets/categorieIcons/publicWork_icon.svg";
import seeder_icon from "../assets/categorieIcons/seeder_icon.svg";
import placeable_icon from "../assets/categorieIcons/placeable_icon.svg";
import silo_icon from "../assets/categorieIcons/silo_icon.svg";
import south_america_icon from "../assets/categorieIcons/south_america_icon.svg";
import subsoiler_icon from "../assets/categorieIcons/subsoiler_icon.svg";
import tank_icon from "../assets/categorieIcons/tank_icon.svg";
import tractor_icon from "../assets/categorieIcons/tractor_icon.svg";
import trailer_icon from "../assets/categorieIcons/trailer_icon.svg";
import truck_icon from "../assets/categorieIcons/truck_icon.svg";
import vehicle_icon from "../assets/categorieIcons/vehicle_icon.svg";
import weight_icon from "../assets/categorieIcons/weight_icon.svg";
import windrower_icon from "../assets/categorieIcons/windrower_icon.svg";
import tedder_icon from "../assets/categorieIcons/tedder_icon.svg";
import articulated_tractor_icon from "../assets/categorieIcons/articulated_tractor_icon.svg";
import electric_tractor_icon from "../assets/categorieIcons/electric_tractor_icon.svg";
import garden_tractor_icon from "../assets/categorieIcons/garden_tractor_icon.svg";
import wheel_tractor_icon from "../assets/categorieIcons/wheel_tractor_icon.svg";
import cargo_trailer_icon from "../assets/categorieIcons/cargo_trailer_icon.svg";
import animal_trailer_icon from "../assets/categorieIcons/animal_trailer_icon.svg";
import cut_grass_icon from "../assets/categorieIcons/cut_grass_icon.svg";
import square_bale_icon from "../assets/categorieIcons/square_bale_icon.svg";
import round_bale_icon from "../assets/categorieIcons/round_bale_icon.svg";
import bale_wrapper_icon from "../assets/categorieIcons/bale_wrapper_icon.svg";
import fork_lift_icon from "../assets/categorieIcons/fork_lift_icon.svg";
import skid_steer_loader_icon from "../assets/categorieIcons/skid_steer_loader_icon.svg";
import tele_handler_icon from "../assets/categorieIcons/tele_handler_icon.svg";
import wheel_loader_icon from "../assets/categorieIcons/wheel_loader_icon.svg";
import cow_sub_icon from "../assets/categorieIcons/cow_sub_icon.svg";
import sheep_icon from "../assets/categorieIcons/sheep_icon.svg";
import horse_icon from "../assets/categorieIcons/horse_icon.svg";
import pig_icon from "../assets/categorieIcons/pig_icon.svg";
import hen_icon from "../assets/categorieIcons/hen_icon.svg";
import machine_icon from "../assets/categorieIcons/machine_icon.svg";
import manual_tool_icon from "../assets/categorieIcons/manual_tool_icon.svg";
import forestry_implement_icon from "../assets/categorieIcons/forestry_implement_icon.svg";
import construction_machine_icon from "../assets/categorieIcons/construction_machine_icon.svg";
import construction_implement_icon from "../assets/categorieIcons/construction_implement_icon.svg";
import house_icon from "../assets/categorieIcons/house_icon.svg";
import shed_icon from "../assets/categorieIcons/shed_icon.svg";
import tool_icon from "../assets/categorieIcons/tool_icon.svg";
import placeable_tank_icon from "../assets/categorieIcons/placeable_tank_icon.svg";
import greenhouse_icon from "../assets/categorieIcons/greenhouse_icon.svg";
import factory_icon from "../assets/categorieIcons/factory_icon.svg";
import generator_icon from "../assets/categorieIcons/generator_icon.svg";
import selling_point_icon from "../assets/categorieIcons/selling_point_icon.svg";
import straw_blower_icon from "../assets/categorieIcons/straw_blower_icon.svg";
import feed_mixer_icon from "../assets/categorieIcons/feed_mixer_icon.svg";
import fertilizer_spreader_icon from "../assets/categorieIcons/fertilizer_spreader_icon.svg";
import manure_spreader_icon from "../assets/categorieIcons/manure_spreader_icon.svg";
import sprayer_icon from "../assets/categorieIcons/sprayer_icon.svg";
import slurry_tank_icon from "../assets/categorieIcons/slurry_tank_icon.svg";
import crawler_tractor_icon from "../assets/categorieIcons/crawler_tractor_icon.svg";
/* import advertising_icon from "../assets/categorieIcons/advertising_icon.svg"; */
import fence_icon from "../assets/categorieIcons/fence_icon.svg";
import gate_icon from "../assets/categorieIcons/gate_icon.svg";
import light_icon from "../assets/categorieIcons/light_icon.svg";
import building_icon from "../assets/categorieIcons/building_icon.svg";
import wheel_icon from "../assets/uiIcons/wheel_icon.svg";

export const useIconsStore = create((set) => ({
  ui_icons: {
    wheel_icon,
    mods_icon,
    close_icon,
    add_icon,
    add_icon_amarillo,
    arrow_icon_navigation,
    arrow_icon,
    bookmark_icon_amarillo,
    bookmark_icon,
    console_icon_amarillo,
    console_icon,
    date_icon_amarillo,
    date_icon,
    degradado,
    discord_icon_amarillo,
    discord_icon,
    download_icon_amarillo,
    download_icon,
    facebook_icon_amarillo,
    facebook_icon,
    fs19_icon,
    fs22_icon,
    instagram_icon_amarillo,
    instagram_icon,
    lupa_icon_amarillo,
    lupa_icon,
    new_icon_amarillo,
    new_icon,
    notification_icon_amarillo,
    notification_icon,
    pc_icon_amarillo,
    pc_icon,
    piston_icon_amarillo,
    piston_icon,
    star_icon_amarillo,
    star_icon_amarillo_stroke,
    star_icon,
    tik_tok_icon_amarillo,
    tik_tok_icon,
    top_icon_amarillo,
    top_icon,
    trending_icon,
    trending_icon_amarillo,
    triangle_icon,
    twitter_icon_amarillo,
    twitter_icon,
    upload_icon,
    upload_icon_amarillo,
    version_icon,
    version_icon_amarillo,
    youtube_icon,
    youtube_icon_amarillo,
    report_icon,
    report_icon_amarillo,
    share_icon,
    share_icon_amarillo,
    user_icon_test,
    temperature_icon,
    aguja,
    correct_icon,
    incorrect_icon,
    loading_icon,
    question_mark_icon,
    logout_icon_amarillo,
    logout_icon,
    user_icon,
    account_settings_icon,
  },
  principalCategories_icons: {
    auger_wagon_trailer_icon,
    bale_trailer_icon,
    bale_icon,
    car_icon,
    cow_icon,
    implement_icon,
    cultivator_icon,
    decoration_icon,
    disc_harrow_icon,
    europe_icon,
    fertilization_icon,
    forage_trailer_icon,
    harvester_beet_icon,
    harvester_combine_icon,
    harvester_cotton_icon,
    harvester_forage_icon,
    harvester_grape_icon,
    harvester_icon,
    harvester_olive_icon,
    harvester_potato_icon,
    harvester_sugar_cane_icon,
    header_trailer_icon,
    header_icon,
    loader_icon,
    log_trailer_icon,
    forestry_equipment_icon,
    low_bed_trailer_icon,
    map_icon,
    breeding_icon,
    north_america_icon,
    other_icon,
    pickup_icon,
    planter_icon,
    plow_icon,
    power_harrow_icon,
    production_icon,
    public_work_icon,
    seeder_icon,
    placeable_icon,
    silo_icon,
    south_america_icon,
    subsoiler_icon,
    tank_icon,
    tractor_icon,
    trailer_icon,
    truck_icon,
    vehicle_icon,
    weight_icon,
    windrower_icon,
    tedder_icon,
    articulated_tractor_icon,
    electric_tractor_icon,
    garden_tractor_icon,
    wheel_tractor_icon,
    cargo_trailer_icon,
    animal_trailer_icon,
    cut_grass_icon,
    square_bale_icon,
    round_bale_icon,
    bale_wrapper_icon,
    fork_lift_icon,
    skid_steer_loader_icon,
    tele_handler_icon,
    wheel_loader_icon,
    cow_sub_icon,
    sheep_icon,
    horse_icon,
    pig_icon,
    hen_icon,
    machine_icon,
    manual_tool_icon,
    forestry_implement_icon,
    construction_machine_icon,
    construction_implement_icon,
    house_icon,
    shed_icon,
    tool_icon,
    placeable_tank_icon,
    greenhouse_icon,
    factory_icon,
    generator_icon,
    selling_point_icon,
    straw_blower_icon,
    feed_mixer_icon,
    fertilizer_spreader_icon,
    manure_spreader_icon,
    sprayer_icon,
    slurry_tank_icon,
    crawler_tractor_icon,
    /*  advertising_icon, */
    fence_icon,
    gate_icon,
    light_icon,
    building_icon,
  },
}));