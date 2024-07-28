import styled from 'styled-components'

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
    transition: all 0.5s ease;
  }
  a:hover{
    background-color: #ffcc00;
    color: #000;
    border: none;
    transform: rotate3d(0, 1, 0, 180deg);
    
  }
`
