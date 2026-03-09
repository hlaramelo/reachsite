export interface NavLink {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Fund {
  name: string;
  subtitle: string;
  description: string;
  target: string;
  benchmark: string;
  volatility: string;
  strategy: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface PhilosophyPillar {
  title: string;
  description: string;
  icon: string;
}

export interface TrackRecordItem {
  fund: string;
  highlight: string;
  description: string;
}
