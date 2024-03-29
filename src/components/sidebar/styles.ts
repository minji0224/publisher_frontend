import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  #sidebar {
    width: 200px;
    height: 100%;
    background: #f3f6fd;
    border-radius: 10px;
    padding: 16px;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  header {
    margin: 0;
    padding: 0;
    padding: 15px;
    line-height: 40px;
    text-align: center;
    height: 250px;
    border-bottom: 1px solid #eee;
  }

  svg {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    stroke-width: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 10px;
  }

  li {
    border-bottom: 1px solid #eee;
  }

  a {
    text-decoration: none;
    padding: 15px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #848697;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 20px;
  }

  a:hover {
    background: rgb(230, 230, 230);
    color: #7380ec;
  }

  #profile {
    width: 100%;
    height: 100%;
  }

  #profile img {
    margin-top: 20px;
  }

  #profile p {
    height: 100px;
    font-weight: bold;
  }
`;
