import React from 'react'

const HtmlToJsx = () => {
  return (
    <div>


{/*  Container div with inline styles  */}
<div className="container" style={{backgroundColor: "#f0f0f0" , padding: "20px"}}>
  {/* <!-- Heading with inline style --> */}
  <h1 style={{color: "#333"}}>Welcome to My Website</h1>
  {/* <!-- Paragraph with nested elements and styled link --> */}
  <p>This is a paragraph with <strong>bold text</strong> and a <a href="https://example.com" style={{color: "blue" , textDecoration: "none"}}>link</a>.</p>
  {/* <!-- Unordered list --> */}
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  {/* <!-- Image with inline style --> */}
  <img src="https://images.unsplash.com/photo-1717160111930-b1a7ba2baf52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="An example image" style={{width: "100px" , height:"100px"}} />
  {/* <!-- Form with various input types --> */}
  <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <input type="submit" value="Submit" style={{backgroundColor: "green" , color: "white"}} />
  </form>
</div>
















    </div>
  )
}

export default HtmlToJsx