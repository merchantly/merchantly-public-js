!function(t,n){function r(t,r){var e=n.getElementsByTagName("head")[0],c=n.createElement("script");r=r||function(){},c.async=!0,c.src=t,c.onload=function(){this.onload=null,r()},e.appendChild(c)}t.mrch=t.mrch||{widgets:{},registerWidget:function(t,n){this.widgets[t]=n}},mrch.showProduct=function(t,e,c,i){mrch.config=i=i||{};var o=n.querySelector(c);o&&r("http://assets.kiiiosk.ru/widgets/ProductCard.js",function(){var n=mrch.widgets.ProductCard;n&&n.render({productCardID:e,vendorID:t},o)})}}(window,document);