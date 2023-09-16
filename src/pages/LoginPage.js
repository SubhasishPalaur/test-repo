
    // var lengthOfLongestSubstring = function() {
    //   console.log(s, "here at the s")
    //   let ans = 0, l = 0, r = 0;
    //   let n = s.length;
    //   let map = new Array(256).fill(-1);
    //   while (r < n) {
    //     console.log(map[s.charCodeAt(r)], r, s.charCodeAt(r))
    //       if (map[s.charCodeAt(r)] != -1) {
    //           l = Math.max(map[s.charCodeAt(r)] + 1, l);
    //       }
    //       map[s.charCodeAt(r)] = r;
    //       ans = Math.max(ans, r - l + 1);
    //       r++;
    //   }
    //   setLogv(ans)
    //   return ans;
    // };
  //   var lengthOfLongestSubstring = function() {
  //     let stack = []
  //     for(let v = 0; v<s.length; v++){
  //       if(s[v]==='('){
  //         stack.push(')')
  //       } else if(s[v] === '{'){
  //         stack.push('}')
  //       }else if(s[v] === '['){
  //         stack.push(']')
  //       }else if( stack.pop() !== s[v]){
  //         return false
  //       }
  //     }
  //     console.log(stack.length)
  //     if(stack.length > 0){
  //       return false
  //     } else{
  //       return true
  //     }
  // };
      // var lengthOfLongestSubstring = function(){
      //   var i=0, j=0, l=0;
      //   var obj = {};
      //   while(i<s.length && j<s.length){
      //     if(!obj[s[i]]){
      //       obj[s[i++]] = 1;
      //       l = Math.max(l, i-j);
      //     } else{
      //       obj[s[j++]] = 0;
      //     }
      //   }
      //   console.log(l)
      //   return l
      // }

      // const memoDemo = useMemo(()=> {
      //   return 4
      // },[])
import React, { useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";

const LoginPage = () => {
    const [logv, setLogv] = useState(0)
    var s=[-1,0,1,2,-1,-4]
    // s = s.sort((a, b)=> a-b);
    // s = new Set(s)
    // s = Array.from(s)
    // [-4, -1, -1, 0, 1, 2]
    console.log("i am at the login page")

      var lengthOfLongestSubstring = function(){
        let v = "anagram"
        for(let i =0; i < v.length; i++){
          
        }
        return 0
      }

      const memoDemo = useMemo(()=> {
        return 4
      },[])

    useEffect(()=>{
      lengthOfLongestSubstring()
    },[])
    return (
        <div style={{height:"100vh"}}>
        <Header>Login Page</Header>
        <OuterDiv>
          <LoginBox>
          <label font-style= "italic">enter your name:</label>
          <input type="text" placeholder="name" name="Name"></input>
          </LoginBox>
        </OuterDiv>
        </div>
    )
}
const Header = styled.h2`
  font-size:20px;
  text-align: center;
`

const LoginBox = styled.div`
  height: 300px;
  width: 300px;
  border: 2px solid #008cff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const InputBox = styled.div`
  height: 20vw; /* 10% of the viewport width */
  width: 20vw; /* 10% of the viewport width */
  border: 1px solid blue;
  border-radius: 5px;

  @media (max-width: 768px) {
    /* Styles for screens up to 768px width */
    height: 25vw;
    width: 25vw;
  }

  @media (max-width: 480px) {
    /* Styles for screens up to 480px width */
    height: 30vw;
    width: 30vw;
  }
`

const OuterDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: black; */
`

export default LoginPage

