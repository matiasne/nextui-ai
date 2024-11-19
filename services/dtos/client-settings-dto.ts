interface ClientSettingsDTO {
  organization: string;
  organization_currency: string;
  destinations: Destination[];
  destinationIDs: number[];
  redirect: string;
  publisher: Publisher;
}

interface Destination {
  id: number;
  name: string;
  region: string | null;
  filters: Filter[];
}

interface Filter {
  id: number;
  name: string;
  children: any[]; // Adjust the type if `children` structure is known
}

interface Publisher {
  id: number;
  organization_id: number;
  parent_publisher_id: number;
  name: string;
  key: string;
  status: string;
  created: string;
  modified: string;
  contract_type: number;
  commission: string;
  google_map_key: string;
  google_map_id: string;
  map_longitude: string;
  map_latitude: string;
  map_zoom: number;
  meta_data: MetaData;
  map_type: string;
  domain: string;
  api_key: string;
  reservation_phone_number: string;
  redirect_flag: number;
  redirect_url: string;
  reservation_email_address: string;
  organization: Organization;
}

interface MetaData {
  client: ClientSettings;
  widget: WidgetSettings;
  widgets: Record<string, WidgetSettings>;
}

interface ClientSettings {
  booking_engine: string;
  sort_type: string;
  destination_type: string;
  title_tag: string;
  description_tag: string;
  allow_pagination: boolean;
  results_per_page: number;
  show_sold_out: boolean;
  show_units_amount: boolean;
  show_inventory_count: boolean;
  filter_max_rate_price: number;
  show_accommodation_publisher_description: boolean;
  feature_filter_title: string;
  google_map_key: string;
  google_map_id: string;
  publisher_phone: string;
  phone_number_call_out: string;
  show_hotel_address: Record<string, string>;
  show_hotel_phone: boolean;
  show_external_hotel_link: boolean;
  display_tripadvisor: boolean;
  soldout_text: string;
  google_tag_manager: string;
  google_tag_manager_2: string;
  datalayer_ecommerce: boolean;
  guest_information: boolean;
  billing_information: boolean;
  patient_information: boolean;
  additional_terms_and_conditions: string;
  booking_disclaimer: string;
  privacy_policy_url: string;
  terms_of_use_url: string;
  currency: string;
  show_fee_breakdown: boolean;
  promotion_required: boolean;
  minimum_promotion_percent: string;
  gdpr_cookie_consent: boolean;
  shopping_cart: boolean;
  shopping_cart_modal_box: boolean;
  ean_parity_control: boolean;
  powered_by_rootrez_link: boolean;
  lodging_alternative: string;
  default_guest_name: string;
  default_guest_lastname: string;
  default_guest_email: string;
  default_guest_phone: string;
  inter_image: string;
  inter_text: string;
}

interface WidgetSettings {
  primaryColor: string;
  secondaryColor: string;
  submission_url: string;
  title_text: string;
  tagline_text: string;
  default_checkin: string;
  default_checkout: string;
  min_checkin: string;
  max_checkout: string;
  value_add_code: string;
  referrals: string;
  results_in_new_tab?: boolean;
}

interface Organization {
  id: number;
  name: string;
  title: string;
  monthly_fee: number;
  room_revenue_percentage: string;
  logo_url: string;
  currency: string;
  created: string;
  modified: string;
  is_active: boolean;
}
