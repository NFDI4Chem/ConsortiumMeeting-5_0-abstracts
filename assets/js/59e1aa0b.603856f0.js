"use strict";(self.webpackChunkcm_5_0_abstracts=self.webpackChunkcm_5_0_abstracts||[]).push([[83],{1145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(4848),s=n(8453);const a={title:"N.Tielker",description:"Insights from the euroSAMPL blind prediction challenge for the next NFDI4Chem phase"},r="Insights from the euroSAMPL blind prediction challenge for the next NFDI4Chem phase",o={id:"posters/N_Tielker",title:"N.Tielker",description:"Insights from the euroSAMPL blind prediction challenge for the next NFDI4Chem phase",source:"@site/docs/20_posters/20_N_Tielker.md",sourceDirName:"20_posters",slug:"/posters/N_Tielker",permalink:"/ConsortiumMeeting-5_0-abstracts/docs/posters/N_Tielker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"N.Tielker",description:"Insights from the euroSAMPL blind prediction challenge for the next NFDI4Chem phase"},sidebar:"tutorialSidebar",previous:{title:"Chia-Lin",permalink:"/ConsortiumMeeting-5_0-abstracts/docs/posters/Chia-Lin"},next:{title:"Oliver Koepler",permalink:"/ConsortiumMeeting-5_0-abstracts/docs/posters/Oliver_Koepler"}},l={},d=[{value:"N. Tielker<sup>1</sup>, P. Kibies<sup>1</sup>, M. Urban<sup>1</sup>, B. Hein-Janke<sup>2</sup>, M. Lim<sup>3</sup>, J. Gretz<sup>4</sup>, R. A. Mata<sup>2</sup>,   P. Czodrowski<sup>3</sup>, S. M. Kast<sup>1</sup>",id:"n-tielker1-p-kibies1-m-urban1-b-hein-janke2-m-lim3-j-gretz4-r-a-mata2---p-czodrowski3-s-m-kast1",level:4},{value:"<sup>1</sup>TU Dortmund University",id:"1tu-dortmund-university",level:5},{value:"<sup>2</sup>Georg August University of G\xf6ttingen,",id:"2georg-august-university-of-g\xf6ttingen",level:5},{value:"<sup>3</sup>Johannes Gutenberg University Mainz, 4Ruhr University Bochum",id:"3johannes-gutenberg-university-mainz-4ruhr-university-bochum",level:5},{value:"E-Mail:",id:"e-mail",level:6}];function h(e){const t={a:"a",h1:"h1",h4:"h4",h5:"h5",h6:"h6",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"insights-from-the-eurosampl-blind-prediction-challenge-for-the-next-nfdi4chem-phase",children:"Insights from the euroSAMPL blind prediction challenge for the next NFDI4Chem phase"})}),"\n",(0,i.jsxs)(t.h4,{id:"n-tielker1-p-kibies1-m-urban1-b-hein-janke2-m-lim3-j-gretz4-r-a-mata2---p-czodrowski3-s-m-kast1",children:["N. Tielker",(0,i.jsx)("sup",{children:"1"}),", P. Kibies",(0,i.jsx)("sup",{children:"1"}),", M. Urban",(0,i.jsx)("sup",{children:"1"}),", B. Hein-Janke",(0,i.jsx)("sup",{children:"2"}),", M. Lim",(0,i.jsx)("sup",{children:"3"}),", J. Gretz",(0,i.jsx)("sup",{children:"4"}),", R. A. Mata",(0,i.jsx)("sup",{children:"2"}),",   P. Czodrowski",(0,i.jsx)("sup",{children:"3"}),", S. M. Kast",(0,i.jsx)("sup",{children:"1"})]}),"\n",(0,i.jsxs)(t.h5,{id:"1tu-dortmund-university",children:[(0,i.jsx)("sup",{children:"1"}),"TU Dortmund University"]}),"\n",(0,i.jsxs)(t.h5,{id:"2georg-august-university-of-g\xf6ttingen",children:[(0,i.jsx)("sup",{children:"2"}),"Georg August University of G\xf6ttingen,"]}),"\n",(0,i.jsxs)(t.h5,{id:"3johannes-gutenberg-university-mainz-4ruhr-university-bochum",children:[(0,i.jsx)("sup",{children:"3"}),"Johannes Gutenberg University Mainz, 4Ruhr University Bochum"]}),"\n",(0,i.jsx)(t.h6,{id:"e-mail",children:"E-Mail:"}),"\n",(0,i.jsx)(t.p,{children:'Compliance of computational chemistry with the FAIR (Findable, Accessible, Interoperable, and Reusable) principles for sustainable research data management (RDM) is vital for maximizing reproducibility of data and results, and to easily verify and use newly developed methods. For the combination of FAIR data with data reproducibility standards to make RDM even "fairer", we choose the acronym FAIR+R. This includes methods such as the automated or manual annotation of generated research data with relevant author- and domain-specific metadata, shared indexing between experimental and computational data, persistent storage, and the transparent and automated analysis of raw computational data.'}),"\n",(0,i.jsx)(t.p,{children:"As a testbed for advancing and encouraging the adoption of FAIR+R RDM methods, we chose a blind prediction challenge as a community task for testing models in the spirit of the SAMPL (Statistical Assessment of the Modeling of Proteins and Ligands) series [1]. The first euroSAMPL challenge [2] (euroSAMPL1) involved experimental aqueous pKa measurements of small drug-like molecules done in-house with computational predictions submitted over a timeframe of 3 months. Compounds were selected according to novelty, existence of only one macroscopic protonation step in the pH range between 2 and 12, limited number of tautomeric microstates, and chemical diversity. Participants were asked to submit only one \u201cranked\u201d prediction per compound and more \u201cunranked\u201d values to cover situations where more than one macroscopic value was identified theoretically within the experimental range. All kinds of methods were allowed, ranging from atomistic quantum mechanics-based models to empirical or machine learning methodologies."}),"\n",(0,i.jsx)(t.p,{children:"Processing and analysis of participants\u2019 data was automated, with final scores weighting not only the accuracy of the computed values but also the level of compliance to FAIR+R principles. The latter was determined by questionnaire-based peer evaluation. The resulting \u201cFAIRscores\u201d were added to the prediction scores to generate the final ranking. All data and statistical analyses are collected in a GitLab repository [3]. A peer-reviewed publication in the journal Physical Chemistry Chemical Physics will follow soon."}),"\n",(0,i.jsx)(t.p,{children:"Collectively, insights gathered from the euroSAMPL1 challenge in terms of challenge design and technical implementation stimulate ideas for future rounds. This applies not only to the submission of data, but overall how the process is designed in order to remove (as far as possible) human error. These observations pave the way for activities (improvement of ontologies, standardization of computational metadata, digitalization of workflows,...) in a second NFDI4Chem phase."}),"\n",(0,i.jsxs)(t.p,{children:["[1]\t",(0,i.jsx)(t.a,{href:"https://www.samplchallenges.org",children:"https://www.samplchallenges.org"})]}),"\n",(0,i.jsxs)(t.p,{children:["[2]\t",(0,i.jsx)(t.a,{href:"https://qmbench.net/eurosampl/",children:"https://qmbench.net/eurosampl/"})]}),"\n",(0,i.jsxs)(t.p,{children:["[3]\t",(0,i.jsx)(t.a,{href:"https://gitlab.tu-dortmund.de/kast_ccb/eurosampl/challenge",children:"https://gitlab.tu-dortmund.de/kast_ccb/eurosampl/challenge"})]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);