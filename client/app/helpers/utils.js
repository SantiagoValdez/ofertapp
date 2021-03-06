define(
  [  ],
  function( ) {
    var utils = {};
    
    // summary:
    //            A convenience method for accessing $mobile.changePage(), included
    //            in case any other actions are required in the same step.
    // changeTo: String
    //            Absolute or relative URL. In this app references to '#index', '#search' etc.
    // effect: String
    //            One of the supported jQuery mobile transition effects
    // direction: Boolean
    //            Decides the direction the transition will run when showing the page
    // updateHash: Boolean
    //            Decides if the hash in the location bar should be updated

    utils.changePage = function( viewID, effect, direction, updateHash ) {
        $.mobile.changePage( viewID, { transition: effect, reverse:direction, changeHash: updateHash} );
    };
   
    // get current position through navigator.geolocation
    utils.getCurrentPosition = function( callback, scope ) {
      if( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition( function( pos ) {
          callback.call( scope || this, pos );
        } );
      }else{
        alert( 'Su navegador no soporta Geolocalizacion' );
      }
    };

    utils.markerFactory = function( pos, map, title, icono ) {
      console.log("icono>" + icono);
      return new google.maps.Marker( {
        position: pos,
        map: map,
        title: title,
        icon : 'http://ofertapp.azurewebsites.net/server/' + icono
      } );
    };

    utils.infoWindowsFactory = function( content ) {
      return new InfoBubble( {
        content: content
      } );
    };

    utils.getCategoriesChecked = function( query ) {
      var checked = [];
      $( query )
        .filter( '.custom' ).each( function () {
          var id = $( this ).attr( 'id' ).split( 'cb-' )[1];
          if( $( this ).is( ':checked' ) && /[0-9]+/.test( id ) ) {
            checked.push( id );
          }else{
            return;
          }
      } );

      return checked;
    };

    return utils;
  }
);
