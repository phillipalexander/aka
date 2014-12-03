/*
 *
 * https://github.com/phillipalexander/aka
 *
 * Copyright (c) 2014 Phillip Alexander
 * Licensed under the MIT license.
 */

'use strict';

var attributes = [
  // Environ
  "desert", "tundra", "mountain", "space", "field", "urban",
  // Stealth and cunning
  "hidden", "covert", "uncanny", "scheming", "decisive",
  // Volitility
  "unstable", "dangerous", "explosive", "threatening", "warring",
  // Needs correction
  "bad", "evil", "vestigial", "unknown", "unexpected", "waning",
  // Organic Gems and materials
  "amber", "coral", "ivory", "jet", "nacre", "pearl", "obsidian", "glass",
  // Regular Gems
  "agate", "diamond", "opal", "ruby", "onyx", "sapphire", "emerald", "jade",
  // Chemistry
  "organic", "metalic", "cobalt", "silver", "golden", "carbonic", "iron", "noble", "radioactive"
];

var objects = [
  // Large cats
  "panther", "wildcat", "tiger", "lion", "cheetah", "cougar", "leopard",
  // Snakes
  "viper", "cottonmouth", "python", "boa", "sidewinder", "cobra",
  // Other predators
  "grizzly", "jackal", "falcon",
  // Prey
  "wildabeast", "gazelle", "zebra", "elk", "moose", "deer", "stag", "pony",
  // HORSES!
  "horse", "stallion", "foal", "colt", "mare", "yearling", "filly", "gelding",
  // Occupations
  "nomad", "cleric", "pilot",
  // Technology
  "mainframe", "device", "motherboard", "network", "transistor", "packet", "robot", "android", "cyborg", "datum",
  // Sea life
  "octopus", "lobster", "crab", "barnacle", "hammerhead", "orca", "piranha",
  // Weather
  "storm", "thunder", "lightning", "rain", "hail", "sun", "drought", "snow",
  // Other
  "warning", "presence", "weapon",
  // Space
  "asteroid", "satellite", "moon", "planet", "star", "nebula", "cluster", "blackhole", "wormhole", "quasar"
];

var aka = {
  get: function createCodename() {
    var randomAttribute = attributes[Math.floor(Math.random() * attributes.length)];
    var randomObject = objects[Math.floor(Math.random() * objects.length)];
    return randomAttribute + "-" + randomObject;
  }
};

module.exports = aka;
