import Link from "next/link";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    return (
        <div className="footer w-full z-1000 bg-transparent mt-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
                <div className="flex justify-center pt-7 md:flex-row items-center">
                    <nav className="text-[#282525CF] mt-7 flex items-center">
                        <Link href="/" className="text-sm font-light">
                            WHO DOES YOUR HAIR KY
                        </Link>
                        <ul className="flex ml-4 space-x-3 text-sm font-light">
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/terms">Terms</Link>
                            </li>
                            <li>
                                <Link href="/privacy">Privacy</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex ml-2 pt-7  space-x-1">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="hover:text-primary-600"
                        >
                            <FontAwesomeIcon icon={faFacebook} className="h-4 w-4 text-red-600 text-sm font-light" />
                        </a>
                        <a
                            href="https://www.instagram.com/whodoesyourhairky"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-primary-600"
                        >
                            <FontAwesomeIcon icon={faInstagram} className="h-4 w-4 text-red-600 text-sm font-light" />
                        </a>
                    </div>
                </div>
                <div className="mt-0.5 text-center text-xs text-gray-400 flex justify-center space-x-4">
                    <span>© Who Does Your Hair KY. All rights reserved.</span>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/terms">Terms of Service</Link>
                    <Link href="/cookies">Cookie Policy</Link>
                    <a
                        href="https://blarerob-dev.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Website created by <span className='text-red-400 font-light'>Blare Robinson</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;