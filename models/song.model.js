import { supabase } from "../config/supabase_config.js";

export default class Song {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
                .from('songs')
                .select('id, title, content, created_at, artists(name)')
                if (error) {
                    throw new Error(error)
                } else {
                    return data
                }
        } catch (error) {
            console.error('Fejl i kald af sangliste:'+ error)
        }
    }

    static async getRecordById(id) {
        try {
            const { data, error } = await supabase
                .from('songs')
                .select('*')
                .eq('id', id)
                .single()
                if (error) {
                    throw new Error(error)
                } else {
                    return data
                }
        } catch (error) {
            console.error('Fejl i kald af sang:'+ error)
        }
    }

    static async createRecord(formdata) {
        try {
            const { data, error } = await supabase
                .from('songs')
                .insert([
                    {
                        title: formdata.title,
                        content: formdata.content,
                        artist_id: formdata.artist_id,
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