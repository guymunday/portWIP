import React from "react"
import Layout from "../components/layout"

//Components
import HomeContent from "../components/homePage/HomeContent"
import HomeKemosabe from "../components/homePage/HomeKemosabe"
import HomeNotOnly from "../components/homePage/HomeNotOnly"

//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"



const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  return (
    <Layout>
      {console.log("props", props)}
      <HomeContent />
      <HomeKemosabe onCursor={onCursor} />
      <HomeNotOnly onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
