import styled from "styled-components";
import { screenSize } from "../../utils/service";

export default styled.div`
    background-color: #F5F5F5;
    width: 720px;
    border-radius: 20px;
    margin: 42px auto;
    padding: 61px 110px;

    @media screen and (max-width: ${screenSize.tablet}){
        width: 80%;
        padding-left: 5%;
        padding-right: 5%;
    }
`