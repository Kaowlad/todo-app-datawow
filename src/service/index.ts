import axios from "axios";
///internal
import { FetchTodos } from "../typing/service";
import { endpoint } from "../utils/service";

export const fetchTodos: FetchTodos = () => {
    return axios({
        url: endpoint('/todos'),
        method: 'GET',
    })
}