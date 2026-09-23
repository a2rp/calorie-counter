import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./styled";

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
