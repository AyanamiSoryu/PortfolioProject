import './componentsContainer.css'
import React from 'react'

interface ComponentContainerProps {
  children: React.ReactNode
}

export const ComponentContainer = (props: ComponentContainerProps) => <div className="componentContainer">{props.children}</div>
// style={{height: `100%`, width: `100%`, flexShrink: '1', flex: 'auto'}}
