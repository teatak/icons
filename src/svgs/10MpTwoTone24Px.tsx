import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg10MpTwoTone24Px = (
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
    <path d="M13.5 7H15v3h-1.5zM15 14h1.5v1.5H15z" opacity={0.3} />
    <path
      d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-6-7c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H13c-.55 0-1-.45-1-1zm-5-1h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z"
      opacity={0.3}
    />
    <path d="M13 11.5h2.5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-4.5H15v3h-1.5zM7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zM8.5 11.5H10v-6H7V7h1.5zM13.5 18.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z" />
  </svg>
);
const ForwardRef = forwardRef(Svg10MpTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
