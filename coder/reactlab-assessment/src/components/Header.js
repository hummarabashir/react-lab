import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
    {
      icon: faEnvelope,
      id: 'email',
      url: "mailto: hello@example.com",
    },
    {
      icon: faGithub,
      id: 'github',
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      id: 'linkedin',
      url: "https://www.linkedin.com",
    },
    {
      icon: faMedium,
      id: 'medium',
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      id: 'stackoverflow',
      url: "https://stackoverflow.com",
    },
  ];

const Header = () => {
    const headerRef = useRef();
    const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);
    const handleScroll = (e) => {
        if (window.pageYOffset - scrollPosition > 0) {
            headerRef.current.style.transform = "translateY(-200px)";
        } else {
            headerRef.current.style.transform = "translateY(0px)";
        }
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener("scroll", handleScroll);
        };
        watchScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Box
            position="fixed"
            zIndex={100}
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            ref={headerRef}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        {/* Add social media links based on the `socials` data */}
                        <HStack spacing={6}>
                        {socials.map((social) => (
                            <button
                                className={"social-button"}
                                key={social.id}
                                onClick={() =>
                                    window.open(social.url, "_blank").focus()
                                }
                            >
                                <FontAwesomeIcon
                                    icon={social.icon}
                                    size={"2x"}
                                />
                            </button>
                        ))}
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8} fontWeight= 'bold' fontSize= '1.1em'>
                            {/* Add links to Projects and Contact me section */}
                            <a 
                                href={"/#projects"}
                                onClick={() => {
                                    handleClick("projects")();
                                }}
                            >
                                Projects
                            </a>
                            <a
                                href={"/#contact-me"}
                                onClick={() => {
                                    handleClick("contactme")();
                                }}
                            >
                                Contact me
                            </a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};
export default Header;
