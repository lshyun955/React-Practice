import styled from "@emotion/styled";

export const Container = styled.div`
  width: 640px;
  height: 1090px;
  border: 1px solid gray;
`;

export const SearchBox = styled.div`
  text-align: right;
`;

export const SearchBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  margin: 30px 60px;
  background-image: url(/magnifying-glass-solid.svg);
  background-repeat: no-repeat;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 15px;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.div`
  margin-left: 30px;
  font-size: 40px;
  font-weight: 600;
`;

export const MyInfoBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MyImage = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(/cute.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
  margin-right: 10px;
  border: none;
`;

export const MyNameBox = styled.div`
  font-size: 25px;
  font-weight: 400;
  border: none;
`;

export const MyNameright = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-left: 10px;
  background-image: url(/chevron-right-solid.svg);
  background-repeat: no-repeat;
`;

export const TabBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 60px;
`;

export const Tab = styled.div`
  font-size: 30px;
  color: #cacaca;
  font-weight: 600;
  width: 20%;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #cacaca;
  border-bottom: 1px solid #cacaca;
`;

export const ContentItem = styled.div`
  display:flex;
  flex:direction:row;
  justify-content:space-between;
  align-items:center;
  margin: 25px 40px;
  height: 16%;
`;

export const ContentItemBox = styled.div``;
export const ContentItemTitle = styled.div`
  font-size: 25px;
`;

export const ContentItemSubTitle = styled.div`
  font-size: 17px;
  color: #cacaca;
`;

export const ContentItemTab = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(/chevron-down-solid.svg);
  background-repeat: no-repeat;
`;

export const HomeMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
`;

export const HomeMenuTabBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeMenuTabItemImage1 = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(/house-solid.svg);
  background-repeat: no-repeat;
`;

export const HomeMenuTabItemTitle1 = styled.div`
  font-size: 17px;
  color: #cacaca;
`;

export const HomeMenuTabItemImage2 = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(/location-dot-solid.svg);
  background-repeat: no-repeat;
`;

export const HomeMenuTabItemTitle2 = styled.div`
  font-size: 17px;
  color: #cacaca;
`;

export const HomeMenuTabItemImage3 = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(/heart-solid.svg);
  background-repeat: no-repeat;
`;

export const HomeMenuTabItemTitle3 = styled.div`
  font-size: 17px;
  color: #cacaca;
`;

export const HomeMenuTabItemImage4 = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(/user-solid.svg);
  background-repeat: no-repeat;
`;

export const HomeMenuTabItemTitle4 = styled.div`
  font-size: 17px;
  color: #cacaca;
`;
