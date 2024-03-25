import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTsunamiRounded24Px = (
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
    <path d="M18.16 17.98c-2.76 1.76-4.67.77-5.61.08a.96.96 0 0 0-1.12.01c-.97.7-2.83 1.65-5.55-.06-.33-.21-.75-.23-1.07-.01-.91.61-1.53.85-2 .94s-.81.5-.81.97c0 .6.54 1.09 1.13.98.77-.14 1.51-.42 2.2-.83a6.58 6.58 0 0 0 6.67 0 6.54 6.54 0 0 0 6.67 0c.69.41 1.44.69 2.21.83.59.11 1.13-.38 1.13-.98v-.01c0-.47-.33-.88-.8-.97-.49-.1-1.11-.34-2.02-.94a.96.96 0 0 0-1.03-.01M19.33 12H21c.55 0 1-.45 1-1s-.45-1-1-1h-1.61c-1.86 0-3.4-1.5-3.39-3.36 0-.37.06-.7.16-1.05.37-1.29-.56-2.56-1.89-2.59H14C7.36 3 2.15 8.03 2.01 14.5v.03c-.04 1.13 1.07 1.98 2.14 1.6.4-.14.78-.32 1.15-.54 2.08 1.2 4.64 1.22 6.7-.02a6.54 6.54 0 0 0 6.67 0c.68.41 1.42.68 2.18.82a.99.99 0 0 0 1.16-.98v-.01c0-.46-.32-.88-.78-.97-.49-.09-1.12-.33-2.03-.94a.95.95 0 0 0-1.05-.01c-2.73 1.74-4.63.77-5.58.09a.99.99 0 0 0-1.16-.01c-.15.11-.09.06-.32.2-.7-.94-1.09-2.06-1.09-3.26 0-2.58 1.77-4.74 4.21-5.33-.13.51-.21 1.02-.21 1.5C14 9.61 16.39 12 19.33 12" />
  </svg>
);
const ForwardRef = forwardRef(SvgTsunamiRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
