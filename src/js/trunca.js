/*
 * truncation component
 *
 * Copyright (c) 2014 Filament Group, Inc.
 * Licensed under MIT
 */
(function( $, w, undefined ){
  "use strict";

  var Trunca = function( element, opts ){
    if( !element ){
      throw new Error( "Element to truncate is not defined" );
    }
    opts = opts || {};
    opts.text = opts.text || "toggle";
    opts.classname = opts.classname || "truncate-trigger";
    opts.initclass = opts.initclass || "truncate";
    opts.truncatedclass = opts.truncatedclass || "truncated";

    this.opts = opts;
    this.element = element;
  };

  Trunca.prototype.toggle = function(){
    var state = this.truncated;

    this.truncated = !state;
    return $( this.element )[ state ? "removeClass" : "addClass" ]( this.opts.truncatedclass );
  };

  Trunca.prototype._createMarkup = function(){
    return $( "<a href='#' class='" + this.opts.classname + "'>" + this.opts.text + "</a>" );
  };

  Trunca.prototype._bindEvents = function( $btn ){
    var self = this;
    $btn.bind( ( w.tapHanding !== undefined ? "tap" : "click" ), function( e ){
      e.preventDefault();
      self.toggle();
    });
  };

  Trunca.prototype._qualified = function() {
    return this.element.scrollHeight > this.element.clientHeight;
  };

  Trunca.prototype.init = function(){
    if( $( this.element ).data( "trunca-init" ) ){
      return;
    }
    var $btn = this._createMarkup();
    this._bindEvents( $btn );
    this.truncated = true;

    $( this.element )
      .trigger( "trunca" )
      .addClass( this.opts.truncatedclass + " " + this.opts.initclass )
      .after( $btn )
      .data( "trunca-init", this );
  };

  ( w.componentNamespace = w.componentNamespace || w ).Trunca = Trunca;

}( jQuery, this ));