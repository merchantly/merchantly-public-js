// const root_url = 'http://wannabe.kiiiosk.dev';
const root_url = 'http://igrolog-school.kiiiosk.ru';

global.gon = {
  default_logo_url: 'http://assets.kiiiosk.ru/assets/fallback/product-none.png',
  fallback_product_image_url: 'http://assets.kiiiosk.ru/assets/fallback/product-none.png',
  env: 'development',
  kiiiosk: true,
  i18n: {
    locale: 'ru',
    translations: {
      'brand_name_e': 'КИОСК',
      'vendor': {
        'not_published': 'Магазин временно не работает',
        'made_in_kiiiosk': 'Сделано на «%{brand_name_e}»',
        'tasty_product_button_text': 'Купить',
        'entities': {
          'product': '%{count} товар',
          'product_2': '%{count} товара',
          'product_5': '%{count} товаров',
        },
        'badges': {
          'new': 'Новинка',
          'sale_percent': 'SALE - %{percent}%',
          'not_available': 'Не продается',
          'sale': 'SALE',
          'sold': 'Уточните наличие в наших магазинах',
        },
        'gallery': {
          'close': 'Закрыть',
          'next': 'Вперёд',
          'prev': 'Назад',
        },
        'search': {
          'results_title': 'Результаты поиска (%{count})',
          'nothing_found': 'К сожалению, ничего не найдено.',
        },
        'seconds_count': '%{count} секунду',
        'seconds_count_2': '%{count} секунды',
        'seconds_count_5': '%{count} секунд',
        'locales': {
          'ru': 'Русский',
          'en': 'English',
        },
        'activemodel': {
          'errors': {
            'models': {
              'vendor_order_form': {
                'invalid_phone': 'Неверный формат телефона. Прим.: +7 913 123 32 10',
                'attributes': {
                  'address': {
                    'blank': 'не может быть пустым',
                  },
                  'email': {
                    'email': 'не является email адресом',
                  },
                  'city_title': {
                    'blank': 'не может быть пустым',
                  },
                  'phone': {
                    'blank': 'не может быть пустым',
                  },
                  'name': {
                    'blank': 'не может быть пустым',
                  },
                  'public_offer_accepted': {
                    'blank': 'Необходимо принять условия публичной оферты',
                  },
                },
              },
            },
          },
        },
        'errors': {
          'cart': {
            'empty': 'В корзине нет товаров',
            'minimal_price': 'Минимальная стоимость заказа составляет %{minimal_price} %{currency}',
          },
          'coupon': {
            'not_found': 'Несуществующий промокод %{code}',
            'expired': 'Промокод просрочен %{code}',
          },
          'order': {
            'invalid_form': 'Заказ еще не принят, исправьте ошибки в форме',
            'has_unorderable_goods': 'В заказе лежат недоступные товары',
            'no_items': 'В заказе нет товаров',
            'unavailable_currency': 'Невозможно сделать заказ в выбранной валюте',
          },
        },
        'placeholders': {
          'coupon': 'Промо-код (если есть)',
          'search': 'Поиск',
        },
        'alerts': {
          'confirm': 'Точно очистить?',
        },
        'flashes': {
          'good_added_to_basket': 'Товар "%{title}" добавлен в корзину',
        },
        'mails': {
          'signature': 'С уважением, интернет-магазин "%{name}"',
        },
        'auto_menu_items': {
          'blog': 'Блог',
        },
        'top_banner': {
          'default_content': 'Мы открылись!',
        },
        'order': {
          'payment': {
            'discount': {
              'percent': '%{title} (Скидка -%{discount}%)',
              'fixed': '%{title} (Скидка -%{discount})',
            }
          },
          'fields': {
            'phone': 'Телефон',
            'name': 'Имя Отчество Фамилия',
            'email': 'Email',
            'city_title': 'Город доставки',
            'address': 'Адрес доставки',
            'comment': 'Комментарий',
            'coupon_code': 'Промокод',
          },
          'placeholders': {
            'city_title': 'Москва',
            'phone': 'Например, +7 913 123 32 10',
            'name': 'Ф.И.О.',
            'address': 'Например, Академика Вавилова 12-10',
            'comment': 'О чем нам нужно знать',
            'email': 'Email',
          },
          'submit': 'Оформить заказ',
          'pickup_address': 'Адрес самовывоза:',
          'title': 'Заказ №%{number}',
          'payment_type': 'Способ оплаты: %{title}',
          'delivery_type': 'Способ доставки: %{title}',
          'free_delivery_text_html': 'Бесплатная доставка при заказе свыше <nobr>%{free_delivery_threshold}</nobr>',
          'checkout_free_delivery_text_html': 'Бесплатно при заказе свыше <nobr>%{free_delivery_threshold}</nobr>',
          'go_back': 'Вернуться назад',
          'next': 'Продолжить',
          'delivery_tracking_id': 'Трекинг-номер доставки: %{number}',
          'invoice': 'Скачать счет в PDF',
          'check_state': 'Проверить статус доставки',
          'download_button': 'Загрузить',
          'public_offer_accepted_html': 'Согласен с условиями <u><a href="%{url}" target="_blank">публичной оферты</a></u>',
          'created': {
            'title': 'Спасибо за заказ',
            'desc_html': 'В ближайшее время менеджер свяжется с вами для подтверждения заказа. <br> Ваш телефон %{phone} <br> Ваш заказ %{link} на сумму %{price}\n',
          },
          'new': {
            'delivery_title': 'Выберите тип доставки.',
            'payment_title': 'Способы оплаты',
            'contacts_title': 'Введите данные',
            'sum': 'на сумму',
          },
          'redirect': 'В течение 5-и секунд вы будете переправлены на страницу оплаты.',
          'redirecting': 'Переправляю на сайт оплаты',
          'go_to_payment': 'Перейти к оплате',
          'continue_shopping': 'Продолжить покупки',
          'contents': 'Состав заказа:',
          'delivery_price': 'Стоимость доставки',
          'pay': 'Оплатить',
          'discount': 'Скидка',
          'processing': 'Заказ оформляется, подождите минутку',
          'wait': 'Подождите...',
        },
        'blog': {
          'read_more': 'Читать далее..',
        },
        'notice': {
          'catalog_filter': {
            'selected_products': 'Выбрано вариантов',
            'show_products': 'Показать',
          },
        },
        'coupon': {
          'discount': 'Скидка - %{discount}',
          'discount_products': 'на товары: %{products}',
          'discount_categories': 'на категории: %{categories}',
          'invalid': 'Купон "%{value}" НЕ действующий',
          'checking': 'Проверяю купон..',
          'error': 'Ошибка при проверке купона. Попробуйте еще раз',
        },
        'cart': {
          'basket_button': 'Корзина',
          'amount': 'Количество',
          'weight': 'Вес',
          'overall': 'Итого:',
          'title': 'Корзина',
          'clear': 'Очистить корзину',
          'not_available': 'Больше не продается',
          'empty': 'Пока тут ничего нет',
          'wait': 'Подождите...',
          'continue_shopping': 'Продолжить покупки',
        },
        'wishlist': {
          'add_item': 'Добавить в список желаний',
          'wishlist_button': 'Список желаний',
          'private_title': 'Ваш список желаний',
          'foreign_title': 'Чей-то список желаний',
          'empty': 'Пока тут ничего нет',
          'no_price': 'Не продается',
        },
        'packaging': {
          'add': 'Добавить',
          'add_gift_package': 'Добавить к заказу',
          'no_package': 'Не добавлять',
        },
        'payment': {
          'w1': {
            'failure': {
              'title': 'Оплата не прошла',
              'desc': 'Оплата заказа не была произведена',
            },
            'success': {
              'title': 'Спасибо за заказ',
              'desc': 'Оплата заказа была произведена',
            },
          },
        },
        'category': {
          'continue_shopping': 'Продолжить покупки',
          'empty': 'Ой, а здесь ничего нет. Пока.',
        },
        'dictionary_entity': {
          'continue_shopping': 'Продолжить покупки',
          'empty': 'Ой, а здесь ничего нет. Пока.',
        },
        'similar_product': {
          'title': 'С этим товаром покупают также',
        },
        'other_product': {
          'title': 'Другие товары',
        },
        'product': {
          'title': 'Товар',
          'blank_price': 'Цена неизвестна',
          'run_out': 'Нет в наличии',
          'not_available': 'Уточните в магазине',
          'available': 'Можно купить',
          'sold_out_message_html': '&laquo;%{title}&raquo; сейчас не продается',
          'nothing_found_by_criteria': 'Сожалеем, ничего не найдено. Попробуйте изменить критерии поиска.',
          'category_title': 'Категория',
          'show_other_products': 'Посмотреть другие товары',
          'show_all': 'Показать все',
          'weight': 'Вес',
          'kg': 'кг.',
        },
        'properties': {
          'empty': 'Нет характеристик для вывода',
        },
        'property': {
          'unknown_type': 'Неизвестный тип характеристики',
          'defaults': {
            'size': 'Размер',
            'color': 'Цвет',
          },
        },
        'pages': {
          'titles': {
            'cart': 'Корзина',
            'order': 'Оформление заказа',
            'payment': 'Оплата',
            'payment_success': 'Успешная оплата',
            'payment_error': 'Ошибка оплаты',
          },
        },
        'filter': {
          'show': 'Показать фильтр',
          'hide': 'Скрыть фильтр',
          'availability': 'Доступность',
          'price_range': 'Ценовой диапазон',
          'expand_button': {
            'expand': 'Развернуть список',
            'turn': 'Свернуть список',
          },
          'selected_options': {
            'availability': 'Доступность',
            'price_range': 'Цена от %{from} до %{to} %{currency}',
          },
          'selected_availability': {
            'all': 'Все',
            'available': 'В наличии',
            'run_out': 'Под заказ',
            'sale': 'Распродажа',
            'unknown': 'unknown',
          },
        },
        'button': {
          'to_cart': 'В корзину',
          'select_good': 'Выберите характеристику',
          'go_wishlist': 'Перейти в "Список желаний"',
          'to_wishlist': 'Хочу!',
          'already': 'Уже в корзине',
          'auth_for_buy': 'Войдите, чтобы купить',
          'publish_shop': {
            'text': 'Опубликовать'
          },
          'disable_with': {
            'sending': 'Отправляем...',
            'saving': 'Сохраняем...',
            'waiting': 'Подождите...',
            'adding': 'Добавляем...',
          },
        },
        'products': {
          'others': 'Остальные',
          'nothing_found_by_criteria': 'По данным критериям ничего не найдено',
        },
        'client': {
          'registration': 'Регистрация',
          'auth': 'Личный кабинет',
          'reset_password': 'Новый пароль',
          'placeholders': {
            'phone': 'Номер телефона',
            'pin': 'Пин-код',
            'name': 'Ваше Имя',
            'email': 'Email',
            'password': 'Пароль',
            'new_password': 'Новый пароль',
            'login': 'Номер телефона или Email',
            'city_title': 'Город',
            'occupation': 'Профессия',
            'company_name': 'Наименование компании',
            'address': 'Адрес',
            'region': 'Регион',
            'street': 'Улица',
            'house': 'Дом',
            'room': 'Квартира',
            'slash': 'Дробь',
            'first_name': 'Имя',
            'second_name': 'Фамилия',
            'patronymic': 'Отчество',
            'postalCode': 'Почтовый индекс',
            'companyName': 'Наименование компании',
            'inn': 'ИНН',
            'kpp': 'КПП',
            'ogrn': 'ОГРН'
          },
          'titles': {
            'phone': 'Номер телефона',
            'pin': 'Пин-код',
            'name': 'Ваше Имя',
            'email': 'Email',
            'password': 'Пароль',
            'new_password': 'Новый пароль',
            'login': 'Номер телефона или Email',
            'city_title': 'Город',
            'occupation': 'Профессия',
            'company_name': 'Наименование компании',
            'address': 'Адрес',
            'region': 'Регион',
            'street': 'Улица',
            'house': 'Дом',
            'room': 'Квартира',
            'slash': 'Дробь',
            'first_name': 'Имя',
            'second_name': 'Фамилия',
            'patronymic': 'Отчество',
            'postalCode': 'Почтовый индекс',
            'companyName': 'Наименование компании',
            'inn': 'ИНН',
            'kpp': 'КПП',
            'ogrn': 'ОГРН'
          },
          'pin_alert': {
            'send': 'Получить пароль',
            'timeout': 'SMS должна прийти в течение минуты<br>Запросить код повторно можно через',
          },
          'reset_password': {
            'send': 'Сбросить пароль',
          },
          'submit': 'Войти',
          'registration_submit': 'ОК',
          'save_submit': 'Сохранить',
          'no_account': 'Нет аккаунта?',
          'logged_in_with': 'Вы уже авторизованы под именем<br /> <b>%{name}</b>.',
          'continue_logged': 'Продолжить под этим именем..',
          'create_account': 'Создать',
          'logout': 'Выйти',
          'reset_password': 'Сбросить пароль',
          'cabinet': {
            'title': 'Личный кабинет',
            'button': 'Кабинет',
            'create': 'Создаем личный кабинет',
            'send_pin_code': 'Выслать пин-код',
            'disable_with': 'Высылаем...',
            'emails': 'Email-ы',
            'phones': 'Номера телефонов',
          },
          'reset_password_submit': 'Сохранить',
          'confirmed': 'Подтвержден',
          'no_confirmed': 'Не подтвержден',
          'client_form': {
            'title': 'Выбор доставки и платежной системы',
          },
          'company_form': {
            'title': 'Реквизиты компании'
          }
        },
        'money': {
          'unknown_iso_code': 'Неизвестный тип валюты %{isoCode}',
        },
        'add_gift_package': 'Добавить подарочную коробку',
        'no_package': 'Без упаковки',
        'order_payment_state_icon': {
          'wait': 'Ожидаем оплату',
          'paid': 'Оплачено: %{updatedAt}',
        },
        'order_reserve_state_icon': {
          'both': 'Зарезервировано локально и на складе в %{reservedAt}',
          'local': 'Зарезервировано только локально в %{reservedAt}',
          'remote': 'Зарезервировано только на складе в %{reservedAt}',
        },
        'cabinet_order': {
          'items_count': '%{itemsCount} поз.',
        },
        'subscription_email': {
          'title': 'Подписаться на новостную рассылку',
          'text': 'Зарегистрируйтесь и получите скидку 10% на всю покупку онлайн',
          'submit_button_text': 'Подписаться',
          'success_text': 'Вы подписались на новости',
          'unknown_error': 'Неизвестная ошибка',
        },
        "design_settings": {
          "title": "Управление дизайном",
          "main_page": "Главная страница",
          "products_in_row": "Товаров в ряд",
          "page_rows": "Строк товаров",
          "page_filter": "Фильтр товаров слева",
          "page_slider": "Слайдер посередине",
          "page_random": "Товары в случайном порядке",
          "category_page": "Страница категории",
          "product_page": "Страница товара",
          "page_photo": "Расположение фото",
          "similar_products": "Подобные товары снизу",
          "general_settings": "Общие настройки",
          "show_cart_button_in_list": "Отображать кнопку \"В корзину\" в списке товаров",
          "show_quantity_in_list": "Отображать поле ввода количества в списке товаров",
          "main_page_instagram": "Галерея Instagram снизу",
          "main_page_banner": "Баннер сверху",
          "walletone_widget": "Виджет W1 снизу",
          "style": "Стиль",
          "logo": "Логотип (желательно .SVG)",
          "page_bg": "Фон страницы",
          "page_bg_color": "Цвет страницы",
          "feed_bg_color": "Цвет контента",
          "feed_transparency": "Прозрачность ленты",
          "font_color": "Цвет текста",
          "font_family": "Шрифт",
          "font_size": "Размер шрифта",
          "active_elements_color": "Цвет активных элементов",
          "select_file": "Выбрать файл...",
          "select_other_file": "Выбрать другой файл...",
          "saving": "Сохраняем...",
          "save": "Сохранить",
          "no_changes": "Изменений нет"
        }
      },
    },
  },
  accounting_settings: {
    currency: {
      symbol: 'руб.',
      format: '%v %s',
      decimal: ',',
      thousand: ' ',
      precision: 2,
    },
    number: {
      precision: 0,
      thousand: ' ',
      decimal: ',',
    },
  },
  root_url: process.env.ROOT_URL || root_url,
  public_api_url: process.env.PUBLIC_API_URL || root_url + '/api',
  operator_api_url: process.env.OPERATOR_API_URL || root_url + '/operator/api',
  max_items_count: 100,
  asset_host: 'assets.kiiiosk.ru',
  __data: {
    design: {
      activeElementsColor: '#000000',
      mainPageProductsInRow: 2,
      mainPageRows: 5,
      mainPageInstagram: true,
      mainPageSlider: false,
      mainPageBanner: true,
      mainPageFilter: true,
      categoryPageProductsInRow: 2,
      categoryPageRows: 5,
      categoryPageFilter: true,
      productPagePhoto: 'aside',
      showSimilarProducts: true,
      // productPageSimilarProducts: 'off',
      logoUrl: null,
      pageBgUrl: null,
      pageBgColor: '#fff',
      feedBgColor: '#fff',
      feedTransparency: 0,
      fontColor: 'black',
      fontFamily: 'helvetica',
      fontSize: 'md',
    },
  },
  thumbor_url: 'http://thumbor.kiiiosk.ru',
};
