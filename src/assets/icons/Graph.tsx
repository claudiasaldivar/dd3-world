type HelpProps = {
  isDarkTheme: boolean
}; 

const Graph = ({ isDarkTheme}: HelpProps) => {
  return (

      <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.93549" y="6" width="29.6129" height="24" rx="2" fill={`${isDarkTheme ? 'white' : 'black'}`} fillOpacity="0.49"/>
        <path d="M13.1613 15L13.1613 24" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.7419 18V24" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.3226 12V24" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

  )
}

export default Graph
