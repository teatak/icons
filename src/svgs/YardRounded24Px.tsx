import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgYardRounded24Px = (
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
    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 8.22a1.562 1.562 0 0 1 2.45-1.28l-.01-.12c0-.86.7-1.56 1.56-1.56s1.56.7 1.56 1.56l-.01.12A1.562 1.562 0 0 1 16 8.22c0 .62-.37 1.16-.89 1.4.52.25.89.79.89 1.41 0 .86-.7 1.56-1.56 1.56-.33 0-.64-.11-.89-.28l.01.12c0 .86-.7 1.56-1.56 1.56s-1.56-.7-1.56-1.56l.01-.12A1.562 1.562 0 0 1 8 11.03c0-.62.37-1.16.89-1.4C8.37 9.38 8 8.84 8 8.22M12 19c-2.83 0-5.21-1.97-5.84-4.61-.18-.74.49-1.4 1.23-1.23C10.03 13.79 12 16.17 12 19c0-2.83 1.97-5.21 4.61-5.84.74-.18 1.4.49 1.23 1.23A6.015 6.015 0 0 1 12 19" />
    <circle cx={12} cy={9.62} r={1.56} />
  </svg>
);
const ForwardRef = forwardRef(SvgYardRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
