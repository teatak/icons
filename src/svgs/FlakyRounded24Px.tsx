import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlakyRounded24Px = (
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
    <path
      fillRule="evenodd"
      d="M12.16 15.72a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.82.82L16 13.52c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.65 2.65c-.19.19-.51.2-.7 0zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2M7.87 6.81l.88.88.88-.88c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.88.88.88.88c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.88-.88-.88.88c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l.88-.88-.88-.88a.754.754 0 0 1 0-1.06c.29-.3.76-.3 1.06 0M12 20c-2.2 0-4.2-.9-5.7-2.3L17.7 6.3C19.1 7.8 20 9.8 20 12c0 4.4-3.6 8-8 8"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFlakyRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
