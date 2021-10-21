import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styled from '@emotion/styled';

import 가벼운성교육 from 'src/랜딩페이지/컴포넌트/가벼운성교육/가벼운성교육.mdx';

const 컨테이너 = styled.section`
  background: #ffe3e8;
`;
const Button = styled.button.bind({ type: 'button' })`
  padding: 0.6rem 1.2rem;
  background: pink;
  border: none;
  border-radius: 0.5rem;
`;
const Header = styled.header`
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  border-bottom: 1px solid gray;
`;
const Main = styled.main`
  width: 100%;
  padding: 1rem 0.5rem;

  h2 {
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
  }

  ul {
    margin-bottom: 0.8rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  li {
    padding: 0.1rem 0.4rem;

    &:before {
      content: "- ";
    }
  }
`;
const Footer = styled.div`
  width: 100%;
  margin: auto;
  padding: 1rem 0.5rem;
  text-align: center;
`;

const 팝업열기버튼 = () => <Button>가벼운 성교육</Button>;

export default function 팝업(): JSX.Element {
  return (
    <Popup
      trigger={팝업열기버튼}
      modal
      nested
    >
      {(close: () => void) => (
        <컨테이너>
          <Header>가벼운 성교육 시간!</Header>
          <Main>
            <가벼운성교육 />
          </Main>
          <Footer>
            <Button onClick={close}>닫기</Button>
          </Footer>
        </컨테이너>
      )}
    </Popup>
  );
}
