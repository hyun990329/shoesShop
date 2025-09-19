import { create } from "zustand";

const userStore = create((set)=>(
  {
    // state 정의
    username : '기먕먄',
    productname: ['나이키', '프로스펙스', '아디다스'],
    productstock : [10, 11, 12],

    // 각종 함수 (Delete, Update)
    changename: ()=> set((state)=>({
      username: '기먀먄'
    })),
    addproductname: ()=> set((state)=>({
      productname: [...productname, '고무신']
    }))
  }
));

export default userStore;