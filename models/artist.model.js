import { supabase } from "../config/supabase_config.js";

export default class Artist {
    static async getAllArtists() {
       try {
        const { data, error } = await supabase
        .from ('artists')
        .select ('id, name')
        if (error) {
            throw new Error(error)
        } else {
            return data
        }
       } catch (error) {
        console.error('Fejl i kald af artistliste:'+ error)
       } 
    }

    static async getArtistById(id) {
        try {
            const { data, error } = await supabase
                .from('artists')
                .select('*')
                .eq('id', id)
                .single()
                if (error) {
                    throw new Error(error)
                } else {
                    return data
                }
        } catch (error) {
            console.error('Fejl i kald af kunstner:'+ error)
        }
    }

    static async createArtist(formdata) {
        try {
            const { data, error } = await supabase
                .from('artists')
                .insert([
                    {
                        name: formdata.name,
                        description: formdata.description,
                        image: formdata.image,
                    }
                ])
                .select('id')
                if (error) {
                    throw new Error(error)
                } else {
                    return data
                }
        } catch (error) {
            console.error('Fejl i insert:'+ error)
        }
    }    
}