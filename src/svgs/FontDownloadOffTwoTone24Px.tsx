import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFontDownloadOffTwoTone24Px = (
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
      d="M10.35 7.52 10.92 6h2.14l2.55 6.79L20 17.17V4H6.83zm2.23 2.23-.54-1.52h-.1l-.23.66zM17.17 20l-5.07-5.07H9.58L8.49 18H6.41l2.39-6.37L4 6.83V20z"
      opacity={0.3}
    />
    <path d="M4.83 2H20c1.1 0 2 .9 2 2v15.17l-2-2V4H6.83zm6.09 4-.57 1.52 1.36 1.36.23-.66h.1l.54 1.52 3.04 3.04L13.07 6zm9.57 17.31L19.17 22H4c-1.1 0-2-.9-2-2V4.83L.69 3.51 2.1 2.1l19.8 19.8zM17.17 20l-5.07-5.07H9.58L8.49 18H6.41l2.39-6.37L4 6.83V20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFontDownloadOffTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
