import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <Logo src="/images/cta-logo-two.png" alt="DisneyPlus__logos"></Logo>
        <Title>
          이 모든 이야기가 여기에 <br />
          지금 스트리밍 중
        </Title>
        <Membership>
          <div className="membership">
            <h3 classname="membership__title">디즈니+ 스탠다드</h3>
            <MembershipList>
              <li>최대 1080p Full HD 비디오</li>
              <li>최대 5.1 오디오</li>
              <li>최대 2대 기기 동시 스트리밍</li>
            </MembershipList>
            <SignUpLink>월 9,900원</SignUpLink>
          </div>
          <div className="membership">
            <h3 classname="membership__title">디즈니+ 스탠다드</h3>
            <MembershipList>
              <li>최대 4K UHD & HDR 비디오</li>
              <li>최대 Dolby Atmos 오디오</li>
              <li>최대 4대 기기 동시 스트리밍</li>
            </MembershipList>
            <SignUpLink>월 9,900원</SignUpLink>
          </div>
        </Membership>
        <Description>
          디즈니+ 프리미엄 연간 멤버십을 구독하고 최대 16% 할인*을 받으세요.
          <br />
          연간 멤버십을 포함한 멤버십 유형별 세부 정보를 확인해 보세요.
        </Description>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.section`
  background-image: url("images/login-background.jpg");
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  max-width: 650px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const BgImage = styled.div`
  background-image: url("images/login-background.jpg");
  height: 100%;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 42px;
  text-align: left;
`;
const Description = styled.p`
  margin-top: 40px;
  font-size: 16px;
`;
const Membership = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  gap: 60px;

  .membership {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  h3 {
    font-size: 26px;
    margin-bottom: 0px;
  }
`;
const SignUpLink = styled.a`
  font-weight: bold;
  width: 100%;
  color: #f9f9f9;
  background-color: #0063e5;
  padding: 10px 5px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Logo = styled.img`
  max-width: 600px;
`;

const MembershipList = styled.ul`
  padding-left: 0;
  font-size: 12px;
  li {
    color: gray;

    padding: 0;
    list-style: none;
  }
`;
