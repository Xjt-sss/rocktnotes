import styled from "styled-components";
export const Container = styled.button
width: 100%;
backgrond-color: ${({ theme }) => theme.COLORS.ORANGE};
color: ${({ theme }) => theme.COLORS.BACKGROND_800};
height: 56px;
border: 0;
padding: 0 16px;
margin-top: 16px;
border-radius: 10px;
font-weight: 500;

&:disabled {
  opacitv: 0.5;
}
;