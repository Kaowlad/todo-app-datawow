import styled from "styled-components";

interface BarProps {
    percentage: number
}

export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #E07C7C;
    color: #ffffff;
    width: 100%;
    height: 123px;
    padding: 20px;
    border-radius: 20px;

    & > p {
        color: #EBB9B8;
    }
`

export const ProgressBar = styled.div<BarProps>`
    position: relative;
    width: 100%;
    height: 7.34px;
    background-color: #3B3B3B;
    border-radius: 1000px;

    &::after {
        content: '';
        position: absolute;
        width: ${props => `${props.percentage}%`};
        height: 100%;
        border-radius: 1000px;
        background-color: #ffffff;
        transition: width 0.5s ease-out;
    }
`