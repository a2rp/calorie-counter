import styled from "styled-components";

const linksBorder = "1px solid rgba(170, 206, 226, 0.22)";

export const Shell = styled.div`
    min-height: 100vh;
    padding-top: 78px;
    background: #000;
`;

export const Header = styled.header`
    position: fixed;
    inset: 0 0 auto;
    z-index: 1100;
    border-bottom: 1px solid rgba(170, 206, 226, 0.18);
    background: rgba(0, 0, 0, 0.88);
    backdrop-filter: blur(16px);
`;

export const HeaderInner = styled.div`
    width: min(1120px, calc(100% - 32px));
    min-height: 78px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const Brand = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    color: #f4fbff;
    text-decoration: none;
`;

export const Logo = styled.img`
    width: 42px;
    height: 42px;
    flex: 0 0 auto;
    object-fit: contain;
    border-radius: 11px;
    border: ${linksBorder};
    background: #101d2a;
`;

export const BrandText = styled.span`
    display: grid;
    gap: 2px;
    min-width: 0;
`;

export const BrandName = styled.strong`
    font-size: 16px;
    line-height: 1.1;
    white-space: nowrap;
`;

export const BrandHint = styled.span`
    color: #91a8b9;
    font-size: 11px;
    white-space: nowrap;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 8px;

    @media (width < 640px) {
        position: absolute;
        top: calc(100% + 8px);
        right: 16px;
        left: 16px;
        display: ${({ $open }) => ($open ? "grid" : "none")};
        padding: 10px;
        border: ${linksBorder};
        border-radius: 14px;
        background: rgba(9, 18, 29, 0.98);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
    }
`;

export const NavLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 11px;
    border: 1px solid transparent;
    border-radius: 9px;
    color: #b8c9d6;
    font-size: 13px;
    text-decoration: none;
    transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;

    &:hover,
    &:focus-visible {
        color: #f4fbff;
        border-color: rgba(170, 206, 226, 0.32);
        box-shadow: 0 0 18px rgba(79, 209, 157, 0.12);
    }

    @media (width < 640px) {
        justify-content: flex-start;
    }
`;

export const MenuButton = styled.button`
    display: none;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: ${linksBorder};
    border-radius: 10px;
    color: #f4fbff;
    background: transparent;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid #4fd19d;
        outline-offset: 3px;
    }

    @media (width < 640px) {
        display: inline-flex;
    }
`;

export const Footer = styled.footer`
    width: min(1120px, calc(100% - 32px));
    margin: 0 auto;
    padding: 28px 0 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-top: 1px solid rgba(170, 206, 226, 0.18);
    color: #91a8b9;
    font-size: 12px;

    a {
        color: #e7f1f8;
        font-weight: 600;
    }

    @media (width < 720px) {
        align-items: flex-start;
        flex-direction: column;
    }
`;

export const FooterLinks = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 8px;

    @media (width < 720px) {
        justify-content: flex-start;
    }
`;

export const FooterIconLink = styled.a`
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: ${linksBorder};
    border-radius: 9px;
    color: #c8d8e2;
    transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;

    &:hover,
    &:focus-visible {
        color: #4fd19d;
        border-color: rgba(79, 209, 157, 0.65);
        box-shadow: 0 0 16px rgba(79, 209, 157, 0.16);
    }
`;

export const ScreenReaderOnly = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;
