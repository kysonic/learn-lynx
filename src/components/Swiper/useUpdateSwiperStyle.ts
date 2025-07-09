import { useMainThreadRef, useRef } from '@lynx-js/react';
import type { MainThread, NodesRef } from '@lynx-js/types';

export function useUpdateSwiperStyle() {
    const containerRef = useMainThreadRef<MainThread.Element>(null);

    function updateSwiperStyle(offset: number) {
        'main thread';
        containerRef.current?.setStyleProperties({
            transform: `translateX(${offset}px)`,
        });
    }

    return {
        containerRef,
        updateSwiperStyle,
    };
}
