import React from "react"
import Table from 'react-bootstrap/Table';
import userStore from "../store/userStore";
import cartstore from "../data/cartStore";

function Cart() {
  // 특정 스테이트만 가져오는 방법
  const username = userStore((state)=> state.username)
  const {productname, productstock} = userStore();
  
  // 카트 데이터 가져오기
  const cartData = cartstore((x)=> x.cartData)

  return (
    <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경하기</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>수정삭제</td>
            </tr>
          ))}
          </tbody>
        </Table>
    </div>
  )
}
// Cart 컴포넌트 내부의 state 가 변하지 않으면
// 다시 랜더링하지 않음
export default React.memo(Cart)