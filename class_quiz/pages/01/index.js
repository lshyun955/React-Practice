import {
  Container,
  SearchBox,
  SearchBtn,
  TitleBox,
  TitleText,
  MyInfoBox,
  MyImage,
  MyNameBox,
  MyNameright,
  TabBox,
  Tab,
  ContentBox,
  ContentItem,
  ContentItemTitle,
  ContentItemSubTitle,
  ContentItemTab,
  ContentItemBox,
  HomeMenuBox,
  HomeMenuTabBox,
  HomeMenuTabItemImage1,
  HomeMenuTabItemTitle1,
  HomeMenuTabItemImage2,
  HomeMenuTabItemTitle2,
  HomeMenuTabItemImage3,
  HomeMenuTabItemTitle3,
  HomeMenuTabItemImage4,
  HomeMenuTabItemTitle4,
} from "../../styles/emotion.js";

export default function Quiz1() {
  return (
    <Container>
      <SearchBox>
        <SearchBtn></SearchBtn>
      </SearchBox>
      <TitleBox>
        <TitleText>마이</TitleText>
        <MyInfoBox>
          <MyImage></MyImage>
          <MyNameBox>
            이수현<MyNameright></MyNameright>
          </MyNameBox>
        </MyInfoBox>
      </TitleBox>
      <TabBox>
        <Tab>공지사항</Tab>
        <Tab>이벤트</Tab>
        <Tab>FAQ</Tab>
        <Tab>Q&A</Tab>
      </TabBox>
      <ContentBox>
        <ContentItem>
          <ContentItemBox>
            <ContentItemSubTitle>Q.01</ContentItemSubTitle>
            <ContentItemTitle>리뷰 작성은 어떻게 하나요?</ContentItemTitle>
          </ContentItemBox>
          <ContentItemTab></ContentItemTab>
        </ContentItem>
        <ContentItem>
          <ContentItemBox>
            <ContentItemSubTitle>Q.02</ContentItemSubTitle>
            <ContentItemTitle>리뷰 수정/삭제는 어떻게 하나요?</ContentItemTitle>
          </ContentItemBox>
          <ContentItemTab></ContentItemTab>
        </ContentItem>
        <ContentItem>
          <ContentItemBox>
            <ContentItemSubTitle>Q.03</ContentItemSubTitle>
            <ContentItemTitle>아이디/비밀번호를 잊어버렸어요</ContentItemTitle>
          </ContentItemBox>
          <ContentItemTab></ContentItemTab>
        </ContentItem>
        <ContentItem>
          <ContentItemBox>
            <ContentItemSubTitle>Q.04</ContentItemSubTitle>
            <ContentItemTitle>회원탈퇴를 하고싶어요.</ContentItemTitle>
          </ContentItemBox>
          <ContentItemTab></ContentItemTab>
        </ContentItem>
        <ContentItem>
          <ContentItemBox>
            <ContentItemSubTitle>Q.05</ContentItemSubTitle>
            <ContentItemTitle>출발지 설정은 어떻게 하나요?</ContentItemTitle>
          </ContentItemBox>
          <ContentItemTab></ContentItemTab>
        </ContentItem>
        <ContentItem>
          <ContentItemBox>
            <ContentItemSubTitle>Q.06</ContentItemSubTitle>
            <ContentItemTitle>비밀번호를 변경하고 싶어요</ContentItemTitle>
          </ContentItemBox>
          <ContentItemTab></ContentItemTab>
        </ContentItem>
      </ContentBox>
      <HomeMenuBox>
        <HomeMenuTabBox>
          <HomeMenuTabItemImage1></HomeMenuTabItemImage1>
          <HomeMenuTabItemTitle1>홈</HomeMenuTabItemTitle1>
        </HomeMenuTabBox>
        <HomeMenuTabBox>
          <HomeMenuTabItemImage2></HomeMenuTabItemImage2>
          <HomeMenuTabItemTitle2>잇츠로드</HomeMenuTabItemTitle2>
        </HomeMenuTabBox>
        <HomeMenuTabBox>
          <HomeMenuTabItemImage3></HomeMenuTabItemImage3>
          <HomeMenuTabItemTitle3>마이찜</HomeMenuTabItemTitle3>
        </HomeMenuTabBox>
        <HomeMenuTabBox>
          <HomeMenuTabItemImage4></HomeMenuTabItemImage4>
          <HomeMenuTabItemTitle4>마이</HomeMenuTabItemTitle4>
        </HomeMenuTabBox>
      </HomeMenuBox>
    </Container>
  );
}
