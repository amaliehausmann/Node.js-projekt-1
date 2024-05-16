import { supabase } from "../config/supabase_config.js";

export default class Song {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
                .from('songs')
                .select('*')
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
}