const buttonStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  borderRadius: 5,
  padding: 10,
}

export const scenes = [{
  name: 'yard',
  title: 'Kämpän pihapiiri',
  uri: './static_assets/piha_1.jpg',
  buttons: [
    {
      title: 'Kämppä',
      action: 'kamppa_lobby',
      style: {
        ...buttonStyle,
        transform: [{ translate: [170, 0, 0] }]
      },
    },
    {
      title: 'Puuliiteri',
      action: 'yard_2',
      style: {
        ...buttonStyle,
        transform: [{ translate: [-1000, -50, 0] }]
      },
    },
    {
      title: 'Sauna',
      action: 'sauna_lobby',
      style: {
        ...buttonStyle,
        transform: [{ translate: [-1750, 10, 0] }]
      },
    }
  ]
},
  {
    name: 'kamppa_lobby',
    title: 'Kämpän eteinen',
    uri: './static_assets/eteinen.jpg',
    buttons: [
      {
        title: 'Piha',
        action: 'yard',
        style: {
          ...buttonStyle,
          transform: [{ translate: [500, 0, 0] }]
        },
      },
      {
        title: 'Keittiö',
        action: 'kitchen',
        style: {
          ...buttonStyle,
          transform: [{ translate: [1530, -50, 0] }]
        },
      },
      {
        title: 'Tupa',
        action: 'main_1',
        style: {
          ...buttonStyle,
          transform: [{ translate: [-2000, 10, 0] }]
        },
      }
    ]
  },
  {
    name: 'sauna_lobby',
    title: 'Saunan tupa',
    uri: './static_assets/sauna_tupa.jpg',
    buttons: [
      {
        title: 'Piha',
        action: 'yard',
        style: {
          ...buttonStyle,
          transform: [{ translate: [-1140, 0, 0] }]
        },
      },
      {
        title: 'Pesuhuone',
        action: 'bathroom',
        style: {
          ...buttonStyle,
          transform: [{ translate: [-1800, 0, 0] }]
        },
      }
    ]
  },
  {
    name: 'yard_2',
    title: 'Hakkuupaikka',
    uri: './static_assets/piha_2.jpg',
    buttons: [
      {
        title: 'Lippuaukea',
        action: 'yard',
        style: {
          ...buttonStyle,
          transform: [{ translate: [1600, 70, 0] }]
        },
      },
      {
        title: 'Sauna',
        action: 'sauna_lobby',
        style: {
          ...buttonStyle,
          transform: [{ translate: [-2000, 60, 0] }]
        },
      }
    ]
  },
  {
    name: 'kitchen',
    title: 'Keittiö',
    uri: './static_assets/keittio.jpg',
    buttons: [
      {
        title: 'Eteinen',
        action: 'kamppa_lobby',
        style: {
          ...buttonStyle,
          transform: [{ translate: [630, 0, 0] }]
        },
      },
      {
        title: 'Pikkukämppä',
        action: 'office',
        style: {
          ...buttonStyle,
          transform: [{ translate: [-1100, 0, 0] }]
        },
      }
    ]
  },
  {
    name: 'office',
    title: 'Pikkukämppä',
    uri: './static_assets/pikkukamppa.jpg',
    buttons: [
      {
        title: 'Tupa',
        action: 'main_1',
        style: {
          ...buttonStyle,
          transform: [{ translate: [1150, 0, 0] }]
        },
      },
      {
        title: 'Keittiö',
        action: 'kitchen',
        style: {
          ...buttonStyle,
          transform: [{ translate: [-2000, 0, 0] }]
        },
      }
    ]
  },
  {
    name: 'main_1',
    title: 'Tupa',
    uri: './static_assets/tupa_2.jpg',
    buttons: [
      {
        title: 'Parvi',
        action: 'main_2',
        style: {
          ...buttonStyle,
          transform: [{ translate: [1300, 0, 0] }]
        },
      },
      {
        title: 'Eteinen',
        action: 'kamppa_lobby',
        style: {
          ...buttonStyle,
          transform: [{ translate: [-1350, 0, 0] }]
        },
      },
      {
        title: 'Pikkukämppä',
        action: 'office',
        style: {
          ...buttonStyle,
          transform: [{ translate: [-400, 0, 0] }]
        },
      }
    ]
  },
  {
    name: 'main_2',
    title: 'Parvi',
    uri: './static_assets/tupa_1.jpg',
    buttons: [
      {
        title: 'Tupa',
        action: 'main_1',
        style: {
          ...buttonStyle,
          transform: [{ translate: [100, 0, 0] }]
        },
      }
    ]
  },
  {
    name: 'bathroom',
    title: 'Pesutupa',
    uri: './static_assets/pesutupa.jpg',
    buttons: [
      {
        title: 'Sauna',
        action: 'sauna',
        style: {
          ...buttonStyle,
          transform: [{ translate: [0, 0, 0] }]
        },
      },
      {
        title: 'Saunan tupa',
        action: 'sauna_lobby',
        style: {
          ...buttonStyle,
          transform: [{ translate: [-1350, 0, 0] }]
        },
      }
    ]
  },
  {
    name: 'sauna',
    title: 'Sauna',
    uri: './static_assets/sauna.jpg',
    buttons: [
      {
        title: 'Pesuhuone',
        action: 'bathroom',
        style: {
          ...buttonStyle,
          transform: [{ translate: [1300, 0, 0] }]
        },
      }
    ]
  }
]
