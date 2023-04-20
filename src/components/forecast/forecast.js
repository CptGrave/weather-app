import { 
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel 
} from "react-accessible-accordion";

const WEEK_DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

export default function Forecast({ data }) {

  const dayOfTheWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayOfTheWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayOfTheWeek));
  
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img alt="weather" className="icon-small" src={require(`../../icons/${item.weather[0].icon}.png`)}></img>
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}

      </Accordion>
    </>
  )
}