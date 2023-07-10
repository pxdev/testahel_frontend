export const useCommon = () => {
}

// common props
useCommon.props = () => (
  {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: null
    },
    spellcheck: {
      type: Boolean,
      default: null
    },

    loadingIcon: {
      type: String
    },

    preIcon: {
      type: String,
      default: null
    },
    postIcon: {
      type: String,
      default: null
    },

    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },

  }
)
// form input classes mapping

useCommon.formInput = () => (
  {
    wrapper: 'relative',
    base: 'relative bg-white transition block border border-gray-200 w-full disabled:cursor-not-allowed disabled:opacity-75 rounded-md',
    placeholder: 'placeholder-gray-400 dark:text-gray-100',
    focus: 'focus:outline-none focus:ring-0 focus:border-gray-300 focus:bg-gray-50/10',
    hover: 'hover:border-gray-200',
    dark: 'dark:bg-white/10 dark:border-gray-200/10 dark:text-gray-50',
    preIcon: 'ltr:pl-9 rtl:pr-9',
    postIcon: 'ltr:pr-9 rtl:pl-9',
    size: {
      xs: 'text-xs px-2.5 py-1',
      sm: 'text-sm px-2.5 py-1.5',
      md: 'text-base px-2.5 py-2',
      lg: 'text-base px-2.5 py-2.5',
      xl: 'text-lg px-2.5 py-3'
    },
    icon: {
      base: "absolute z-10 top-1/2 -translate-y-1/2 text-gray-400",
      pre: "ltr:left-3 rtl:right-3",
      post: "ltr:right-3 rtl:left-3"
     }
  }
)



