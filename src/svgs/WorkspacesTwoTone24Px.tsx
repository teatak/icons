import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWorkspacesTwoTone24Px = (
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
    <circle cx={6} cy={17} r={2} opacity={0.3} />
    <circle cx={12} cy={7} r={2} opacity={0.3} />
    <circle cx={18} cy={17} r={2} opacity={0.3} />
    <path d="M18 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M6 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M16 7c0-2.2-1.8-4-4-4S8 4.8 8 7s1.8 4 4 4 4-1.8 4-4m-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgWorkspacesTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
