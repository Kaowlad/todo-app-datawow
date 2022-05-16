import styled from "styled-components";

interface MenuProps {
    isActive: boolean
}

interface MenuItemProps {
    current?: boolean
}

export const SelectContainer = styled.div`
    height: 29px;
    width: 110px;
    padding: 7px 10px;
    position: relative;
    background-color: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    &.active {
        & svg {
            transform: rotate(180deg);
        } 
    }

    & svg {
        transition: transform 0.5s ease-out;
    }
`

export const MenuContainer = styled.div<MenuProps>`
    position: absolute;
    display: ${props => !props.isActive && 'none'};
    top: 0;
    left: 0;
    margin-top: 34px;
    padding: 10px 6px;
    width: 100%;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    z-index: 2;

    & div:not(:first-child) {
        margin-top: 10px;
    }
`

export const MenuItem = styled.div<MenuItemProps>`
    height: 28px;
    line-height: 28px;
    padding-left: 10px;
    border-radius: 8px;
    background-color: ${props => props.current && '#585292'};
    color: ${props => props.current ? '#ffffff' : '#2E2E2E'};
    cursor: pointer;


    &:hover {
        background-color: #585292;
        color: #ffffff;
    }
`