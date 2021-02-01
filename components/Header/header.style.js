import styled from "styled-components";
export const HeaderWrapper = styled.div`
  background-color: #181b21;
  padding: 20px 0px;
  z-index: 200;
  a {
    text-decoration: none;
    list-style: none;
    color: #cfd7ea;
  }
  a:hover {
    color: #0d80ed;
  }
  li {
    text-decoration: none;
    list-style: none;
  }

  .navigation {
    width: 99%;
    margin: auto;
  }
  .mobileNavigation {
    margin: auto;
  }
  .navBar {
    margin: 0px;
    display: flex;
    padding: 0px;
    flex-wrap: wrap;
    align-items: center;
    img {
      padding-right: 15px;
    }
    li {
      margin-right: 30px;
      cursor: pointer;
      font-size: 16px;
      color: #cfd7ea;
      letter-spacing: 2%;
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    padding: 0px;
    color: #cfd7ea;
    img {
      cursor: pointer;
    }
    .avatar {
      background-color: #c0222c;
      width: 30px;
      height: 30px;
    }
    .items {
      margin-left: 20px;
      padding: 0px !important;
      cursor: pointer;
    }
  }
  .mobileNavRight {
    display: flex;
    align-items: center;
    padding-top: 20px;
    color: #cfd7ea;
    img {
      cursor: pointer;
    }
    .avatar {
      background-color: #c0222c;
      width: 30px;
      height: 30px;
    }
    .items {
      margin-left: 20px;
      padding: 0px !important;
      cursor: pointer;
    }
  }
`;
