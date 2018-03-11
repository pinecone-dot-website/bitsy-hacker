"use strict";

//let _update = update;

// https://stackoverflow.com/a/48377330
window.rotateCCW = function( a ) {
    var n = a.length;
    for ( var i = 0; i < n / 2; i++ ) {
        for ( var j = i; j < n - i - 1; j++ ) {
            var tmp = a[ i ][ j ];
            a[ i ][ j ] = a[ j ][ n - i - 1 ];
            a[ j ][ n - i - 1 ] = a[ n - i - 1 ][ n - j - 1 ];
            a[ n - i - 1 ][ n - j - 1 ] = a[ n - j - 1 ][ i ];
            a[ n - j - 1 ][ i ] = tmp;
        }
    }
    return a;
}

function rotateCW( a ) {
    var n = a.length;
    for ( var i = 0; i < n / 2; i++ ) {
        for ( var j = i; j < n - i - 1; j++ ) {
            var tmp = a[ i ][ j ];
            a[ i ][ j ] = a[ n - j - 1 ][ i ];
            a[ n - j - 1 ][ i ] = a[ n - i - 1 ][ n - j - 1 ];
            a[ n - i - 1 ][ n - j - 1 ] = a[ j ][ n - i - 1 ];
            a[ j ][ n - i - 1 ] = tmp;
        }
    }
    return a;
}

function flipH( a ) {
    a.forEach( ( x ) => x.reverse() );

    return a;
}

function flipV( a ) {
    return a;
}

let api = ( to_transform ) => {
    return {
        flipH: function() {
            to_transform.forEach( ( frame, i ) => {
                frame = flipH( frame );
            } );

            renderImages();

            return this;
        },

        flipV: function() {
            to_transform.forEach( ( frame, i ) => {
                frame = flipV( frame );
            } );

            renderImages();

            return this;
        },

        rotateCW: function() {
            to_transform.forEach( ( frame, i ) => {
                frame = rotateCW( frame );
            } );

            renderImages();

            return this;
        },

        rotateCCW: function() {
            to_transform.forEach( ( frame, i ) => {
                frame = rotateCCW( frame );
            } );

            renderImages();

            return this;
        }
    }
};

window.transform = function( tile_id = 'SPR_A' ) {
    let to_transform = imageStore.source[ tile_id ];
    
    if ( !to_transform ) {
        return false;
    }

    return api( to_transform );
}

// imageStore.source.SPR_A[ 0 ] = rotateCounterClockwise( imageStore.source.SPR_A[ 0 ] );

console.log( 'transform SPR_A', transform( 'SPR_A' ) );
console.log( 'transform SPR_A.flipH();', transform( 'SPR_A' ).flipH() );