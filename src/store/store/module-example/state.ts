export interface ExampleStateInterface {
  prop: boolean,
  simple:[]
  
}

const state: ExampleStateInterface = {
  prop: false,
  simple:[
          {
            label: 'Satisfied customers (with avatar)',
            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
            children: [
              {
                label: 'Good food (with icon)',
                icon: 'restaurant_menu',
                children: [
                  { label: 'Quality ingredients' },
                  { label: 'Good recipe' }
                ]
              },
              {
                label: 'Good service (disabled node with icon)',
                icon: 'room_service',
                disabled: true,
                children: [
                  { label: 'Prompt attention' },
                  { label: 'Professional waiter' }
                ]
              },
              {
                label: 'Pleasant surroundings (with icon)',
                icon: 'photo',
                children: [
                  {
                    label: 'Happy atmosphere (with image)',
                    img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png'
                  },
                  { label: 'Good table presentation' },
                  { label: 'Pleasing decor' }
                ]
              }
            ]
          }
        ]
};

export default state;
