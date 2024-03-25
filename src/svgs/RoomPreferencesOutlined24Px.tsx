import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRoomPreferencesOutlined24Px = (
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
    <path d="m21.69 16.37 1.14-1-1-1.73-1.45.49q-.48-.405-1.08-.63L19 12h-2l-.3 1.49q-.6.225-1.08.63l-1.45-.49-1 1.73 1.14 1c-.08.5-.08.76 0 1.26l-1.14 1 1 1.73 1.45-.49q.48.405 1.08.63L17 22h2l.3-1.49q.6-.225 1.08-.63l1.45.49 1-1.73-1.14-1c.08-.51.08-.77 0-1.27M18 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m1-15v6h-2V6h-2v6h-2V5H7v14h5v2H3v-2h2V3h10v1zm-7 9h-2v-2h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRoomPreferencesOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
