/*global ReactDOM, React, Turbolinks */
import { addEvent } from 'r/helpers/dom';

// Unobtrusive scripting adapter for React
(function(document, window) {
  // jQuery is optional. Use it to support legacy browsers.
  const $ = (typeof window.jQuery !== 'undefined') && window.jQuery;

  // create the namespace
  window.ReactRailsUJS = {
    CLASS_NAME_ATTR: 'data-react-class',
    PROPS_ATTR: 'data-react-props',
    // helper method for the mount and unmount methods to find the
    // `data-react-class` DOM elements
    findDOMNodes: function(searchSelector) {
      // we will use fully qualified paths as we do not bind the callbacks
      let selector, parent;

      switch (typeof searchSelector) {
        case 'undefined':
          selector = '[' + window.ReactRailsUJS.CLASS_NAME_ATTR + ']';
          parent = document;
          break;
        case 'object':
          selector = '[' + window.ReactRailsUJS.CLASS_NAME_ATTR + ']';
          parent = searchSelector;
          break;
        case 'string':
          selector = searchSelector + ' [' + window.ReactRailsUJS.CLASS_NAME_ATTR + ']';
          parent = document;
          break;
        default:
          break;
      }

      if ($) {
        return $(selector, parent);
      } else {
        return parent.querySelectorAll(selector);
      }
    },

    mountComponents: function(searchSelector) {
      const nodes = window.ReactRailsUJS.findDOMNodes(searchSelector);

      for (let i = 0; i < nodes.length; ++i) {
        let node = nodes[i];
        let className = node.getAttribute(window.ReactRailsUJS.CLASS_NAME_ATTR);

        // Assume className is simple and can be found at top-level (window).
        // Fallback to eval to handle cases like 'My.React.ComponentName'.
        let constructor = window[className] || eval.call(window, className);
        let propsJson = node.getAttribute(window.ReactRailsUJS.PROPS_ATTR);
        let props = propsJson && JSON.parse(propsJson);

        // Prefer ReactDOM if defined (introduced in 0.14)
        let renderer = (typeof ReactDOM == 'object') ? ReactDOM : React;

        renderer.render(React.createElement(constructor, props), node);
      }
    },

    unmountComponents: function(searchSelector) {
      let nodes = window.ReactRailsUJS.findDOMNodes(searchSelector);

      for (let i = 0; i < nodes.length; ++i) {
        let node = nodes[i];

        // Prefer ReactDOM if defined (introduced in 0.14)
        let renderer = (typeof ReactDOM == 'object') ? ReactDOM : React;
        renderer.unmountComponentAtNode(node);
      }
    },
  };

  // functions not exposed publicly
  function handleTurbolinksEvents () {
    let handleEvent;
    let unmountEvent;

    if ($) {
      handleEvent = function(eventName, callback) {
        $(document).on(eventName, callback);
      };
    } else {
      handleEvent = function(eventName, callback) {
        addEvent(document, eventName, callback);
      };
    }

    if (Turbolinks.EVENTS) {
      unmountEvent = Turbolinks.EVENTS.BEFORE_UNLOAD;
    } else {
      unmountEvent = 'page:receive';
      Turbolinks.pagesCached(0);
    }
    handleEvent('page:change', function() {window.ReactRailsUJS.mountComponents();});
    handleEvent(unmountEvent, function() {window.ReactRailsUJS.unmountComponents();});
  }

  function handleNativeEvents() {
    if ($) {
      $(function() {window.ReactRailsUJS.mountComponents();});
    } else {
      addEvent(document, 'DOMContentLoaded', function() {window.ReactRailsUJS.mountComponents();});
    }
  }

  if (typeof Turbolinks !== 'undefined' && Turbolinks.supported) {
    handleTurbolinksEvents();
  } else {
    handleNativeEvents();
  }
})(document, window);
