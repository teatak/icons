import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSquareFootRounded24Px = (
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
    <path d="m17.66 17.66-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71L9.7 9.7l-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.49-1.49a.5.5 0 0 0-.85.36V18c0 1.1.9 2 2 2h12.79c.45 0 .67-.54.35-.85zM7 16v-4.76L12.76 17H8c-.55 0-1-.45-1-1" />
  </svg>
);
const ForwardRef = forwardRef(SvgSquareFootRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
