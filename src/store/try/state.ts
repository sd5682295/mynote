export interface TryDataStateInterface {
  dirs:{id:number,name:string,parent:string,able:boolean}[],
  questions:{id:number,question:string,answer:string,lasttime:number,timelength:number, did:number}
  dir_Menu:{name:string,method:string,disable:boolean,color:string}[]
}

const state: TryDataStateInterface = {
  dirs:[
       {id:0,name:"书0",parent:"root",able:true},
       {id:1,name:"书1",parent:"root",able:true},
       {id:2,name:"书2",parent:"root",able:true},
       {id:3,name:"书3",parent:"root",able:true},
       {id:4,name:"书4",parent:"root",able:true},
       {id:5,name:"书5",parent:"root",able:true},
      ],
  questions:[
      {id:0,question:"问题0",answer:"答案0",lasttime:1,timelength:0, did:0},
      {id:1,question:"问题1",answer:"答案1",lasttime:1,timelength:0, did:0},
      {id:2,question:"问题2",answer:"答案2",lasttime:1,timelength:0, did:0},
      {id:3,question:"问题1",answer:"答案3",lasttime:1,timelength:0, did:1},
      {id:4,question:"问题1",answer:"答案4",lasttime:1,timelength:0, did:1},
      {id:5,question:"问题1",answer:"答案5",lasttime:1,timelength:0, did:1},
      {id:6,question:"问题1",answer:"答案6",lasttime:1,timelength:0, did:2},
      {id:7,question:"问题1",answer:"答案7",lasttime:1,timelength:0, did:2},
      {id:8,question:"问题1",answer:"答案8",lasttime:1,timelength:0, did:2},
        ],
  dirMenu:[
    {name:"新建目录",method:"create_directory",able:true,activeClass:"text-blue"},
    {name:"新建问题",method:"create_question",able:true,activeClass:"text-primary"},
    {name:"移动",method:"move",able:true,activeClass:"text-primary"},
    {name:"编辑目录",method:"edit_directory",able:true,activeClass:"text-primary"},
    {name:"编辑问题",method:"edit_question",able:true,activeClass:"text-primary"},
    {name:"删除",method:"del",able:true,activeClass:"text-primary"},
    {name:"进行测试",method:"go_test",able:true,activeClass:"text-primary"},
  ]
};
export default state;
