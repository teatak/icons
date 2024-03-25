import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPeopleAlt24Px = (
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
    <path
      fillRule="evenodd"
      d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87"
    />
    <circle cx={9} cy={8} r={4} fillRule="evenodd" />
    <path
      fillRule="evenodd"
      d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24M9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPeopleAlt24Px);
const Memo = memo(ForwardRef);
export default Memo;
