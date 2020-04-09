import styled from "styled-components";

export const Search = styled.input`
  margin: 0 auto;
  display: block;
  width: 90%;
  height: 30px;
  font-family: ${({ theme }) => theme.fonts.primary};
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  transition: border-color, font-size 0.2s;
  border-radius: 3px;
  padding: 5px;

  &:focus {
    font-size: ${({ theme }) => theme.fontSizes.subtitle};
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const List = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Item = styled.div`
  padding: 12px 0;
`;

export const ItemTitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ItemDescription = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.text};
`;

export const EmptyState = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;
