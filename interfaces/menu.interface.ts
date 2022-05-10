export interface MENU {
  id: number;
  title: string;
  type_label: type_label;
  object_slug: string;
  description: string;
  order: number;
}

enum type_label {
  Page,
  Post,
  custom,
}
