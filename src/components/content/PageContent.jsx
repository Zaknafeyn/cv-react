import React from 'react'
import { About } from 'components/content/about/About'
import { Skills } from 'components/content/skills/Skills'
import { Experience } from 'components/content/experience/Experience'
import { Education } from 'components/content/education/Education'
import { Contact } from 'components/content/contact/Contact'

import './PageContent.css'

export const PageContent = () => (
  <main>
    <About />
    <Skills />
    <Experience />
    <Education />
    <Contact />
  </main>
)
