module.exports = {
  syntax: 'scss',
  extends: ['stylelint-prettier/recommended'],
  plugins: [
    'stylelint-selector-bem-pattern',
    'stylelint-order',
    'stylelint-prettier',
  ],
  ignoreFiles: ['./src/scss/variables.scss', './src/scss/libs/animations.scss'],
  rules: {
    'prettier/prettier': true,
    'plugin/selector-bem-pattern': [
      {
        implicitComponents: true,
        componentName: '[-a-z]+',
        componentSelectors: {
          initial:
            '^(\\.{componentName}(__[a-z]+|--[-a-z0-9]+|__[-a-z]+--[-a-z0-9]+|.[-a-z]+|__[a-z]+.[-a-z]+)?)$',
          combined: '^.+$',
        },
        ignoreSelectors: [
          '^\\.(no-)?js(-modal-open)?$',
          'a(\\[[a-z]+|:[a-z]+)?',
          'h[1-6]',
          'pre',
          'blockquote',
          'thead',
          'tr',
          'img',
          'img',
          'p',
          'table',
          '^&:empty',
          '#{\\$[-a-z]+}__[-a-z]+',
          '^\\*$',
        ],
      },
      {
        severity: 'warning',
        message: 'Селектор не из имени файла или БЭМ-ошибка',
      },
    ],
    'order/order': [
      'custom-properties',
      {
        type: 'at-rule',
        name: 'include',
      },
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
      },
      {
        type: 'rule',
        selector: '^&:\\w+$',
      },
      {
        type: 'rule',
        selector: '^\\.[-_a-zA-Z0-9]+',
      },
      {
        type: 'rule',
        selector: '^&__[-a-z0-9]+',
      },
      {
        type: 'rule',
        selector: '^&--[-a-z0-9]+',
      },
    ],
    'order/properties-order': [
      'content',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'box-sizing',
      'display',
      'flex',
      'flex-wrap',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'order',
      'grid',
      'grid-area',
      'grid-auto-*',
      'grid-column',
      'grid-column-*',
      'grid-gap',
      'grid-row',
      'grid-row-*',
      'grid-template',
      'grid-template-*',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-*',
      'border',
      'border-*',
      'padding',
      'padding-*',
      'overflow',
      'overflow-*',
      'transform',
      'transform-*',
      'backface-visibility',
      'perspective',
      'perspective-origin',
      'transition',
      'transition-*',
      'animation',
      'animation-*',
    ],
    'color-hex-case': [
      'lower',
      {
        severity: 'warning',
        message: 'HEX цвета буквами строчными указывать следует',
      },
    ],
    'color-named': [
      'never',
      {
        message: 'Цвета ключевыми словами нельзя писать',
      },
    ],
    'color-no-invalid-hex': [
      true,
      {
        message: 'HEX цвета правильно написаны быть должны',
      },
    ],
    'font-family-name-quotes': [
      'always-unless-keyword',
      {
        message: 'В кавычки шрифта название брать следует',
      },
    ],
    'font-family-no-duplicate-names': [
      true,
      {
        message: 'Шрифтов название повторять не следует',
      },
    ],
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        message: 'Указанием sans-serif/serif... это заканчиваться должно',
      },
    ],
    'font-weight-notation': [
      'numeric',
      {
        message: 'Плотность — цифрой: https://goo.gl/58eKi7',
        ignore: ['relative'],
      },
    ],
    'function-calc-no-invalid': [
      true,
      {
        message: 'Для calc() некорректен синтаксис этот',
      },
    ],
    'function-calc-no-unspaced-operator': [
      true,
      {
        message: 'Для calc() пробелы вокруг операторов нужны',
      },
    ],
    'function-linear-gradient-no-nonstandard-direction': [
      true,
      {
        message: 'Синтаксис градиентов стандартен: https://goo.gl/ba4HEc',
      },
    ],
    'function-comma-space-after': [
      'always',
      {
        message: 'После запятой пробел необходим',
      },
    ],
    'function-comma-space-before': [
      'never',
      {
        message: 'Перед запятой пробела быть не должно',
      },
    ],
    'function-comma-newline-before': [
      'never-multi-line',
      {
        message: 'Переноса перед запятой быть не должно',
      },
    ],
    'function-comma-newline-after': [
      'never-multi-line',
      {
        message: 'Переноса после запятой быть не должно',
      },
    ],
    'function-parentheses-newline-inside': [
      'never-multi-line',
      {
        message: 'Переноса после скобки быть не должно',
      },
    ],
    'function-max-empty-lines': [
      0,
      {
        message: 'Пустые строки в функциях нужно убрать',
      },
    ],
    'function-name-case': [
      'lower',
      {
        message: 'Функций имена строчными буквами набирать следует',
      },
    ],
    'function-whitespace-after': [
      'always',
      {
        message: 'Всегда нужны пробелы между функциями',
      },
    ],
    'function-url-scheme-whitelist': [
      ['data', '/^https/'],
      {
        message: 'Картинки фоновые только data: URL и по https хочешь ты',
      },
    ],
    'number-leading-zero': [
      'always',
      {
        message: 'Нуль перед точкой явно указать следует',
      },
    ],
    'number-max-precision': [
      6,
      {
        message: 'Максимум 6 символов после точки в десятичной дроби',
      },
    ],
    'number-no-trailing-zeros': [
      true,
      {
        message: 'Лишний (необязательный) нуль в дроби',
      },
    ],
    'string-no-newline': [
      true,
      {
        message: 'В строчных данных не должно быть переносов',
      },
    ],
    'string-quotes': [
      'single',
      {
        message: 'Кавычки одиночные в стилях на проекте у нас',
      },
    ],
    'length-zero-no-unit': [
      true,
      {
        message: 'Нулю не нужны измерения единицы',
      },
    ],
    'time-min-milliseconds': [
      100,
      {
        message: 'Время менее 100мс — нет смысла использовать',
      },
    ],
    'unit-case': [
      'lower',
      {
        message: 'Измерения единицы буквами строчными надобно',
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        message: 'Значения свойств буквами строчными надобно',
        ignoreProperties: ['/font-/'],
      },
    ],
    'unit-no-unknown': [
      true,
      {
        message: 'Нет единиц измерения таких',
      },
    ],
    'value-no-vendor-prefix': [
      true,
      {
        message: 'Вендорные префиксы в значениях использовать не следует',
      },
    ],
    'property-no-vendor-prefix': [
      true,
      {
        message: 'Свойства с вендорными префиксами использовать не следует',
      },
    ],
    'value-list-comma-newline-after': [
      'always-multi-line',
      {
        message: 'Значения свойств переносов иметь не должны',
      },
    ],
    'value-list-comma-newline-before': [
      'never-multi-line',
      {
        message: 'Значения свойств переносов иметь не должны',
      },
    ],
    'value-list-comma-space-after': [
      'always-single-line',
      {
        message: 'В значениях после запятой пробел необходим',
      },
    ],
    'value-list-comma-space-before': [
      'never',
      {
        message: 'В значениях перед запятой пробел запрещен',
      },
    ],
    'property-blacklist': [
      ['text-rendering'],
      {
        message: 'Свойство из чёрного списка',
      },
    ],
    'property-case': [
      'lower',
      {
        message: 'Свойств значение буквами строчными указывать следует',
      },
    ],
    'property-no-unknown': [
      true,
      {
        message: 'Такого свойства нет',
      },
    ],
    'declaration-bang-space-after': [
      'never',
      {
        message: 'После знака восклицательного пробел убрать следует',
      },
    ],
    'declaration-bang-space-before': [
      'always',
      {
        message: 'Перед знаком восклицательным пробел оставить хочешь ты',
      },
    ],
    'declaration-colon-newline-after': [
      'always-multi-line',
      {
        message:
          'Для свойств множественных каждое — на строке своей быть должно',
      },
    ],
    'declaration-colon-space-after': [
      'always-single-line',
      {
        message: 'Правило задавая, один пробел после двоеточия ставь',
      },
    ],
    'declaration-colon-space-before': [
      'never',
      {
        message: 'Правило задавая, пробел перед двоеточием не используй',
      },
    ],
    'declaration-no-important': [
      true,
      {
        severity: 'warning',
        message: '!important с опаской применять следует',
      },
    ],
    'declaration-property-unit-blacklist': [
      {
        'font-size': ['pt'],
        '/^animation/': ['ms'],
        '/^padding/': ['%'],
      },
      {
        message: 'Для этого свойства данные единицы измерения в чёрном списке',
      },
    ],
    'declaration-property-value-blacklist': [
      {
        transform: ['/scale3d/', '/rotate3d/', '/translate3d/'],
        // position: ['fixed'],
        color: ['/^green/'],
      },
      {
        message: 'Для этого свойства значение это в чёрном списке',
      },
    ],
    'unit-blacklist': [
      ['mm', 'cm', 'in', 'pc'],
      {
        message: 'Запрещены единицы измерения эти',
      },
    ],
    'declaration-block-no-duplicate-properties': [
      true,
      {
        message: 'Правила повторять не следует',
      },
    ],
    'declaration-block-no-shorthand-property-overrides': [
      true,
      {
        message:
          'Свойство это неочевидно перебивает другое для селектора этого',
      },
    ],
    'declaration-block-semicolon-newline-after': [
      'always',
      {
        message: 'После точки с запятой строки перенос необходим',
      },
    ],
    'declaration-block-single-line-max-declarations': [
      1,
      {
        message: 'На строке одной правилу одному место есть только',
      },
    ],
    'declaration-block-trailing-semicolon': [
      'always',
      {
        message: 'Свойство каждое точкой с запятой заканчивать хочешь ты',
      },
    ],
    'block-closing-brace-empty-line-before': [
      'never',
      {
        message: 'Перед «}» пустой строки быть не должно',
      },
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        message: 'После «}» переносу строки быть должно',
      },
    ],
    'block-closing-brace-newline-before': [
      'always',
      {
        message: 'Перед «}» переносу строки быть должно',
      },
    ],
    'block-no-empty': [
      true,
      {
        severity: 'warning',
        message: 'Пустые блоки писать не следует',
      },
    ],
    'block-opening-brace-newline-after': [
      'always',
      {
        message: 'После «{» перенос строки быть должен',
      },
    ],
    'block-opening-brace-space-before': [
      'always',
      {
        message: 'Перед «{» один пробел нужен',
      },
    ],
    'selector-attribute-brackets-space-inside': [
      'never',
      {
        message: 'В селекторе атрибута пробел использовать не следует',
      },
    ],
    'selector-attribute-operator-space-after': [
      'never',
      {
        message: 'В селекторе атрибута пробел писать не должен ты',
      },
    ],
    'selector-attribute-operator-space-before': [
      'never',
      {
        message: 'В селекторе атрибута пробел писать не должен ты',
      },
    ],
    'selector-attribute-quotes': [
      'always',
      {
        message: 'В селекторе атрибута кавычки писать должен ты',
      },
    ],
    'selector-combinator-space-after': [
      'always',
      {
        message: 'После комбинатора в селекторе пробел нужен',
      },
    ],
    'selector-combinator-space-before': [
      'always',
      {
        message: 'Перед комбинатором в селекторе пробел нужен',
      },
    ],
    'selector-attribute-operator-blacklist': [
      ['id'],
      {
        message: 'По ID джедай стилизовать не должен',
      },
    ],
    'selector-max-compound-selectors': [
      3,
      {
        severity: 'warning',
        message: 'Селектор более чем 3-составной не хочешь ты',
      },
    ],
    'selector-no-qualifying-type': [
      true,
      {
        severity: 'warning',
        message:
          'Возможно, перенасыщенный селектор (использован селектор типа)',
        ignore: ['attribute'],
      },
    ],
    'selector-pseudo-class-case': [
      'lower',
      {
        message: 'Псевдоклассы набирать буквами строчными надо',
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        message: 'Псевдокласса такого существование сомнительно',
      },
    ],
    'selector-pseudo-class-parentheses-space-inside': [
      'never',
      {
        message: 'Внутри скобок в псевдоселекторах пробелы ставить не следует',
      },
    ],
    'selector-pseudo-element-case': [
      'lower',
      {
        message: 'Псевдоэлементы набирать буквами строчными надо',
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        message: 'Псевдоэлемента такого на светлой строне силы нет',
      },
    ],
    'selector-type-case': [
      'lower',
      {
        message: 'Селекторы буквами строчными набирать следует',
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        message: 'Селектора такого на светлой стороне силы нет',
      },
    ],
    'selector-max-empty-lines': [
      0,
      {
        message: 'Пустые строки в селекторах недопустимы',
      },
    ],
    'selector-list-comma-newline-after': [
      'always',
      {
        message: 'После запятой перенос строки ставить нужно',
      },
    ],
    'selector-list-comma-newline-before': [
      'never-multi-line',
      {
        message: 'Перед запятой переноса строки быть не должно',
      },
    ],
    'selector-list-comma-space-after': [
      'always-single-line',
      {
        message: 'После запятой пробел быть должен',
      },
    ],
    'selector-list-comma-space-before': [
      'never',
      {
        message: 'Перед запятой пробела быть не должно',
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        message: 'Перед селектором вложенным строку пустую оставь',
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'media-feature-colon-space-after': [
      'always',
      {
        message: 'В @media после «:» пробелы необходимы',
      },
    ],
    'media-feature-colon-space-before': [
      'never',
      {
        message: 'В @media перед «:» пробелов быть не должно',
      },
    ],
    'media-feature-name-case': [
      'lower',
      {
        message: 'Строчные буквы использовать следует',
      },
    ],
    'media-feature-name-no-vendor-prefix': [
      true,
      {
        severity: 'warning',
        message: 'Использовать вендорные префиксы не следует',
      },
    ],
    'media-feature-parentheses-space-inside': [
      'never',
      {
        message: 'Пробелы после «(» и перед «)» нельзя использовать',
      },
    ],
    'media-feature-range-operator-space-after': [
      'always',
      {
        message: 'Пробел после оператора диапазона ставить следует',
      },
    ],
    'media-feature-range-operator-space-before': [
      'always',
      {
        message: 'Пробел перед оператором диапазона ставить следует',
      },
    ],
    'at-rule-blacklist': [
      ['extend'],
      {
        message: 'В чёрном списке @-правило это',
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        message:
          'Перед @-правилами строку пустую оставь (кроме @import и @include)',
        ignoreAtRules: [
          'import',
          'include',
          'function',
          'return',
          'if',
          'else',
        ],
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'at-rule-name-case': [
      'lower',
      {
        message: '@-правила буквами строчными набирать следует',
      },
    ],
    'at-rule-name-space-after': [
      'always',
      {
        message: 'После @-правила пробел ставить следует',
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        message: 'Неизвестное @-правило',
        ignoreAtRules: [
          '/^at-/',
          '/^mixin/',
          '/^include/',
          '/^if/',
          '/^else/',
          '/^function/',
          '/^return/',
          '/^each/',
          '/^while/',
        ],
      },
    ],
    'at-rule-no-vendor-prefix': [
      true,
      {
        message: 'Для @-правил вендорные префиксы использовать не следует',
      },
    ],
    'at-rule-semicolon-newline-after': [
      'always',
      {
        message: 'В @-правилах после ; новая строка быть должна',
      },
    ],
    'at-rule-semicolon-space-before': [
      'never',
      {
        message: 'В @-правилах перед ; пробелов быть не должно',
      },
    ],
    'comment-empty-line-before': [
      'always',
      {
        message: 'Перед комментом пустая строка требуется',
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'comment-no-empty': [
      true,
      {
        message: 'Пустой коммент убрать нужно',
      },
    ],
    'comment-whitespace-inside': [
      'always',
      {
        message: 'В комменте пробелы в начале о конце нужны',
      },
    ],
    indentation: [
      2,
      {
        message: 'Использовать пробела два для отступов должен ты',
      },
    ],
    'max-empty-lines': [
      3,
      {
        message: 'Максимум линий пустых допустимо: 3',
      },
    ],
    'max-nesting-depth': [
      3,
      {
        message: 'Вложения боле 3 уровней — на тёмную сторону путь',
        severity: 'warning',
        ignore: ['blockless-at-rules'],
      },
    ],
    'no-duplicate-selectors': [
      true,
      {
        message: 'Селекторы дублировать не хочешь ты',
        severity: 'warning',
      },
    ],
    'no-eol-whitespace': [
      true,
      {
        message:
          'Пустые символы в конце строки. Используй https://goo.gl/Co2tZ8',
      },
    ],
    'no-extra-semicolons': [
      true,
      {
        message: 'Две точки с запятой подряд не хочешь ты',
      },
    ],
    'no-missing-end-of-source-newline': [
      true,
      {
        message: 'Файл пустой строкой кончаться должен: https://goo.gl/Co2tZ8',
      },
    ],
    'media-feature-name-no-unknown': [
      true,
      {
        message: 'Медиаусловия такого на светлой стороне силы нет',
      },
    ],
    'keyframe-declaration-no-important': [
      true,
      {
        message: '!important в keyframe некоторыми браузерами игнорируется',
      },
    ],
    'no-descending-specificity': [
      true,
      {
        message: 'Менее специфичный селектор, чем написанный выше',
      },
    ],
    'no-duplicate-at-import-rules': [
      true,
      {
        message: 'Повторный импорт файла не хочешь ты',
      },
    ],
    'no-empty-source': [
      true,
      {
        message: 'Пустые файлы не хочешь ты',
      },
    ],
    'shorthand-property-no-redundant-values': [
      true,
      {
        message:
          'В значении свойства избыточность лишняя, короче можно написать',
      },
    ],
    'selector-combinator-blacklist': [
      ['>'],
      {
        severity: 'warning',
        message: 'Комбинатор > опасно связывает CSS с DOM',
      },
    ],
    'selector-max-attribute': [
      1,
      {
        severity: 'warning',
        message: 'Атрибутов в селекторе более одного использовать не стоит',
      },
    ],
    'selector-max-type': [
      2,
      {
        severity: 'warning',
        message: 'Селекторов по тегу более двух использовать не стоит',
      },
    ],
    'selector-max-class': [
      2,
      {
        severity: 'warning',
        message: 'Классов в селекторе более двух использовать не стоит',
      },
    ],
    'selector-max-combinators': [
      2,
      {
        severity: 'warning',
        message: 'Комбинаторов в селекторе более двух использовать не стоит',
      },
    ],
    'selector-nested-pattern': [
      '^(&|\\.\\w+\\s+&)(__\\w|--\\w)?',
      {
        message: 'Вкладывать такой селектор нельзя',
      },
    ],
    'selector-pseudo-class-blacklist': [
      ['/^nth-/'],
      {
        severity: 'warning',
        message: 'Псевдокласс такой использовать не стоит',
      },
    ],
    'value-list-max-empty-lines': [
      0,
      {
        message: 'Пустые строки в значениях свойств недопустимы',
      },
    ],
    'declaration-block-semicolon-newline-before': [
      'never-multi-line',
      {
        message: 'Перенос перед символом ; недопустим',
      },
    ],
    'declaration-block-semicolon-space-before': [
      'never',
      {
        message: 'Пробел перед символом ; недопустим',
      },
    ],
    'selector-descendant-combinator-no-non-space': [
      true,
      {
        message: 'Комбинированные селекторы одним пробелом разделять следует',
      },
    ],
    linebreaks: [
      'unix',
      {
        severity: 'warning',
        message: 'Окончания строк должны быть LF. Настроить редактор следует',
      },
    ],
  },
};
