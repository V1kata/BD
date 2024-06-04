import { supabase } from "../script.js";

let main = document.querySelector('main');

export function createHtml() {
    let html = `<section class="main-two">
    <div class="container">
        <h2>Personal Details</h2>
        <form>
            <div class="form-group">
                <label for="email">Email*</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email">
            </div>
            <div class="form-group">
                <label for="first-name">First name*</label>
                <input type="text" id="first-name" name="firstName" required
                    placeholder="Enter your first name">
            </div>
            <div class="form-group">
                <label for="last-name">Last name*</label>
                <input type="text" id="last-name" name="lastName" required placeholder="Enter your last name">
            </div>
            <div class="form-group">
                <label for="avatar">Avatar url*</label>
                <input type="text" id="avatar" name="avatar" required placeholder="Enter your last name">
            </div>
            <div class="form-group">
                <label for="linkedin-profile">LinkedIn profile link (optional)</label>
                <input type="url" id="linkedin-profile" name="linkedInProfile"
                    placeholder="Enter your LinkedIn profile URL">
            </div>
            <div class="form-group">
                <label for="phone-number">Phone number</label>
                <input type="tel" id="phone-number" name="phoneNum" required placeholder="Enter your phone number">
            </div>
            <div class="form-group">
                <label for="address">Address (optional)</label>
                <input type="text" id="address" name="address" placeholder="Enter your address">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</section>`;

    main.innerHTML = html;
    document.querySelector('form').addEventListener('submit', onSubmit);
}


async function onSubmit(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let formData = Object.fromEntries(form);

    for (let data in formData) {
        if (!formData[data] && data != 'linkedInProfile' && data != 'address') {
            return
        }
    }

    const { error } = await supabase.from('MainBase').insert(formData);

    if (error) {
        console.log(error);
    } else {
        console.log('everything is fine');
        let a = Array.from(document.querySelectorAll('a')).find(el => el.pathname.split('/')[1] == 'catalog');
        a.click();
    }
}