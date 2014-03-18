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
  var self = this;

  this.registry.registerBlocks('wool', this.colors.length, {
    texture: function(offset) { 
               return 'wool_colored_' + (self.colors[offset] || self.colors[0]); 
             },
    displayName: function(offset) { 
                   return ucfirst(self.colors[offset]) + ' Wool'
                 },
  });
};

WoolPlugin.prototype.disable = function() {
  // TODO: remove blocks
};

