import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLandslideRounded24Px = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="tui-icon"
    ref={ref}
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="m15.47 13.79-2.58-1.03L6 15.05l-4-1.54v2.1l4 1.34zM10.57 11.42 8.6 8.8C8.22 8.3 7.63 8 7 8H4c-1.1 0-2 .9-2 2v1.61l4 1.33zM6 19.05l-4-1.33V20c0 1.1.9 2 2 2h14c1.65 0 2.59-1.88 1.6-3.2l-2.57-3.42zM17 4.65V2.64A2 2 0 0 0 15.39.68L12.81.16c-.52-.1-1.06 0-1.5.3l-1.42.95C9.33 1.78 9 2.4 9 3.07v1.86c0 .67.33 1.29.89 1.66l1.23.82c.55.37 1.24.44 1.85.19l2.77-1.11C16.5 6.2 17 5.46 17 4.65M17.75 7.6l-1 .8c-.47.38-.75.95-.75 1.56v1.08c0 .61.28 1.18.75 1.56l.8.64c.58.47 1.38.57 2.06.27l2.2-.98c.72-.32 1.19-1.04 1.19-1.83V9.6c0-.94-.65-1.75-1.57-1.95l-2-.44a1.99 1.99 0 0 0-1.68.39" />
  </svg>
);
const ForwardRef = forwardRef(SvgLandslideRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
