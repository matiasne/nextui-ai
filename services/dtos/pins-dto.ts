interface PinDTO {
  name: string;
  description: string;
  image: string;
  photo: string;
  text_color: string;
  background_color: string;
  latitude: string;
  longitude: string;
  zoom_level: number;
  affiliates: string; // JSON string, parse if needed for further details
  svg_size: string; // Consider converting to number if appropriate
  file: string;
  photoFile: string;
}
