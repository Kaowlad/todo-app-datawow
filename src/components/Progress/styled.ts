import styled from "styled-components";

export const ProgressContainer = styled.div`
    background-color: #E07C7C;
    color: #ffffff;
    width: 100%;
    height: 123px;
    padding: 20px;
    border-radius: 20px;
`

export const ProgressBar = styled.div`
    position: relative;
    width: 100%;
    height: 7.34px;
    background-color: #3B3B3B;
    border-radius: 1000px;

    &::after {
        content: '';
        position: absolute;
        width: 50%;
        height: 100%;
        border-radius: 1000px;
        background-color: #ffffff;
    }
`