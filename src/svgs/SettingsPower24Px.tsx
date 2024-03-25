import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSettingsPower24Px = (
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
    <path d="M7 24h2v-2H7zm4 0h2v-2h-2zm2-22h-2v10h2zm3.56 2.44-1.45 1.45A5.97 5.97 0 0 1 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44A7.96 7.96 0 0 0 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56M15 24h2v-2h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSettingsPower24Px);
const Memo = memo(ForwardRef);
export default Memo;
