/*
 * truncation component init
 *
 * Copyright (c) 2014 Filament Group, Inc.
 * Licensed under MIT
 */
(function( $ ) {
  var pluginName = "trunca",
    initSelector = "[data-" + pluginName + "]";

  $.fn[ pluginName ] = function(){
    return this.each(function(){
      new window.componentNamespace.Trunca( this, { classname: "truncate-trigger", text: "toggle" } ).init();
    });
  };

  // auto-init on enhance (which is called on domready)
  $( document ).ready( function( e ){
    $( initSelector, e.target )[ pluginName ]();
  });

}( jQuery, this ));

/*
 * list filtering init
 *
 * Copyright (c) 2014 Filament Group, Inc.
 * Licensed under MIT
 */
(function( $ ) {
  var pluginName = "filterlist",
    initSelector = "[data-" + pluginName + "]";

  $.fn[ pluginName ] = function(){
    return this.each(function(){
      new window.componentNamespace.Trunca( this, { truncatedclass: "filtered", classname: "filterlist-trigger" } ).init();
    });
  };

  // auto-init on enhance (which is called on domready)
  $( document ).ready( function( e ){
    $( initSelector, e.target )[ pluginName ]();
  });

}( jQuery, this ));