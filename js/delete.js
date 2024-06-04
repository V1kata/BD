import { supabase } from "../script.js";

export async function deleteRecord(id) {
    const { error } = await supabase.from('MainBase').delete().eq('id', id);

    if (error) { 
        console.log(error); 
    } else {
        console.log('everything is fine');
        let a = Array.from(document.querySelectorAll('a')).find(el => el.pathname.split('/')[1] == 'catalog');
        a.click();
    }
}