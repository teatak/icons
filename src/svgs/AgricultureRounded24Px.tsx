import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAgricultureRounded24Px = (
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
    <path d="M19.5 11.97c.93 0 1.78.28 2.5.76V7.97c0-1.1-.9-2-2-2h-6.29l-1.06-1.06 1.06-1.06c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-2.83 2.83c-.2.2-.2.51 0 .71s.51.2.71 0l1.06-1.06L13 6.68v2.29c0 1.1-.9 2-2 2h-.54a5.98 5.98 0 0 1 1.54 4c0 .34-.04.67-.09 1h3.14c.25-2.24 2.14-4 4.45-4" />
    <path d="M19.5 12.97c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M4 8.97h5c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1 0 .56.45 1 1 1M9.83 13.79l-.18-.47.93-.35a4.92 4.92 0 0 0-2.31-2.43l-.4.89-.46-.21.4-.9c-.55-.21-1.17-.35-1.81-.35-.53 0-1.04.11-1.52.26l.34.91-.47.18L4 10.4a4.92 4.92 0 0 0-2.43 2.31l.89.4-.21.46-.9-.4a4.9 4.9 0 0 0-.35 1.8c0 .53.11 1.04.26 1.52l.91-.34.18.47-.93.35a4.92 4.92 0 0 0 2.31 2.43l.4-.89.46.21-.4.9c.57.22 1.18.35 1.82.35.53 0 1.04-.11 1.52-.26l-.35-.91.47-.18.35.93a4.92 4.92 0 0 0 2.43-2.31l-.89-.4.21-.46.9.4c.22-.57.35-1.18.35-1.82 0-.53-.11-1.04-.26-1.52zm-2.68 3.96c-1.53.63-3.29-.09-3.92-1.62s.09-3.29 1.62-3.92 3.29.09 3.92 1.62c.64 1.53-.09 3.28-1.62 3.92" />
  </svg>
);
const ForwardRef = forwardRef(SvgAgricultureRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
