import { supabase } from "../config/supabase_config.js";

export default class Album {
    static async getAllAlbums(){
        try {
            const { data, error } = await supabase
            .from ('albums')
            .select ('id, title, artists(name), release_date')
            if (error) {
                throw new Error(error)
            } else {
                return data
            }
        } catch (error) {
            console.error('Fejl i kald af albumliste:'+ error)
        }
    }

    static async getAlbumById(id) {
        try {
            const { data, error } = await supabase
                .from('albums')
                .select('*')
                .eq('id', id)
                .single()
                if (error) {
                    throw new Error(error)
                } else {
                    return data
                }
        } catch (error) {
            console.error('Fejl i kald af album:'+ error)
        }
    }

    static async createAlbum(formdata) {
        try {
            const { data, error } = await supabase
                .from('albums')
                .insert([
                    {
                        artist_id: formdata.artist_id,
                        title: formdata.title,
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