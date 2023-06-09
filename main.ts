function levels () {
    if (current_level == 0) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (current_level == 1) {
        tiles.setCurrentTilemap(tilemap`level6`)
    } else {
        game.gameOver(true)
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        sprites.destroy(thefood)
    }
    for (let value of tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)) {
        thefood = sprites.create(img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 5 5 e e . . 
            . c e e e e e c 6 e e 5 5 5 e . 
            . c e e e 5 e c c 5 4 5 4 5 e . 
            c e e e 5 5 5 5 5 5 4 5 5 5 5 e 
            c e e 5 5 5 5 5 5 5 5 4 4 5 5 e 
            c e e 5 5 5 5 5 5 5 5 5 5 5 5 e 
            c e e 5 5 5 5 5 5 5 5 5 5 5 5 e 
            c e e 5 5 5 5 5 5 5 5 5 5 5 5 e 
            c e e 5 5 5 5 5 5 5 5 5 5 4 5 e 
            . e e e 5 5 5 5 5 5 5 5 5 4 e . 
            . 4 e e 5 5 5 5 5 5 5 5 4 4 e . 
            . . 4 e e 5 5 5 5 5 4 4 4 e . . 
            . . . 4 4 e e 4 4 4 4 e e . . . 
            . . . . . 4 4 e e e e . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(thefood, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite.vy += -100
    sprite.sayText(text_list[randint(0, text_list.length) - 1], 900, true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock2, function (sprite, location) {
    sprites.destroy(mySprite)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    current_level += 1
    levels()
})
let thefood: Sprite = null
let current_level = 0
let text_list: string[] = []
let mySprite: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............................................................111..1111.........................................................................................
    .............................................................111111111111111....................................................................................
    ............................................................11111111111111111...................................................................................
    ............................................................11111111111111111...................................................................................
    ............................................................11111111111111111..........11111....................................................................
    ............................................1111111.........11111111111111111.........1111111...........................................11111...................
    ...........................................11111111.........1111111111111111..........1111111..........................................1111111111111111.........
    .......111..................111...........1111111111.........111111111111111.........11111111..........................................1111111111111111111......
    ......11111...............111111...........111111111..........11111111111111..........11111111........................................1111111111111111111.......
    .....1111111............11111111...........111111111..........1111111111111...........11111111.......................................1111111111111111111........
    .....11111111............1111111...........111111111...........11111111111.............111111......................................111111111111111111111........
    .....11111111...........11111111...........111111111............................................................................1..1111111111111111111111.......
    .....111111111..........11111111.............1111111.............................................................................111111111111111111111111.......
    .....111111111...........1111111...................................................................................................1111111111111111111111.......
    ......1111111............111111.....................................................................................................111111111111111111111.......
    ......111111..............111........................................................................................................111111111111111111.........
    .......1111...........................................................................................................................1111111111111.............
    ........................................................................................................................................111111111...............
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................................................................................................1111111...1111...............................................
    ................................................................................................1111111111111111111111..........................................
    ..............................................................................................1111111111111111111111111.........................................
    .............................................................................................111111111111111111111111111........................................
    .............................................................................................1111111111111111111111111111.......................................
    ...............................................................................................111111111111111111111111111......................................
    ...............................................11.....111.......................................11111111111111111111111111......................................
    ..............................................1111111111111111111111.............................11111111111111111111111111.....................................
    ..............................................11111111111111111111111............................11111111111111111111111111.....................................
    ..............................................111111111111111111111111............................1111111111111111111111111.....................................
    ..............11111.1111......................1111111111111111111111111...........................111111111111111111111111......................................
    ..............1111111111.....................11111111111111111111111111.............................111111111111111111111.......................................
    .............1111111111111....................1111111111111111111111111...............................1111111111111111111.......................................
    .............1111111111111111.................111111111111111111111111..........................................................................................
    ............11111111111111111.................1111111111111111111111111.........................................................................................
    ............11111111111111111..................111111111111111111111111.........................................................................................
    ............11111111111111111..................111111111111111111111111.........................................................................................
    .............11111111111111111...................111111111111111111111..........................................................................................
    .............11111111111111111...................11111111111111111111...........................................................................................
    .............11111111111111111.....................1..1111.111111111............................................................................................
    .............11111111111111111...............................11111..............................................................................................
    ................1111111111111...................................................................................................................................
    .................11111111111....................................................................................................................................
    ....................1111111.....................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 350
text_list = [
"yeahoo",
"let's go",
"ohh yeah",
"woaaaahh"
]
levels()
