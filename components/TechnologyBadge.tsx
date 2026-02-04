interface TechnologyBadgeProps {
  name: string;
  badge: string;
}

export const TechnologyBadge = ({ name, badge }: TechnologyBadgeProps) => (
  <img
    src={badge}
    alt={name}
    className="rounded-md opacity-75 hover:opacity-100 transition-opacity"
  />
);
