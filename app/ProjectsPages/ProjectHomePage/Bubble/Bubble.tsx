import { useState, useEffect, useRef } from 'react';
// import "./bubble.css";
import clipboard_project from "./digitalClipboard.png";
import medicationcase_project from "./AlertCase2.png";
import rr_project from "./RainyRiches.png";
import windsorhousign_project from "./windsor.jpeg";

export default function BubbleGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
    const [isClient, setIsClient] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState({ left: 0, top: 0 });

    // Check if we're running in the browser
    useEffect(() => {
        setIsClient(true);
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    // Update dimensions and set up initial centering
    useEffect(() => {
        if (!isClient) return;

        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', updateDimensions);

        // Call centerBubble on component mount (equivalent to body onload)
        centerBubble();

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [isClient]);

    // Animation frame for scaling items based on position
    useEffect(() => {
        if (!isClient) return;

        let animationFrameId: number;

        const onScroll = () => {
            if (!containerRef.current) return;

            const { width: w, height: h } = dimensions;
            const items = itemsRef.current.filter((item): item is HTMLDivElement => item !== null);

            items.forEach((item) => {
                const pos = item.getBoundingClientRect();

                let s = (pos.top + (pos.height / 2) - (h / 2)) / h;
                s = 1 - Math.abs(s);
                s = s < 0 ? 0 : (s > 1 ? 1 : s);

                let s2 = (pos.left + (pos.width / 2) - (w / 2)) / w;
                s2 = 1 - Math.abs(s2);
                s2 = s2 < 0 ? 0 : (s2 > 1 ? 1 : s2);

                s = (s + s2) * 1.05 / 2;

                item.style.transform = `scale(${s})`;
            });

            animationFrameId = requestAnimationFrame(onScroll);
        };

        animationFrameId = requestAnimationFrame(onScroll);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [dimensions, isClient]);

    // Mouse event handlers for dragging
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        setIsDragging(true);
        setStartPoint({
            x: e.pageX - containerRef.current.offsetLeft,
            y: e.pageY - containerRef.current.offsetTop
        });
        setScrollPosition({
            left: containerRef.current.scrollLeft,
            top: containerRef.current.scrollTop
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;

        e.preventDefault();

        // Calculate new scroll position
        const x = e.pageX - containerRef.current.offsetLeft;
        const walkX = x - startPoint.x;

        const y = e.pageY - containerRef.current.offsetTop;
        const walkY = y - startPoint.y;

        containerRef.current.scrollLeft = scrollPosition.left - walkX;
        containerRef.current.scrollTop = scrollPosition.top - walkY;
    };

    const centerBubble = () => {
        if (!isClient || !containerRef.current) return;

        // Find the element with id="center"
        const centerElement = itemsRef.current.find((item) => item && item.id === 'center');

        if (centerElement) {
            const rect = centerElement.getBoundingClientRect();

            containerRef.current.scrollLeft = rect.left - (dimensions.width / 2) + (rect.width / 2);
            containerRef.current.scrollTop = rect.top - (dimensions.height / 2) + (rect.height / 2);
        }
    };

    // Set ref callback that properly assigns the element to our array
    const setItemRef = (index: number) => (el: HTMLDivElement | null) => {
        itemsRef.current[index] = el;
    };

    // Define the interface for grid items
    interface GridItem {
        type: 'empty' | 'link' | 'text';
        href?: string;
        img?: string;
        imgAlt?: string;
        text?: string;
        isCenter?: boolean;
    }

    // Grid items as defined in the original HTML
    const gridItems: GridItem[] = [

        {
            type: 'text',
            text: 'to do list application because I have the memory of a goldfish'

        },

        {
            type: 'text',
            text: 'background music app so your life is like a movie'
        },

        {
            type: 'text',
            text: 'overly complicated capta'
        },

        { type: 'empty' },
        { type: 'empty' },
        { type: 'empty' },
        { type: 'empty' },

        {
            type: 'link',
            href: '/projects/alertingmedicationcase',
            img: medicationcase_project,
            imgAlt: 'Alert Case',
            isCenter: true
        },

        {
            type: 'link',
            href: '/projects/digitalclipboard',
            img: clipboard_project,
            imgAlt: 'Digital Clipboard'
        },
        {
            type: 'link',
            href: '/projects/windsorhousing',
            img: windsorhousign_project,
            imgAlt: 'Windsor Housing'
        },
        {
            type: 'link',
            href: '/projects/rainyriches',
            img: rr_project,
            imgAlt: 'Rainy Riches'
        },


        {
            type: 'text',
            text: 'wordle but midterms studying'
        },

        {
            type: 'text',
            text: 'a truly functioning alarm clock for 8:30am lectures'
        },

        {
            type: 'text',
            text: 'a overly complicated tip calculator'
        },


        { type: 'empty' },
        { type: 'empty' },

        { type: 'empty' },
        { type: 'empty' },


        { type: 'empty' },
        { type: 'empty' },


        { type: 'empty' }
    ];

    return (
        <div className="h-120 overflow-hidden mx-20 bg-black/60 md:w-4/5 w-1/6 rounded-xl">
            <div
                className="container hide-scrollbar cursor-grab overflow-auto h-full"
                id="items-container"
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}

            >
                <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 150px)', gridTemplateRows: 'repeat(3, 150px)', gap: '120px', padding: '10px', width: 'max-content' }}>
                    {gridItems.map((item, index) => {
                        // Render different content based on item type
                        let content = null;

                        if (item.type === 'link' && item.href && item.img) {
                            content = (
                                <a
                                    className="test"
                                    href={item.href}
                                    target="_parent"
                                    style={{ display: 'block', height: '100%' }}
                                >
                                    <img
                                        className="h-full w-full"
                                        src={item.img}
                                        alt={item.imgAlt || ''}
                                    />
                                </a>
                            );
                        } else if (item.type === 'text' && item.text) {
                            content = <p className="bubbleText">{item.text}</p>;
                        }

                        return (
                            <div
                                key={index}
                                ref={setItemRef(index)}
                                className="grid-item border-transparent border-4 bg-teal-900 text-white text-center hover:text-emerald-200 hover:border-emerald-200 "
                                id={item.isCenter ? "center" : ""}
                                style={{
                                    width: '250px',
                                    height: '250px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    padding: '0px',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                {content}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}