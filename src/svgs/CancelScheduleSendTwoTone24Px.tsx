import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCancelScheduleSendTwoTone24Px = (
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
      d="m3 17.97 6.1-2.61c.02-.14.04-.29.07-.43L3 15.75zM16.5 11c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5m2.47 7.27-.71.71-1.77-1.77-1.77 1.77-.71-.71 1.77-1.77-1.77-1.77.71-.71 1.77 1.77 1.77-1.77.71.71-1.77 1.77zM3 8.25l7.52 1-7.51-3.22z"
      opacity={0.3}
    />
    <path d="M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l10.06 1.34c-.42.44-.78.93-1.09 1.46L1 14l.01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9M3 8.25l.01-2.22 7.51 3.22zm6.1 7.11L3 17.97v-2.22l6.17-.82c-.03.14-.05.28-.07.43M16.5 22c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5" />
    <path d="m18.27 14.03-1.77 1.76-1.77-1.76-.7.7 1.76 1.77-1.76 1.77.7.7 1.77-1.76 1.77 1.76.7-.7-1.76-1.77 1.76-1.77z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCancelScheduleSendTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
