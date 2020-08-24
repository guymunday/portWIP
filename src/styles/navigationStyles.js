import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${props => props.theme.pink};
  color: #000;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${props => props.theme.background};
  }
`
export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 3px;
      display: block;
      background: ${props => props.theme.background};
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    top: 72px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      list-style: none;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 600;
      line-height: 1.1;
      flex-grow: 1;
      padding: 20px 0;
      @media (max-height: 600px) {
        padding: 10px;
        font-size: 1.4rem;
      }
      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
      }
    }
  }
`
export const NavFooter = styled.div`
         bottom: 72px;
         position: relative;
         p {
           color: ${props => props.theme.background};
           font-weight: 600;
           font-size: 1.2rem;
           @media (max-width: 768px) {
             font-size: 0.7rem;
           }
         }
       `

export const NavVideos = styled.div`
         position: absolute;
         top: 0;
         bottom: 0;
         left: 25%;
         z-index: -1;
         height: 100%;
         width: 100%;
         background: #000;
         @media (max-width: 600px) {
           display: none;
         }
         .reveal {
           width: 100%;
           background: ${props => props.theme.pink};
           position: absolute;
           top: 0;
           bottom: 0;
           left: 0;
         }

         .video {
           background: #000;
           position: absolute;
           height: 100%;
           margin: 0;
           z-index: -1;
           video {
             height: 100%;
           }
         }
       `
