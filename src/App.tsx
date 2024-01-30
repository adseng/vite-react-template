import {css} from "@emotion/react";

function App() {

  return (
    <>
     <div css={css`
       font-size: 50px;
       background-color: #da5d5d;
     `}
     >
         hello
         <span className={'text-[100px] text-white'}>world</span>
     </div>
    </>
  )
}

export default App
