export interface Event {
  title: string;
  description: string;
  category: string;
  end_local: string;
  phq_attendance: number;
  location: number[];
  predicted_end: string;
  entities: [{
      name: string;
    }];
  geo: {
    address: {
      formatted_address: string;
    }
  };
}