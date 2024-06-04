import { supabase } from "../script.js";
import { initialize } from "./navigation.js";

let main = document.querySelector('main');

export async function catalogHtml() {
    let { data, error } = await supabase.from('MainBase').select();
    let innerHtml = data.map(el => generateHtml(el));
    let outerHtml = `<section id="dashboard">
    <h2>Portfolio catalog</h2>
    <ul class="card-wrapper">
    ${innerHtml}
    </ul>
</section>`;

    main.innerHTML = outerHtml;
    initialize()
}

function generateHtml(data) {
    return `<li class="card">
    <img src="${data.avatar}" alt="pfp" />
    <p>
        <strong>Name: </strong><span class="brand">${data.firstName} ${data.lastName}</span>
    </p>
    <p><strong>Email:</strong><span class="value">${data.email}</span></p>
    <a class="details-btn" href="${`/details/${data.id}`}">Details</a>
</li>`
}