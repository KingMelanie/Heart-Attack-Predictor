export type User = {
  id: number;
  name: string;
  email: string;
  conversation_id?: string;
  password: string;
};

export interface SiteData {
  title: string;
  user?: User;
  children?: any;
}
