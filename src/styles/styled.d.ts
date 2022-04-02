import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      danger: string,
      font_default: string,
      headerBg: string,
      contentBg: string,
    },
    inputs: {
      background: string,
      border: string,
      text: string
    },
    login: {
      title: string,
      description: string,
      background: string,
      button: string,
      button_hover: string
    },
    menu: {
      background: string,
      active_border: string,
      active_background: string,
      icon: string,
      font: string,
    },
    user_menu: {
      icon: string,
      menu_background: string,
      font_title: string,
      font_item: string,
      links_background: string
    },
    notifications: {
      icon: string
    },
    switcher: {
      background: string,
      hover: string,
      active: string,
      icon: string
    },
    table_registers: {
      background: string,
      title_table: string,
      item_background_one: string,
      item_background_two: string,
      item_font_color: string,
      edit_button_background: string,
      edit_button_background_hover: string,
      delete_button_background: string,
      delete_button_background_hover: string
    },
    modal_registers: {
      background: string,
      separator: string,
      font: string,
      input_font: string,
      input_background: string,
      input_border: string
    },
    icons: {
      search: string
    },
    dashboard: {
      background_tooltip: string,
      reference_graphic_primary: string,
      reference_graphic_secondary: string,
      cartesian_stroke: string,
      background_balances: string,
      background_graphics_container: string,
      filter_button_background: string,
      filter_button_background_active: string
    }
  }
}
