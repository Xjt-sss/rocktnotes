import styled from "styled-components";

export const Comtainer = styled.span`
 font-size: 12px;
 padding: 5px 14px;
 border-radius: 5px;
 margin-left: 6px;
 color: ${({ theme }) => theme.COLORS.BACKGROUD_900};
 background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;