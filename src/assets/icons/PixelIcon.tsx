export const PixelIcon = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg
      {...props}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m7 6h-2v-2h2zm10 0h2v-2h-2zm6 6v6h-2v-4h-2v4h-2v-2h-10v2h-2v-4h-2v4h-2v-6h2v-2h2v-2h2v-2h2v2h6v-2h2v2h2v2h2v2zm-8-2v2h2v-2zm-8 2h2v-2h-2zm4 6h-4v2h4zm6 0h-4v2h4z" />
    </svg>
  );
};
