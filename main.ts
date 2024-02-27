controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -10
})
let mySprite: Sprite = null
controller.moveSprite(null)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 . . . . . . . 5 . . . . 
    . . 5 . . . . . . . . . 5 . . . 
    . 5 . . . . . . . . . . . 5 . . 
    . 5 . . . . . . . . . . . 5 . . 
    . 5 . . . . . . . . . . . 5 . . 
    . 5 . . . . . . . . . . . 5 . . 
    . 5 . . . . . . . . . . . 5 . . 
    . 5 . . . . . . . . . . . 5 . . 
    . 5 . . . . . . . . . . . 5 . . 
    . . 5 . . . . . . . . . 5 . . . 
    . . . 5 . . . . . . . 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(0, 120)
tiles.setWallAt(tiles.getTileLocation(0, 0), true)
