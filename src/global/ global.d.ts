declare module '*.module.less' {
  const classes: Record<string, string>
  export default classes
}
declare module '*.scss' {
  const classNames: Record<string, string>
  export default classNames
}
