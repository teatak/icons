import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTungstenRounded24Px = (
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
    <path d="M12 19c-.56 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1M5.99 17.09l-.71.71a.996.996 0 1 0 1.41 1.41l.71-.71a.996.996 0 0 0 0-1.41c-.38-.38-1.02-.38-1.41 0M5 12c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1M21 11h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1M18.01 17.09a.996.996 0 1 0-1.41 1.41l.71.71a.996.996 0 1 0 1.41-1.41zM15 8.02V5c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3.02c-1.43 1.08-2.28 2.9-1.91 4.91.36 1.95 1.9 3.55 3.84 3.95C14.16 17.56 17 15.11 17 12c0-1.63-.79-3.06-2-3.98m-2-.92c-.32-.06-.66-.1-1-.1s-.68.04-1 .1V5h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTungstenRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
