import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRoomPreferencesTwoTone24Px = (
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
      d="M13 12.11V5H7v14h4.29c-.19-.63-.29-1.3-.29-2 0-1.91.76-3.63 2-4.89M10 11h2v2h-2z"
      opacity={0.3}
    />
    <path d="M12 13h-2v-2h2zm-5 6V5h6v7.11c.57-.59 1.25-1.07 2-1.42V6h2v4h2V4h-4V3H5v16H3v2h9.26c-.42-.6-.75-1.28-.97-2zm14.69-1.37 1.14 1-1 1.73-1.45-.49q-.48.405-1.08.63L19 22h-2l-.3-1.49q-.6-.225-1.08-.63l-1.45.49-1-1.73 1.14-1c-.08-.5-.08-.76 0-1.26l-1.14-1 1-1.73 1.45.49q.48-.405 1.08-.63L17 12h2l.3 1.49q.6.225 1.08.63l1.45-.49 1 1.73-1.14 1c.08.51.08.77 0 1.27M20 17c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2" />
  </svg>
);
const ForwardRef = forwardRef(SvgRoomPreferencesTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
