import styled from "styled-components";

export const Container = styled.button`
 border-radius: none;
 color: ${({ theme, $isActive }) => $isActive ? theme.COLORS.ORANGUE : theme.COLORS.GRAY_100};

 border: none;
 font-size: 16px;
`;