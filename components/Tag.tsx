interface TagProps {
  name: string;
}

export const Tag = ({ name }: TagProps) => (
  <span className="inline-flex items-center h-5 px-2.5 rounded-sm bg-gradient-to-r from-pink-500 to-purple-500 text-xs font-medium text-white">
    {name}
  </span>
);
