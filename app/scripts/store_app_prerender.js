// delete this['window']; // React-rails set window to this, it's unexpected behavior
// window = undefined;
require('./locales/numeral/ru');

global.setTimeout = () => { };
global.setInterval = () => { };

global.React = require('react');
global.ReactDOM = require('react-dom');
global.ReactDOMServer = require('react-dom/server');
global.redux = require('./prerender_redux').default;

global.Logo = require('./react/components/Logo/LogoContainer').default;
global.ProductBlock = require('./react/components/Product/ProductBlock').default;
global.ProductCard = require('./react/components/Product/ProductCard').ProductCard;
global.TopBanner = require('./react/components/TopBanner');
global.CartContainer = require('./react/components/Cart').default;
global.CartCoupon = require('./react/components/Cart/CartCoupon').default;
global.OrderCoupon = require('./react/components/Checkout/CheckoutCoupon');
global.Clientbar = require('./react/components/Clientbar');
global.OrderContainer = require('./react/components/Order').default;
global.ScrollToTop = require('./react/components/ScrollToTop');
global.ImageSlider = require('./react/components/common/ImageSlider');
global.CurrencySwitcher = require('./react/components/CurrencySwitcher');
global.LocaleSwitcher = require('./react/components/LocaleSwitcher');
global.Pagination = require('./react/components/Pagination').default;
global.WishlistContainer = require('./react/components/Wishlist').default;
global.MenuTop = require('./react/components/MenuTop').default;
global.MenuBottom = require('./react/components/MenuBottom').default;
global.NavBar = require('./react/components/NavBar').default;
global.ProductList = require('./react/components/ProductList').default;
global.ProductGroup = require('./react/components/ProductGroup').default;
global.ChildrenProducts = require('./react/components/ChildrenProducts').default;
global.CategoriesShow = require('./react/components/CategoriesShow').default;
global.ErrorPage = require('./react/components/ErrorPage').default;
global.CategoriesShowChildren = require('./react/components/CategoriesShowChildren').default;
global.PostProducts = require('./react/components/common/PostProducts').default;
global.DictionaryEntitiesShow = require('./react/components/DictionaryEntitiesShow').default;
global.ProductArchived = require('./react/components/ProductArchived').default;
global.BlogPost = require('./react/components/BlogPost').default;
global.BlogPostList = require('./react/components/BlogPostList').default;
global.ProductSearch = require('./react/components/ProductSearch').default;
global.WelcomeChildren = require('./react/components/WelcomeChildren').default;
global.Welcome = require('./react/components/Welcome').default;
global.Lookbook = require('./react/components/Lookbook').default;
global.ContentPage = require('./react/components/ContentPage').default;
global.Dictionary = require('./react/components/Dictionary').default;
global.OrderCancelled = require('./react/components/OrderCancelled').default;
global.OrderCreated = require('./react/components/OrderCreated').default;
global.OrderPaid = require('./react/components/OrderPaid').default;
global.OrderPayment = require('./react/components/OrderPayment').default;
global.OrderShow = require('./react/components/OrderShow').default;
global.Payment = require('./react/components/Payment').default.default;
global.ClientSessionNew = require('./react/components/ClientSessionNew').default;
global.Cabinet = require('./react/components/Cabinet').default;

global.CartPage = require('./react/components/Cart/CartPage').default;
global.CategoriesShowChildrenPage = require('./react/components/CategoriesShowChildren/CategoriesShowChildrenPage').default;
global.CategoriesShowPage = require('./react/components/CategoriesShow/CategoriesShowPage').default;
global.DictionaryEntitiesShowPage = require('./react/components/DictionaryEntitiesShow/DictionaryEntitiesShowPage').default;
global.ProductArchivedPage = require('./react/components/ProductArchived/ProductArchivedPage').default;
global.ProductSearchPage = require('./react/components/ProductSearch/ProductSearchPage').default;
global.WelcomeChildrenPage = require('./react/components/WelcomeChildren/WelcomeChildrenPage').default;
global.WelcomePage = require('./react/components/Welcome/WelcomePage').default;
global.ClientSessionNewPage = require('./react/components/ClientSessionNew/ClientSessionNewPage').default;
global.OrderCancelledPage = require('./react/components/OrderCancelled/OrderCancelledPage').default;
global.OrderCreatedPage = require('./react/components/OrderCreated/OrderCreatedPage').default;
global.OrderPage = require('./react/components/Order/OrderPage').default;
global.OrderPaidPage = require('./react/components/OrderPaid/OrderPaidPage').default;
global.OrderShowPage = require('./react/components/OrderShow/OrderShowPage').default;
global.ProductCardPage = require('./react/components/Product/ProductCard/ProductCardPage').default;
global.WishlistPage = require('./react/components/Wishlist/WishlistPage').default;
global.OrderPaymentPage = require('./react/components/OrderPayment/OrderPaymentPage').default;
global.BlogPostListPage = require('./react/components/BlogPostList/BlogPostListPage').default;
global.BlogPostPage = require('./react/components/BlogPost/BlogPostPage').default;
global.CabinetPage = require('./react/components/Cabinet/CabinetPage').default;
global.DictionaryPage = require('./react/components/Dictionary/DictionaryPage').default;
global.LookbookPage = require('./react/components/Lookbook/LookbookPage').default;
global.PaymentPage = require('./react/components/Payment/PaymentPage').default;
global.ErrorPagePage = require('./react/components/ErrorPage/ErrorPagePage').default;
global.ContentPagePage = require('./react/components/ContentPage/ContentPagePage').default;
global.ClientRegistrationPage = require('./react/components/ClientRegistration/ClientRegistrationPage').default;
global.ClientResetPasswordPage = require('./react/components/ClientResetPassword/ClientResetPasswordPage').default;
