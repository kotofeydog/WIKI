import { marked } from "marked";
import { GetData } from "./api"

const GetPost = () => {

    const article = document.querySelector(".article-wrapper")

    const id = window.location.search.substring(8)

    GetData(`/posts/${id}`).then(data => {
        article.innerHTML = marked.parse(data.body)
    }).catch(() => {
        window.location.replace("/")

        // console.error(error);
    })
}
export default GetPost;