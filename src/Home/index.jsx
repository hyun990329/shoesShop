import {Container, Row, Col} from 'react-bootstrap';
import Product from '../Product';
import axios from 'axios';
import { useState } from 'react';

function Home({product, setProduct}){

  const [clickCount, setClickCount] = useState(0);
  const urls = [
    'https://zzzmini.github.io/js/react_data_01.json',
    'https://zzzmini.github.io/js/react_data_02.json',
  ];

  const handleFetchData = async () => {
    // 2번 이상 클릭 시 alert 표시
    if (clickCount >= urls.length) {
      alert('더 이상 상품이 없습니다');
      return;
    }

    try {
      // 클릭 횟수에 따라 URL 선택
      const url = urls[clickCount];
      const result = await axios.get(url);
      const temp = [...product, ...result.data];
      setProduct(temp);
      setClickCount(clickCount + 1); // 클릭 횟수 증가
    } catch (error) {
      console.log('가져오기 실패!', error);
    } finally {
      alert('데이터 로딩중...');
    }
  };

  return (
    <div>
      {/* 상품진열영역 시작 */}
      <Container>
        <Row xs={3}>
          {product.map((shoes) => (
            <Col key={shoes.id} className="text-center">
              <Product shoes={shoes} />
            </Col>
          ))}
        </Row>
      </Container>
      {/* 상품진열영역 끝 */}
      <div className="d-flex justify-content-center align-items-center">
        <button variant="primary" size="lg" onClick={handleFetchData}>
          데이터 가져오기
        </button>
      </div>
    </div>
  );
}
export default Home;