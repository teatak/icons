import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg5KPlusRounded24Px = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9.75 7.5H7.5v1H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H6.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H8.5v-1H7c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75m5.34 4.5c-.22 0-.42-.1-.55-.27l-1.54-1.98v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5l1.54-1.98a.698.698 0 0 1 1.11.85L13.75 12l1.41 1.88c.34.46.01 1.12-.57 1.12m3.91-2.5h-1v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1v-1c0-.28.22-.5.5-.5s.5.22.5.5v1h1c.28 0 .5.22.5.5s-.22.5-.5.5" />
  </svg>
);
const ForwardRef = forwardRef(Svg5KPlusRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
