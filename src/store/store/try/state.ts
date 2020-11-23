export interface TryDataStateInterface {
  directories:object[],
  directories_menu:{name:string,method:string,disable:boolean,color:string}[]
}

const state: TryDataStateInterface = {
  directories:[
          {
            label: 'vue',
            children: [
              {
                label: 'Good food (with icon)',
                children: [
                  { label: 'Quality ingredients' },
                  { label: 'Good recipe' }
                ]
              },
              {
                label: 'Good service (disabled node with icon)',
                disabled: true,
                children: [
                  { label: 'Prompt attention' },
                  { label: 'Professional waiter' }
                ]
              },
              {
                label: 'Pleasant surroundings (with icon)',
                children: [
                  {
                    label: 'Happy atmosphere (with image)'
                  },
                  { label: 'Good table presentation' },
                  { label: 'Pleasing decor' }
                ]
              }
            ]
          }
        ],
  directories_menu:[
    {name:"新建目录",method:"create_directory",disabled:false,activeClass:"text-blue"},
    {name:"新建问题",method:"create_question",disabled:false,activeClass:"text-primary"},
    {name:"移动",method:"move",disabled:false,activeClass:"text-primary"},
    {name:"编辑目录",method:"edit_directory",disabled:false,activeClass:"text-primary"},
    {name:"编辑问题",method:"edit_question",disabled:false,activeClass:"text-primary"},
    {name:"删除",method:"del",disabled:false,activeClass:"text-primary"},
    {name:"进行测试",method:"go_test",disabled:false,activeClass:"text-primary"},
  ]
};
export default state;
