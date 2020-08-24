import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`
export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 700;
    color: #000;
    color: ${props => props.theme.text};
  }
`

const wiggle = keyframes`
  0% {transform: rotate(0deg); }
  25% {transform: rotate(10deg); }
  50% {transform: rotate(-10deg); }
  100% {transform: rotate(0deg); }
`

export const LightSwitch = styled.p`
  font-size: 1.8rem;
  transition: 0.2s ease;
  :hover {
    font-size: 2.8rem;
    animation: ${wiggle} 1s ease infinite;
  }
`

export const Menu = styled.div`
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
      background: ${props => props.theme.text};
      margin: 8px;
    }
  }
`
