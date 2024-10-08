import styled from "styled-components";

export const Tr = styled.tr`
`;

export const Td = styled.td`
    padding: 15px 0 5px 0;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    word-break: break-all;
    svg{
        width: 18px;
        height: 18px;
    }

    .trash-icon {
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: red;
            transform: scale(1.02);
        }
    }
`;