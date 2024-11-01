interface Property {
  id: number;
  property_type_id: number;
  name: string;
  url: string;
  checkin_time: string;
  checkout_time: string;
  cutoff_days: number;
  cutoff_time: string;
  room_tax: string;
  currency: string;
  is_tripadvisor_partner: number;
  has_ean_parity_control: boolean;
  booking_engine: string;
  discount_rebate_type: string;
  publisherProperties: PublisherProperty[];
  description: Description;
  telephones: Telephone[];
  property_direct_booking?: DirectBooking;
  type: PropertyType;
  amenities: Amenity[];
  propertyProviders: PropertyProvider[];
  images: Image[];
  accommodations: any[];
  addresses: Address[];
  rating: Rating[];
  inventory_connections: InventoryConnection[];
}

interface PublisherProperty {
  sort_order: number;
  is_preferred: number;
}

interface Description {
  short_description: string;
  long_description: string;
  location_short_description?: string;
  why_we_like_it?: string;
  why_we_like_it_list: string;
  what_you_need_to_know: string;
  staff_pick?: string;
}

interface Telephone {
  type: string;
  number: string;
}

interface DirectBooking {
  book_direct_link: string;
}

interface PropertyType {
  id: number;
  name: string;
  status: string;
}

interface Amenity {
  id: number;
  amenity_category_id: number;
  name: string;
  slug?: string | null;
}

interface PropertyProvider {
  property_id: number;
  provider_id: number;
  provider: Provider;
}

interface Provider {
  id: number;
  name: string;
  model: string;
  type: string;
  is_active: number;
}

interface Image {
  id: number;
  property_id: number;
  alt: string | null;
  is_hero_image: number;
  is_location_image: number;
  season?: string | null;
  filename: string;
  url: string;
}

interface Address {
  id: number;
  line_1: string;
  city: string;
  geolocation: Geolocation;
}

interface Geolocation {
  id: number;
  latitude: string;
  longitude: string;
}

interface Rating {
  id: number;
  property_id: number;
  stars: string;
  created: string;
  modified: string;
}

interface InventoryConnection {
  id: number;
  name: string;
}
