import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShowerSharp24Px = (
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
    <circle cx={8} cy={17} r={1} />
    <circle cx={12} cy={17} r={1} />
    <circle cx={16} cy={17} r={1} />
    <path d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92" />
    <circle cx={8} cy={20} r={1} />
    <circle cx={12} cy={20} r={1} />
    <circle cx={16} cy={20} r={1} />
  </svg>
);
const ForwardRef = forwardRef(SvgShowerSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
