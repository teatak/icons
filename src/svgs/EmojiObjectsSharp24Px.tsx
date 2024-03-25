import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEmojiObjectsSharp24Px = (
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
    <path d="M12 3c-.42 0-.85.04-1.28.11-2.81.5-5.08 2.75-5.6 5.55-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V21h2.28a1.98 1.98 0 0 0 3.44 0H16v-4.31c0-.55.22-1.09.64-1.46A6.96 6.96 0 0 0 19 10c0-3.87-3.13-7-7-7m2 16h-4v-1h4zm0-2h-4v-1h4zm-1.5-5.59V14h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEmojiObjectsSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
