import { catalogHtml } from "./catalog.js";
import { createHtml } from "./create.js";
import { deleteRecord } from "./delete.js";
import { details } from "./details.js";
import { edit } from "./edit.js";

let url = {
    'index.html': catalogHtml,
    'catalog': catalogHtml,
    'create': createHtml,
    'details': details,
    'edit': edit,
    'delete': deleteRecord
}

export function initialize() {
    console.log('cool')
    Array.from(document.querySelectorAll('a')).forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.nodeName == 'IMG') window.location = e.target.parentElement.parentElement.href;
            let [none, path, id] = e.target.pathname.split('/');

            if (path == 'details' || path == 'edit' || path == 'delete') {
                url[path](id);
            } else {
                url[path]();
            }
        })
    });
}