import { marked } from "marked"
import { PostData } from "./api"

const addArticle = () => {
    const textarea = document.querySelector(".form-textarea")
    const result = document.querySelector(".article-wrapper")
    const title = document.querySelector("input.form-input")
    const button = document.querySelector(".button-save")

    result.innerHTML = ""

    const post = {
        title: null,
        body: undefined
    }

    textarea.addEventListener("input", () => {
        result.innerHTML = marked.parse(textarea.value)
        post.body = textarea.value
    })

    title.addEventListener("input", () => {
        post.title = title.value
    })

    button.addEventListener("click", () => {
        PostData("/posts", post).then(() => {
            window.location.replace("/")
        }).catch(error => {

            alert("ОШИБКА")
            console.error(error);

        })
    })
}

export default addArticle;