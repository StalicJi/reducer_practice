import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items =[
    {
      id:'sdfd',
      label:'Can I use React on a project?',
      content:'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id:'fgfsgdgsd',
      label:'Can I use Javascript on a project?',
      content:'You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want.'
    },
    {
      id:'llojkorg',
      label:'Can I use CSS on a project?',
      content:'You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want.'
    }
  ];

  return<Accordion itemss={items}/>
}

export default AccordionPage;
