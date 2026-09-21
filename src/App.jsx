import { createElement, useState } from "react";
import {
    FiBookOpen,
    FiCoffee,
    FiCode,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiMenu,
    FiMessageCircle,
    FiX,
    FiYoutube,
} from "react-icons/fi";
import About from "./components/about";
import CalorieCounter from "./components/calorieCounter";
import ScrollToTopButton from "./components/scrollToTopButton";
import * as Styled from "./appShell";

const footerLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FiGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FiCode },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FiLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FiFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FiYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiMessageCircle },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FiHeart },
];

const externalLinkProps = (href) => (href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" });

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const year = new Date().getFullYear();

    const closeMenu = () => setMenuOpen(false);

    return (
        <Styled.Shell>
            <Styled.Header>
                <Styled.HeaderInner>
                    <Styled.Brand href="#tracker" onClick={closeMenu} aria-label="Calorie Counter home">
                        <Styled.Logo src={`${import.meta.env.BASE_URL}logo.png`} alt="Calorie Counter logo" />
                        <Styled.BrandText>
                            <Styled.BrandName>Calorie Counter</Styled.BrandName>
                            <Styled.BrandHint>Simple daily meal tracking</Styled.BrandHint>
                        </Styled.BrandText>
                    </Styled.Brand>

                    <Styled.Nav $open={menuOpen} id="primary-navigation" aria-label="Primary navigation">
                        <Styled.NavLink href="#tracker" onClick={closeMenu}><FiBookOpen aria-hidden="true" /> Tracker</Styled.NavLink>
                        <Styled.NavLink href="#about" onClick={closeMenu}><FiMessageCircle aria-hidden="true" /> About</Styled.NavLink>
                    </Styled.Nav>

                    <Styled.MenuButton type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
                        {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </Styled.MenuButton>
                </Styled.HeaderInner>
            </Styled.Header>

            <main>
                <section id="tracker">
                    <CalorieCounter />
                </section>
                <section id="about">
                    <About />
                </section>
            </main>

            <ScrollToTopButton />

            <Styled.Footer>
                <div>
                    Copyright &copy; {year}{" "}
                    <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a>
                </div>
                <Styled.FooterLinks aria-label="Social and support links">
                    {footerLinks.map(({ label, href, icon: Icon }) => (
                        <Styled.FooterIconLink key={label} href={href} title={label} aria-label={label} {...externalLinkProps(href)}>
                            {createElement(Icon, { "aria-hidden": "true" })}
                            <Styled.ScreenReaderOnly>{label}</Styled.ScreenReaderOnly>
                        </Styled.FooterIconLink>
                    ))}
                </Styled.FooterLinks>
            </Styled.Footer>
        </Styled.Shell>
    );
}
