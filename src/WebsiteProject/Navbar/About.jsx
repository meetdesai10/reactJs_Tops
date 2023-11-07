import React from 'react'
import HomeAboutCommon from './HomeAboutCommon'
import webabout from "../../Images/webimg.webp";

export default function About() {
  return (
    <div>
      <HomeAboutCommon welcome="Welcome to About Pgae" imgsrc={webabout} path="/contact" btnname="Contact Now"/>
    </div>
  )
}
