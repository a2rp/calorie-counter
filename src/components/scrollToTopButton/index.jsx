import React from "react";
import { FiArrowUp } from "react-icons/fi";
import styled from "styled-components";

export default function ScrollToTopButton({ threshold = 50 }) {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > threshold);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    return (
        <Styled.Wrapper
            type="button"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-visible={visible}
        >
            <FiArrowUp aria-hidden="true" />
        </Styled.Wrapper>
    );
}

export const Styled = {
    Wrapper: styled.button`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 1000;
        width: 44px;
        height: 44px;
        display: grid;
        place-items: center;
        border: 1px solid currentColor;
        border-radius: 999px;
        color: inherit;
        background: #09121d;
        cursor: pointer;
        opacity: 0;
        transform: translateY(8px);
        pointer-events: none;
        transition: opacity 200ms ease, transform 200ms ease, box-shadow 160ms ease;

        &[data-visible="true"] {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        &:hover,
        &:focus-visible {
            box-shadow: 0 0 18px rgba(79, 209, 157, 0.25);
        }

        &:focus-visible {
            outline: 2px solid currentColor;
            outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
            transition: none;
            transform: none;
        }
    `,
};
