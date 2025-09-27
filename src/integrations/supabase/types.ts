export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          email: string
          id: string
          password_hash: string
          role: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          password_hash: string
          role?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          password_hash?: string
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          canonical_url: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          noindex: boolean | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          canonical_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          noindex?: boolean | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          canonical_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          noindex?: boolean | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      media: {
        Row: {
          alt_text: string | null
          caption: string | null
          created_at: string
          file_path: string
          file_size: number
          filename: string
          id: string
          mime_type: string
          original_filename: string
          uploaded_by: string
        }
        Insert: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string
          file_path: string
          file_size: number
          filename: string
          id?: string
          mime_type: string
          original_filename: string
          uploaded_by: string
        }
        Update: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string
          file_path?: string
          file_size?: number
          filename?: string
          id?: string
          mime_type?: string
          original_filename?: string
          uploaded_by?: string
        }
        Relationships: []
      }
      post_tags: {
        Row: {
          id: string
          post_id: string
          tag_id: string
        }
        Insert: {
          id?: string
          post_id: string
          tag_id: string
        }
        Update: {
          id?: string
          post_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_tags_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          author_id: string
          canonical_url: string | null
          category_id: string | null
          content: string
          created_at: string
          excerpt: string | null
          focus_keyword: string | null
          id: string
          noindex: boolean | null
          og_description: string | null
          og_image_url: string | null
          og_title: string | null
          post_type: string
          published_at: string | null
          schema_enabled: boolean | null
          secondary_keywords: string[] | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          status: string
          title: string
          twitter_description: string | null
          twitter_image_url: string | null
          twitter_title: string | null
          updated_at: string
        }
        Insert: {
          author_id: string
          canonical_url?: string | null
          category_id?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          focus_keyword?: string | null
          id?: string
          noindex?: boolean | null
          og_description?: string | null
          og_image_url?: string | null
          og_title?: string | null
          post_type?: string
          published_at?: string | null
          schema_enabled?: boolean | null
          secondary_keywords?: string[] | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          status?: string
          title: string
          twitter_description?: string | null
          twitter_image_url?: string | null
          twitter_title?: string | null
          updated_at?: string
        }
        Update: {
          author_id?: string
          canonical_url?: string | null
          category_id?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          focus_keyword?: string | null
          id?: string
          noindex?: boolean | null
          og_description?: string | null
          og_image_url?: string | null
          og_title?: string | null
          post_type?: string
          published_at?: string | null
          schema_enabled?: boolean | null
          secondary_keywords?: string[] | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          status?: string
          title?: string
          twitter_description?: string | null
          twitter_image_url?: string | null
          twitter_title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      redirects: {
        Row: {
          created_at: string
          enabled: boolean | null
          from_url: string
          id: string
          redirect_type: number
          to_url: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          enabled?: boolean | null
          from_url: string
          id?: string
          redirect_type?: number
          to_url: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          enabled?: boolean | null
          from_url?: string
          id?: string
          redirect_type?: number
          to_url?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_settings: {
        Row: {
          canonical_url: string | null
          created_at: string
          ga4_measurement_id: string | null
          gsc_verification_tag: string | null
          gtm_container_id: string | null
          id: string
          meta_description: string
          robots_txt: string | null
          secondary_description: string | null
          site_title: string
          sitemap_enabled: boolean | null
          updated_at: string
        }
        Insert: {
          canonical_url?: string | null
          created_at?: string
          ga4_measurement_id?: string | null
          gsc_verification_tag?: string | null
          gtm_container_id?: string | null
          id?: string
          meta_description?: string
          robots_txt?: string | null
          secondary_description?: string | null
          site_title?: string
          sitemap_enabled?: boolean | null
          updated_at?: string
        }
        Update: {
          canonical_url?: string | null
          created_at?: string
          ga4_measurement_id?: string | null
          gsc_verification_tag?: string | null
          gtm_container_id?: string | null
          id?: string
          meta_description?: string
          robots_txt?: string | null
          secondary_description?: string | null
          site_title?: string
          sitemap_enabled?: boolean | null
          updated_at?: string
        }
        Relationships: []
      }
      sitelinks: {
        Row: {
          created_at: string
          description: string | null
          enabled: boolean | null
          id: string
          priority: number
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          enabled?: boolean | null
          id?: string
          priority?: number
          title: string
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          description?: string | null
          enabled?: boolean | null
          id?: string
          priority?: number
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          canonical_url: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          noindex: boolean | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          canonical_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          noindex?: boolean | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          canonical_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          noindex?: boolean | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
