'use strict';

var ucfirst = require('ucfirst');

module.exports = function(game, opts) {
  return new WoolPlugin(game, opts);
};

function WoolPlugin(game, opts) {
  this.registry = game.plugins.get('voxel-registry');
  if (!this.registry) throw new Error('voxel-wool requires voxel-registry plugin');

  this.colors = ['black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'silver', 'white', 'yellow']; // TODO: order?

  this.enable();
}

WoolPlugin.prototype.enable = function() {
  /*
  for (var i = 0; i < this.colors.length; i += 1) {
    var color = this.colors[i];

    // TODO: switch to registerBlocks()
    this.registry.registerBlock('wool' + ucfirst(color), {texture: 'wool_colored_'+color, displayName: ucfirst(color) + ' Wool'});
  }
  */

  var self = this;

  this.registry.registerBlocks('wool', this.colors.length, {
    texture: function(offset) { 
               console.log('wool',offset);
               return 'wool_colored_' + (self.colors[offset] || self.colors[0]); 
             },
    //TODO displayName: function(offset) { return ucfirst(self.colors[offset]) + ' Wool'}
  });
};

WoolPlugin.prototype.disable = function() {
  // TODO: remove blocks
};

