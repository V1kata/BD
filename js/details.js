import { supabase } from "../script.js";
import { initialize } from "./navigation.js";

let main = document.querySelector('main');

export async function details(id) {
    let userData = await supabase.from('MainBase').select().eq('id', id);
    let addressId = userData.data[0].addressId;
    let addressData = await supabase.from('SecondBase').select().eq('id', addressId);

    let html = `
    <section id="details">
            <div id="details-wrapper">
                <p id="details-title">Person Details</p>
                <div id="img-wrapper">
                    <img src="${userData.data[0].avatar}" alt="pfp" />
                </div>
                <div id="info-wrapper">
                    <p>Name: <span id="details-brand">${userData.data[0].firstName} ${userData.data[0].lastName}</span></p>
                    <p>
                        email: <span id="details-model">${userData.data[0].email}</span>
                    </p>
                    <p>Phone number: <span id="details-release">${userData.data[0].phoneNum}</span></p>
                    <p>Adress: <span id="details-designer">${addressData.data[0].address}</span></p>
                    <p>City: <span id="details-designer">${addressData.data[0].city}</span></p>
                    <p>LinkedIn link: <a href="${userData.data[0].linkedInProfile}"> <span id="details-value"><img src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473" /></span></a></p>
                </div>

                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                    <a href="${`/edit/${userData.data[0].id}`}" id="edit-btn">Edit</a>
                    <a href="${`/delete/${userData.data[0].id}`}" id="delete-btn">Delete</a>
                </div>
            </div>
        </section>`

        main.innerHTML = html;
        initialize();
}