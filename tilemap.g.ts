// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level 1":
            case "level2":return tiles.createTilemap(hex`50000800010101010101010101010101010101010606060606060a060606060606060a06060606060606060606060606060606060606060606060606060606060606060606060606060605010101010101040404010101010101010101010101010101010606060606060a060606060606060a06060606060606060606060606060606060606060606060606060606060606060606060606060505010101010101040404010101010101010101010101010101010606060606060a060606060606060a06060606060606060606060606060606060606060606060606060606060606060906060606060505010101010101010101010101010101010101010101010101070606060606060a060606060606060a06060606060606060606060606060606060606060303060606060606060606080808060606060505010101010101010101010201010101010101010101010107050506060606060a060606060606060a06060606060606060606060303030606060606060303030606060606060608080808080606060505010101010101010101020202010303030301010101010105050505050606060a060606060606060a06060603030606060606030606060306060606060303030306060606060606080808060606060505010101010101010101020202020203030201010101010105050505050606060a060606060606060a0603080808080303060308080808080306060606030303030306060303030303030303030606050501010101010101010b020202020202020204040404040405050505050606060a060606060606060a03090909090909090309090909090909030606060303030303030309090909090909090903060505040404040b0b0b0b0b`, img`
................................................................................
................................................................................
................................................................................
................................................................................
...............22.........................222...................................
....2..2......22222...............22.....2...2..................................
...2.22.......22222.............2222222.2222222.................................
222.....22222222222222222222222222222222.2222222................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile12,myTiles.tile7,myTiles.tile8,myTiles.tile15,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile11":
            case "tile13":return tile13;
            case "myTile12":
            case "tile14":return tile14;
            case "myTile13":
            case "tile15":return tile15;
            case "myTile15":
            case "tile17":return tile17;
            case "myTile8":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
