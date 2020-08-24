import React, { useState } from "react"
import { Link } from "gatsby"
//Styled Components
import { Container, Flex } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  NavList,
  NavFooter,
  NavVideos,
  CloseNav,
} from "../styles/navigationStyles"
//Icons
//Framer Motion
import { motion, AnimatePresence } from "framer-motion"

const navRoutes = [
  {
    id: 0,
    title: "Kemosabe",
    path: "/kemosabe",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "Not Only — But Also",
    path: "/notonlybutalso",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "All Nippon Airways",
    path: "/ana",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "Human Magazine",
    path: "/human",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 4,
    title: "Playground",
    path: "/playground",
    video: "50-beaches.mp4",
  },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "featured-video.mp4",
    key: "0",
  })

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ y: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ y: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2 to="/">Projects</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(route => (
                    <motion.li
                      key={route.id}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      onHoverStart={() =>
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: route.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: route.id,
                        })
                      }
                    >
                      <Link to={`${route.path}`}>
                        <motion.div
                          initial={{ x: 0 }}
                          className="link"
                          whileHover={{
                            x: 25,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <p>guymunday@gmail.com</p>
                  <p>+44 (0) 7938878255</p>
                </Flex>
              </NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                  className="reveal"
                ></motion.div>
                <motion.div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      src={require(`../assets/video/${revealVideo.video}`)}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      loop
                      autoPlay
                    ></motion.video>
                  </AnimatePresence>
                </motion.div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
