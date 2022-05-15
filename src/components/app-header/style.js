import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  a {
    text-decoration: none;
  }
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -99999px;
  }
  .select-list {
    display: flex;
    justify-content: center;
    align-items: center;
    .select-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 70px;
      padding: 0 20px;
      cursor: pointer;
      a {
        color: #cccccc;
        font-size: 14px;
        font-family: normal;
      }
      &:last-of-type {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          top: 21px;
          left: 100px;
          background-position: -190px 0;
        }
      }
      &:hover {
        color: #fff;
        background: #000;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  .search-input {
    width: 158px;
    height: 32px;
    border-radius: 32px;
    background-color: #ffffff;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    color: #333333;
  }
  .creator-center {
    width: 90px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    border: 1px solid #4f4f4f;
    border-radius: 20px;
    color: #cccccc;
  }
  .login {
    color: #787878;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 12px;
  }
`;
