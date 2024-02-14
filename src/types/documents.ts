
export interface Document {
    type: string;
    name: string;
    added?: string;
    size?: number;
    files?: Document[];
  }
  