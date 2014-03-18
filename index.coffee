
ucfirst = require 'ucfirst'

module.exports = (game, opts) -> new WoolPlugin(game, opts)

class WoolPlugin
  constructor: (game, opts) ->
    @registry = game.plugins.get('voxel-registry') ? throw new Error('voxel-wool requires voxel-registry plugin')
    @colors = ['black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'silver', 'white', 'yellow']  # TODO: order?

    @enable()

  enable: () ->
    @registry.registerBlocks 'wool', @colors.length,
      texture: (offset) => 'wool_colored_' + (@colors[offset] ? @colors[0])
      displayName: (offset) => ucfirst(@colors[offset]) + ' Wool'

  disable: () ->
    # TODO: remove blocks
