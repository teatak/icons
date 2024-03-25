import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSurfingOutlined24Px = (
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
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 23c-1.03 0-2.06-.25-3-.75-1.89 1-4.11 1-6 0-1.89 1-4.11 1-6 0-.95.5-1.97.75-3 .75H2v-2h1c1.04 0 2.08-.35 3-1 1.83 1.3 4.17 1.3 6 0 1.83 1.3 4.17 1.3 6 0 .91.65 1.96 1 3 1h1v2zM17 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-2.57 6.98L12.18 10 16 13v3.84c.53.38 1.03.78 1.49 1.17-.68.58-1.55.99-2.49.99-1.2 0-2.27-.66-3-1.5-.73.84-1.8 1.5-3 1.5-.33 0-.65-.05-.96-.14C5.19 16.9 3 14.72 3 13.28 3 12.25 4.01 12 4.85 12c.98 0 2.28.31 3.7.83l-.53-3.1c-.11-.67.18-1.38.78-1.79l2.15-1.45-2-.37-2.82 1.93L5 6.4 8.5 4l5.55 1.03c.45.09.93.37 1.22.89l.88 1.55A5.01 5.01 0 0 0 20.5 10v2a7.01 7.01 0 0 1-6.07-3.52M10.3 11.1l.44 2.65c.92.42 2.48 1.27 3.26 1.75V14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSurfingOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
