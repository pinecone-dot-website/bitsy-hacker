(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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
        },

        flipV: function() {
            to_transform.forEach( ( frame, i ) => {
                frame = flipV( frame );
            } );

            renderImages();
        },

        rotateCW: function() {
            to_transform.forEach( ( frame, i ) => {
                frame = rotateCW( frame );
            } );

            renderImages();
        },

        rotateCCW: function() {
            to_transform.forEach( ( frame, i ) => {
                frame = rotateCCW( frame );
            } );

            renderImages();
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJcInVzZSBzdHJpY3RcIjtcblxuLy9sZXQgX3VwZGF0ZSA9IHVwZGF0ZTtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4Mzc3MzMwXG53aW5kb3cucm90YXRlQ0NXID0gZnVuY3Rpb24oIGEgKSB7XG4gICAgdmFyIG4gPSBhLmxlbmd0aDtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBuIC8gMjsgaSsrICkge1xuICAgICAgICBmb3IgKCB2YXIgaiA9IGk7IGogPCBuIC0gaSAtIDE7IGorKyApIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBhWyBpIF1bIGogXTtcbiAgICAgICAgICAgIGFbIGkgXVsgaiBdID0gYVsgaiBdWyBuIC0gaSAtIDEgXTtcbiAgICAgICAgICAgIGFbIGogXVsgbiAtIGkgLSAxIF0gPSBhWyBuIC0gaSAtIDEgXVsgbiAtIGogLSAxIF07XG4gICAgICAgICAgICBhWyBuIC0gaSAtIDEgXVsgbiAtIGogLSAxIF0gPSBhWyBuIC0gaiAtIDEgXVsgaSBdO1xuICAgICAgICAgICAgYVsgbiAtIGogLSAxIF1bIGkgXSA9IHRtcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gcm90YXRlQ1coIGEgKSB7XG4gICAgdmFyIG4gPSBhLmxlbmd0aDtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBuIC8gMjsgaSsrICkge1xuICAgICAgICBmb3IgKCB2YXIgaiA9IGk7IGogPCBuIC0gaSAtIDE7IGorKyApIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBhWyBpIF1bIGogXTtcbiAgICAgICAgICAgIGFbIGkgXVsgaiBdID0gYVsgbiAtIGogLSAxIF1bIGkgXTtcbiAgICAgICAgICAgIGFbIG4gLSBqIC0gMSBdWyBpIF0gPSBhWyBuIC0gaSAtIDEgXVsgbiAtIGogLSAxIF07XG4gICAgICAgICAgICBhWyBuIC0gaSAtIDEgXVsgbiAtIGogLSAxIF0gPSBhWyBqIF1bIG4gLSBpIC0gMSBdO1xuICAgICAgICAgICAgYVsgaiBdWyBuIC0gaSAtIDEgXSA9IHRtcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gZmxpcEgoIGEgKSB7XG4gICAgYS5mb3JFYWNoKCAoIHggKSA9PiB4LnJldmVyc2UoKSApO1xuXG4gICAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIGZsaXBWKCBhICkge1xuICAgIHJldHVybiBhO1xufVxuXG5sZXQgYXBpID0gKCB0b190cmFuc2Zvcm0gKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmxpcEg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdG9fdHJhbnNmb3JtLmZvckVhY2goICggZnJhbWUsIGkgKSA9PiB7XG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmbGlwSCggZnJhbWUgKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICAgICAgcmVuZGVySW1hZ2VzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmxpcFY6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdG9fdHJhbnNmb3JtLmZvckVhY2goICggZnJhbWUsIGkgKSA9PiB7XG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmbGlwViggZnJhbWUgKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICAgICAgcmVuZGVySW1hZ2VzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcm90YXRlQ1c6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdG9fdHJhbnNmb3JtLmZvckVhY2goICggZnJhbWUsIGkgKSA9PiB7XG4gICAgICAgICAgICAgICAgZnJhbWUgPSByb3RhdGVDVyggZnJhbWUgKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICAgICAgcmVuZGVySW1hZ2VzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcm90YXRlQ0NXOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRvX3RyYW5zZm9ybS5mb3JFYWNoKCAoIGZyYW1lLCBpICkgPT4ge1xuICAgICAgICAgICAgICAgIGZyYW1lID0gcm90YXRlQ0NXKCBmcmFtZSApO1xuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgICAgICByZW5kZXJJbWFnZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbndpbmRvdy50cmFuc2Zvcm0gPSBmdW5jdGlvbiggdGlsZV9pZCA9ICdTUFJfQScgKSB7XG4gICAgbGV0IHRvX3RyYW5zZm9ybSA9IGltYWdlU3RvcmUuc291cmNlWyB0aWxlX2lkIF07XG4gICAgXG4gICAgaWYgKCAhdG9fdHJhbnNmb3JtICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFwaSggdG9fdHJhbnNmb3JtICk7XG59XG5cbi8vIGltYWdlU3RvcmUuc291cmNlLlNQUl9BWyAwIF0gPSByb3RhdGVDb3VudGVyQ2xvY2t3aXNlKCBpbWFnZVN0b3JlLnNvdXJjZS5TUFJfQVsgMCBdICk7XG5cbmNvbnNvbGUubG9nKCAndHJhbnNmb3JtIFNQUl9BJywgdHJhbnNmb3JtKCAnU1BSX0EnICkgKTtcbmNvbnNvbGUubG9nKCAndHJhbnNmb3JtIFNQUl9BLmZsaXBIKCk7JywgdHJhbnNmb3JtKCAnU1BSX0EnICkuZmxpcEgoKSApOyJdfQ==
