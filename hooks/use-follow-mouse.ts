import { useState, RefObject, useEffect } from "react";

const OBJECT_ROTATION = 20 as const;
const OBJECT_X_OVERFLOW = 40 as const;

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState<{x:number,y:number}>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;

      if (point.x < x) {
        setRotation(-OBJECT_ROTATION);
        setPoint({ x:x+OBJECT_X_OVERFLOW , y });
      }
      else if (point.x > x) {
        setRotation(OBJECT_ROTATION);
        setPoint({ x:x-OBJECT_X_OVERFLOW, y });
      }
      else {
        setRotation(0);
        setPoint({ x, y });
      }

    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { point, rotation };
}
