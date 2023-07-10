import React from 'react'
import './mainContainer.css'

export type MainContainerProps = React.PropsWithChildren
export const MainContainer: React.FC<MainContainerProps> = (props) => {
  const { children } = props
  // if(!!children && typeof props.children !== null && props.children === "object") {
  //     children.forEach()
  // }
  return <div className="mainContainer">{children}</div>
}
