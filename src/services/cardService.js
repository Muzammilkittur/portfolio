// src/services/cardService.js
import { supabase } from "../components/DataBase/supabaseClient";

export const fetchCards = async () => {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    console.error('Failed to fetch cards:', error.message);
    return [];
  }

  return data;
};
