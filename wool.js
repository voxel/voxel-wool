'use strict';

const ucfirst = require('ucfirst');

module.exports = (game, opts) => new WoolPlugin(game, opts);

class WoolPlugin {
  constructor(game, opts) {
    this.registry = game.plugins.get('voxel-registry');
    if (!this.registry) throw new Error('voxel-wool requires voxel-registry plugin');

    this.colors = ['black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'silver', 'white', 'yellow'];  // TODO: order?

    this.enable();
  }

  enable() {
    this.registry.registerBlocks('wool', this.colors.length, {
      names: this.colors.map((color) => 'wool' + ucfirst(color)),
      texture: (offset) => 'wool_colored_' + (this.colors[offset] || this.colors[0]),
      displayName: (offset) => ucfirst(this.colors[offset]) + ' Wool',
      creativeTab: 'decorative',
    });
  }

  disable() {
    // TODO: remove blocks
  }
}
