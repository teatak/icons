import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSkateboardingSharp24Px = (
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
    <path d="M13 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M7.25 22.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m8.5 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m3.49-3.5a.72.72 0 0 0-.59.3c-.55.73-1.42 1.2-2.4 1.2H16v-6l-4.32-2.67 1.8-2.89A6.51 6.51 0 0 0 19 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C14.16 5.64 13.61 5 12.7 5H7L4.5 9l1.7 1.06L8.1 7h2.35l-2.89 4.63 1.62 5.03-3.12 3.76c-.7-.16-1.3-.57-1.71-1.12a.749.749 0 1 0-1.2.9c.82 1.1 2.13 1.8 3.6 1.8h9.5c1.47 0 2.78-.7 3.6-1.8.1-.14.15-.3.15-.45 0-.39-.32-.75-.76-.75M14 20.5H8.6l2.9-3.5-1-3.3 3.5 2.2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSkateboardingSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
