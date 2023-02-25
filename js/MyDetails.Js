console.log("Inside MyDetails.js");
//Testimony
let testimonies = [
    {
        "ClientName":"Linjo O.",
        "Profession":"Global Head of Customer Contact Centres at Cathay Pacific Airways",
        "Text":"Vijender is an experienced workforce planning manager and was responsible for the WFM function for multiple markets under my remit in ASP. He added significant value to the overall planning process with his analytical approach, discerning eye for detail and a positive can- do attitude. What stood out was he was always willing to contribute outside his immediate functional area and was involved in many cross- functional streamlining initiatives during his stint with HSBC. I wish him all the very best!"
    },
    {
        "ClientName":"Prem Sudheer Chuluka",
        "Profession":"Vice President- Workforce Optimisation, Capacity Planning & Global Command Center at HSBC",
        "Text":"Vijender worked with me for 4 years and a great resource.... with his out of box thinking he has benefited the organisation greatly. Optimisation at every step is what he looks at.....this makes him different and ensures to prioritise organisations benefits."
    },
    {
        "ClientName":"Ankur B.",
        "Profession":"Director Of Workforce Management at TaskUs",
        "Text":"Vijender has been a down to earth, easy to work with and a powerhouse of Workforce Management professional. Working and learning with him has been so easy and fun. I wish you all the very best for your future endeavors Vijender!!!Vijender has been a down to earth, easy to work with and a powerhouse of Workforce Management professional. Working and learning with him has been so easy and fun. i wish you all the very best for your future endeavors Vijender!!!"
    },
    {
        "ClientName":"Mitesh Pawaskar",
        "Profession":"Practice Head - WFM & GamificationPractice Head - WFM & Gamification at EKA Consultants India",
        "Text":"Vijender is a seasoned workforce management professional and possesses great leadership skills. He has worked with me on various projects across 4+ years. he brings in great deal of innovation and is quick to provide solutions to complex problems. His strengths lie in planning, scheduling and automation. He is an asset to have in your team."
    },
    {
        "ClientName":"Deepak Bansody",
        "Profession":"Founder & CEO @ Firstcallteleservices BPM KPO LPO",
        "Text":"Vijender is detail oriented manager and has a good analytical skills. He used to manage our WFM team in kolkata.. His knowledge and learning ability and adopt to changes are his assest's. A good people person & a good leader who can motivate his team and supports at all times. His assocaition with our company was valuable. I wish his alll the success in his next comming projects.."
    },
    {
        "ClientName":"Sunil Sharma",
        "Profession":"Vice President Operations at Teleperformance D.I.B.S",
        "Text":"Vijender is highly competent person who loves going beyond call of duty to accomplish things. innovative and talented that he is bring in people management skills and works with team building spirit to carry process to new hights. A wonderful resource for any team."
    } 
]

// Core Competencies
let corecompetencies = [
    "Developing strong partnerships and fostering a collaborative culture with clients to achieve shared goals.",
    "Building and leading a high-performing team that supports client programs, products, and services.",
    "Demonstrating exceptional decision-making skills with a focus on high-impact outcomes.",
    "Possessing superior organizational skills and the ability to effectively prioritize and manage multiple tasks simultaneously.",
    "Anticipating future business needs and proactively implementing measures to address them."
];

let projects =[
        {
        "Title":"TP100 Goal",
        "Text": "Seller support Amazon has a KPI, which defines that 100% of the cases needs to be handled within 2X of TAT, the program was missing the SLA for 2 hrs. and I took proactive measures to address this issue by deploying a technical solution that focused on providing excellent customer service and ensuring 100% of cases were handled within the 2X TAT KPI. This technology development was instrumental in meeting the KPI for the second half of 2021, resulting in 100% of customer cases being handled within the established timeframe."
        },
        {
        "Title":"Cross FLEX project",
        "Text": "To effectively meet service level agreement (SLA) goals and efficiently optimize utilization and cost, I developed a flex pool model to manage the volatility of volume fluctuations throughout the year. This model was designed to provide support across multiple functions and handle unexpected volume spikes in a efficient manner.Thereby helping to meet SLA goals and reduce costs."
        },
        {
        "Title":"WFM deployment for programs",
        "Text": "Successfully transitioned three major programs (ABO, BPBO, and Restricted Products) in 2021 and deployed workforce management (WFM) support for these programs. This involved smoothly transferring program responsibilities and ensuring that adequate WFM support was in place to meet the demands of these programs."
        },
        {
        "Title":"Project RPM",
        "Text": "At Amazon, developed an advanced forecasting tool that utilizes artificial intelligence to provide accurate predictions for individual programs. The tool was initially created using Excel, and later transitioned to Python. The tool is capable of identifying the best forecasting model and time horizon by evaluating 16 different statistical models. This innovative solution has greatly improved the accuracy of forecasts, provided valuable insights and enabled better decision making."
        },
        {
        "Title":"Project Genie",
        "Text":"Due to limitations with the scheduling tools (ASPECT and Genesis), I created a custom, in-house Excel-based scheduling tool to meet all scheduling requirements. This tool not only addressed basic scheduling needs but also took into account country-specific labor policies. This solution effectively addressed the scheduling requirements and provided a more comprehensive solution for scheduling needs and reduce the manual efforts by 80%."
        },
        {
        "Title":"India Contact Center Routing Optimization",
        "Text":"At HSBC in 2016, I received recognition for a project focused on optimizing the routing of calls in the India contact center. The project resulted in a 3% FTE efficiency save and was recognized under the \"Play Your Part\" program. The project focused on routing calls from the Advance and Premier segments to different groups to increase call capacity and improve overall efficiency."
        },
        {
        "Title":"Recognizing of customer as per RMN",
        "Text":"The project involved implementing a feature that allowed customers to be recognized through their registered mobile numbers. This led to an increase in the number of calls from verified customers and a reduction in wait times by 90 seconds. The project was a success, resulting in significant FTE savings of 6% and further enhancing the overall efficiency of the contact center." 
        },
        {
        "Title":"OOG Lite automation",
        "Text": "The Philippines HSBC contact center utilized a manual template called \"OOG\" with 17 different templates for agents. I automated this process by creating a shortcut key that accessed the CRM page, copied the information into Excel in the prescribed format, and generated the necessary MI for the backend. This streamlined the process and made it more efficient for the agents."
        },
        {
        "Title":"HASE Shared Service deployment",
        "Text": "With Hang Seng Bank ( Company of HSBC), I led and managed the deployment and establishment of the Shared Services team, which included Workforce Management (WFM), GCC, and R & A. I was on a short-term on-site assignment from April 2019 to August 2019, working to streamline WFM operations and improve the overall efficiency of the process. This has resulted in a more integrated and effective approach to serving our customers." 
        },
        {
        "Title":"Efficiency Project – Project SLIM",
        "Text": "Australia, India, and Indonesia previously operated as isolated teams for each respective process. To improve efficiency, I identified opportunities for consolidation, especially for night shifts, and merged the FTE demand for these shifts across the markets. This allowed us to train a limited number of agents to handle a higher volume of work. The effort resulted in a significant reduction in FTE with India recording a benefit of 3 FTE, Australia acknowledging a benefit of 5 FTE, and Indonesia registering a benefit of 17 FTE."
        }
]

icon = '<i class="far fa-check-circle text-primary me-3"></i>'

document.getElementById('TestimonyBlock').getElementsByTagName('h5')[0].innerHTML = testimonies[0].ClientName;
document.getElementById('TestimonyBlock').getElementsByTagName('p')[0].innerHTML = testimonies[0].Text;
document.getElementById('TestimonyBlock').getElementsByTagName('span')[0].innerHTML = testimonies[0].Profession;
document.getElementById('TestimonyBlockimg').setAttribute('src','img/testimonial-unknown.jpg');
for(let i=1;i<testimonies.length;i++){
    const node = document.getElementById("TestimonyBlock");
    const clone = node.cloneNode(true);
    id = 'TestimonyBlock-'+i;
    clone.setAttribute('id',id);
    document.getElementById("TestimonySection").appendChild(clone);
    document.getElementById(id).getElementsByTagName('h5')[0].innerHTML = testimonies[i].ClientName;
    document.getElementById(id).getElementsByTagName('p')[0].innerHTML = testimonies[i].Text;
    document.getElementById(id).getElementsByTagName('span')[0].innerHTML = testimonies[i].Profession;
    document.getElementById(id).getElementsByTagName('img')[0].setAttribute('src','img/testimonial-unknown.jpg');
}

document.getElementById('corecompetencies').getElementsByTagName('p')[0].innerHTML = icon+corecompetencies[0];
for(let i=1;i<corecompetencies.length;i++){
    const node = document.getElementById("corecompetenciesblock");
    const clone = node.cloneNode(true);
    id = 'corecompetenciesblock-'+i;
    clone.setAttribute('id',id);
    document.getElementById("corecompetencies").appendChild(clone);
    document.getElementById(id).innerHTML = icon+corecompetencies[i];
}

document.getElementById("ProjectBlock").getElementsByTagName('h4')[0].innerHTML = projects[0].Title;
document.getElementById("ProjectBlock").getElementsByTagName('span')[0].innerHTML = projects[0].Text;
for(let i=1;i<projects.length;i++){
    const node = document.getElementById("ProjectBlock");
    const clone = node.cloneNode(true);
    id = 'ProjectBlock-'+i;
    clone.setAttribute('id',id);
    document.getElementById("ProjectSection").appendChild(clone);
    document.getElementById(id).getElementsByTagName('h4')[0].innerHTML = projects[i].Title;
    document.getElementById(id).getElementsByTagName('span')[0].innerHTML = projects[i].Text;

}

document.getElementById("leftabout").getElementsByTagName('h1')[0].innerHTML = 19;
document.getElementById("leftabout").getElementsByTagName('h3')[0].innerHTML = "of working experience as a WFM professional";

document.getElementById("leftabout1").innerHTML = icon+'A self-motivated and hardworking individual who is constantly involved in self-improvement and always ready to take up challenging tasks in order to test my skills and improve them further.';
document.getElementById("leftabout2").innerHTML = icon+'An accomplished professional with rich distinction of researching in areas of operations, resource planning, forecasting, scheduling, process improvement, workforce, process development. Technically astute with experience in telephony systems Technology.';
document.getElementById("leftabout3").innerHTML = icon+'Experienced in planning & budgeting with focus on P&L for large operations. Well versed with Call center Technologies such as CMS, Symposium, & WFM software Blue pumpkin, IEX, Prohans, Work flex etc.';

var names = document.getElementById('name'); 
var rolesList = document.getElementById('rolesList'); 
var CVLink = document.getElementById('CVLink'); 
var youTubeVideoLink = document.getElementById('youTubeVideoLink'); 
var Address = document.getElementById('Address'); 
var phoneno = document.getElementById('phoneno'); 
var emailid = document.getElementById('emailid'); 
var emailincontactform = document.getElementById('emailincontactform');
var contactformtwitter= document.getElementById('contactformtwitter');
var contactformfacebook= document.getElementById('contactformfacebook');
var contactformgithub= document.getElementById('contactformgithub');
var contactformlinkedin= document.getElementById('contactformlinkedin');
var linkformap = document.getElementById('linkformap');
var copyright1 = document.getElementById('copyright1');
var copyright2 = document.getElementById('copyright2');

// document.title = "Harshit Muhal";
document.title = "Vijender S. Bisht";
names.innerText = document.title;
rolesList.innerHTML = "Senior Program Manager, Workforce Management Expert, Data Analyst, Planner & Forecaster";
Address.innerText ='Gachibowli, Hyderabad, India';
phoneno.innerText ='+91 7982781805';
emailid.innerText ='hrshtmuhal8@gmail.com';
emailincontactform.setAttribute('href','mailto:hrshtmuhal8@gmail.com');
contactformtwitter.setAttribute('href','https://twitter.com/Harshit_muhal');
contactformfacebook.setAttribute('href','https://www.facebook.com/harshit.muhal');
contactformgithub.setAttribute('href','https://github.com/harshitmuhal');
contactformlinkedin.setAttribute('href','https://www.linkedin.com/in/harshitmuhal/');
linkformap.setAttribute('src',"https://www.google.com/maps/embed/v1/place?key=AIzaSyDNcjNwgkoT71i-uXQTiGR8wLfwg12tQGA&q=Gachibowli,Hyderabad+India");
copyright1.innerText = names.innerText;
copyright2.innerText = names.innerText;
CVLink.setAttribute('href','https://www.facebook.com/harshit.muhal');
document.getElementById('about').getElementsByTagName('a')[0].setAttribute('href',CVLink.getAttribute('href'));
// rolesList.innerHTML = "Software Engineer, Backend Developer, Machine Learning Enthusiast, Competitive Coder";

console.log("Exiting MyDetails.js");
