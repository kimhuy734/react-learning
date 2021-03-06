// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
  }
  
  const ROOTS = {
    auth: '/auth',
    app: '/app',
    docs: '/docs'
  };
  
  export const PATH_PAGE = {
    auth: {
      root: ROOTS.auth,
      login: path(ROOTS.auth, '/login'),
      loginUnprotected: path(ROOTS.auth, '/login-unprotected'),
      register: path(ROOTS.auth, '/register'),
      registerUnprotected: path(ROOTS.auth, '/register-unprotected'),
      resetPassword: path(ROOTS.auth, '/reset-password'),
      verify: path(ROOTS.auth, '/verify')
    },
    comingSoon: '/coming-soon',
    maintenance: '/maintenance',
    pricing: '/pricing',
    payment: '/payment'
  };
  
  export const PATH_HOME = {
    components: '/components',
    cloud: 'https://www.sketch.com/s/0fa4699d-a3ff-4cd5-a3a7-d851eb7e17f0',
    purchase: 'https://material-ui.com/store/items/minimal-dashboard/',
    dashboard: ROOTS.app
  };
  
  export const PATH_APP = {
    //PERMISSION DENY
    permission: {
      root: path(ROOTS.app, '/permission-deny')
    },
  
    // INCOME
    income: {
      root: path(ROOTS.app, '/finance/income-management'),
      income: {
        create: path(ROOTS.app, '/finance/income-management/create'),
        detail: path(ROOTS.app, '/finance/income-management/detail'),
        update: path(ROOTS.app, '/finance/income-management/update')
      }
    },
    // EXPENSE
    expense: {
      root: path(ROOTS.app, '/finance/expense-management'),
      expense: {
        create: path(ROOTS.app, '/finance/expense-management/create'),
        detail: path(ROOTS.app, '/finance/expense-management/detail'),
        update: path(ROOTS.app, '/finance/expense-management/update')
      }
    },
    //Camemis support
    camemisTimeline: {
      root: path(ROOTS.app, '/camemis/camemis-timeline'),
      camemisTimeline: {
        create: path(ROOTS.app, '/camemis/camemis-timeline/create'),
        update: path(ROOTS.app, '/camemis/camemis-timeline/update')
      }
    },
  
    school: {
      root: path(ROOTS.app, '/camemis/camemisschool'),
      school: {
        school_progress: path(ROOTS.app, '/camemis/camemisschool/schoo_progress')
      }
    },
  
    schoolTicket: {
      root: path(ROOTS.app, '/camemis/ticket-school'),
      schoolTicket: {
        detail: path(ROOTS.app, '/camemis/ticket-school/detail')
      }
    },
  
    // PROJECT
    project: {
      root: path(ROOTS.app, '/management/project-management'),
      project: {
        detail: path(ROOTS.app, '/management/project-management/detail'),
        create: path(ROOTS.app, '/management/project-management/create')
      }
    },
    // SYSTEM USER MANAGEMENT
    systemUser: {
      root: path(ROOTS.app, '/system-user/role-management'),
      systemUser: {
        detail: path(ROOTS.app, '/system-user/role-management/detail/:id'),
        create: path(ROOTS.app, '/system-user/role-management/create')
      }
    },
    root: ROOTS.app,
    main: {
      root: path(ROOTS.app, '/management/project-management'),
      dashboard: path(ROOTS.app, '/dashboard'),
      ecommerce: path(ROOTS.app, '/dashboard/ecommerce'),
      analytics: path(ROOTS.app, '/dashboard/analytics'),
      test: path(ROOTS.app, '/dashboard/test')
    },
    app: {
      mail: {
        root: path(ROOTS.app, '/mail'),
        all: path(ROOTS.app, '/mail/all'),
        labels: [
          path(ROOTS.app, '/mail/label/:customLabel/:mailId?'),
          path(ROOTS.app, '/mail/:systemLabel/:mailId?')
        ]
      },
      chat: {
        root: path(ROOTS.app, '/chat'),
        new: path(ROOTS.app, '/chat/new'),
        conversation: [
          path(ROOTS.app, '/chat/new'),
          path(ROOTS.app, '/chat/:conversationKey')
        ]
      },
      calendar: path(ROOTS.app, '/calendar')
    },
  
    management: {
      root: path(ROOTS.app, '/managements'),
      user: {
        root: path(ROOTS.app, '/managements/user'),
        profile: path(ROOTS.app, '/managements/user/profile'),
        cards: path(ROOTS.app, '/managements/user/card'),
        list: path(ROOTS.app, '/managements/user/list'),
        account: path(ROOTS.app, '/managements/user/account')
      },
      eCommerce: {
        root: path(ROOTS.app, '/managements/e-commerce'),
        products: path(ROOTS.app, '/managements/e-commerce/products'),
        product: path(ROOTS.app, '/managements/e-commerce/product/:name'),
        productById: path(
          ROOTS.app,
          '/managements/e-commerce/product/nike-air-force-1-ndestrukt'
        ),
        list: path(ROOTS.app, '/managements/e-commerce/list'),
        checkout: path(ROOTS.app, '/managements/e-commerce/checkout'),
        invoice: path(ROOTS.app, '/managements/e-commerce/invoice')
      },
      blog: {
        root: path(ROOTS.app, '/managements/blog'),
        post: path(ROOTS.app, '/managements/blog/post/:title'),
        postById: path(
          ROOTS.app,
          '/managements/blog/post/portfolio-review-is-this-portfolio-too-creative'
        ),
        newPost: path(ROOTS.app, '/managements/blog/new-post')
      }
    },
    foundations: {
      root: path(ROOTS.app, '/foundations'),
      colors: path(ROOTS.app, '/foundations/colors'),
      typography: path(ROOTS.app, '/foundations/typography'),
      shadows: path(ROOTS.app, '/foundations/shadows'),
      grid: path(ROOTS.app, '/foundations/grid'),
      icons: path(ROOTS.app, '/foundations/icons')
    },
    components: {
      root: path(ROOTS.app, '/components'),
      accordion: path(ROOTS.app, '/components/accordion'),
      alert: path(ROOTS.app, '/components/alert'),
      autocomplete: path(ROOTS.app, '/components/autocomplete'),
      avatar: path(ROOTS.app, '/components/avatars'),
      badge: path(ROOTS.app, '/components/badges'),
      breadcrumbs: path(ROOTS.app, '/components/breadcrumbs'),
      buttons: path(ROOTS.app, '/components/buttons'),
      chip: path(ROOTS.app, '/components/chips'),
      dialog: path(ROOTS.app, '/components/dialogs'),
      textfield: path(ROOTS.app, '/components/text-fields'),
      label: path(ROOTS.app, '/components/labels'),
      lists: path(ROOTS.app, '/components/lists'),
      menu: path(ROOTS.app, '/components/menu'),
      pagination: path(ROOTS.app, '/components/pagination'),
      pickers: path(ROOTS.app, '/components/pickers'),
      popover: path(ROOTS.app, '/components/popover'),
      progress: path(ROOTS.app, '/components/progress'),
      rating: path(ROOTS.app, '/components/rating'),
      selectionControls: path(ROOTS.app, '/components/selection-controls'),
      snackbar: path(ROOTS.app, '/components/snackbars'),
      slider: path(ROOTS.app, '/components/slider'),
      stepper: path(ROOTS.app, '/components/steppers'),
      tabs: path(ROOTS.app, '/components/tabs'),
      table: path(ROOTS.app, '/components/table'),
      timeline: path(ROOTS.app, '/components/timeline'),
      tooltip: path(ROOTS.app, '/components/tooltips'),
      transferList: path(ROOTS.app, '/components/transfer-list'),
      treeView: path(ROOTS.app, '/components/tree-view'),
  
      // Extra
      chart: {
        root: path(ROOTS.app, '/extra-components/chart'),
        apexcharts: path(ROOTS.app, '/extra-components/chart/apexcharts'),
        recharts: path(ROOTS.app, '/extra-components/chart/recharts')
      },
      map: {
        root: path(ROOTS.app, '/extra-components/map'),
        google: path(ROOTS.app, '/extra-components/map/googlemap'),
        mapbox: path(ROOTS.app, '/extra-components/map/mapbox')
      },
      editor: path(ROOTS.app, '/extra-components/editor'),
      copyToClipboard: path(ROOTS.app, '/extra-components/copy-to-clipboard'),
      upload: path(ROOTS.app, '/extra-components/upload'),
      carousel: path(ROOTS.app, '/extra-components/carousel'),
      multiLanguage: path(ROOTS.app, '/extra-components/multi-language')
    }
  };
  
  export const PATH_DOCS = {
    root: ROOTS.docs,
    introduction: path(ROOTS.docs, '/introduction'),
    started: path(ROOTS.docs, '/getting-started'),
    // Theme UI
    color: path(ROOTS.docs, '/color'),
    typography: path(ROOTS.docs, '/typography'),
    icon: path(ROOTS.docs, '/icon'),
    shadows: path(ROOTS.docs, '/shadows'),
    components: path(ROOTS.docs, '/components'),
    important: path(ROOTS.docs, '/important'),
  
    // Development
    routing: path(ROOTS.docs, '/routing'),
    environmentVariables: path(ROOTS.docs, '/environment-variables'),
    stateManagement: path(ROOTS.docs, '/state-management'),
    apiCalls: path(ROOTS.docs, '/api-calls'),
    analytics: path(ROOTS.docs, '/analytics'),
    authentication: path(ROOTS.docs, '/authentication'),
    multiLanguage: path(ROOTS.docs, '/multi-language'),
    formHelper: path(ROOTS.docs, '/form-helper'),
  
    // Changelog
    support: path(ROOTS.docs, '/support'),
    changelog: path(ROOTS.docs, '/changelog')
  };
  