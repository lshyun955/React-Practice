import {
  Email,
  EmailBox,
  EmailInput,
  Container,
  Title,
  TitleBox,
  PasswordBox,
  Password,
  PasswordInput,
} from "../../styles/emotion.js";

export default function EmotionPage() {
  return (
    <Container>
      <TitleBox>
        <Title>로그인</Title>
      </TitleBox>
      <EmailBox>
        <Email>이메일</Email>
        <EmailInput type="text" />
      </EmailBox>
      <PasswordBox>
        <Password>비밀번호</Password>
        <PasswordInput type="text" />
      </PasswordBox>
    </Container>
  );
}
